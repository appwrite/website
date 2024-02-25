<div class="collapsible-content">
    <slot />
</div>

<style>
    .collapsible-content {
        margin-block-start: 0;
        padding-block-end: 1rem;

        /* article :last-child {
            margin-block-end: 0;
        }

        ul {
            gap: 1rem;

            li:not(:first-child) {
                border-block-start: solid 0.0625rem hsl(var(--aw-color-offset));
            }
        } */
    }
</style>
