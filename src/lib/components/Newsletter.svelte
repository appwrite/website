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

<div class="pre-footer-bg" style="pointer-events:none;">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="692"
		height="1171"
		viewBox="0 0 692 1171"
		fill="none"
		style="max-inline-size:100%;"
	>
		<g opacity="0.4" filter="url(#filter0_f_1577_37321)">
			<path
				d="M-96.9811 29.2126C-329.155 33.7322 -513.706 225.611 -509.186 457.785C-504.667 689.959 -312.788 874.51 -80.6141 869.99C33.1857 867.775 -132.237 523.592 -36.8339 437.579C62.4044 348.109 394.063 627.529 391.759 509.155C387.239 276.98 135.193 24.693 -96.9811 29.2126Z"
				fill="url(#paint0_radial_1577_37321)"
			/>
		</g>
		<defs>
			<filter
				id="filter0_f_1577_37321"
				x="-809.268"
				y="-270.847"
				width="1501.04"
				height="1440.92"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_1577_37321" />
			</filter>
			<radialGradient
				id="paint0_radial_1577_37321"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(-88.7975 449.601) rotate(178.885) scale(420.468 420.468)"
			>
				<stop offset="0.281696" stop-color="#FE9567" />
				<stop offset="0.59375" stop-color="#FD366E" />
			</radialGradient>
		</defs>
	</svg>
</div>

<div class="aw-big-padding-section">
	<div class="aw-big-padding-section-level-1">
		<div class="aw-big-padding-section-level-2">
			<div class="aw-container">
				<div class="aw-grid-1-1-opt-2 u-gap-32">
					<div class="">
						<div class="aw-u-max-inline-size-none-mobile" class:aw-u-max-width-380={!submitted}>
							{#if submitted}
								<section class="u-flex-vertical aw-u-gap-20">
									<h1 class="aw-u-color-text-primary">Thank you for your message</h1>
									<p class="aw-description aw-u-padding-block-end-32">
										Your message has been sent successfully. We appreciate your feedback, our team
										will try to get back to you as soon as possible.
									</p>
									<a href="/" class="aw-button is-secondary aw-u-margin-block-end-32">
										<span>Back to homepage</span>
									</a>
								</section>
							{:else}
								<section class="u-flex-vertical aw-u-gap-20">
									<h1 class="aw-u-color-text-primary">Subscribe to our newsletter</h1>
									<p class="aw-description aw-u-padding-block-end-40">
										Sign up to our company blog and get the latest insights from Appwrite. Learn
										more about engineering, product design, building community, and tips & tricks
										for using Appwrite.
									</p>
								</section>
							{/if}
						</div>
					</div>
					{#if !submitted}
						<form method="post" on:submit|preventDefault={submit} class="u-flex-vertical u-gap-16">
							<div>
								<label for="name">Your name</label>
								<input
									class="aw-input-text"
									type="text"
									placeholder="Enter your name"
									id="name"
									name="name"
									required
									bind:value={email}
								/>
							</div>
							<div>
								<label for="email">Your email</label>
								<input
									class="aw-input-text"
									type="email"
									placeholder="Enter your email"
									required
									id="email"
									name="email"
									bind:value={email}
								/>
							</div>
							<button type="submit" class="aw-button" disabled={submitting}>Sign up</button>
						</form>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<!-- <div class="aw-grid-1-1-opt-2 u-gap-32">
	<div class="aw-hero aw-u-max-width-800">
		<h5 class="aw-display aw-u-color-text-primary u-text-start">Subscribe to our newsletter</h5>
		<p class="aw-description aw-u-color-text-primary u-text-start" style="opacity:0.64">
			Sign up to our company blog and get the latest insights from Appwrite. Learn more about
			engineering, product design, building community, and tips & tricks for using Appwrite.
		</p>
	</div>
	<div>
		{#if submitted}
			test
		{:else}
			<form
				class="u-width-full-line aw-u-max-width-380 u-flex u-flex-vertical u-gap-8"
				on:submit|preventDefault={submit}
			>
				<label for="name"> Your name</label>
				<input
					class="aw-input-text"
					type="text"
					placeholder="Enter your name"
					id="name"
					name="name"
					required
					bind:value={email}
				/>
				<label for="name"> Your email</label>
				<input
					class="aw-input-text"
					type="email"
					placeholder="Enter your email"
					required
					id="email"
					name="email"
					bind:value={email}
				/>
				<button type="submit" class="aw-button" disabled={submitting}>Sign up</button>
			</form>
		{/if}
	</div>
</div> -->

<style lang="scss">
	.pre-footer-bg {
		position: absolute;
		top: clamp(300px, 50vw, 50%);
		left: clamp(300px, 50vw, 50%);
		transform: translate(-50%, -70%);
		width: clamp(1200px, 100vw, 3000px);
		height: auto;
		max-inline-size: unset;
		max-block-size: unset;
	}
</style>
