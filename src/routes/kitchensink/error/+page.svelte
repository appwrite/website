<script lang="ts">
	import { page } from '$app/stores';
	import { Docs } from '$lib/layouts';
	import Sidebar from '$routes/docs/Sidebar.svelte';
</script>

<Docs variant="two-side-navs">
	<Sidebar />

	<div class="aw-article u-flex u-main-center u-cross-center u-padding-block-16 u-max-width-700 u-margin-inline-auto">
		<div class="aw-container">
			<div class="aw-hero" style="--hero-gap:1.25rem;">
				<span class="aw-badges aw-eyebrow">404_</span>
				<h1 class="aw-headline aw-u-color-text-primary">
					Page not found
				</h1>
				<p class="aw-description">
					Sorry, it seems that the page you are looking for does not exist. Feel free to use our navigation menu or the button below to explore more of Appwrite’s documentation.
				</p>
				<button class="aw-button is-secondary u-cross-child-center u-margin-block-start-12">
					<span>Back to docs</span>
				</button>
			</div>
		</div>
	</div>

</Docs>
