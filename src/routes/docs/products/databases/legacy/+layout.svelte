<script lang="ts">
    import { page } from '$app/state';
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import type { HeaderSectionInfoAlert } from '$lib/layouts/DocsArticle.svelte';

    let { children } = $props();

    function replaceLegacyUrl(pathname: string): string {
        return pathname
            .replace('legacy/', '')
            .replace('documents', 'rows')
            .replace('collections', 'tables');
    }

    const headerSectionInfoAlert = writable<HeaderSectionInfoAlert>({
        title: 'Deprecated API',
        description: `This API uses outdated terminology and is no longer maintained. Refer to the <a class="web-link underline" href="${replaceLegacyUrl(page.url.pathname)}">updated documentation</a> for improved compatibility and migration guidance.`
    });

    $effect(() => {
        headerSectionInfoAlert.set({
            title: 'Deprecated API',
            description: `This API uses outdated terminology and is no longer maintained. Refer to the <a class="web-link underline" href="${replaceLegacyUrl(page.url.pathname)}">updated documentation</a> for improved compatibility and migration guidance.`
        });
    });

    setContext('headerSectionInfoAlert', headerSectionInfoAlert);
</script>

{@render children()}
