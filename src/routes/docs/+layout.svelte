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
		const isPlatform = pathname.includes('/platform');
		const isTooling = pathname.includes('/tooling');
		const isSelfHosting = pathname.includes('/self-hosting');
		const isReference = pathname.includes('/reference');

		if (isTutorial || isProduct || isAPIs || isSDKs || isQuickStarts || isTooling || isSelfHosting || isPlatform) {
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
