<script>
    import Main from '$lib/layouts/Main.svelte';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import Access from './(components)/Access.svelte';

    import Bento from './(components)/Bento.svelte';
    import SSR from './(components)/SSR.svelte';
    import UseCases from './(components)/UseCases.svelte';

    const title = 'Auth' + TITLE_SUFFIX;
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
    <div class="space-y-8">
        <Bento />
        <div class="bg-white">
            <Access />
            <SSR />
            <UseCases />
        </div>
    </div>
</Main>
