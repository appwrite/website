<script>
    import { classNames } from '$lib/utils/classnames';
    import Window from '../retro-ui/Window.svelte';

    import Globe from '../../(assets)/globe.svg';
    import { format } from 'date-fns';
    import { Grid } from '../grid';
</script>

<div class="container space-y-4">
    <div class="relative h-fit">
        <Window alignment="left" class="aspect-[3/1]" theme="dark">
            <span slot="toolbar" class="text-micro text-white"
                >Day 0 - {format(new Date(), 'EEEE, MMM d')}<span class="text-accent">_</span></span
            >

            <div
                slot="content"
                class={classNames(
                    'light checkerboard relative mt-2 flex flex-1 items-center justify-between overflow-hidden bg-white px-12',
                    'after:absolute after:inset-0 after:-z-0 after:bg-gradient-to-b after:from-transparent after:via-white after:to-white'
                )}
            >
                <div class="relative z-10 space-y-8">
                    <h2 class="text-title font-aeonik-pro text-primary mb-2">Sites</h2>
                    <p class="text-secondary text-body max-w-sm font-medium">
                        The new Appwrite CLI allows you to test your functions locally, easily
                        migrate databases and more.
                    </p>
                    <a href="/" class="text-primary group text-sub-body flex- flex gap-1"
                        >Announcement
                        <span
                            class="web-icon-arrow-right transition-transform group-hover:translate-x-0.5"
                        />
                    </a>
                </div>

                <img
                    src={Globe}
                    alt="key illustration"
                    class="relative z-10 -mt-28 translate-y-28"
                />
            </div>
        </Window>
    </div>

    <Grid.Root columns={2}>
        <Grid.Cell>
            <a
                href="/blog"
                target="_blank"
                rel="noopener noreferrer"
                class="retro flex flex-col gap-4 bg-[#2D2D31] py-4 px-5"
            >
                <span class="text-body font-medium text-white md:max-w-[16rem]">Day title</span>
                <span class="flex items-center gap-2"
                    >Article <span class="web-icon-arrow-right" />
                </span>
            </a>
        </Grid.Cell>
        <Grid.Cell>
            <a
                href="/blog"
                target="_blank"
                rel="noopener noreferrer"
                class="retro flex flex-col gap-4 bg-[#2D2D31] py-4 px-5"
            >
                <span class="text-body font-medium text-white md:max-w-[16rem]">Day title</span>
                <span class="flex items-center gap-2"
                    >Article <span class="web-icon-arrow-right" />
                </span>
            </a>
        </Grid.Cell>
    </Grid.Root>

    <Grid.Root columns={3}>
        <Grid.Cell>
            <a
                href="/blog"
                target="_blank"
                rel="noopener noreferrer"
                class="retro flex flex-col gap-4 bg-[#2D2D31] py-4 px-5"
            >
                <span class="text-body font-medium text-white md:max-w-[16rem]">Day title</span>
                <span class="flex items-center gap-2"
                    >Article <span class="web-icon-arrow-right" />
                </span>
            </a>
        </Grid.Cell>
        <Grid.Cell>
            <a
                href="/blog"
                target="_blank"
                rel="noopener noreferrer"
                class="retro flex flex-col gap-4 bg-[#2D2D31] py-4 px-5"
            >
                <span class="text-body font-medium text-white md:max-w-[16rem]">Day title</span>
                <span class="flex items-center gap-2"
                    >Article <span class="web-icon-arrow-right" />
                </span>
            </a>
        </Grid.Cell>
        <Grid.Cell>
            <a
                href="/blog"
                target="_blank"
                rel="noopener noreferrer"
                class="retro flex flex-col gap-4 bg-[#2D2D31] py-4 px-5"
            >
                <span class="text-body font-medium text-white md:max-w-[16rem]">Day title</span>
                <span class="flex items-center gap-2"
                    >Article <span class="web-icon-arrow-right" />
                </span>
            </a>
        </Grid.Cell>
    </Grid.Root>
</div>

<style>
    .checkerboard {
        --color: #eeeef0;
        --size: 0.375rem;
        --gap: calc(var(--size) * 0.5);
        background-color: var(--color);
        background-image: repeating-linear-gradient(
                to right,
                transparent,
                transparent var(--size),
                white var(--size),
                white calc(var(--size) + var(--gap))
            ),
            repeating-linear-gradient(
                to bottom,
                transparent,
                transparent var(--size),
                white var(--size),
                white calc(var(--size) + var(--gap))
            );
    }
</style>
