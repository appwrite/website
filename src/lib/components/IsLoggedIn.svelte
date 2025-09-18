<script lang="ts">
    import { browser } from '$app/environment';
    import { Button } from '$lib/components/ui';
    import { cn } from '$lib/utils/cn';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';

    interface Props {
        class?: string;
        offerButton?: boolean;
    }

    const { class: className, offerButton = false }: Props = $props();
    const isLoggedIn = browser && 'loggedIn' in document.body.dataset;
</script>

<Button
    href={offerButton ? 'https://apwr.dev/DCMWDSw' : getAppwriteDashboardUrl()}
    event={offerButton ? 'main-claim_300_credits_btn_nav-click' : 'main-get_started_btn_nav-click'}
    class={cn('web-u-inline-width-100-percent-mobile', className)}
>
    {#if offerButton}
        <span class="block">Claim 300$ credits</span>
    {:else}
        <span class="hidden group-[&[data-logged-in]]/body:block" aria-hidden={!isLoggedIn}
            >Go to Console</span
        >
        <span class="block group-[&[data-logged-in]]/body:hidden" aria-hidden={isLoggedIn}
            >Start building for free</span
        >
    {/if}
</Button>
