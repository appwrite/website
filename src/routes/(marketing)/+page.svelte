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
</script>

<Head title="Appwrite - Backend APIs, Frontend hosting" />

<Main>
    <Hero />
    <Platforms />
    <Bento />
    <CaseStudies />
    <Features />
    <Map />
    <Scale />
    <Pricing />
</Main>
