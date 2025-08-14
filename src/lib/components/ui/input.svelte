<!-- @migration-task Error while migrating Svelte code: migrating this component would require adding a `$props` rune but there's already a variable named props.
     Rename the variable and try again or migrate by hand. -->
<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import type { Snippet } from 'svelte';
    import type { HTMLInputAttributes } from 'svelte/elements';

    interface Props extends HTMLInputAttributes {
        label?: string;
        icon?: Snippet;
    }

    let {
        label = '',
        type = 'text',
        value = $bindable(''),
        icon,
        class: classes,
        name,
        ...rest
    }: Props = $props();
</script>

{#if icon}
    <label
        class={cn(
            'focus:border-greyscale-100 bg-greyscale-800 border-greyscale-700 flex items-center gap-1 rounded-lg border px-3 py-2 text-sm font-light transition-colors focus-within:border-white active:shadow-sm active:shadow-black/30',
            classes
        )}
    >
        {@render icon?.()}
        {#key type}
            <input
                {name}
                {...{ type }}
                bind:value
                class="w-full border-0 ring-0 outline-none"
                {...rest}
            />
        {/key}
    </label>
{:else}
    {#if label}
        <label for={name}>
            {label}
        </label>
    {/if}
    {#key type}
        <input
            {name}
            {...{ type }}
            bind:value
            class={cn(
                'focus:border-greyscale-100 bg-greyscale-800 border-greyscale-700 mt-2 flex w-full items-center gap-1 rounded-lg border px-3 py-2 text-sm font-light transition-colors focus-within:border-white active:shadow-sm active:shadow-black/30',
                classes
            )}
            {...rest}
        />
    {/key}
{/if}
