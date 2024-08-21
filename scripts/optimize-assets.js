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
    jpeg: { quality: 80 },
    webp: { quality: 80 },
    png: { compressionLevel: 9, quality: 80 },
    gif: { quality: 80 }
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
    const image_extensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    const extension = file.split('.').pop().toLowerCase();

    return image_extensions.includes(extension);
}

function get_relative_path(file) {
    return relative(root_dir, file);
}

async function main() {
    for (const file of walk_directory(join(__dirname, '../static'))) {
        const relative_path = get_relative_path(file);
        if (!is_image(file)) continue;
        if (exceptions.some((exception) => relative_path.startsWith(exception))) continue;

        console.log(get_relative_path(relative_path));

        const image = sharp(file);
        const size_before = (await image.toBuffer()).length;
        const meta = await image.metadata();
        const buffer = await image[meta.format](config[meta.format])
            .resize({
                width: 1280,
                height: 1280,
                fit: sharp.fit.inside
            })
            .toBuffer();
        const size_after = buffer.length;
        if (size_after >= size_before) continue;

        await sharp(buffer).toFile(file);
    }
}

await main();
