<script lang="ts">
    import Map from '$lib/components/appwrite-network/map.svelte';
    import { Main } from '$lib/layouts';
    import {
        DEFAULT_DESCRIPTION,
        DEFAULT_HOST,
        getInlinedScriptTag,
        organizationJsonSchema,
        softwareAppSchema
    } from '$lib/utils/metadata';

    const title = 'Appwrite - Build like a team of hundreds';
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

    <!-- eslint-disable-next-line svelte/no-at-html-tags-->
    {@html getInlinedScriptTag(softwareAppSchema())}

    <!-- eslint-disable-next-line svelte/no-at-html-tags-->
    {@html getInlinedScriptTag(organizationJsonSchema())}
</svelte:head>

<Main>
    <Map />
</Main>
