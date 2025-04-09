<script lang="ts">
    export let open: boolean = false;
    export let title: string;
</script>

<li class="collapsible-item">
    <details class="collapsible-wrapper group" {open}>
        <summary
            class="collapsible-button flex cursor-pointer list-none appearance-none items-center justify-between marker:hidden [&::-webkit-details-marker]:hidden"
        >
            <span class="text-primary text-sub-body font-medium">{title}</span>
            <div class="icon text-primary transition-transform group-[&[open]]:rotate-180">
                <span class="icon-cheveron-down" aria-hidden="true"></span>
            </div>
        </summary>
        <div class="collapsible-content text-secondary text-sub-body flex flex-col">
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
