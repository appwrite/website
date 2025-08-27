import type { Hit } from 'meilisearch';

export interface SearchItem {
    url: string;
    title: string;
    uid: string;
    meta?: Record<string, string>;
    content: string;
    position: number;
    anchor: string;
}

export interface SearchResult extends SearchItem {
    _formatted?: SearchItem;
}

export type SearchHit = Hit<SearchItem>;
