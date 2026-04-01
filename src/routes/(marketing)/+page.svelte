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
    import LogoList from './(components)/logo-list.svelte';
    import Ai from './(components)/ai.svelte';
</script>

<Head
    title="Appwrite - Build like a team of hundreds"
    description="Build like a team of hundreds with Appwrite's all-in-one, open-source infrastructure. Launch in minutes, use any framework, and scale affordably with Auth, Database, Storage, Functions, Realtime, Messaging, and Hosting."
/>

<Main>
    <Hero
        title="Build like a team of hundreds"
        subtitle="Appwrite is an open-source, all-in-one development platform. Use built-in backend infrastructure and web hosting, all from a single place."
    />
    <Platforms headline="Designed for the tools you work with" />
    <LogoList class="border-smooth border-b" title="Loved by startups and world leaders" />
    <Bento />
    <Pullquote
        name="Phil McCluskey"
        title="App Manager, Majik Kids"
        avatar="/images/testimonials/phil.jpg"
    >
        <span class="text-secondary">Just like a Swiss Army Knife</span> you can choose and use the tools
        that you need with Appwrite.</Pullquote
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
                image: '/images/testimonials/ryan-oconner-testimonial.png'
            }}
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
