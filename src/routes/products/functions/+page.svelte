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
    import RegionsMap from './(components)/RegionsMap.svelte';
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import ProductCards from '$lib/components/product-pages/product-cards.svelte';

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

        <ProductCards />
        <div class="relative">
            <div class="container">
                <PreFooter />
                <FooterNav />
                <MainFooter />
            </div>
        </div>
    </div>
</Main>
