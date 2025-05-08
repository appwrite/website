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
</script>

<Head title="Appwrite - Backend APIs, Frontend hosting" />

<Main>
    <Hero />
    <Platforms />
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
    <Map />
    <Scale />
    <Pricing />
</Main>
