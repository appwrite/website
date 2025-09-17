import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
    COLORS,
    printHeader,
    question,
    questionWithDefault,
    selectFromList,
    imagePathInput,
    copyImage,
    closeReadline
} from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..', '..');

function printAuthorHeader() {
    console.clear();
    console.log(`${COLORS.pink}${COLORS.bright}`);
    console.log('    ___                          _ __     ');
    console.log('   / _ | ___  ___  _    ___ ____(_) /____ ');
    console.log('  / __ |/ _ \\/ _ \\| |/|/ / __/ / / __/ -_)');
    console.log(' /_/ |_/ .__/ .__/|__,__/_/ /_/_/\\__/\\__/ ');
    console.log('      /_/  /_/                             ');
    console.log('');
    console.log('  AUTHOR CREATOR');
    console.log(`${COLORS.reset}\n`);
    console.log(`${COLORS.dim}Add a new author to the Appwrite blog${COLORS.reset}\n`);
}

function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')
        .trim();
}

function validateSlug(slug) {
    const authorPath = path.join(ROOT_DIR, 'src', 'routes', 'blog', 'author', slug);

    if (fs.existsSync(authorPath)) {
        return {
            valid: false,
            message: `An author with slug "${slug}" already exists!`
        };
    }

    if (!/^[a-z0-9-]+$/.test(slug)) {
        return {
            valid: false,
            message: 'Slug should only contain lowercase letters, numbers, and hyphens'
        };
    }

    return { valid: true };
}

