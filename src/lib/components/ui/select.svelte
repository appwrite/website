<script lang="ts">
    import { Select, type SelectProps } from 'melt/builders';

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

<button {...select.trigger}>
    {select.value ?? defaultValue}
</button>

<div {...select.content}>
    {#each options as option}
        <div {...select.getOption(option.value)}>
            {option}
        </div>
    {/each}
</div>
