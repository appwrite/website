import { build } from 'vite';
import { downloadContributors } from './download-contributor-data.js';
import { downloadVersions } from './download-sdk-versions.js';

async function main() {
    await downloadContributors();
    await downloadVersions();
    await build();
}

main();
