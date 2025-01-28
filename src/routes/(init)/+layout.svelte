<script lang="ts">
    import { FooterNav, MainFooter } from '$lib/components';
    import SiteHeader from '$lib/components/layout/site-header.svelte';
</script>

<SiteHeader class="border-dashed" />
<slot />
<div
    class="absolute inset-0 -z-1 h-full w-full bg-[radial-gradient(rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:128px_128px]"
/>
<div class="container">
    <FooterNav />
    <MainFooter />
</div>
