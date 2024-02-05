import { getAllChangelogEntries } from './changelog/utils';

export const prerender = true;

let lastStarCount = 38000;

export const load = async () => {
    try {
        const githubStars = await fetch('https://api.github.com/repos/appwrite/appwrite')
            .then((res) => res.json())
            .then((res) => res.stargazers_count);

        lastStarCount = githubStars;
    } catch {
        // Console logging here is fine, since it'll only show up in the server
        console.error('Failed to fetch GitHub stars count');
    }

    const formatK = (num: number) => {
        return Math.abs(num) > 999
            ? Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(1)) + 'K'
            : Math.sign(num) * Math.abs(num);
    };

    return {
        stars: formatK(lastStarCount),
        changelogEntries: (await getAllChangelogEntries()).length
    };
};
