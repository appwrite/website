<script lang="ts">
    import { animate, hover, inView } from 'motion';

    import GridPaper from '../../grid-paper.svelte';
    import { isMobile } from '$lib/utils/is-mobile';
    import { classNames } from '$lib/utils/classnames';

    const commands = [
        'GenerateReport',
        'SendEmail',
        'UpdateProfile',
        'DeleteAccount',
        'CreateInvoice'
    ];

    let container: HTMLElement;
    let platformQueue: HTMLElement;

    $effect(() => {
        hover(container, () => {
            if (isMobile()) return;

            return () => {};
        });

        inView(container, () => {
            if (!isMobile()) return;

            return () => {};
        });
    });
</script>

<a
    href="/products/functions"
    class="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 transition-shadow duration-300 hover:shadow-[0px_0px_0px_4px_var(--color-offset)] focus:shadow-[0px_0px_0px_4px_var(--color-offset)] md:col-span-6 lg:col-span-4"
    bind:this={container}
>
    <div class="space-y-3 px-3 pt-2 pb-4">
        <div class="flex items-center gap-2">
            <img
                src="/images/icons/illustrated/dark/functions.png"
                alt="Functions"
                class="size-7"
            />
            <h3 class="font-aeonik-pro text-label text-primary">Functions</h3>
        </div>
        <p class="text-sub-body text-primary max-w-lg font-medium">
            Deploy and scale serverless functions <span class="text-secondary"
                >in 30+ secure, isolated runtimes in 13 languages.</span
            >
        </p>
    </div>
    <div
        class="relative flex h-85 items-center justify-between overflow-clip rounded-xl bg-black/24 px-8"
    >
        <div
            class="flex flex-1 flex-col items-center gap-3 overflow-clip mask-linear-[to_top,_transparent_0%,_white_50%,_transparent_100%] mask-alpha text-center"
        >
            <div class="flex h-max flex-col items-center gap-3 pt-3">
                {#each commands as command, i}
                    <div
                        class="text-caption relative w-fit shrink-0 overflow-hidden rounded-2xl border border-transparent p-px font-mono text-sm text-white"
                    >
                        <div class="h-full w-full rounded-2xl bg-[#202023] px-3 py-1 text-white/80">
                            {command}
                        </div>
                        <div
                            class="absolute inset-0 -z-1 bg-linear-to-l from-white/12 to-transparent"
                        ></div>
                    </div>
                {/each}
            </div>
        </div>

        <GridPaper class="absolute inset-0 bg-size-[calc(100%/13)]" />
    </div>
</a>
