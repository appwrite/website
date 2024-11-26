<script lang="ts">
    import { FooterNav, MainFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import { buildOpenGraphImage } from '$lib/utils/metadata';
    import Cell from './(components)/grid-system/cell.svelte';
    import Grid from './(components)/grid-system/grid.svelte';
    import Hero from './(components)/hero.svelte';

    const title = 'Cloud GA - Appwrite';
    const description = 'Appwrite Cloud is now generally available.';
    const ogImage = buildOpenGraphImage('Cloud GA', description);
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Description -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <!-- Image -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Main>
    <Hero />
    <div
        class="relative h-full before:absolute before:inset-x-0 before:h-[350px] before:bg-gradient-to-b before:from-[#232325]/90 before:to-transparent"
    >
        <div class="mx-auto flex w-full max-w-6xl flex-col justify-center">
            <Grid rows={1}>
                <Cell column={1}>
                    <h2 class="text-title text-primary text-pretty py-16">
                        Appwrite cloud in<br /> numbers<span class="text-accent">_</span>
                    </h2>
                </Cell>
                <Cell column={2}
                    ><p class="py-16">
                        The milestone we achieved today officially started 22 months ago when we
                        launched Appwrite private beta and enrolled users onto the platform bit by
                        bit. Since then, we have reached many milestones before taking Cloud to the
                        next step.
                    </p></Cell
                >
            </Grid>
        </div>
    </div>

    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>
