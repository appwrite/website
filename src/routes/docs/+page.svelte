<script lang="ts">
    import { Carousel } from '$lib/components';
    import Technologies from '$lib/components/Technologies.svelte';
    import { Button } from '$lib/components/ui';
    import Docs from '$lib/layouts/Docs.svelte';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import MainFooter from '../../lib/components/MainFooter.svelte';
    import CodeCard, { type CodeCardProps } from './CodeCard.svelte';
    import Sidebar from './Sidebar.svelte';
    import { trackEvent } from '$lib/actions/analytics';

    const title = 'Docs' + TITLE_SUFFIX;
    const description =
        'Learn how to build like a team of hundreds. Get started with Authentication, Databases, Storage, Functions, and Messaging in your preferred framework.';
    const ogImage = DEFAULT_HOST + '/images/open-graph/docs.png';

    const tutorials: CodeCardProps[] = [
        {
            href: '/docs/tutorials/react',
            cover: '/images/tutorials/react.png',
            title: 'React tutorial',
            description: 'Learn Appwrite Auth, Databases, and more with React.'
        },
        {
            href: '/docs/tutorials/sveltekit',
            cover: '/images/tutorials/svelte.png',
            title: 'SvelteKit tutorial',
            description: 'Learn Appwrite Auth, Databases, and more with SvelteKit.'
        },
        {
            href: '/docs/tutorials/vue',
            cover: '/images/tutorials/vue.png',
            title: 'Vue tutorial',
            description: 'Learn Appwrite Auth, Databases, and more with Vue.'
        },
        {
            href: '/docs/tutorials/android',
            cover: '/images/tutorials/android.png',
            title: 'Android tutorial',
            description: 'Learn Appwrite Auth, Databases, and more with Android.'
        },
        {
            href: '/docs/tutorials/flutter',
            cover: '/images/tutorials/flutter.png',
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

<Docs variant="default">
    <Sidebar />

    <main class="web-main-section relative overflow-x-hidden" id="main">
        <div class="absolute translate-x-96">
            <img src="/images/bgs/docs-blur-1.svg" alt="" />
        </div>

        <div class="web-u-opacity-40-mobile absolute top-4 left-0">
            <enhanced:img src="./blur-2.png" alt="" />
        </div>

        <section class="web-hero is-align-start e-hero-docs relative">
            <h1 class="text-display font-aeonik-pro text-primary max-w-[600px]">
                Learn how to build like a team of hundreds<span class="web-u-color-text-accent"
                    >_
                </span>
            </h1>
            <p class="text-description max-w-[600px]">
                Appwrite helps you build secure and scalable apps, faster. Leverage Appwrite's
                powerful APIs to stop fighting technologies and start delivering value.
            </p>
        </section>
        <section class="web-hero is-align-start tech-hero">
            <h2 class="text-title font-aeonik-pro text-primary max-w-[600px]">
                Get started with your technologies
            </h2>
            <p class="text-description max-w-[600px]">
                Start building with your preferred web, mobile, and native frameworks by following a
                quick start guide.
            </p>
            <Technologies />
            <Button href="/docs/sdks" class="self-start" variant="secondary">
                <span class="text-sub-body font-medium">Explore all technologies</span>
            </Button>
            <div class="web-is-not-mobile spline-wrapper absolute">
                <img
                    class="web-u-only-dark"
                    src="/images/animations/tech-dark-transparent.png"
                    width="660"
                    height="660"
                    alt=""
                    style="position: absolute;"
                />
                <img
                    class="web-u-only-light"
                    src="/images/animations/tech-light-transparent.png"
                    width="660"
                    height="660"
                    alt=""
                    style="position: absolute;"
                />
            </div>
            <div class="bg-overlay"></div>
        </section>
        <section>
            <h2 class="text-title font-aeonik-pro text-primary max-w-[600px]">Show me some code</h2>
            <p class="text-description mt-4 max-w-[600px]">
                If you learn best from code examples, follow one of our tutorials.
            </p>
            <Carousel size="medium">
                {#each tutorials as tutorial}
                    <li style:scroll-snap-align="start">
                        <CodeCard {...tutorial} />
                    </li>
                {/each}
            </Carousel>
        </section>
        <section class="web-hero is-align-start is-no-max-width">
            <h2 class="text-title font-aeonik-pro text-primary max-w-[600px]">
                Explore capabilities
            </h2>
            <p class="text-description max-w-[600px]">
                All the core functionalities you need with a scalable and flexible API. Explore
                Appwrite's product offerings.
            </p>
            <div class="mt-6">
                <ul class="web-grid-row-4 web-grid-row-4-m-1">
                    <li>
                        <a
                            href="/docs/products/auth"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-products_auth-click`)}
                        >
                            <img
                                src="/images/icons/illustrated/dark/auth.png"
                                alt=""
                                class="web-u-only-dark"
                                width="40"
                                height="40"
                            />
                            <img
                                src="/images/icons/illustrated/light/auth.png"
                                alt=""
                                class="web-u-only-light"
                                width="40"
                                height="40"
                            />
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Auth</h4>
                            <p class="text-sub-body mt-1">
                                Sign in users with multiple OAuth providers.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/products/databases"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-products_databases-click`)}
                        >
                            <img
                                src="/images/icons/illustrated/dark/databases.png"
                                alt=""
                                class="web-u-only-dark"
                                width="40"
                                height="40"
                            />
                            <img
                                src="/images/icons/illustrated/light/databases.png"
                                alt=""
                                class="web-u-only-light"
                                width="40"
                                height="40"
                            />
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Databases</h4>
                            <p class="text-sub-body mt-1">Store your application and user data.</p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/products/functions"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-products_functions-click`)}
                        >
                            <img
                                src="/images/icons/illustrated/dark/functions.png"
                                alt=""
                                class="web-u-only-dark"
                                width="40"
                                height="40"
                            />
                            <img
                                src="/images/icons/illustrated/light/functions.png"
                                alt=""
                                class="web-u-only-light"
                                width="40"
                                height="40"
                            />
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Functions</h4>
                            <p class="text-sub-body mt-1">
                                Extend and customize your server's functionality.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/products/sites"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-products_sites-click`)}
                        >
                            <img
                                src="/images/icons/illustrated/dark/sites.png"
                                alt=""
                                class="web-u-only-dark"
                                width="40"
                                height="40"
                            />
                            <img
                                src="/images/icons/illustrated/light/sites.png"
                                alt=""
                                class="web-u-only-light"
                                width="40"
                                height="40"
                            />
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Sites</h4>
                            <p class="text-sub-body mt-1">
                                Deploy websites on the internet at scale.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/products/messaging"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-products_messaging-click`)}
                        >
                            <img
                                src="/images/icons/illustrated/dark/messaging.png"
                                alt=""
                                class="web-u-only-dark"
                                width="40"
                                height="40"
                            />
                            <img
                                src="/images/icons/illustrated/light/messaging.png"
                                alt=""
                                class="web-u-only-light"
                                width="40"
                                height="40"
                            />
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Messaging</h4>
                            <p class="text-sub-body mt-1">
                                Send and schedule email, SMS, and push notifications.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/products/storage"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-products_storage-click`)}
                        >
                            <img
                                src="/images/icons/illustrated/dark/storage.png"
                                alt=""
                                class="web-u-only-dark"
                                width="40"
                                height="40"
                            />
                            <img
                                src="/images/icons/illustrated/light/storage.png"
                                alt=""
                                class="web-u-only-light"
                                width="40"
                                height="40"
                            />
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Storage</h4>
                            <p class="text-sub-body mt-1">
                                Store images, videos, documents, and files.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/apis/realtime"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-products_realtime-click`)}
                        >
                            <img
                                src="/images/icons/illustrated/dark/realtime.png"
                                alt=""
                                class="web-u-only-dark"
                                width="40"
                                height="40"
                            />
                            <img
                                src="/images/icons/illustrated/light/realtime.png"
                                alt=""
                                class="web-u-only-light"
                                width="40"
                                height="40"
                            />
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Realtime</h4>
                            <p class="text-sub-body mt-1">Respond to server events in realtime.</p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/products/network"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-products_network-click`)}
                        >
                            <img
                                src="/images/icons/illustrated/dark/network.png"
                                alt=""
                                class="web-u-only-dark"
                                width="40"
                                height="40"
                            />
                            <img
                                src="/images/icons/illustrated/light/network.png"
                                alt=""
                                class="web-u-only-light"
                                width="40"
                                height="40"
                            />
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Network</h4>
                            <p class="text-sub-body mt-1">
                                Global infrastructure for serverless compute.
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="web-hero is-align-start is-no-max-width">
            <h2 class="text-title font-aeonik-pro text-primary max-w-[600px]">
                Explore ways to integrate
            </h2>
            <p class="text-description max-w-[600px]">
                Choose how you integrate with Appwrite. Explore references for the Appwrite SDK,
                REST API, GraphQL API, or Realtime API.
            </p>
            <div class="mt-6">
                <ul class="web-grid-row-2">
                    <li>
                        <a
                            href="/docs/sdks"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-explore_sdks-click`)}
                        >
                            <h4 class="text-sub-body text-primary mt-2 font-medium">SDKs</h4>
                            <p class="text-sub-body mt-1">
                                Light-weight SDKs for your favorite platforms.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/apis/rest"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-explore_rest_apis-click`)}
                        >
                            <h4 class="text-sub-body text-primary mt-2 font-medium">REST API</h4>
                            <p class="text-sub-body mt-1">
                                Integrate with HTTP requests without the needing an SDK.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/apis/graphql"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-explore_graphql_apis-click`)}
                        >
                            <h4 class="text-sub-body text-primary mt-2 font-medium">GraphQL</h4>
                            <p class="text-sub-body mt-1">
                                Leverage GraphQL through our SDKs or integrate directly with REST
                                endpoints.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/apis/realtime"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-explore_realtime_apis-click`)}
                        >
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Realtime</h4>
                            <p class="text-sub-body mt-1">
                                Respond to auth, databases, storage, and function events in
                                realtime.
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="web-hero is-align-start is-no-max-width">
            <h2 class="text-title font-aeonik-pro text-primary max-w-[600px]">
                Migrate to Appwrite
            </h2>
            <p class="text-description max-w-[600px]">
                Own your data with automatic data migrations.
            </p>
            <div class="mt-6">
                <ul class="web-grid-row-4">
                    <li>
                        <a
                            href="/docs/advanced/migrations/self-hosted"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-migrations_self_hosted-click`)}
                        >
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Self-hosted</h4>
                            <p class="text-sub-body mt-1">
                                Move data from self-hosted to Appwrite Cloud.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/advanced/migrations/firebase"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-migrations_firebase-click`)}
                        >
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Firebase</h4>
                            <p class="text-sub-body mt-1">
                                Migrate users and data from Firebase to Appwrite.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/advanced/migrations/supabase"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-migrations_supabase-click`)}
                        >
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Supabase</h4>
                            <p class="text-sub-body mt-1">
                                Migrate users and data from Supabase to Appwrite.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/advanced/migrations/nhost"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-migrations_nhost-click`)}
                        >
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Nhost</h4>
                            <p class="text-sub-body mt-1">
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

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .e-hero-docs {
        @media (min-width: 1280px) {
            margin-block-start: 5rem;
        }
    }
    .web-main-section {
        max-inline-size: unset;
        margin-inline: unset;
        @media (min-width: 1280px) {
            padding-inline-start: 3rem; // 48px
        }
    }

    .tech-hero {
        @include gradients.border-block-gradient;

        --m-border-size: 1px;
        --m-border-gradient-before: linear-gradient(
            to right,
            hsl(var(--web-color-smooth)) 0%,
            hsl(var(--web-color-smooth)) 90%,
            transparent
        );

        max-inline-size: unset;
        margin-block-start: 2rem;
        margin-inline-start: -3rem;
        padding-block: 5rem;
        padding-inline-start: 3rem;

        position: relative;
        z-index: 10;

        .spline-wrapper {
            --p-size: 700px;
            inline-size: var(--p-size);
            block-size: var(--p-size);
            inset-block-start: -3rem;
            z-index: -1;
            left: calc(50% - 384px + 400px);
        }
    }

    :global(.dark) .tech-hero {
        background: linear-gradient(to right, #19191c80, #19191c00);
        backdrop-filter: blur(1rem);
        -webkit-backdrop-filter: blur(1rem);
    }

    :global(.dark) .bg-overlay {
        background: linear-gradient(to right, #19191c00 0%, #19191c 400px, #19191c);
    }
</style>
