<script lang="ts">
    export let open: boolean = false;
    export let title: string;
</script>

<li class="collapsible-item">
    <details class="collapsible-wrapper" {open}>
        <summary class="collapsible-button">
            <span class="text web-sub-body-500 web-u-color-text-primary">{title}</span>
            <div class="icon web-u-color-text-primary">
                <span class="icon-cheveron-down" aria-hidden="true" />
            </div>
        </summary>
        <div class="collapsible-content u-flex-vertical">
            <slot />
        </div>
    </details>
</li>

<style>
    .collapsible-item {
        border-block-end: 0.0625rem solid hsl(var(--web-color-offset));
    }

    .collapsible-button {
        padding-block-start: 1rem;
        padding-block-end: 1rem;
    }

    .collapsible-content {
        margin-block-start: 0;
        padding-block-end: 0;
        gap: 4px;
    }
</style>
