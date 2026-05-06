/**
 * Converts raster images under `static/` and `src/` to AVIF (max edge 1280px, quality ~82),
 * deletes the originals, and rewrites matching paths in source and docs.
 *
 * Skips: `static/email/**` (HTML email compatibility), `static/images/logos/icons/apple-touch-icon*`
 * (iOS), `static/favicon.png`, and animated GIFs (not listed in RASTER_EXT).
 *
 * Env: `OPTIMIZE_MAX_FILES=n` limits work for local debugging. With `CI` set, stops after one file.
 *
 * String replacements cover static URLs, `(assets)/…` imports, and co-located `./file.ext`.
 * If you build paths with template literals (e.g. `` `/images/foo/${id}.png` ``), update the
 * extension manually when those assets are AVIF.
 */
import { readdirSync, statSync, existsSync, readFileSync, writeFileSync, unlinkSync } from 'fs';
import { join, relative, sep, basename } from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const project_root = join(__dirname, '..');
const static_root = join(project_root, 'static');
const cache_path = join(project_root, '.optimize-cache.json');

/** Raster extensions we convert to AVIF (GIFs stay GIF for animation). */
const RASTER_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp']);

const SKIP_DIR_NAMES = new Set(['node_modules', '.git', 'build', '.svelte-kit', '.cache']);

const TEXT_EXTENSIONS = new Set([
    '.svelte',
    '.ts',
    '.js',
    '.markdoc',
    '.md',
    '.scss',
    '.css',
    '.html',
    '.json'
]);

/** Paths relative to repo root (POSIX) that must stay in original format. */
function should_skip_file(rel_posix) {
    if (rel_posix.startsWith('static/email/')) return true;
    if (rel_posix.startsWith('static/images/logos/icons/apple-touch-icon')) return true;
    if (rel_posix === 'static/favicon.png') return true;
    return false;
}

function to_posix(p) {
    return p.split(sep).join('/');
}

function normalize_cache_key(key) {
    if (key.startsWith('static/')) return key;
    return `static/${key}`;
}

function load_cache() {
    if (existsSync(cache_path)) {
        try {
            const raw = JSON.parse(readFileSync(cache_path, 'utf-8'));
            /** @type {Record<string, string>} */
            const out = {};
            for (const [k, v] of Object.entries(raw)) {
                out[normalize_cache_key(k)] = v;
            }
            return out;
        } catch {
            return {};
        }
    }
    return {};
}

function save_cache(cache) {
    const sorted = Object.fromEntries(Object.entries(cache).sort(([a], [b]) => a.localeCompare(b)));
    writeFileSync(cache_path, JSON.stringify(sorted, null, 2) + '\n');
}

function hash_file(file) {
    const content = readFileSync(file);
    return createHash('sha256').update(content).digest('hex');
}

/** @type {sharp.ResizeOptions} */
const resize_config = {
    width: 1280,
    height: 1280,
    fit: sharp.fit.inside,
    withoutEnlargement: true
};

/** @type {sharp.AvifOptions} */
const avif_options = {
    quality: 82,
    effort: 4,
    chromaSubsampling: '4:4:4'
};

function walk_raster_files(root) {
    /** @type {string[]} */
    const out = [];

    function walk(dir) {
        let entries;
        try {
            entries = readdirSync(dir);
        } catch {
            return;
        }
        for (const name of entries) {
            if (SKIP_DIR_NAMES.has(name)) continue;
            const full = join(dir, name);
            let st;
            try {
                st = statSync(full);
            } catch {
                continue;
            }
            if (st.isDirectory()) {
                walk(full);
            } else {
                const ext = full.slice(full.lastIndexOf('.')).toLowerCase();
                if (RASTER_EXT.has(ext)) out.push(full);
            }
        }
    }

    walk(root);
    return out;
}

/**
 * Register URL / import string replacements for a converted file pair.
 * @param {Map<string, string>} map
 */
function register_replacements(map, old_abs, new_abs) {
    const rel = to_posix(relative(project_root, old_abs));
    const rel_new = to_posix(relative(project_root, new_abs));

    if (rel.startsWith('static/')) {
        const pub_old = '/' + rel.slice('static/'.length);
        const pub_new = '/' + rel_new.slice('static/'.length);
        map.set(pub_old, pub_new);
        if (pub_old.length > 1) {
            map.set(pub_old.slice(1), pub_new.slice(1));
        }
    }

    const assets_old = /\(assets\)\/(.+)$/.exec(rel);
    const assets_new = /\(assets\)\/(.+)$/.exec(rel_new);
    if (assets_old && assets_new) {
        map.set(`(assets)/${assets_old[1]}`, `(assets)/${assets_new[1]}`);
    }

    if (rel.startsWith('src/') && !rel.includes('/(assets)/')) {
        const b_old = basename(old_abs);
        const b_new = basename(new_abs);
        map.set(`./${b_old}`, `./${b_new}`);
    }
}

