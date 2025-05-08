import { hover } from 'motion';
import { writable } from 'svelte/store';

export const useMousePosition = () => {
    let position = writable<{ x: number; y: number }>({
        x: 0,
        y: 0
    });

    const action = (node: HTMLElement) => {
        const handleMouseMove = (event: MouseEvent) => {
            // Get the bounding rectangle of the element
            const rect = node.getBoundingClientRect();

            // Calculate position relative to the element
            position.set({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            });
        };

        hover(node, () => {
            node.addEventListener('mousemove', handleMouseMove);
        });

        return {
            destroy() {
                node.removeEventListener('mousemove', handleMouseMove);
            }
        };
    };

    return { action, position };
};
