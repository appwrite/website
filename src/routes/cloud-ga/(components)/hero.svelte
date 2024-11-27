<script>
    import Cell from './grid-system/cell.svelte';
    import Grid from './grid-system/grid.svelte';

    const title = 'Appwrite Cloud is Generally Available'.split(' ');
</script>

<div
    class="border-smooth to-accent/9 relative flex h-[75vh] justify-center border-b bg-gradient-to-b from-transparent"
>
    <div class="flex w-full max-w-6xl flex-col justify-center">
        <Grid rows={1}>
            <Cell column={3} horizontalCenter verticalCenter>
                <div class="max-w-4xl space-y-8 p-8">
                    <h1
                        class="text-headline text-primary flex max-w-4xl flex-wrap gap-4 text-balance"
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
        </Grid>
    </div>
</div>
