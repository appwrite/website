import { inView } from 'motion-legacy';
import { type Writable, writable } from 'svelte/store';

export const useMousePosition = () => {
    let position = writable<{ x: number; y: number }>({
        x: 0,
        y: 0
    });

    const action = (node: HTMLElement) => {
        const handleMouseMove = (event: MouseEvent) => {
            position.set({
                x: event.clientX,
                y: event.clientY
            });
        };

        inView(
            node,
            () => {
                node.addEventListener('mousemove', handleMouseMove);
            },
            { amount: 'any' }
        );

        return {
            destroy() {
                node.removeEventListener('mousemove', handleMouseMove);
            }
        };
    };

    return { action, position };
};
