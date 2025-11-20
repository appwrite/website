<script lang="ts">
    import { createCopy } from '$lib/utils/copy';
    import { getRoutePrompt, hasRoutePrompt } from '$lib/utils/routePrompts';
    import { fly } from 'svelte/transition';
    import { Button, Icon } from '$lib/components/ui';
    import { Tooltip } from '$lib/components';
    import { createDropdownMenu, melt } from '@melt-ui/svelte';
    import { onMount } from 'svelte';
    import { trackEvent } from '$lib/actions/analytics';
    import AiPromptIcon from '$lib/components/ui/aiPromptIcon.svelte';
    import { browser } from '$app/environment';

    // Only support co-located prompt.md
    const routeExists = hasRoutePrompt();
    const prompt = routeExists ? (getRoutePrompt() ?? '') : '';
    const exists = routeExists;
    const { copied, copy } = createCopy(prompt);

    onMount(() => {
        copied.set(false);
    });

    type Ide = 'copy' | 'cursor' | 'chatgpt' | 'claude';

    // Local dropdown configured to open to the left (bottom-end)
    const {
        elements: { trigger, menu },
        states: { open }
    } = createDropdownMenu({
        forceVisible: true,
        positioning: {
            placement: 'bottom-end'
        }
    });

    function openExternal(url: string) {
        if (!browser) return;
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    function openIde(value: Ide) {
        if (value === 'copy') {
            trackEvent('prompt_banner_copy_clicked');
            copy();
            return;
        }

        open.set(false);

        const text = encodeURIComponent(prompt);

        if (value === 'cursor') {
            trackEvent('prompt_banner_cursor_clicked');
            const url = `https://cursor.com/link/prompt?text=${text}`;
            openExternal(url);
            return;
        }

        if (value === 'chatgpt') {
            trackEvent('prompt_banner_chatgpt_clicked');
            const url = `https://chatgpt.com/?prompt=${text}`;
            openExternal(url);
            return;
        }

        if (value === 'claude') {
            trackEvent('prompt_banner_claude_clicked');
            const url = `https://claude.ai/new?q=${text}`;
            openExternal(url);
            return;
        }
    }
    function handleMainClick() {
        copy();
    }
</script>

{#if exists}
    <div class="ai-banner">
        <div class="ai-banner_content">
            <div class="ai-banner_title">
                <AiPromptIcon class="text-primary" aria-hidden="true" />
                <span class="text-primary text-sub-body"
                    >Use this pre-built prompt to get started faster</span
                >
            </div>
            <div class="ai-banner_actions">
                <div class="flex">
                    <Tooltip disabled={!$copied}>
                        <Button
                            variant="secondary"
                            onclick={handleMainClick}
                            aria-label={$copied ? 'Copied' : 'Copy prompt'}
                            class="no-right-radius text-sm"
                        >
                            <Icon name="copy" aria-hidden="true" />
                            <span>Copy prompt</span>
                        </Button>
                        {#snippet tooltip()}
                            Copied
                        {/snippet}
                    </Tooltip>

                    <button
                        class="no-left-radius web-button is-secondary text-sm"
                        use:melt={$trigger}
                        aria-label="Open options"
                    >
                        {#if $open}
                            <span class="web-icon-chevron-up" aria-hidden="true"></span>
                        {:else}
                            <span class="web-icon-chevron-down" aria-hidden="true"></span>
                        {/if}
                    </button>

                    {#if $open}
                        <div
                            class="menu-wrapper web-select-menu is-normal menu z-1"
                            use:melt={$menu}
                            transition:fly={{ y: 8, duration: 250 }}
                        >
                            <ul class="text-sub-body">
                                <li>
                                    <button
                                        type="button"
                                        class="menu-btn"
                                        onclick={() => {
                                            openIde('cursor');
                                        }}
                                    >
                                        <img
                                            src="/images/docs/mcp/logos/dark/cursor-ai.svg"
                                            alt=""
                                            class="web-u-only-dark"
                                            width="16"
                                            height="16"
                                        />
                                        <img
                                            src="/images/docs/mcp/logos/cursor-ai.svg"
                                            alt=""
                                            class="web-u-only-light"
                                            width="16"
                                            height="16"
                                        />
                                        <span>Open in Cursor</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        class="menu-btn"
                                        onclick={() => {
                                            openIde('chatgpt');
                                        }}
                                    >
                                        <img
                                            src="/images/docs/mcp/logos/dark/openai.svg"
                                            alt=""
                                            class="web-u-only-dark"
                                            width="16"
                                            height="16"
                                        />
                                        <img
                                            src="/images/docs/mcp/logos/openai.svg"
                                            alt=""
                                            class="web-u-only-light"
                                            width="16"
                                            height="16"
                                        />
                                        <span>Ask ChatGPT</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        class="menu-btn"
                                        onclick={() => {
                                            openIde('claude');
                                        }}
                                    >
                                        <img
                                            src="/images/docs/mcp/logos/dark/claude.svg"
                                            alt=""
                                            class="web-u-only-dark"
                                            width="16"
                                            height="16"
                                        />
                                        <img
                                            src="/images/docs/mcp/logos/claude.svg"
                                            alt=""
                                            class="web-u-only-light"
                                            width="16"
                                            height="16"
                                        />
                                        <span>Ask Claude</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
    .ai-banner {
        padding: 12px 16px;
        border: 1px solid hsl(var(--web-color-offset));
        border-radius: 12px;
        background: hsl(var(--web-color-card));
        margin-block: 12px 16px;

        &_content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            flex-wrap: wrap;
        }

        &_title {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        &_actions {
            display: flex;
            align-items: center;
            gap: 8px;
        }
    }
    /* dropdown styles */
    .menu-wrapper {
        --p-card-border-radius: 0.5rem;
        padding: 4px;
        backdrop-filter: blur(2px);
        --webkit-backdrop-filter: blur(2px);
        z-index: 100;
    }

    ul {
        min-width: 14.375rem;
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .menu-btn {
        height: 32px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-radius: 0.5rem;
        padding: 5px 10px;
        width: 100%;
        text-align: left;
    }

    .menu-btn:hover {
        cursor: pointer;
        background-color: hsl(var(--web-color-offset));
    }

    /* Force icon colors inside secondary button */
    .ai-banner [class*='icon'] {
        color: hsl(var(--web-color-white));
    }

    .ai-banner :global(.web-button.no-left-radius [class*='icon']) {
        color: hsl(var(--web-color-white));
    }

    /* Chevron color via theme-resolved variable (no theme selector) */
    .ai-banner :global(.web-button.no-left-radius .web-icon-chevron-down),
    .ai-banner :global(.web-button.no-left-radius .web-icon-chevron-up) {
        color: hsl(var(--web-color-accent));
    }

    /* Style child component output: adjust both element and its gradient pseudo-elements */
    .ai-banner :global(.web-button.no-left-radius),
    .ai-banner :global(.web-button.no-left-radius)::before,
    .ai-banner :global(.web-button.no-left-radius)::after {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 0;
    }

    .ai-banner :global(.web-button.no-right-radius),
    .ai-banner :global(.web-button.no-right-radius)::before,
    .ai-banner :global(.web-button.no-right-radius)::after {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .ai-banner :global(.web-button),
    .ai-banner :global(.web-button)::before,
    .ai-banner :global(.web-button)::after {
        padding-left: 7px;
        padding-right: 8px;
        min-block-size: 36px;
        height: 36px;
    }

    // Custom sizes for left button
    .ai-banner :global(.web-button.no-right-radius) {
        padding-right: 10px;
        gap: 4px;
    }
</style>
