<script lang="ts">
    import NumberFlow, { type Format } from '@number-flow/svelte';

    type $$Props = {
        value: number;
        format?: Format;
    };

    export let value: $$Props['value'] = 0;
    export let format: $$Props['format'] = { notation: 'compact', minimumIntegerDigits: 2 };
</script>

<NumberFlow {format} {value} />
