<script lang="ts">
	import { Main } from '$lib/layouts';
	import MainFooter from '$lib/components/MainFooter.svelte';
	import FooterNav from '$lib/components/FooterNav.svelte';
	import { Tabs } from '$lib/UI';
	import PreFooter from '$lib/components/PreFooter.svelte';
</script>


<Main>
	<div class="aw-big-padding-section">
		<div class="aw-big-padding-section-level-1">
			<div class="aw-big-padding-section-level-2">
				<section class="aw-container aw-u-padding-block-end-0">
					<div class="aw-hero is-align-start aw-u-max-width-580">
						<h1 class="aw-display aw-u-color-text-primary">
							Built by a community of 700+ contributors
						</h1>
						<div class="">
							<p class="aw-description">
								Appwrite is the open-source development platform where developers can build any
								application at any scale, using the language they want.
							</p>
							<div class="u-flex u-flex-wrap u-gap-12 u-margin-block-start-32">
								<button class="aw-button is-full-width-mobile">
									<span class="text">Join our Discord</span>
								</button>
								<button class="aw-button is-secondary is-full-width-mobile">
									<span aria-hidden="true" class="aw-icon-star"></span>
									<span>Star on GitHub</span>
									<span class="aw-inline-tag aw-sub-body-400">99.9k</span>
								</button>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div class="aw-big-padding-section-level-2">
				<section class="aw-container">
					<ul class="aw-grid-row-4 aw-grid-row-4-mobile-2"
						style="--gap-mobile:1.5rem;">
						<li>
							<div class="aw-card is-normal">
								<div class="aw-title aw-u-color-text-primary">32k+</div>
								<div class="aw-description">GitHub Stars</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal">
								<div class="aw-title aw-u-color-text-primary">8k+</div>
								<div class="aw-description">Pull Requests</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal">
								<div class="aw-title aw-u-color-text-primary">15k+</div>
								<div class="aw-description">Commits</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal">
								<div class="aw-title aw-u-color-text-primary">2.5k+</div>
								<div class="aw-description">Issues</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal">
								<div class="aw-title aw-u-color-text-primary">625</div>
								<div class="aw-description">Open Issues</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal">
								<div class="aw-title aw-u-color-text-primary">1.9k+</div>
								<div class="aw-description">Closed Issues</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal">
								<div class="aw-title aw-u-color-text-primary">4.9k+</div>
								<div class="aw-description">Forks</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal">
								<div class="aw-title aw-u-color-text-primary">20k+</div>
								<div class="aw-description">Contributors</div>
							</div>
						</li>

					</ul>
				</section>
			</div>
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<h3
						class="aw-title aw-u-color-text-primary aw-u-text-align-center aw-u-max-width-600 u-margin-inline-auto"
					>
						Trusted by developers from the world's leading organizations
					</h3>
					<ul class="aw-grid-3c-4c-6c is-for-logos aw-u-padding-block-start-80">
						<li>
							<img src="/images/logos/trusted-by/apple.svg" alt="Apple" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/oracle.svg" alt="ORACLE" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/tiktok.svg" alt="TikTok" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/intel.svg" alt="intel" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/ibm.svg" alt="IBM" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/american-airlines.svg" alt="American Airlines" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/deloitte.svg" alt="Deloitte." />
						</li>
						<li>
							<img src="/images/logos/trusted-by/gm.svg" alt="GM" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/ey.svg" alt="EY" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/nestle.svg" alt="Nestle" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/bosch.svg" alt="BOSCH" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/decathlon.svg" alt="DECATHLON" />
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="aw-big-padding-section-level-1">
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<div class="aw-hero aw-u-max-width-993">
						<span class="aw-badges aw-eyebrow">Products_</span>
						<h2 class="aw-display aw-u-color-text-primary">Your backend, minus the hassle</h2>
						<p class="aw-description aw-u-max-width-700 u-margin-inline-auto">
							Build secure and scalable applications faster with Appwrite’s core backend products
							and spend more time building the best products.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="aw-big-padding-section-level-1 u-position-relative aw-white-section theme-light">
			<div class="u-position-absolute u-inset-block-end-0 u-inset-inline-start u-width-full-line">
				<img class="u-block u-width-full-line" src="/images/bgs/padding-section-1.svg" alt="" />
			</div>

			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<section class="aw-hero is-align-start">
						<span class="aw-badges aw-eyebrow">PRIVACY & SECURITY_</span>
						<h2 class="aw-display u-max-width-700">Self-host your data or take it to the Cloud</h2>
						<p class="aw-description u-max-width-700">
							Migrate your data from and to any platform at any time with Appwrite’s migrations API.
							With built-in security and privacy for peace of mind.
						</p>
					</section>
					<div class="u-overflow-hidden aw-u-margin-block-start-80">
						<ul class="aw-info-boxes aw-sub-body-500">
							<li class="aw-info-boxes-item">
								<img src="/images/icons/gradients/self-hosted.svg" width="40" height="40" alt="" />
								<h3 class="aw-info-boxes-title">Self-Hosted</h3>
								<p class="aw-info-boxes-content">Own your data or host it on a region of choice.</p>
							</li>
							<li class="aw-info-boxes-item">
								<img src="/images/icons/gradients/lock.svg" width="40" height="40" alt="" />
								<h3 class="aw-info-boxes-title">Encryption</h3>
								<p class="aw-info-boxes-content">
									Built-in data encryption both in rest and in transit.
								</p>
							</li>
							<li class="aw-info-boxes-item">
								<img src="/images/icons/gradients/shield.svg" width="40" height="40" alt="" />
								<h3 class="aw-info-boxes-title">Abuse Protection</h3>
								<p class="aw-info-boxes-content">
									Protect users from abuse with built-in protection.
								</p>
							</li>
							<li class="aw-info-boxes-item">
								<img src="/images/icons/gradients/database.svg" width="40" height="40" alt="" />
								<h3 class="aw-info-boxes-title">Data Migrations</h3>
								<p class="aw-info-boxes-content">
									Move data between 3rd parties, cloud or self-hosting.
								</p>
							</li>
							<li class="aw-info-boxes-item">
								<img src="/images/icons/gradients/star.svg" width="40" height="40" alt="" />
								<h3 class="aw-info-boxes-title">
									<span class="">GDPR</span>
									<span class="aw-inline-tag is-pink">Coming Soon</span>
								</h3>
								<p class="aw-info-boxes-content">
									Safeguard user data and privacy with provided GDPR regulations.
								</p>
							</li>
							<li class="aw-info-boxes-item">
								<img src="/images/icons/gradients/soc-2.svg" width="40" height="40" alt="" />
								<h3 class="aw-info-boxes-title">
									<span class="">SOC-2</span>
									<span class="aw-inline-tag is-pink">Coming Soon</span>
								</h3>
								<p class="aw-info-boxes-content">
									Ensure the highest level of security and privacy protection.
								</p>
							</li>
							<li class="aw-info-boxes-item">
								<img src="/images/icons/gradients/hipaa.svg" width="40" height="40" alt="" />
								<h3 class="aw-info-boxes-title">
									<span class="">HIPAA</span>
									<span class="aw-inline-tag is-pink">Coming Soon</span>
								</h3>
								<p class="aw-info-boxes-content">Protect sensitive user health data.</p>
							</li>
						</ul>
					</div>
					<ul class="aw-multi-columns-1 aw-u-margin-block-start-80">
						<li>
							<div
								class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical"
								style="--card-padding:2rem"
							>
								<div class="u-flex-vertical u-main-space-between u-gap-32">
									<span
										class="icon-github aw-u-font-size-40"
										aria-hidden="true"
										aria-label="GitHub"
									/>
								</div>
								<div class="aw-title u-margin-block-start-auto">125k+ Discord Members</div>
							</div>
						</li>
						<li>
							<div
								class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical"
								style="--card-padding:2rem"
							>
								<div class="u-flex-vertical u-main-space-between u-gap-32">
									<span
										class="icon-github aw-u-font-size-40"
										aria-hidden="true"
										aria-label="GitHub"
									/>
								</div>
								<div class="aw-title u-margin-block-start-auto">125k+ Discord Members</div>
							</div>
						</li>
						<li>
							<div
								class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical"
								style="--card-padding:2rem"
							>
								<div class="u-flex-vertical u-main-space-between u-gap-32">
									<span
										class="icon-github aw-u-font-size-40"
										aria-hidden="true"
										aria-label="GitHub"
									/>
								</div>
								<div class="aw-title u-margin-block-start-auto">125k+ Discord Members</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<div class="aw-hero">
						<div class="aw-display">Loved by developers</div>
					</div>

				</div>
			</div>
		</div>

		<div class="aw-big-padding-section-level-1">
			<div
				class="aw-big-padding-section-level-2 is-margin-replace-padding u-position-relative u-overflow-hidden"
			>
				<img
					class="u-position-absolute u-z-index-0"
					src="/images/bgs/diagonal-lines.png"
					alt=""
					style="width: 1450px; height:auto; left: calc(50% - 40rem);
					transform: translate(-50%);
					max-inline-size: unset; max-block-size: unset;"
				/>
				<div class="aw-container u-position-relative">
					<div class="grid-1-1">
						<section class="aw-hero is-align-start">
							<span class="aw-badges aw-eyebrow">Scale_</span>
							<h2 class="aw-display u-max-width-600 aw-u-color-text-primary">We scale for you</h2>
						</section>
						<ul class="aw-big-list-info u-margin-inline-start-auto aw-u-margin-block-start-48">
							<li class="aw-big-list-info-item">
								<div class="aw-headline aw-u-color-text-primary">12</div>
								<div class="text">Regions served</div>
							</li>
							<li class="aw-big-list-info-item">
								<div class="aw-headline aw-u-color-text-primary">900TB</div>
								<div class="text">of data served</div>
							</li>
							<li class="aw-big-list-info-item">
								<div class="aw-headline aw-u-color-text-primary">1 million</div>
								<div class="text">end users</div>
							</li>
							<li class="aw-big-list-info-item">
								<div class="aw-headline aw-u-color-text-primary">999</div>
								<div class="text">total compute time</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div
				class="aw-big-padding-section-level-2 is-margin-replace-padding u-position-relative u-overflow-hidden"
			>
				<div class="aw-container">
					<PreFooter />
					<FooterNav />
					<MainFooter />
				</div>
			</div>
		</div>
	</div>
</Main>
