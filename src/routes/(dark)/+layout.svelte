<script lang="ts">
    import { ThemeProvider } from 'sveltekit-themes';

    const { children } = $props();
</script>

<ThemeProvider forcedTheme="dark" attribute="class">
    {@render children()}
</ThemeProvider>
