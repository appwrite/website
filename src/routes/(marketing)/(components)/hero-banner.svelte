<script lang="ts">
    import { Icon } from '$lib/components/ui';

    type Props = {
        title: string;
        href: string;
        class?: string;
    };

    const { title, href }: Props = $props();
</script>

<a {href} class="web-hero-banner-button relative mb-4 flex items-center!">
    <Icon name="sparkle" class="shrink-0" aria-hidden="true" />
    <span class="text-caption shrink-0 font-medium">New</span>
    <div class="web-hero-banner-button-sep"></div>
    <span class="text-caption web-u-trim-1">{title}</span>
    <Icon name="arrow-right" class="shrink-0" aria-hidden="true" />
</a>
