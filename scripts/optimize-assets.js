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
 *     png: sharp.PngOptions
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
        
        // Skip optimization check for small files
        if (Bun.env.CI && Bun.file(file).size <= 100000) {
            continue;
        }
        
        const image = sharp(file); // limitInputPixels
        
        let meta;
        try {
            meta = await image.metadata();
        } catch (err) {
            if (Bun.env.CI) {
                throw new Error(`${relative_path} failed: ${err.message}`);
            }

            console.log(`${relative_path} failed: ${err.message}`);
            continue;
        }

        const buffer = await image[meta.format](config[meta.format])
            .resize(resize_config)
            .toBuffer();

        await sharp(buffer).toFile(file + '.optimized');

        const size_before = Bun.file(file).size;
        const size_after = Bun.file(file + '.optimized').size;

        const size_diff = size_before - size_after;
        const size_diff_percent = size_diff / size_before;

        if (size_diff <= 0 || size_diff_percent < 0.2) {
            await Bun.file(file + '.optimized').delete();
            continue;
        }
        await Bun.file(file).delete();
        await Bun.write(file, Bun.file(file + '.optimized'));
        await Bun.file(file + '.optimized').delete();

        const diff_verbose = Math.round(size_diff_percent * 100);
        console.log(`✅ ${relative_path} has been optimized (-${diff_verbose}%)`);

        if (Bun.env.CI) {
            console.log(
                `Stopping optimization in CI/CD env, as one diff is enough to make test fail`
            );
        }
    }
}

await main();
