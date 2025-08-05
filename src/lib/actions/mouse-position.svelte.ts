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

    const action = (node: HTMLElement | SVGSVGElement) => {
        const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
            position = {
                x: clientX - 12,
                y: clientY - 350
            };
        };
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
