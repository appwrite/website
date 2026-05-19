<script lang="ts">
    import { MainFooter } from '$lib/components';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import { DOCS_TITLE_SUFFIX } from '$routes/titles';

    type QuickStart = {
        title: string;
        icon: string;
        image: string;
        href: string;
    };

    type QuickStarts = Array<{
        title: string;
        quickStarts: QuickStart[];
    }>;

    const quickStarts: QuickStarts = [
        {
            title: 'Web app',
            quickStarts: [
                {
                    title: 'Next.js',
                    icon: 'icon-nextjs',
                    image: '/images/blog/placeholder.avif',
                    href: 'nextjs'
                },
                {
                    title: 'React',
                    icon: 'icon-react',
                    image: '/images/blog/placeholder.avif',
                    href: 'react'
                },
                {
                    title: 'Vue.js',
                    icon: 'web-icon-vue',
                    image: '/images/blog/placeholder.avif',
                    href: 'vue'
                },
                {
                    title: 'SvelteKit',
                    icon: 'icon-svelte',
                    image: '/images/blog/placeholder.avif',
                    href: 'sveltekit'
                },
                {
                    title: 'Angular',
                    icon: 'icon-angular',
                    image: '/images/blog/placeholder.avif',
                    href: 'angular'
                },
                {
                    title: 'Nuxt',
                    icon: 'web-icon-nuxt',
                    image: '/images/blog/placeholder.avif',
                    href: 'nuxt'
                },
                {
                    title: 'Refine',
                    icon: 'web-icon-refine',
                    image: '/images/blog/placeholder.avif',
                    href: 'refine'
                },
                {
                    title: 'Solid',
                    icon: 'icon-solidjs',
                    image: '/images/blog/placeholder.avif',
                    href: 'solid'
                },
                {
                    title: 'TanStack Start',
                    icon: 'web-icon-tanstack',
                    image: '/images/blog/placeholder.avif',
                    href: 'tanstack-start'
                },
                {
                    title: 'Web',
                    icon: 'icon-js',
                    image: '/images/blog/placeholder.avif',
                    href: 'web'
                }
            ]
        },
        {
            title: 'Mobile and native',
            quickStarts: [
                {
                    title: 'Flutter',
                    icon: 'icon-flutter',
                    image: '/images/blog/placeholder.avif',
                    href: 'flutter'
                },
                {
                    title: 'React Native',
                    icon: 'icon-react-native',
                    image: '/images/blog/placeholder.avif',
                    href: 'react-native'
                },
                {
                    title: 'Android',
                    icon: 'icon-android',
                    image: '/images/blog/placeholder.avif',
                    href: 'android'
                },
                {
                    title: 'Apple',
                    icon: 'icon-apple',
                    image: '/images/blog/placeholder.avif',
                    href: 'apple'
                }
            ]
        },
        {
            title: 'Server',
            quickStarts: [
                {
                    title: 'Node.js',
                    icon: 'icon-node_js',
                    image: '/images/blog/placeholder.avif',
                    href: 'node'
                },
                {
                    title: 'Python',
                    icon: 'icon-python',
                    image: '/images/blog/placeholder.avif',
                    href: 'python'
                },
                {
                    title: '.NET',
                    icon: 'icon-dotnet',
                    image: '/images/blog/placeholder.avif',
                    href: 'dotnet'
                },
                {
                    title: 'PHP',
                    icon: 'icon-php',
                    image: '/images/blog/placeholder.avif',
                    href: 'php'
                },
                {
                    title: 'Dart',
                    icon: 'icon-dart',
                    image: '/images/blog/placeholder.avif',
                    href: 'dart'
                },
                {
                    title: 'Ruby',
                    icon: 'icon-ruby',
                    image: '/images/blog/placeholder.avif',
                    href: 'ruby'
                },
                {
                    title: 'Deno',
                    icon: 'icon-deno',
                    image: '/images/blog/placeholder.avif',
                    href: 'deno'
                },
                {
                    title: 'Go',
                    icon: 'icon-go',
                    image: '/images/blog/placeholder.avif',
                    href: 'go'
                },
                {
                    title: 'Swift',
                    icon: 'icon-swift',
                    image: '/images/blog/placeholder.avif',
                    href: 'swift'
                },
                {
                    title: 'Kotlin',
                    icon: 'icon-kotlin',
                    image: '/images/blog/placeholder.avif',
                    href: 'kotlin'
                },
                {
                    title: 'Rust',
                    icon: 'web-icon-rust',
                    image: '/images/blog/placeholder.avif',
                    href: 'rust'
                }
            ]
        }
    ];

    const title = 'Quick starts' + DOCS_TITLE_SUFFIX;
    const description =
        'Get started with your favorite framework and language in just a few clicks.';
    const ogImage = DEFAULT_HOST + '/images/open-graph/docs.avif';
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

<main class="web-main-section" id="main">
    <article class="web-article">
        <header class="web-article-header">
            <div class="web-article-header-start web-u-cross-start flex flex-col">
                <div class="relative flex items-center">
                    <h1 class="text-title font-aeonik-pro">Quick start</h1>
                </div>
            </div>
            <div class="web-article-header-end"></div>
        </header>
        <div class="web-article-content web-u-gap-80">
            {#each quickStarts as category}
                <section class="flex flex-col gap-6">
                    <h2 class="text-eyebrow font-aeonik-fono uppercase">{category.title}</h2>
                    <ul class="web-grid-row-4 web-grid-row-4-mobile-2">
                        {#each category.quickStarts as quickStart}
                            <li class="is-mobile-col-span-2">
                                <a
                                    href={`/docs/quick-starts/${quickStart.href}`}
                                    class="web-card is-normal"
                                >
                                    <header class="flex items-baseline gap-1">
                                        <span
                                            class="{quickStart.icon} web-u-font-size-24"
                                            aria-hidden="true"
                                        ></span>
                                        <h4 class="text-sub-body text-primary font-medium">
                                            {quickStart.title}
                                        </h4>
                                    </header>
                                </a>
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
    .web-media {
        aspect-ratio: 16/9;
    }
</style>
