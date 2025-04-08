<script lang="ts">
    import type { SVGAttributes } from 'svelte/elements';
    import type { IconType } from './types';
    import { classNames } from '$lib/utils/classnames';

    type Props = { name: IconType; class?: string } & SVGAttributes<SVGElement>;

    const {
        xmlns = 'http://www.w3.org/2000/svg',
        height = 20,
        width = 20,
        viewBox = '0 0 24 24',
        name,
        class: className,
        ...props
    }: Props = $props();
</script>

<svg {xmlns} {viewBox} {height} {width} class={className} {...props}>
    <use xlink:href="#{name}" />
</svg>
