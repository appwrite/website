<script lang="ts">
    import {
        getInlinedScriptTag,
        softwareAppSchema,
        organizationJsonSchema,
        DEFAULT_HOST
    } from '$lib/utils/metadata';

    type Props = {
        title?: string;
        description?: string;
        ogImage?: string;
    };

    const {
        title = 'Appwrite',
        description = 'Appwrite is an open-source platform for building applications at any scale, using your preferred programming languages and tools.',
        ogImage = `${DEFAULT_HOST}/images/open-graph/website.png`
    }: Props = $props();
</script>

<svelte:head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />

    {@html getInlinedScriptTag(softwareAppSchema())}
    {@html getInlinedScriptTag(organizationJsonSchema())}
</svelte:head>
