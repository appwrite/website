export type SearchResult<T> = {
    data: T;
    rank: number; // Percentage of query words found, from 0 to 1
};

export const mockSearch = <T extends Record<string, unknown>>(
    arr: T[],
    q: string
): SearchResult<T>[] => {
    const queryWords = q.toLowerCase().split(/\s+/);
    const rankPerWord = 1 / queryWords.length;
    const res: SearchResult<T>[] = [];

    arr.forEach((item) => {
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

    return res.sort((a, b) => b.rank - a.rank);
};
