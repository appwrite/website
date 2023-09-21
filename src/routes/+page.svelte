<script lang="ts">
	import { Main } from '$lib/layouts';
	import MainFooter from '../lib/components/MainFooter.svelte';
	import FooterNav from '../lib/components/FooterNav.svelte';
	import DeveloperCard from './DeveloperCard.svelte';
	import { Tabs } from '$lib/UI';
	import PreFooter from '$lib/components/PreFooter.svelte';
	import OpenSource from '$lib/animations/OpenSource.svelte';
	import Products from '$lib/animations/Products/Products.svelte';
	import ProductsMobile from '$lib/animations/Products/ProductsMobile.svelte';
	import { Spline } from '$lib/components';
</script>

<!-- <div
	class="u-position-absolute"
	style="
	width: 100vw;
	max-width: 100%; overflow: hidden;
	height: 1000px;
"
> -->
<div
	class="u-position-absolute"
	style="top: -800px; left: 50%; translate: -50%; pointer-events:none; z-index: 10"
>
	<img
		style="width:1466px; height:804px; transform:rotate(150.348deg); opacity: 0.65; filter: blur(127.5px);
		max-block-size: unset; max-inline-size: unset;"
		src="/images/bgs/top-page-dark.svg"
		alt=""
	/>
</div>

<div
	class="u-position-absolute"
	style="top: 15rem; left: 50%; translate: calc(-50% - 900px); width: 75.9375rem;"
>
	<img src="/images/bgs/hero-lines-1.png" alt="" />
</div>

<div
	class="u-position-absolute"
	style="top: 60rem; left: 50%; translate: calc(-50% + 800px); width: 60rem;"
>
	<img src="/images/bgs/hero-lines-2.png" alt="" />
</div>

<Main>
	<div class="aw-big-padding-section">
		<div class="aw-big-padding-section-level-1">
			<div class="aw-big-padding-section-level-2">
				<section class="aw-container aw-u-padding-block-end-0">
					<button class="aw-hero-banner-button aw-u-margin-block-end-24">
						<span class="aw-icon-star" aria-hidden="true" />
						<span class="aw-caption-500">New</span>
						<div class="aw-hero-banner-button-sep" />
						<span class="aw-caption-400">Intorudcing a *brand* new Appwrite</span>
						<span class="aw-icon-arrow-right" aria-hidden="true" />
					</button>
					<div class="aw-hero is-horizontal">
						<h1 class="aw-headline">
							<span class="aw-gradient-text">
								Build like a team of hundreds<span class="aw-u-color-text-accent">_</span>
							</span>
						</h1>
						<div class="u-cross-child-end">
							<p class="aw-description">
								Appwrite is the open-source development platform where you can build any application
								at any scale, using the coding languages and tools you want.
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
						<div style="aspect-ratio: 1244 / 717">
							<img
									class="u-block"
									src="/images/pages/homepage/dashboard.svg"
									alt="console dashboard"
							/>
						</div>
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
							<img src="/images/logos/trusted-by/apple.svg" alt="Apple" width="42" height="48" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/oracle.svg" alt="ORACLE" width="136" height="17" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/tiktok.svg" alt="TikTok" width="133" height="32" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/intel.svg" alt="intel" width="76" height="30" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/ibm.svg" alt="IBM" width="74" height="30" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/american-airlines.svg" alt="American Airlines" width="147" height="24" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/deloitte.svg" alt="Deloitte." width="103" height="20" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/gm.svg" alt="GM" width="48" height="48" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/ey.svg" alt="EY" width="46" height="48" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/nestle.svg" alt="Nestle" width="119" height="34" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/bosch.svg" alt="BOSCH" width="110" height="37" />
						</li>
						<li>
							<img src="/images/logos/trusted-by/decathlon.svg" alt="DECATHLON" width="127" height="32" />
						</li>
					</ul>
				</div>
			</div>
		</div>

		<Products />
		<ProductsMobile />

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
				</div>
			</div>
			<OpenSource />
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<div class="aw-hero">
						<div class="aw-display aw-u-color-text-primary">
							Loved by developers
						</div>
					</div>
					<ul class="aw-multi-columns-1 aw-u-margin-block-start-80">
						<li>
							<DeveloperCard
								name="Eldad Fux"
								tag="@eldadfux"
								icon="x"
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
									href="#">@ultrices lacus</a
								>. Duis pellentesque quis purus in posuere Duis pellentesque quis purus in posuere.
							</DeveloperCard>
						</li>
						<li>
							<DeveloperCard
								name="Eldad Fux"
								tag="@eldadfux"
								icon="x"
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
								icon="x"
								avatarSrc="/images/avatars/eldad.png"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in <a
									class="aw-link-1"
									href="#">@ultrices lacus</a
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
			<div
				class="aw-big-padding-section-level-2 is-margin-replace-padding u-position-relative u-overflow-hidden"
			>
				<Spline let:viewer let:fallback>
					<img
						class="u-position-absolute u-z-index-0"
						style="width: 1450px; height:auto; left: calc(50% - 40rem);
				transform: translate(-50%);
				max-inline-size: unset; max-block-size: unset;"
						src="/images/bgs/diagonal-lines.png"
						alt=""
						use:fallback
					/>
					<div class="u-position-absolute u-z-index-0" style="width: 50%; height:100%; left:0;">
						<div style:display="grid" style:place-items="center" style:height="100%">
							<spline-viewer
								url="https://prod.spline.design/OQpkUefWdEWkbi4d/scene.splinecode"
								use:viewer
								loading="eager"
							/>
						</div>
					</div>
				</Spline>

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
