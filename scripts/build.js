import { build } from 'vite';
import { downloadContributors } from './download-contributor-data.js';

async function main() {
    await downloadContributors();
    await build();
}

main();
