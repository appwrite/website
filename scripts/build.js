import { build } from 'vite';
import { cp, mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

async function main() {
    await build();

    // Copy @appwrite.io/specs data into the build output so it ships with the
    // deployment archive and is reachable at runtime even in environments that
    // don't include node_modules (e.g. Appwrite Sites runtime, where only the
    // build artifact is mounted).
    const require = createRequire(import.meta.url);
    const specsRoot = dirname(require.resolve('@appwrite.io/specs/package.json'));
    const projectRoot = dirname(fileURLToPath(import.meta.url)).replace(/\/scripts$/, '');
    const target = resolve(projectRoot, 'build/_specs_data');

    await mkdir(target, { recursive: true });
    await cp(resolve(specsRoot, 'specs'), resolve(target, 'specs'), { recursive: true });
    await cp(resolve(specsRoot, 'examples'), resolve(target, 'examples'), { recursive: true });
    console.log('[build] copied specs data to', target);
}

main();
