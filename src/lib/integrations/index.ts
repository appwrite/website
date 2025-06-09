import type { FuseResult } from 'fuse.js';

// Reexport your entry components here
export { default as Fuse } from './Fuse.svelte';

export type ResultType<T> = FuseResult<T>[];
