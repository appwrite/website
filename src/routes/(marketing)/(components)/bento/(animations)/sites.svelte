<script lang="ts">
    import { isMobile } from '$lib/utils/is-mobile';
    import GridPaper from '../../grid-paper.svelte';
    import { animate, hover, inView, stagger, transform } from 'motion';
    import Site from '../../../(assets)/images/site.png';
    import { classNames } from '$lib/utils/classnames';
    import Spinner from '../../spinner.svelte';
    import { unwrite, write } from '$lib/animations';

    let container: HTMLElement;
    let seconds = $state<number>(32);
    let lastLine = $state<string>('');

    const text = [
        {
            timestamp: '18:31:21.320',
            content: 'Appwrite Build'
        },
        {
            timestamp: '18:31:21.344',
            content: 'Running build in Washington, D.C., USA (East) – iad1'
        },
        {
            timestamp: '18:31:21.450',
            content:
                'Cloning github.com/chenparnasa/isr-blog-nextjs-wordpress (Branch: main, Commit: de72693)'
        },
        {
            timestamp: '18:31:21.836',
            content: 'Previous build cache not available'
        },
        {
            timestamp: '18:31:21.860',
            content: 'Cloning completed: 409.772ms'
        },
        {
            timestamp: '18:31:22.123',
            content: 'Running "appwrite build"'
        },
        {
            timestamp: '18:31:22.938',
            content: 'Appwrite CLI 37.6.1'
        }
    ];

    let shouldAnimate = $state<boolean>(false);

    $effect(() => {
        hover(container, () => {
            if (isMobile()) return;

            shouldAnimate = true;

            const animation = animate(32, 60, {
                onUpdate: (latest) => (seconds = +latest.toFixed()),
                duration: 44
            });

            write('Installing dependencies...', (v) => (lastLine = v), 500);

            return () => {
                shouldAnimate = false;
                animation.stop();
                animate(seconds, 32, {
                    onUpdate: (latest) => (seconds = +latest.toFixed()),
                    duration: 0.25
                });
                unwrite('Installing dependencies...', (v) => (lastLine = v), 500);
            };
        });

        inView(
            container,
            () => {
                if (!isMobile()) return;
                shouldAnimate = true;

                const animation = animate(32, 60, {
                    onUpdate: (latest) => (seconds = +latest.toFixed()),
                    duration: 44
                });

                write('Installing dependencies...', (v) => (lastLine = v), 500);

                return () => {
                    shouldAnimate = false;
                    animation.stop();
                    animate(seconds, 32, {
                        onUpdate: (latest) => (seconds = +latest.toFixed()),
                        duration: 0.25
                    });
                    unwrite('Installing dependencies...', (v) => (lastLine = v), 500);
                };
            },
            { amount: 'all' }
        );
    });
</script>

<div
    class="border-smooth group col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2"
    bind:this={container}
>
    <div class="space-y-3 px-3 pt-2 pb-4">
        <div class="flex items-center gap-2">
            <img src="/images/icons/illustrated/dark/sites.png" alt="Sites" class="size-7" />
            <h3 class="font-aeonik-pro text-label text-primary">Sites</h3>
        </div>
        <p class="text-sub-body text-primary max-w-lg font-medium">
            <span class="text-secondary">Host and maintain</span> your website domains and frontend code.
            Integrated with all Appwrite products.
        </p>
    </div>
    <div
        class="relative flex min-h-[425px] flex-1 flex-col overflow-hidden rounded-xl bg-black/24 px-3 md:px-8"
    >
        <div
            class="mx-auto mt-6 flex w-full flex-col overflow-hidden rounded-[1.25rem] bg-[#232325]/90 mask-b-from-60% mask-b-to-100% px-1 pb-1 backdrop-blur-md md:mt-12 md:max-w-1/2"
        >
            <div class="flex h-8 w-full items-center gap-1 pl-2">
                {#each Array.from({ length: 3 }) as _}
                    <div class="size-2 rounded-full bg-[#D9D9D9]"></div>
                {/each}
            </div>

            <img src={Site} alt="Site screen" class="rounded-2xl" />
        </div>

        <div
            class="border-smooth absolute -right-12 bottom-8 z-1 mx-auto flex w-full max-w-[450px] flex-col overflow-hidden rounded-[1.25rem] border bg-[#1D1D21] px-2 pb-2 md:right-32"
        >
            <div class="flex h-10 w-full items-center gap-6 px-2 md:justify-between">
                <div class="flex items-center gap-2">
                    <span class="text-caption text-primary"> Deployment logs</span>
                    <span
                        class="text-micro text-secondary rounded-md bg-white/20 px-1.5 py-0.5 font-light"
                        >Building</span
                    >
                </div>
                <div class="flex items-center gap-2">
                    <Spinner {shouldAnimate} />
                    <span class="font-mono text-sm">{seconds}s</span>
                </div>
            </div>

            <div
                class="text-micro flex flex-col flex-nowrap overflow-hidden rounded-[12px] bg-[#19191C] p-4 font-mono"
            >
                <div class="w-[900px]">
                    {#each text as { timestamp, content }, i}
                        <div class="flex flex-nowrap gap-2">
                            <span class="text-secondary block">{timestamp}</span>
                            <span
                                class={classNames('text-primary block flex-nowrap', {
                                    'text-[#5382CB]': i === 0
                                })}>{content}</span
                            >
                        </div>
                    {/each}
                    <div class="flex flex-nowrap gap-2">
                        <span class="text-secondary block">18:31:23.305</span>
                        <span class="text-primary block flex-nowrap">{lastLine}</span>
                    </div>
                </div>
            </div>
        </div>

        <GridPaper class="absolute inset-0 -z-10 bg-size-[calc(100%/23)]" />
    </div>
</div>
