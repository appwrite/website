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
    console.log(
        'This script runs for ~5 mins. It runs silently if all files are already optimized.'
    );

    for (const file of walk_directory(join(__dirname, '../static'))) {
        const relative_path = get_relative_path(file);
        if (!is_image(file)) continue;
        if (exceptions.some((exception) => relative_path.startsWith(exception))) continue;

        const image = sharp(file);

        let meta;
        try {
            meta = await image.metadata();
        } catch (err) {
            const msg = `${relative_path} failed: ${err.message}`;
            if (Bun.env.CI) {
                throw new Error(msg);
            }

            console.log(msg);
            continue;
        }

        if (Bun.env.CI && (meta.width > 1980 || meta.height > 1980)) {
            const msg = `${relative_path} is too large: ${meta.width}x${meta.height}`;
            throw new Error(msg);
        }

        const buffer = await image[meta.format](config[meta.format])
            .resize(resize_config)
            .toBuffer();

        await sharp(buffer).toFile(file + '.optimized');

        const file_before = Bun.file(file);
        await file_before.arrayBuffer();
        const size_before = file_before.size;

        const file_after = Bun.file(file + '.optimized');
        const file_after_contents = await file_after.arrayBuffer();
        const size_after = file_after.size;

        const size_diff = size_before - size_after;
        if (size_diff <= 0) {
            await Bun.file(file + '.optimized').delete();
            continue;
        }

        const size_diff_percent = size_diff / size_before;
        if (size_diff_percent < 0.2) {
            await Bun.file(file + '.optimized').delete();
            continue;
        }

        // Atomic rewrite
        try {
            await Bun.write(file, file_after_contents);
            await Bun.file(file + '.optimized').delete();
        } catch (error) {
            try {
                await Bun.file(file + '.optimized').delete();
            } catch {
                // Silenced
            }

            throw new Error(`Failed to replace ${relative_path}: ${error.message}`);
        }

        const diff_verbose = Math.round(size_diff_percent * 100);
        console.log(`✅ ${relative_path} has been optimized (-${diff_verbose}%)`);

        if (Bun.env.CI) {
            console.log(
                `Stopping optimization in CI/CD env, as one diff is enough to make test fail`
            );
            break;
        }
    }
}

await main();
