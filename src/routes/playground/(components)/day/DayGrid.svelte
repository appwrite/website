<script>
    import DayDetails from './DayDetails.svelte';
    import DayWindow from './DayWindow.svelte';
</script>

<div>
    <div class="container relative">
        <div
            class="relative grid h-[3500px] grid-cols-1 gap-16 md:[grid-template-columns:1fr_72px_1fr]"
        >
            <div class="flex flex-col gap-16">
                {#each Array.from({ length: 4 }) as _, i}
                    <DayDetails
                        title="Domains"
                        index={i}
                        description="The new Appwrite CLI allows you to test your functions locally, easily migrate databases and more."
                        articles={[
                            {
                                title: 'Serverless functions 101: best practices',
                                url: '/',
                                label: 'Read article'
                            },
                            {
                                title: 'Serverless functions 101: best practices',
                                url: '/',
                                label: 'Read article'
                            },
                            {
                                title: 'Serverless functions 101: best practices',
                                url: '/',
                                label: 'Read article'
                            },
                            {
                                title: 'Serverless functions 101: best practices',
                                url: '/',
                                label: 'Read article'
                            }
                        ]}
                    />
                {/each}
            </div>
            <div
                class="top-0 hidden bg-[url('/images/init/bg-divider.svg')] [background-repeat:repeat-y] md:block"
            />
            <DayWindow />
        </div>
    </div>
</div>
