<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { cva, type VariantProps } from 'cva';
    import type { SvelteHTMLElements } from 'svelte/elements';

    type HeroProps = SvelteHTMLElements['div'];

    const hero = cva(['flex', 'gap-8', 'relative'], {
        variants: {
            layout: {
                vertical: ['flex-col', 'max-w-[600px]'],
                horizontal: ['flex-col', 'md:flex-row']
            }
        },
        defaultVariants: {
            layout: 'vertical'
        }
    });

    const styles = cva('tracking-[-0.022em] text-white', {
        variants: {
            size: {
                title: ['text-7xl', 'flex-[1.3]'],
                display: 'text-[4rem] leading-[4.25rem] w-full'
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

<section class={classNames(hero({ layout }), classes)} {...props}>
    <h1 class={classNames(styles({ size }), 'font-aeonik-pro')}>
        <slot name="title" />
    </h1>
    {#if $$slots.description}
        <div class="flex-[1] self-end">
            <p class="text-secondary mt-5 text-base font-medium tracking-[-0.018em]">
                <slot name="description" />
            </p>
            <slot name="cta" />
        </div>
    {/if}
</section>
