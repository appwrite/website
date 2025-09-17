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

function getAuthors() {
    const authorsPath = path.join(ROOT_DIR, 'src', 'routes', 'blog', 'author');
    const authors = [];

    try {
        const entries = fs.readdirSync(authorsPath, { withFileTypes: true });

        for (const entry of entries) {
            if (entry.isDirectory()) {
                const markdocPath = path.join(authorsPath, entry.name, '+page.markdoc');
                if (fs.existsSync(markdocPath)) {
                    const content = fs.readFileSync(markdocPath, 'utf8');
                    const match = content.match(/^---\n([\s\S]*?)\n---/);

                    if (match) {
                        const frontmatter = match[1];
                        const nameMatch = frontmatter.match(/name:\s*(.+)/);
                        const slugMatch = frontmatter.match(/slug:\s*(.+)/);

                        if (nameMatch && slugMatch) {
                            authors.push({
                                label: nameMatch[1].trim(),
                                value: slugMatch[1].trim()
                            });
                        }
                    }
                }
            }
        }
    } catch (error) {
        console.error(`${COLORS.red}Error reading authors: ${error.message}${COLORS.reset}`);
    }

    return authors.sort((a, b) => a.label.localeCompare(b.label));
}

function getCategories() {
    const categoriesPath = path.join(ROOT_DIR, 'src', 'routes', 'blog', 'category');
    const categories = [];

    try {
        const entries = fs.readdirSync(categoriesPath, { withFileTypes: true });

        for (const entry of entries) {
            if (entry.isDirectory() && !entry.name.startsWith('.')) {
                categories.push(entry.name);
            }
        }
    } catch (error) {
        console.error(`${COLORS.red}Error reading categories: ${error.message}${COLORS.reset}`);
    }

    return categories.sort();
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
    const blogPath = path.join(ROOT_DIR, 'src', 'routes', 'blog', 'post', slug);

    if (fs.existsSync(blogPath)) {
        return {
            valid: false,
            message: `A blog post with slug "${slug}" already exists!`
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

async function collectBlogInfo(authors, categories) {
    const blogInfo = {};

    console.log(`\n${COLORS.bright}📝 Blog Post Information${COLORS.reset}\n`);

    blogInfo.title = await question('Title: ');

    if (!blogInfo.title) {
        throw new Error('Title is required');
    }

    // Auto-generate slug from title
    const suggestedSlug = slugify(blogInfo.title);
    let slug = await questionWithDefault('Slug', suggestedSlug);

    let validation = validateSlug(slug);
    while (!validation.valid) {
        console.log(`${COLORS.red}${validation.message}${COLORS.reset}`);
        slug = await question('Please enter a different slug: ');
        validation = validateSlug(slug);
    }

    blogInfo.slug = slug;

    blogInfo.description = await question('Description (SEO meta description): ');

    if (!blogInfo.description) {
        throw new Error('Description is required');
    }

    const today = new Date().toISOString().split('T')[0];
    blogInfo.date = await questionWithDefault('Date (YYYY-MM-DD)', today);

    blogInfo.timeToRead = await questionWithDefault('Time to read (minutes)', '5');

    // Author selection
    console.log(`\n${COLORS.bright}👤 Select Author${COLORS.reset}`);
    if (authors.length > 0) {
        blogInfo.author = await selectFromList('Choose an author:', authors);
    } else {
        console.log(
            `${COLORS.yellow}No authors found. You'll need to create an author file first.${COLORS.reset}`
        );
        blogInfo.author = await question('Enter author slug manually (e.g., john-doe): ');
    }

    // Category selection
    console.log(`\n${COLORS.bright}🏷️ Select Category${COLORS.reset}`);
    if (categories.length > 0) {
        blogInfo.category = await selectFromList('Choose a category:', categories);
    } else {
        console.log(
            `${COLORS.yellow}No categories found. You can enter one manually.${COLORS.reset}`
        );
        blogInfo.category = await question('Enter category: ');
    }

    const isFeatured = await selectFromList('Featured post?', [
        { label: 'No', value: false },
        { label: 'Yes', value: true }
    ]);
    blogInfo.featured = isFeatured;

    // Cover Image
    console.log(`\n${COLORS.bright}🖼️ Cover Image${COLORS.reset}`);
    const coverFileName = 'cover.png';
    const coverPath = `/images/blog/${blogInfo.slug}/${coverFileName}`;
    const fullCoverPath = path.join(
        ROOT_DIR,
        'static',
        'images',
        'blog',
        blogInfo.slug,
        coverFileName
    );

    const imageResult = await imagePathInput('Add Cover Image', fullCoverPath);
    blogInfo.cover = coverPath;
    blogInfo.coverSourcePath = imageResult.sourcePath;
    blogInfo.coverTargetPath = imageResult.targetPath;

    return blogInfo;
}

function generateMarkdocContent(blogInfo) {
    const frontmatter = `---
layout: post
title: ${blogInfo.title}
description: ${blogInfo.description}
date: ${blogInfo.date}
cover: ${blogInfo.cover}
timeToRead: ${blogInfo.timeToRead}
author: ${blogInfo.author}
category: ${blogInfo.category}
featured: ${blogInfo.featured}
---

# ${blogInfo.title}

Start writing your blog post here...

## Introduction

Your introduction paragraph goes here.

## Main Content

Add your main content sections here.

## Conclusion

Wrap up your blog post with a conclusion.
`;

    return frontmatter;
}

async function createBlogFiles(blogInfo) {
    const blogPath = path.join(ROOT_DIR, 'src', 'routes', 'blog', 'post', blogInfo.slug);
    const imagePath = path.join(ROOT_DIR, 'static', 'images', 'blog', blogInfo.slug);

    console.log(`\n${COLORS.bright}📁 Creating blog files...${COLORS.reset}\n`);

    try {
        fs.mkdirSync(blogPath, { recursive: true });
        console.log(
            `${COLORS.pink}✓${COLORS.reset} Created directory: ${COLORS.dim}${blogPath}${COLORS.reset}`
        );

        fs.mkdirSync(imagePath, { recursive: true });
        console.log(
            `${COLORS.pink}✓${COLORS.reset} Created directory: ${COLORS.dim}${imagePath}${COLORS.reset}`
        );

        const markdocPath = path.join(blogPath, '+page.markdoc');
        const content = generateMarkdocContent(blogInfo);
        fs.writeFileSync(markdocPath, content);
        console.log(
            `${COLORS.pink}✓${COLORS.reset} Created file: ${COLORS.dim}${markdocPath}${COLORS.reset}`
        );

        // Copy cover image if provided
        let coverCopied = false;
        if (blogInfo.coverSourcePath && blogInfo.coverTargetPath) {
            coverCopied = await copyImage(blogInfo.coverSourcePath, blogInfo.coverTargetPath);
        }

        return { success: true, blogPath, imagePath, markdocPath, coverCopied };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function main() {
    printHeader();

    console.log(`${COLORS.dim}Loading authors and categories...${COLORS.reset}\n`);

    // Pre-fetch authors and categories
    const authors = getAuthors();
    const categories = getCategories();

    if (authors.length === 0) {
        console.log(`${COLORS.yellow}⚠ No authors found in the system${COLORS.reset}`);
    } else {
        console.log(`${COLORS.pink}✓${COLORS.reset} Found ${authors.length} authors`);
    }

    if (categories.length === 0) {
        console.log(`${COLORS.yellow}⚠ No categories found in the system${COLORS.reset}`);
    } else {
        console.log(`${COLORS.pink}✓${COLORS.reset} Found ${categories.length} categories`);
    }

    try {
        const blogInfo = await collectBlogInfo(authors, categories);

        console.log(`\n${COLORS.bright}📋 Review Blog Information${COLORS.reset}\n`);
        console.log(`${COLORS.pink}Title:${COLORS.reset} ${blogInfo.title}`);
        console.log(`${COLORS.pink}Slug:${COLORS.reset} ${blogInfo.slug}`);
        console.log(`${COLORS.pink}Description:${COLORS.reset} ${blogInfo.description}`);
        console.log(`${COLORS.pink}Date:${COLORS.reset} ${blogInfo.date}`);
        console.log(`${COLORS.pink}Author:${COLORS.reset} ${blogInfo.author}`);
        console.log(`${COLORS.pink}Category:${COLORS.reset} ${blogInfo.category}`);
        console.log(`${COLORS.pink}Featured:${COLORS.reset} ${blogInfo.featured}`);
        console.log(`${COLORS.pink}Cover:${COLORS.reset} ${blogInfo.cover}`);
        console.log(`${COLORS.pink}Time to Read:${COLORS.reset} ${blogInfo.timeToRead} minutes`);

        const confirm = await selectFromList('\nCreate this blog post?', [
            { label: 'Yes, create it!', value: true },
            { label: 'No, cancel', value: false }
        ]);

        if (!confirm) {
            console.log(`\n${COLORS.yellow}Blog creation cancelled.${COLORS.reset}`);
            closeReadline();
            return;
        }

        const result = await createBlogFiles(blogInfo);

        if (result.success) {
            console.log(
                `\n${COLORS.pink}${COLORS.bright}✨ Success! Blog post created successfully!${COLORS.reset}\n`
            );
            console.log(`${COLORS.bright}Created directories:${COLORS.reset}`);
            console.log(`  • Blog post: ${COLORS.pink}${result.blogPath}${COLORS.reset}`);
            console.log(`  • Images: ${COLORS.pink}${result.imagePath}${COLORS.reset}`);

            console.log(`\n${COLORS.bright}Next steps:${COLORS.reset}`);
            console.log(
                `1. Edit your blog post: ${COLORS.pink}${result.markdocPath}${COLORS.reset}`
            );

            if (!result.coverCopied) {
                console.log(
                    `2. Add your cover image as: ${COLORS.pink}${result.imagePath}/cover.png${COLORS.reset}`
                );
                console.log(
                    `3. Add any other images to: ${COLORS.pink}${result.imagePath}${COLORS.reset}`
                );
            } else {
                console.log(
                    `2. Add any other images to: ${COLORS.pink}${result.imagePath}${COLORS.reset}`
                );
            }

            console.log(
                `\n${COLORS.dim}Run 'pnpm dev' to see your blog post in action!${COLORS.reset}`
            );
        } else {
            console.log(`\n${COLORS.red}Error creating blog files: ${result.error}${COLORS.reset}`);
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
