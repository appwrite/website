<script lang="ts">
    import type { SVGAttributes } from 'svelte/elements';
    import type { IconType } from './types';

    type Props = SVGAttributes<SVGElement> & {
        class?: string;
        name?: IconType;
    };
    const {
        xmlns = 'http://www.w3.org/2000/svg',
        viewBox = '0 0 24 24',
        height = 20,
        width = 20,
        class: className = '',
        name,
        ...rest
    }: Props = $props();
</script>

<svg class={className} {xmlns} {height} {width} {viewBox} {...rest}>
    <use xlink:href="#{name}" />
</svg>
