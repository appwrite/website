<script>
    import Main from '$lib/layouts/Main.svelte';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import Templates from './(components)/Templates.svelte';

    import Phone from './(assets)/phone.png';
    import Bento from './(components)/Bento.svelte';
    import OpenSource from './(components)/OpenSource.svelte';
    import { PreFooter, FooterNav, MainFooter } from '$lib/components';
    import Hero from '$lib/components/product-pages/hero.svelte';
    import Languages from './(components)/Languages.svelte';
    import Platforms from './(components)/Platforms.svelte';
    import DevelopLocally from './(components)/DevelopLocally.svelte';
    import DeploySeamlessly from './(components)/DeploySeamlessly.svelte';
    import Testimonials from './(components)/Testimonials.svelte';
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';

    const title = 'Functions' + TITLE_SUFFIX;
    const description =
        'Appwrite Functions offer everything you need to deploy and scale serverless functions easily, without any server management overhead.';
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
    <div class="overflow-hidden">
        <Hero
            eyebrow={{
                label: 'Functions',
                icon: '/images/icons/illustrated/dark/functions.png'
            }}
            title="Serverless functions done your way"
            image={{
                url: Phone,
                alt: 'Phone screen with example function running on an e-commerce site.'
            }}
            description="Deploy and scale serverless functions with seamless integration, multi-language support, and zero server management."
            cta={{
                label: 'Get started',
                url: PUBLIC_APPWRITE_DASHBOARD
            }}
            secondaryCta={{
                label: 'Documentation',
                url: '/docs/products/functions'
            }}
        />

        <Languages />
        <Platforms />
        <DevelopLocally />
        <DeploySeamlessly />
        <Bento />
        <div class="bg-greyscale-50">
            <Templates />
            <Testimonials />
            <OpenSource />
        </div>

        <section class="web-u-sep-block-start -mt-8 py-40">
            <div class="container">
                <h4 class="text-label text-primary text-center">Keep exploring our products</h4>
                <ul
                    class="mt-8 grid gap-8"
                    style="grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr))"
                >
                    <li class="web-u-flex-basis-378">
                        <a
                            class="web-card is-normal"
                            href="/products/messaging"
                            style="background: rgba(255, 255, 255, 0.04);"
                        >
                            <div
                                class="web-u-padding-inline-8 web-u-padding-block-end-8 flex flex-col gap-2"
                            >
                                <div class="flex items-center gap-2">
                                    <img
                                        src="/images/icons/illustrated/dark/messaging.png"
                                        alt="auth"
                                        width="32"
                                        height="32"
                                    />
                                    <h4 class="text-body text-primary">Messaging</h4>
                                    <span class="web-icon-arrow-right ml-auto" aria-hidden="true"
                                    ></span>
                                </div>
                                <p class="text-sub-body">
                                    Use Appwrite messaging to send email, SMS, and push
                                    notifications.
                                </p>
                            </div>
                        </a>
                    </li>
                    <li class="web-u-flex-basis-378">
                        <a
                            class="web-card is-normal"
                            href="/products/functions"
                            style="background: rgba(255, 255, 255, 0.04);"
                        >
                            <div
                                class="web-u-padding-inline-8 web-u-padding-block-end-8 flex flex-col gap-2"
                            >
                                <div class="flex items-center gap-2">
                                    <img
                                        src="/images/icons/illustrated/dark/functions.png"
                                        alt="functions"
                                        width="32"
                                        height="32"
                                    />
                                    <h4 class="text-body text-primary">Functions</h4>
                                    <span class="web-icon-arrow-right ml-auto" aria-hidden="true"
                                    ></span>
                                </div>
                                <p class="text-sub-body">
                                    Scale big and unlock limitless potential with Appwrite
                                    functions.
                                </p>
                            </div>
                        </a>
                    </li>
                    <li class="web-u-flex-basis-378">
                        <a
                            class="web-card is-normal"
                            href="/docs/products/databases"
                            style="background: rgba(255, 255, 255, 0.04);"
                        >
                            <div
                                class="web-u-padding-inline-8 web-u-padding-block-end-8 flex flex-col gap-2"
                            >
                                <div class="flex items-center gap-2">
                                    <img
                                        src="/images/icons/illustrated/dark/databases.png"
                                        alt=""
                                        width="37"
                                        height="32"
                                    />
                                    <h4 class="text-body text-primary">Databases</h4>
                                    <span class="web-icon-arrow-right ml-auto" aria-hidden="true"
                                    ></span>
                                </div>
                                <p class="text-sub-body">
                                    Store and query structured data, ensuring scalable storage.
                                </p>
                            </div>
                        </a>
                    </li>
                    <li class="web-u-flex-basis-378">
                        <a
                            class="web-card is-normal"
                            href="/products/storage"
                            style="background: rgba(255, 255, 255, 0.04);"
                        >
                            <div
                                class="web-u-padding-inline-8 web-u-padding-block-end-8 flex flex-col gap-2"
                            >
                                <div class="flex items-center gap-2">
                                    <img
                                        src="/images/icons/illustrated/dark/storage.png"
                                        alt="storage"
                                        width="32"
                                        height="32"
                                    />
                                    <h4 class="text-body text-primary">Storage</h4>
                                    <span class="web-icon-arrow-right ml-auto" aria-hidden="true"
                                    ></span>
                                </div>
                                <p class="text-sub-body">
                                    Manage your files' project, using convenient APIs and utilities.
                                </p>
                            </div>
                        </a>
                    </li>
                    <li class="web-u-flex-basis-378">
                        <a
                            class="web-card is-normal"
                            href="/docs/apis/realtime"
                            style="background: rgba(255, 255, 255, 0.04);"
                        >
                            <div
                                class="web-u-padding-inline-8 web-u-padding-block-end-8 flex flex-col gap-2"
                            >
                                <div class="flex items-center gap-2">
                                    <img
                                        src="/images/icons/illustrated/dark/realtime.png"
                                        alt="realtime"
                                        width="32"
                                        height="32"
                                    />
                                    <h4 class="text-body text-primary">Realtime</h4>
                                    <span class="web-icon-arrow-right ml-auto" aria-hidden="true"
                                    ></span>
                                </div>
                                <p class="text-sub-body">
                                    Utilize realtime information from all Appwrite services.
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <div class="relative">
            <div class="container">
                <PreFooter />
                <FooterNav />
                <MainFooter />
            </div>
        </div>
    </div>
</Main>
