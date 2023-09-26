<script lang="ts">
	import { Spline } from '$lib/components';
	import { Carousel } from '$lib/components';
	import Docs from '$lib/layouts/Docs.svelte';
	import MainFooter from '../../lib/components/MainFooter.svelte';
	import Sidebar from './Sidebar.svelte';
</script>

<Docs variant="default">
	<Sidebar />
	<div class="u-position-absolute" style="margin-block-start:-36%; margin-inline-start:0;">
		<svg
			style="width:1466.685px; height:804.009px; transform:rotate(150.348deg); fill: var(--appwrite-pink, #FD366E); opacity: 0.6499999761581421; filter: blur(127.51104736328125px);"
			xmlns="http://www.w3.org/2000/svg"
			width="1727"
			height="520"
			viewBox="0 0 1727 520"
			fill="none"
		>
			<g opacity="0.65" filter="url(#filter0_f_278_15509)">
				<path
					d="M887.773 -394.667L-52.2142 167.684L842.622 381.131L1616.37 124.584L887.773 -394.667Z"
					fill="#FD366E"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_278_15509"
					x="-307.237"
					y="-649.69"
					width="2178.63"
					height="1285.84"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="127.511" result="effect1_foregroundBlur_278_15509" />
				</filter>
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
		<section class="aw-hero is-align-start">
			<h1 class="aw-display aw-u-color-text-primary u-max-width-600">
				Run on any provider or through Appwrite Cloud
			</h1>
			<p class="aw-description u-max-width-600">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices lacus.
			</p>
		</section>
		<section class="aw-hero is-align-start">
			<h2 class="aw-title aw-u-color-text-primary u-max-width-600">
				Get started quickly with your preferred technology
			</h2>
			<p class="aw-description u-max-width-600">
				Start building with your preferred web, mobile, and native frameworks by following a quick
				start guide.
			</p>
			<ul class="u-flex u-gap-16 aw-u-margin-block-32-mobile aw-u-margin-block-40-not-mobile">
				<li>
					<a href="/docs/quick-starts/flutter" class="aw-box-icon">
						<img
							src="/images/platforms/dark/flutter.svg"
							alt="Flutter logo"
							class="u-only-dark"
							width="32"
							height="32"
						/>
						<img
							src="/images/platforms/flutter.svg"
							alt="Flutter logo"
							class="u-only-light"
							width="32"
							height="32"
						/>
					</a>
				</li>
				<li>
					<a href="/docs/quick-starts/nextjs" class="aw-box-icon">
						<img
							src="/images/platforms/dark/nextjs.svg"
							alt="Next.js logo"
							class="u-only-dark"
							width="32"
							height="32"
						/>
						<img
							src="/images/platforms/nextjs.svg"
							alt="Next.js logo"
							class="u-only-light"
							width="32"
							height="32"
						/>
					</a>
				</li>
				<li>
					<a href="/docs/quick-starts/react" class="aw-box-icon">
						<img
							src="/images/platforms/dark/react.svg"
							alt="React logo"
							class="u-only-dark"
							width="32"
							height="32"
						/>
						<img
							src="/images/platforms/react.svg"
							alt="React logo"
							class="u-only-light"
							width="32"
							height="32"
						/>
					</a>
				</li>
				<li>
					<a href="/docs/quick-starts/sveltekit" class="aw-box-icon">
						<img
							src="/images/platforms/dark/svelte.svg"
							alt="Svelte logo"
							class="u-only-dark"
							width="32"
							height="32"
						/>
						<img
							src="/images/platforms/svelte.svg"
							alt="Svelte logo"
							class="u-only-light"
							width="32"
							height="32"
						/>
					</a>
				</li>
				<li>
					<a href="/docs/quick-starts/nuxt" class="aw-box-icon">
						<img
							src="/images/platforms/dark/nuxt.svg"
							alt="Nuxt logo"
							class="u-only-dark"
							width="32"
							height="32"
						/>
						<img
							src="/images/platforms/nuxt.svg"
							alt="Nuxt logo"
							class="u-only-light"
							width="32"
							height="32"
						/>
					</a>
				</li>
				<li>
					<a href="/docs/quick-starts/vue" class="aw-box-icon">
						<img
							src="/images/platforms/dark/vue.svg"
							alt="Vue logo"
							class="u-only-dark"
							width="32"
							height="32"
						/>
						<img
							src="/images/platforms/vue.svg"
							alt="Vue logo"
							class="u-only-light"
							width="32"
							height="32"
						/>
					</a>
				</li>
				<li>
					<a href="/docs/quick-starts/angular" class="aw-box-icon">
						<img
							src="/images/platforms/dark/angular.svg"
							alt="Angular logo"
							class="u-only-dark"
							width="32"
							height="32"
						/>
						<img
							src="/images/platforms/angular.svg"
							alt="Angular logo"
							class="u-only-light"
							width="32"
							height="32"
						/>
					</a>
				</li>
				<li>
					<a href="/docs/quick-starts/apple" class="aw-box-icon">
						<img
							src="/images/platforms/dark/apple.svg"
							alt="Apple logo"
							class="u-only-dark"
							width="32"
							height="32"
						/>
						<img
							src="/images/platforms/apple.svg"
							alt="Apple logo"
							class="u-only-light"
							width="32"
							height="32"
						/>
					</a>
				</li>
				<li>
					<a href="/docs/quick-starts/android" class="aw-box-icon">
						<img
							src="/images/platforms/dark/android.svg"
							alt="Android logo"
							class="u-only-dark"
							width="32"
							height="32"
						/>
						<img
							src="/images/platforms/android.svg"
							alt="Android logo"
							class="u-only-light"
							width="32"
							height="32"
						/>
					</a>
				</li>
			</ul>
			<button class="aw-button is-secondary" style:align-self="start">
				<span class="aw-sub-body-500">Explore all technologies</span>
			</button>
		</section>
		<section class="aw-hero is-align-start is-no-max-width">
			<Carousel>
				<svelte:fragment slot="header">
					<h2 class="aw-title aw-u-color-text-primary u-max-width-600">Show me some code</h2>
					<p class="aw-description u-max-width-600">
						Talk is cheap, where's the code? If you'd rather see some examples, we've got you
						covered. Clone a template to get started.
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
			<h2 class="aw-title aw-u-color-text-primary u-max-width-600">Show me some code</h2>
			<p class="aw-description u-max-width-600">
				All the core functionalities you need with a scalable and flexible API. Explore Appwrite's
				product offerings.
			</p>
			<div class="u-margin-block-start-24">
				<ul class="aw-grid-row-4 aw-grid-row-4-m-1">
					<li>
						<div class="aw-card is-full-color">
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
						</div>
					</li>
					<li>
						<div class="aw-card is-full-color">
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
								Store your application and users' data.
							</p>
						</div>
					</li>
					<li>
						<div class="aw-card is-full-color">
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
						</div>
					</li>
					<li>
						<div class="aw-card is-full-color">
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
						</div>
					</li>
					<li>
						<div class="aw-card is-full-color">
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
								Listen to any events on the server-side in realtime.
							</p>
						</div>
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
						<div class="aw-card is-full-color">
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">SDKs</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Lorem ipsum dolor sit amet consectetur. Elit id et diam lectus egestas habitasse.
							</p>
						</div>
					</li>
					<li>
						<div class="aw-card is-full-color">
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
								REST API
							</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Lorem ipsum dolor sit amet consectetur. Elit id et diam lectus egestas habitasse.
							</p>
						</div>
					</li>
					<li>
						<div class="aw-card is-full-color">
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
								GraphQL
							</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Lorem ipsum dolor sit amet consectetur. Elit id et diam lectus egestas habitasse.
							</p>
						</div>
					</li>
					<li>
						<div class="aw-card is-full-color">
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
								Realtime
							</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Lorem ipsum dolor sit amet consectetur. Elit id et diam lectus egestas habitasse.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
		<section class="aw-hero is-align-start is-no-max-width">
			<h2 class="aw-title aw-u-color-text-primary u-max-width-600">Migrate to Appwrite</h2>
			<p class="aw-description u-max-width-600">
				Lorem ipsum dolor sit amet consectetur. Orci netus est urna dictum eleifend diam.
			</p>
			<div class="u-margin-block-start-24">
				<ul class="aw-grid-row-4">
					<li>
						<div class="aw-card is-full-color">
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
								Self hosted
							</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</div>
					</li>
					<li>
						<div class="aw-card is-full-color">
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
								Firebase
							</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</div>
					</li>
					<li>
						<div class="aw-card is-full-color">
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
								Supabase
							</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</div>
					</li>
					<li>
						<div class="aw-card is-full-color">
							<h4 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">Nhost</h4>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>

		<MainFooter variant="docs" />
	</main>
</Docs>
