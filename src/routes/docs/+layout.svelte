<script lang="ts">
	import { page } from '$app/stores';
	import Docs, { type DocsLayoutVariant } from '$lib/layouts/Docs.svelte';
	import Sidebar from './Sidebar.svelte';

	function getDocsVariant(pathname: string): DocsLayoutVariant {
		const isQuickStarts = pathname.includes('/quick-starts/');
		const isSDKs = pathname.includes('/sdks');
		const isAPIs = pathname.includes('/apis/');
		const isTutorial = pathname.includes('/tutorials/');
		const isProduct = pathname.includes('/products/') || pathname.includes('/article');
		const isTooling = pathname.includes('/tooling');
		const isAdvanced = pathname.includes('/advanced/');
		const isReference = pathname.includes('/reference');

		if (isTutorial || isProduct || isAPIs || isSDKs || isQuickStarts || isTooling || isAdvanced) {
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
