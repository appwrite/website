<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import type { SvelteHTMLElements } from 'svelte/elements';
    import type { IconType } from './types';

    type Props = SvelteHTMLElements['span'] & {
        class?: string;
        name?: IconType;
    };

    const { class: className = '', name = 'arrow-right', ...rest }: Props = $props();
</script>

<span class={classNames(`web-icon-${name}`, className)} {...rest}></span>
