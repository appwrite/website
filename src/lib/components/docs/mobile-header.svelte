<script>
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { layoutState, toggleSidenav } from '$lib/layouts/Docs.svelte';
</script>

<section
    class="web-mobile-header sticky inset-x-0 top-0 z-120 flex items-center justify-between gap-4 border-b border-white/10 py-4 px-5 backdrop-blur-[10px] lg:hidden"
>
    <div class="flex items-center">
        <a href="/" aria-label="homepage">
            <img
                class="web-logo web-u-only-dark"
                src="/images/logos/appwrite.svg"
                alt="appwrite"
                height="24"
                width="130"
            />
            <img
                class="web-logo web-u-only-light"
                src="/images/logos/appwrite-light.svg"
                alt="appwrite"
                height="24"
                width="130"
            />
        </a>
    </div>
    <div class="flex items-center gap-2">
        <a href={PUBLIC_APPWRITE_DASHBOARD} class="web-button !hidden md:!block">
            <span class="text-sub-body font-medium">Go to Console</span>
        </a>
        <button class="web-button is-text" aria-label="open navigation" on:click={toggleSidenav}>
            {#if $layoutState.showSidenav}
                <span aria-hidden="true" class="web-icon-close" />
            {:else}
                <span aria-hidden="true" class="web-icon-hamburger-menu" />
            {/if}
        </button>
    </div>
</section>
