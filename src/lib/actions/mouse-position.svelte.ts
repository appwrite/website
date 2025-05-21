import { hover } from 'motion';
import { writable } from 'svelte/store';

export interface Position {
    x: number;
    y: number;
}

export const useMousePosition = () => {
    let position = $state<Position>({
        x: 0,
        y: 0
    });

    const handleMouseMove = (event: MouseEvent) => {
        position = {
            x: event.offsetX,
            y: event.offsetY
        };
    };

    const action = (node: HTMLElement | SVGSVGElement) => {
        hover(node, () => {
            document.addEventListener('mousemove', handleMouseMove);
        });

        return {
            destroy() {
                document.removeEventListener('mousemove', handleMouseMove);
            }
        };
    };

    return {
        action,
        position: () => {
            return position;
        }
    };
};
