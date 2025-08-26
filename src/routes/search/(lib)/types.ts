import type { Hit } from 'meilisearch';

export interface SearchResult {
    url: string;
    title?: string;
    uid?: string;
    meta?: Record<string, string>;
    page_block?: number;
    urls_tags?: Array<string>;
    h1?: string;
    h2?: string;
    h3?: string;
    h4?: string;
    h5?: string;
    h6?: string;
    p?: string;
    anchor?: string;
    _formatted?: SearchResult;
}

export type SearchHit = Hit<SearchResult>;
