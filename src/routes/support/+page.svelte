<script lang="ts">
    import { Main } from '$lib/layouts';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';

    import FooterNav from '../../lib/components/FooterNav.svelte';
    import MainFooter from '../../lib/components/MainFooter.svelte';

    const title = 'Support' + TITLE_SUFFIX;
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
    <div class="container">
        <div class="web-grid-120-1fr-auto"></div>

        <header class="web-grid-120-1fr-auto-header">
            <h1 class="text-title font-aeonik-pro text-primary">Support</h1>
        </header>

        <FooterNav />
        <MainFooter />
    </div>
</Main>
