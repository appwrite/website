<script lang="ts">
	import { Homepage } from '$lib/layouts';
	import MainFooter from '../lib/components/MainFooter.svelte';
	import FooterNav from '../lib/components/FooterNav.svelte';
	import DeveloperCard from './DeveloperCard.svelte';
	import { Tabs } from '$lib/UI';
</script>

<div class="u-position-absolute" style="margin-block-start:-36%; pointer-events:none; z-index: 10">
	<img
		style="width:1466px; height:804px; transform:rotate(150.348deg); opacity: 0.65; filter: blur(127.5px);"
		src="/images/bgs/top-page-dark.svg"
		alt=""
	/>
</div>

<div
	class="u-position-absolute"
	style="margin-block-start: 4.5rem; left: -40rem; width: 75.9375rem;"
>
	<img src="/images/bgs/hero-lines-1.png" alt="" />
</div>

<Homepage>
	<div class="aw-big-padding-section">
		<div class="aw-big-padding-section-level-1">
			<div class="aw-big-padding-section-level-2">
				<section class="aw-container aw-u-padding-block-end-0">
					<div class="aw-hero is-horizontal">
						<h1 class="aw-headline">
							<span class="aw-gradient-text">
								Build like a team of hundreds<span class="aw-u-color-text-accent">_</span>
							</span>
						</h1>
						<div class="u-cross-child-end">
							<p class="aw-description">
								Appwrite is the open-source development platform where developers can build any
								application at any scale, using the language they want.
							</p>
							<button class="aw-button is-full-width-mobile u-margin-block-start-32">
								<span class="text">Get Started</span>
							</button>
						</div>
					</div>
				</section>
			</div>
			<div class="aw-big-padding-section-level-2">
				<section class="aw-container aw-u-padding-block-0" style="--container-size:78.75rem">
					<div class="aw-media-container">
						<img
							class="u-block"
							src="/images/pages/homepage/dashboard.svg"
							alt="console dashboard"
						/>
					</div>
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
					<ul class="aw-multi-columns-1 aw-u-margin-block-start-80">
						<li>
							<DeveloperCard
								name="Eldad Fux"
								tag="@eldadfux"
								icon="twitter"
								avatarSrc="/images/avatars/eldad.png"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices lacus.
								Duis pellentesque quis purus in posuere.
							</DeveloperCard>
						</li>
						<li>
							<DeveloperCard
								name="Eldad Fux"
								tag="@eldadfux"
								icon="discord"
								avatarSrc="/images/avatars/eldad.png"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in <a
									class="aw-link-1"
									href=".">@ultrices lacus</a
								>. Duis pellentesque quis purus in posuere Duis pellentesque quis purus in posuere.
							</DeveloperCard>
						</li>
						<li>
							<DeveloperCard
								name="Eldad Fux"
								tag="@eldadfux"
								icon="twitter"
								avatarSrc="/images/avatars/eldad.png"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices lacus.
								Duis pellentesque quis purus in posuere.
							</DeveloperCard>
						</li>
						<li>
							<DeveloperCard
								name="Eldad Fux"
								tag="@eldadfux"
								icon="linkedin"
								avatarSrc="/images/avatars/eldad.png"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices lacus.
								Duis pellentesque quis purus in posuere.
							</DeveloperCard>
						</li>
						<li>
							<DeveloperCard
								name="Eldad Fux"
								tag="@eldadfux"
								icon="twitter"
								avatarSrc="/images/avatars/eldad.png"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in <a
									class="aw-link-1"
									href=".">@ultrices lacus</a
								>. Duis pellentesque quis purus in posuere Duis pellentesque quis purus in posuere.
							</DeveloperCard>
						</li>
						<li>
							<DeveloperCard
								name="Eldad Fux"
								tag="@eldadfux"
								icon="linkedin"
								avatarSrc="/images/avatars/eldad.png"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices lacus.
								Duis pellentesque quis purus in posuere.
							</DeveloperCard>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="aw-big-padding-section-level-1">
			<div class="aw-big-padding-section-level-2">
				<div class="u-position-relative">
					<img
						class="u-position-absolute u-z-index-0"
						src="/images/bgs/diagonal-lines.png"
						alt=""
					/>
					<div class="aw-container u-position-relative">
						<div class="grid-1-1">
							<section class="aw-hero is-align-start">
								<span class="aw-badges aw-eyebrow">Scale_</span>
								<h2 class="aw-display u-max-width-600">We scale for you</h2>
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
			</div>
			<div class="aw-big-padding-section-level-2 is-margin-replace-padding u-position-relative">
				<img
					src="/images/bgs/footer-1.svg"
					alt=""
					class="u-position-absolute"
					style="inset:0; inline-size:100%; max-block-size:100%;"
				/>
				<div class="aw-container u-position-relative">
					<div class="aw-grid-1-1 u-gap-32 aw-u-row-gap-80">
						<section class="aw-hero u-flex aw-u-row-gap-32 u-main-center u-cross-center">
							<h2 class="aw-display u-max-width-600 aw-u-text-align-center">
								Start building with Appwrite today
							</h2>
							<button class="aw-button is-transparent aw-u-cross-child-center">
								<span class="text">Get Started</span>
							</button>
						</section>
						<section
							class="aw-card is-transparent has-border-gradient aw-u-max-inline-width-584-mobile aw-u-margin-inline-auto-mobile aw-u-inline-width-100-percent-mobile"
						>
							<Tabs let:TabsList let:TabContent tabs={['Cloud', 'Self-Hosted']}>
								<header class="aw-strip-plans-header">
									<div class="aw-strip-plans-header-wrapper aw-u-row-gap-24">
										<h3 class="aw-title">Our Plans</h3>
										<TabsList />
									</div>
								</header>
								<TabContent tab="Cloud">
									<ul class="aw-strip-plans">
										<li class="aw-strip-plans-item aw-strip-plans-container-query">
											<div class="aw-strip-plans-item-wrapper">
												<div class="aw-strip-plans-plan">
													<h4 class="title aw-description">Free</h4>
													<div class="aw-title aw-u-color-text-primary">$0</div>
													<div class="info aw-caption-500" />
												</div>
												<p class="aw-strip-plans-info aw-caption-500">
													For personal, passion projects and non-commercial use.
												</p>
												<button class="aw-button is-full-width-mobile aw-u-cross-child-end"
													><span class="text">Get Started</span></button
												>
											</div>
										</li>
										<li class="aw-strip-plans-item aw-strip-plans-container-query">
											<div class="aw-strip-plans-item-wrapper">
												<div class="aw-strip-plans-plan">
													<h4 class="title aw-description">Pro</h4>
													<div class="aw-title aw-u-color-text-primary">$15</div>
													<div class="info aw-caption-500">per user/month</div>
												</div>
												<p class="aw-strip-plans-info aw-caption-500">
													For pro developers and production projects that need the ability to scale.
												</p>
												<button
													class="aw-button is-full-width-mobile is-secondary aw-u-cross-child-end"
													><span class="text">Learn More</span></button
												>
											</div>
										</li>
										<li class="aw-strip-plans-item aw-strip-plans-container-query">
											<div class="aw-strip-plans-item-wrapper">
												<div class="aw-strip-plans-plan">
													<h4 class="title aw-description">Scale</h4>
													<div class="aw-title aw-u-color-text-primary">$685</div>
													<div class="info aw-caption-500">per org/month</div>
												</div>
												<p class="aw-strip-plans-info aw-caption-500">
													For pro developers and production projects that need the ability to scale.
												</p>
												<button
													class="aw-button is-full-width-mobile is-secondary aw-u-cross-child-end"
													><span class="text">Learn More</span></button
												>
											</div>
										</li>
									</ul>
								</TabContent>
								<TabContent tab="Self-Hosted">
									<ul class="aw-strip-plans">
										<li class="aw-strip-plans-item aw-strip-plans-container-query">
											<div class="aw-strip-plans-item-wrapper">
												<div class="aw-strip-plans-plan">
													<h4 class="title aw-description">Free</h4>
													<div class="aw-title aw-u-color-text-primary">$0</div>
													<div class="info aw-caption-500" />
												</div>
												<p class="aw-strip-plans-info aw-caption-500">
													For personal, passion projects and non-commercial use.
												</p>
												<button class="aw-button is-full-width-mobile aw-u-cross-child-end"
													><span class="text">Get Started</span></button
												>
											</div>
										</li>
										<li class="aw-strip-plans-item aw-strip-plans-container-query">
											<div class="aw-strip-plans-item-wrapper">
												<div class="aw-strip-plans-plan">
													<h4 class="title aw-description">Free</h4>
													<div class="aw-title aw-u-color-text-primary">$0</div>
													<div class="info aw-caption-500" />
												</div>
												<p class="aw-strip-plans-info aw-caption-500">
													For personal, passion projects and non-commercial use.
												</p>
												<button class="aw-button is-full-width-mobile aw-u-cross-child-end"
													><span class="text">Get Started</span></button
												>
											</div>
										</li>
										<li class="aw-strip-plans-item aw-strip-plans-container-query">
											<div class="aw-strip-plans-item-wrapper">
												<div class="aw-strip-plans-plan">
													<h4 class="title aw-description">Free</h4>
													<div class="aw-title aw-u-color-text-primary">$0</div>
													<div class="info aw-caption-500" />
												</div>
												<p class="aw-strip-plans-info aw-caption-500">
													For personal, passion projects and non-commercial use.
												</p>
												<button class="aw-button is-full-width-mobile aw-u-cross-child-end"
													><span class="text">Get Started</span></button
												>
											</div>
										</li>
									</ul>
								</TabContent>
							</Tabs>
						</section>
					</div>

					<FooterNav />
					<MainFooter />
				</div>
			</div>
		</div>
	</div>
</Homepage>
