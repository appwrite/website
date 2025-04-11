<script lang="ts">
    import { trackEvent } from '$lib/actions/analytics';
    import { SOCIAL_STATS } from '$lib/constants';
    import { Icon, InlineTag } from '$lib/components/ui';
</script>

<a
    href={SOCIAL_STATS.GITHUB.LINK}
    target="_blank"
    rel="noopener noreferrer"
    class="web-button is-text web-u-inline-width-100-percent-mobile"
    on:click={() =>
        trackEvent({
            plausible: { name: 'Star on GitHub in header' },
            posthog: { name: 'github-stars_nav_click' }
        })}
>
    <Icon name="star" aria-hidden="true" />
    <span class="text">Star on GitHub</span>
    <InlineTag>{SOCIAL_STATS.GITHUB.STAT}</InlineTag>
</a>
