<script lang="ts">
    import { fade } from 'svelte/transition';
    import { Drawer, type DrawerDirection } from 'vaul-svelte';

    export let triggerLabel: string = 'Customize ticket';
    export let direction: DrawerDirection = 'left';
</script>

<Drawer.Root {direction}>
    <Drawer.Trigger class="web-button is-full-width u-margin-block-start-32">
        <span class="text">{triggerLabel}</span>
    </Drawer.Trigger>

    <Drawer.Content class="drawer">
        <div class="form-wrapper" transition:fade>
            <slot name="form" />
        </div>
        <Drawer.Close>
            <slot name="submitButton" />
        </Drawer.Close>
    </Drawer.Content>
    <Drawer.Overlay />
</Drawer.Root>

<style lang="scss">
    :global([data-dialog-close]) {
        cursor: pointer;
    }
    :global([data-vaul-drawer]) {
        display: flex;
        flex-direction: column;
        background-color: hsl(var(--web-color-background));
        position: fixed;
        top: 103px;
        bottom: 0;
        overflow-y: auto;
        z-index: 10;
        max-width: 40vw;
        left: 0;
        padding-inline: clamp(1.25rem, 4vw, 120rem);
        border-right: 1px solid hsl(var(--web-color-border));
        // padding-right: 40px;
    }
</style>
