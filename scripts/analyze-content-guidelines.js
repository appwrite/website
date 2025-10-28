#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PATHS_TO_ANALYZE = [
    'src/routes/docs',
    'src/routes/integrations',
    'src/routes/changelog'
];

const ISSUES = {
    ERROR: 'ERROR',
    WARNING: 'WARNING',
    INFO: 'INFO'
};

// Get severity level from environment or default to WARNING
const SEVERITY_LEVEL = process.env.SEVERITY_LEVEL || 'WARNING';
const SHOW_INFO = SEVERITY_LEVEL === 'INFO';

// Check if specific files are provided as arguments
const specificFiles = process.argv.slice(2).filter(arg => arg.endsWith('.markdoc'));

class ContentAnalyzer {
    constructor() {
        this.violations = [];
        this.filesAnalyzed = 0;
    }

    /**
     * Add a violation to the list
     */
    addViolation(file, line, level, rule, message, context = '') {
        // Skip INFO violations if not in verbose mode
        if (level === ISSUES.INFO && !SHOW_INFO) {
            return;
        }
        
        this.violations.push({
            file: path.relative(process.cwd(), file),
            line,
            level,
            rule,
            message,
            context: context.trim()
        });
    }

    /**
     * Analyze a single markdoc file
     */
    analyzeFile(filePath) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const lines = content.split('\n');

        this.filesAnalyzed++;

        // Check for frontmatter
        const hasFrontmatter = content.startsWith('---');
        if (!hasFrontmatter) {
            this.addViolation(filePath, 1, ISSUES.ERROR, 'MISSING_FRONTMATTER', 
                'File should have frontmatter at the beginning');
        }

        // Analyze line by line
        let inFrontmatter = false;
        let inCodeBlock = false;
        let frontmatterEnded = false;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const lineNum = i + 1;

            // Track frontmatter boundaries
            if (line.trim() === '---') {
                if (!frontmatterEnded && i === 0) {
                    inFrontmatter = true;
                    continue;
                } else if (inFrontmatter && i > 0) {
                    inFrontmatter = false;
                    frontmatterEnded = true;
                    continue;
                }
            }

            // Skip frontmatter and code blocks
            if (inFrontmatter) continue;
            
            // Track code blocks
            if (line.trim().startsWith('```')) {
                inCodeBlock = !inCodeBlock;
                continue;
            }
            if (inCodeBlock) continue;

