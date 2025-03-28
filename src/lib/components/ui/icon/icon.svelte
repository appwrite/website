<script lang="ts">
    import { cn } from '$lib/utils/classnames';
    import type { SvelteHTMLElements } from 'svelte/elements';
    import type { Icon } from './types';

    type $$Props = {
        icon?: Icon;
        class?: string;
    } & SvelteHTMLElements['span'];

    let className: $$Props['class'] = '';
    export { className as class };
    export let icon: $$Props['icon'] = 'arrow-right';
</script>

<span class={cn(`web-icon-${icon}`, className)} {...$$restProps} />
