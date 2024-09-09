<script lang="ts">
    import { browser } from '$app/environment';
    import { BANNER_KEY } from '$lib/constants';
    import Close from '$lib/icons/Close.svelte';

    const hideTopBanner = () => {
        document.body.dataset.bannerHidden = '';
        localStorage.setItem(BANNER_KEY, 'true');
    };
</script>

<div
    class="relative flex justify-center bg-[linear-gradient(94deg,_rgba(253,_54,_110,_0)_0%,_rgba(253,_54,_110,_0.5)_50.82%,_rgba(253,_54,_110,_0)_100%)] py-[0.3125rem] px-3"
>
    <div class="text-primary">
        <slot />
        {#if browser}
            <button
                class="absolute top-1/2 -right-10 -translate-y-1/2"
                aria-label="close discord message"
                on:click={hideTopBanner}
            >
                <Close aria-hidden="true" />
            </button>
        {/if}
    </div>
</div>