function validateUrl(url) {
    if (!url) return true; // Optional field
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

async function collectAuthorInfo() {
    const authorInfo = {};

    console.log(`\n${COLORS.bright}👤 Author Information${COLORS.reset}\n`);

    // Name
    let name = '';
    while (!name) {
        name = await question('Full Name: ');
        if (!name) {
            console.log(`${COLORS.red}Name is required!${COLORS.reset}`);
        }
    }
    authorInfo.name = name;

    // Auto-generate slug from name
    const suggestedSlug = slugify(authorInfo.name);
    let slug = await questionWithDefault('Slug', suggestedSlug);

    let validation = validateSlug(slug);
    while (!validation.valid) {
        console.log(`${COLORS.red}${validation.message}${COLORS.reset}`);
        slug = await question('Please enter a different slug: ');
        validation = validateSlug(slug);
    }
    authorInfo.slug = slug;

    // Role
    console.log(`\n${COLORS.bright}💼 Professional Information${COLORS.reset}\n`);

    let role = '';
    while (!role) {
        role = await question('Role (e.g., Developer Advocate, Software Engineer): ');
        if (!role) {
            console.log(`${COLORS.red}Role is required!${COLORS.reset}`);
        }
    }
    authorInfo.role = role;

    // Bio
    console.log(`\n${COLORS.bright}📝 Bio${COLORS.reset}`);
    console.log(`${COLORS.dim}Write a short bio (1-2 sentences)${COLORS.reset}\n`);
    const bio = await question('Bio: ');

    authorInfo.bio = bio || `${authorInfo.role} at Appwrite`;

    // Avatar
    console.log(`\n${COLORS.bright}🖼️ Avatar${COLORS.reset}`);
    const avatarFileName = `${authorInfo.slug}.png`;
    const avatarPath = `/images/avatars/${avatarFileName}`;
    const fullAvatarPath = path.join(ROOT_DIR, 'static', 'images', 'avatars', avatarFileName);

    const imageResult = await imagePathInput('Add Avatar Image', fullAvatarPath);
    authorInfo.avatar = avatarPath;
    authorInfo.avatarSourcePath = imageResult.sourcePath;
    authorInfo.avatarTargetPath = imageResult.targetPath;

    // Social Links
    console.log(`\n${COLORS.bright}🔗 Social Links${COLORS.reset}`);
    console.log(`${COLORS.dim}Leave blank to skip any social link${COLORS.reset}\n`);

    // Twitter/X
    let twitter = await question('Twitter/X URL (e.g., https://x.com/username): ');
    while (twitter && twitter.trim() && !validateUrl(twitter)) {
        console.log(`${COLORS.red}Invalid URL format${COLORS.reset}`);
        twitter = await question('Twitter/X URL (leave blank to skip): ');
    }
    authorInfo.twitter = twitter ? twitter.trim() : '';

    // GitHub
    let github = await question('GitHub URL (e.g., https://github.com/username): ');
    while (github && github.trim() && !validateUrl(github)) {
        console.log(`${COLORS.red}Invalid URL format${COLORS.reset}`);
        github = await question('GitHub URL (leave blank to skip): ');
    }
    authorInfo.github = github ? github.trim() : '';

    // LinkedIn
    let linkedin = await question('LinkedIn URL (e.g., https://www.linkedin.com/in/username): ');
    while (linkedin && linkedin.trim() && !validateUrl(linkedin)) {
        console.log(`${COLORS.red}Invalid URL format${COLORS.reset}`);
        linkedin = await question('LinkedIn URL (leave blank to skip): ');
    }
    authorInfo.linkedin = linkedin ? linkedin.trim() : '';

    return authorInfo;
}

function generateAuthorMarkdoc(authorInfo) {
    let content = `---
layout: author
slug: ${authorInfo.slug}
name: ${authorInfo.name}
role: ${authorInfo.role}
bio: ${authorInfo.bio}
avatar: ${authorInfo.avatar}`;

    if (authorInfo.twitter) {
        content += `\ntwitter: ${authorInfo.twitter}`;
    }

    if (authorInfo.github) {
        content += `\ngithub: ${authorInfo.github}`;
    }

    if (authorInfo.linkedin) {
        content += `\nlinkedin: ${authorInfo.linkedin}`;
    }

    content += '\n---\n';

    return content;
}

async function createAuthorFiles(authorInfo) {
    const authorPath = path.join(ROOT_DIR, 'src', 'routes', 'blog', 'author', authorInfo.slug);

    console.log(`\n${COLORS.bright}📁 Creating author files...${COLORS.reset}\n`);

    try {
        // Create author directory
        fs.mkdirSync(authorPath, { recursive: true });
        console.log(
            `${COLORS.pink}✓${COLORS.reset} Created directory: ${COLORS.dim}${authorPath}${COLORS.reset}`
        );

        // Create the markdoc file
        const markdocPath = path.join(authorPath, '+page.markdoc');
        const content = generateAuthorMarkdoc(authorInfo);
        fs.writeFileSync(markdocPath, content);
        console.log(
            `${COLORS.pink}✓${COLORS.reset} Created file: ${COLORS.dim}${markdocPath}${COLORS.reset}`
        );

        // Copy avatar image if provided
        let avatarCopied = false;
        if (authorInfo.avatarSourcePath && authorInfo.avatarTargetPath) {
            avatarCopied = await copyImage(authorInfo.avatarSourcePath, authorInfo.avatarTargetPath);
        }

        return { success: true, authorPath, markdocPath, avatarCopied };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function main() {
    printAuthorHeader();

    try {
        const authorInfo = await collectAuthorInfo();

        // Review information
        console.log(`\n${COLORS.bright}📋 Review Author Information${COLORS.reset}\n`);
        console.log(`${COLORS.pink}Name:${COLORS.reset} ${authorInfo.name}`);
        console.log(`${COLORS.pink}Slug:${COLORS.reset} ${authorInfo.slug}`);
        console.log(`${COLORS.pink}Role:${COLORS.reset} ${authorInfo.role}`);
        console.log(`${COLORS.pink}Bio:${COLORS.reset} ${authorInfo.bio}`);
        console.log(`${COLORS.pink}Avatar:${COLORS.reset} ${authorInfo.avatar}`);

        if (authorInfo.twitter) {
            console.log(`${COLORS.pink}Twitter:${COLORS.reset} ${authorInfo.twitter}`);
        }
        if (authorInfo.github) {
            console.log(`${COLORS.pink}GitHub:${COLORS.reset} ${authorInfo.github}`);
        }
        if (authorInfo.linkedin) {
            console.log(`${COLORS.pink}LinkedIn:${COLORS.reset} ${authorInfo.linkedin}`);
        }

        const confirm = await selectFromList('\nCreate this author profile?', [
            { label: 'Yes, create it!', value: true },
            { label: 'No, cancel', value: false }
        ]);

        if (!confirm) {
            console.log(`\n${COLORS.yellow}Author creation cancelled.${COLORS.reset}`);
            closeReadline();
            return;
        }

        const result = await createAuthorFiles(authorInfo);

        if (result.success) {
            console.log(
                `\n${COLORS.pink}${COLORS.bright}✨ Success! Author profile created successfully!${COLORS.reset}\n`
            );
            console.log(`${COLORS.bright}Created files:${COLORS.reset}`);
            console.log(`  • Author profile: ${COLORS.pink}${result.markdocPath}${COLORS.reset}`);

            console.log(`\n${COLORS.bright}Next steps:${COLORS.reset}`);
            if (!result.avatarCopied) {
                const avatarPath = path.join(ROOT_DIR, 'static', 'images', 'avatars', `${authorInfo.slug}.png`);
                console.log(
                    `1. Add avatar image to: ${COLORS.pink}${avatarPath}${COLORS.reset}`
                );
                console.log(
                    `2. The author "${authorInfo.name}" is now available for blog posts`
                );
            } else {
                console.log(
                    `The author "${authorInfo.name}" is now available for blog posts`
                );
            }
            console.log(
                `\n${COLORS.dim}Run 'pnpm create-blog' to create a blog post with this author!${COLORS.reset}`
            );
        } else {
            console.log(`\n${COLORS.red}Error creating author files: ${result.error}${COLORS.reset}`);
        }

    } catch (error) {
        console.log(`\n${COLORS.red}Error: ${error.message}${COLORS.reset}`);
    }

    closeReadline();
}

process.on('SIGINT', () => {
    console.log(`\n${COLORS.yellow}Process interrupted. Exiting...${COLORS.reset}`);
    closeReadline();
    process.exit(0);
});

main();