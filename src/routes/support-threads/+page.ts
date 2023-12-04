import { MockData } from './data.js';

type SearchResult<T> = {
    data: T;
    rank: number; // Percentage of query words found, from 0 to 1
};

const mockSearch = <T extends Record<string, unknown>>(arr: T[], q: string): SearchResult<T>[] => {
    const queryWords = q.toLowerCase().split(/\s+/);
    const rankPerWord = 1 / queryWords.length;
    const res: SearchResult<T>[] = [];

    arr.forEach((item) => {
        Object.values(item).forEach((value) => {
            const stringified = JSON.stringify(value);

            let rank = 0;
            queryWords.forEach((word) => {
                if (stringified.includes(word)) {
                    rank += rankPerWord;
                }
            });

            if (rank === 0) return;

            res.push({
                data: item,
                rank
            });
        });
    });

    return res.sort((a, b) => b.rank - a.rank);
};

export function load({ url }) {
    const query = url.searchParams.get('q');
    if (!query) {
        return { threads: MockData };
    }

    return {
        threads: mockSearch(MockData, query).map((result) => result.data)
    };
}
