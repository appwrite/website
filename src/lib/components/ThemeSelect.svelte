<script lang="ts">
    import { type Theme, currentTheme } from '$routes/+layout.svelte';

    import Select, { type SelectOption } from './Select.svelte';
    import { Select as S } from '$lib/components/ui';

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

<Select {options} bind:value={$currentTheme} placement="top" />
<S {options} bind:value={$currentTheme} />
