<script lang="ts">
    import TableOfContents from '$lib/components/ui/table-of-contents.svelte';
    import { spring } from 'svelte/motion';
    let open = false;

    let springWidth = spring(
        {
            target: { width: 100 },
            duration: 1000
        },
        { stiffness: 0.066, damping: 0.25 }
    );

    const toggleWidth = () => {
        open = !open;
        springWidth.set({ target: { width: open ? 200 : 100 }, duration: 1000 });
    };
</script>

<svelte:head>
    <title>Playground</title>
</svelte:head>

<h1>Playground</h1>

<TableOfContents />
