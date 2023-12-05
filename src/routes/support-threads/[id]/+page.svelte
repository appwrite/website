<script lang="ts">
    import { goto } from '$app/navigation';
    import { Main } from '$lib/layouts';
    import { createDebounce } from '$lib/utils/debounce';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';

    import FooterNav from '../../lib/components/FooterNav.svelte';
    import MainFooter from '../../lib/components/MainFooter.svelte';
    import Thread from './Thread.svelte';

    const title = 'Support Threads' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    export let data;

    const { debounce, reset } = createDebounce();

    const search = (node: HTMLInputElement) => {
        const inputHandler = () => {
            const value = node.value.toLowerCase();

            debounce(() => {
                goto(`/support-threads/?q=${value}`, { replaceState: true, keepFocus: true });
            });
        };

        const keydownHandler = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                const value = node.value.toLowerCase();

                reset();
                goto(`/support-threads/?q=${value}`, { replaceState: true, keepFocus: true });
            }
        };

        node.addEventListener('input', inputHandler);
        node.addEventListener('keydown', keydownHandler);

        return {
            destroy() {
                node.removeEventListener('input', inputHandler);
                node.removeEventListener('keydown', keydownHandler);
            }
        };
    };
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Desscription -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <!-- Image -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Main>
    <div class="aw-container">
        <h1 class="aw-title aw-u-color-text-primary">Support Threads</h1>

        <div class="aw-input-text-search-wrapper u-width-full-line">
            <span
                class="aw-icon-search u-z-index-5"
                aria-hidden="true"
                style="inset-block-start:0.9rem"
            />
            <input
                class="aw-input-button -u-padding-block-0 u-position-relative u-z-index-1"
                type="text"
                id="search"
                placeholder="Search for threads"
                data-hit="-1"
                use:search
            />
        </div>

        <h2 aria-live="polite">Found {data.threads.length} results.</h2>

        <div class="threads">
            {#each data.threads as thread}
                <Thread {thread} />
            {/each}
        </div>

        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    h1 {
        margin-block-start: 2rem;
    }

    h2 {
        margin-block-start: 1rem;
    }

    #search {
        margin-block-start: 2rem;
    }

    .threads {
        margin-block-start: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
