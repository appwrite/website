<script lang="ts">
    import NumberFlow from '@number-flow/svelte';

    type $$Props = {
        value: number;
    };

    export let value: $$Props['value'] = 0;
</script>

<NumberFlow format={{ notation: 'compact', minimumIntegerDigits: 2 }} {value} />
