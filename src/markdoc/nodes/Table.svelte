<script lang="ts" context="module">
    export const TABLE_CTX_KEY = 'in-table';
    export const getTableCtx = () => getContext<boolean>(TABLE_CTX_KEY);
    export const isInTable = () => !!getTableCtx();
</script>

<script lang="ts">
    import { isInsidePolicy } from '$markdoc/layouts/Policy.svelte';

    import { getContext, setContext } from 'svelte';

    setContext(TABLE_CTX_KEY, true);

    const inPolicy = isInsidePolicy();
</script>

<div class="aw-table-wrapper" class:in-policy={inPolicy}>
    <div class="aw-table-scroll">
        <table class="aw-table">
            <slot />
        </table>
    </div>
</div>

<style lang="scss">
    .in-policy {
        font-size: 0.875rem !important;
        margin-block-end: 2.25rem;

        :global(tr) {
            background-color: transparent;
        }

        :global(td) {
            background-color: transparent;
            border-right: 1px solid hsl(var(--aw-color-smooth));
        }

        :global(td:first-child) {
            background-color: hsl(var(--aw-color-greyscale-850));
            color: hsl(var(--aw-color-primary));
            font-weight: 500;
        }

        :global(li::marker) {
            color: inherit;
        }
    }
</style>
