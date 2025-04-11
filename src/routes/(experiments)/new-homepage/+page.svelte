<script lang="ts">
    import {
        DEFAULT_DESCRIPTION,
        DEFAULT_HOST,
        getInlinedScriptTag,
        softwareAppSchema,
        organizationJsonSchema
    } from '$lib/utils/metadata';
    import Bento from './(components)/bento/bento.svelte';
    import CaseStudies from './(components)/case-studies.svelte';
    import Features from './(components)/features.svelte';
    import Hero from './(components)/hero.svelte';
    import NetworkMap from './(components)/network-map.svelte';
    import Platforms from './(components)/platforms.svelte';
    import Pricing from './(components)/pricing.svelte';
    import Scale from './(components)/scale.svelte';
    import Templates from './(components)/templates.svelte';

    const title = 'Appwrite - Backend APIs, Frontend hosting';
    const description = DEFAULT_DESCRIPTION;
    const ogImage = `${DEFAULT_HOST}/images/open-graph/website.png`;
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

    {@html getInlinedScriptTag(softwareAppSchema())}
    {@html getInlinedScriptTag(organizationJsonSchema())}
</svelte:head>

<Hero />
<Platforms />
<Bento />
<!-- <CaseStudies />
<Features />
<NetworkMap />
<Templates />
<Scale /> -->
<Pricing />
