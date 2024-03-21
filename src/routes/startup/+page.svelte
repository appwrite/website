<script lang="ts">
    import { Main } from '$lib/layouts';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import { TITLE_SUFFIX } from '$routes/titles';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';

    const title = 'Company' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
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
    <enhanced:img
        class="u-position-absolute u-inset-inline-start-0 u-inset-block-start-0"
        src="./bg-left.png"
        alt=""
    />
    <enhanced:img
        class="u-position-absolute u-inset-inline-end-0 u-inset-block-start-0"
        src="./bg-right.png"
        alt=""
    />
    <div class="web-big-padding-section u-position-relative">
        <div class="web-big-padding-section-level-1 u-position-relative">
            <div class="web-big-padding-section-level-2" style:margin-block="8rem">
                <section class="web-container web-u-padding-block-end-0">
                    <div
                        class="web-hero"
                        style="--hero-max-inline-size:49.375rem; --hero-gap:1.125rem;"
                    >
                        <h1 class="web-headline web-u-color-text-primary">
                            Build your startup with Appwrite
                        </h1>
                        <p class="web-description">
                            The Appwrite Startups Program supports your startup with a complete backend for you to build your products. Eligible startups receive $20,000 Cloud credits for 12 months.
                        </p>
                        <button class="web-button u-margin-inline-auto u-margin-block-start-12">
                            Apply now
                        </button>
                    </div>
                </section>
            </div>
        </div>
        <div class="web-big-padding-section-level-1 u-position-relative">
            <div class="web-big-padding-section-level-2">
                <section class="web-container">
                    <ul class="u-flex u-gap-80">
                        <li class="u-flex-vertical u-cross-center u-gap-16">
                            <img src="/images/icons/gradients/backend.svg" width="40" height="40" alt="">
                            <div class="u-flex-vertical u-gap-8 u-text-center">
                                <h2 class="web-label web-u-color-text-primary">Complete backend</h2>
                                <p class="web-main-body-500">Get access to Appwrite’s Pro plan and build your entire backend with Appwrite. </p>
                            </div>
                        </li>
                        <li class="u-flex-vertical u-cross-center u-gap-16">
                            <img src="/images/icons/gradients/cloud-credit.svg" width="40" height="40" alt="">
                            <div class="u-flex-vertical u-gap-8 u-text-center">
                                <h2 class="web-label web-u-color-text-primary">Cloud credits</h2>
                                <p class="web-main-body-500">Get $20,000 cloud credits to build with Appwrite Pro for 12 months and reduce risk at an early stage.</p>
                            </div>
                        </li>
                        <li class="u-flex-vertical u-cross-center u-gap-16">
                            <img src="/images/icons/gradients/support.svg" width="40" height="40" alt="">
                            <div class="u-flex-vertical u-gap-8 u-text-center">
                                <h2 class="web-label web-u-color-text-primary">Dedicated support</h2>
                                <p class="web-main-body-500">Get community support and dedicated email support from the Appwrite team.</p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>

        <!-- <div class="web-big-padding-section-level-1 u-position-relative web-white-section theme-light">
			<div class="web-big-padding-section-level-2">
				<div class="web-container">
					<div class="web-hero is-center">
						<h2 class="web-display web-u-color-text-primary">Our Story</h2>
						<p class="web-description">
							What once started as a passion project is now a beloved and awarded product that helps developers world wide to achieve more/unleash creativity and innovation.
						</p>
					</div>
				</div>
				<div class="web-big-padding-section-level-2">
					<div class="web-container">
						<div class="web-timeline-content">
							<ol class="web-timeline-content-list">
								<li class="web-timeline-content-item">
									<div class="web-timeline-content-item-top web-grid-1-1"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div class="u-flex-vertical u-gap-16">
											<span class="web-badges web-eyebrow web-u-cross-child-start">2019_</span>
											<h3 class="web-title web-u-color-text-primary">
												A passion project called Appwrite
											</h3>
											<p class="web-main-body-400">
												Appwrite's first ever pull request was submitted in August 2019 by CEO and Founder Eldad A. Fux. Just one month later, September 2019, Appwrite officially launched. Soon the community started contributing by the hundreds pushing the product to new heights.
											</p>
										</div>
										<div >
											<div class="web-media">
												<img  src="https://pink.appwrite.io/articles/announcement.png" alt="" loading="lazy">
											</div>
										</div>

									</div>

									<div class="web-timeline-content-item-bottom web-grid-1-1 is-not-mobile"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div>
											[CONTENT-left]
										</div>
										<div>
											<div class="web-card is-white web-u-max-width-350">
												<h6 class="web-label">0.1 - 0.4 released</h6>
												<p class="web-sub-body-400 u-margin-block-start-12">Early stages of authentication, avatars, database, teams, and storage features</p>
											</div>
										</div>
									</div>
								</li>
								<li class="web-timeline-content-item">
									<div class="web-grid-1-1"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div class="u-flex-vertical u-gap-16">
											<span class="web-badges web-eyebrow web-u-cross-child-start">2019_</span>
											<h3 class="web-title web-u-color-text-primary">
												Building the team
											</h3>
											<p class="aw -main-body-400">
												After a year of building out in the open we closed our first funding round led by Ibex Investors, Seedcamp, and the Abraham Fund. With this new financial power we hired some of the top contributors in our open-source community. To this day we still hire people from the open-source community.
											</p>
										</div>
										<div>[image]</div>
									</div>

									<div class="web-timeline-content-item-bottom web-grid-1-1 is-not-mobile"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div>
											<div class="web-card is-white web-u-max-width-168">
												<h6 class="web-title">5k</h6>
												<p class="web-sub-body-400 web-u-margin-block-start-6">GitHub Stars</p>
											</div>
										</div>
										<div>
											[CONTENT-right]
										</div>
									</div>
								</li>
								<li class="web-timeline-content-item">
									<div class="web-grid-1-1"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div class="u-flex-vertical u-gap-16">
											<span class="web-badges web-eyebrow web-u-cross-child-start">2019_</span>
											<h3 class="web-title web-u-color-text-primary">
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

									<div class="web-timeline-content-item-bottom web-grid-1-1 is-not-mobile"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div>
											<div class="web-card is-white">
												<div class="web-social-item u-flex-vertical u-gap-24">
													<div class="u-flex u-gap-16 u-main-space-between">
														<div class="web-user-box">
															<img class="web-user-box-image" src="/images/avatars/eldad.png" alt="Avatar of Eldad Fux">
															<div class="web-user-box-name web-sub-body-500">Eldad Fux</div>
															<div class="web-user-box-username web-sub-body-400">@eldadfux</div>
														</div>
														<span class="web-social-item-icon icon-twitter" aria-label="twitter" aria-hidden="true"></span>
													</div>
													<p class="web-sub-body-500 web-u-text-color-neutral-700">
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
								<li class="web-timeline-content-item">
									<div class="web-grid-1-1"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div class="u-flex-vertical u-gap-16">
											<span class="web-badges web-eyebrow web-u-cross-child-start">2019_</span>
											<h3 class="web-title web-u-color-text-primary">
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

									<div class="web-timeline-content-item-bottom web-grid-1-1 is-not-mobile"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div>
											[CONTENT-left]
										</div>
										<div>
											[CONTENT-right]
										</div>
									</div>
								</li>

								<li class="web-timeline-content-item">
									<div class="web-grid-1-1"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div class="u-flex-vertical u-gap-16">
											<span class="web-badges web-eyebrow web-u-cross-child-start">2019_</span>
											<h3 class="web-title web-u-color-text-primary">
												Taking it to the Cloud
											</h3>
											<p class="aw -main-body-400">
												Aligned with our mission to make software development more accessible, we added our cloud solution to our services. Opening up the doors for more developers to  build with Appwrite as they were not required to self-host anymore.
											</p>
										</div>
										<div>[image]</div>
									</div>

									<div class="web-timeline-content-item-bottom web-grid-1-1 is-not-mobile"
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
        <div class="web-big-padding-section-level-1 web-white-section theme-light">
            <div class="web-big-padding-section-level-2">
                <div class="web-container">
                    <div class="web-hero web-u-max-width-800">
                        <h4 class="web-display web-u-color-text-primary">Backed by top investors</h4>
                        <p class="web-description web-u-max-width-480 u-margin-inline-auto">
                            Appwrite is proudly backed by some of the top investors in the industry.
                        </p>
                    </div>
                    <ul class="web-investor-cards web-u-margin-block-start-64">
                        <li>
                            <a
                                href="https://www.bvp.com/"
                                class="web-card"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div class="web-card is-full-color" style="--card-padding:1rem;">
                                    <img
                                        src="/images/investors/light/bessemer.svg"
                                        alt=""
                                        height="63"
                                    />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.tigerglobal.com/"
                                class="web-card"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div class="web-card is-full-color" style="--card-padding:1rem;">
                                    <img
                                        src="/images/investors/light/tiger-global.svg"
                                        alt=""
                                        height="63"
                                    />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.ibexinvestors.com/"
                                class="web-card"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div class="web-card is-full-color" style="--card-padding:1rem;">
                                    <img
                                        src="/images/investors/light/ibex.svg"
                                        alt=""
                                        height="63"
                                    />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.flybridge.com/"
                                class="web-card"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div class="web-card is-full-color" style="--card-padding:1rem;">
                                    <img
                                        src="/images/investors/light/flybridge.svg"
                                        alt=""
                                        height="63"
                                    />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://seedcamp.com/"
                                class="web-card"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div class="web-card is-full-color" style="--card-padding:1rem;">
                                    <img
                                        src="/images/investors/light/seedcamp.svg"
                                        alt=""
                                        height="63"
                                    />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="web-big-padding-section-level-2">
                <div class="web-container">
                    <h5 class="web-title web-u-color-text-primary u-text-center">Angel Investors</h5>
                    <ul class="web-grid-2c-4c u-margin-block-start-48">
                        <li class="u-flex-vertical">
                            <h6 class="web-main-body-500 web-u-color-text-primary">
                                Aaron Applebaum
                            </h6>
                            <p class="web-main-body-500">Partner</p>
                            <p class="web-main-body-500">MizMaa</p>
                            <ul
                                class="u-flex u-gap-8 u-padding-block-start-16 u-margin-block-start-auto"
                            >
                                <li>
                                    <a
                                        href="https://github.com/aapplbaum"
                                        class="web-icon-button"
                                        aria-label=" on aGithub"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span class="web-icon-github" aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/aapplbaum"
                                        class="web-icon-button"
                                        aria-label=" on aTwitter"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span class="web-icon-twitter" aria-hidden="true" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="u-flex-vertical">
                            <h6 class="web-main-body-500 web-u-color-text-primary">Ariel Maislos</h6>
                            <p class="web-main-body-500">Angel Investor</p>
                            <p class="web-main-body-500">Former Apple IL CEO</p>
                            <ul
                                class="u-flex u-gap-8 u-padding-block-start-16 u-margin-block-start-auto"
                            >
                                <li>
                                    <a
                                        href="https://github.com/arielmaislos"
                                        class="web-icon-button"
                                        aria-label=" on aGithub"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span class="web-icon-github" aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/arielmaislos"
                                        class="web-icon-button"
                                        aria-label=" on aTwitter"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span class="web-icon-twitter" aria-hidden="true" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="u-flex-vertical">
                            <h6 class="web-main-body-500 web-u-color-text-primary">Gilad Engel</h6>
                            <p class="web-main-body-500">Angel Investor</p>
                            <ul
                                class="u-flex u-gap-8 u-padding-block-start-16 u-margin-block-start-auto"
                            />
                        </li>
                        <li class="u-flex-vertical">
                            <h6 class="web-main-body-500 web-u-color-text-primary">
                                Krishna Visvanathan
                            </h6>
                            <p class="web-main-body-500">Co-founder & Partner</p>
                            <p class="web-main-body-500">Crane Venture Partners</p>
                            <ul
                                class="u-flex u-gap-8 u-padding-block-start-16 u-margin-block-start-auto"
                            >
                                <li>
                                    <a
                                        href="https://github.com/KVCVP"
                                        class="web-icon-button"
                                        aria-label=" on aGithub"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span class="web-icon-github" aria-hidden="true" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="u-flex-vertical">
                            <h6 class="web-main-body-500 web-u-color-text-primary">Ameet Patel</h6>
                            <p class="web-main-body-500">Angel Investor</p>
                            <ul
                                class="u-flex u-gap-8 u-padding-block-start-16 u-margin-block-start-auto"
                            >
                                <li>
                                    <a
                                        href="https://github.com/ameet-patel"
                                        class="web-icon-button"
                                        aria-label=" on aGithub"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span class="web-icon-github" aria-hidden="true" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="u-flex-vertical">
                            <h6 class="web-main-body-500 web-u-color-text-primary">Benno Jering</h6>
                            <p class="web-main-body-500">Partner</p>
                            <p class="web-main-body-500">Redline Capital</p>
                            <ul
                                class="u-flex u-gap-8 u-padding-block-start-16 u-margin-block-start-auto"
                            >
                                <li>
                                    <a
                                        href="https://github.com/bennojering/"
                                        class="web-icon-button"
                                        aria-label=" on aGithub"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span class="web-icon-github" aria-hidden="true" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="u-flex-vertical">
                            <h6 class="web-main-body-500 web-u-color-text-primary">
                                James Lindenbaum
                            </h6>
                            <p class="web-main-body-500">Co-founder</p>
                            <p class="web-main-body-500">Heroku</p>
                            <ul
                                class="u-flex u-gap-8 u-padding-block-start-16 u-margin-block-start-auto"
                            >
                                <li>
                                    <a
                                        href="https://github.com/jnl"
                                        class="web-icon-button"
                                        aria-label=" on aGithub"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span class="web-icon-github" aria-hidden="true" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="u-flex-vertical">
                            <h6 class="web-main-body-500 web-u-color-text-primary">Uri Boness</h6>
                            <p class="web-main-body-500">Co-Founder</p>
                            <p class="web-main-body-500">Elastic</p>
                            <ul
                                class="u-flex u-gap-8 u-padding-block-start-16 u-margin-block-start-auto"
                            >
                                <li>
                                    <a
                                        href="https://twitter.com/uboness"
                                        class="web-icon-button"
                                        aria-label=" on aTwitter"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span class="web-icon-twitter" aria-hidden="true" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="web-big-padding-section-level-1 u-padding-0 u-overflow-hidden">
            <div
                class="web-big-padding-section-level-2 is-margin-replace-padding u-position-relative"
            >
                <img
                    src="/images/bgs/pre-footer.png"
                    alt=""
                    class="web-pre-footer-bg"
                    style="z-index:-1"
                />
                <div class="web-container">
                    <div class="web-hero web-u-max-width-380">
                        <h3 class="web-display web-u-color-text-primary">Join the team</h3>
                        <p class="web-u-color-text-primary web-u-opacity-64">
                            Find your next career at Appwrite and join a team of remote workers.
                        </p>
                        <a
                            href="https://appwrite.careers"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="web-button is-transparent u-cross-child-center u-margin-block-start-16"
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
    .web-pre-footer-bg {
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
