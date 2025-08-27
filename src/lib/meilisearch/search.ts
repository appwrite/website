import { groupBy } from 'remeda';
import type { SearchItem } from './types';

export const transformResults = (hits: Array<SearchItem>) => {
    const groupedResults = groupBy(hits, (hit) => hit.title);

    return Object.entries(groupedResults).map(([_, hits]) => ({
        ...hits[0],
        hits
    }));
};
