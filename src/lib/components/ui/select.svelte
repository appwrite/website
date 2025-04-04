<script lang="ts">
    import { Select } from 'melt/builders';

    type Props = {
        options: Array<{
            label: string;
            value: string;
        }>;
    };

    const { options }: Props = $props();
    type Option = (typeof options)[number];

    const select = new Select<Option['value']>();
</script>

<button {...select.trigger}>
    {select.value ?? 'Select an anime'}
</button>

<div {...select.content}>
    {#each options as option}
        <div {...select.getOption(option.value)}>
            {option}
        </div>
    {/each}
</div>
