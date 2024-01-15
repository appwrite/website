import type { AnimationConfig, FlipParams } from 'svelte/animate';
import { cubicOut } from 'svelte/easing';

// eslint-disable-next-line @typescript-eslint/ban-types
export function is_function(thing: unknown): thing is Function {
    return typeof thing === 'function';
}

type Params = FlipParams & {
    scale?: boolean;
};

/**
 * The flip function calculates the start and end position of an element and animates between them, translating the x and y values.
 * `flip` stands for [First, Last, Invert, Play](https://aerotwist.com/blog/flip-your-animations/).
 *
 * https://svelte.dev/docs/svelte-animate#flip
 */
export function flip(
    node: HTMLElement,
    { from, to }: { from: DOMRect; to: DOMRect },
    params: Params = {}
): AnimationConfig {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    const [ox, oy] = style.transformOrigin.split(' ').map(parseFloat);
    const dx = from.left + (from.width * ox) / to.width - (to.left + ox);
    const dy = from.top + (from.height * oy) / to.height - (to.top + oy);

    const {
        delay = 0,
        duration = (d) => Math.sqrt(d) * 120,
        easing = cubicOut,
        scale = true
    } = params;
    return {
        delay,
        duration: is_function(duration) ? duration(Math.sqrt(dx * dx + dy * dy)) : duration,
        easing,
        css: (t, u) => {
            const x = u * dx;
            const y = u * dy;
            const sx = scale ? t + (u * from.width) / to.width : 1;
            const sy = scale ? t + (u * from.height) / to.height : 1;
            return `transform: ${transform} translate(${x}px, ${y}px) scale(${sx}, ${sy});
     
      `;
        },
        tick(t, u) {
            const sx = scale ? t + (u * from.width) / to.width : 1;
            const sy = scale ? t + (u * from.height) / to.height : 1;
            const inverse_sx = scale ? 1 / sx : 1;
            const inverse_sy = scale ? 1 / sy : 1;

            node.style.setProperty('--inverse-sx', inverse_sx.toString());
            node.style.setProperty('--inverse-sy', inverse_sy.toString());
        }
    };
}
