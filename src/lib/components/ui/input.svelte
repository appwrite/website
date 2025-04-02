<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import type { HTMLInputAttributes } from 'svelte/elements';

    type $$Props = HTMLInputAttributes & {
        label?: string;
    };

    export let label: $$Props['label'] = '';
    export let type: $$Props['type'] = 'text';
    export let value: $$Props['value'] = '';
    const { class: classes, name, ...props } = $$restProps;
</script>

{#if $$slots.icon}
    <label
        class={classNames(
            'focus:border-greyscale-100 bg-greyscale-800 border-greyscale-700 flex items-center gap-1 rounded-lg border px-3 py-2 text-sm font-light transition-colors focus-within:border-white active:shadow-sm active:shadow-black/30',
            classes
        )}
    >
        <slot name="icon" />
        {#key type}
            <input
                {name}
                {...{ type }}
                bind:value
                on:input
                on:change
                on:focus
                on:blur
                class="w-full border-0 ring-0 outline-none"
                {...props}
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
            on:input
            on:change
            on:focus
            on:blur
            class={classNames(
                'focus:border-greyscale-100 bg-greyscale-800 border-greyscale-700 mt-2 flex w-full items-center gap-1 rounded-lg border px-3 py-2 text-sm font-light transition-colors focus-within:border-white active:shadow-sm active:shadow-black/30',
                classes
            )}
            {...props}
        />
    {/key}
{/if}
