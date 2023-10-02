<script lang="ts">
    import { Carousel, Spline } from '$lib/components';
    import Technologies from '$lib/components/Technologies.svelte';
    import Docs from '$lib/layouts/Docs.svelte';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import MainFooter from '../../lib/components/MainFooter.svelte';
    import CodeCard, { type CodeCardProps } from './CodeCard.svelte';
    import Sidebar from './Sidebar.svelte';

    const title = 'Docs' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/docs.png';

    const tutorials: CodeCardProps[] = [
        {
            href: '/docs/tutorials/react',
            cover: {
                src: '/images/tutorials/react.png',
                alt: 'react logo'
            },
            title: 'React tutorial',
            description: 'Learn Appwrite Auth, Databases, and more with React.'
        },
        {
            href: '/docs/tutorials/sveltekit',
            cover: {
                src: '/images/tutorials/svelte.png',
                alt: 'svelte logo'
            },
            title: 'SvelteKit tutorial',
            description: 'Learn Appwrite Auth, Databases, and more with SvelteKit.'
        },
        {
            href: '/docs/tutorials/vue',
            cover: {
                src: '/images/tutorials/vue.png',
                alt: 'Vue logo'
            },
            title: 'Vue tutorial',
            description: 'Learn Appwrite Auth, Databases, and more with Vue.'
        },
        {
            href: '/docs/tutorials/android',
            cover: {
                src: '/images/tutorials/android.png',
                alt: 'Android logo'
            },
            title: 'Android tutorial',
            description: 'Learn Appwrite Auth, Databases, and more with Android.'
        },
        {
            href: '/docs/tutorials/flutter',
            cover: {
                src: '/images/tutorials/flutter.png',
                alt: 'Flutter logo'
            },
            title: 'Flutter tutorial',
            description: 'Learn Appwrite Auth, Databases, and more with Flutter.'
        }
    ];
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

