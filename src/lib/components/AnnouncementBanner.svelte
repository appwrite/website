<script lang="ts">
    import { browser } from '$app/environment';
    import { BANNER_KEY } from '$lib/constants';

    const hideTopBanner = () => {
        document.body.dataset.bannerHidden = '';
        localStorage.setItem(BANNER_KEY, 'true');
    };
</script>

<div class="web-top-banner">
    <div class="web-top-banner-content text-primary">
        <slot />
        {#if browser}
            <button
                class="web-top-banner-button"
                aria-label="close discord message"
                on:click={hideTopBanner}
            >
                <span class="web-icon-close" aria-hidden="true"></span>
            </button>
        {/if}
    </div>
</div>
