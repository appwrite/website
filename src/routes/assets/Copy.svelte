<script lang="ts">
    import { copy } from '$lib/utils/copy';

    export let toCopy: string;
    export let variant: 'light' | 'dark' | 'pink' = 'light';

    let copied = false;

    async function copyToClipboard() {
        await copy(toCopy);
        copied = true;
        setTimeout(() => (copied = false), 2000);
    }
</script>

<button class="copy-button cursor-pointer {variant}" on:click={copyToClipboard}>
    <span class="web-icon-{copied ? 'check' : 'copy'}" aria-label={copied ? 'Copied' : 'Copy'}></span>
    <span>Copy</span>
</button>

<style lang="scss">
    .copy-button {
        gap: 8px;
        display: flex;
        padding: 6px 12px;
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        transition: opacity ease-in-out 0.3s;

        &.light {
            background-color: rgba(255, 255, 255, 0.64);
        }

        &.dark {
            background-color: rgba(255, 255, 255, 0.04);
            border: 1px solid var(--smooth, rgba(255, 255, 255, 0.06));
        }

        &.pink {
            background-color: rgba(255, 255, 255, 0.125);
            border: 1px solid var(--smooth, rgba(255, 255, 255, 0.06));
        }

        &:hover {
            opacity: 0.8;
        }
    }
</style>
