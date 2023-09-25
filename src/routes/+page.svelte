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

<!-- <div
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
</div> -->

<Main>
	<div class="aw-big-padding-section">
		<div class="aw-big-padding-section-level-1">
			<div class="aw-big-padding-section-level-2">
				<section class="aw-container aw-u-padding-block-end-0">
					<a
						href="/blog/post/meet-the-new-appwrite"
						class="aw-hero-banner-button aw-u-margin-block-end-24"
					>
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
								<p class="aw-info-boxes-content">
									Own your data or host it on a cloud region of choice.
								</p>
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
								Been a huge supporter of Appwrite for over a year, championing it even at the
								companies I was working at. Their community is second-to-none, speed of feature
								release is exceptional, and the support in their Discord is incredible.
							</DeveloperCard>
						</li>
						<li>
							<DeveloperCard
								name="Varun Dhand"
								tag="@varundhand"
								icon="linkedin"
								avatarSrc="/images/community/avatars/varun.png"
							>
								Recently, I embarked on a journey to create a Real-Time Chat Application that would
								redefine seamless communication. Along the way, I discovered an incredible tool that
								transformed my backend game - Appwrite!
							</DeveloperCard>
						</li>
						<li>
							<DeveloperCard
								name="Kap.ts"
								tag="@Kaperskyguru"
								icon="x"
								avatarSrc="/images/community/avatars/kap.png"
							>
								Backend Engineers, you will agree with me that building the authentication process
								for your app with each new API development is a pain. Here's my secret: I let <a
									href="https://twitter.com/appwrite"
									target="_blank"
									class="aw-link-1">@appwrite</a
								> handle my authentication process while I focus on the business logic.
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
								I have used Appwrite twice, and the experience of using it was great as I got to
								build a full-stack application. I would gladly recommend it to anyone looking to
								explore an alternative database option. Appwrite is simply the best.
							</DeveloperCard>
						</li>
						<li>
							<DeveloperCard
								name="Souvik Sarkar"
								tag="@Jeet_2003"
								icon="x"
								avatarSrc="/images/community/avatars/souvik.png"
							>
								If you're looking for a backend server that is both powerful and easy to use, check
								out <a href="https://twitter.com/appwrite" target="_blank" class="aw-link-1"
									>@appwrite</a
								>. With its robust feature set and open-source nature, it's the perfect choice for
								developers who want to build secure and scalable applications.
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
								<div class="aw-box-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
									>
										<path
											d="M8.92198 28.2118L8.922 28.2118C10.1507 28.9195 11.5645 28.6104 12.8493 27.953C14.092 27.317 15.2441 26.3408 16.0517 25.5696C16.8544 26.3363 17.9799 27.3147 19.1944 27.9542C20.4507 28.6157 21.8345 28.9308 23.0553 28.225C24.279 27.5174 24.7171 26.1443 24.7903 24.7093C24.8611 23.321 24.593 21.8415 24.3308 20.7613C25.3708 20.449 26.7776 19.947 27.9426 19.2012C29.1474 18.4299 30.125 17.3767 30.125 15.9768C30.125 14.5684 29.1425 13.53 27.9276 12.7756C26.7527 12.0461 25.3306 11.5628 24.2701 11.2533C24.5276 10.1852 24.8058 8.70025 24.7466 7.30393C24.6855 5.86013 24.2613 4.47317 23.0347 3.76683C21.8134 3.06325 20.4219 3.39468 19.1605 4.06928C17.9407 4.7217 16.8108 5.71111 16.0127 6.47432C15.2146 5.71789 14.0654 4.73526 12.8247 4.08886C11.5418 3.42055 10.127 3.09492 8.90162 3.80346L8.96402 3.91137L8.90162 3.80346C7.68069 4.50944 7.27327 5.88006 7.22877 7.30936C7.18575 8.69121 7.47997 10.1634 7.74354 11.2358C6.66739 11.546 5.24137 12.0274 4.06663 12.758C2.85173 13.5137 1.875 14.556 1.875 15.9768C1.875 17.3927 2.84946 18.4623 4.06122 19.246C5.23329 20.0041 6.65512 20.5137 7.72694 20.8261C7.46292 21.9034 7.17672 23.3656 7.22867 24.7357C7.28241 26.1531 7.70034 27.5079 8.92198 28.2118ZM22.8699 10.8917C21.7528 10.6402 20.5469 10.4514 19.2875 10.3311C18.5522 9.28922 17.7916 8.33707 17.0266 7.50469C17.617 6.9384 18.5143 6.10636 19.4708 5.51396C19.9734 5.20264 20.486 4.96166 20.9736 4.85801C21.4596 4.75472 21.9141 4.78898 22.3126 5.0185C22.7152 5.25049 22.9782 5.63297 23.1382 6.11348C23.2986 6.59536 23.3529 7.16894 23.3412 7.76782C23.3189 8.90605 23.0592 10.1091 22.8699 10.8917ZM18.6253 15.9768C18.6253 14.5284 17.4499 13.3544 16 13.3544C14.5503 13.3544 13.3747 14.5284 13.3747 15.9768C13.3747 17.4254 14.5503 18.5994 16 18.5994C17.4499 18.5994 18.6253 17.4254 18.6253 15.9768ZM26.8876 18.214C25.9174 18.7547 24.7583 19.1259 23.937 19.3712C23.5898 18.2948 23.1309 17.156 22.5754 15.9822C23.1053 14.8364 23.546 13.7135 23.8828 12.6454C24.6694 12.8748 25.8391 13.2351 26.8305 13.7663C27.3514 14.0454 27.8162 14.3682 28.1495 14.7381C28.4817 15.1068 28.6789 15.5171 28.6789 15.9768C28.6789 16.909 27.9138 17.6421 26.8876 18.214ZM22.3307 26.9745C21.5278 27.4388 20.5063 27.1263 19.4985 26.5098C18.548 25.9284 17.6559 25.1045 17.0591 24.5334C17.8135 23.6998 18.5661 22.7407 19.3011 21.6817C20.5916 21.5651 21.8146 21.3792 22.9318 21.1278C23.1191 21.9007 23.3684 23.096 23.3807 24.2288C23.3871 24.8252 23.3277 25.3973 23.1634 25.8785C22.9995 26.3584 22.7339 26.7414 22.3307 26.9745ZM9.64443 26.96C8.84154 26.4976 8.60218 25.4573 8.63323 24.2771C8.66252 23.164 8.93125 21.9805 9.12897 21.1801C10.2343 21.4178 11.4489 21.5906 12.7421 21.6975C13.4829 22.735 14.2571 23.6926 15.0385 24.5388C14.5161 25.0368 13.6021 25.8496 12.6098 26.442C12.0843 26.7557 11.5429 27.0039 11.0305 27.1132C10.519 27.2223 10.046 27.1913 9.64443 26.96ZM3.32106 15.9768C3.32106 15.043 4.11274 14.3119 5.1638 13.7472C6.1554 13.2144 7.32989 12.8557 8.1319 12.6272C8.47415 13.7193 8.91507 14.8566 9.44226 16.006C8.90799 17.1729 8.46065 18.3286 8.11501 19.4343C7.34739 19.2106 6.17941 18.8269 5.18533 18.2682C4.66222 17.9742 4.19351 17.6351 3.8568 17.2505C3.52098 16.867 3.32106 16.4439 3.32106 15.9768ZM9.62602 5.05393C10.0286 4.82114 10.4918 4.78455 10.9885 4.88609C11.4866 4.98792 12.0112 5.22748 12.5247 5.53684C13.5006 6.12478 14.4142 6.95072 14.9993 7.5056C14.2222 8.34773 13.4552 9.29813 12.721 10.3294C11.4649 10.4479 10.2598 10.6335 9.14506 10.8799C8.9303 10.0158 8.65051 8.81934 8.61654 7.70901C8.5807 6.53753 8.81984 5.52005 9.62602 5.05393ZM20.3358 11.9057C21.0816 12.0068 21.7994 12.1339 22.4802 12.285C22.2716 12.9382 22.0208 13.6165 21.7313 14.3106C21.2937 13.4936 20.8293 12.6907 20.3358 11.9057ZM14.6138 10.2037C15.0738 9.60925 15.5423 9.05201 16.0132 8.53853C16.4771 9.04701 16.9417 9.60491 17.4007 10.2044C16.4721 10.1676 15.5424 10.1674 14.6138 10.2037ZM11.6659 11.9032C11.1722 12.6855 10.7094 13.4872 10.2787 14.3058C9.99426 13.6142 9.74599 12.9338 9.53645 12.273C10.2124 12.126 10.9257 12.0022 11.6659 11.9032ZM10.2802 17.7046C10.7185 18.5346 11.19 19.347 11.693 20.1395C10.927 20.0472 10.1999 19.9292 9.52015 19.786C9.73386 19.1109 9.98846 18.4136 10.2802 17.7046ZM17.4336 21.8001C16.9722 22.4151 16.5079 22.9834 16.0455 23.4987C15.5675 22.9774 15.0908 22.41 14.6224 21.8048C15.559 21.8356 16.4969 21.8353 17.4336 21.8001ZM21.745 17.6571C22.0525 18.374 22.3169 19.0695 22.5348 19.7359C21.8425 19.889 21.1039 20.0162 20.3297 20.116C20.8297 19.3133 21.3031 18.4936 21.745 17.6571ZM20.9713 15.9891C20.2439 17.4776 19.4111 18.9164 18.4941 20.297C16.8444 20.4119 15.1845 20.4108 13.5337 20.3064C12.5984 18.9365 11.7639 17.4979 11.0407 16.0055C11.7604 14.516 12.589 13.08 13.5199 11.7123C15.1717 11.5905 16.8331 11.5902 18.4848 11.713C19.4075 13.0804 20.2351 14.5125 20.9713 15.9891Z"
											fill="#D8D8DB"
											stroke="#D8D8DB"
											stroke-width="0.25"
										/>
									</svg>
								</div>
							</li>
							<li>
								<div class="aw-box-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
									>
										<path
											d="M17.6263 25.3334H27.5394C27.8543 25.3334 28.1636 25.2472 28.4362 25.0834C28.7089 24.9195 28.9353 24.6838 29.0927 24.4001C29.25 24.1162 29.3328 23.7943 29.3327 23.4667C29.3325 23.139 29.2495 22.8172 29.0919 22.5335L22.4345 10.5335C22.2772 10.2498 22.0508 10.0141 21.7782 9.85032C21.5056 9.68652 21.1963 9.60025 20.8815 9.60025C20.5667 9.60025 20.2575 9.68652 19.9849 9.85032C19.7122 10.0141 19.4859 10.2498 19.3285 10.5335L17.6263 13.6039L14.298 7.59986C14.1406 7.31616 13.9141 7.08056 13.6414 6.91676C13.3687 6.75299 13.0594 6.66675 12.7446 6.66675C12.4297 6.66675 12.1204 6.75299 11.8477 6.91676C11.575 7.08056 11.3486 7.31616 11.1911 7.59986L2.9068 22.5335C2.7492 22.8172 2.66615 23.139 2.66602 23.4667C2.66588 23.7943 2.74866 24.1162 2.90602 24.4001C3.06338 24.6838 3.28979 24.9195 3.56246 25.0834C3.83513 25.2472 4.14445 25.3334 4.45932 25.3334H10.682C13.1474 25.3334 14.9656 24.2064 16.2167 22.0077L19.2541 16.5335L20.881 13.6039L25.7637 22.4038H19.2541L17.6263 25.3334ZM10.5805 22.4008L6.2379 22.3998L12.7475 10.6672L15.9955 16.5335L13.8208 20.4544C12.99 21.881 12.0461 22.4008 10.5805 22.4008Z"
											fill="#D8D8DB"
										/>
									</svg>
								</div>
							</li>
							<li>
								<div class="aw-box-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="25"
										height="22"
										viewBox="0 0 25 22"
										fill="none"
									>
										<path
											d="M0 0.333252L12.4444 21.6666L24.8889 0.333252H20L12.4444 13.2221L4.88889 0.333252H0Z"
											fill="#D8D8DB"
										/>
										<path
											d="M4.88867 0.333252L12.4442 13.2221L19.9998 0.333252H15.5553L12.5022 5.6778L9.33312 0.333252H4.88867Z"
											fill="#C3C3C6"
										/>
									</svg>
								</div>
							</li>
							<li>
								<div class="aw-box-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
									>
										<path
											d="M15.1261 2.67392C15.0688 2.67914 14.8863 2.69738 14.7221 2.71041C10.9345 3.05184 7.38677 5.0952 5.13979 8.23583C3.88856 9.98207 3.0883 11.9629 2.78592 14.061C2.67905 14.7934 2.66602 15.0097 2.66602 16.0027C2.66602 16.9957 2.67905 17.212 2.78592 17.9444C3.51059 22.9512 7.07397 27.1578 11.9068 28.7164C12.7722 28.9952 13.6846 29.1855 14.7221 29.3002C15.1261 29.3445 16.8726 29.3445 17.2766 29.3002C19.0674 29.1021 20.5846 28.659 22.0808 27.8954C22.3102 27.7781 22.3545 27.7468 22.3232 27.7207C22.3024 27.7051 21.3249 26.3941 20.1518 24.8095L18.0196 21.9295L15.3477 17.9757C13.8775 15.802 12.668 14.0245 12.6575 14.0245C12.6471 14.0219 12.6367 15.7785 12.6315 17.9236C12.6237 21.6793 12.6211 21.8304 12.5741 21.9191C12.5064 22.0468 12.4542 22.0989 12.3447 22.1562C12.2613 22.1979 12.1883 22.2058 11.7947 22.2058H11.3438L11.2239 22.1302C11.1457 22.0807 11.0883 22.0155 11.0492 21.9399L10.9945 21.8226L10.9997 16.5969L11.0075 11.3686L11.0883 11.267C11.13 11.2123 11.2186 11.1419 11.2812 11.108C11.3881 11.0559 11.4298 11.0507 11.8807 11.0507C12.4125 11.0507 12.5011 11.0715 12.6393 11.2227C12.6784 11.2644 14.1251 13.4433 15.856 16.0679C17.5868 18.6924 19.9537 22.2761 21.1163 24.0354L23.2278 27.2334L23.3346 27.163C24.2809 26.5479 25.2819 25.6722 26.0743 24.76C27.7608 22.8235 28.8478 20.4621 29.2128 17.9444C29.3197 17.212 29.3327 16.9957 29.3327 16.0027C29.3327 15.0097 29.3197 14.7934 29.2128 14.061C28.4881 9.05422 24.9247 4.8476 20.0919 3.28902C19.2395 3.01275 18.3324 2.82248 17.3157 2.70781C17.0655 2.68174 15.3425 2.65307 15.1261 2.67392ZM20.5846 10.7379C20.7097 10.8005 20.8113 10.9204 20.8478 11.0455C20.8687 11.1132 20.8739 12.5623 20.8687 15.8281L20.8609 20.5142L20.0345 19.2476L19.2056 17.9809V14.5744C19.2056 12.3721 19.216 11.1341 19.2317 11.0741C19.2734 10.9282 19.3646 10.8135 19.4897 10.7457C19.5966 10.691 19.6357 10.6858 20.045 10.6858C20.4308 10.6858 20.4985 10.691 20.5846 10.7379Z"
											fill="#D8D8DB"
										/>
									</svg>
								</div>
							</li>
							<li>
								<div class="aw-box-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="23"
										height="25"
										viewBox="0 0 23 25"
										fill="none"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0 4.35897L11.3333 0L22.6667 4.35897L20.9231 19.1795L11.3333 24.4103L1.74359 19.1795L0 4.35897ZM4.24886 18.6251L11.3337 2.69743L18.3942 18.6251H15.7526L14.3283 15.0612H8.31474L6.89046 18.6251H4.24886ZM11.3337 7.8724L9.26426 12.8643H13.4032L11.3337 7.8724Z"
											fill="#D8D8DB"
										/>
									</svg>
								</div>
							</li>
							<li>
								<div class="aw-box-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
									>
										<path
											d="M5.33398 16L9.20495 19.7895L25.334 4H17.592L5.33398 16ZM25.334 15.3684H17.592L11.1404 21.6842L17.592 28H25.334L18.8824 21.6842L25.334 15.3684Z"
											fill="#D8D8DB"
										/>
									</svg>
								</div>
							</li>
							<li>
								<div class="aw-box-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
									>
										<path
											d="M26.1916 23.4482C25.7847 24.3798 25.3029 25.2374 24.7448 26.0259C23.9841 27.1007 23.3612 27.8448 22.8811 28.2579C22.137 28.9361 21.3397 29.2834 20.4859 29.3031C19.873 29.3031 19.1338 29.1303 18.2734 28.7797C17.4101 28.4307 16.6168 28.2579 15.8914 28.2579C15.1307 28.2579 14.3148 28.4307 13.4421 28.7797C12.568 29.1303 11.8639 29.313 11.3256 29.3311C10.5068 29.3657 9.69075 29.0085 8.87617 28.2579C8.35627 27.8085 7.70597 27.0382 6.92693 25.9469C6.09109 24.7815 5.40392 23.4301 4.86557 21.8894C4.28902 20.2252 4 18.6138 4 17.0536C4 15.2665 4.38968 13.7252 5.17021 12.4335C5.78363 11.396 6.59971 10.5776 7.62109 9.97682C8.64246 9.37601 9.74607 9.06985 10.9345 9.05026C11.5848 9.05026 12.4376 9.2496 13.4974 9.64136C14.5541 10.0344 15.2327 10.2338 15.5302 10.2338C15.7526 10.2338 16.5064 10.0007 17.7842 9.53601C18.9926 9.10507 20.0125 8.92664 20.848 8.99693C23.112 9.17799 24.8129 10.0624 25.9441 11.6558C23.9193 12.8715 22.9177 14.5744 22.9376 16.7588C22.9559 18.4603 23.5788 19.8763 24.803 21.0005C25.3578 21.5223 25.9773 21.9256 26.6667 22.212C26.5172 22.6416 26.3594 23.0531 26.1916 23.4482ZM20.9992 3.20023C20.9992 4.53387 20.5075 5.77908 19.5275 6.93164C18.3448 8.30181 16.9143 9.09355 15.3631 8.96862C15.3433 8.80862 15.3318 8.64023 15.3318 8.46328C15.3318 7.18299 15.8943 5.81283 16.8931 4.69253C17.3917 4.12531 18.0259 3.65367 18.795 3.27743C19.5624 2.90681 20.2882 2.70185 20.9709 2.66675C20.9909 2.84503 20.9992 3.02333 20.9992 3.20022V3.20023Z"
											fill="#D8D8DB"
										/>
									</svg>
								</div>
							</li>
							<li>
								<div class="aw-box-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="26"
										height="15"
										viewBox="0 0 26 15"
										fill="none"
									>
										<path
											d="M18.8469 4.61348L20.9484 0.97317C21.067 0.769093 20.9953 0.509856 20.7939 0.391269C20.5926 0.272685 20.3306 0.341628 20.2148 0.545706L18.0858 4.2329C16.4614 3.49105 14.633 3.07737 12.6667 3.07737C10.7003 3.07737 8.8719 3.49105 7.24754 4.2329L5.11851 0.545706C4.99992 0.341628 4.74068 0.272685 4.53661 0.391269C4.33253 0.509856 4.26358 0.769093 4.38217 0.97317L6.48362 4.61348C2.85985 6.57705 0.40539 10.2449 0 14.5388H25.3333C24.9279 10.2449 22.4734 6.57702 18.8469 4.61348ZM6.85042 10.9813C6.263 10.9813 5.78866 10.5042 5.78866 9.91952C5.78866 9.3321 6.26576 8.85776 6.85042 8.85776C7.43783 8.85776 7.91217 9.33486 7.91217 9.91952C7.91494 10.5042 7.43783 10.9813 6.85042 10.9813ZM18.4802 10.9813C17.8927 10.9813 17.4184 10.5042 17.4184 9.91952C17.4184 9.3321 17.8955 8.85776 18.4802 8.85776C19.0676 8.85776 19.5419 9.33486 19.5419 9.91952C19.5447 10.5042 19.0676 10.9813 18.4802 10.9813Z"
											fill="#D8D8DB"
										/>
									</svg>
								</div>
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
					<div
						class="u-position-absolute u-z-index-0 aw-is-not-mobile"
						style="width: 50%; height:100%; left:0;"
					>
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
							<h2 class="aw-display u-max-width-600 aw-u-color-text-primary">
								We scale for you and your users
							</h2>
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
