<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import type { HTMLInputAttributes } from 'svelte/elements';

    type $$Props = {
        label: string;
    } & HTMLInputAttributes;

    export let label: $$Props['label'] = '';
    export let value: $$Props['value'] = '';
    const { class: classes, name, ...props } = $$restProps;
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
            on:input
            on:change
            on:focus
            on:blur
            {name}
            bind:value
            class="w-full border-0 ring-0 outline-none"
            {...props}
        />
    </label>
{:else}
    <label for={name}>
        {label}
    </label>
    <input
        on:input
        on:change
        on:focus
        on:blur
        bind:value
        class={classNames(
            'focus:border-greyscale-100 bg-greyscale-800 border-greyscale-700 mt-2 flex w-full items-center gap-1 rounded-lg border py-2 px-3 text-sm font-light transition-colors focus-within:border-white active:shadow-sm active:shadow-black/30',
            classes
        )}
        {...props}
    />
{/if}
