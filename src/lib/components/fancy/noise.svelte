<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    interface $$Props {
        invert?: boolean;
        opacity?: number;
        grainSize?: number;
        animate?: boolean;
        class?: string;
    }

    let className: string = '';
    export let invert: boolean = false;
    export let opacity: number = 1;
    export let grainSize: number = 2.5;
    export let animate: boolean = false;
    export { className as class };

    const baseFrequency = grainSize! / 1;
</script>

<svg
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    class={classNames('pointer-events-none absolute inset-0 rounded-[inherit]', className)}
    style:opacity
    style:filter={invert ? 'invert(1)' : 'none'}
>
    <filter id="noise">
        <feTurbulence
            type="fractalNoise"
            {baseFrequency}
            numOctaves={3}
            stitchTiles="stitch"
            seed={0}
        >
            {#if animate}
                <animate attributeName="seed" from="0" to="100" dur="5s" repeatCount="indefinite" />
            {/if}
        </feTurbulence>
        <feColorMatrix type="matrix" values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0" />
        <feComponentTransfer>
            <feFuncR type="table" tableValues="0 1" />
            <feFuncG type="table" tableValues="0 1" />
            <feFuncB type="table" tableValues="0 1" />
        </feComponentTransfer>
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
</svg>
