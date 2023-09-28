<script lang="ts">
	import { Main } from '$lib/layouts';
	import MainFooter from '$lib/components/MainFooter.svelte';
	import FooterNav from '$lib/components/FooterNav.svelte';
	import { TITLE_SUFFIX } from '$routes/titles';
	import { DEFAULT_HOST } from '$lib/utils/metadata';

	const title = 'Company' + TITLE_SUFFIX;
	const description = '';
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

<Main>
	<svg
		style="position:absolute; inset-inline-start:0; inset-block-start:0"
		xmlns="http://www.w3.org/2000/svg"
		width="548"
		height="1002"
		viewBox="0 0 548 1002"
		fill="none"
	>
		<g opacity="0.3" filter="url(#filter0_f_3087_100472)">
			<ellipse cx="21.5" cy="408" rx="226.5" ry="294" fill="url(#paint0_radial_3087_100472)" />
		</g>
		<g filter="url(#filter1_f_3087_100472)">
			<ellipse
				cx="-64.3228"
				cy="278.166"
				rx="90.5"
				ry="129"
				transform="rotate(-27.3718 -64.3228 278.166)"
				fill="url(#paint1_radial_3087_100472)"
				fill-opacity="0.5"
			/>
		</g>
		<g filter="url(#filter2_f_3087_100472)">
			<ellipse
				cx="-72.3228"
				cy="149.166"
				rx="90.5"
				ry="129"
				transform="rotate(-27.3718 -72.3228 149.166)"
				fill="url(#paint2_radial_3087_100472)"
				fill-opacity="0.8"
			/>
		</g>
		<defs>
			<filter
				id="filter0_f_3087_100472"
				x="-505"
				y="-186"
				width="1053"
				height="1188"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_3087_100472" />
			</filter>
			<filter
				id="filter1_f_3087_100472"
				x="-304.212"
				y="16.2529"
				width="479.778"
				height="523.826"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur stdDeviation="70" result="effect1_foregroundBlur_3087_100472" />
			</filter>
			<filter
				id="filter2_f_3087_100472"
				x="-312.212"
				y="-112.747"
				width="479.778"
				height="523.826"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur stdDeviation="70" result="effect1_foregroundBlur_3087_100472" />
			</filter>
			<radialGradient
				id="paint0_radial_3087_100472"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(7.91487 412.062) rotate(85.3898) scale(255.463 224.848)"
			>
				<stop stop-color="#E7F8F7" />
				<stop offset="1" stop-color="#85DBD8" />
			</radialGradient>
			<radialGradient
				id="paint1_radial_3087_100472"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(-64.3228 278.166) rotate(90) scale(129 90.5)"
			>
				<stop stop-color="#94DBD1" />
				<stop offset="1" stop-color="#94DBD1" />
			</radialGradient>
			<radialGradient
				id="paint2_radial_3087_100472"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(-72.3228 149.166) rotate(90) scale(129 90.5)"
			>
				<stop stop-color="#85DBD8" />
				<stop offset="1" stop-color="#85DBD8" />
			</radialGradient>
		</defs>
	</svg>

	<svg
		style="position:absolute; inset-inline-end:0; inset-block-start:0"
		xmlns="http://www.w3.org/2000/svg"
		width="692"
		height="1375"
		viewBox="0 0 692 1375"
		fill="none"
	>
		<g opacity="0.4" filter="url(#filter0_f_3087_100467)">
			<path
				d="M1136.63 608.851C1161.69 839.714 994.849 1047.18 763.987 1072.23C533.124 1097.29 325.661 930.45 300.605 699.587C288.324 586.43 650.756 706.719 723.932 601.148C800.049 491.333 480.704 197.92 598.41 185.145C829.272 160.089 1111.58 377.989 1136.63 608.851Z"
				fill="url(#paint0_radial_3087_100467)"
			/>
		</g>
		<g filter="url(#filter1_f_3087_100467)">
			<ellipse
				cx="859.818"
				cy="694.686"
				rx="240.528"
				ry="83.6662"
				transform="rotate(-27.3718 859.818 694.686)"
				fill="url(#paint1_radial_3087_100467)"
			/>
		</g>
		<g filter="url(#filter2_f_3087_100467)">
			<ellipse
				cx="934.252"
				cy="584.438"
				rx="198.079"
				ry="80.5752"
				transform="rotate(-143.27 934.252 584.438)"
				fill="url(#paint2_radial_3087_100467)"
				fill-opacity="0.5"
			/>
		</g>
		<defs>
			<filter
				id="filter0_f_3087_100467"
				x="0.299805"
				y="-116.826"
				width="1438.82"
				height="1491.55"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_3087_100467" />
			</filter>
			<filter
				id="filter1_f_3087_100467"
				x="482.746"
				y="401.445"
				width="754.145"
				height="586.483"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_3087_100467" />
			</filter>
			<filter
				id="filter2_f_3087_100467"
				x="628.302"
				y="309.494"
				width="611.899"
				height="549.888"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur stdDeviation="70" result="effect1_foregroundBlur_3087_100467" />
			</filter>
			<radialGradient
				id="paint0_radial_3087_100467"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(718.619 654.219) rotate(83.8058) scale(420.468 420.468)"
			>
				<stop offset="0.281696" stop-color="#FE9567" />
				<stop offset="0.59375" stop-color="#FD366E" />
			</radialGradient>
			<radialGradient
				id="paint1_radial_3087_100467"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(859.818 694.686) rotate(90) scale(83.6662 240.528)"
			>
				<stop stop-color="#FE9567" />
				<stop offset="1" stop-color="#FE9567" stop-opacity="0" />
			</radialGradient>
			<radialGradient
				id="paint2_radial_3087_100467"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(934.252 584.438) rotate(90) scale(80.5752 198.079)"
			>
				<stop stop-color="#FE9567" />
				<stop offset="1" stop-color="#FD366E" />
			</radialGradient>
		</defs>
	</svg>
	<div class="aw-big-padding-section u-position-relative">
		<div class="aw-big-padding-section-level-1 u-position-relative">
			<div class="aw-big-padding-section-level-2" style:margin-block="8rem">
				<section class="aw-container aw-u-padding-block-end-0">
					<div class="aw-hero" style="--hero-max-inline-size:62.125rem; --hero-gap:1.125rem;">
						<h1 class="aw-headline aw-u-color-text-primary">
							Unleashing creativity and innovation in every creator
						</h1>
						<div class="">
							<p class="aw-description">
								Software development transforms our everyday lives, relying heavily on the
								creativity and innovation of developers. At Appwrite, we enable them to develop
								products the world loves by removing technical barriers with our backend products.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
		<div class="aw-big-padding-section-level-1 u-position-relative">
			<div class="aw-big-padding-section-level-2">
				<section class="aw-container">
					<section class="aw-grid-1-1" style="--grid-1-1-gap:2rem; --grid-1-1-gap-desktop:6.25rem;">
						<div class="u-flex-vertical u-gap-32">
							<h2 class="aw-display aw-u-color-text-primary">Designed for and by developers</h2>
							<button
								class="aw-button u-cross-child-start aw-u-inline-width-100-percent-mobile-break1"
							>
								<span>Join the team</span>
							</button>
						</div>

						<div class="aw-description u-flex-vertical u-gap-16">
							<p>
								At Appwrite it is our mission to eliminate friction and abstract complexity for
								every creator. Giving developers all the tools they need with the best experience
								possible to have all the capabilities to create and innovate without limits and with
								minimum concerns.
							</p>
							<p>
								We do this by building the most complete development platform created for
								developers, backed by the open source community. A platform that has all the
								solutions you need in one place, with maximum flexibility and minimum friction. A
								platform that moves with you on your journey, from ideation to scale. A platform
								that allows you to succeed in the challenges of today, and those of tomorrow.
							</p>
							<p>Build like a team of hundreds.</p>
						</div>
					</section>
				</section>
			</div>
		</div>

		<!-- <div class="aw-big-padding-section-level-1 u-position-relative aw-white-section theme-light">
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<div class="aw-hero is-center">
						<h2 class="aw-display aw-u-color-text-primary">Our Story</h2>
						<p class="aw-description">
							What once started as a passion project is now a beloved and awarded product that helps developers world wide to achieve more/unleash creativity and innovation.
						</p>
					</div>
				</div>
				<div class="aw-big-padding-section-level-2">
					<div class="aw-container">
						<div class="aw-timeline-content">
							<ol class="aw-timeline-content-list">
								<li class="aw-timeline-content-item">
									<div class="aw-timeline-content-item-top aw-grid-1-1"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div class="u-flex-vertical u-gap-16">
											<span class="aw-badges aw-eyebrow aw-u-cross-child-start">2019_</span>
											<h3 class="aw-title aw-u-color-text-primary">
												A passion project called Appwrite
											</h3>
											<p class="aw-main-body-400">
												Appwrite's first ever pull request was submitted in August 2019 by CEO and Founder Eldad A. Fux. Just one month later, September 2019, Appwrite officially launched. Soon the community started contributing by the hundreds pushing the product to new heights.
											</p>
										</div>
										<div class="">
											<div class="aw-media">
												<img class="" src="https://pink.appwrite.io/articles/announcement.png" alt="" loading="lazy">
											</div>
										</div>

									</div>

									<div class="aw-timeline-content-item-bottom aw-grid-1-1 is-not-mobile"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div>
											[CONTENT-left]
										</div>
										<div>
											<div class="aw-card is-white aw-u-max-width-350">
												<h6 class="aw-label">0.1 - 0.4 released</h6>
												<p class="aw-sub-body-400 u-margin-block-start-12">Early stages of authentication, avatars, database, teams, and storage features</p>
											</div>
										</div>
									</div>
								</li>
								<li class="aw-timeline-content-item">
									<div class="aw-grid-1-1"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div class="u-flex-vertical u-gap-16">
											<span class="aw-badges aw-eyebrow aw-u-cross-child-start">2019_</span>
											<h3 class="aw-title aw-u-color-text-primary">
												Building the team
											</h3>
											<p class="aw -main-body-400">
												After a year of building out in the open we closed our first funding round led by Ibex Investors, Seedcamp, and the Abraham Fund. With this new financial power we hired some of the top contributors in our open-source community. To this day we still hire people from our community.
											</p>
										</div>
										<div>[image]</div>
									</div>

									<div class="aw-timeline-content-item-bottom aw-grid-1-1 is-not-mobile"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div>
											<div class="aw-card is-white aw-u-max-width-168">
												<h6 class="aw-title">5k</h6>
												<p class="aw-sub-body-400 aw-u-margin-block-start-6">GitHub Stars</p>
											</div>
										</div>
										<div>
											[CONTENT-right]
										</div>
									</div>
								</li>
								<li class="aw-timeline-content-item">
									<div class="aw-grid-1-1"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div class="u-flex-vertical u-gap-16">
											<span class="aw-badges aw-eyebrow aw-u-cross-child-start">2019_</span>
											<h3 class="aw-title aw-u-color-text-primary">
												Community validation
											</h3>
											<p class="aw -main-body-400">
												In November 2021 we crossed the magic threshold of a 100,000 community members which led the way to our series A funding round. We received an amazing amount of $27 million in funding led by the Tiger Global to continue to drive our growth.
											</p>
										</div>
										<div>
											[image]
										</div>
									</div>

									<div class="aw-timeline-content-item-bottom aw-grid-1-1 is-not-mobile"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div>
											<div class="aw-card is-white">
												<div class="aw-social-item u-flex-vertical u-gap-24">
													<div class="u-flex u-gap-16 u-main-space-between">
														<div class="aw-user-box">
															<img class="aw-user-box-image" src="/images/avatars/eldad.png" alt="Avatar of Eldad Fux">
															<div class="aw-user-box-name aw-sub-body-500">Eldad Fux</div>
															<div class="aw-user-box-username aw-sub-body-400">@eldadfux</div>
														</div>
														<span class="aw-social-item-icon icon-twitter" aria-label="twitter" aria-hidden="true"></span>
													</div>
													<p class="aw-sub-body-500 aw-u-text-color-neutral-700">
														Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices lacus.
														Duis pellentesque quis purus in posuere.
													</p>
												</div>
											</div>
										</div>
										<div>
											[CONTENT-right]
										</div>
									</div>
								</li>
								<li class="aw-timeline-content-item">
									<div class="aw-grid-1-1"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div class="u-flex-vertical u-gap-16">
											<span class="aw-badges aw-eyebrow aw-u-cross-child-start">2019_</span>
											<h3 class="aw-title aw-u-color-text-primary">
												Continuous improvement
											</h3>
											<p class="aw -main-body-400">
												Towards the end of 2022 we released Appwrite 1.0 and the Console 2.0 for a better developer experience. It was the first time we produced a product, the Console, which was fully designed by our in house team. These are the initial versions of the products you know today.
											</p>
										</div>
										<div>
											[image]
										</div>

									</div>

									<div class="aw-timeline-content-item-bottom aw-grid-1-1 is-not-mobile"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div>
											[CONTENT-left]
										</div>
										<div>
											[CONTENT-right]
										</div>
									</div>
								</li>

								<li class="aw-timeline-content-item">
									<div class="aw-grid-1-1"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div class="u-flex-vertical u-gap-16">
											<span class="aw-badges aw-eyebrow aw-u-cross-child-start">2019_</span>
											<h3 class="aw-title aw-u-color-text-primary">
												Taking it to the Cloud
											</h3>
											<p class="aw -main-body-400">
												Aligned with our mission to make software development more accessible, we added our cloud solution to our services. Opening up the doors for more developers to  build with Appwrite as they were not required to self-host anymore.
											</p>
										</div>
										<div>[image]</div>
									</div>

									<div class="aw-timeline-content-item-bottom aw-grid-1-1 is-not-mobile"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div>
											[CONTENT-left]
										</div>
										<div>
											[CONTENT-right]
										</div>
									</div>
								</li>

							</ol>
						</div>
					</div>
				</div>
			</div>
		</div> -->
		<div class="aw-big-padding-section-level-1 aw-white-section theme-light">
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<div class="aw-hero aw-u-max-width-800">
						<h4 class="aw-display aw-u-color-text-primary">Backed by top investors</h4>
						<p class="aw-description aw-u-max-width-480 u-margin-inline-auto">
							Appwrite is proudly backed by some of the top investors in the industry.
						</p>
					</div>
					<ul class="aw-investor-cards aw-u-margin-block-start-64">
						<li>
							<div class="aw-card is-full-color" style="--card-padding:1rem;">
								<img src="/images/investors/light/bessemer.svg" alt="" height="63" />
							</div>
						</li>
						<li>
							<div class="aw-card is-full-color" style="--card-padding:1rem;">
								<img src="/images/investors/light/tiger-global.svg" alt="" height="63" />
							</div>
						</li>
						<li>
							<div class="aw-card is-full-color" style="--card-padding:1rem;">
								<img src="/images/investors/light/ibex.svg" alt="" height="63" />
							</div>
						</li>
						<li>
							<div class="aw-card is-full-color" style="--card-padding:1rem;">
								<img src="/images/investors/light/flybridge.svg" alt="" height="63" />
							</div>
						</li>
						<li>
							<div class="aw-card is-full-color" style="--card-padding:1rem;">
								<img src="/images/investors/light/seedcamp.svg" alt="" height="63" />
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<h5 class="aw-title aw-u-color-text-primary u-text-center">Angel Investors</h5>
					<ul class="aw-grid-2c-4c u-margin-block-start-48">
						<li class="u-flex-vertical">
							<h6 class="aw-main-body-500 aw-u-color-text-primary">Aaron Applebaum</h6>
							<p class="aw-main-body-500">Partner</p>
							<p class="aw-main-body-500">MizMaa</p>
							<ul class="u-flex u-gap-8 u-padding-block-start-16 u-margin-block-start-auto">
								<li>
									<a
										href="https://github.com/"
										class="aw-icon-button"
										aria-label=" on aGithub"
										target="_blank"
									>
										<span class="aw-icon-github" aria-hidden="true" />
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/appwrite"
										class="aw-icon-button"
										aria-label=" on aTwitter"
										target="_blank"
									>
										<span class="aw-icon-twitter" aria-hidden="true" />
									</a>
								</li>
							</ul>
						</li>
						<li class="u-flex-vertical">
							<h6 class="aw-main-body-500 aw-u-color-text-primary">Ariel Maislos</h6>
							<p class="aw-main-body-500">Angel Investor</p>
							<p class="aw-main-body-500">Former Apple IL CEO</p>
							<ul class="u-flex u-gap-8 u-padding-block-start-16 u-margin-block-start-auto">
								<li>
									<a
										href="https://github.com/"
										class="aw-icon-button"
										aria-label=" on aGithub"
										target="_blank"
									>
										<span class="aw-icon-github" aria-hidden="true" />
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/appwrite"
										class="aw-icon-button"
										aria-label=" on aTwitter"
										target="_blank"
									>
										<span class="aw-icon-twitter" aria-hidden="true" />
									</a>
								</li>
							</ul>
						</li>
						<li class="u-flex-vertical">
							<h6 class="aw-main-body-500 aw-u-color-text-primary">Gilad Engel</h6>
							<p class="aw-main-body-500">Angel Investor</p>
							<ul class="u-flex u-gap-8 u-padding-block-start-16 u-margin-block-start-auto">
								<li>
									<a
										href="https://github.com/"
										class="aw-icon-button"
										aria-label=" on aGithub"
										target="_blank"
									>
										<span class="aw-icon-github" aria-hidden="true" />
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/appwrite"
										class="aw-icon-button"
										aria-label=" on aTwitter"
										target="_blank"
									>
										<span class="aw-icon-twitter" aria-hidden="true" />
									</a>
								</li>
							</ul>
						</li>
						<li class="u-flex-vertical">
							<h6 class="aw-main-body-500 aw-u-color-text-primary">Krishna Visvanathan</h6>
							<p class="aw-main-body-500">Co-founder & Partner</p>
							<p class="aw-main-body-500">Crane Venture Partners</p>
							<ul class="u-flex u-gap-8 u-padding-block-start-16 u-margin-block-start-auto">
								<li>
									<a
										href="https://github.com/"
										class="aw-icon-button"
										aria-label=" on aGithub"
										target="_blank"
									>
										<span class="aw-icon-github" aria-hidden="true" />
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/appwrite"
										class="aw-icon-button"
										aria-label=" on aTwitter"
										target="_blank"
									>
										<span class="aw-icon-twitter" aria-hidden="true" />
									</a>
								</li>
							</ul>
						</li>
						<li class="u-flex-vertical">
							<h6 class="aw-main-body-500 aw-u-color-text-primary">Ameet Patel</h6>
							<p class="aw-main-body-500">Angel Investor</p>
							<ul class="u-flex u-gap-8 u-padding-block-start-16 u-margin-block-start-auto">
								<li>
									<a
										href="https://github.com/"
										class="aw-icon-button"
										aria-label=" on aGithub"
										target="_blank"
									>
										<span class="aw-icon-github" aria-hidden="true" />
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/appwrite"
										class="aw-icon-button"
										aria-label=" on aTwitter"
										target="_blank"
									>
										<span class="aw-icon-twitter" aria-hidden="true" />
									</a>
								</li>
							</ul>
						</li>
						<li class="u-flex-vertical">
							<h6 class="aw-main-body-500 aw-u-color-text-primary">Benno Jering</h6>
							<p class="aw-main-body-500">Partner</p>
							<p class="aw-main-body-500">Redline Capital</p>
							<ul class="u-flex u-gap-8 u-padding-block-start-16 u-margin-block-start-auto">
								<li>
									<a
										href="https://github.com/"
										class="aw-icon-button"
										aria-label=" on aGithub"
										target="_blank"
									>
										<span class="aw-icon-github" aria-hidden="true" />
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/appwrite"
										class="aw-icon-button"
										aria-label=" on aTwitter"
										target="_blank"
									>
										<span class="aw-icon-twitter" aria-hidden="true" />
									</a>
								</li>
							</ul>
						</li>
						<li class="u-flex-vertical">
							<h6 class="aw-main-body-500 aw-u-color-text-primary">James Lindenbaum</h6>
							<p class="aw-main-body-500">Co-founder</p>
							<p class="aw-main-body-500">Heroku</p>
							<ul class="u-flex u-gap-8 u-padding-block-start-16 u-margin-block-start-auto">
								<li>
									<a
										href="https://github.com/"
										class="aw-icon-button"
										aria-label=" on aGithub"
										target="_blank"
									>
										<span class="aw-icon-github" aria-hidden="true" />
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/appwrite"
										class="aw-icon-button"
										aria-label=" on aTwitter"
										target="_blank"
									>
										<span class="aw-icon-twitter" aria-hidden="true" />
									</a>
								</li>
							</ul>
						</li>
						<li class="u-flex-vertical">
							<h6 class="aw-main-body-500 aw-u-color-text-primary">Uri Boness</h6>
							<p class="aw-main-body-500">Co-Founder</p>
							<p class="aw-main-body-500">Elastic</p>
							<ul class="u-flex u-gap-8 u-padding-block-start-16 u-margin-block-start-auto">
								<li>
									<a
										href="https://github.com/"
										class="aw-icon-button"
										aria-label=" on aGithub"
										target="_blank"
									>
										<span class="aw-icon-github" aria-hidden="true" />
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/appwrite"
										class="aw-icon-button"
										aria-label=" on aTwitter"
										target="_blank"
									>
										<span class="aw-icon-twitter" aria-hidden="true" />
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="aw-big-padding-section-level-1 u-padding-0 u-overflow-hidden">
			<div class="aw-big-padding-section-level-2 is-margin-replace-padding u-position-relative">
				<img src="/images/bgs/pre-footer.svg" alt="" class="aw-pre-footer-bg" style="z-index:-1" />
				<div class="aw-container">
					<div class="aw-hero aw-u-max-width-380">
						<h3 class="aw-display aw-u-color-text-primary">Join the team</h3>
						<p class="aw-u-color-text-primary aw-u-opacity-64">
							Find your next career at Appwrite and join a team of remote workers.
						</p>
						<a
							href="https://careers.appwrite.io/"
							target="_blank"
							class="aw-button is-transparent u-cross-child-center u-margin-block-start-16"
						>
							<span>Careers</span>
						</a>
					</div>
					<FooterNav />
					<MainFooter />
				</div>
			</div>
		</div>
	</div>
</Main>

<style lang="scss">
	.aw-pre-footer-bg {
		position: absolute;
		top: clamp(300px, 50vw, 50%);
		left: clamp(300px, 50vw, 50%);
		transform: translate(-50%, -70%);
		width: clamp(1200px, 200vw, 3000px);
		height: auto;
		max-inline-size: unset;
		max-block-size: unset;
	}
</style>
