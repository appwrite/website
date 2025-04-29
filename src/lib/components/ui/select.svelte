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
        onValueChange,
        defaultValue = 'Select a value',
        ...rest
    }: Props = $props();

    const select = new Select<Props['options'][number]['value']>({
        value,
        sameWidth: true,
        forceVisible: false,
        ...rest
    });
</script>

<button
    class="border-gradient text-primary relative flex h-8 min-w-[145px] cursor-pointer items-center text-sm leading-[1] select-none"
    {...select.trigger}
>
    {select.value ?? defaultValue}
</button>

<div
    class="text-primary relative box-border flex max-w-xs flex-col gap-2 overflow-y-auto rounded-xl p-1 text-sm leading-[1.2] select-none"
    {...select.content}
>
    {#each options as option}
        <div {...select.getOption(option.value)}>
            {option.label}
        </div>
    {/each}
</div>
