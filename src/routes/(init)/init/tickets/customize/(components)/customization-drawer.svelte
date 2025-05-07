<script lang="ts">
    import { Button, Icon } from '$lib/components/ui';
    import { type Snippet } from 'svelte';
    import { Drawer } from 'vaul-svelte';

    type CustomizationDrawerProps = {
        children: Snippet;
        open: boolean;
    };

    let { children, open }: CustomizationDrawerProps = $props();
</script>

<svelte:window onresize={() => (open = false)} />

<Drawer.Root {open}>
    <Drawer.Trigger
        >{#snippet children()}
            <Button class="active:scale-98" variant="secondary">
                <Icon name="customize" />
                Customize
            </Button>
        {/snippet}</Drawer.Trigger
    >

    <Drawer.Portal>
        <Drawer.Content
            class="bg-greyscale-900 fixed inset-x-0 bottom-0 z-20 flex max-h-[65%] flex-col overflow-hidden rounded-t-2xl p-6"
        >
            <div class="mx-auto flex w-full max-w-md flex-col rounded-t-[10px] p-4">
                {@render children()}
            </div>
        </Drawer.Content>
        <Drawer.Overlay class="bg-greyscale-900/50 fixed inset-0 z-10 backdrop-blur-sm" />
    </Drawer.Portal>
</Drawer.Root>
