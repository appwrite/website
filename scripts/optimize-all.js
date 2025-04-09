import { readdirSync, statSync } from 'fs';
import { join, relative, resolve } from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const project_root = resolve(__dirname, '..');

// Directories to search in
const search_dirs = ['src', 'static', 'routes', 'lib'];

// Directories to skip
const excluded_dirs = ['node_modules', '.svelte-kit', 'build', '.git', 'assets/'];

/**
 * @type {{
 *     jpeg: sharp.JpegOptions,
 *     webp: sharp.WebpOptions,
 *     png: sharp.PngOptions,
 *     gif: sharp.GifOptions,
 *     avif: sharp.AvifOptions
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
    },
    gif: {
        quality: 100
    },
    avif: {
        lossless: true
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
    try {
        const files = readdirSync(dir);

        for (const file of files) {
            const pathToFile = join(dir, file);
            const relativePath = relative(project_root, pathToFile);

            // Skip excluded directories
            if (excluded_dirs.some((excluded) => relativePath.includes(excluded))) {
                continue;
            }

            const isDirectory = statSync(pathToFile).isDirectory();
            if (isDirectory) {
                yield* walk_directory(pathToFile);
            } else {
                yield pathToFile;
            }
        }
    } catch (error) {
        console.error(`Error accessing directory ${dir}:`, error.message);
    }
}

function is_image(file) {
    const extension = file.split('.').pop()?.toLowerCase();
    return extension && Object.keys(config).includes(extension);
}

function format_size(bytes) {
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}

async function optimize_image(file) {
    const is_animated = file.endsWith('.gif');
    const image = sharp(file, { animated: is_animated });

    try {
        const size_before = (await image.toBuffer()).length;
        const meta = await image.metadata();

        if (!meta.format || !config[meta.format]) {
            console.warn(`Unsupported format for file: ${file}`);
            return;
        }

        const buffer = await image[meta.format](config[meta.format])
            .resize(resize_config)
            .toBuffer();
        const size_after = buffer.length;

        if (size_after >= size_before) {
            console.log(`Skipping ${relative(project_root, file)} - no size reduction possible`);
            return;
        }

        const savings = (((size_before - size_after) / size_before) * 100).toFixed(2);
        console.log(`Optimizing ${relative(project_root, file)}`);
        console.log(`  Before: ${format_size(size_before)}`);
        console.log(`  After:  ${format_size(size_after)}`);
        console.log(`  Saved:  ${savings}%`);

        await sharp(buffer).toFile(file);
    } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
    }
}

async function main() {
    let total_files = 0;
    let processed_files = 0;

    console.log('Starting image optimization...\n');

    for (const search_dir of search_dirs) {
        const full_path = join(project_root, search_dir);

        try {
            if (!statSync(full_path).isDirectory()) continue;

            for (const file of walk_directory(full_path)) {
                if (!is_image(file)) continue;
                total_files++;

                await optimize_image(file);
                processed_files++;
            }
        } catch (error) {
            if (error.code === 'ENOENT') {
                console.log(`Directory ${search_dir} not found - skipping`);
            } else {
                console.error(`Error processing ${search_dir}:`, error.message);
            }
        }
    }

    console.log(`\nOptimization complete!`);
    console.log(`Processed ${processed_files} of ${total_files} image files`);
}

await main();
