<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { classNames } from '$lib/utils/classnames';
    import { trackEvent } from '$lib/actions/analytics';
    import posthog from 'posthog-js';

    export let classes = '';
</script>

<a
    class={classNames('web-button web-u-inline-width-100-percent-mobile', classes)}
    href={PUBLIC_APPWRITE_DASHBOARD}
    on:click={() => {
        handleClick();
        trackEvent('Get started/go to console in header');
    }}
>
    <span class="hidden group-[&[data-logged-in]]/body:block">Go to Console</span>
    <span class="block group-[&[data-logged-in]]/body:hidden">Get started</span>
</a>
