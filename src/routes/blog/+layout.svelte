<script lang="ts">
	import type { AuthorData } from '$markdoc/layouts/Author.svelte';
	import type { CategoryData } from '$markdoc/layouts/Category.svelte';
	import type { PostsData } from '$markdoc/layouts/Post.svelte';
	import { setContext } from 'svelte';

	export let data;
	setContext<PostsData[]>('posts', data.posts);
	setContext<AuthorData[]>('authors', data.authors);
	setContext<CategoryData[]>('categories', data.categories);
</script>

<slot />
