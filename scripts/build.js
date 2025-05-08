import { build } from 'vite';
import { downloadContributors } from './download-contributor-data.js';

process.env.ROLLDOWN_OPTIONS_VALIDATION = 'loose';

async function main() {
    await downloadContributors();
    await build();
}

main();
