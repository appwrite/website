import { MediaQuery } from 'svelte/reactivity';

export const isMobile = () => {
    const mediaQuery = new MediaQuery('(max-width: 1024px)');

    return mediaQuery.current;
};
