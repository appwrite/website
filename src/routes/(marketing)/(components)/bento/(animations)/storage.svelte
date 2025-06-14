<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import Image from '../../../(assets)/images/storage.webp';
    import { animate, hover, inView, type AnimationSequence } from 'motion';
    import GridPaper from '../../grid-paper.svelte';
    import { isMobile } from '$lib/utils/is-mobile';
    import { trackEvent } from '$lib/actions/analytics';

    let container: HTMLElement;
    let image: HTMLElement;

    $effect(() => {
        hover(container, () => {
            if (isMobile()) return;

            animate(image, { borderRadius: '24px', filter: 'grayscale(25%)' }, { duration: 0.2 });

            return () => {
                animate(
                    image,
                    {
                        borderRadius: '4px',
                        filter: 'grayscale(100%)'
                    },
                    { duration: 0.2 }
                );
            };
        });

        inView(
            container,
            () => {
                if (!isMobile()) return;

                animate(
                    image,
                    {
                        borderRadius: '24px',
                        filter: 'grayscale(25%)'
                    },
                    { duration: 0.2 }
                );

                return () => {
                    animate(
                        image,
                        { borderRadius: '4px', filter: 'grayscale(100%)' },
                        { duration: 0.2 }
                    );
                };
            },
            {
                amount: 'all'
            }
        );
    });
</script>

<a
    href="/products/storage"
    class="border-smooth group col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 transition-shadow duration-300 hover:shadow-[0px_0px_0px_4px_var(--color-offset)] focus:shadow-[0px_0px_0px_4px_var(--color-offset)] md:col-span-6 lg:col-span-4"
    onclick={() => {
        trackEvent(`bento-storage-click`);
    }}
    bind:this={container}
>
    <div class="space-y-3 px-3 pt-2 pb-4">
        <div class="flex items-center gap-2">
            <img
                loading="lazy"
                src="/images/icons/illustrated/dark/storage.png"
                alt="Storage icon"
                class="size-7"
            />
            <h3 class="font-aeonik-pro text-label text-primary">Storage</h3>
        </div>
        <p class="text-sub-body text-primary max-w-lg font-medium">
            <span class="text-secondary">Securely store files with</span> advanced compression, encryption
            and image transformations.
        </p>
    </div>
    <div
        class="relative mt-auto mb-0 flex h-85 items-center justify-center overflow-clip rounded-xl bg-black/24 p-8"
    >
        <div class="relative h-fit border border-white/50 p-1">
            {#each [1, 2, 3, 4] as _, i}
                <div
                    class={classNames(
                        'absolute z-10 flex h-1 w-1 items-center justify-center border border-white/24 bg-white/24 backdrop-blur-sm',
                        {
                            '-left-0.5': i === 0 || i === 2,
                            '-top-0.5': i === 0 || i === 1,
                            '-right-0.5': i === 1 || i === 3,
                            '-bottom-0.5': i === 2 || i === 3
                        }
                    )}
                ></div>
            {/each}

            <img
                loading="lazy"
                src={Image}
                alt="Storage"
                class="md:max-w-auto h-full w-full max-w-[350px] overflow-hidden object-cover transition-all"
                bind:this={image}
                style:border-radius="4px"
                style:filter="grayscale(100%)"
            />
            <div
                class="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"
            ></div>
        </div>

        <GridPaper class="absolute inset-0 bg-size-[calc(100%/9)]" />
    </div>
</a>
