<script lang="ts">
    import NumberFlow, { type Format } from '@number-flow/svelte';

    interface Props {
        value: number;
        format?: Format;
    }

    let { value = 0, format = { notation: 'compact', minimumIntegerDigits: 2 } }: Props = $props();
</script>

<NumberFlow class="text-center" {format} {value} />
