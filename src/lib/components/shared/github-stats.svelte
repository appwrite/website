<script lang="ts">
    import { SOCIAL_STATS } from '$lib/constants';
    import { Icon, InlineTag, Button } from '$lib/components/ui';

    type Props = {
        class?: string;
    };

    const { class: className }: Props = $props();
</script>

<Button
    href={SOCIAL_STATS.GITHUB.LINK}
    target="_blank"
    rel="noopener noreferrer"
    class={className}
    variant="secondary"
>
    <Icon name="star" aria-hidden="true" />
    <span class="text">Star on GitHub</span>
    <InlineTag>{SOCIAL_STATS.GITHUB.STAT}</InlineTag>
</Button>
