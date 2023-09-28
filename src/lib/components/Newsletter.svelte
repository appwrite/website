<script lang="ts">
	let email = '';
	let submitted = false;
	let error: string | undefined;
	let submitting = false;

	async function submit() {
		submitting = true;
		error = undefined;

		const response = await fetch('https://growth.appwrite.io/v1/newsletter/verify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email
			})
		});

		console.log(response);
		submitting = false;
		if (response.status >= 400) {
			error = response.status >= 500 ? 'Server Error.' : 'Error submitting form.';
			return;
		}
		submitted = true;
	}
</script>

<img src="/images/bgs/pre-footer.svg" alt="" class="pre-footer-bg" />

<div class="aw-u-row-gap-80 u-position-relative">
	<div class="aw-container">
		<div class="aw-hero aw-u-max-width-800">
			<h5 class="aw-display aw-u-color-text-primary">Subscribe to our newsletter</h5>
			<p class="aw-description aw-u-color-text-primary" style="opacity:0.64">
				Sign up to our company blog and get the latest insights from Appwrite. Learn more about
				engineering, product design, building community, and tips & tricks for using Appwrite.
			</p>
			{#if submitted}
				test
			{:else}
				<form
					class="aw-subscribe-input aw-input-text is-reset-input-inside u-width-full-line aw-u-max-width-380 u-margin-inline-auto u-margin-block-start-32"
					on:submit|preventDefault={submit}
				>
					<input type="email" placeholder="Enter your email" required bind:value={email} />
					<button type="submit" class="aw-button" disabled={submitting}>Sign up</button>
				</form>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	.pre-footer-bg {
		position: absolute;
		top: clamp(300px, 50vw, 50%);
		left: clamp(300px, 50vw, 50%);
		transform: translate(-50%, -70%);
		width: clamp(1200px, 200vw, 3000px);
		height: auto;
		max-inline-size: unset;
		max-block-size: unset;
	}
</style>
