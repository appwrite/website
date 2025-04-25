<script lang="ts">
    import { FooterNav, MainFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import CallToAction from './(components)/CallToAction.svelte';
    import { TITLE_SUFFIX } from '$routes/titles';
    import Community from './(components)/Community.svelte';
    import GetStarted from './(components)/GetStarted.svelte';
    import Hero from './(components)/Hero.svelte';
    import Kickstart from './(components)/Kickstart.svelte';
    import Faq from './(components)/FAQ.svelte';

    const title = 'Education' + TITLE_SUFFIX;
    const description =
        "Students, here's your chance to expand your skillset without spending a penny. Sign up for Appwrite Education program to get access to our Pro plan.";
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';
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
    <div class="light space-y-10 bg-[#EDEDF0] pb-32">
        <Kickstart />
        <GetStarted />
        <Community />
    </div>

    <Faq />
    <CallToAction />
    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>
