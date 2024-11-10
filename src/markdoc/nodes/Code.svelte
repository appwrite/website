<script lang="ts">
    export let content: string;
</script>

<span class="web-inline-code web-code">{content}</span>

<style>
    .web-inline-code {
        font-size: 0.75rem;
        line-height: 1.25rem;

        @media (min-width: 1024px) {
            margin-left: 0.5rem;
        }
    }
</style>
