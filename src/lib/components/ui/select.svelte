<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { Select, type SelectProps } from 'melt/builders';
    import type { HTMLButtonAttributes, SvelteHTMLElements } from 'svelte/elements';

    type Props = {
        options: Array<{
            label: string;
            value: string;
            icon: string;
        }>;
        defaultValue?: string;
        value?: string;
    } & SelectProps<string>;

    const {
        options,
        value = $bindable(),
        defaultValue = 'Select a value',
        ...rest
    }: Props = $props();
    type Option = (typeof options)[number];

    const select = new Select<Option['value']>({
        value,
        ...rest
    });
</script>

<button
    class="web-select is-colored text-primary relative flex h-8 min-w-[145px] cursor-pointer items-center text-sm leading-[1] select-none [all:unset]"
    {...select.trigger}
>
    {select.value ?? defaultValue}
</button>

<div {...select.content}>
    {#each options as option}
        <div {...select.getOption(option.value)}>
            {option.label}
        </div>
    {/each}
</div>
