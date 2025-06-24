<script lang="ts">
    import { page } from '$app/state';
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';

    const newUrl = page.url.pathname
        .replace('legacy/', '')
        .replace('documents', 'rows')
        .replace('collections', 'tables');

    setContext(
        'docsSubtitle',
        writable<string>(`
            <strong>Note:</strong> This API is <strong><code>deprecated</code></strong> and uses outdated terminologies.
            See the <a class="web-link underline" href="${newUrl}">updated documentation</a>
            for improved compatibility and migration details.
        `)
    );
</script>

<slot />
