<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import type { SvelteHTMLElements } from 'svelte/elements';
    import type { IconType } from './types';

    type $$Props = {
        icon?: IconType;
        class?: string;
    } & SvelteHTMLElements['span'];

    let className: $$Props['class'] = '';
    export { className as class };
    export let icon: $$Props['icon'] = 'arrow-right';
</script>

<span class={classNames(`web-icon-${icon}`, className)} {...$$restProps}></span>
