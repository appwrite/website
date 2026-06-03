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
        const handleInitialAnchor = () => {
            if (window.location.hash) {
                const anchorElement = document.querySelector(window.location.hash);
                if (anchorElement) {
                    return window.pageYOffset + anchorElement.getBoundingClientRect().top;
                }
            }
            return 0;
        };

        const initialTop = handleInitialAnchor();
        scrollInfo.set({ direction: 'down', top: initialTop, deltaDirChange: 0 });
        lastDirChange = initialTop;

        let scrollRaf = 0;
        const handleScroll = () => {
            if (scrollRaf) return;
            scrollRaf = requestAnimationFrame(() => {
                scrollRaf = 0;
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
            });
        };

        const scrollOpts: AddEventListenerOptions = { passive: true };
        window.addEventListener('scroll', handleScroll, scrollOpts);

        return () => {
            window.removeEventListener('scroll', handleScroll, scrollOpts);
            if (scrollRaf) cancelAnimationFrame(scrollRaf);
        };
    });

    return scrollInfo;
};
