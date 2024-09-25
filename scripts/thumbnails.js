import { mkdirSync, readdirSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
// Define the base path for static images
const srcDir = join(__dirname, '../static/images');

const authorDir = join(srcDir, 'avatars');
const blogCoverDir = join(srcDir, 'blog');
const authorDestDir = join(authorDir, 'thumbnails');
const blogCoverDestDir = join(blogCoverDir, 'thumbnails');

const articlesDir = join(__dirname, '../src/routes/blog/post');
const authorsDir = join(__dirname, '../src/routes/blog/author');

function isPNG(file) {
    return file.endsWith('.png');
}

function parseFrontmatter(file, key = 'cover') {
    const content = readFileSync(file, 'utf8');
    const fmRegex = /---\s*([\s\S]*?)\s*---/;
    const match = content.match(fmRegex);
    if (match) {
        const fmContent = match[1];
        const regex = new RegExp(`^${key}:\\s*(.+)$`, 'm');
        const imageMatch = fmContent.match(regex);
        if (imageMatch) {
            return imageMatch[1].trim();
        }
    }
    return null;
}

function walkDirectory(dir, list = []) {
    const files = readdirSync(dir, { withFileTypes: true });
    files.forEach((file) => {
        const pathToFile = join(dir, file.name);
        if (file.isDirectory()) {
            list = walkDirectory(pathToFile, list);
        } else if (file.name === '+page.markdoc') {
            list.push(pathToFile);
        }
    });

    return list;
}

function ensureDir(path) {
    try {
        mkdirSync(path, { recursive: true });
    } catch (err) {
        if (err.code !== 'EEXIST') throw err;
    }
}

async function createThumbnails(images, destDir, width, height) {
    for (const file of images) {
        let relativePath = file.substring(srcDir.length)
            .replace(/\/blog\/|\/avatars\//, '');
        const thumbBasePath = join(destDir, relativePath);

        ensureDir(dirname(thumbBasePath));

        const pngThumbPath = thumbBasePath.replace(/\.[^/.]+$/, '.png');
        const webpThumbPath = thumbBasePath.replace(/\.[^/.]+$/, '.webp');

        const resizedImageBuffer = await sharp(file)
            .resize({
                width,
                height,
                fit: sharp.fit.inside,
                withoutEnlargement: true
            })
            .toBuffer();

        const sharpInstance = sharp(resizedImageBuffer);

        await Promise.all([
            sharpInstance.webp({ lossless: true }).toFile(webpThumbPath),
            sharpInstance.png({ compressionLevel: 9 }).toFile(pngThumbPath)
        ]);
    }
}

function getBlogCovers() {
    const markdocFiles = walkDirectory(articlesDir);
    return markdocFiles
        .map((filePath) => {
            const coverPath = parseFrontmatter(filePath);
            if (coverPath && isPNG(coverPath)) {
                return join(__dirname, '../static', coverPath);
            }
        })
        .filter(Boolean);
}

function getAuthorAvatars() {
    const authorFiles = walkDirectory(authorsDir);
    return authorFiles
        .map((filePath) => {
            const avatarPath = parseFrontmatter(filePath, 'avatar');
            if (avatarPath && isPNG(avatarPath)) {
                return join(__dirname, '../static', avatarPath);
            }
        })
        .filter(Boolean);
}

export async function thumbnailPreprocess(options = {
    cover: { width: 320, height: 320 }, author: { width: 112, height: 112 }
}) {

    const coverImages = getBlogCovers();
    const authorAvatars = getAuthorAvatars();

    await Promise.all([
        createThumbnails(coverImages, blogCoverDestDir, options.cover.width, options.cover.height),
        createThumbnails(authorAvatars, authorDestDir, options.author.width, options.author.height)
    ]);

    return { name: 'thumbnail-creator-preprocessor' };
}