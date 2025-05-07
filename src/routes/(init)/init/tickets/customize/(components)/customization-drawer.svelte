<script lang="ts">
    import { Button, Icon } from '$lib/components/ui';
    import { type Snippet } from 'svelte';
    import { Drawer } from 'vaul-svelte';

    type CustomizationDrawerProps = {
        children: Snippet;
        open: boolean;
        onOpenChange: (open: boolean) => void;
    };

    let { children, open, onOpenChange }: CustomizationDrawerProps = $props();
</script>

<svelte:window onresize={() => (open = false)} />

<Drawer.Root {open} {onOpenChange}>
    <Drawer.Trigger
        >{#snippet child()}
            <Button class="active:scale-98" variant="secondary">
                <Icon name="customize" />
                Customize
            </Button>
        {/snippet}</Drawer.Trigger
    >

    <Drawer.Portal>
        <Drawer.Content
            class="bg-greyscale-900 fixed inset-0 top-50 isolate z-20 flex max-h-svh flex-col rounded-t-2xl p-6"
        >
            <div
                class="mx-auto flex h-fit max-h-screen w-full max-w-md flex-col overflow-scroll rounded-t-[10px] p-4"
            >
                {@render children()}
            </div>
        </Drawer.Content>
        <Drawer.Overlay class="bg-greyscale-900/50 fixed inset-0 z-10 backdrop-blur-sm" />
    </Drawer.Portal>
</Drawer.Root>
