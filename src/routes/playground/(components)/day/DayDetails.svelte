<script lang="ts">
    import { format } from 'date-fns';
    import { inView } from 'motion';
    import { activeDay } from '../../state';
    import { classNames } from '$lib/utils/classnames';

    export let index: number;
    export let date: Date = new Date();
    export let title: string;
    export let description: string;

    export let articles: Array<{
        title: string;
        label: string;
        url: string;
    }> = [];

    const scroll = (node: HTMLElement) => {
        inView(node, () => {
            activeDay.set(index);
        });
    };
</script>

<div use:scroll class="relative flex min-h-[75vh] flex-col gap-5 py-20 px-4">
    <span class="text-caption font-aeonik-fono block uppercase text-white">
        Day {index} - {format(date, 'E, MMM d')}<span class="text-accent">_</span>
    </span>
    <h2 class="text-title font-aeonik-pro text-white">{title}</h2>
    <p class="text-secondary text-body max-w-sm font-medium">{description}</p>

    <div class="relative">
        <div
            class="pointer-events-none absolute top-0 z-10 h-12 w-full"
            style="background: linear-gradient(to bottom, hsl(var(--p-body-bg-color)) 0%, rgba(51, 51, 51, 0) 100%);"
        />

        <div
            class="pointer-events-none absolute bottom-0 z-10 h-12 w-full"
            style="background: linear-gradient(to top, hsl(var(--p-body-bg-color)) 0%, rgba(51, 51, 51, 0) 100%);"
        />

        <div class={classNames('relative max-h-[28rem] space-y-5 overflow-y-scroll py-12')}>
            {#each articles as article}
                <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex flex-col gap-4 bg-[#2D2D31] py-4 px-5"
                >
                    <span class="text-body font-medium text-white md:max-w-[16rem]"
                        >{article.title}</span
                    >
                    <span class="flex items-center gap-2"
                        >{article.label}

                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="text-inherit"
                        >
                            <path
                                d="M5.5 10L14.5 10"
                                stroke="currentColor"
                                stroke-width="1.2"
                                stroke-linecap="round"
                            />
                            <path
                                d="M10 14.5L14.5 10"
                                stroke="currentColor"
                                stroke-width="1.2"
                                stroke-linecap="round"
                            />
                            <path
                                d="M10 5.5L14.5 10"
                                stroke="currentColor"
                                stroke-width="1.2"
                                stroke-linecap="round"
                            />
                        </svg>
                    </span>
                </a>
            {/each}
        </div>
    </div>
</div>
