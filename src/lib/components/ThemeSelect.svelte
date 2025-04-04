<script lang="ts">
    import Select, { type SelectOption } from './Select.svelte';
    import { Select as Select2 } from '$lib/components/ui';
    import { themeStore, setTheme, type Theme } from '$lib/providers/theme';
    import { get } from 'svelte/store';

    const options = [
        {
            value: 'dark',
            label: 'Dark',
            icon: 'web-icon-dark'
        },
        {
            value: 'light',
            label: 'Light',
            icon: 'web-icon-light'
        },
        {
            value: 'system',
            label: 'System',
            icon: 'web-icon-system'
        }
    ];
</script>

<Select {options} bind:value={$themeStore.theme} placement="top" />
<Select2
    {options}
    bind:value={$themeStore.theme}
    onValueChange={(e) => {
        setTheme(e as Theme);
    }}
/>
