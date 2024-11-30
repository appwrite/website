<script>
    import Cell from './grid-system/cell.svelte';
    import Grid from './grid-system/grid.svelte';

    const title = 'Appwrite Cloud is Generally Available'.split(' ');
</script>

<div
    class="border-smooth to-accent/9 relative flex justify-center overflow-y-hidden border-b bg-gradient-to-b from-transparent"
>
    <div class="flex w-full max-w-6xl flex-col justify-center">
        <Grid rows={1}>
            <Cell column={3} horizontalCenter verticalCenter class="py-40">
                <div class="max-w-4xl space-y-8 p-8">
                    <h1
                        class="text-headline font-aeonik-pro text-primary flex max-w-4xl flex-wrap gap-4 text-balance"
                    >
                        {#each title as word, i}
                            <span
                                class="animate-text inline-block"
                                style:animation-delay="{i * 100}ms"
                                >{word}{' '}
                            </span>
                        {/each}
                        <span class="text-accent animate-text -ml-4" style:animation-delay="500ms"
                            >_</span
                        >
                    </h1>
                    <div class="text-description text-secondary max-w-3xl space-y-8 font-medium">
                        <p class="animate-text" style:animation-delay="600ms">
                            Appwrite Cloud was designed to make it easier to build with Appwrite
                            because we know self-hosting is not for everyone.
                        </p>
                        <p class="animate-text" style:animation-delay="700ms">
                            Cloud is now powering over 200,000 projects, and we are both proud and
                            excited to announce its transition to general availability.
                        </p>
                    </div>
                </div>
            </Cell>
            {#each Array.from({ length: 4 }) as _, i}
                {@const columnStart = i + 1}
                {@const lineArray = Math.floor(Math.random() * 5) + 8}
                {@const lines = Array.from({ length: lineArray }).map((_, i) => {
                    return {
                        height: Math.floor(Math.random() * 70) + 10,
                        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
                    };
                })}
                <Cell {columnStart}>
                    <div class="absolute left-0 -ml-px flex flex-col gap-5">
                        {#each lines as line}
                            <div
                                class="animate-bottom-to-top h-[var(--height)] w-px bg-[var(--color)]"
                                style:--height="{line.height}px"
                                style:--color={line.color}
                            />
                        {/each}
                    </div>
                </Cell>
            {/each}

            <Cell column={5}>
                <div class="absolute right-0 -mr-px flex flex-col gap-5">
                    <div class="animate-bottom-to-top bg-accent h-[40px] w-px" />
                    <div class="animate-bottom-to-top h-[25px] w-px bg-[#85DBD8]" />
                </div>
            </Cell>
        </Grid>
    </div>
</div>
