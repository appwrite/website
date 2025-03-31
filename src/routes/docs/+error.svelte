<script lang="ts">
    import { page } from '$app/stores';
    import { MainFooter } from '$lib/components';
    import { Docs } from '$lib/layouts';
    import Sidebar from './Sidebar.svelte';
</script>

<Docs variant="two-side-navs">
    <Sidebar />
    <div class="web-article mx-auto flex max-w-[700px] items-center justify-center py-4">
        <div class="container">
            <div class="web-hero" style="--hero-gap:1.25rem;">
                <span class="web-badges text-micro !text-white uppercase">{$page.status}</span>
                <h1 class="text-headline font-aeonik-pro text-primary">
                    {$page.error?.message ?? 'An error has occured'}
                </h1>
                {#if $page.status === 404}
                    <p class="text-description">
                        Sorry, it seems that the page you are looking for does not exist. Feel free
                        to use our navigation menu or the button below to explore more of Appwrite's
                        documentation.
                    </p>
                {/if}
                <a href="/docs" class="web-button is-secondary mt-3 self-center">
                    <span>Back to docs</span>
                </a>
            </div>
        </div>
    </div>
    <MainFooter variant="docs" />
</Docs>
