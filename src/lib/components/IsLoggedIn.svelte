<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { classNames } from '$lib/utils/classnames';
    import { trackEvent } from '$lib/actions/analytics';
    import { browser } from '$app/environment';

    export let classes = '';

    const isLoggedIn = browser ? 'loggedIn' in document.body.dataset : false;

    function getTrackingEventName() {
        return browser
            ? 'loggedIn' in document.body.dataset
                ? 'Go to console'
                : 'Get started'
            : 'Get started';
    }
</script>

<a
    class={classNames('web-button web-u-inline-width-100-percent-mobile', classes)}
    href={PUBLIC_APPWRITE_DASHBOARD}
    on:click={() => {
        isLoggedIn
            ? trackEvent({
                  plausible: { name: `${getTrackingEventName()} in header` }
              })
            : trackEvent({
                  plausible: { name: `${getTrackingEventName()} in header` },
                  posthog: {
                      name: 'get-started-btn_nav_click'
                  }
              });
    }}
>
    <span class="hidden group-[&[data-logged-in]]/body:block">Go to Console</span>
    <span class="block group-[&[data-logged-in]]/body:hidden">Get started</span>
</a>
