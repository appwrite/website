<script lang="ts">
    import Select, { type SelectOption } from './Select.svelte';
    import { useTheme } from 'sveltekit-themes';

    const theme = useTheme();

    const options: SelectOption<'light' | 'dark' | 'system'>[] = [
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

<select onchange={(e) => theme.set(e.currentTarget.value)} value={theme.current}>
    <option value="light"> Light Theme </option>
    <option value="dark"> Dark Theme </option>
    <option value="system"> System Theme </option>
</select>

<Select {options} value={theme.current} placement="top" />
