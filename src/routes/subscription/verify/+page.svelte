<script lang="ts">
    import { page } from '$app/state';
    import { FooterNav, MainFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import { onMount } from 'svelte';
    import { PUBLIC_GROWTH_ENDPOINT } from '$env/static/public';
    import { Button } from '$lib/components/ui';

    let error: string | undefined;

    onMount(async () => {
        const email = page.url.searchParams.get('email');
        const key = page.url.searchParams.get('key');
        const response = await fetch(`${PUBLIC_GROWTH_ENDPOINT}/newsletter/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                key
            })
        });
        if (response.status >= 400) {
            error = response.status >= 500 ? 'Server Error.' : 'Error submitting form.';
            return;
        }
    });
</script>

<Main>
    <div class="web-big-padding-section">
        <div class="web-big-padding-section-level-2">
            <div class="container">
                <div class="web-hero" style="--hero-gap:1.25rem;">
                    <span class="web-badges text-micro text-white uppercase">verification</span>
                    <h1 class="text-headline font-aeonik-pro text-primary">
                        {#if error}
                            Error
                        {:else}
                            Success
                        {/if}
                    </h1>

                    <p class="text-description">
                        {#if error}
                            Something went wrong, please try again later.
                        {:else}
                            Your email has been verified successfully.
                        {/if}
                    </p>
                    <Button href="/" variant="secondary" class="mt-3 self-center">
                        Back to homepage
                    </Button>
                </div>
            </div>
        </div>
        <div class="web-big-padding-section-level-2 relative">
            <div class="container">
                <FooterNav />
                <MainFooter />
            </div>
        </div>
    </div>
</Main>
