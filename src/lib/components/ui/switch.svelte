<script lang="ts">
    import { cn } from '$lib/utils/classnames';
    import { createSwitch, melt } from '@melt-ui/svelte';

    export let checked = false;

    const {
        elements: { root },
        states: { checked: meltChecked }
    } = createSwitch({
        onCheckedChange({ next }) {
            checked = next;
            return next;
        }
    });

    $: meltChecked.set(checked);
</script>

<div class="flex items-center">
    <button
        use:melt={$root}
        class={cn(
            'bg-smooth group relative h-6 w-9 cursor-default rounded-full transition duration-150',
            'data-[state="checked"]:bg-accent'
        )}
    >
        <span
            class={cn(
                'absolute top-1/2 block size-5 translate-x-0.5 -translate-y-1/2 rounded-full bg-white transition duration-150',
                'group-[data-state="checked"]:translate-x-3.5'
            )}
        />
    </button>
</div>
