import { building } from '$app/environment';
import { formatK } from '$lib/utils/formatK';
import fs from 'fs';
import { getAllChangelogEntries } from './changelog/utils';

export const prerender = true;

/**
 * At build-time, fetches the GitHub stars count and stores it in a JSON file.
 * At run-time, reads the JSON file and returns the value.
 * If there's no file at run-time, it follows the same process as build-time.
 *
 * If the fetch fails, or the value on the JSON file is invalid, it returns the fallback value.
 * If there's no fallback value, it throws an error.
 */
async function getGitHubStars(fallback?: number): Promise<number> {
    if (building || !fs.existsSync('src/routes/github-stars.json')) {
        try {
            const githubStars = await fetch('https://api.github.com/repos/appwrite/appwrite')
                .then((res) => res.json())
                .then((res) => res.stargazers_count);
            // Save to JSON file
            fs.writeFileSync('src/routes/github-stars.json', JSON.stringify({ githubStars }));

            return githubStars;
        } catch (e) {
            console.error('Failed to fetch GitHub stars count', e);
            if (fallback === undefined) {
                throw e;
            }

            return fallback;
        }
    } else {
        const { githubStars } = JSON.parse(
            fs.readFileSync('src/routes/github-stars.json', 'utf-8')
        );
        if (typeof githubStars !== 'number') {
            console.error('Invalid GitHub stars count on file');
            if (fallback === undefined) {
                throw new Error('Invalid GitHub stars count on file');
            }
            return fallback;
        }
        return githubStars;
    }
}

export const load = async () => {
    const [stars, changelogEntries] = await Promise.all([
        getGitHubStars(),
        getAllChangelogEntries()
    ]);

    return {
        stars: formatK(stars),
        changelogEntries: changelogEntries.length
    };
};
