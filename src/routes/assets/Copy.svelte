<script lang="ts">
    import { copy } from '$lib/utils/copy';

    export let toCopy: string;
    let copied = false;

    const copyToClipboard = () => {
        copy(toCopy);
        copied = true;
        setTimeout(() => (copied = false), 2000);
    };
</script>

<button class="web-button is-secondary" on:click={copyToClipboard}>
    <span class="web-icon-{copied ? 'check' : 'copy'}" aria-label={copied ? 'Copied' : 'Copy'} />
    <span>Copy</span>
</button>
