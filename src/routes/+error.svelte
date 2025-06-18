<script lang="ts">
    import { page } from '$app/state';
    import { FooterNav, MainFooter } from '$lib/components';
    import { Button } from '$lib/components/ui';
    import { Main } from '$lib/layouts';
    import DocsError from './(docs)/docs/+error.svelte';

    const isDocs = page.url.pathname.startsWith('/docs');
</script>

{#if isDocs}
    <DocsError />
{:else}
    <Main>
        <div class="web-big-padding-section">
            <div class="web-big-padding-section-level-2">
                <div class="container">
                    <div class="web-hero" style="--hero-gap:1.25rem;">
                        <span class="web-badges text-micro !text-white uppercase"
                            >{page.status}</span
                        >
                        <h1 class="text-headline font-aeonik-pro text-primary">
                            {page.error?.message ?? 'An error has occured'}
                        </h1>
                        {#if page.status === 404}
                            <p class="text-description">
                                Sorry, it seems that the page you are looking for does not exist.
                                Feel free to use our navigation menu or the button below to explore
                                more of Appwrite's documentation.
                            </p>
                        {/if}
                        <Button href="/" class="self-center">Back to homepage</Button>
                    </div>
                </div>
            </div>
            <div class="relative pt-[7.5rem]">
                <div class="container">
                    <FooterNav />
                    <MainFooter />
                </div>
            </div>
        </div>
    </Main>
{/if}
