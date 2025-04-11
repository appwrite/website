<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { trackEvent } from '$lib/actions/analytics';
    import { browser } from '$app/environment';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import { Button } from '$lib/components/ui';

    interface Props {
        class?: string;
    }

    const { class: className }: Props = $props();

    const isLoggedIn = browser && 'loggedIn' in document.body.dataset;

    function getTrackingEventName() {
        return browser ? (isLoggedIn ? 'Go to console' : 'Start building') : 'Start building';
    }
</script>

<Button
    class={classNames('web-u-inline-width-100-percent-mobile', className)}
    href={getAppwriteDashboardUrl()}
    onclick={() =>
        trackEvent({
            plausible: { name: `${getTrackingEventName()} in header` },
            ...(isLoggedIn ? {} : { posthog: { name: 'get-started-btn_nav_click' } })
        })}
>
    <span class="hidden group-[&[data-logged-in]]/body:block" aria-hidden={!isLoggedIn}
        >Go to Console</span
    >
    <span class="block group-[&[data-logged-in]]/body:hidden" aria-hidden={isLoggedIn}
        >Start building</span
    >
</Button>
