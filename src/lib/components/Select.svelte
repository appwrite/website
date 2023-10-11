<script lang="ts" context="module">
    export type SelectOption<T = unknown> = {
        value: T;
        label: string;
        icon?: string;
    };
</script>

<script lang="ts">
    import { createSelect, melt, type CreateSelectProps } from '@melt-ui/svelte';
    import { fly } from 'svelte/transition';

    export let options: Array<SelectOption>;
    export let nativeMobile = false;
    export let selected: unknown | undefined = undefined;
    export let onSelectedChange: CreateSelectProps['onSelectedChange'] = undefined;

    const {
        elements: { trigger, menu, option: optionEl },
        states: { open, selected: localSelected, selectedLabel }
    } = createSelect<unknown>({
        preventScroll: false,
        positioning: {
            sameWidth: true,
            fitViewport: true
        },
        forceVisible: true,
        onSelectedChange({ curr, next }) {
            if (onSelectedChange) {
                onSelectedChange({ curr, next });
            }
            selected = next?.value;

            return next;
        }
    });

    $: selectedOption = options.find((o) => o.value === selected);

    $: if (selectedOption) {
        localSelected.set(selectedOption);
    }
</script>

<button
    class="aw-select is-colored"
    class:aw-is-not-mobile={nativeMobile}
    use:melt={$trigger}
    aria-label="Select theme"
>
    <div class="physical-select">
        {#if selectedOption?.icon}
            <span class={selectedOption.icon} aria-hidden="true" />
        {/if}
        <span>{$selectedLabel}</span>
    </div>
    <span class="icon-cheveron-down" aria-hidden="true" />
</button>

{#if $open}
    <div
        class="aw-select-menu"
        class:aw-is-not-mobile={nativeMobile}
        style:z-index={10000}
        use:melt={$menu}
        transition:fly={{ y: 4, duration: 150 }}
    >
        {#each options as option}
            <button class="aw-select-option" use:melt={$optionEl(option)}>
                {#if option.icon}
                    <span class={option.icon} aria-hidden="true" />
                {/if}
                <span style:text-transform="capitalize">{option.label}</span>
            </button>
        {/each}
    </div>
{/if}

<div
    class="aw-select is-colored aw-is-only-mobile"
    style:display={nativeMobile ? undefined : 'none'}
>
    {#if selectedOption?.icon}
        <span class={selectedOption.icon} aria-hidden="true" />
    {/if}
    <select bind:value={selected}>
        {#each options as option}
            <option value={option.value} selected={option.value === selected}>
                {option.label}
            </option>
        {/each}
    </select>
    <span class="icon-cheveron-down" aria-hidden="true" />
</div>
