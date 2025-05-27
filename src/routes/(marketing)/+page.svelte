<script lang="ts">
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
    import LogoList from '$lib/components/LogoList.svelte';
</script>

<Head title="Appwrite - Backend APIs, Frontend hosting" />

<Main>
    <Hero />
    <Platforms />
    <LogoList class="border-smooth border-b" />
    <Bento />
    <Pullquote
        name="Ryan O’Conner"
        title="Founder, K Collect"
        avatar="/images/testimonials/ryan-oconner.png"
    >
        <span class="text-secondary">Just like a Swiss Army Knife</span> you can choose and use the tools
        that you need with Appwrite.</Pullquote
    >
    <CaseStudies />
    <Features />
    <div class="light bg-[#EDEDF0]">
        <Map theme="light" />
        <Scale
            testimonial={{
                name: 'Ryan O’Conner',
                title: 'Founder',
                company: 'K-Collect',
                image: '/images/testimonials/ryan-oconner-testimonial.png'
            }}
            stats={[
                {
                    number: 50,
                    suffix: 'K+',
                    description: 'Github stars'
                },
                {
                    number: 300,
                    suffix: '+',
                    description: 'PoP locations'
                },
                {
                    number: 200,
                    suffix: 'K+',
                    description: 'developers'
                },
                {
                    number: 200,
                    suffix: 'B+',
                    description: 'monthly database operations'
                }
            ]}
        >
            The switch to using Appwrite brought
            <span class="text-primary">infinite value that I'm still discovering today.</span>
        </Scale>
    </div>
    <Pricing />
</Main>

<div class="container">
    <FooterNav />
    <MainFooter />
</div>
