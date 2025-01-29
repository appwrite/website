<script lang="ts">
    import { FooterNav, MainFooter } from '$lib/components';
    import Main from '$lib/layouts/Main.svelte';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import Benefits from './(components)/benefits.svelte';
    import Hero from './(components)/hero.svelte';
    import Partners from './(components)/partners.svelte';
    import SubmissionForm from './(components)/submission-form.svelte';
    import Ways from './(components)/ways.svelte';
    import Why from './(components)/why.svelte';

    const title = 'Partners' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
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
    <Benefits />
    <Partners />
    <Ways />
    <Why />

    <SubmissionForm />
    <div class="relative overflow-hidden">
        <div class="container">
            <FooterNav />
            <MainFooter />
        </div>
    </div>
</Main>