<Docs variant="default">
    <Sidebar />
    <div class="u-position-absolute u-inset-inline-end-0 aw-u-opacity-40-mobile" style="">
        <img src="/images/bgs/docs-blur-1.svg" alt="" />
    </div>

    <div
        class="u-position-absolute aw-is-not-mobile u-only-light"
        style:inline-size="768px"
        style:block-size="768px"
        style:inset-block-start="26rem"
        style:left="calc(50% - 384px + 600px)"
    >
        <img
            src="/images/animations/tech-light.png"
            width="768"
            height="768"
            alt=""
            style="position: absolute; display: block;"
        />
    </div>

    <div
        class="u-position-absolute aw-is-not-mobile u-only-dark"
        style:inline-size="768px"
        style:block-size="768px"
        style:inset-block-start="26rem"
        style:z-index="-1"
        style:left="calc(50% - 384px + 600px)"
    >
        <Spline url="/images/animations/dark-scene.splinecode" width={768} height={768}>
            <img
                src="/images/animations/tech-dark.png"
                width="768"
                height="768"
                alt=""
                style="position: absolute;"
            />
        </Spline>
    </div>

    <main class="aw-main-section u-position-relative">
        <div
            class="u-position-absolute u-inset-inline-start-0 u-inset-block-start-16 aw-u-opacity-40-mobile"
            style="    margin-inline-start: -30px;"
        >
            <img src="/images/bgs/docs-blur-2.svg" alt="" />
        </div>

        <section class="aw-hero is-align-start u-position-relative">
            <h1 class="aw-display aw-u-color-text-primary u-max-width-600">
                Learn how to build like a team of hundreds
            </h1>
            <p class="aw-description u-max-width-600">
                Appwrite is a backend development platform built by hundreds of open-source
                developers, where you can build any application at any scale using the coding
                languages and tools you want.
            </p>
        </section>
        <section class="aw-hero is-align-start">
            <h2 class="aw-title aw-u-color-text-primary u-max-width-600">
                Get started with your technologies
            </h2>
            <p class="aw-description u-max-width-600">
                Follow a quick start guide on your web, mobile, and native frameworks.
            </p>
            <Technologies />
            <a href="/docs/sdks" class="aw-button is-secondary" style:align-self="start">
                <span class="aw-sub-body-500">Explore all technologies</span>
            </a>
        </section>
        <section>
            <h2 class="aw-title aw-u-color-text-primary u-max-width-600">Show me some code</h2>
            <p class="aw-description u-max-width-600 u-margin-block-start-16">
                If you learn best from code examples, follow one of our tutorials.
            </p>
            <Carousel>
                {#each tutorials as tutorial}
                    <li>
                        <CodeCard {...tutorial} />
                    </li>
                {/each}
            </Carousel>
        </section>
        <section class="aw-hero is-align-start is-no-max-width">
            <h2 class="aw-title aw-u-color-text-primary u-max-width-600">Explore capabilities</h2>
            <p class="aw-description u-max-width-600">
                All the core functionalities you need with a scalable and flexible API. Explore
                Appwrite's product offerings.
            </p>
            <div class="u-margin-block-start-24">
                <ul class="aw-grid-row-4 aw-grid-row-4-m-1">
                    <li>
                        <a href="/docs/products/auth" class="aw-card is-normal">
                            <img
                                src="/images/icons/illustrated/dark/auth.png"
                                alt=""
                                class="u-only-dark"
                                width="48"
                                height="48"
                            />
                            <img
                                src="/images/icons/illustrated/light/auth.png"
                                alt=""
                                class="u-only-light"
                                width="48"
                                height="48"
                            />
                            <h4
                                class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8"
                            >
                                Auth
                            </h4>
                            <p class="aw-sub-body-400 u-margin-block-start-4">
                                Sign in users with multiple OAuth providers.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="/docs/products/databases" class="aw-card is-normal">
                            <img
                                src="/images/icons/illustrated/dark/databases.png"
                                alt=""
                                class="u-only-dark"
                                width="48"
                                height="48"
                            />
                            <img
                                src="/images/icons/illustrated/light/databases.png"
                                alt=""
                                class="u-only-light"
                                width="48"
                                height="48"
                            />
                            <h4
                                class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8"
                            >
                                Databases
                            </h4>
                            <p class="aw-sub-body-400 u-margin-block-start-4">
                                Store your application and user data.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="/docs/products/functions" class="aw-card is-normal">
                            <img
                                src="/images/icons/illustrated/dark/functions.png"
                                alt=""
                                class="u-only-dark"
                                width="48"
                                height="48"
                            />
                            <img
                                src="/images/icons/illustrated/light/functions.png"
                                alt=""
                                class="u-only-light"
                                width="48"
                                height="48"
                            />
                            <h4
                                class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8"
                            >
                                Functions
                            </h4>
                            <p class="aw-sub-body-400 u-margin-block-start-4">
                                Extend and customize your server's functionality.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="/docs/products/storage" class="aw-card is-normal">
                            <img
                                src="/images/icons/illustrated/dark/storage.png"
                                alt=""
                                class="u-only-dark"
                                width="48"
                                height="48"
                            />
                            <img
                                src="/images/icons/illustrated/light/storage.png"
                                alt=""
                                class="u-only-light"
                                width="48"
                                height="48"
                            />
                            <h4
                                class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8"
                            >
                                Storage
                            </h4>
                            <p class="aw-sub-body-400 u-margin-block-start-4">
                                Store images, videos, documents, and files.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="/docs/apis/realtime" class="aw-card is-normal">
                            <img
                                src="/images/icons/illustrated/dark/realtime.png"
                                alt=""
                                class="u-only-dark"
                                width="48"
                                height="48"
                            />
                            <img
                                src="/images/icons/illustrated/light/realtime.png"
                                alt=""
                                class="u-only-light"
                                width="48"
                                height="48"
                            />
                            <h4
                                class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8"
                            >
                                Realtime
                            </h4>
                            <p class="aw-sub-body-400 u-margin-block-start-4">
                                Respond to server events in realtime.
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="aw-hero is-align-start is-no-max-width">
            <h2 class="aw-title aw-u-color-text-primary u-max-width-600">
                Explore ways to integrate
            </h2>
            <p class="aw-description u-max-width-600">
                Choose how you integrate with Appwrite. Explore references for the Appwrite SDK,
                REST API, GraphQL API, or Realtime API.
            </p>
            <div class="u-margin-block-start-24">
                <ul class="aw-grid-row-2">
                    <li>
                        <a href="/docs/sdks" class="aw-card is-normal">
                            <h4
                                class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8"
                            >
                                SDKs
                            </h4>
                            <p class="aw-sub-body-400 u-margin-block-start-4">
                                Light-weight SDKs for your favorite platforms.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="/docs/apis/rest" class="aw-card is-normal">
                            <h4
                                class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8"
                            >
                                REST API
                            </h4>
                            <p class="aw-sub-body-400 u-margin-block-start-4">
                                Integrate with HTTP requests without the needing an SDK.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="/docs/apis/graphql" class="aw-card is-normal">
                            <h4
                                class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8"
                            >
                                GraphQL
                            </h4>
                            <p class="aw-sub-body-400 u-margin-block-start-4">
                                Leverage GraphQL through our SDKs or integrate directly with REST
                                endpoints.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="/docs/apis/realtime" class="aw-card is-normal">
                            <h4
                                class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8"
                            >
                                Realtime
                            </h4>
                            <p class="aw-sub-body-400 u-margin-block-start-4">
                                Respond to auth, databases, storage, and function events in
                                realtime.
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="aw-hero is-align-start is-no-max-width">
            <h2 class="aw-title aw-u-color-text-primary u-max-width-600">Migrate to Appwrite</h2>
            <p class="aw-description u-max-width-600">
                Own your data with automatic data migrations.
            </p>
            <div class="u-margin-block-start-24">
                <ul class="aw-grid-row-4">
                    <li>
                        <a href="/docs/advanced/migrations/self-hosted" class="aw-card is-normal">
                            <h4
                                class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8"
                            >
                                Self-hosted
                            </h4>
                            <p class="aw-sub-body-400 u-margin-block-start-4">
                                Move data from self-hosted to Appwrite Cloud.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="/docs/advanced/migrations/firebase" class="aw-card is-normal">
                            <h4
                                class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8"
                            >
                                Firebase
                            </h4>
                            <p class="aw-sub-body-400 u-margin-block-start-4">
                                Migrate users and data from Firebase to Appwrite.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="/docs/advanced/migrations/supabase" class="aw-card is-normal">
                            <h4
                                class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8"
                            >
                                Supabase
                            </h4>
                            <p class="aw-sub-body-400 u-margin-block-start-4">
                                Migrate users and data from Supabase to Appwrite.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="/docs/advanced/migrations/nhost" class="aw-card is-normal">
                            <h4
                                class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8"
                            >
                                Nhost
                            </h4>
                            <p class="aw-sub-body-400 u-margin-block-start-4">
                                Migrate users and data from NHost to Appwrite.
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>

        <MainFooter variant="docs" />
    </main>
</Docs>
