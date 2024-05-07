<script lang="ts">
	import { page } from '$app/stores';
	import { MainFooter } from '$lib/components';
	import { Docs } from '$lib/layouts';
	import Sidebar from './Sidebar.svelte';
</script>

<Docs variant="two-side-navs">
	<Sidebar />
	<div
		class="web-article u-flex u-main-center u-cross-center u-padding-block-16 u-max-width-700 u-margin-inline-auto"
	>
		<div class="web-container">
			<div class="web-hero" style="--hero-gap:1.25rem;">
				<span class="web-badges web-eyebrow">{$page.status}</span>
				<h1 class="web-headline web-u-color-text-primary">
					{$page.error?.message ?? 'An error has occured'}
				</h1>
				{#if $page.status === 404}
					<p class="web-description">
						Sorry, it seems that the page you are looking for does not exist. Feel free to use our
						navigation menu or the button below to explore more of Appwrite's documentation.
					</p>
				{/if}
				<a href="/docs" class="web-button is-secondary u-cross-child-center u-margin-block-start-12">
					<span>Back to docs</span>
				</a>
			</div>
		</div>
	</div>
	<MainFooter variant="docs" />
</Docs>
