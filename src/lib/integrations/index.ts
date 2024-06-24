import type { FuseResult } from 'fuse.js';

// Reexport your entry components here
export { default } from './SvelteFuse.svelte';

export type ResultType<T> = FuseResult<T>[];

export { default as IntegrationsCarousel } from './IntegrationCarousel.svelte';
