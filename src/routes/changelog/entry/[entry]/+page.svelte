<script lang="ts">
    import { FooterNav, MainFooter } from '$lib/components';
    import PreFooter from '$lib/components/PreFooter.svelte';
    import { Main } from '$lib/layouts';
    import { formatDate } from '$lib/utils/date';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { CHANGELOG_TITLE_SUFFIX } from '$routes/titles';

    export let data;

    const seo = {
        title: data.title,
        description: data.description ?? DEFAULT_DESCRIPTION,
        ogImage: data.cover
            ? DEFAULT_HOST + data.cover
            : `${DEFAULT_HOST}/images/open-graph/website.png`
    };
</script>

<svelte:head>
    <!-- Titles -->
    <title>{seo.title + CHANGELOG_TITLE_SUFFIX}</title>
    <meta property="og:title" content={seo.title} />
    <meta name="twitter:title" content={seo.title} />
    <!-- Desscription -->
    <meta name="description" content={seo.description} />
    <meta property="og:description" content={seo.description} />
    <meta name="twitter:description" content={seo.description} />
    <!-- Image -->

    <meta property="og:image" content={seo.ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={seo.ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Main>
    <div class="aw-big-padding-section">
        <div class="aw-big-padding-section-level-1">
            <div class="aw-big-padding-section-level-2">
                <div class="aw-container wrapper" style="--container-size:42.5rem">
                    <article class="aw-main-article">
                        <header class="aw-main-article-header">
                            <a class="aw-link aw-u-color-text-secondary u-cross-baseline" href="/changelog">
                                <span class="aw-icon-chevron-left" aria-hidden="true" />
                                <span>Back to Changelog</span>
                            </a>
                            <ul class="aw-metadata aw-caption-400">
                                <li>
                                    <time datetime={data.date}>{formatDate(data.date)}</time>
                                </li>
                            </ul>
                            <h1 class="aw-title aw-u-color-text-primary">{data.title}</h1>
                        </header>
                        {#if data.cover}
                            <div class="aw-media-container">
                                <img class="u-block" src={data.cover} alt="" />
                            </div>
                        {/if}

                        <div class="aw-article-content u-margin-block-start-32">
                            <svelte:component this={data.component} />
                        </div>
                    </article>
                </div>
            </div>
            <div class="aw-big-padding-section-level-1 u-position-relative u-overflow-hidden">
                <div class="aw-big-padding-section-level-2">
                    <div class="aw-container">
                        <PreFooter />
                        <FooterNav />
                        <MainFooter />
                    </div>
                </div>
            </div>
        </div>
    </div>
</Main>
