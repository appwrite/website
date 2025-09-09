<script lang="ts">
    import { setContext } from 'svelte';
    import type { AuthorData, CategoryData, PostsData } from './content.js';

    let { data, children } = $props();
    setContext<PostsData[]>('posts', data.posts);
    setContext<AuthorData[]>('authors', data.authors);
    setContext<CategoryData[]>('categories', data.categories);
    setContext<string | null>('rawContent', data.rawContent);
</script>

{@render children()}
