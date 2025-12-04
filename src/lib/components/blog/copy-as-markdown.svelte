<script lang="ts">
    import { page } from '$app/stores';
    import { getPageMarkdown } from '$lib/remote/markdown.remote';
    import { copyToClipboard } from '$lib/utils/copy';
    import { cn } from '$lib/utils/cn';
    import { writable } from 'svelte/store';
    import { Button, Icon, SplitButton } from '$lib/components/ui';
    import { Tooltip } from '$lib/components';
    import { createDropdownMenu, melt } from '@melt-ui/svelte';

    interface CopyAsMarkdownProps {
        class?: string;
    }

    const { class: classNames }: CopyAsMarkdownProps = $props();

    const markdown = getPageMarkdown($page.route.id);
    const copied = writable(false);
    let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

    const copy = () => {
        if (timeout) clearTimeout(timeout);
        copyToClipboard(markdown.current ?? '');
        copied.set(true);
        timeout = setTimeout(() => copied.set(false), 2000);
    };

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

{#if !markdown.loading && markdown.current}
    <div class={cn('copy-ctl inline-flex items-center', classNames)}>
        <SplitButton>
            <Tooltip disabled={!$copied}>
                <Button
                    variant="secondary"
                    onclick={copy}
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
                        <button type="button" class="menu-btn text-sm" onclick={copy}>
                            <Icon name="copy" aria-hidden="true" class="text-sm" />
                            <span>Copy as Markdown</span>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="menu-btn text-sm" onclick={viewInNewTab}>
                            <Icon name="external-icon" aria-hidden="true" class="text-sm" />
                            <span>View as Markdown</span>
                        </button>
                    </li>
                </ul>
            </div>
        {/if}
    </div>
{/if}

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
