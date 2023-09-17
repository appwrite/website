<script lang="ts">
	import { page } from '$app/stores';
	import Docs, { type DocsLayoutVariant } from '$lib/layouts/Docs.svelte';
	import Sidebar from './Sidebar.svelte';

	function getDocsVariant(pathname: string): DocsLayoutVariant {
		const isSDKs = pathname.includes('/sdks');
		const isAPIs = pathname.includes('/apis/');
		const isTutorial = pathname.includes('/tutorials/');
		const isQuickstart = pathname.includes('/quick-start/');
		const isProduct = pathname.includes('/products/') || pathname.includes('/article');
		const isTooling = pathname.includes('/tooling');
		const isSelfHosting = pathname.includes('/self-hosting');
		const isReference = pathname.includes('/reference');

		if (isTutorial || isProduct || isAPIs || isSDKs || isQuickstart || isTooling || isSelfHosting) {
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
