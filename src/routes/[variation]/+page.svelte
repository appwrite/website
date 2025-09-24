<script lang="ts">
    import Bento from '$routes/(marketing)/(components)/bento/bento.svelte';
    import CaseStudies from '$routes/(marketing)/(components)/case-studies.svelte';
    import Features from '$routes/(marketing)/(components)/features.svelte';
    import Platforms from '$routes/(marketing)/(components)/platforms.svelte';
    import Pricing from '$routes/(marketing)/(components)/pricing.svelte';
    import Scale from '$routes/(marketing)/(components)/scale.svelte';
    import { Main } from '$lib/layouts';
    import Head from '$lib/components/meta/head.svelte';
    import Map from '$routes/(marketing)/(components)/map.svelte';
    import Pullquote from '$lib/components/marketing/pullquote.svelte';
    import { FooterNav, MainFooter } from '$lib/components';
    import LogoList from '$routes/(marketing)/(components)/logo-list.svelte';
    import CustomHero from '$lib/components/homepage-variations/custom-hero.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
    const { config } = data;
</script>

<Head title={config.pageTitle} />

<Main>
    <CustomHero
        title={config.title}
        subtitle={config.subtitle}
        showDashboard={config.showDashboard}
        ctaLabel={config.ctaLabel}
        ctaHref={config.ctaHref}
    />

    {#if config.showPlatforms}
        <Platforms headline="Designed for the tools you work with" />
    {/if}

    {#if config.showLogoList}
        <LogoList
            class="border-smooth border-b"
            title="Loved by developers from the world's leading organizations"
        />
    {/if}

    {#if config.showBento}
        <Bento />
    {/if}

    {#if config.showPullquote}
        <Pullquote
            name="Phil McCluskey"
            title="App Manager, Majik Kids"
            avatar="/images/testimonials/phil.jpg"
        >
            <span class="text-secondary">Just like a Swiss Army Knife</span> you can choose and use the
            tools that you need with Appwrite.</Pullquote
        >
    {/if}

    {#if config.showCaseStudies}
        <CaseStudies />
    {/if}

    {#if config.showFeatures}
        <Features theme="light" />
    {/if}

    {#if config.showMap || config.showScale}
        <div class="light bg-[#EDEDF0]">
            {#if config.showMap}
                <Map theme="light" />
            {/if}
            {#if config.showScale}
                <Scale
                    testimonial={{
                        name: 'Ryan OConnor',
                        title: 'Founder',
                        company: 'K-Collect',
                        image: '/images/testimonials/ryan-oconner-testimonial.png'
                    }}
                >
                    The switch to using Appwrite brought
                    <span class="text-primary"
                        >infinite value that I'm still discovering today.</span
                    >
                </Scale>
            {/if}
        </div>
    {/if}

    {#if config.showPricing}
        <Pricing />
    {/if}
</Main>

<div class="container">
    <FooterNav />
    <MainFooter />
</div>
