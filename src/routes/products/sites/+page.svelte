<script lang="ts">
    import Frameworks from '$lib/components/marketing/platforms.svelte';
    import OpenSourceAlternative from '$lib/components/marketing/open-source-alternative.svelte';
    import Testimonials from '$lib/components/marketing/testimonials.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import Create from './(components)/create.svelte';
    import Deploy from './(components)/deploy.svelte';
    import Hero from './(components)/hero.svelte';
    import Integrate from './(components)/integrate.svelte';
    import Steps from './(components)/steps.svelte';

    const title = 'Sites' + TITLE_SUFFIX;
    const description = 'Appwrite Sites is very cool';
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
    <div class="px-4 md:px-16">
        <Steps>
            <Create />
            <Deploy />
        </Steps>
        <Integrate />
    </div>
    <OpenSourceAlternative />
    <Testimonials />
</Main>
