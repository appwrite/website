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
    const searchForFeaturedPost = key === 'cover';

    const featuredRegex = new RegExp(`^featured:\\s*['"]?(.+?)['"]?$`, 'm');

    const match = content.match(fmRegex);
    if (match) {
        const fmContent = match[1];
        const regex = new RegExp(`^${key}:\\s*(.+)$`, 'm');
        const imageMatch = fmContent.match(regex);
        if (imageMatch) {
            let withFeature = {};
            withFeature.image = imageMatch[1].trim();

            if (searchForFeaturedPost) {
                const featureMatch = fmContent.match(featuredRegex);
                if (featureMatch) {
                    withFeature.featured = featureMatch[1] === 'true';
                } else {
                    withFeature.featured = false;
                }
            }

            return withFeature;
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

async function createThumbnails(images, destDir, options) {
    const { width, height } = options;

    for (const file of images) {
        let relativePath = file.substring(srcDir.length).replace(/\/blog\/|\/avatars\//, '');
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
            const { featured, image: coverPath } = parseFrontmatter(filePath);

            if (coverPath && isPNG(coverPath)) {
                return {
                    featured: featured,
                    coverPath: join(__dirname, '../static', coverPath)
                };
            }
        })
        .filter(Boolean);
}

function getAuthorAvatars() {
    const authorFiles = walkDirectory(authorsDir);
    return authorFiles
        .map((filePath) => {
            const { image: avatarPath } = parseFrontmatter(filePath, 'avatar');
            if (avatarPath && isPNG(avatarPath)) {
                return join(__dirname, '../static', avatarPath);
            }
        })
        .filter(Boolean);
}

/**
 * @typedef {{ width: number, height: number }} ThumbnailSize
 *
 * @typedef {{
 *   cover: {
 *     normal: ThumbnailSize,
 *     featured: ThumbnailSize
 *   },
 *   author: ThumbnailSize
 * }} ThumbnailOptions
 */

/**
 * Preprocess thumbnails for cover and author images.
 *
 * @param {Object} [options={}] - Options to configure the thumbnail sizes.
 * @param {{
 *   cover?: {
 *     normal?: ThumbnailSize,
 *     featured?: ThumbnailSize
 *   },
 *   author?: ThumbnailSize
 * }} [options] - The optional thumbnail configuration.
 */
export async function thumbnailPreprocess(options = {}) {
    const {
        cover: {
            normal: normalCover = { width: 320, height: 320 },
            featured: featuredCover = { width: 640, height: 640 }
        } = {},
        author: authorOption = { width: 112, height: 112 }
    } = options;

    const coverImages = getBlogCovers();
    const authorAvatars = getAuthorAvatars();

    const normalCovers = coverImages.filter((img) => !img.featured).map((img) => img.coverPath);
    const featuredCovers = coverImages.filter((img) => img.featured).map((img) => img.coverPath);

    await Promise.all([
        createThumbnails(authorAvatars, authorDestDir, authorOption),
        createThumbnails(normalCovers, blogCoverDestDir, normalCover),
        createThumbnails(featuredCovers, blogCoverDestDir, featuredCover)
    ]);

    return { name: 'thumbnail-creator-preprocessor' };
}
