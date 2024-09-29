import { build } from 'vite';
import { minifyHtmlPostBuild } from './html-minifier.js';
import { downloadContributors } from './download-contributor-data.js';

async function main() {
    await downloadContributors();
    await build();
    await minifyHtmlPostBuild();
}

main();
