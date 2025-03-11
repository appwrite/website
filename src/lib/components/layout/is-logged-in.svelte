<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { classNames } from '$lib/utils/classnames';
    import { trackEvent } from '$lib/actions/analytics';
    import { browser } from '$app/environment';
    import { page } from '$app/stores';

    const isLoggedIn = browser && 'loggedIn' in document.body.dataset;
    const ctaCopy = !isLoggedIn ? $page.data.ctaCopy : 'Go to Console';

    let className = '';

    export { className as class };

    function getTrackingEventName() {
        return browser ? (isLoggedIn ? 'Go to console' : ctaCopy) : ctaCopy;
    }
</script>

<a
    class={classNames('web-button web-u-inline-width-100-percent-mobile', className)}
    href={PUBLIC_APPWRITE_DASHBOARD}
    on:click={() =>
        trackEvent({
            plausible: { name: `${getTrackingEventName()} in header` },
            ...(isLoggedIn ? {} : { posthog: { name: 'get-started-btn_nav_click' } })
        })}
>
    <span class="block">{ctaCopy}</span>
</a>
