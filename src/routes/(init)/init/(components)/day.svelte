<script lang="ts" module>
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
        links?: Array<{
            title: string;
            url: string;
            poster: string;
            type: 'discord' | 'video' | 'announcement';
        }>;
        announcementVideo?: {
            title: string;
            url: string;
            poster: string;
        };
    };
</script>

<script lang="ts">
    import { format } from 'date-fns';
    import PreReleaseCard from './pre-release-card.svelte';
    import Window from './window.svelte';
    import { classNames } from '$lib/utils/classnames';
    import MediaCard from './media-card.svelte';
    import { onDestroy } from 'svelte';

    const {
        release,
        illustration,
        content = [],
        announcementVideo = undefined,
        links = [],
        title,
        description,
        url,
        index
    }: DayProps = $props();

    let now = $state(new Date());
    const interval = setInterval(() => {
        if (hasReleased) {
            clearInterval(interval);
            return;
        }
        now = new Date();
    }, 1000);

    onDestroy(() => {
        clearInterval(interval);
    });

    let hasReleased = $derived(now >= release);
</script>

{#if hasReleased}
    <div class="scroll-mt-10 space-y-4 pb-8" id="day-{index}">
        <Window>
            {#snippet title()}
                <div class="text-micro flex items-center gap-1 text-white">
                    Day {index} <span class="text-accent">/</span>
                    {format(release, 'EEEE, MMM d')}
                </div>
            {/snippet}

            <div class="border-smooth overflow-hidden rounded-xl border-2">
                <div
                    class="bg-smooth relative grid grid-cols-1 place-items-center justify-between px-4 md:min-h-[50vh] md:grid-cols-12"
                >
                    <div
                        class="border-offset relative z-10 col-span-5 flex h-full flex-col justify-center gap-4 border-x-2 border-none px-4 py-8 md:border-dashed md:p-8"
                    >
                        <h2 class="text-display font-aeonik-pro text-primary">
                            {title}<span class="text-accent">_</span>
                        </h2>
                        <p class="text-secondary text-body max-w-sm font-medium">
                            {description}
                        </p>
                        {#if announcementVideo}
                            <div class="mt-4">
                                <MediaCard {...announcementVideo} type="announcement" />
                            </div>
                        {:else}
                            <a href={url} class="text-primary group text-sub-body mt-12 flex gap-1"
                                >Announcement
                                <span
                                    class="web-icon-arrow-right transition-transform group-hover:translate-x-0.5"
                                ></span>
                            </a>
                        {/if}
                    </div>
                    <div
                        class="col-span-7 flex max-h-[50vh] items-center justify-center overflow-hidden"
                    >
                        <img
                            src={illustration}
                            alt="key illustration"
                            class="size-[320px] md:size-[500px]"
                        />
                    </div>
                </div>
                {#if content?.length}
                    <div
                        class={classNames(
                            'divide-offset my-10 divide-y-2 divide-dashed',
                            'before:border-offset before:-mb-px before:block before:h-0.5 before:w-full before:border-t-2 before:border-dashed',
                            'after:border-offset after:-mt-px after:block after:h-0.5 after:w-full after:border-t-2 after:border-dashed'
                        )}
                    >
                        {#each content as { type, title, url, label }}
                            <a href={url} class="group block cursor-pointer">
                                <div
                                    class={classNames(
                                        'bg-smooth group-hover:bg-offset relative mx-4 -mb-0.5 flex flex-col justify-between px-4 py-4 transition md:mx-8 md:flex-row',
                                        'before:border-offset before:absolute before:inset-y-0 before:left-0 before:-mr-px before:block before:w-0.5 before:border-l-2 before:border-dashed',
                                        'after:border-offset after:absolute after:inset-y-0 after:right-0 after:-ml-px after:block after:w-0.5 after:border-r-2 after:border-dashed'
                                    )}
                                >
                                    <div class="text-primary flex flex-col gap-4 md:flex-row">
                                        <span class="bg-smooth w-fit rounded-[4px] px-2 py-0.5"
                                            >{type}</span
                                        >
                                        <span class="font-aeonik-pro text-label">{title}</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        {label ?? 'Read article'}
                                        <span
                                            class="web-icon-arrow-right transition-transform group-hover:translate-x-0.5"
                                        ></span>
                                    </div>
                                </div>
                            </a>
                        {/each}
                    </div>
                {/if}

                {#if links?.length}
                    <div class="flex min-h-48 flex-col items-center gap-8 px-8 pb-10 md:flex-row">
                        {#each links as link}
                            <MediaCard {...link} />
                        {/each}
                    </div>
                {/if}
            </div>
        </Window>
    </div>
{:else}
    <PreReleaseCard {index} {release} />
{/if}
