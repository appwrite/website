<script lang="ts">
    import { FooterNav, MainFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import { buildOpenGraphImage } from '$lib/utils/metadata';
    import BuildingCloud from './(components)/building-cloud.svelte';
    import Hero from './(components)/hero.svelte';
    import OpenSourceCommunity from './(components)/open-source-community.svelte';
    import ScaleWithoutWorries from './(components)/scale-without-worries.svelte';
    import SecureByDefault from './(components)/secure-by-default.svelte';
    import TeamOfExperts from './(components)/team-of-experts.svelte';
    import WhatsNext from './(components)/whats-next.svelte';
    import AllInOne from './(components)/all-in-one.svelte';
    import CallToAction from './(components)/call-to-action.svelte';
    import TheJourneySoFar from './(components)/the-journey-so-far.svelte';
    import GlobalDistribution from './(components)/global-distribution.svelte';

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
    <div class="block">
        <Hero />
        <BuildingCloud />
        <TheJourneySoFar />
        <OpenSourceCommunity />
        <ScaleWithoutWorries />
        <SecureByDefault />
        <GlobalDistribution />
        <TeamOfExperts />
        <WhatsNext />
        <AllInOne />
        <CallToAction />
    </div>

    <div class="container">
        <FooterNav noBorder />
        <MainFooter />
    </div>
</Main>
