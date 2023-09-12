<script lang="ts">
	import { Main } from '$lib/layouts';
	import FooterNav from '../../lib/components/FooterNav.svelte';
	import MainFooter from '../../lib/components/MainFooter.svelte';
</script>

<div class="u-position-absolute" style="pointer-events:none;">
	<svg xmlns="http://www.w3.org/2000/svg" width="692" height="1171" viewBox="0 0 692 1171" fill="none">
		<g opacity="0.4" filter="url(#filter0_f_1577_37321)">
			<path d="M-96.9811 29.2126C-329.155 33.7322 -513.706 225.611 -509.186 457.785C-504.667 689.959 -312.788 874.51 -80.6141 869.99C33.1857 867.775 -132.237 523.592 -36.8339 437.579C62.4044 348.109 394.063 627.529 391.759 509.155C387.239 276.98 135.193 24.693 -96.9811 29.2126Z" fill="url(#paint0_radial_1577_37321)"/>
		</g>
		<defs>
			<filter id="filter0_f_1577_37321" x="-809.268" y="-270.847" width="1501.04" height="1440.92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
				<feFlood flood-opacity="0" result="BackgroundImageFix"/>
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
				<feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_1577_37321"/>
			</filter>
			<radialGradient id="paint0_radial_1577_37321" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-88.7975 449.601) rotate(178.885) scale(420.468 420.468)">
				<stop offset="0.281696" stop-color="#FE9567"/>
				<stop offset="0.59375" stop-color="#FD366E"/>
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

					<div class="">
						<div class="aw-u-max-width-380 aw-u-max-inline-size-none-mobile">
							<section class="u-flex-vertical aw-u-gap-20">
								<h1 class="aw-display aw-u-color-text-primary">Contact Us</h1>
								<p class="aw-description aw-u-padding-block-end-40">We’d love your input: questions, feature requests, bugs or compliments.</p>
							</section>
							<section class="u-flex-vertical u-gap-12 aw-u-padding-block-start-40 aw-u-sep-block-start">
								<h2 class="aw-label aw-u-color-text-primary">Follow us</h2>
								<ul class="u-flex u-gap-8">
									<li>
										<a href="https://appwrite.io/discord" class="aw-icon-button" aria-label="Appwrite on aw-icon-discord" target="_blank">
											<span class="aw-icon-discord" aria-hidden="true"></span>
										</a>
									</li>
									<li>
										<a href="https://github.com/appwrite" class="aw-icon-button" aria-label="Appwrite on aw-icon-github" target="_blank">
											<span class="aw-icon-github" aria-hidden="true"></span>
										</a>
									</li>
									<li>
										<a href="https://twitter.com/appwrite" class="aw-icon-button" aria-label="Appwrite on aw-icon-twitter" target="_blank">
											<span class="aw-icon-twitter" aria-hidden="true"></span>
										</a>
									</li>
									<li>
										<a href="." class="aw-icon-button" aria-label="Appwrite on aw-icon-linkedin" target="_blank">
											<span class="aw-icon-linkedin" aria-hidden="true"></span>
										</a>
									</li>
									<li>
										<a href="." class="aw-icon-button" aria-label="Appwrite on YouTube" target="_blank">
											<span class="aw-icon-youtube" aria-hidden="true"></span>
										</a>
									</li>
								</ul>
							</section>
							<div class="aw-is-only-mobile aw-u-margin-block-start-40 aw-u-padding-block-start-40 aw-u-sep-block-start"></div>
						</div>
					</div>

					<div class="u-flex u-main-end">
						<ul class="aw-form-list is-two-columns u-gap-16 u-width-full-line aw-u-max-width-580  aw-u-max-inline-size-none-mobile">
							<li class="aw-form-item">
								<input class="aw-input-text" type="text" placeholder="Name" aria-label="Name">
							</li>
							<li class="aw-form-item">
								<input class="aw-input-text" type="email" placeholder="Email address" aria-label="Email address">
							</li>
							<li class="aw-form-item is-column-span-2">
								<input class="aw-input-text" type="text" placeholder="Subject" aria-label="Subject">
							</li>
							<li class="aw-form-item is-column-span-2">
								<textarea class="aw-input-text" placeholder="Your message" aria-label="Message"></textarea>
							</li>
						</ul>
					</div>
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
