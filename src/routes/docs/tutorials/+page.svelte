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
        react: 'icon-react',
        vue: 'aw-icon-vue',
        angular: 'icon-angular',
        svelte: 'icon-svelte',
        sveltekit: 'icon-svelte',
        android: 'icon-android',
        apple: 'icon-apple',
        flutter: 'icon-flutter',
        stripe: 'icon-stripe',
        refine: 'aw-icon-refine'
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

<main class="aw-main-section" id="main">
    <article class="aw-article">
        <header class="aw-article-header">
            <div class="aw-article-header-start u-flex-vertical aw-u-cross-start">
                <div class="u-position-relative u-flex u-cross-center">
                    <h1 class="aw-title">Platforms</h1>
                </div>
            </div>
            <div class="aw-article-header-end" />
        </header>
        <div class="aw-article-content aw-u-gap-80">
            <section class="u-flex-vertical u-gap-24">
                <h2 class="aw-eyebrow">Client</h2>
                <ul class="tutorial-grid">
                    {#each data.tutorials as tutorial}
                        <li>
                            <a href={tutorial.href} class="aw-card is-normal">
                                <header>
                                    <span
                                        class="{getIcon(tutorial)} aw-u-font-size-24"
                                        aria-hidden="true"
                                    />
                                    <h3 class="aw-sub-body-500 aw-u-color-text-primary">
                                        {tutorial.framework}
                                    </h3>
                                </header>
                                <p class="aw-sub-body-400 u-margin-block-start-4">
                                    {tutorial.title}
                                </p>
                            </a>
                        </li>
                    {/each}
                </ul>
                <ul class="tutorial-grid">
                    {#each data.drafts as draft}
                        <li>
                            <a
                                href={draft.href}
                                class="aw-card is-normal draft"
                                aria-disabled="true"
                                tabindex="-1"
                            >
                                <header>
                                    <span
                                        class="{getIcon(draft)} aw-u-font-size-24"
                                        aria-hidden="true"
                                    />
                                    <h3 class="aw-sub-body-500 aw-u-color-text-primary">
                                        {draft.framework}
                                    </h3>
                                    <span class="badge aw-caption-400">Coming Soon</span>
                                </header>
                            </a>
                        </li>
                    {/each}
                </ul>
            </section>
        </div>
    </article>

    <MainFooter variant="docs" />
</main>

<style lang="scss">
    .tutorial-grid {
        display: grid;
        gap: 1.5rem; // 24px
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

        .aw-card {
            padding: 1.25rem;

            header {
                display: flex;
                gap: 0.25rem;
                align-items: center;

                > [class*='icon'] {
                    position: relative;
                    width: 1.5rem;
                    height: 1.5rem;

                    &::before {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, calc(-50%));
                    }
                }
            }
        }
    }

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
