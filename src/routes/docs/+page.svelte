<script lang="ts">
	import { Spline } from '$lib/components';
	import { Carousel } from '$lib/components';
	import Technologies from '$lib/components/Technologies.svelte';
	import Docs from '$lib/layouts/Docs.svelte';
	import MainFooter from '../../lib/components/MainFooter.svelte';
	import Sidebar from './Sidebar.svelte';
	import { DEFAULT_HOST } from '$lib/utils/metadata';
	import { TITLE_SUFFIX } from '$routes/titles';

	const title = 'Docs' + TITLE_SUFFIX;
	const description = '';
	const ogImage = DEFAULT_HOST + '/images/open-graph/docs.png';
</script>

<svelte:head>
	<!-- Titles -->
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="”twitter:title”" content={title} />
	<!-- Desscription -->
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="”twitter:description" content={description} />
	<!-- Image -->
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Docs variant="default">
	<Sidebar />
	<div class="u-position-absolute u-inset-inline-end-0 aw-u-opacity-40-mobile" style="">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="395"
			height="645"
			viewBox="0 0 395 645"
			fill="none"
		>
			<g opacity="0.6">
				<g opacity="0.3" filter="url(#filter0_f_2588_70942)">
					<path
						d="M490.888 119.115C582.97 188.753 601.165 319.853 531.527 411.935C461.89 504.018 330.79 522.213 238.707 452.575C193.573 418.442 360.66 328.3 347.404 265.83C333.616 200.849 118.572 216.378 154.076 169.43C223.714 77.3477 398.805 49.4778 490.888 119.115Z"
						fill="url(#paint0_radial_2588_70942)"
					/>
				</g>
				<g opacity="0.2" filter="url(#filter1_f_2588_70942)">
					<ellipse
						cx="427.577"
						cy="248.547"
						rx="119.581"
						ry="41.5954"
						transform="rotate(-74.0791 427.577 248.547)"
						fill="url(#paint1_radial_2588_70942)"
					/>
				</g>
				<g opacity="0.2" filter="url(#filter2_f_2588_70942)">
					<ellipse
						cx="413.058"
						cy="184.027"
						rx="98.4768"
						ry="40.0587"
						transform="rotate(170.022 413.058 184.027)"
						fill="url(#paint2_radial_2588_70942)"
					/>
				</g>
			</g>
			<defs>
				<filter
					id="filter0_f_2588_70942"
					x="0.97641"
					y="-69.007"
					width="722.02"
					height="713.051"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="74.5738" result="effect1_foregroundBlur_2588_70942" />
				</filter>
				<filter
					id="filter1_f_2588_70942"
					x="296.3"
					y="53.4351"
					width="262.554"
					height="390.225"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="39.7727" result="effect1_foregroundBlur_2588_70942" />
				</filter>
				<filter
					id="filter2_f_2588_70942"
					x="246.216"
					y="71.429"
					width="333.684"
					height="225.195"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="34.8011" result="effect1_foregroundBlur_2588_70942" />
				</filter>
				<radialGradient
					id="paint0_radial_2588_70942"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(364.797 285.845) rotate(37.0985) scale(209.04 209.04)"
				>
					<stop offset="0.0625" stop-color="#FE9567" />
					<stop offset="0.421875" stop-color="#FD366E" />
				</radialGradient>
				<radialGradient
					id="paint1_radial_2588_70942"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(427.577 248.547) rotate(90) scale(41.5954 119.581)"
				>
					<stop stop-color="#FE9567" />
					<stop offset="1" stop-color="#FE9567" stop-opacity="0" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_2588_70942"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(413.058 184.027) rotate(90) scale(40.0587 98.4768)"
				>
					<stop stop-color="#FE9567" />
					<stop offset="1" stop-color="#FD366E" />
				</radialGradient>
			</defs>
		</svg>
	</div>

	<Spline let:fallback let:viewer>
		<div
			class="u-position-absolute aw-is-not-mobile"
			style:inline-size="768px"
			style:block-size="768px"
			style:inset-block-start="26rem"
			style:left="calc(50% - 384px + 600px)"
		>
			<img
				src="/images/animations/tech.png"
				width="768"
				height="768"
				alt=""
				style="position: absolute; display: block;"
				use:fallback
			/>
			<spline-viewer
				url="https://prod.spline.design/0WfvducTgy5c8aVi/scene.splinecode"
				width="768"
				height="768"
				use:viewer
			/>
		</div>
	</Spline>

	<main class="aw-main-section u-position-relative">
		<div
			class="u-position-absolute u-inset-inline-start-0 u-inset-block-start-16 aw-u-opacity-40-mobile"
			style="    margin-inline-start: -30px;"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="336"
				height="708"
				viewBox="0 0 336 708"
				fill="none"
			>
				<g opacity="0.3" filter="url(#filter0_f_2588_70948)">
					<ellipse
						cx="13.6533"
						cy="353.688"
						rx="119.415"
						ry="198.315"
						transform="rotate(-32.9472 13.6533 353.688)"
						fill="url(#paint0_radial_2588_70948)"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_2588_70948"
						x="-308.325"
						y="0.242935"
						width="643.957"
						height="706.891"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="87.3766" result="effect1_foregroundBlur_2588_70948" />
					</filter>
					<radialGradient
						id="paint0_radial_2588_70948"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(6.491 356.428) rotate(86.3936) scale(172.104 118.693)"
					>
						<stop stop-color="#E7F8F7" />
						<stop offset="1" stop-color="#85DBD8" />
					</radialGradient>
				</defs>
			</svg>
		</div>

		<section class="aw-hero is-align-start u-position-relative">
			<h1 class="aw-display aw-u-color-text-primary u-max-width-600">
				Run on any provider or through Appwrite Cloud
			</h1>
			<p class="aw-description u-max-width-600">
				Start building today by creating an account on <a
					href="https://cloud.appwrite.io/"
					rel="noopener noreferrer"
					target="_blank">Appwrite Cloud</a
				>
				or
				<a href="/docs/advanced/self-hosting" rel="noopener noreferrer" target="_blank">self-host</a
				>.
			</p>
		</section>
		<section class="aw-hero is-align-start">
			<h2 class="aw-title aw-u-color-text-primary u-max-width-600">
				Get started with your technologies
			</h2>
			<p class="aw-description u-max-width-600">
				Follow a quick start guide on your web, mobile, and native frameworks.
			</p>
			<Technologies />
			<button class="aw-button is-secondary" style:align-self="start">
				<span class="aw-sub-body-500">Explore all technologies</span>
			</button>
		</section>
		<section class="aw-hero is-align-start is-no-max-width">
			<Carousel>
				<svelte:fragment slot="header">
					<h2 class="aw-title aw-u-color-text-primary u-max-width-600">Show me some code</h2>
					<p class="aw-description u-max-width-600">
						If you learn best from code examples, follow one of our tutorials..
					</p>
				</svelte:fragment>
				<svelte:fragment>
					<li>
						<a
							class="aw-grid-articles-item is-full-color"
							href="https://medium.com/appwrite-io/announcing-pink-design-30652e2a2be3"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div class="aw-grid-articles-item-image">
								<img
									class="aw-articles-item-image"
									src="/images/tutorials/react.png"
									alt=""
									loading="lazy"
								/>
							</div>
							<article class="aw-grid-articles-item-content">
								<header class="aw-articles-item-header">
									<h3 class="aw-sub-body-500 aw-u-color-text-primary">React sign up template</h3>
								</header>
								<p
									class="aw-articles-item-paragraph aw-sub-body-500 u-trim-2 u-margin-block-start-4"
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
							</article>
						</a>
					</li>
					<li>
						<a
							class="aw-grid-articles-item is-full-color"
							href="https://medium.com/appwrite-io/announcing-pink-design-30652e2a2be3"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div class="aw-grid-articles-item-image">
								<img
									class="aw-articles-item-image"
									src="/images/tutorials/android.png"
									alt=""
									loading="lazy"
								/>
							</div>
							<article class="aw-grid-articles-item-content">
								<header class="aw-articles-item-header">
									<h3 class="aw-sub-body-500 aw-u-color-text-primary">React sign up template</h3>
								</header>
								<p
									class="aw-articles-item-paragraph aw-sub-body-500 u-trim-2 u-margin-block-start-4"
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
							</article>
						</a>
					</li>
					<li>
						<a
							class="aw-grid-articles-item is-full-color"
							href="https://medium.com/appwrite-io/announcing-pink-design-30652e2a2be3"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div class="aw-grid-articles-item-image">
								<img
									class="aw-articles-item-image"
									src="/images/tutorials/flutter.png"
									alt=""
									loading="lazy"
								/>
							</div>
							<article class="aw-grid-articles-item-content">
								<header class="aw-articles-item-header">
									<h3 class="aw-sub-body-500 aw-u-color-text-primary">React sign up template</h3>
								</header>
								<p
									class="aw-articles-item-paragraph aw-sub-body-500 u-trim-2 u-margin-block-start-4"
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
							</article>
						</a>
					</li>
					<li>
						<a
							class="aw-grid-articles-item is-full-color"
							href="https://medium.com/appwrite-io/announcing-pink-design-30652e2a2be3"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div class="aw-grid-articles-item-image">
								<img
									class="aw-articles-item-image"
									src="/images/tutorials/vue.png"
									alt=""
									loading="lazy"
								/>
							</div>
							<article class="aw-grid-articles-item-content">
								<header class="aw-articles-item-header">
									<h3 class="aw-sub-body-500 aw-u-color-text-primary">React sign up template</h3>
								</header>
								<p
									class="aw-articles-item-paragraph aw-sub-body-500 u-trim-2 u-margin-block-start-4"
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
							</article>
						</a>
					</li>
					<li>
						<a
							class="aw-grid-articles-item is-full-color"
							href="https://medium.com/appwrite-io/announcing-pink-design-30652e2a2be3"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div class="aw-grid-articles-item-image">
								<img
									class="aw-articles-item-image"
									src="/images/tutorials/svelte.png"
									alt=""
									loading="lazy"
								/>
							</div>
							<article class="aw-grid-articles-item-content">
								<header class="aw-articles-item-header">
									<h3 class="aw-sub-body-500 aw-u-color-text-primary">React sign up template</h3>
								</header>
								<p
									class="aw-articles-item-paragraph aw-sub-body-500 u-trim-2 u-margin-block-start-4"
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
							</article>
						</a>
					</li>
				</svelte:fragment>
			</Carousel>
		</section>
		<section class="aw-hero is-align-start is-no-max-width">
			<h2 class="aw-title aw-u-color-text-primary u-max-width-600">Explore capabilities</h2>
			<p class="aw-description u-max-width-600">
				All the core functionalities you need with a scalable and flexible API. Explore Appwrite's
				product offerings.
			</p>
			<div class="u-margin-block-start-24">
				<ul class="aw-grid-row-4 aw-grid-row-4-m-1">
					<li>
						<a href="#" class="aw-card is-normal">
							<img
								src="/images/icons/illustrated/dark/auth.png"
								alt=""
								class="u-only-dark"
								width="48"
								height="48"
							/>
							<img
								src="/images/icons/illustrated/light/auth.png"
								alt=""
								class="u-only-light"
								width="48"
								height="48"
							/>
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">Auth</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Sign in users with multiple OAuth providers.
							</p>
						</a>
					</li>
					<li>
						<a href="#" class="aw-card is-normal">
							<img
								src="/images/icons/illustrated/dark/databases.png"
								alt=""
								class="u-only-dark"
								width="48"
								height="48"
							/>
							<img
								src="/images/icons/illustrated/light/databases.png"
								alt=""
								class="u-only-light"
								width="48"
								height="48"
							/>
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
								Databases
							</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Store your application and user data.
							</p>
						</a>
					</li>
					<li>
						<a href="#" class="aw-card is-normal">
							<img
								src="/images/icons/illustrated/dark/functions.png"
								alt=""
								class="u-only-dark"
								width="48"
								height="48"
							/>
							<img
								src="/images/icons/illustrated/light/functions.png"
								alt=""
								class="u-only-light"
								width="48"
								height="48"
							/>
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
								Functions
							</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Extend and customize your server's functionality.
							</p>
						</a>
					</li>
					<li>
						<a href="#" class="aw-card is-normal">
							<img
								src="/images/icons/illustrated/dark/storage.png"
								alt=""
								class="u-only-dark"
								width="48"
								height="48"
							/>
							<img
								src="/images/icons/illustrated/light/storage.png"
								alt=""
								class="u-only-light"
								width="48"
								height="48"
							/>
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
								Storage
							</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Store images, videos, documents, and files.
							</p>
						</a>
					</li>
					<li>
						<a href="#" class="aw-card is-normal">
							<img
								src="/images/icons/illustrated/dark/realtime.png"
								alt=""
								class="u-only-dark"
								width="48"
								height="48"
							/>
							<img
								src="/images/icons/illustrated/light/realtime.png"
								alt=""
								class="u-only-light"
								width="48"
								height="48"
							/>
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
								Realtime
							</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Respond to server events in realtime.
							</p>
						</a>
					</li>
				</ul>
			</div>
		</section>
		<section class="aw-hero is-align-start is-no-max-width">
			<h2 class="aw-title aw-u-color-text-primary u-max-width-600">Explore ways to integrate</h2>
			<p class="aw-description u-max-width-600">
				Choose how you integrate with Appwrite. Explore references for the Appwrite SDK, REST API,
				GraphQL API, or Realtime API.
			</p>
			<div class="u-margin-block-start-24">
				<ul class="aw-grid-row-2">
					<li>
						<a href="#" class="aw-card is-normal">
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">SDKs</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Light-weight SDKs for your favorite platforms.
							</p>
						</a>
					</li>
					<li>
						<a href="#" class="aw-card is-normal">
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
								REST API
							</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Integrate with HTTP requests without the needing an SDK
							</p>
						</a>
					</li>
					<li>
						<a href="#" class="aw-card is-normal">
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
								GraphQL
							</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Leverage GraphQL through our SDKs or integrate directly with REST endpoints.
							</p>
						</a>
					</li>
					<li>
						<a href="#" class="aw-card is-normal">
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
								Realtime
							</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Respond to auth, databases, storage, and function events in realtime.
							</p>
						</a>
					</li>
				</ul>
			</div>
		</section>
		<section class="aw-hero is-align-start is-no-max-width">
			<h2 class="aw-title aw-u-color-text-primary u-max-width-600">Migrate to Appwrite</h2>
			<p class="aw-description u-max-width-600">Own your data with automatic data migrations.</p>
			<div class="u-margin-block-start-24">
				<ul class="aw-grid-row-4">
					<li>
						<a href="#" class="aw-card is-normal">
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
								Self-hosted
							</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Move data from self-hosted to Appwrite Cloud.
							</p>
						</a>
					</li>
					<li>
						<a href="#" class="aw-card is-normal">
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
								Firebase
							</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Migrate users and data from Firebase to Appwrite.
							</p>
						</a>
					</li>
					<li>
						<a href="#" class="aw-card is-normal">
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
								Supabase
							</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Migrate users and data from Supabase to Appwrite.
							</p>
						</a>
					</li>
					<li>
						<a href="" class="aw-card is-normal">
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">Nhost</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Migrate users and data from NHost to Appwrite.
							</p>
						</a>
					</li>
				</ul>
			</div>
		</section>

		<MainFooter variant="docs" />
	</main>
</Docs>
