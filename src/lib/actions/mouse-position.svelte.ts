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
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const tooltipWidth = 190;
            const rect = node.getBoundingClientRect();
            let tooltipX = event.clientX - rect.left + 12;

            if (tooltipX + tooltipWidth > window.innerWidth) {
                tooltipX = clientX - tooltipWidth - 10;
            }

            position = {
                x: tooltipX,
                y: event.clientY - rect.top + 12
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
