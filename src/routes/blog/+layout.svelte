<script lang="ts">
    import { setContext } from 'svelte';
    import type { AuthorData, CategoryData, PostsData } from './content.js';

    export let data;
    setContext<PostsData[]>('posts', data.posts);
    setContext<AuthorData[]>('authors', data.authors);
    setContext<CategoryData[]>('categories', data.categories);
</script>

<slot />
