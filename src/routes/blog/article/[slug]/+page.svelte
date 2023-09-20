<script lang="ts">
	import { MainFooter } from '$lib/components';
	import { Main } from '$lib/layouts';

	export let data;
</script>

<Main>
	<div class="aw-big-padding-section">
		<div class="aw-big-padding-section-level-1">
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container" style="--container-size:42.5rem">
					<article class="aw-main-article">
						<header class="aw-main-article-header">
							<a class="aw-link aw-u-color-text-secondary" href="/blog">
								<span class="aw-icon-chevron-left" aria-hidden="true" />
								<span class="">Back to blog</span>
							</a>
							<ul class="aw-metadata aw-caption-400">
								<li>
									<time datetime="">June 2, 2023</time>
								</li>
								<li>8 min</li>
							</ul>
							<h1 class="aw-title aw-u-color-text-primary">{data.frontmatter.title}</h1>
							<p class="aw-description u-margin-block-start-8">
								{data.frontmatter.description}
							</p>
							<div class="aw-author u-margin-block-start-16">
								<div class="u-flex u-cross-center u-gap-8">
									<img class="aw-author-image" src="/images/blog/placeholder.png" width="44" height="44" alt="" />
									<div class="aw-author-info">
										<h4 class="aw-sub-body-400 aw-u-color-text-primary">Author's name</h4>
										<p class="aw-caption-400 u-hide">Author’s role or bio</p>
									</div>
								</div>
								<ul class="u-flex u-gap-8 u-margin-inline-start-auto u-cross-child-center">
									<li>
										<a
											href="https://twitter.com/appwrite"
											class="aw-icon-button"
											aria-label="Author twitter"
											target="_blank"
										>
											<span class="aw-icon-x" aria-hidden="true" />
										</a>
									</li>
									<li>
										<a
											href="https://twitter.com/appwrite"
											class="aw-icon-button"
											aria-label="Author LinkedIn"
											target="_blank"
										>
											<span class="aw-icon-linkedin" aria-hidden="true" />
										</a>
									</li>
								</ul>
							</div>
						</header>

						<div class="aw-media-container">
							<img
								class="u-block"
								src="/images/pages/homepage/dashboard.svg"
								alt="console dashboard"
							/>
						</div>

						<div class="aw-article-content u-margin-block-start-32">
							<svelte:component this={data.content} />
						</div>
					</article>
				</div>
			</div>
		</div>
		<div class="aw-big-padding-section-level-1 aw-u-sep-block-start">
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<h3 class="aw-label aw-u-color-text-primary">Read next</h3>
					<section class="u-margin-block-start-32">
						<ul class="aw-grid-articles">
							<li>
								<a class="aw-grid-articles-item" href="/blog">
									<div class="aw-grid-articles-item-image">
										<img
											src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkAAAAGUCAYAAADd3Z2SAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjRSURBVHgB7dzdcRNXGIDhswwFkA6UCgwd0ElIBQkVABXEHYRS6ACoIEoFoQPlrH8yCmM8sHtlv88z842Ebe4037w6q9Uy7vdszqs5F3MONzPOHok7nU4DtlqWZcBW9g9njmePn+Z8nvNh7pjjt/7Dt7bPYc6fc14OuIcFxB4CiD3sH77D+znv7gqhJ3f88W9zPg7xAwA8bK/mfJyx/PvXv/g6gN7MuRzXl74AAB66tWn+mBH05vyH5+fP68nP5YAf4AiaPVwCYw/7hw1ez71z1Tq32+cwri97Ofnhh1hA7CGA2MP+YYMvc16snwm6vQS2HguJHwDgMVtbZ73J6+oE6DDnrwEbeAfGHk6A2MP+YYef1hOglwMAoOPVGkDPBwBAx8UaQBcDAKDjsAbQYQAAdByeDACAmPUWDB+jZzN3YbCHu8DYw/5hDydAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgJynp9NpwFbLsgzYyv5hD/uHPZwAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkLHNOAzY6nbx82G5ZlgFb2T/s4QQIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACDn6el0GrDVsiwDtrJ/2MP+YQ8nQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAICcNYCOAwCg4+gECADIcQIEANRcnQD9PQAAOj6vAfRpAAB0fFpOp9Oz+eSfARssyzJgq7l/Bmxl/7DDz0/mC+jLfPJhAAA8fu/nHK/yeb4LO8yHj3OeDfgB3oGxhxMg9rB/2GA99Hkxbm+Dny+i43x4NwAAHq+1dY7rk/++B2hG0OUQQQDA47Q2zuXtP/73RYgzgt7Oh9fj+ogIAOChW5tmbZu35z+88wLqzWeC1j/8ZcA9XINnD58BYg/7h+/wYc6v444vfb731XMTQi/nPJ9zMedw86vDgGEBsY8AYg/7hzPHs8d1Po/ru72+eUXrXzCikBuKJ0jJAAAAAElFTkSuQmCC"
											class="aw-image-ratio-4/3"
											alt=""
										/>
									</div>
									<div class="aw-grid-articles-item-content">
										<h4 class="aw-label aw-u-color-text-primary">
											Lorem ipsum dolor sit amet consectetur
										</h4>
										<div class="aw-author">
											<div class="u-flex u-cross-center u-gap-8">
												<img class="aw-author-image" src="." width="24" height="24" alt="" />
												<div class="aw-author-info">
													<h4 class="aw-sub-body-400 aw-u-color-text-primary">Author’s name</h4>
													<p class="aw-caption-400 u-hide">Author’s role or bio</p>
													<ul class="aw-metadata aw-caption-400 aw-is-not-mobile">
														<li>[data]</li>
														<li>[time-to-read] min</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</a>
							</li>
							<li>
						</ul>
					</section>
				</div>
			</div>
		</div>

		<div class="aw-big-padding-section-level-1 u-position-relative">
			<svg
				class="u-position-absolute"
				style="inset:0; inline-size:100%; max-block-size:100%;"
				xmlns="http://www.w3.org/2000/svg"
				width="1728"
				height="1362"
				viewBox="0 0 1728 1362"
				fill="none"
			>
				<g opacity="0.72">
					<g opacity="0.55" filter="url(#filter0_f_305_20517)">
						<path
							d="M-762.693 895.657L1023.74 463.004L74.501 160.957L-762.693 895.657Z"
							fill="#FD366E"
						/>
					</g>
					<g opacity="0.55" filter="url(#filter1_f_305_20517)">
						<path
							d="M21.5016 914.457L801.149 274.875L379.001 56.9565L21.5016 914.457Z"
							fill="#FE9567"
						/>
					</g>
					<g opacity="0.55" filter="url(#filter2_f_305_20517)">
						<path
							d="M-533.999 676.917L951.855 316.73L46.0014 299.457L-533.999 676.917Z"
							fill="url(#paint0_linear_305_20517)"
						/>
					</g>
					<g filter="url(#filter3_f_305_20517)">
						<path
							d="M269.89 133.159L-221.74 700.337L613.654 915.093L881.723 433.09L269.89 133.159Z"
							fill="#FD366E"
							fill-opacity="0.6"
						/>
					</g>
					<g opacity="0.4" filter="url(#filter4_f_305_20517)">
						<path
							d="M932.457 -435.399L297.824 296.757L1376.21 573.98L1722.26 -48.2245L932.457 -435.399Z"
							fill="#FD366E"
							fill-opacity="0.6"
						/>
					</g>
					<g style="mix-blend-mode:soft-light" opacity="0.45" filter="url(#filter5_f_305_20517)">
						<ellipse
							cx="479.672"
							cy="45.906"
							rx="479.672"
							ry="45.906"
							transform="matrix(-0.953344 0.301888 -0.656066 -0.754703 615.184 302.02)"
							fill="#EDEDF0"
						/>
					</g>
					<g style="mix-blend-mode:overlay" opacity="0.35" filter="url(#filter6_f_305_20517)">
						<ellipse
							cx="376.561"
							cy="45.906"
							rx="376.561"
							ry="45.906"
							transform="matrix(-0.953344 0.301888 -0.656066 -0.754703 336.76 387.043)"
							fill="#EDEDF0"
						/>
					</g>
					<g style="mix-blend-mode:soft-light" opacity="0.45" filter="url(#filter7_f_305_20517)">
						<ellipse
							cx="376.561"
							cy="37.9305"
							rx="376.561"
							ry="37.9305"
							transform="matrix(-0.953344 0.301888 -0.656066 -0.754703 811.873 396.168)"
							fill="#EDEDF0"
						/>
					</g>
					<g style="mix-blend-mode:soft-light" opacity="0.45" filter="url(#filter8_f_305_20517)">
						<ellipse
							cx="328.236"
							cy="37.9305"
							rx="328.236"
							ry="37.9305"
							transform="matrix(-0.953344 0.301888 -0.656066 -0.754703 655.973 612.457)"
							fill="#EDEDF0"
						/>
					</g>
					<g opacity="0.4" filter="url(#filter9_f_305_20517)">
						<path
							d="M187.001 436.564L785.933 433.285C864.738 432.853 904.139 361.142 850.013 316.658L617.976 125.956L187.001 436.564Z"
							fill="white"
						/>
					</g>
					<g opacity="0.65" filter="url(#filter10_f_305_20517)">
						<path
							d="M-286.996 251.457L1415 127.5L-16.5 -9L-286.996 251.457Z"
							fill="#FE9567"
							fill-opacity="0.5"
						/>
					</g>
				</g>
				<defs>
					<filter
						id="filter0_f_305_20517"
						x="-1123.11"
						y="-199.456"
						width="2507.26"
						height="1455.52"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="180.206" result="effect1_foregroundBlur_305_20517" />
					</filter>
					<filter
						id="filter1_f_305_20517"
						x="-243.923"
						y="-208.468"
						width="1310.5"
						height="1388.35"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="132.713" result="effect1_foregroundBlur_305_20517" />
					</filter>
					<filter
						id="filter2_f_305_20517"
						x="-799.425"
						y="34.0316"
						width="2016.71"
						height="908.312"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="132.713" result="effect1_foregroundBlur_305_20517" />
					</filter>
					<filter
						id="filter3_f_305_20517"
						x="-721.937"
						y="-367.036"
						width="2103.86"
						height="1782.33"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="250.098" result="effect1_foregroundBlur_305_20517" />
					</filter>
					<filter
						id="filter4_f_305_20517"
						x="-202.372"
						y="-935.595"
						width="2424.83"
						height="2009.77"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="250.098" result="effect1_foregroundBlur_305_20517" />
					</filter>
					<filter
						id="filter5_f_305_20517"
						x="-456.67"
						y="137.109"
						width="1168.89"
						height="550.144"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="63.0722" result="effect1_foregroundBlur_305_20517" />
					</filter>
					<filter
						id="filter6_f_305_20517"
						x="-512.662"
						y="247.164"
						width="920.626"
						height="437.825"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="50.0197" result="effect1_foregroundBlur_305_20517" />
					</filter>
					<filter
						id="filter7_f_305_20517"
						x="-58.0175"
						y="237.82"
						width="972.025"
						height="486.801"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="63.0722" result="effect1_foregroundBlur_305_20517" />
					</filter>
					<filter
						id="filter8_f_305_20517"
						x="-121.904"
						y="453.609"
						width="880.141"
						height="458.625"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="63.0722" result="effect1_foregroundBlur_305_20517" />
					</filter>
					<filter
						id="filter9_f_305_20517"
						x="-29.2457"
						y="-90.2906"
						width="1120.51"
						height="743.101"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="108.124" result="effect1_foregroundBlur_305_20517" />
					</filter>
					<filter
						id="filter10_f_305_20517"
						x="-503.244"
						y="-225.248"
						width="2134.49"
						height="692.952"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="108.124" result="effect1_foregroundBlur_305_20517" />
					</filter>
					<linearGradient
						id="paint0_linear_305_20517"
						x1="683.714"
						y1="329.135"
						x2="322.653"
						y2="846.55"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FE9567" />
						<stop offset="1" stop-color="#F02E65" />
					</linearGradient>
				</defs>
			</svg>
			<div class="aw-big-padding-section-level-2 u-position-relative">
				<div class="aw-container">
					<div class="aw-hero aw-u-max-width-800">
						<h5 class="aw-display aw-u-color-text-primary">Subscribe to our newsletter</h5>
						<p class="aw-description aw-u-color-text-primary" style="opacity:0.64">
							Sign up to our company blog and get the latest insights from Appwrite. Learn more
							about engineering, product design, building community, and tips & tricks for using
							Appwrite.
						</p>
						<div
							class="aw-subscribe-input aw-input-text is-reset-input-inside u-width-full-line aw-u-max-width-380 u-margin-inline-auto u-margin-block-start-32"
						>
							<input type="email" placeholder="Enter your email" />
							<button class="aw-button">Sign up</button>
						</div>
					</div>
				</div>
				<div class="aw-big-padding-section-level-2 u-position-relative">
					<div class="aw-container u-position-relative">
						<nav class="aw-footer-nav">
							<img class="aw-logo" src="/images/logos/appwrite.svg" alt="appwrite" width="130" />
							<ul class="aw-footer-nav-main-list">
								<li class="aw-footer-nav-main-item">
									<h5 class="aw-footer-nav-main-title aw-is-not-mobile"><a href="#">Product</a></h5>
									<button class="aw-footer-nav-button aw-is-only-mobile">
										<span class="aw-caption-500">Product</span>
										<svg
											class="aw-footer-nav-button-arrow"
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M10.4243 13.0243C10.19 13.2586 9.81007 13.2586 9.57576 13.0243L5.07576 8.52426C4.84145 8.28995 4.84145 7.91005 5.07576 7.67574C5.31007 7.44142 5.68997 7.44142 5.92429 7.67574L10 11.7515L14.0758 7.67574C14.3101 7.44142 14.69 7.44142 14.9243 7.67574C15.1586 7.91005 15.1586 8.28995 14.9243 8.52426L10.4243 13.0243Z"
												fill="#ADADB0"
											/>
										</svg>
									</button>
									<ul class="aw-footer-nav-secondary-list">
										<li class="aw-footer-nav-secondary-item"><a href="#">Docs</a></li>
										<li class="aw-footer-nav-secondary-item"><a href="#">Auth</a></li>
										<li class="aw-footer-nav-secondary-item"><a href="#">Databases</a></li>
										<li class="aw-footer-nav-secondary-item"><a href="#">Functions</a></li>
										<li class="aw-footer-nav-secondary-item"><a href="#">Storage</a></li>
										<li class="aw-footer-nav-secondary-item"><a href="#">Realtime</a></li>
										<li class="aw-footer-nav-secondary-item"><a href="#">Localization</a></li>
									</ul>
								</li>
								<li class="aw-footer-nav-main-item">
									<h5 class="aw-footer-nav-main-title aw-is-not-mobile"><a href="#">About</a></h5>
									<button class="aw-footer-nav-button is-open aw-is-only-mobile">
										<span class="aw-caption-500">About</span>
										<svg
											class="aw-footer-nav-button-arrow"
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M10.4243 13.0243C10.19 13.2586 9.81007 13.2586 9.57576 13.0243L5.07576 8.52426C4.84145 8.28995 4.84145 7.91005 5.07576 7.67574C5.31007 7.44142 5.68997 7.44142 5.92429 7.67574L10 11.7515L14.0758 7.67574C14.3101 7.44142 14.69 7.44142 14.9243 7.67574C15.1586 7.91005 15.1586 8.28995 14.9243 8.52426L10.4243 13.0243Z"
												fill="#ADADB0"
											/>
										</svg>
									</button>
									<ul class="aw-footer-nav-secondary-list">
										<li class="aw-footer-nav-secondary-item"><a href="#">Company</a></li>
										<li class="aw-footer-nav-secondary-item"><a href="#">Community</a></li>
										<li class="aw-footer-nav-secondary-item"><a href="#">Blog</a></li>
										<li class="aw-footer-nav-secondary-item"><a href="#">Careers</a></li>
										<li class="aw-footer-nav-secondary-item"><a href="#">Contact Us</a></li>
										<li class="aw-footer-nav-secondary-item"><a href="#">Roadmap</a></li>
										<li class="aw-footer-nav-secondary-item"><a href="#">Changelog</a></li>
									</ul>
								</li>
								<li class="aw-footer-nav-main-item">
									<h5 class="aw-footer-nav-main-title aw-is-not-mobile"><a href="#">Legal</a></h5>
									<button class="aw-footer-nav-button aw-is-only-mobile">
										<span class="aw-caption-500">Legal</span>
										<svg
											class="aw-footer-nav-button-arrow"
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M10.4243 13.0243C10.19 13.2586 9.81007 13.2586 9.57576 13.0243L5.07576 8.52426C4.84145 8.28995 4.84145 7.91005 5.07576 7.67574C5.31007 7.44142 5.68997 7.44142 5.92429 7.67574L10 11.7515L14.0758 7.67574C14.3101 7.44142 14.69 7.44142 14.9243 7.67574C15.1586 7.91005 15.1586 8.28995 14.9243 8.52426L10.4243 13.0243Z"
												fill="#ADADB0"
											/>
										</svg>
									</button>
									<ul class="aw-footer-nav-secondary-list">
										<li class="aw-footer-nav-secondary-item"><a href="#">Status</a></li>
										<li class="aw-footer-nav-secondary-item"><a href="#">Terms</a></li>
										<li class="aw-footer-nav-secondary-item"><a href="#">Privacy</a></li>
										<li class="aw-footer-nav-secondary-item"><a href="#">Security</a></li>
									</ul>
								</li>
							</ul>
						</nav>

						<MainFooter />
					</div>
				</div>
			</div>
		</div>
	</div></Main
>
