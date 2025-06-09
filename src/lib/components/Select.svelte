<script lang="ts" context="module">
    export type SelectOption<T = unknown> = {
        value: T;
        label: string;
        icon?: string;
        group?: string;
    };
</script>

<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { createSelect, melt, type CreateSelectProps } from '@melt-ui/svelte';
    import { createEventDispatcher } from 'svelte';
    import { fly, type FlyParams } from 'svelte/transition';

    export let options: Array<SelectOption>;
    export let nativeMobile = false;
    export let value: unknown | undefined = undefined;
    export let onSelectedChange: CreateSelectProps['onSelectedChange'] = undefined;
    // TODO: This id currently gets overriden by Melt. We should either use the label el, or
    // allow passing down ids in Melt.
    export let id: string | undefined = undefined;
    export let preventScroll = false;
    export let placement: NonNullable<CreateSelectProps['positioning']>['placement'] = 'bottom';
    let className: string = '';

    export { className as class };

    const dispatch = createEventDispatcher<{
        change: unknown;
    }>();

    export let initialLabel: string = 'Select an option';

    const {
        elements: { trigger, menu, option: optionEl, group: groupEl, groupLabel },
        states: { open, selected, selectedLabel }
    } = createSelect<unknown>({
        preventScroll,
        positioning: {
            sameWidth: true,
            placement
        },
        forceVisible: true,
        onSelectedChange({ curr, next }) {
            if (onSelectedChange) {
                onSelectedChange({ curr, next });
            }
            value = next?.value;
            dispatch('change', next?.value);

            return next;
        },
        portal: null,
        scrollAlignment: 'center'
    });

    $: selectedOption = options.find((o) => o.value === value);

    $: if (selectedOption) {
        selected.set(selectedOption);
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

        return Object.entries(groups).map(([label, options]) => ({
            label,
            options
        }));
    })();

    $: flyParams = {
        duration: 150,
        y: placement === 'top' ? 4 : -4
    } as FlyParams;
</script>

<button
    class={classNames('web-select is-colored', className)}
    {id}
    class:web-is-not-mobile={nativeMobile}
    use:melt={$trigger}
    aria-label="Select theme"
>
    <div class="physical-select">
        {#if selectedOption?.icon}
            <span class={selectedOption.icon} aria-hidden="true"></span>
        {/if}
        <span>{$selectedLabel || initialLabel}</span>
    </div>
    <span class="icon-cheveron-{$open ? 'up' : 'down'}" aria-hidden="true"></span>
</button>

{#if $open}
    <div
        class="web-select-menu"
        class:web-is-not-mobile={nativeMobile}
        style:z-index={10000}
        use:melt={$menu}
        transition:fly={flyParams}
    >
        {#each groups as group}
            {@const isDefault = group.label === DEFAULT_GROUP}
            {#if isDefault}
                <div class="flex flex-col gap-0.5">
                    {#each group.options as option}
                        <button class="web-select-option" use:melt={$optionEl(option)}>
                            {#if option.icon}
                                <span class={option.icon} aria-hidden="true"></span>
                            {/if}
                            <span>{option.label}</span>
                        </button>
                    {/each}
                </div>
            {:else}
                <div class="web-select-group" use:melt={$groupEl(group.label)}>
                    <span class="web-select-group-label" use:melt={$groupLabel(group.label)}>
                        {group.label}
                    </span>

                    {#each group.options as option}
                        <button class="web-select-option" use:melt={$optionEl(option)}>
                            {#if option.icon}
                                <span class={option.icon} aria-hidden="true"></span>
                            {/if}
                            <span style:text-transform="capitalize">{option.label}</span>
                        </button>
                    {/each}
                </div>
            {/if}
        {/each}
    </div>
{/if}

<div
    class="web-select is-colored web-is-only-mobile web-u-inline-width-100-percent-mobile-break1"
    style:display={nativeMobile ? undefined : 'none'}
>
    {#if selectedOption?.icon}
        <span class={selectedOption.icon} aria-hidden="true"></span>
    {/if}
    <select {id} bind:value>
        {#each groups as group}
            {@const isDefault = group.label === DEFAULT_GROUP}
            {#if isDefault}
                {#each group.options as option}
                    <option value={option.value} selected={option.value === value}>
                        {option.label}
                    </option>
                {/each}
            {:else}
                <optgroup label={isDefault ? undefined : group.label}>
                    {#each group.options as option}
                        <option value={option.value} selected={option.value === value}>
                            {option.label}
                        </option>
                    {/each}
                </optgroup>
            {/if}
        {/each}
    </select>
    <span class="icon-cheveron-{$open ? 'up' : 'down'}" aria-hidden="true"></span>
</div>

<style lang="scss">
    .web-select {
        min-width: var(--min-width, var(--p-select-min-width));
    }
</style>
