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
    import Platforms from '$routes/(marketing)/(components)/platforms.svelte';
    import HeroBanner from '$routes/(marketing)/(components)/hero-banner.svelte';

    const title = 'Docs' + TITLE_SUFFIX;
    const description =
        'Learn how to build like a team of hundreds. Get started with Authentication, Databases, Storage, Functions, and Messaging in your preferred framework.';
    const ogImage = DEFAULT_HOST + '/images/open-graph/docs.png';

    type AiToolCard = {
        href: string;
        title: string;
        logo: string;
        event: string;
    };

    const ideAiTools: AiToolCard[] = [
        {
            href: '/docs/tooling/mcp/vscode',
            title: 'VS Code',
            logo: '/images/docs/mcp/logos/dark/vscode.svg',
            event: 'docs-ai-ide_vscode-click'
        },
        {
            href: '/docs/tooling/mcp/cursor',
            title: 'Cursor',
            logo: '/images/docs/mcp/logos/dark/cursor-ai.svg',
            event: 'docs-ai-ide_cursor-click'
        },
        {
            href: '/docs/tooling/mcp/windsurf',
            title: 'Windsurf Editor',
            logo: '/images/docs/mcp/logos/dark/windsurf.svg',
            event: 'docs-ai-ide_windsurf-click'
        },
        {
            href: '/docs/tooling/mcp/opencode',
            title: 'OpenCode',
            logo: '/images/docs/mcp/logos/dark/opencode.svg',
            event: 'docs-ai-ide_opencode-click'
        },
        {
            href: '/docs/tooling/mcp/antigravity',
            title: 'Google Antigravity',
            logo: '/images/docs/mcp/logos/dark/google-antigravity.svg',
            event: 'docs-ai-ide_antigravity-click'
        },
        {
            href: '/docs/tooling/mcp/claude-code',
            title: 'Claude Code',
            logo: '/images/docs/mcp/logos/dark/claude.svg',
            event: 'docs-ai-ide_claude-code-click'
        },
        {
            href: '/docs/tooling/ai/ai-dev-tools/codex',
            title: 'Codex',
            logo: '/images/docs/mcp/logos/dark/openai.svg',
            event: 'docs-ai-ide_codex-click'
        }
    ];

    const vibeCodingTools: AiToolCard[] = [
        {
            href: '/docs/tooling/mcp/claude-desktop',
            title: 'Claude Desktop',
            logo: '/images/docs/mcp/logos/dark/claude.svg',
            event: 'docs-ai-vibe_claude-desktop-click'
        },
        {
            href: '/docs/tooling/ai/ai-dev-tools/lovable',
            title: 'Lovable',
            logo: '/images/docs/mcp/logos/dark/lovable.svg',
            event: 'docs-ai-vibe_lovable-click'
        },
        {
            href: '/docs/tooling/ai/ai-dev-tools/emergent',
            title: 'Emergent',
            logo: '/images/docs/mcp/logos/dark/emergent.svg',
            event: 'docs-ai-vibe_emergent-click'
        },
        {
            href: '/docs/tooling/ai/ai-dev-tools/bolt',
            title: 'Bolt',
            logo: '/images/docs/mcp/logos/dark/bolt.svg',
            event: 'docs-ai-vibe_bolt-click'
        },
        {
            href: '/docs/tooling/mcp/zenflow',
            title: 'Zenflow',
            logo: '/images/docs/mcp/logos/dark/zenflow.svg',
            event: 'docs-ai-vibe_zenflow-click'
        }
    ];

    const tutorials: CodeCardProps[] = [
        {
            href: '/docs/tutorials/react',
            cover: '/images/tutorials/react.png',
            title: 'React tutorial',
            description: 'Learn Appwrite Auth, Databases, and more with React.'
        },
        {
            href: '/docs/tutorials/nextjs',
            cover: '/images/tutorials/nextjs.png',
            title: 'Next.js tutorial',
            description: 'Learn Appwrite Auth, Databases, and more with Next.js.'
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
            <HeroBanner title="MCP Server" href="/docs/tooling/mcp" />
            <h1 class="text-display font-aeonik-pro text-primary max-w-[600px]">
                Docs<span class="web-u-color-text-accent">_ </span>
            </h1>
            <p class="text-description max-w-[600px]">
                Appwrite helps you build secure and scalable apps, faster. Leverage Appwrite's
                powerful APIs to stop fighting technologies and start delivering value.
            </p>

            <Button variant="secondary" href="/docs/quick-starts" class="mt-8"
                >Quickstart guides</Button
            >
        </section>
        <Platforms padded={false} class="mt-12! p-0! max-md:p-0!" />
        <section class="web-hero is-align-start is-no-max-width mt-12!">
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
                            href="/docs/products/avatars"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-products_avatars-click`)}
                        >
                            <img
                                src="/images/icons/illustrated/dark/avatars.png"
                                alt=""
                                class="web-u-only-dark"
                                width="40"
                                height="40"
                            />
                            <img
                                src="/images/icons/illustrated/light/avatars.png"
                                alt=""
                                class="web-u-only-light"
                                width="40"
                                height="40"
                            />
                            <h4 class="text-sub-body text-primary mt-2 font-medium">Avatars</h4>
                            <p class="text-sub-body mt-1">
                                Generate icons, screenshots, and QR codes for your apps.
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
                </ul>
            </div>
        </section>
        <section class="web-hero is-align-start is-no-max-width mt-12!">
            <h2 class="text-title font-aeonik-pro text-primary max-w-[600px]">
                Build faster with AI
            </h2>
            <p class="text-description max-w-[720px]">
                Wire up MCP so models can reach your Appwrite project and docs, install
                <a class="web-link underline" href="/docs/tooling/ai/skills">agent skills</a>
                for SDK-accurate codegen, and use
                <a class="web-link underline" href="/docs/tooling/ai/quickstart-prompts"
                    >quickstart prompts</a
                >
                to scaffold features, whether you work in an IDE or a vibe coding platform.
            </p>

            <h3
                class="text-subtitle font-aeonik-pro text-primary mt-10 max-w-[720px] font-medium text-pretty"
            >
                IDEs & coding agents
            </h3>
            <p class="text-description mt-2 max-w-[720px]">
                Editors and agents where you ship code locally or in the terminal.
            </p>
            <div class="mt-4">
                <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {#each ideAiTools as tool (tool.href)}
                        <li>
                            <a
                                href={tool.href}
                                class="web-card is-normal flex h-full flex-row! items-center gap-2! no-underline"
                                onclick={() => trackEvent(tool.event)}
                            >
                                <img src={tool.logo} alt="" class="h-6 w-6 shrink-0" />
                                <h4 class="text-sub-body text-primary font-medium">{tool.title}</h4>
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>

            <h3
                class="text-subtitle font-aeonik-pro text-primary mt-10 max-w-[720px] font-medium text-pretty"
            >
                Vibe coding platforms
            </h3>
            <p class="text-description mt-2 max-w-[720px]">
                Build from prompts in the browser; connect docs or full MCP where supported.
            </p>
            <div class="mt-4">
                <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {#each vibeCodingTools as tool (tool.href)}
                        <li>
                            <a
                                href={tool.href}
                                class="web-card is-normal flex h-full flex-row! items-center gap-2! no-underline"
                                onclick={() => trackEvent(tool.event)}
                            >
                                <img src={tool.logo} alt="" class="h-6 w-6 shrink-0" />
                                <h4 class="text-sub-body text-primary font-medium">{tool.title}</h4>
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>

            <div
                class="mt-10 flex max-w-[720px] flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
            >
                <Button variant="secondary" href="/docs/tooling/ai" event="docs-ai_hub-click"
                    >Explore the AI tooling documentation</Button
                >
                <Button variant="text" href="/docs/tooling/mcp" event="docs-ai_mcp-overview-click"
                    >Configure the MCP server</Button
                >
            </div>
        </section>
        <section class="web-hero is-align-start is-no-max-width mt-12!">
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
                            <h4 class="text-sub-body text-primary font-medium">SDKs</h4>
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
                            <h4 class="text-sub-body text-primary font-medium">REST API</h4>
                            <p class="text-sub-body mt-1">
                                Integrate with HTTP requests without needing an SDK.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/apis/graphql"
                            class="web-card is-normal"
                            onclick={() => trackEvent(`docs-explore_graphql_apis-click`)}
                        >
                            <h4 class="text-sub-body text-primary font-medium">GraphQL</h4>
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
                            <h4 class="text-sub-body text-primary font-medium">Realtime</h4>
                            <p class="text-sub-body mt-1">
                                Respond to auth, databases, storage, and function events in
                                realtime.
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="web-hero is-align-start is-no-max-width mt-12!">
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
        <section class="web-hero is-align-start is-no-max-width mt-12!">
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
                            <h4 class="text-sub-body text-primary font-medium">Self-hosted</h4>
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
                            <h4 class="text-sub-body text-primary font-medium">Firebase</h4>
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
                            <h4 class="text-sub-body text-primary font-medium">Supabase</h4>
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
                            <h4 class="text-sub-body text-primary font-medium">Nhost</h4>
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
</style>
