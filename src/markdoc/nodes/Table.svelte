<script lang="ts" context="module">
    export const TABLE_CTX_KEY = Symbol('table');
    export const isInTable = () => getContext<boolean>(TABLE_CTX_KEY) ?? false;
</script>

<script lang="ts">
    import { getPolicyCtx, isInPolicy } from '$markdoc/layouts/Policy.svelte';

    import { getContext, setContext } from 'svelte';

    setContext(TABLE_CTX_KEY, true);

    const inPolicy = isInPolicy();
    const transparentCells = inPolicy ? getPolicyCtx().transparentTableCells : false;
</script>

<div class="web-table-wrapper my-8!" class:in-policy={inPolicy} class:transparentCells>
    <div class="web-table-scroll">
        <table class="web-table">
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
            border-right: 1px solid hsl(var(--web-color-smooth));
            font-family: Inter;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 157.143% */
            letter-spacing: -0.063px;
            text-transform: none;
        }

        :global(td .text-eyebrow uppercase) {
            all: unset;
        }

        :global(:is(td:first-child, thead td)) {
            background-color: hsl(var(--web-color-greyscale-850));
            color: hsl(var(--web-color-primary));
            font-weight: 500;
        }

        :global(li::marker) {
            color: inherit;
        }

        :global(ul) {
            gap: 0rem;
        }
    }

    .transparentCells {
        :global(td) {
            background-color: transparent !important    ;
        }
    }
</style>
