import fs from 'fs';

const perPage = 100;

const outputFile = `./src/lib/contributors.ts`;

const headers = process.env.GITHUB_TOKEN
    ? {
          Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    : {};

console.log(`using github token: ${!!process.env.GITHUB_TOKEN}`);

async function fetchRepositories() {
    let page = 1;
    let repositoriesData = [];
    let hasMoreData = true;

    while (hasMoreData) {
        console.log(`Fetching page ${page} of repositories...`);
        const url = `https://api.github.com/orgs/appwrite/repos?page=${page}&per_page=${perPage}`;

        const response = await fetch(url, {
            headers
        });

        if (!response.ok) {
            console.error(`Failed to fetch data from ${url}`);
            break;
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

    return repositoriesData.map((repo) => repo.full_name);
}

async function fetchContributors(apiUrl) {
    let page = 1;
    let contributorsData = [];
    let hasMoreData = true;

    while (hasMoreData) {
        console.log(`Fetching page ${page} of contributors...`);
        const url = `${apiUrl}?page=${page}&per_page=${perPage}`;
        const response = await fetch(url, {
            headers
        });

        if (!response.ok) {
            console.error(`Failed to fetch data from ${url}`, await response.text());
            break;
        }

        const data = await response.json();

        if (data.length === 0) {
            hasMoreData = false;
        } else {
            contributorsData = contributorsData.concat(data.map((c) => c.login));
            page++;
        }

        console.log(`Fetched ${data.length} contributors. Total: ${contributorsData.length}...\n`);
    }

    return contributorsData;
}

export async function downloadContributors() {
    const contributors = new Set();

    for (const repo of ['appwrite/appwrite', 'appwrite/console', 'appwrite/sdk-generator']) {
        console.log(`Fetching contributors for ${repo}...`);
        const url = `https://api.github.com/repos/${repo}/contributors`;
        const data = await fetchContributors(url);

        data.forEach((contributor) => contributors.add(contributor));
    }

    const contributorsArray = Array.from(contributors);
    const contributorsString = JSON.stringify(contributorsArray, null, 4);
    const contributorsFile = `export const contributors = ${contributorsString};`;

    const currentContributors = fs.readFileSync(outputFile, 'utf8');
    if (currentContributors.length >= contributorsFile.length) {
        console.log('No new contributors found. Exiting...');
        return;
    }

    fs.writeFileSync(outputFile, contributorsFile);
}
