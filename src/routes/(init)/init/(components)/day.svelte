<script lang="ts" context="module">
    export type DayProps = {
        illustration: string;
        release: Date;
        title: string;
        description: string;
        url: string;
        index: number;
        content?: Array<{
            type: 'Blog' | 'Docs' | 'Article';
            title: string;
            url: string;
            label?: string;
        }>;
    };
</script>

<script lang="ts">
    import { format } from 'date-fns';
    import PreReleaseCard from './pre-release-card.svelte';
    import Window from './ui/window.svelte';
    import { classNames } from '$lib/utils/classnames';

    export let release: DayProps['release'];
    export let illustration: DayProps['illustration'];
    export let content: DayProps['content'] = [];
    export let title: DayProps['title'];
    export let description: DayProps['description'];
    export let url: DayProps['url'];
    export let index: DayProps['index'];

    let now = new Date();
    let interval = setInterval(() => {
        if (hasReleased) {
            clearInterval(interval);
            return;
        }
        now = new Date();
    }, 1000);

    $: hasReleased = now >= release;
</script>

{#if hasReleased}
    <div class="scroll-mt-10 space-y-4 pb-20" id="day-{index}">
        <Window>
            <div slot="title" class="text-micro flex items-center gap-1 text-white">
                Day {index} <span class="text-accent">/</span>
                {format(release, 'EEEE, MMM d')}
            </div>

            <div class="border-smooth overflow-hidden rounded-xl border">
                <div
                    class="bg-smooth relative grid grid-cols-1 place-items-center justify-between px-4 md:min-h-[50vh] md:grid-cols-12"
                >
                    <div
                        class="border-offset relative z-10 col-span-5 flex h-full flex-col justify-center border-x-2 border-none py-8 px-4 md:border-dashed md:p-8"
                    >
                        <h2 class="text-display font-aeonik-pro text-primary mb-2">
                            {title}<span class="text-accent">_</span>
                        </h2>
                        <p class="text-secondary text-body max-w-sm font-medium">
                            {description}
                        </p>
                        <a href={url} class="text-primary group text-sub-body mt-12 flex gap-1"
                            >Announcement
                            <span
                                class="web-icon-arrow-right transition-transform group-hover:translate-x-0.5"
                            />
                        </a>
                    </div>
                    <div class="col-span-7 max-h-[50vh] overflow-hidden">
                        <img
                            src={illustration}
                            alt="key illustration"
                            class="mt-10 -mb-20 size-[320px] md:size-[600px]"
                        />
                    </div>
                </div>
                {#if content && content.length}
                    <div
                        class={classNames(
                            'divide-offset mt-10 divide-y-2 divide-dashed',
                            'before:border-offset before:-mb-px before:block before:h-0.5 before:w-full before:border-t-2 before:border-dashed',
                            'after:border-offset after:-mt-px after:block after:h-0.5 after:w-full after:border-t-2 after:border-dashed'
                        )}
                    >
                        {#each content as { type, title, url, label }}
                            <a href={url} class="group block cursor-pointer">
                                <div
                                    class={classNames(
                                        'bg-smooth group-hover:bg-offset relative mx-4 -mb-0.5 flex flex-col justify-between py-4 px-4 transition md:mx-8 md:flex-row',
                                        'before:border-offset before:absolute before:inset-y-0 before:left-0 before:-mr-px before:block before:w-0.5 before:border-l-2 before:border-dashed',
                                        'after:border-offset after:absolute after:inset-y-0 after:right-0 after:-ml-px after:block after:w-0.5 after:border-r-2 after:border-dashed'
                                    )}
                                >
                                    <div class="text-primary flex flex-col gap-4 md:flex-row">
                                        <span
                                            class="group-hover:bg-accent/50 bg-smooth w-fit rounded-[4px] py-0.5 px-2"
                                            >{type}</span
                                        >
                                        <span class="font-aeonik-pro text-label">{title}</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        {label ?? 'Read article'}
                                        <span
                                            class="web-icon-arrow-right transition-transform group-hover:translate-x-0.5"
                                        />
                                    </div>
                                </div>
                            </a>
                        {/each}
                    </div>
                {/if}

                <div class="flex h-32 items-center gap-4 px-8">Videos n shit</div>
            </div>
        </Window>
    </div>
{:else}
    <PreReleaseCard index={1} {release} />
{/if}