/**
 * Apply replacements in text files (longest keys first).
 * @param {Map<string, string>} replacements
 */
function update_code_references(replacements) {
    const sorted_pairs = [...replacements.entries()].sort((a, b) => b[0].length - a[0].length);

    const roots = [join(project_root, 'src'), join(project_root, 'static')];
    const extra_files = [
        join(project_root, 'src', 'app.html'),
        join(project_root, 'vite.config.ts'),
        join(project_root, 'CONTENT.md')
    ];

    /** @type {string[]} */
    const files_to_scan = [];

    function walk_text(dir) {
        let entries;
        try {
            entries = readdirSync(dir);
        } catch {
            return;
        }
        for (const name of entries) {
            if (SKIP_DIR_NAMES.has(name)) continue;
            const full = join(dir, name);
            let st;
            try {
                st = statSync(full);
            } catch {
                continue;
            }
            if (st.isDirectory()) {
                walk_text(full);
            } else {
                const ext = name.includes('.')
                    ? name.slice(name.lastIndexOf('.')).toLowerCase()
                    : '';
                if (TEXT_EXTENSIONS.has(ext)) files_to_scan.push(full);
            }
        }
    }

    for (const r of roots) {
        if (existsSync(r)) walk_text(r);
    }
    for (const f of extra_files) {
        if (existsSync(f) && !files_to_scan.includes(f)) files_to_scan.push(f);
    }

    let touched = 0;
    for (const file of files_to_scan) {
        let content = readFileSync(file, 'utf-8');
        const original = content;
        for (const [from, to] of sorted_pairs) {
            if (from === to) continue;
            if (!content.includes(from)) continue;
            content = split_join_all(content, from, to);
        }
        if (content !== original) {
            writeFileSync(file, content, 'utf-8');
            touched++;
        }
    }

    console.log(`\nUpdated references in ${touched} text files.`);
}

/** Split by from and join with to (global replace without regex metacharacters). */
function split_join_all(content, from, to) {
    return content.split(from).join(to);
}

async function convert_one(old_abs, new_abs) {
    const rel = to_posix(relative(project_root, old_abs));

    let meta;
    try {
        meta = await sharp(old_abs).metadata();
    } catch (err) {
        throw new Error(`${rel}: ${err.message}`);
    }

    if (Bun.env.CI && meta.width && meta.height && (meta.width > 1980 || meta.height > 1980)) {
        throw new Error(`${rel} is too large: ${meta.width}x${meta.height}`);
    }

    await sharp(old_abs).resize(resize_config).avif(avif_options).toFile(new_abs);
    unlinkSync(old_abs);
}

async function main() {
    const max_files = Bun.env.OPTIMIZE_MAX_FILES ? parseInt(Bun.env.OPTIMIZE_MAX_FILES, 10) : 0;

    const cache = load_cache();
    const new_cache = { ...cache };
    const replacements = new Map();

    const scan_roots = [static_root, join(project_root, 'src')].filter((p) => existsSync(p));
    /** @type {string[]} */
    const all_raster = [];
    for (const root of scan_roots) {
        all_raster.push(...walk_raster_files(root));
    }

    let processed = 0;
    for (const old_abs of all_raster) {
        const rel_posix = to_posix(relative(project_root, old_abs));
        if (should_skip_file(rel_posix)) continue;

        const ext = old_abs.slice(old_abs.lastIndexOf('.')).toLowerCase();
        const new_abs = old_abs.slice(0, -ext.length) + '.avif';

        const source_cache_key = rel_posix;
        const input_hash = hash_file(old_abs);
        if (cache[source_cache_key] === input_hash && existsSync(new_abs)) {
            new_cache[source_cache_key] = input_hash;
            register_replacements(replacements, old_abs, new_abs);
            continue;
        }

        if (max_files > 0 && processed >= max_files) {
            console.log(`OPTIMIZE_MAX_FILES=${max_files} — stopping early (dev only).`);
            break;
        }

        console.log(rel_posix);
        try {
            await convert_one(old_abs, new_abs);
        } catch (err) {
            const msg = `${rel_posix} failed: ${err.message}`;
            if (Bun.env.CI) throw new Error(msg);
            console.error(msg);
            continue;
        }

        register_replacements(replacements, old_abs, new_abs);
        new_cache[source_cache_key] = input_hash;
        processed++;

        if (Bun.env.CI) {
            console.log('Stopping after first conversion in CI.');
            break;
        }
    }

    if (replacements.size) {
        update_code_references(replacements);
    }

    save_cache(new_cache);
    console.log(`\nDone. Converted ${processed} file(s) this run.`);
}

await main();
