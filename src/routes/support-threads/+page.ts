import { MockData } from './data.js';
import { mockSearch } from './helpers.js';

export function load({ url }) {
    const query = url.searchParams.get('q');
    if (!query) {
        return { threads: MockData };
    }

    return {
        threads: mockSearch(MockData, query).map((result) => result.data)
    };
}