            // Check for headings
            if (line.match(/^#+\s/)) {
                this.checkHeading(filePath, lineNum, line);
            }

            // Check for links
            if (line.includes('[') && line.includes('](')) {
                this.checkLinks(filePath, lineNum, line);
            }

            // Check for placeholder syntax
            if (line.includes('[') && line.includes(']') && !line.includes('](')) {
                this.checkPlaceholders(filePath, lineNum, line);
            }

            // Check for possession/ownership language
            this.checkPossession(filePath, lineNum, line);

            // Check for sentence structure
            if (line.trim() && !line.match(/^[#*\->`{%]/)) {
                this.checkSentenceStructure(filePath, lineNum, line);
            }

            // Check for proper image syntax
            if (line.includes('![')) {
                this.checkImageSyntax(filePath, lineNum, line);
            }

            // Check for extended markdoc components
            if (line.includes('{%')) {
                this.checkMarkdocComponents(filePath, lineNum, line);
            }
        }
    }

    /**
     * Check heading formatting
     */
    checkHeading(file, line, text) {
        // Check for sentence case
        const headingMatch = text.match(/^(#+)\s+(.+?)(\s+{%\s*#[^}]+%})?$/);
        if (headingMatch) {
            const level = headingMatch[1].length;
            const headingText = headingMatch[2].trim();
            const hasId = headingMatch[3];

            // Check for title case (multiple capital letters that indicate title case)
            const words = headingText.split(/\s+/);
            const capitalWords = words.filter(w => w.length > 3 && w[0] === w[0].toUpperCase() && w !== w.toUpperCase());
            
            if (capitalWords.length > 1) {
                this.addViolation(file, line, ISSUES.WARNING, 'TITLE_CASE_HEADING',
                    'Headings should use sentence case, not title case', text);
            }

            // Check for gerunds (words ending in -ing)
            if (headingText.match(/\b\w+ing\b/)) {
                this.addViolation(file, line, ISSUES.INFO, 'GERUND_IN_HEADING',
                    'Consider using root verb instead of gerund (e.g., "Create" not "Creating")', text);
            }

            // Check for ID in headings (should have IDs)
            if (level <= 3 && !hasId && headingText.length > 5) {
                this.addViolation(file, line, ISSUES.WARNING, 'MISSING_HEADING_ID',
                    'Headings should have ID labels for linking and TOC generation', text);
            }
        }
    }

    /**
     * Check link formatting
     */
    checkLinks(file, line, text) {
        // Find all markdown links
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        let match;

        while ((match = linkRegex.exec(text)) !== null) {
            const linkText = match[1];
            const linkUrl = match[2];

            // Check for unclear link text like "here", "click here", "learn more"
            if (linkText.toLowerCase().match(/^(here|click here|this|learn more)$/)) {
                this.addViolation(file, line, ISSUES.ERROR, 'UNCLEAR_LINK_TEXT',
                    'Link text should be descriptive, avoid "here", "click here", etc.', text);
            }
        }
    }

    /**
     * Check placeholder syntax
     */
    checkPlaceholders(file, line, text) {
        // Check for square bracket placeholders in code contexts
        if (text.includes('[') && text.includes(']') && !text.includes('](')) {
            // Look for patterns like [PLACEHOLDER] or [ID]
            const placeholderMatch = text.match(/\[([A-Z_]+)\]/);
            if (placeholderMatch && !text.includes('```')) {
                this.addViolation(file, line, ISSUES.WARNING, 'SQUARE_BRACKET_PLACEHOLDER',
                    'Use angle brackets <> for placeholders instead of square brackets []', text);
            }
        }
    }

    /**
     * Check for possession language
     */
    checkPossession(file, line, text) {
        // Check for possessive pronouns
        const possessivePatterns = [
            /\bour\s+(API|documentation|docs|product|platform|service|console)\b/i,
            /\bour\s+(\w+)\s+(API|documentation|docs|product)\b/i
        ];

        for (const pattern of possessivePatterns) {
            if (pattern.test(text)) {
                this.addViolation(file, line, ISSUES.WARNING, 'POSSESSIVE_LANGUAGE',
                    'Avoid possessive language like "our API", use "the API" instead', text);
            }
        }
    }

    /**
     * Check sentence structure
     */
    checkSentenceStructure(file, line, text) {
        const trimmed = text.trim();
        
        // Skip very short lines, list items, and special syntax
        if (trimmed.length < 20 || trimmed.match(/^[-*\d.]/)) {
            return;
        }

        // Check for action-first structure in instructional content
        // Look for phrases that bury the action
        const buriedActionPatterns = [
            /^To\s+\w+,?\s+\w+/i,  // "To allow access, update..."
            /^You can\s+\w+/i,      // "You can create..."
            /^Creating.*lets you/i, // "Creating a bucket lets you..."
        ];

        for (const pattern of buriedActionPatterns) {
            if (pattern.test(trimmed)) {
                this.addViolation(file, line, ISSUES.INFO, 'BURIED_ACTION',
                    'Consider putting the action first (e.g., "Create..." instead of "You can create...")', text);
            }
        }
    }

    /**
     * Check image syntax
     */
    checkImageSyntax(file, line, text) {
        // Check for proper dark/light mode image structure
        if (text.includes('![') && !text.includes('{%')) {
            // Images should typically use the only_dark/only_light wrapper
            const nextLines = [];
            // This is a simple check - in a real implementation we'd need context
            this.addViolation(file, line, ISSUES.INFO, 'IMAGE_WITHOUT_THEME',
                'Consider using {% only_dark %} and {% only_light %} wrappers for theme-aware images', text);
        }
    }

    /**
     * Check markdoc component usage
     */
    checkMarkdocComponents(file, line, text) {
        // Check for common markdoc components and their proper usage
        
        // Section component should have step, title, and id
        if (text.includes('{% section')) {
            if (!text.includes('step=') || !text.includes('title=')) {
                this.addViolation(file, line, ISSUES.WARNING, 'INCOMPLETE_SECTION',
                    'Section components should include both step and title attributes', text);
            }
        }

        // Check for proper component closing
        if (text.match(/{%\s*\w+/) && !text.includes('/%}') && !text.includes('%}')) {
            // This might be an opening tag that needs a closing tag
            this.addViolation(file, line, ISSUES.INFO, 'UNCLOSED_COMPONENT',
                'Ensure markdoc components are properly closed', text);
        }
    }

    /**
     * Find all markdoc files in given paths
     */
    findMarkdocFiles(basePath) {
        const files = [];
        
        function walk(dir) {
            const entries = fs.readdirSync(dir, { withFileTypes: true });
            
            for (const entry of entries) {
                const fullPath = path.join(dir, entry.name);
                
                if (entry.isDirectory()) {
                    walk(fullPath);
                } else if (entry.isFile() && entry.name.endsWith('.markdoc')) {
                    files.push(fullPath);
                }
            }
        }

        if (fs.existsSync(basePath)) {
            walk(basePath);
        }
        
        return files;
    }

    /**
     * Run analysis on all configured paths
     */
    run() {
        console.log('🔍 Analyzing content for guideline violations...\n');

        const rootDir = path.resolve(__dirname, '..');
        
        // If specific files are provided, analyze only those
        if (specificFiles.length > 0) {
            console.log(`📄 Analyzing ${specificFiles.length} specific file(s)...\n`);
            for (const file of specificFiles) {
                const fullPath = path.isAbsolute(file) ? file : path.join(process.cwd(), file);
                if (fs.existsSync(fullPath)) {
                    this.analyzeFile(fullPath);
                } else {
                    console.warn(`⚠️  File not found: ${file}`);
                }
            }
        } else {
            // Analyze all configured paths
            for (const relativePath of PATHS_TO_ANALYZE) {
                const fullPath = path.join(rootDir, relativePath);
                const files = this.findMarkdocFiles(fullPath);
                
                console.log(`📁 Analyzing ${relativePath} (${files.length} files)...`);
                
                for (const file of files) {
                    this.analyzeFile(file);
                }
            }
        }

        this.printReport();
        return this.violations.length === 0;
    }

    /**
     * Print analysis report
     */
    printReport() {
        console.log('\n' + '='.repeat(80));
        console.log('📊 ANALYSIS REPORT');
        console.log('='.repeat(80) + '\n');

        console.log(`Files analyzed: ${this.filesAnalyzed}`);
        console.log(`Total violations: ${this.violations.length}`);
        console.log(`Severity level: ${SEVERITY_LEVEL}\n`);

        // Group by level
        const errorCount = this.violations.filter(v => v.level === ISSUES.ERROR).length;
        const warningCount = this.violations.filter(v => v.level === ISSUES.WARNING).length;
        const infoCount = this.violations.filter(v => v.level === ISSUES.INFO).length;

        console.log(`❌ Errors: ${errorCount}`);
        console.log(`⚠️  Warnings: ${warningCount}`);
        if (SHOW_INFO) {
            console.log(`ℹ️  Info: ${infoCount}`);
        }
        console.log();

        if (this.violations.length > 0) {
            console.log('='.repeat(80));
            console.log('VIOLATIONS\n');

            // Sort violations by file, then line
            const sorted = [...this.violations].sort((a, b) => {
                if (a.file !== b.file) return a.file.localeCompare(b.file);
                return a.line - b.line;
            });

            let currentFile = '';
            let violationCount = 0;
            const MAX_VIOLATIONS = 100; // Limit output to avoid overwhelming logs
            
            for (const violation of sorted) {
                if (violationCount >= MAX_VIOLATIONS) {
                    console.log(`\n... and ${sorted.length - violationCount} more violations\n`);
                    break;
                }
                
                if (violation.file !== currentFile) {
                    currentFile = violation.file;
                    console.log(`\n📄 ${currentFile}`);
                }

                const icon = violation.level === ISSUES.ERROR ? '❌' : 
                            violation.level === ISSUES.WARNING ? '⚠️' : 'ℹ️';
                
                console.log(`  ${icon} Line ${violation.line}: [${violation.rule}] ${violation.message}`);
                
                if (violation.context) {
                    console.log(`     ${violation.context.substring(0, 100)}${violation.context.length > 100 ? '...' : ''}`);
                }
                
                violationCount++;
            }
        }

        console.log('\n' + '='.repeat(80));
        
        if (errorCount > 0) {
            console.log('\n❌ Analysis completed with errors. Please fix the issues above.');
            console.log('\n💡 Tip: Set SEVERITY_LEVEL=INFO to see all suggestions.');
            process.exit(1);
        } else if (warningCount > 0) {
            console.log('\n⚠️  Analysis completed with warnings. Consider addressing them.');
            console.log('\n💡 Tip: Set SEVERITY_LEVEL=INFO to see all suggestions.');
            process.exit(0); // Don't fail on warnings
        } else {
            console.log('\n✅ All content follows the guidelines!');
            process.exit(0);
        }
    }
}

// Show help message
function showHelp() {
    console.log(`
Content Guidelines Analyzer
===========================

Analyzes markdoc files against STYLE.md and CONTENT.md guidelines.

Usage:
  node scripts/analyze-content-guidelines.js [options] [files...]

Options:
  --help              Show this help message
  
Environment Variables:
  SEVERITY_LEVEL      Set to INFO to show all suggestions (default: WARNING)

Examples:
  # Analyze all files
  node scripts/analyze-content-guidelines.js
  
  # Analyze specific files
  node scripts/analyze-content-guidelines.js src/routes/docs/example/+page.markdoc
  
  # Show all suggestions
  SEVERITY_LEVEL=INFO node scripts/analyze-content-guidelines.js

Exit Codes:
  0 - Success (no errors found)
  1 - Errors found (violations detected)
    `);
    process.exit(0);
}

// Check for help flag
if (process.argv.includes('--help') || process.argv.includes('-h')) {
    showHelp();
}

// Run the analyzer
const analyzer = new ContentAnalyzer();
analyzer.run();
