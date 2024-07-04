<script lang="ts">
	import { page } from '$app/stores';
	import { FooterNav, MainFooter } from '$lib/components';
	import { Main } from '$lib/layouts';
	import { onMount } from 'svelte';

	let error: string | undefined;

	onMount(async () => {
		const email = $page.url.searchParams.get('email');
		const key = $page.url.searchParams.get('key');
		const response = await fetch('https://growth.appwrite.io/v1/newsletter/verify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				key
			})
		});
		if (response.status >= 400) {
			error = response.status >= 500 ? 'Server Error.' : 'Error submitting form.';
			return;
		}
	});
</script>

<Main>
	<div class="web-big-padding-section">
		<div class="web-big-padding-section-level-2">
			<div class="web-container">
				<div class="web-hero" style="--hero-gap:1.25rem;">
					<span class="web-badges web-eyebrow">verification</span>
					<h1 class="web-headline web-u-color-text-primary">
						{#if error}
							Error
						{:else}
							Success
						{/if}
					</h1>

					<p class="web-description">
						{#if error}
							Something went wrong, please try again later.
						{:else}
							Your email has been verified successfully.
						{/if}
					</p>
					<a href="/" class="web-button is-secondary u-cross-child-center u-margin-block-start-12">
						<span>Back to homepage</span>
					</a>
				</div>
			</div>
		</div>
		<div class="web-big-padding-section-level-2 u-position-relative">
			<div class="web-container">
				<FooterNav />
				<MainFooter />
			</div>
		</div>
	</div>
</Main>
