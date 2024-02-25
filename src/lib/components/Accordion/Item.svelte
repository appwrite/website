<script lang="ts">
    export let open: boolean = false;
    export let title: string = '';
</script>

<li class="collapsible-item">
    <details class="collapsible-wrapper" {open}>
        <summary class="collapsible-button">
            <span class="text">{title}</span>
            <div class="icon aw-u-color-text-primary">
                <span class="icon-cheveron-down" aria-hidden="true" />
            </div>
        </summary>
        <slot/>
    </details>
</li>

<style>
    .collapsible-item {
        border-block-end: 0.0625rem solid hsl(var(--aw-color-offset));
    }

    .collapsible-button {
        padding-block: 1rem;
    }
</style>
