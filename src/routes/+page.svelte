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
					<a href="/blog/post/meet-the-new-appwrite" class="aw-hero-banner-button aw-u-margin-block-end-24">
						<span class="aw-icon-star" aria-hidden="true" />
						<span class="aw-caption-500">New</span>
						<div class="aw-hero-banner-button-sep" />
						<span class="aw-caption-400">Intorudcing a *brand* new Appwrite</span>
						<span class="aw-icon-arrow-right" aria-hidden="true" />
					</a>
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
							<a
								href="https://cloud.appwrite.io"
								class="aw-button is-full-width-mobile u-margin-block-start-32"
							>
								<span class="text">Get Started</span>
							</a>
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
								src="/images/pages/homepage/dashboard.png"
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
							<img
								src="/images/logos/trusted-by/american-airlines.svg"
								alt="American Airlines"
								width="147"
								height="24"
							/>
						</li>
						<li>
							<img
								src="/images/logos/trusted-by/deloitte.svg"
								alt="Deloitte."
								width="103"
								height="20"
							/>
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
							<img
								src="/images/logos/trusted-by/decathlon.svg"
								alt="DECATHLON"
								width="127"
								height="32"
							/>
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
						<h2 class="aw-display aw-u-color-text-primary u-max-width-700">
							Self-host your data or take it to the Cloud
						</h2>
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
								<p class="aw-info-boxes-content">Own your data or host it on a cloud region of choice.</p>
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
								<h3 class="aw-info-boxes-title">Abuse protection</h3>
								<p class="aw-info-boxes-content">
									Protect your APIs from abuse with built-in protection.
								</p>
							</li>
							<li class="aw-info-boxes-item">
								<img src="/images/icons/gradients/database.svg" width="40" height="40" alt="" />
								<h3 class="aw-info-boxes-title">Data migrations</h3>
								<p class="aw-info-boxes-content">
									Easily transfer data from 3rd parties or between Cloud and self-hosted.
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
						<div class="aw-display aw-u-color-text-primary">Loved by developers</div>
					</div>
					<ul class="aw-multi-columns-1 aw-u-margin-block-start-80">
						<li>
							<DeveloperCard
								name="Terry Lennon"
								tag="@terry_lennon"
								icon="product-hunt"
								avatarSrc="/images/community/avatars/terry.png"
							>
							Been a huge supporter of Appwrite for over a year, championing
							it even at the companies I was working at. Their community is second-to-none,
							speed of feature release is exceptional, and the support in their Discord is incredible.
							</DeveloperCard>
						</li>
						<li>
							<DeveloperCard
								name="Varun Dhand"
								tag="@varundhand"
								icon="linkedin"
								avatarSrc="/images/community/avatars/varun.png"
							>
								Recently, I embarked on a journey to create a Real-Time Chat Application that would redefine seamless communication. Along the way, I discovered an incredible tool that transformed my backend game - Appwrite!
							</DeveloperCard>
						</li>
						<li>
							<DeveloperCard
								name="Kap.ts"
								tag="@Kaperskyguru"
								icon="x"
								avatarSrc="/images/community/avatars/kap.png"
							>
							Backend Engineers, you will agree with me that building the authentication process for your app with each new API development is a pain. Here's my secret: I let <a href="https://twitter.com/appwrite" target="_blank" class="aw-link-1">@appwrite</a> handle my authentication process while I focus on the business logic.
							</DeveloperCard>
						</li>
						<li>
							<DeveloperCard
								name="Stephen Simon"
								tag="@codewithsimon"
								icon="product-hunt"
								avatarSrc="/images/community/avatars/stephen.png"
							>
								Absolutely in love with Appwrite and the commitment to the community!
							</DeveloperCard>
						</li>
						<li>
							<DeveloperCard
								name="Teri"
								tag="@terieyenike"
								icon="product-hunt"
								avatarSrc="/images/community/avatars/terieyenike.png"
							>
							I have used Appwrite twice, and the experience of using it was great as I got to build a full-stack application. I would gladly recommend it to anyone looking to explore an alternative database option. Appwrite is simply the best.
							</DeveloperCard>
						</li>
						<li>
							<DeveloperCard
								name="Souvik Sarkar"
								tag="@Jeet_2003"
								icon="x"
								avatarSrc="/images/community/avatars/souvik.png"
							>
							If you're looking for a backend server that is both powerful and easy to use, check out <a href="https://twitter.com/appwrite" target="_blank" class="aw-link-1">@appwrite</a>. With its robust feature set and open-source nature, it's the perfect choice for developers who want to build secure and scalable applications.
						</DeveloperCard>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="aw-big-padding-section-level-1 u-position-relative u-overflow-hidden">
			<Spline let:fallback let:viewer>
				<div
					class="u-position-absolute aw-is-not-mobile"
					style="inline-size:512px; block-size: 512px; inset-block-start:6rem; inset-inline-start:calc(100% - 500px)"
				>
					<img
						src="/images/animations/tech.png"
						width="512"
						height="512"
						alt=""
						style="position: absolute; display: block;"
						use:fallback
					/>
		
					<spline-viewer
						url="https://prod.spline.design/KvoQWZAi5foGUXxJ/scene.splinecode"
						use:viewer
					/>
				</div>
			</Spline>
			<div class="aw-big-padding-section-level-2 is-margin-replace-padding">
				<div class="aw-container u-position-relative">
					<section class="aw-hero is-align-start">
						<span class="aw-badges aw-eyebrow">SDKs_</span>
						<h2 class="aw-display aw-u-color-text-primary u-max-width-600">
							Code the way you want
						</h2>
						<p class="aw-description u-max-width-600">
							We support many SDKs making Appwrite flexible to your needs and ensuring you can code
							with the language you want at any time.
						</p>
						<ul
							class="u-flex u-flex-wrap u-gap-16 aw-u-margin-block-32-mobile aw-u-margin-block-40-not-mobile"
						>
							<li>
								<a href="/docs/quick-starts/flutter" class="aw-box-icon">
									<img src="/images/platforms/dark/flutter.svg" alt="Flutter logo" class="u-only-dark" width="32" height="32" />
									<img src="/images/platforms/flutter.svg" alt="Flutter logo" class="u-only-light" width="32" height="32" />
								</a>
							</li>
							<li>
								<a href="/docs/quick-starts/nextjs" class="aw-box-icon">
									<img src="/images/platforms/dark/nextjs.svg" alt="Next.js logo" class="u-only-dark" width="32" height="32" />
									<img src="/images/platforms/nextjs.svg" alt="Next.js logo" class="u-only-light" width="32" height="32" />
								</a>
							</li>
							<li>
								<a href="/docs/quick-starts/react" class="aw-box-icon">
									<img src="/images/platforms/dark/react.svg" alt="React logo" class="u-only-dark" width="32" height="32" />
									<img src="/images/platforms/react.svg" alt="React logo" class="u-only-light" width="32" height="32" />
								</a>
							</li>
							<li>
								<a href="/docs/quick-starts/sveltekit" class="aw-box-icon">
									<img src="/images/platforms/dark/svelte.svg" alt="Svelte logo" class="u-only-dark" width="32" height="32" />
									<img src="/images/platforms/svelte.svg" alt="Svelte logo" class="u-only-light" width="32" height="32" />
								</a>
							</li>
							<li>
								<a href="/docs/quick-starts/nuxt" class="aw-box-icon">
									<img src="/images/platforms/dark/nuxt.svg" alt="Nuxt logo" class="u-only-dark" width="32" height="32" />
									<img src="/images/platforms/nuxt.svg" alt="Nuxt logo" class="u-only-light" width="32" height="32" />
								</a>
							</li>
							<li>
								<a href="/docs/quick-starts/vue" class="aw-box-icon">
									<img src="/images/platforms/dark/vue.svg" alt="Vue logo" class="u-only-dark" width="32" height="32" />
									<img src="/images/platforms/vue.svg" alt="Vue logo" class="u-only-light" width="32" height="32" />
								</a>
							</li>
							<li>
								<a href="/docs/quick-starts/angular" class="aw-box-icon">
									<img src="/images/platforms/dark/angular.svg" alt="Angular logo" class="u-only-dark" width="32" height="32" />
									<img src="/images/platforms/angular.svg" alt="Angular logo" class="u-only-light" width="32" height="32" />
								</a>
							</li>
							<li>
								<a href="/docs/quick-starts/apple" class="aw-box-icon">
									<img src="/images/platforms/dark/apple.svg" alt="Apple logo" class="u-only-dark" width="32" height="32" />
									<img src="/images/platforms/apple.svg" alt="Apple logo" class="u-only-light" width="32" height="32" />
								</a>
							</li>
							<li>
								<a href="/docs/quick-starts/android" class="aw-box-icon">
									<img src="/images/platforms/dark/android.svg" alt="Android logo" class="u-only-dark" width="32" height="32" />
									<img src="/images/platforms/android.svg" alt="Android logo" class="u-only-light" width="32" height="32" />
								</a>
							</li>
						</ul>
						<a href="/docs/sdks" class="aw-button is-secondary" style:align-self="start">
							<span class="aw-sub-body-500">Explore all SDKs</span>
						</a>
					</section>
				</div>
			</div>
			<div class="aw-big-padding-section-level-2 u-position-relative u-overflow-hidden">
				<Spline let:viewer let:fallback>
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
							<h2 class="aw-display u-max-width-600 aw-u-color-text-primary">We scale for you and your users</h2>
						</section>
						<ul
							class="aw-big-list-info u-margin-inline-start-auto aw-u-inline-width-100-percent-mobile-break1 aw-u-margin-block-start-48"
						>
							<li class="aw-big-list-info-item">
								<div class="aw-headline aw-u-color-text-primary">90K</div>
								<div class="text">Projects</div>
							</li>
							<li class="aw-big-list-info-item">
								<div class="aw-headline aw-u-color-text-primary">+1B</div>
								<div class="text">Requests served</div>
							</li>
							<li class="aw-big-list-info-item">
								<div class="aw-headline aw-u-color-text-primary">20K</div>
								<div class="text">Organizations</div>
							</li>
							<li class="aw-big-list-info-item">
								<div class="aw-headline aw-u-color-text-primary">99.99%</div>
								<div class="text">Guaranteed uptime</div>
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

<style lang="scss">
</style>
