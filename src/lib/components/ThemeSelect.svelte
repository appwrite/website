<script lang="ts">
    import { type Theme, currentTheme } from '$routes/+layout.svelte';

    import Select, { type SelectOption } from './Select.svelte';

    const options: SelectOption<Theme>[] = [
        {
            value: 'dark',
            label: 'Dark',
            icon: 'aw-icon-dark'
        },
        {
            value: 'light',
            label: 'Light',
            icon: 'aw-icon-light'
        },
        {
            value: 'system',
            label: 'System',
            icon: 'aw-icon-system'
        }
    ];
</script>

<Select {options} bind:value={$currentTheme} placement="top" />
