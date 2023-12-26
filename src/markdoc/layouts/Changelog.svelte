<script lang="ts" context="module">
    import { hasContext, setContext } from 'svelte';

    export type ChangelogData = {
        title: string;
        description?: string;
        date: string;
        cover?: string;
    };

    const CONTEXT_KEY = Symbol('changelog');

    function initContext() {
        setContext(CONTEXT_KEY, null);
    }

    export function isInsideChangelog() {
        return hasContext(CONTEXT_KEY);
    }
</script>

<script lang="ts">
    initContext();
</script>

<!-- Empty so it can be displayed inline -->
<slot />
