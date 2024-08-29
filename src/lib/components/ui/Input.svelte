<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { createEventDispatcher } from 'svelte';
    import type { HTMLInputAttributes } from 'svelte/elements';

    type $$Props = HTMLInputAttributes & {
        label: string;
    };

    export let label: $$Props['label'] = '';
    export let type: $$Props['type'] = 'text';
    export let value: $$Props['value'] = '';
    export let classes: $$Props['class'] = '';
    export let name: $$Props['name'] = '';

    const dispatch = createEventDispatcher<{
        input: { value: string };
        change: { value: string };
    }>();

    const handleInput = (event: Event) => {
        const target = event.target as HTMLInputElement;
        value = target.value;
        dispatch('input', { value: target.value });
    };

    const handleChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        dispatch('change', { value: target.value });
    };
</script>

{#if $$slots.icon}
    <label
        class={classNames(
            'focus:border-greyscale-100 bg-greyscale-800 border-greyscale-700 flex items-center gap-1 rounded-lg border py-2 px-3 text-sm font-light transition-colors focus-within:border-white active:shadow-sm active:shadow-black/30',
            classes
        )}
    >
        <slot name="icon" />
        <input
            {name}
            {...{ type }}
            bind:value
            on:input={handleInput}
            on:change={handleChange}
            class="w-full border-0 ring-0 outline-none"
            {...$$restProps}
        />
    </label>
{:else}
    <label for={name}>
        {label}
    </label>
    <input
        bind:value
        on:input={handleInput}
        on:change={handleChange}
        class={classNames(
            'focus:border-greyscale-100 bg-greyscale-800 border-greyscale-700 mt-2 flex w-full items-center gap-1 rounded-lg border py-2 px-3 text-sm font-light transition-colors focus-within:border-white active:shadow-sm active:shadow-black/30',
            classes
        )}
        {...$$restProps}
    />
{/if}
