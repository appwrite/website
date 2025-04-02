<script>
    import MainFooter from '$lib/components/layout/main-footer.svelte';
    import MainHeader from '$lib/components/layout/main-header.svelte';
    import SubFooter from '$lib/components/layout/sub-footer.svelte';
</script>

<MainHeader />
<slot />
<MainFooter />
<SubFooter />
