import { readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root_dir = join(__dirname, '../static');
const exceptions = ['assets/'];

/**
 * @type {{
 *     jpeg: sharp.JpegOptions,
 *     webp: sharp.WebpOptions,
 *     png: sharp.PngOptions,
 *     gif: sharp.GifOptions
 * }}
 */
const config = {
    jpeg: {
        quality: 100
    },
    webp: {
        lossless: true
    },
    png: {
        quality: 100,
        compressionLevel: 9
    },
    gif: {
        quality: 100
    }
};
/** @type {sharp.ResizeOptions} */
const resize_config = {
    width: 1280,
    height: 1280,
    fit: sharp.fit.inside,
    withoutEnlargement: true
};

function* walk_directory(dir) {
    const files = readdirSync(dir);

    for (const file of files) {
        const pathToFile = join(dir, file);
        const isDirectory = statSync(pathToFile).isDirectory();
        if (isDirectory) {
            yield* walk_directory(pathToFile);
        } else {
            yield pathToFile;
        }
    }
}

function is_image(file) {
    const extension = file.split('.').pop().toLowerCase();

    return Object.keys(config).includes(extension);
}

function get_relative_path(file) {
    return relative(root_dir, file);
}

async function main() {
    for (const file of walk_directory(join(__dirname, '../static'))) {
        const relative_path = get_relative_path(file);
        if (!is_image(file)) continue;
        if (exceptions.some((exception) => relative_path.startsWith(exception))) continue;

        console.log(relative_path);

        const image = sharp(file);
        const size_before = (await image.toBuffer()).length;
        const meta = await image.metadata();
        const buffer = await image[meta.format](config[meta.format])
            .resize(resize_config)
            .toBuffer();
        const size_after = buffer.length;

        // check for 5% reduction in size
        if (size_after >= size_before * 0.95) continue;

        await sharp(buffer).toFile(file);
    }
}

await main();
