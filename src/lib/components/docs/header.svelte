<script lang="ts">
    import { GITHUB_REPO_LINK, GITHUB_STARS } from '$lib/constants';
    import { layoutState, type SidebarVariant } from '$lib/layouts/Docs.svelte';

    import { classNames } from '$lib/utils/classnames';
    import { isMac } from '$lib/utils/platform';
    import IsLoggedIn from '../IsLoggedIn.svelte';

    export let isReferences = false;
    export let variant: SidebarVariant = 'default';
</script>

<header
    class={classNames(
        'sticky top-0 z-999 mx-auto hidden w-full items-center justify-center gap-2 border-b border-white/10 px-12 backdrop-blur-[10px] [max-block-size:86.875rem] [min-block-size:4.5625rem] lg:flex',
        {
            'is-reference': isReferences,
            'is-docs': !isReferences
        }
    )}
    class:is-transparent={variant !== 'expanded'}
>
    <div class="mx-auto hidden w-full flex-wrap justify-center gap-4 py-4 md:flex">
        <div class="flex flex-1 items-center">
            <a href="/" aria-label="homepage">
                <img
                    class="web-u-only-dark mr-8"
                    src="/images/logos/appwrite.svg"
                    alt="appwrite"
                    height="24"
                    width="130"
                />
                <img
                    class="web-u-only-light mr-8"
                    src="/images/logos/appwrite-light.svg"
                    alt="appwrite"
                    height="24"
                    width="130"
                />
            </a>
            <nav class="self-center text-base select-none" aria-label="Top">
                <ul class="flex gap-8">
                    <li class="web-main-header-nav-item">
                        <a class="web-link" href="/docs">Docs</a>
                    </li>
                </ul>
            </nav>
            <div class="web-u-margin-inline-start-48 flex flex-1">
                <button
                    class="web-input-button web-u-flex-basis-400"
                    on:click={() => ($layoutState.showSearch = true)}
                >
                    <span class="web-icon-search" aria-hidden="true" />
                    <span class="text">Search in docs</span>

                    <div class="ml-auto flex gap-1">
                        {#if isMac()}
                            <span class="web-kbd" aria-label="command">⌘</span>
                        {:else}
                            <span class="web-kbd" aria-label="control">Ctrl</span>
                        {/if}
                        <span class="web-kbd">K</span>
                    </div>
                </button>
            </div>
        </div>

        <div class="flex gap-2">
            <a
                href={GITHUB_REPO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                class="web-button is-text"
            >
                <span class="web-icon-star" aria-hidden="true" />
                <span class="text">Star on GitHub</span>
                <span class="web-inline-tag text-sub-body">{GITHUB_STARS}</span>
            </a>
            <IsLoggedIn />
        </div>
    </div>
</header>
