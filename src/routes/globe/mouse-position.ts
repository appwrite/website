import { readable } from 'svelte/store';

export const mousePosition = readable({ x: 0, y: 0 }, (set) => {
    const updateMousePosition = (event: MouseEvent) => {
        set({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
        window.removeEventListener('mousemove', updateMousePosition);
    };
});
