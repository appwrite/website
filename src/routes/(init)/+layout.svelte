<script lang="ts">
    import SiteHeader from '$lib/components/layout/site-header.svelte';
    import SiteFooter from '$lib/components/layout/site-footer.svelte';
    import Lockup from './init/(components)/lockup.svelte';
    import { isStarted } from './init/+page.svelte';
</script>

<div
    class="flex min-h-screen flex-col bg-[url('/images/bgs/dots.svg')] bg-[size:calc(100vw_/_11)] bg-[position:center_top]"
>
    <SiteHeader class="border-b-2 border-dashed" contained simple />
    <slot />
    <SiteFooter class="border-t-2 border-dashed" />
    {#if isStarted}
        <div class="overflow-y-hidden">
            <Lockup class="-mb-[24rem] w-full" />
        </div>
    {/if}
</div>
