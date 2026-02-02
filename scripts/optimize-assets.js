import { readdirSync, statSync, existsSync } from 'fs';
import { join, relative } from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root_dir = join(__dirname, '../static');
const cache_path = join(__dirname, '../.optimize-lock.json');
const exceptions = ['assets/'];

/** @returns {Promise<Record<string, string>>} */
async function load_cache() {
    if (!existsSync(cache_path)) return {};
    try {
        return JSON.parse(await Bun.file(cache_path).text());
    } catch {
        return {};
    }
}

/** @param {Record<string, string>} cache */
async function save_cache(cache) {
    const sorted = Object.fromEntries(Object.entries(cache).sort(([a], [b]) => a.localeCompare(b)));
    await Bun.write(cache_path, JSON.stringify(sorted, null, 4) + '\n');
}

/** @param {string} file_path */
async function get_hash(file_path) {
    const hasher = new Bun.CryptoHasher('sha256');
    hasher.update(await Bun.file(file_path).arrayBuffer());
    return hasher.digest('hex').slice(0, 16);
}

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

    const cache = await load_cache();
    const seen = new Set();
    let cache_updated = false;

    for (const file of walk_directory(join(__dirname, '../static'))) {
        const relative_path = get_relative_path(file);
        if (!is_image(file)) continue;
        if (exceptions.some((exception) => relative_path.startsWith(exception))) continue;

        const hash = await get_hash(file);
        seen.add(relative_path);
        if (cache[relative_path] === hash) continue;

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
            cache[relative_path] = hash;
            cache_updated = true;
            continue;
        }

        const size_diff_percent = size_diff / size_before;
        if (size_diff_percent < 0.2) {
            await Bun.file(file + '.optimized').delete();
            cache[relative_path] = hash;
            cache_updated = true;
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

        // Update cache with new hash after optimization
        cache[relative_path] = await get_hash(file);
        cache_updated = true;

        if (Bun.env.CI) {
            console.log(
                `Stopping optimization in CI/CD env, as one diff is enough to make test fail`
            );
            break;
        }
    }

    // Remove deleted files from cache
    for (const key of Object.keys(cache)) {
        if (!seen.has(key)) {
            delete cache[key];
            cache_updated = true;
        }
    }

    if (cache_updated) {
        await save_cache(cache);
    }
}

await main();
