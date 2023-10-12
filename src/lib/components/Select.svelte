<script lang="ts" context="module">
    export type SelectOption<T = unknown> = {
        value: T;
        label: string;
        icon?: string;
        group?: string;
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
        elements: { trigger, menu, option: optionEl, group: groupEl, groupLabel },
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

    const DEFAULT_GROUP = 'default';
    type Group = {
        label: string;
        options: SelectOption<unknown>[];
    };
    $: groups = (function getGroups(): Group[] {
        const groups = options.reduce<Record<string, SelectOption[]>>((carry, option) => {
            const group = option.group ?? DEFAULT_GROUP;
            if (!carry[group]) {
                carry[group] = [];
            }
            carry[group].push(option);
            return carry;
        }, {});

        return Object.entries(groups).map(([label, options]) => ({ label, options }));
    })();
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
        {#each groups as group}
            {@const isDefault = group.label === DEFAULT_GROUP}
            <div class="aw-select-group" use:melt={$groupEl(group.label)}>
                {#if !isDefault}
                    <span class="aw-select-group-label" use:melt={$groupLabel}>{group.label}</span>
                {/if}
                {#each options as option}
                    <button class="aw-select-option" use:melt={$optionEl(option)}>
                        {#if option.icon}
                            <span class={option.icon} aria-hidden="true" />
                        {/if}
                        <span style:text-transform="capitalize">{option.label}</span>
                    </button>
                {/each}
            </div>
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
        {#each groups as group}
            {@const isDefault = group.label === DEFAULT_GROUP}
            {#if isDefault}
                {#each options as option}
                    <option value={option.value} selected={option.value === selected}>
                        {option.label}
                    </option>
                {/each}
            {:else}
                <optgroup label={isDefault ? undefined : group.label}>
                    {#each options as option}
                        <option value={option.value} selected={option.value === selected}>
                            {option.label}
                        </option>
                    {/each}
                </optgroup>
            {/if}
        {/each}
    </select>
    <span class="icon-cheveron-down" aria-hidden="true" />
</div>
