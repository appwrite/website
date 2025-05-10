<script lang="ts">
    import { browser } from '$app/environment';
    import { Button } from '$lib/components/ui';
    import { classNames } from '$lib/utils/classnames';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';

    interface Props {
        class?: string;
    }

    const { class: className }: Props = $props();
    const isLoggedIn = browser && 'loggedIn' in document.body.dataset;
</script>

<Button
    href={getAppwriteDashboardUrl()}
    event={{ name: 'get-started-btn-nav-click' }}
    class={classNames('web-u-inline-width-100-percent-mobile', className)}
>
    <span class="hidden group-[&[data-logged-in]]/body:block" aria-hidden={!isLoggedIn}
        >Go to Console</span
    >
    <span class="block group-[&[data-logged-in]]/body:hidden" aria-hidden={isLoggedIn}
        >Start building</span
    >
</Button>
