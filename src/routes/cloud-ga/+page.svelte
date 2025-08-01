<script lang="ts">
    import { FooterNav, MainFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import { buildOpenGraphImage } from '$lib/utils/metadata';
    import BuildingCloud from './(components)/building-cloud/building-cloud.svelte';
    import CloudNumbers from './(components)/numbers.svelte';
    import Hero from './(components)/hero.svelte';
    import NetworkingLatency from './(components)/networking-latency.svelte';
    import OpenSourceCommunity from './(components)/open-source-community.svelte';
    import ReliabilityUptime from './(components)/reliability-uptime.svelte';
    import ScaleWithoutWorries from './(components)/scale-without-worries.svelte';
    import SecurityCompliance from './(components)/security-compliance.svelte';
    import TeamOfExperts from './(components)/team-of-experts.svelte';
    import TheFuture from './(components)/the-future.svelte';
    import AllInOne from './(components)/all-in-one.svelte';
    import CallToAction from './(components)/call-to-action.svelte';

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

        <OpenSourceCommunity />
        <ScaleWithoutWorries />
        <SecurityCompliance /><!-- done -->
        <TeamOfExperts /><!-- done -->
        <TheFuture /><!-- done -->
        <AllInOne />
        <CallToAction />
    </div>

    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>
