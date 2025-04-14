<script lang="ts">
    import Map from '$lib/components/appwrite-network/map.svelte';
    import { InlineTag } from '$lib/components/ui';
    import GradientText from '$lib/components/ui/gradient-text.svelte';
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
    <div class="container">
        <div class="mt-12 flex flex-col items-center">
            <span
                class="bg-accent/4 border-accent/36 text-primary relative -mb-8 rounded-full border px-4 py-1 text-sm"
                >Introducing</span
            >
            <h1 class="text-display mx-auto inline-block py-12 text-center">
                <GradientText>The Appwrite Network</GradientText>
            </h1>
        </div>
        <Map />
    </div>
</Main>

<style>
    .hero {
        --first-gradient: radial-gradient(
            ellipse 390px 50px at 10% 30%,
            rgba(254, 149, 103, 0.4) 0%,
            rgba(254, 149, 103, 0) 70%
        );
        --second-gradient: radial-gradient(
            ellipse 1100px 170px at 15% 40%,
            rgba(253, 54, 110, 0.16) 0%,
            rgba(253, 54, 110, 0) 70%
        );
        --third-gradient: radial-gradient(
            ellipse 1200px 180px at 30% 30%,
            rgba(253, 54, 110, 0.16) 0%,
            rgba(253, 54, 110, 0) 70%
        );

        background-image: var(--first-gradient), var(--second-gradient), var(--third-gradient);
    }
</style>
