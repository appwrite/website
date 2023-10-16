import { onMount } from 'svelte';
import { writable } from 'svelte/store';

type ScrollInfo = {
    direction: 'up' | 'down';
    top: number;
    /* the amount of pixels the user has scrolled since changing directions */
    deltaDirChange: number;
};

export const createScrollInfo = () => {
    const scrollInfo = writable<ScrollInfo>({
        direction: 'down',
        top: 0,
        deltaDirChange: 0
    });

    let lastDirChange = 0;

    onMount(() => {
        const handleScroll = () => {
            scrollInfo.update((p) => {
                const top = window.scrollY;
                const direction = top > p.top ? 'down' : 'up';
                if (p.direction !== direction) {
                    lastDirChange = top;
                }
                const deltaDirChange = Math.abs(top - lastDirChange);

                return {
                    direction,
                    top,
                    deltaDirChange
                };
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return scrollInfo;
};
