import { fileURLToPath } from 'url';
import { build } from 'vite';
import { downloadContributors } from './download-contributor-data.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

async function main() {
    await downloadContributors();
    await build();
}

main();
