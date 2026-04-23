<script lang="ts">
    import { setContext, untrack } from 'svelte';
    import type { AuthorData, CategoryData, PostsData } from './content.js';

    let { data, children } = $props();
    untrack(() => {
        setContext<PostsData[]>('posts', data.posts);
        setContext<AuthorData[]>('authors', data.authors);
        setContext<CategoryData[]>('categories', data.categories);
        setContext<string | null>('rawContent', data.rawContent);
    });
</script>

{@render children()}
