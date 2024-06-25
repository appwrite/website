import type { FuseResult } from 'fuse.js';

// Reexport your entry components here
export { default } from './SvelteFuse.svelte';

export type ResultType<T> = FuseResult<T>[];

import CarouselRoot from './carousel/Carousel.svelte';
import CarouselSlide from './carousel/CarouselSlide.svelte';

export const Carousel = Object.assign({
    Root: CarouselRoot,
    Slide: CarouselSlide
});
