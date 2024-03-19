<script lang="ts">
	import { page } from '$app/stores';
	import { FooterNav, MainFooter } from '$lib/components';
	import { Main } from '$lib/layouts';
	import DocsError from './docs/+error.svelte';

	const isDocs = $page.url.pathname.startsWith('/docs');
</script>

{#if isDocs}
	<DocsError />
{:else}
	<Main>
		<div class="aw-big-padding-section">
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<div class="aw-hero" style="--hero-gap:1.25rem;">
						<span class="aw-badges aw-eyebrow">{$page.status}</span>
						<h1 class="aw-headline aw-u-color-text-primary">
							{$page.error?.message ?? 'An error has occured'}
						</h1>
						{#if $page.status === 404}
							<p class="aw-description">
								Sorry, it seems that the page you are looking for does not exist. Feel free to use
								our navigation menu or the button below to explore more of Appwrite's documentation.
							</p>
						{/if}
						<a href="/" class="aw-button is-secondary u-cross-child-center u-margin-block-start-12">
							<span>Back to homepage</span>
						</a>
					</div>
				</div>
			</div>
			<div class="aw-big-padding-section-level-2 u-position-relative">
				<div class="aw-container">
					<FooterNav />
					<MainFooter />
				</div>
			</div>
		</div>
	</Main>
{/if}
