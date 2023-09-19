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
					<div class="aw-hero" style="--hero-max-inline-size:62.125rem; --hero-gap:1.125rem;">
						<h1 class="aw-headline aw-u-color-text-primary">
							Unleashing creativity and innovation in every creator
						</h1>
						<div class="">
							<p class="aw-description">
								Software development transforms our everyday lives, relying heavily on the creativity and innovation of developers. At Appwrite, we enable them to develop products the world loves by removing technical barriers with our backend products.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
		<div class="aw-big-padding-section-level-1">
			<div class="aw-big-padding-section-level-2">
				<section class="aw-container">
					<section class="aw-grid-1-1"
							style="--grid-1-1-gap:2rem; --grid-1-1-gap-desktop:6.25rem;">
						<div class="u-flex-vertical u-gap-32">
							<h2 class="aw-display aw-u-color-text-primary">Designed for and by developers</h2>
							<button class="aw-button u-cross-child-start aw-u-inline-width-100-percent-mobile-break1">
								<span>Join the team</span>
							</button>
						</div>

						<div class="aw-description u-flex-vertical u-gap-16">
							<p>
								At Appwrite it is our mission to eliminate friction and abstract complexity for every creator. Giving developers all the tools they need with the best experience possible to have all the capabilities to create and innovate without limits and with minimum concerns.
							</p>
							<p>
								We do this by building the most complete development platform created for developers, backed by the open source community. A platform that has all the solutions you need in one place, with maximum flexibility and minimum friction. A platform that moves with you on your journey, from ideation to scale. A platform that allows you to succeed in the challenges of today, and those of tomorrow.
							</p>
							<p>
								Build like a team of hundreds.
							</p>
						</div>
					</section>
				</section>
			</div>
		</div>


		<div class="aw-big-padding-section-level-1 u-position-relative aw-white-section theme-light">
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
											<p class="aw -main-body-400">
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
												Continuous improvement
											</h3>
											<p class="aw -main-body-400">
												Towards the end of 2022 we released Appwrite 1.0 and the Console 2.0 for a better developer experience. It was the first time we produced a product, the console, which was fully designed by our in house team. These are the initial versions of the products you know today.
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
		</div>
		<div class="aw-big-padding-section-level-1 aw-white-section theme-light">
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<div class="aw-hero">
						<h4 class="aw-display aw-u-color-text-primary">Backed by top investors</h4>
						<p class="aw-description">Appwrite is proudly backed by some of the top investors in the industry.</p>
					</div>
					<ul class="u-flex u-main-center u-gap-32">
						<li>
							<div class="aw-card is-full-color">
								<img src="" alt="" />
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					DDDDDDD
				</div>
			</div>
		</div>

		<div class="aw-big-padding-section-level-1 u-padding-0">



			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<div class="aw-hero is-center aw-u-max-width-800">
						<h3 class="aw-display aw-u-color-text-primary">Appwrite insights</h3>
						<p class="aw-main-body-400">Sign up to our blog and get the latest insights from Appwrite. Learn more about engineering, product design, building community, and tips & tricks for using Appwrite.</p>
					</div>
					<div
							class="aw-subscribe-input aw-input-text is-reset-input-inside u-width-full-line aw-u-max-width-380 u-margin-inline-auto u-margin-block-start-32"
					>
						<input type="email" placeholder="Enter your email" />
						<button class="aw-button">Sign up</button>
					</div>
				</div>
			</div>

			<div
				class="aw-big-padding-section-level-2 is-margin-replace-padding u-position-relative"
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
