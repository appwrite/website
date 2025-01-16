<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import ProductHunt from '../(assets)/logos/product-hunt.svg';

    import { createToggleGroup, melt } from '@melt-ui/svelte';

    const studies = [
        {
            logo: ProductHunt,
            headline:
                'Product Hunt has leveraged Appwrite to transform logistics and supply chain management for circular businesses_',
            blur: 'Been a huge supporter of Appwrite for over a year, championing it even at the companies I was working at.',
            name: 'Terry Lennon',
            title: 'Engineer at Product Hunt',
            url: '/case-studies/product-hunt'
        },
        {
            logo: ProductHunt,
            headline:
                'Product Hunt has leveraged Appwrite to transform logistics and supply chain management for circular businesses_',
            blur: 'Been a huge supporter of Appwrite for over a year, championing it even at the companies I was working at.',
            name: 'Terry Lennon',
            title: 'Engineer at Product Hunt',
            url: '/case-studies/product-hunt'
        },
        {
            logo: ProductHunt,
            headline:
                'Product Hunt has leveraged Appwrite to transform logistics and supply chain management for circular businesses_',
            blur: 'Been a huge supporter of Appwrite for over a year, championing it even at the companies I was working at.',
            name: 'Terry Lennon',
            title: 'Engineer at Product Hunt',
            url: '/case-studies/product-hunt'
        }
    ];

    const {
        elements: { root, item },
        states: { value }
    } = createToggleGroup({
        type: 'single',
        defaultValue: '0'
    });
</script>

<div
    class={classNames(
        'gradient-background relative flex min-h-[60vh] items-center justify-center overflow-hidden',
        'before:absolute before:inset-0 before:top-0 before:left-0 before:-z-10 before:block before:h-full before:bg-[radial-gradient(circle_at_120%_-50%,_hsla(248,_99%,_70%,_0.3)_0,_transparent_40%)] before:blur-2xl',
        'after:absolute after:inset-0 after:top-0 after:right-0 after:-z-10 after:mt-auto after:mb-0 after:block after:h-full after:bg-[radial-gradient(circle_at_-15%_125%,_hsla(343,_98%,_60%,_0.2)_0px,_transparent_40%)] after:blur-2xl'
    )}
>
    <div class="container flex h-full items-center gap-4" use:melt={$root}>
        {#each studies as study, i}
            <div
                class={classNames(
                    'h-[350px] grow overflow-hidden rounded-lg bg-black/10 p-6 backdrop-blur-lg transition-all duration-1000 ease-[var(--spring)]',
                    'data-[state="on"]:[flex-basis:60%] data-[state="off"]:[flex-basis:20%]'
                )}
                role="figure"
                use:melt={$item(i.toString())}
            >
                {study.headline}
            </div>
        {/each}
    </div>
</div>

<style>
    :root {
        --spring: linear(
            0,
            0.001,
            0.004,
            0.009,
            0.016,
            0.024,
            0.035,
            0.048,
            0.063 9.1%,
            0.098,
            0.141,
            0.191,
            0.25,
            0.317,
            0.391,
            0.473,
            0.563,
            0.66,
            0.765,
            0.879,
            1,
            0.941,
            0.891,
            0.848,
            0.813 45.5%,
            0.798,
            0.785,
            0.774,
            0.766,
            0.759,
            0.754,
            0.751,
            0.75,
            0.751,
            0.754,
            0.759,
            0.766,
            0.774,
            0.785,
            0.798,
            0.813 63.6%,
            0.848,
            0.891,
            0.941,
            1 72.7%,
            0.985,
            0.973,
            0.962,
            0.953,
            0.946,
            0.941,
            0.938 80.7% 83%,
            0.941,
            0.946,
            0.953,
            0.962,
            0.973,
            0.985,
            1,
            0.993,
            0.988,
            0.985,
            0.984,
            0.985,
            0.988,
            0.993,
            1
        );
    }
</style>
