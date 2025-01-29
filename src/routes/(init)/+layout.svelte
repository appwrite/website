<script lang="ts">
    import SiteHeader from '$lib/components/layout/site-header.svelte';
    import SiteFooter from '$lib/components/layout/site-footer.svelte';
    import Lockup from './init/(components)/lockup.svelte';
</script>

<SiteHeader class="border-dashed" />
<slot />
<div
    class="absolute inset-0 top-0 -z-1 h-full w-full bg-[radial-gradient(rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:100px_100px]"
/>

<SiteFooter class="border-dashed" />
<div class="overflow-y-hidden">
    <Lockup class="-mb-[24rem] w-full" />
</div>
