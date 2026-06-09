<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import type { DiscordMessage } from '../types';
    import CodeRenderer from './CodeRenderer.svelte';
    import LinkRenderer from './LinkRenderer.svelte';
    import HtmlRenderer from './HtmlRenderer.svelte';

    export let message: DiscordMessage;

    const formatTimestamp = (date: string): string => {
        const dt = new Date(date);

        // format like: 12 Jan, 2023, 13:10
        const day = dt.getDate();
        const month = dt.toLocaleString('default', { month: 'short' });
        const year = dt.getFullYear();
        const hours = dt.getHours();
        const minutes = dt.getMinutes();
        const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const paddedHours = hours < 10 ? `0${hours}` : hours;

        return `${day} ${month}, ${year}, ${paddedHours}:${paddedMinutes}`;
    };
</script>

<div class="web-card is-normal has-border-gradient message">
    <div class="header">
        <div class="author">
            <div class="author-img">
                <img src={message.author_avatar} alt="" class="h-full w-full rounded-[inherit]" />
            </div>
            <span class="text-sub-body text-primary font-medium">{message.author}</span>
        </div>
        <span class="timestamp text-caption">
            {formatTimestamp(message.timestamp)}
        </span>
    </div>
    <div class="text-sub-body mt-4 font-medium message-content">
        <SvelteMarkdown
            source={message.message}
            renderers={{
                code: CodeRenderer,
                link: LinkRenderer,
                html: HtmlRenderer
            }}
        />
    </div>
    {#if message.attachments?.length}
        <div class="attachments">
            {#each message.attachments as src, i}
                <a href="https://discord.com/channels/564160730845151244/{message.threadId}/{message.$id}" target="_blank" rel="noopener noreferrer">
                    <img
                        {src}
                        alt="attachment"
                        onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';"
                    />
                    <span class="attachment-fallback" style="display:none;">
                        <span class="web-icon-image" aria-hidden="true"></span>
                        Attachment
                    </span>
                </a>
            {/each}
        </div>
    {/if}
    <slot />
</div>

<style lang="scss">
    .web-card {
        overflow: hidden;
    }

    .message-content {
        overflow-wrap: anywhere;
        word-break: break-word;
        min-width: 0;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .author {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .attachments {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-block-start: 0.75rem;

        img {
            max-width: 100%;
            max-height: 20rem;
            border-radius: 0.5rem;
            object-fit: contain;
        }
    }

    .attachment-fallback {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.875rem;
        opacity: 0.7;

        &:hover {
            opacity: 1;
        }
    }

    .attachment-link {
        margin-block-start: 0.75rem;
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.875rem;
        opacity: 0.7;

        &:hover {
            opacity: 1;
        }
    }

    .author-img {
        --p-size: 1.5rem; // 24px

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;

        width: var(--p-size);
        height: var(--p-size);

        img {
            border-radius: 100%;
            width: 100%;
            height: 100%;
        }
    }
</style>
