# Content Guidelines Analyzer

This script analyzes Appwrite documentation, integrations, and changelog files to ensure they follow the guidelines specified in:
- [STYLE.md](../STYLE.md)
- [CONTENT.md](../CONTENT.md)

## What it checks

The analyzer validates the following aspects of content:

### Style Guidelines (from STYLE.md)

1. **Headings**
   - ✅ Use sentence case (not title case)
   - ✅ Include ID labels for headings (e.g., `# Heading {% #heading-id %}`)
   - ✅ Prefer root verbs over gerunds (e.g., "Create documents" not "Creating documents")

2. **Links**
   - ✅ Use descriptive link text (avoid "here", "click here", "learn more")
   - ✅ Make link destination clear from the text

3. **Placeholders**
   - ✅ Use angle brackets `<>` instead of square brackets `[]` for placeholders
   - ✅ Example: `<REGION>` not `[REGION]`

4. **Language and Diction**
   - ✅ Avoid possessive language (e.g., "the API" not "our API")
   - ✅ Put actions first in sentences (e.g., "Create a database" not "You can create a database")

5. **Images**
   - ✅ Use theme-aware image wrappers (`{% only_dark %}` and `{% only_light %}`)

6. **Markdoc Components**
   - ✅ Proper section components with step and title attributes
   - ✅ Properly closed components

### Content Guidelines (from CONTENT.md)

- ✅ Proper frontmatter structure
- ✅ Correct Markdoc syntax usage
- ✅ Proper component usage (sections, tabs, multicode, etc.)

## Usage

### Run locally

```bash
# Using npm/bun script (recommended)
npm run analyze:content
# or
bun run analyze:content

# Run directly with node
node scripts/analyze-content-guidelines.js

# Run with INFO level (shows all suggestions)
SEVERITY_LEVEL=INFO npm run analyze:content
SEVERITY_LEVEL=INFO node scripts/analyze-content-guidelines.js

# Analyze specific files
npm run analyze:content src/routes/docs/example/+page.markdoc
node scripts/analyze-content-guidelines.js src/routes/docs/example/+page.markdoc
```

### Run in CI/CD

The GitHub Actions workflow `.github/workflows/content-guidelines.yml` automatically runs on PRs that modify:
- `src/routes/docs/**/*.markdoc`
- `src/routes/integrations/**/*.markdoc`
- `src/routes/changelog/**/*.markdoc`
- `STYLE.md`, `CONTENT.md`
- The analyzer script itself

## Severity Levels

The analyzer categorizes issues into three levels:

- **ERROR** ❌ - Critical violations that must be fixed (e.g., unclear link text)
- **WARNING** ⚠️ - Important issues that should be addressed (e.g., missing heading IDs, possessive language)
- **INFO** ℹ️ - Suggestions for improvement (e.g., consider restructuring sentences)

By default, the script:
- Exits with error code 1 if any ERRORS are found
- Exits with code 0 (success) if only WARNINGS or INFO issues are found
- Only shows ERRORS and WARNINGS by default (set `SEVERITY_LEVEL=INFO` to see all)

## Example Output

```
🔍 Analyzing content for guideline violations...

📁 Analyzing src/routes/docs (393 files)...
📁 Analyzing src/routes/integrations (39 files)...
📁 Analyzing src/routes/changelog (112 files)...

================================================================================
📊 ANALYSIS REPORT
================================================================================

Files analyzed: 544
Total violations: 835
Severity level: WARNING

❌ Errors: 21
⚠️  Warnings: 814

================================================================================
VIOLATIONS

📄 src/routes/docs/example/+page.markdoc
  ❌ Line 43: [UNCLEAR_LINK_TEXT] Link text should be descriptive, avoid "here", "click here", etc.
     Learn more [here](https://example.com)
  ⚠️ Line 12: [TITLE_CASE_HEADING] Headings should use sentence case, not title case
     # How To Create Your First Project
```

## Adding New Checks

To add a new guideline check:

1. Add a new check method in the `ContentAnalyzer` class
2. Call it from the `analyzeFile` method
3. Use `this.addViolation()` to report violations with appropriate severity level

Example:
```javascript
checkMyGuideline(file, line, text) {
    if (text.includes('bad-pattern')) {
        this.addViolation(file, line, ISSUES.ERROR, 'MY_RULE', 
            'Description of the violation', text);
    }
}
```

## References

- [Appwrite Style Guide (STYLE.md)](../STYLE.md)
- [Appwrite Content Guidelines (CONTENT.md)](../CONTENT.md)
- [Markdoc Documentation](https://markdoc.dev/)
