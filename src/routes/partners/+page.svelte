<script lang="ts">
    import Main from '$lib/layouts/Main.svelte';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import Puzzle from './(components)/puzzle.svelte';

    const title = 'Partners' + TITLE_SUFFIX;
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
    <div class="border-smooth box-content flex items-center border-b py-12 px-5 lg:px-8 xl:px-16">
        <div class="mx-auto grid items-center gap-16 md:grid-cols-2">
            <div class="max-w-lg space-y-8">
                <div class="flex items-center gap-2">
                    <span class="text-micro font-aeonik-fono tracking-loose text-primary uppercase">
                        Appwrite Partners<span class="web-u-color-text-accent">_</span>
                    </span>
                </div>
                <h1 class="text-display font-aeonik-pro text-primary text-pretty">
                    Boost businesses with Appwrite<span class="text-accent">_</span>
                </h1>
                <p class="text-description text-secondary text-pretty font-medium">
                    Join the Appwrite Partner program to unlock growth opportunities with tools,
                    resources, and support to boost revenue and expand your reach.
                </p>

                <div class="flex flex-col items-center gap-2 md:flex-row">
                    <a href="/" class="web-button !w-full md:!w-fit"> Join today </a>
                </div>
            </div>
            <Puzzle />
        </div>
    </div>
</Main>
