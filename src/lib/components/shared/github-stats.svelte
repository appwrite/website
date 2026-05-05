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
    class={[className, 'is-github-stat-link'].filter(Boolean).join(' ')}
    variant="secondary"
    aria-label={`Appwrite on GitHub, ${SOCIAL_STATS.GITHUB.STAT} stars`}
>
    <Icon name="github" aria-hidden="true" />
    <InlineTag>{SOCIAL_STATS.GITHUB.STAT}</InlineTag>
</Button>
