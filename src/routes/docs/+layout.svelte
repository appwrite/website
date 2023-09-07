<script lang="ts">
	import { page } from '$app/stores';
	import Docs, { type DocsLayoutVariant } from '$lib/layouts/Docs.svelte';
	import Sidebar from './Sidebar.svelte';

	function getDocsVariant(pathname: string): DocsLayoutVariant {
		const isTutorial = pathname.includes('/tutorials/');
		const isProduct = pathname.includes('/products/');
		const isReference = pathname.includes('/reference');

		if (isTutorial || isProduct) {
			return 'two-side-navs';
		} else if (isReference) {
			return 'expanded';
		}

		return 'default';
	}

	$: docsVariant = getDocsVariant($page.url.pathname);
</script>

<Docs variant={docsVariant}>
	<Sidebar expandable={docsVariant === 'expanded'} />
	<slot />
</Docs>
