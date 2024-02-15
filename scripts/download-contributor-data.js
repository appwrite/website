import fs from 'fs';

const apiUrl = 'https://api.github.com/repos/appwrite/appwrite/contributors';
const perPage = 100;

const outputFile = `./src/lib/contributors.ts`;

async function fetchContributors() {
    let page = 1;
    let contributorsData = [];
    let hasMoreData = true;

    while (hasMoreData) {
        console.log(`Fetching page ${page} of contributors...`);
        const url = `${apiUrl}?page=${page}&per_page=${perPage}`;
        const response = await fetch(url);

        if (!response.ok) {
            console.error(`Failed to fetch data from ${url}`);
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

    if (contributorsData.length > 0) {
        // Write the concatenated data to a JSON file
        fs.writeFileSync(
            outputFile,
            `export const contributors = ${JSON.stringify(contributorsData, null, 2)}`
        );
        console.log(`Contributor data saved to ${outputFile}`);
    } else {
        console.log('No contributor data found.');
    }
}

fetchContributors();
