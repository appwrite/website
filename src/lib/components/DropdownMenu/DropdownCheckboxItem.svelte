<script lang="ts">
    import { DropdownCtx } from './DropdownMenu.svelte';

    export let checked = false;

    const {
        builders: { createCheckboxItem }
    } = DropdownCtx.get();

    const {
        elements: { checkboxItem },
        states: { checked: localChecked }
    } = createCheckboxItem({
        defaultChecked: checked,
        onCheckedChange({ next }) {
            checked = !!next;
            return next;
        }
    });

    $: localChecked.set(checked);
</script>

<slot checkboxItem={$checkboxItem} />
