<script lang="ts">
	import { page } from '$app/stores';

	export let date: string;
	let showFeedback = false;
	let feedbackType = '';
	let email = '';
	let comment = '';
	let error: string | undefined;
	let submitted = false;
	let submitting = false;

	async function handleSubmit() {
		submitting = true;
		error = undefined;
		const response = await fetch('https://growth.appwrite.io/v1/feedback/docs', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				type: feedbackType,
				route: $page.route.id,
				comment
			})
		});
		submitting = false;
		if (response.status >= 400) {
			error = response.status >= 500 ? 'Server Error.' : 'Error submitting form.';
			return;
		}
		comment = email = '';
		submitted = true;
	}

	function reset() {
		comment = email = '';
		submitted = false;
		error = undefined;
	}

	$: if (!showFeedback) {
		reset();
	}
</script>

<section class="aw-content-footer">
	<header class="aw-content-footer-header u-width-full-line">
		<div
			class="aw-content-footer-header-start u-flex u-main-space-between u-cross-center u-width-full-line"
		>
			<div class="u-flex u-gap-16">
				<h5 class="aw-main-body-600 aw-u-color-text-primary">Was this page helpful?</h5>
				<div class="u-flex u-gap-8">
					<button
						class="aw-radio-button"
						aria-label="helpful"
						on:click={() => {
							showFeedback = feedbackType === 'positive' ? false : true;
							feedbackType = 'positive';
						}}
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.000488281 8.5C0.000488281 7.67157 0.672061 7 1.50049 7C2.32892 7 3.00049 7.67157 3.00049 8.5V14.5C3.00049 15.3284 2.32892 16 1.50049 16C0.672061 16 0.000488281 15.3284 0.000488281 14.5V8.5Z"
								fill="#EDEDF0"
							/>
							<path
								d="M4.00049 8.33333V13.7639C4.00049 14.5215 4.42849 15.214 5.10606 15.5528L5.15591 15.5777C5.71133 15.8554 6.32378 16 6.94476 16H12.3609C13.3142 16 14.1351 15.3271 14.322 14.3922L15.522 8.39223C15.7696 7.15465 14.823 6 13.5609 6H10.0005V2C10.0005 0.895431 9.10506 0 8.00049 0C7.4482 0 7.00049 0.447715 7.00049 1V1.66667C7.00049 2.53215 6.71978 3.37428 6.20049 4.06667L4.80049 5.93333C4.2812 6.62572 4.00049 7.46785 4.00049 8.33333Z"
								fill="#EDEDF0"
							/>
						</svg>
					</button>
					<button
						class="aw-radio-button"
						aria-label="unhelpful"
						on:click={() => {
							showFeedback = feedbackType === 'negative' ? false : true;
							feedbackType = 'negative';
						}}
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M16 7.5C16 8.32843 15.3285 9 14.5 9C13.6716 9 13 8.32843 13 7.5V1.5C13 0.671574 13.6716 8.77022e-07 14.5 9.49446e-07C15.3285 1.02187e-06 16 0.671574 16 1.5V7.5Z"
								fill="#EDEDF0"
							/>
							<path
								d="M12 7.66667V2.23607C12 1.47852 11.572 0.785998 10.8945 0.447215L10.8446 0.422291C10.2892 0.144581 9.67675 5.2778e-07 9.05577 4.73492e-07L3.63964 0C2.68628 -8.33455e-08 1.86545 0.672919 1.67848 1.60777L0.478483 7.60777C0.230966 8.84535 1.17755 10 2.43964 10H6.00004V14C6.00004 15.1046 6.89547 16 8.00004 16C8.55232 16 9.00004 15.5523 9.00004 15V14.3333C9.00004 13.4679 9.28075 12.6257 9.80004 11.9333L11.2 10.0667C11.7193 9.37428 12 8.53215 12 7.66667Z"
								fill="#EDEDF0"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div class="aw-content-footer-header-end">
				<ul class="aw-metadata aw-caption-400">
					{#if date}
						<li>Last updated on {new Date(date)?.toLocaleDateString()}</li>
					{/if}
					<li>
						<a
							href="https://github.com/appwrite/website"
							target="_blank"
							class="aw-link u-flex u-gap-4 u-cross-baseline"
						>
							<span class="icon-pencil-alt u-contents" aria-hidden="true" />
							<span>Update on GitHub</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</header>
	{#if showFeedback}
		<form
			on:submit|preventDefault={handleSubmit}
			class="aw-card is-normal"
			style="--card-padding:1rem"
		>
			<div class="u-flex-vertical u-gap-8">
				<label for="message">
					<span class="aw-u-color-text-primary">
						What did you {feedbackType === 'negative' ? 'dislike' : 'like'}? (optional)
					</span>
				</label>
				<textarea
					class="aw-input-text"
					id="message"
					placeholder="Write your message"
					bind:value={comment}
				/>
				<label for="message" class="u-margin-block-start-8">
					<span class="aw-u-color-text-primary">Email</span>
				</label>
				<input
					class="aw-input-text"
					placeholder="Enter your email"
					type="email"
					name="email"
					required
					bind:value={email}
				/>
			</div>
			{#if submitted}
				<p class="aw-u-color-text-primary u-margin-block-start-16">
					Your message has been sent successfully. We appreciate your feedback.
				</p>
			{/if}
			{#if error}
				<p class="aw-u-color-text-primary u-margin-block-start-16">
					There was an error submitting your feedback. Please try again later.
				</p>
			{/if}

			<div class="u-flex u-main-end u-margin-block-start-16 u-gap-8">
				<button class="aw-button is-text" on:click={() => (showFeedback = false)}>
					<span>Cancel</span>
				</button>
				<button type="submit" class="aw-button" disabled={submitting || !email}>
					<span>Submit</span>
				</button>
			</div>
		</form>
	{/if}
</section>
