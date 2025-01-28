<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { classNames } from '$lib/utils/classnames';
    import { trackEvent } from '$lib/actions/analytics';
    import { browser } from '$app/environment';
    import { page } from '$app/stores';

    const ctaCopy = $page.data.ctaCopy;

    export let classes = '';

    const isLoggedIn = browser && 'loggedIn' in document.body.dataset;

    function getTrackingEventName() {
        return browser ? (isLoggedIn ? 'Go to console' : ctaCopy) : ctaCopy;
    }
</script>

<a
    class={classNames('web-button web-u-inline-width-100-percent-mobile', classes)}
    href={PUBLIC_APPWRITE_DASHBOARD}
    on:click={() =>
        trackEvent({
            plausible: { name: `${getTrackingEventName()} in header` },
            ...(isLoggedIn ? {} : { posthog: { name: 'get-started-btn_nav_click' } })
        })}
>
    <span class="hidden group-[&[data-logged-in]]/body:block">Go to Console</span>
    <span class="block group-[&[data-logged-in]]/body:hidden">{ctaCopy}</span>
</a>
