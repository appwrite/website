<script lang="ts">
    import { page } from '$app/state';
    import { getPageMarkdown } from '$lib/remote/markdown.remote';
    import { copyToClipboard } from '$lib/utils/copy';
    import { Button, Icon, SplitButton } from '$lib/components/ui';
    import { Tooltip } from '$lib/components';
    import { createDropdownMenu, melt } from '@melt-ui/svelte';

    interface Props {
        class?: string;
    }

    const { class: classNames }: Props = $props();

    let copied = $state(false);
    let copying = $state(false);
    let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

    async function copy() {
        copying = true;
        if (timeout) clearTimeout(timeout);
        const routeId = page.url.pathname || page.route.id;
        const markdown = await getPageMarkdown(routeId);
        copyToClipboard(markdown ?? '');
        timeout = setTimeout(() => (copied = false), 2000);
        copied = true;
        copying = false;
    }

    function resetCopied() {
        if (timeout) clearTimeout(timeout);
        copied = false;
    }

    function copyAndClose() {
        copy();
        open.set(false);
    }

    const {
        elements: { trigger, menu },
        states: { open }
    } = createDropdownMenu({
        forceVisible: true,
        positioning: { placement: 'bottom-end' }
    });

    const viewInNewTab = () => {
        const { pathname } = window.location;
        const url = pathname.endsWith('.md') ? pathname : `${pathname}.md`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };
</script>

<div class={['copy-ctl inline-flex items-center', classNames]}>
    <SplitButton>
        <Tooltip disabled={!copied}>
            <Button
                variant="secondary"
                disabled={copying}
                onclick={copy}
                onmouseleave={resetCopied}
                aria-label="Copy page as Markdown"
                splitPosition="first"
                class="text-sm"
            >
                <Icon name="copy" aria-hidden="true" class="text-sm" />
                <span>Copy page</span>
            </Button>
            {#snippet tooltip()}
                Copied
            {/snippet}
        </Tooltip>

        <button
            class="web-button is-secondary is-split is-split-last text-sm"
            use:melt={$trigger}
            aria-label="Open options"
        >
            {#if $open}
                <span class="web-icon-chevron-up" aria-hidden="true"></span>
            {:else}
                <span class="web-icon-chevron-down" aria-hidden="true"></span>
            {/if}
        </button>
    </SplitButton>

    {#if $open}
        <div class="menu-wrapper web-select-menu is-normal menu z-1" use:melt={$menu}>
            <ul class="text-sub-body">
                <li>
                    <button type="button" class="menu-btn text-sm" onclick={copyAndClose}>
                        <Icon name="copy" aria-hidden="true" class="text-sm" />
                        <span>Copy as Markdown</span>
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        class="menu-btn text-sm"
                        onclick={() => {
                            viewInNewTab();
                            open.set(false);
                        }}
                    >
                        <Icon name="external-icon" aria-hidden="true" class="text-sm" />
                        <span>View as Markdown</span>
                    </button>
                </li>
            </ul>
        </div>
    {/if}
</div>

<style>
    .copy-ctl {
        align-items: center;
    }
    .menu-wrapper {
        padding: 4px;
        z-index: 100;
    }
    .menu-btn {
        height: 32px;
        min-height: 32px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-radius: 0.5rem;
        padding: 6px 8px;
        width: 100%;
        text-align: left;
    }
    .menu-btn:hover {
        cursor: pointer;
        background-color: hsl(var(--web-color-offset));
    }
</style>
