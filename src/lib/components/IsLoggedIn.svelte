<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { trackEvent } from '$lib/actions/analytics';
    import { browser } from '$app/environment';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';

    export let classes = '';

    const isLoggedIn = browser && 'loggedIn' in document.body.dataset;

    function getTrackingEventName() {
        return browser ? (isLoggedIn ? 'Go to console' : 'Start building') : 'Start building';
    }
</script>

<a
    class={classNames('web-button web-u-inline-width-100-percent-mobile', classes)}
    href={getAppwriteDashboardUrl()}
    on:click={() =>
        trackEvent({
            plausible: { name: `${getTrackingEventName()} in header` },
            ...(isLoggedIn ? {} : { posthog: { name: 'get-started-btn_nav_click' } })
        })}
>
    <span class="hidden group-[&[data-logged-in]]/body:block">Go to Console</span>
    <span class="block group-[&[data-logged-in]]/body:hidden">Start building</span>
</a>
