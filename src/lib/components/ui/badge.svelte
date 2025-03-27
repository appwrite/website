<script lang="ts">
    import { cn } from '$lib/utils/classnames';
    import type { SvelteHTMLElements } from 'svelte/elements';
    import Eyebrow from './eyebrow.svelte';

    type $$Props = SvelteHTMLElements['span'];

    const { class: classes, ...props } = $$restProps;
</script>

<Eyebrow class="text-white">
    <span
        class={cn(
            'badge self-start rounded-[0.375rem] px-3 py-[0.375rem] backdrop-blur-2xl',
            classes
        )}
        {...props}
    >
        <slot />
    </span></Eyebrow
>

<style>
    :root,
    .light {
        --shadow-bg-color: #f2c8d6;
        --shadow-border-color: #f69db7;
        --shadow-opacity: 0.4;
    }

    .dark {
        --shadow-bg-color: #2c2c2f;
        --shadow-border-color: #39393c;
        --shadow-opacity: 0.13;
    }

    .badge {
        background: radial-gradient(
            98.13% 199.7% at 98.13% 100%,
            #fe6947 0%,
            #fd366e 41.6%,
            #fd366e 100%
        );
        box-shadow:
            0.1875rem 0.1875rem var(--shadow-bg-color),
            0.25rem 0.1875rem var(--shadow-border-color),
            0.1875rem 0.25rem var(--shadow-border-color),
            0.125rem 0.1875rem var(--shadow-border-color),
            0.1875rem 0.125rem var(--shadow-border-color);
    }
</style>
