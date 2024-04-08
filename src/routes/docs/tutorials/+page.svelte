<script lang="ts">
    import { MainFooter } from '$lib/components';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { DOCS_TITLE_SUFFIX } from '$routes/titles';

    const title = 'Tutorials' + DOCS_TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/docs.png';

    export let data;

    type MappedTutorial = (typeof data.tutorials)[number];

    const iconMap: Record<string, string> = {
        'react native': 'icon-react',
        react: 'icon-react',
        vue: 'web-icon-vue',
        angular: 'icon-angular',
        svelte: 'icon-svelte',
        sveltekit: 'icon-svelte',
        'sveltekit ssr': 'icon-svelte',
        android: 'icon-android',
        apple: 'icon-apple',
        flutter: 'icon-flutter',
        nuxt: 'icon-nuxt',
        'nuxt ssr': 'icon-nuxt',
        stripe: 'icon-stripe',
        refine: 'web-icon-refine',
        'next.js': 'icon-nextjs',
        'next.js ssr': 'icon-nextjs',
        astro: 'icon-astro',
        'astro ssr': 'icon-astro'
    };

    const getIcon = (tutorial: MappedTutorial) => {
        if (!tutorial.framework) return ''; // TODO: Default icon
        return iconMap[tutorial.framework.toLowerCase()];
    };
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Desscription -->
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

<main class="web-main-section" id="main">
    <article class="web-article">
        <header class="web-article-header">
            <div class="web-article-header-start u-flex-vertical web-u-cross-start">
                <div class="u-position-relative u-flex u-cross-center">
                    <h1 class="web-title">Tutorials</h1>
                </div>
            </div>
            <div class="web-article-header-end" />
        </header>
        <div class="web-article-content web-u-gap-80">
            {#each data.tutorials as category}
                <section class="u-flex-vertical u-gap-24">
                    <h2 class="web-eyebrow">{category.title}</h2>
                    <ul class="web-grid-row-4 web-grid-row-4-mobile-2">
                        {#each category.tutorials as tutorial}
                            <li>
                                {#if tutorial.draft === true}
                                    <a
                                        href={tutorial.href}
                                        class="web-card is-normal draft"
                                        aria-disabled="true"
                                        tabindex="-1"
                                    >
                                        <header class="u-flex u-cross-baseline u-gap-4">
                                            <span
                                                class="{getIcon(tutorial)} web-u-font-size-24"
                                                aria-hidden="true"
                                            />
                                            <h3 class="web-sub-body-500 web-u-color-text-primary">
                                                {tutorial.framework}
                                            </h3>
                                            <span class="badge web-caption-400">Coming Soon</span>
                                        </header>
                                    </a>
                                {:else}
                                    <a href={tutorial.href} class="web-card is-normal">
                                        <header class="u-flex u-cross-baseline u-gap-4">
                                            <span
                                                class="{getIcon(tutorial)} web-u-font-size-24"
                                                aria-hidden="true"
                                            />
                                            <h3 class="web-sub-body-500 web-u-color-text-primary">
                                                {tutorial.framework}
                                            </h3>
                                        </header>
                                        <p class="web-sub-body-400 u-margin-block-start-4">
                                            {tutorial.title}
                                        </p>
                                    </a>
                                {/if}
                            </li>
                        {/each}
                    </ul>
                </section>
            {/each}
        </div>
    </article>

    <MainFooter variant="docs" />
</main>

<style lang="scss">
    .badge {
        border-radius: 0.25rem;
        background: rgba(253, 54, 110, 0.24);
        padding: 0.0625rem 0.375rem;
        margin-inline-start: 0.25rem;
    }

    .draft {
        opacity: 0.4;
        pointer-events: none;
    }
</style>
