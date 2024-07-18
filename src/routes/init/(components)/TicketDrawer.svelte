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
            <slot />
        </div>
    </Drawer.Content>
    <Drawer.Overlay />
</Drawer.Root>
