import { PUBLIC_APPWRITE_COL_THREADS_ID, PUBLIC_APPWRITE_DB_MAIN_ID } from '$env/static/public';
import { databases } from '$lib/appwrite';
import { Query } from 'appwrite';
import type { DiscordThread } from './types';

type Ranked<T> = {
    data: T;
    rank: number; // Percentage of query words found, from 0 to 1
};

export async function getThreads(q?: string | null) {
    const data = await databases.listDocuments(
        PUBLIC_APPWRITE_DB_MAIN_ID,
        PUBLIC_APPWRITE_COL_THREADS_ID,
        q ? [Query.search('name', q)] : undefined
    );

    const threads = data.documents as unknown as DiscordThread[];

    if (!q) return threads;

    const queryWords = q.toLowerCase().split(/\s+/);
    const rankPerWord = 1 / queryWords.length;
    const res: Ranked<DiscordThread>[] = [];

    threads.forEach((item) => {
        const foundWords = new Set<string>();

        Object.values(item).forEach((value) => {
            const stringified = JSON.stringify(value).toLowerCase();

            queryWords.forEach((word) => {
                if (stringified.includes(word)) {
                    foundWords.add(word);
                }
            });
        });

        const rank = foundWords.size * rankPerWord;

        if (rank > 0) {
            res.push({
                data: item,
                rank
            });
        }
    });

    return res.sort((a, b) => b.rank - a.rank).map(({ data }) => data);
}
