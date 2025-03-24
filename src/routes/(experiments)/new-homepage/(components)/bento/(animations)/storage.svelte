<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { onMount } from 'svelte';
    import Image from '../../../(assets)/images/storage.webp';
    import {
        animate,
        hover,
        inView,
        motionValue,
        transform,
        type AnimationPlaybackControls,
        type AnimationSequence
    } from 'motion';
    import { isMobile } from '$lib/utils/is-mobile';

    let container: HTMLElement;
    let imageComponent: HTMLElement;
    let image: HTMLElement;

    let widthPx: number = 232;
    let heightPx: number = 148;
    let borderRadiusPx: number = 4;

    const width = transform([0, 100], [widthPx, widthPx * 1.2]);

    let widthElement: HTMLElement;
    let heightElement: HTMLElement;
    let borderRadiusElement: HTMLElement;

    const snippet: string = `const result = storage.getFilePreview(
	 'photos',     // bucket ID
	 'sunset.heic',// file ID
	 ${widthPx},          // width
	 ${heightPx},          // height
	 '90',         // slight compression
	 ${borderRadiusPx},            // border radius
	 'heic'        // output heic format
;`;

    console.log({ width });

    onMount(() => {
        const from: AnimationSequence = [
            [
                imageComponent,
                { scale: 1, width: '232px', height: '158px' },
                { duration: 0.25, at: 0, type: 'spring' }
            ],
            [image, { borderRadius: '4px' }, { duration: 0.25 }]
        ];

        const to: AnimationSequence = [
            [
                imageComponent,
                { width: width(282), height: '198px' },
                { duration: 0.25, at: 0, type: 'spring' }
            ],
            [image, { borderRadius: '24px' }, { duration: 0.25 }],
            [image, { borderRadius: '8px' }, { duration: 0.25, delay: 0.45 }],
            [imageComponent, { width: '250px' }, { duration: 0.25, delay: 0.45 }],
            [imageComponent, { height: '250px' }, { duration: 0.25, delay: 0.45 }]
        ];

        inView(
            container,
            () => {
                if (!isMobile()) return;
                animate(to);

                return () => {
                    animate(from);
                };
            },
            { amount: 'all' }
        );

        hover(container, () => {
            if (isMobile()) return;
            animate(to);

            return () => {
                animate(from);
            };
        });
    });
</script>

<div
    class="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 md:col-span-5"
    bind:this={container}
>
    <div class="space-y-3 pt-2 px-3 pb-4">
        <div class="flex items-center gap-2">
            <img src="/images/icons/illustrated/dark/storage.png" alt="Storage" class="size-7" />
            <h3 class="font-aeonik-pro text-label text-primary">Storage</h3>
        </div>
        <p class="text-sub-body text-primary max-w-lg font-medium">
            <span class="text-secondary">Securely store files with</span> advanced compression, encryption
            and image transformations.
        </p>
    </div>
    <div
        class="relative flex h-[26.25rem] justify-between overflow-clip rounded-xl bg-black/24 p-8"
    >
        <div class="absolute right-0 bottom-8 aspect-square">
            <span bind:this={widthElement}>{widthPx}</span>
            <span bind:this={heightElement}>{heightPx}</span>
            <span bind:this={borderRadiusElement}>{borderRadiusPx}</span>
        </div>
        <div
            class="relative origin-top-left border border-white/50 p-1"
            style:width="242px"
            style:height="158px"
            bind:this={imageComponent}
        >
            {#each [1, 2, 3, 4] as _, i}
                <div
                    class={classNames(
                        'absolute flex h-1 w-1 items-center justify-center border border-white/24 bg-white/24 backdrop-blur-sm',
                        {
                            '-left-0.5': i === 0 || i === 2,
                            '-top-0.5': i === 0 || i === 1,
                            '-right-0.5': i === 1 || i === 3,
                            '-bottom-0.5': i === 2 || i === 3
                        }
                    )}
                />
            {/each}

            <img
                src={Image}
                alt="Storage"
                class="h-full w-full object-cover"
                style:border-radius="4px"
                bind:this={image}
            />
            <div
                class="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"
            />
        </div>

        <div
            class="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"
        />
    </div>
</div>
