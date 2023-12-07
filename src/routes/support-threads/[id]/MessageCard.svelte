<script lang="ts">
    import type { DiscordMessage } from '../types';

    export let message: DiscordMessage;

    const formatTimestamp = (date: string): string => {
        const dt = new Date(date);

        // format like: 12 Jan, 2023, 13:10
        const day = dt.getDate();
        const month = dt.toLocaleString('default', { month: 'short' });
        const year = dt.getFullYear();
        const hours = dt.getHours();
        const minutes = dt.getMinutes();

        return `${day} ${month}, ${year}, ${hours}:${minutes}`;
    };
</script>

<div class="aw-card is-normal has-border-gradient message">
    <div class="header">
        <div class="author">
            <div class="author-img">
                <img src={message.author_avatar} alt="" class="h-full w-full rounded-[inherit]" />
            </div>
            <span class="aw-sub-body-500 aw-u-color-text-primary">{message.author}</span>
        </div>
        <span class="timestamp aw-caption-400">
            {formatTimestamp(message.timestamp)}
        </span>
    </div>
    <p class="aw-sub-body-500">{message.message}</p>
</div>

<style lang="scss">
    .aw-sub-body-500 {
        font-size: 1rem !important;
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

    p {
        margin-block-start: 1rem;
    }
</style>
