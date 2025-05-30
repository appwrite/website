import { MediaQuery } from 'svelte/reactivity';

export const isMobile = () => {
    const mediaQuery = new MediaQuery('(max-width: 767px)');

    return mediaQuery.current;
};
