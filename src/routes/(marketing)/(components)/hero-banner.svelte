<script lang="ts">
    import { Icon } from '$lib/components/ui';
    import type { IconType } from '$lib/components/ui/icon/types';

    type Props = {
        title: string;
        href: string;
        icon?: Extract<IconType, 'mongo' | 'sparkle'>;
        class?: string;
    };

    const { title, href, icon = 'sparkle' }: Props = $props();
</script>

<a {href} class="web-hero-banner-button relative mb-4 flex items-center!">
    {#if icon === 'mongo'}
        <span class="mongo-icon-badge shrink-0" aria-hidden="true">
            <Icon name="mongo" style="width: 0.75rem; height: 1.125rem; color: #00ED64;" />
        </span>
    {:else}
        <Icon name="sparkle" class="shrink-0" aria-hidden="true" />
    {/if}
    <div class="web-hero-banner-button-sep"></div>
    <span class="text-caption web-u-trim-1">{title}</span>
    <Icon name="arrow-right" class="shrink-0" aria-hidden="true" />
</a>

<style>
    .mongo-icon-badge {
        width: 1.375rem;
        height: 1.375rem;
        padding: 0.0625rem;
        border-radius: 9999px;
        background-color: #001e2b;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
</style>
