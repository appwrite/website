import { mkdirSync, readdirSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = join(__dirname, '../static/images/blog');
const destDir = join(srcDir, 'thumbnails');
const articlesDir = join(__dirname, '../src/routes/blog/post');

function isPNG(file) {
    return file.endsWith('.png');
}

function parseFrontmatter(file) {
    const content = readFileSync(file, 'utf8');
    const fmRegex = /---\s*([\s\S]*?)\s*---/;
    const match = content.match(fmRegex);
    if (match) {
        const fmContent = match[1];
        const coverRegex = /^cover:\s*(.+)$/m;
        const coverMatch = fmContent.match(coverRegex);
        if (coverMatch) {
            return coverMatch[1].trim();
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

async function createThumbnails(coverImages, width, height) {
    for (const file of coverImages) {
        const relativePath = file.substring(srcDir.length);
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

// images are optimized strictly at 1280x1280, this scales them down 4x.
export async function thumbnailPreprocess(width = 320, height = 320) {
    const markdocFiles = walkDirectory(articlesDir);

    const coverImages = markdocFiles
        .map((filePath) => {
            const coverPath = parseFrontmatter(filePath);
            if (coverPath && isPNG(coverPath)) {
                return join(__dirname, '../static', coverPath);
            }
        })
        .filter(Boolean);

    await createThumbnails(coverImages, width, height);
    return { name: 'thumbnail-creator-preprocessor' };
}
