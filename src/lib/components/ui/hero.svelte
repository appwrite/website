<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import { cva, type VariantProps } from 'cva';
    import type { SvelteHTMLElements } from 'svelte/elements';

    type HeroProps = SvelteHTMLElements['div'];

    const hero = cva(['flex', 'relative'], {
        variants: {
            layout: {
                vertical: ['flex-col', 'max-w-[600px]'],
                horizontal: ['flex-col', 'lg:flex-row']
            }
        },
        defaultVariants: {
            layout: 'vertical'
        }
    });

    const styles = cva('text-white', {
        variants: {
            size: {
                title: ['text-headline', 'font-aeonik-pro', 'flex-[1.3]'],
                display: ['text-display', 'font-aeonik-pro', 'w-full']
            }
        },
        defaultVariants: {
            size: 'title'
        }
    });

    type $$Props = HeroProps & VariantProps<typeof hero> & VariantProps<typeof styles>;

    export let layout: $$Props['layout'] = 'horizontal';
    export let size: $$Props['size'] = 'title';
    const { class: classes, ...props } = $$restProps;
</script>

<section class={cn(hero({ layout }), classes)} {...props}>
    <h1 class={cn(styles({ size }))}>
        <slot name="title" />
    </h1>
    {#if $$slots.description}
        <div class="flex-1 self-end">
            <p class="text-secondary text-description mt-6 font-medium">
                <slot name="description" />
            </p>
            <slot name="cta" />
        </div>
    {/if}
</section>
