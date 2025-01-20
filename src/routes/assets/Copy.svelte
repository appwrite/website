<script lang="ts">
    import { copy } from '$lib/utils/copy';

    export let toCopy: string;
    let copied = false;

    async function copyToClipboard() {
        await copy(toCopy);
        copied = true;
        setTimeout(() => (copied = false), 2000);
    }
</script>

<button class="web-button is-secondary cursor-pointer" on:click={copyToClipboard}>
    <span class="web-icon-{copied ? 'check' : 'copy'}" aria-label={copied ? 'Copied' : 'Copy'} />
    <span>Copy</span>
</button>
