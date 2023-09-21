<script lang="ts">
	import { page } from '$app/stores';
	import { Docs } from '$lib/layouts';
	import Sidebar from './Sidebar.svelte';
</script>

<Docs variant="two-side-navs">
	<Sidebar />
	<main class="u-contents">
		<article class="aw-article u-contents">
			<header class="aw-article-header">
				<div class="aw-article-header-start u-flex-vertical aw-u-cross-start">
					<div class="u-position-relative u-flex u-cross-center">
						<h1 class="aw-title">{$page?.error?.message}</h1>
					</div>
				</div>
			</header>
			<div class="aw-article-content">I am a placeholder for an error site.</div>
		</article>
	</main>
</Docs>
