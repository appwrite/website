<script lang="ts">
	import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
	import { Main } from '$lib/layouts';
	import { TITLE_SUFFIX } from '$routes/titles';
	import FooterNav from '../../lib/components/FooterNav.svelte';
	import MainFooter from '../../lib/components/MainFooter.svelte';

	let email = '';
	let firstName = '';
	let subject = '';
	let message = '';
	let error: string | undefined;
	let submitted = false;

	async function handleSubmit() {
		error = undefined;
		const response = await fetch('https://growth.appwrite.io/v1/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				firstName,
				subject,
				message
			})
		});
		if (response.status >= 400) {
			error = response.status >= 500 ? 'Server Error.' : 'Error submitting form.';
			return;
		}

		submitted = true;
	}

	const title = 'Contact us' + TITLE_SUFFIX;
	const description = DEFAULT_DESCRIPTION;
	const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';
</script>

<svelte:head>
	<!-- Titles -->
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<!-- Desscription -->
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />
	<!-- Image -->
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="u-position-absolute" style="pointer-events:none;">
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

<Main>
	<div class="aw-big-padding-section">
		<div class="aw-big-padding-section-level-1">
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<div class="aw-grid-1-1-opt-2 u-gap-32">
						<div>
							<div class="aw-u-max-inline-size-none-mobile" class:aw-u-max-width-380={!submitted}>
								{#if submitted}
									<section class="u-flex-vertical aw-u-gap-20">
										<h1 class="aw-display aw-u-color-text-primary">Thank you for your message</h1>
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
										<h1 class="aw-display aw-u-color-text-primary">Contact Us</h1>
										<p class="aw-description aw-u-padding-block-end-40">
											We'd love your input: questions, feature requests, bugs or compliments.
										</p>
									</section>
								{/if}
								<section
									class="u-flex-vertical u-gap-12 aw-u-padding-block-start-40 aw-u-sep-block-start"
								>
									<h2 class="aw-label aw-u-color-text-primary">Follow us</h2>
									<ul class="u-flex u-gap-8">
										<li>
											<a
												href="/discord"
												class="aw-icon-button"
												aria-label="Discord"
												target="_blank"
												rel="noopener noreferrer"
											>
												<span class="aw-icon-discord" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a
												href="https://github.com/appwrite"
												class="aw-icon-button"
												aria-label="Github"
												target="_blank"
												rel="noopener noreferrer"
											>
												<span class="aw-icon-github" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a
												href="https://twitter.com/appwrite"
												class="aw-icon-button"
												aria-label="X"
												target="_blank"
												rel="noopener noreferrer"
											>
												<span class="aw-icon-x" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a
												href="https://linkedin.com/company/appwrite"
												class="aw-icon-button"
												aria-label="LinkedIn"
												target="_blank"
												rel="noopener noreferrer"
											>
												<span class="aw-icon-linkedin" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a
												href="https://youtube.com/c/appwrite?sub_confirmation=1"
												class="aw-icon-button"
												aria-label="YouTube"
												target="_blank"
												rel="noopener noreferrer"
											>
												<span class="aw-icon-youtube" aria-hidden="true" />
											</a>
										</li>
									</ul>
								</section>
								<div
									class="aw-is-only-mobile aw-u-margin-block-start-40 aw-u-padding-block-start-40 aw-u-sep-block-start"
								/>
							</div>
						</div>
						{#if !submitted}
							<form
								method="post"
								on:submit|preventDefault={handleSubmit}
								class="u-flex-vertical u-gap-16"
							>
								<div class="u-flex u-main-end">
									<ul
										class="aw-form-list is-two-columns u-gap-16 u-width-full-line aw-u-max-width-580 aw-u-max-inline-size-none-mobile"
									>
										<li class="aw-form-item">
											<input
												required
												class="aw-input-text"
												type="text"
												placeholder="Name"
												aria-label="Name"
												bind:value={firstName}
											/>
										</li>
										<li class="aw-form-item">
											<input
												required
												class="aw-input-text"
												type="email"
												placeholder="Email address"
												aria-label="Email address"
												bind:value={email}
											/>
										</li>
										<li class="aw-form-item is-column-span-2">
											<input
												required
												class="aw-input-text"
												type="text"
												name="subject"
												placeholder="Subject"
												aria-label="Subject"
												bind:value={subject}
											/>
										</li>
										<li class="aw-form-item is-column-span-2">
											<textarea
												required
												name="message"
												class="aw-input-text"
												placeholder="Your message"
												aria-label="Message"
												bind:value={message}
											/>
										</li>
									</ul>
								</div>
								<div class="u-flex u-gap-16 u-main-space-between aw-u-flex-vertical-reverse-mobile">
									<p class="aw-caption-400 aw-u-max-width-380">
										{#if error}
											{error}
										{/if}
									</p>
									<!-- <p class="aw-caption-400 aw-u-max-width-380">
										This form is protected by reCAPTCHA, and the Google <a
											class="aw-link"
											href="/privacy"
											target="_blank" rel="noopener noreferrer">Privacy Policy</a
										>
										and <a class="aw-link" href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
									</p> -->
									<button
										type="submit"
										class="aw-button u-cross-child-center aw-u-inline-width-100-percent-mobile-break1"
									>
										<span>Submit</span>
									</button>
								</div>
							</form>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="aw-container">
		<FooterNav />
		<MainFooter />
	</div>
</Main>
