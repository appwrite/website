<script lang="ts">
    import { browser, building } from '$app/environment';
    import { page } from '$app/state';
    import {
        DEFAULT_HERO_CTA,
        DEFAULT_HERO_SUBTITLE,
        DEFAULT_HERO_TITLE
    } from '$lib/statsig/constants';
    import { resolveHeroQueryOverrides } from '$lib/statsig/hero-query-overrides';
    import type { HeroLayoutVariant } from '$lib/statsig/hero-layout';
    import type { PageData } from './$types';
    import Bento from './(components)/bento/bento.svelte';
    import CaseStudies from './(components)/case-studies.svelte';
    import Features from './(components)/features.svelte';
    import Hero from './(components)/hero.svelte';
    import Platforms from './(components)/platforms.svelte';
    import Pricing from './(components)/pricing.svelte';
    import Scale from './(components)/scale.svelte';
    import { Main } from '$lib/layouts';
    import Head from '$lib/components/meta/head.svelte';
    import Map from './(components)/map.svelte';
    import Pullquote from '$lib/components/marketing/pullquote.svelte';
    import { FooterNav, MainFooter } from '$lib/components';
    import LogoList from './(components)/logo-list.svelte';
    import Ai from './(components)/ai.svelte';

    /** Same baseline + query resolution as `hero.svelte`; tab title prefixes the brand. */
    type MarketingHeroPageData = PageData & {
        statsigBootstrap?: string | null;
        statsigStableUserId?: string | null;
        statsigUserAgent?: string | null;
    };

    const data = $derived(page.data as MarketingHeroPageData);

    const heroPageTitle = $derived(
        resolveHeroQueryOverrides(building ? new URLSearchParams() : page.url.searchParams, {
            heroLayout: (data.heroLayout ?? 0) as HeroLayoutVariant,
            heroSubtitle: data.heroSubtitle ?? DEFAULT_HERO_SUBTITLE,
            heroTitle: data.heroTitle ?? DEFAULT_HERO_TITLE,
            heroCta: data.heroCta ?? DEFAULT_HERO_CTA
        }).heroTitle
    );

    const homepageDocumentTitle = $derived(`Appwrite - ${heroPageTitle}`);
</script>

<Head
    title={homepageDocumentTitle}
    description="Build like a team of hundreds with Appwrite's all-in-one, open-source infrastructure. Launch in minutes, use any framework, and scale affordably with Auth, Database, Storage, Functions, Realtime, Messaging, and Sites for static sites, SSR, and CSR frontends."
/>

<Main>
    <Hero />
    <Platforms headline="Optimized for the frameworks, languages and agents you love" />
    <LogoList class="border-smooth border-b" title="Trusted by developer teams worldwide" />

    {#if browser}
        <!-- Below the fold - client-side only to avoid SSR CPU cost -->
        <Bento />
        <Pullquote
            name="Phil McCluskey"
            title="App Manager, Majik Kids"
            avatar="/images/testimonials/phil-avatar.avif"
        >
            <span class="text-secondary">Just like a Swiss Army Knife</span> you can choose and use the
            tools that you need with Appwrite.</Pullquote
        >
        <Ai />
        <CaseStudies />
        <Features theme="light" />
        <div class="light bg-[#EDEDF0]">
            <Map theme="light" />
            <Scale
                testimonial={{
                    name: 'Ryan O’Connor',
                    title: 'Founder',
                    company: 'K-Collect',
                    image: '/images/testimonials/ryan-oconner-testimonial.avif'
                }}
            >
                The switch to using Appwrite brought
                <span class="text-primary">infinite value that I'm still discovering today.</span>
            </Scale>
        </div>
        <Pricing />
    {:else}
        <!-- Placeholder to keep the footer below the fold on SSR -->
        <div class="h-screen" aria-hidden="true"></div>
    {/if}
</Main>

<div class="container">
    <FooterNav />
    <MainFooter />
</div>
