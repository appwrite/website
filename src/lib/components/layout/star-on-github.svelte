<script lang="ts">
    import { trackEvent } from '$lib/actions/analytics';
    import { GITHUB_REPO_LINK, GITHUB_STARS } from '$lib/constants';
</script>

<a
    href={GITHUB_REPO_LINK}
    target="_blank"
    rel="noopener noreferrer"
    class="web-button is-text web-u-inline-width-100-percent-mobile"
    on:click={() =>
        trackEvent({
            plausible: { name: 'Star on GitHub in header' },
            posthog: { name: 'github-stars_nav_click' }
        })}
>
    <span class="web-icon-star" aria-hidden="true" />
    <span class="text">Star on GitHub</span>
    <span class="web-inline-tag text-sub-body">{GITHUB_STARS}</span>
</a>
