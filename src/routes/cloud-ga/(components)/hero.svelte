<script>
    import Cell from './grid-system/cell.svelte';
    import Grid from './grid-system/grid.svelte';
</script>

<div
    class="gradient border-smooth relative flex h-[75vh] justify-center border-b bg-gradient-to-b from-transparent to-[rgba(253,_54,_110,_0.09)]"
>
    <div class="flex w-full max-w-6xl flex-col justify-center">
        <Grid rows={1}>
            <Cell column={3}>
                <div class="max-w-4xl space-y-8 px-8">
                    <h1 class="text-headline text-primary text-pretty">
                        Appwrite Cloud is Generally Available<span class="text-accent">_</span>
                    </h1>
                    <div class="text-description text-secondary max-w-3xl space-y-8 font-medium">
                        <p>
                            Appwrite Cloud was designed to make it easier to build with Appwrite
                            because we know self-hosting is not for everyone.
                        </p>
                        <p>
                            Cloud is now powering over 200,000 projects, and we are both proud and
                            excited to announce its transition to general availability.
                        </p>
                    </div>
                </div>
            </Cell>
        </Grid>
    </div>
</div>
