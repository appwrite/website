<script lang="ts">
	import { page } from '$app/stores';
	import Main from '$lib/layouts/Main.svelte';
	// import Docs, { type DocsLayoutVariant } from '$lib/layouts/Docs.svelte';

	// function getDocsVariant(pathname: string): DocsLayoutVariant {
	// 	const isTutorial = pathname.includes('/tutorials/');
	// 	const isProduct = pathname.includes('/products/') || pathname.includes('/article');
	// 	const isReference = pathname.includes('/reference');

	// 	if (isTutorial || isProduct) {
	// 		return 'two-side-navs';
	// 	} else if (isReference) {
	// 		return 'expanded';
	// 	}

	// 	return 'default';
	// }

	// $: docsVariant = getDocsVariant($page.url.pathname);
</script>

<Main>
	<slot />
</Main>
