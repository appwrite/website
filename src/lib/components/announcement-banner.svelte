<script lang="ts">
    import { browser } from '$app/environment';
    import { BANNER_KEY } from '$lib/constants';
    import Icon from './ui/icon';

    const hideTopBanner = () => {
        document.body.dataset.bannerHidden = '';
        localStorage.setItem(BANNER_KEY, 'true');
    };
</script>

<div
    class="flex justify-center bg-[linear-gradient(94deg,_transparent_0%,_rgba(253,_54,_110,_0.50)_50.82%,transparent_100%)] px-3 py-1.25 data-[banner-hidde]:hidden"
>
    <div class="text-primary leading-5">
        <slot />
        {#if browser}
            <button
                class="absolute right-3"
                aria-label="close discord message"
                on:click={hideTopBanner}
            >
                <Icon icon="close" aria-hidden="true" />
            </button>
        {/if}
    </div>
</div>
