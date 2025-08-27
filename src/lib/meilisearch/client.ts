import { env } from '$env/dynamic/private';
import { MeiliSearch } from 'meilisearch';
import type { SearchItem } from './types';

const writeClient = new MeiliSearch({
    host: 'https://ms-6b6b7d6df3ec-29090.fra.meilisearch.io',
    apiKey: env.MEILISEARCH_WRITE_KEY
});

export const index = writeClient.index<SearchItem>('website');
