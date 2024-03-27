import fetch from 'node-fetch';
import fs from 'fs';

const perPage = 100;
const outputFile = `./src/lib/contributors.ts`;

const headers = process.env.GITHUB_TOKEN ? {
    Authorization: `token ${process.env.GITHUB_TOKEN}`
} : {};

console.log(`Using GitHub token: ${!!process.env.GITHUB_TOKEN}`);

async function fetchRepositories() {
    let page = 1;
    let repositoriesData = [];
    let hasMoreData = true;

    try {
        while (hasMoreData) {
            const url = `https://api.github.com/orgs/appwrite/repos?page=${page}&per_page=${perPage}`;
            const response = await fetch(url, { headers });

            if (!response.ok) {
                throw new Error(`Failed to fetch data from ${url}`);
            }

            const data = await response.json();
            if (data.length === 0) {
                hasMoreData = false;
            } else {
                repositoriesData = repositoriesData.concat(data);
                page++;
            }
            console.log(`Fetched ${data.length} repositories. Total: ${repositoriesData.length}...\n`);
        }
    } catch (error) {
        console.error(error);
    }

    return repositoriesData.map(repo => repo.full_name);
}

async function fetchContributorsForRepo(repo) {
    const url = `https://api.github.com/repos/${repo}/contributors`;
    const response = await fetch(url, { headers });

    if (!response.ok) {
        throw new Error(`Failed to fetch contributors for ${repo}`);
    }

    const data = await response.json();
    return data.map(contributor => contributor.login);
}

async function main() {
    try {
        const repos = await fetchRepositories();
        const contributorPromises = repos.map(repo => fetchContributorsForRepo(repo));

        const contributorsArray = (await Promise.all(contributorPromises)).flat();
        const uniqueContributors = Array.from(new Set(contributorsArray));

        const currentContributors = fs.readFileSync(outputFile, 'utf8');
        const contributorsString = JSON.stringify(uniqueContributors, null, 4);
        const contributorsFile = `export const contributors = ${contributorsString};`;

        if (currentContributors === contributorsFile) {
            console.log('No new contributors found. Exiting...');
            return;
        }

        fs.writeFileSync(outputFile, contributorsFile);
        console.log('Contributors file updated successfully.');
    } catch (error) {
        console.error(error);
    }
}

main();
