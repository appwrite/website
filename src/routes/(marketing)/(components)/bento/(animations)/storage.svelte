<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import Image from '../../../(assets)/images/storage.webp';
    import { animate, hover, type AnimationSequence } from 'motion';
    import { isMobile } from '$lib/utils/is-mobile';
    import { getCodeHtml } from '$lib/utils/code';
    import GridPaper from '../../grid-paper.svelte';

    let container: HTMLElement;
    let imageComponent: HTMLElement;
    let image: HTMLElement;

    let w = 232;
    let width = $state(w);

    let h = 158;
    let height = $state(h);

    let br = 4;
    let borderRadius = $state(br);

    const content = $derived(`const result = storage.getFilePreview(
	 'photos',     // bucket ID
	 'sunset.heic',// file ID
	 ${width},          // width
	 ${height},          // height
	 '90',         // slight compression
	 ${borderRadius},            // border radius
	 'heic'        // output heic format
;`);

    const snippet = $derived(
        getCodeHtml({
            content,
            language: 'javascript',
            withLineNumbers: true
        })
    );

    $effect(() => {
        const startingSequence: AnimationSequence = [
            [
                image,
                { width: 285 },
                {
                    onUpdate: (latest) => {
                        console.log(latest);
                        width = +latest.toFixed();
                    }
                }
            ],
            [
                h,
                182,
                {
                    onUpdate: (latest) => (height = +latest.toFixed())
                }
            ]
        ];

        hover(container, () => {
            animate(startingSequence);
        });

        //animate(width, 285, { duration: 0.1 });
        //animate(height, 182);

        // animate(height, 182);
    });
</script>

<div
    class="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 md:col-span-5"
    bind:this={container}
>
    <div class="space-y-3 px-3 pt-2 pb-4">
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
        <div
            class="web-code-snippet absolute -right-4 bottom-8 z-10 overflow-hidden rounded-l-xl bg-[#232325] p-1"
        >
            <div class="px-4 py-3">Node.js</div>
            <div
                class="web-code-snippet-content z-10 rounded-l-[10px] bg-gradient-to-br from-black/48 to-transparent p-3"
            >
                {@html snippet}
            </div>
        </div>
        <div
            class="relative origin-top-left border border-white/50 p-1"
            style:width="232px"
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
                ></div>
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
            ></div>
        </div>

        <GridPaper class="absolute inset-0 bg-size-[calc(100%/9)]" />
    </div>
</div>
