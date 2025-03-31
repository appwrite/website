<script lang="ts">
    import { Main } from '$lib/layouts';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import { TITLE_SUFFIX } from '$routes/titles';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';

    const title = 'Company' + TITLE_SUFFIX;
    const description =
        'At Appwrite, we aim to remove technical barriers with our backend solutions. Click here to learn more about our organization, its mission and goals.';
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Description -->
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
    <enhanced:img class="absolute start-0" src="./bg-left.png" alt="" />
    <enhanced:img class="absolute end-0" src="./bg-right.png" alt="" />
    <div class="web-big-padding-section relative">
        <div class="relative py-10">
            <div class="web-big-padding-section-level-2" style:margin-block="8rem">
                <section class="web-u-padding-block-end-0 container">
                    <div
                        class="web-hero"
                        style="--hero-max-inline-size:62.125rem; --hero-gap:1.125rem;"
                    >
                        <h1 class="text-headline font-aeonik-pro text-primary">
                            Unleashing creativity and innovation in every creator
                        </h1>
                        <div>
                            <p class="text-description">
                                Software development transforms our everyday lives, relying heavily
                                on the creativity and innovation of developers. At Appwrite, we
                                enable them to develop products the world loves by removing
                                technical barriers with our backend products.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="relative py-10">
            <div class="web-big-padding-section-level-2">
                <section class="container">
                    <section
                        class="web-grid-1-1"
                        style="--grid-1-1-gap:2rem; --grid-1-1-gap-desktop:6.25rem;"
                    >
                        <div class="flex flex-col gap-8">
                            <h2 class="text-display font-aeonik-pro text-primary">
                                Designed for and by developers
                            </h2>
                            <a
                                href="https://appwrite.careers"
                                class="web-button web-u-inline-width-100-percent-mobile-break1 self-start"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>Join the team</span>
                            </a>
                        </div>

                        <div class="text-description flex flex-col gap-4">
                            <p>
                                At Appwrite it is our mission to eliminate friction and abstract
                                complexity for every creator. Giving developers all the tools they
                                need with the best experience possible to have all the capabilities
                                to create and innovate without limits and with minimum concerns.
                            </p>
                            <p>
                                We do this by building the most complete development platform
                                created for developers, backed by the open source community. A
                                platform that has all the solutions you need in one place, with
                                maximum flexibility and minimum friction. A platform that moves with
                                you on your journey, from ideation to scale. A platform that allows
                                you to succeed in the challenges of today, and those of tomorrow.
                            </p>
                            <p>Build like a team of hundreds.</p>
                        </div>
                    </section>
                </section>
            </div>
        </div>

        <!-- <div class="py-10 relative web-white-section theme-light">
			<div class="web-big-padding-section-level-2">
				<div class="container">
					<div class="web-hero is-center">
						<h2 class="text-display font-aeonik-pro text-primary">Our Story</h2>
						<p class="text-description">
							What once started as a passion project is now a beloved and awarded product that helps developers world wide to achieve more/unleash creativity and innovation.
						</p>
					</div>
				</div>
				<div class="web-big-padding-section-level-2">
					<div class="container">
						<div class="web-timeline-content">
							<ol class="web-timeline-content-list">
								<li class="web-timeline-content-item">
									<div class="web-timeline-content-item-top web-grid-1-1"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div class="flex flex-col gap-4">
											<span class="web-badges text-micro uppercase web-u-cross-child-start">2019_</span>
											<h3 class="text-title font-aeonik-pro text-primary">
												A passion project called Appwrite
											</h3>
											<p class="text-body">
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
												<h6 class="text-label">0.1 - 0.4 released</h6>
												<p class="text-sub-body mt-3">Early stages of authentication, avatars, database, teams, and storage features</p>
											</div>
										</div>
									</div>
								</li>
								<li class="web-timeline-content-item">
									<div class="web-grid-1-1"
										 style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;">
										<div class="flex flex-col gap-4">
											<span class="web-badges text-micro uppercase web-u-cross-child-start">2019_</span>
											<h3 class="text-title font-aeonik-pro text-primary">
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
												<h6 class="text-title font-aeonik-pro">5k</h6>
												<p class="text-sub-body web-u-margin-block-start-6">GitHub Stars</p>
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
										<div class="flex flex-col gap-4">
											<span class="web-badges text-micro uppercase web-u-cross-child-start">2019_</span>
											<h3 class="text-title font-aeonik-pro text-primary">
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
												<div class="web-social-item flex flex-col gap-6">
													<div class="flex gap-4 justify-between">
														<div class="web-user-box">
															<img class="web-user-box-image" src="/images/avatars/eldad.png" alt="Avatar of Eldad Fux">
															<div class="web-user-box-name text-sub-body font-medium">Eldad Fux</div>
															<div class="web-user-box-username text-sub-body">@eldadfux</div>
														</div>
														<span class="web-social-item-icon icon-twitter" aria-label="twitter" aria-hidden="true"></span>
													</div>
													<p class="text-sub-body font-medium web-u-text-color-neutral-700">
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
										<div class="flex flex-col gap-4">
											<span class="web-badges text-micro uppercase web-u-cross-child-start">2019_</span>
											<h3 class="text-title font-aeonik-pro text-primary">
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
										<div class="flex flex-col gap-4">
											<span class="web-badges text-micro uppercase web-u-cross-child-start">2019_</span>
											<h3 class="text-title font-aeonik-pro text-primary">
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
        <div class="web-white-section light py-10">
            <div class="web-big-padding-section-level-2">
                <div class="container">
                    <div class="web-hero web-u-max-width-800">
                        <h4 class="text-display font-aeonik-pro text-primary">
                            Backed by top investors
                        </h4>
                        <p class="text-description web-u-max-width-480 mx-auto">
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
                <div class="container">
                    <h5 class="text-title font-aeonik-pro text-primary text-center">
                        Angel Investors
                    </h5>
                    <ul class="web-grid-2c-4c mt-12">
                        <li class="flex flex-col">
                            <h6 class="text-body text-primary font-medium">Aaron Applebaum</h6>
                            <p class="text-body font-medium">Partner</p>
                            <p class="text-body font-medium">MizMaa</p>
                            <ul class="mt-auto flex gap-2 pt-4">
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
                        <li class="flex flex-col">
                            <h6 class="text-body text-primary font-medium">Ariel Maislos</h6>
                            <p class="text-body font-medium">Angel Investor</p>
                            <p class="text-body font-medium">Former Apple IL CEO</p>
                            <ul class="mt-auto flex gap-2 pt-4">
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
                        <li class="flex flex-col">
                            <h6 class="text-body text-primary font-medium">Gilad Engel</h6>
                            <p class="text-body font-medium">Angel Investor</p>
                            <ul class="mt-auto flex gap-2 pt-4" />
                        </li>
                        <li class="flex flex-col">
                            <h6 class="text-body text-primary font-medium">Krishna Visvanathan</h6>
                            <p class="text-body font-medium">Co-founder & Partner</p>
                            <p class="text-body font-medium">Crane Venture Partners</p>
                            <ul class="mt-auto flex gap-2 pt-4">
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
                        <li class="flex flex-col">
                            <h6 class="text-body text-primary font-medium">Ameet Patel</h6>
                            <p class="text-body font-medium">Angel Investor</p>
                            <ul class="mt-auto flex gap-2 pt-4">
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
                        <li class="flex flex-col">
                            <h6 class="text-body text-primary font-medium">Benno Jering</h6>
                            <p class="text-body font-medium">Partner</p>
                            <p class="text-body font-medium">Redline Capital</p>
                            <ul class="mt-auto flex gap-2 pt-4">
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
                        <li class="flex flex-col">
                            <h6 class="text-body text-primary font-medium">James Lindenbaum</h6>
                            <p class="text-body font-medium">Co-founder</p>
                            <p class="text-body font-medium">Heroku</p>
                            <ul class="mt-auto flex gap-2 pt-4">
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
                        <li class="flex flex-col">
                            <h6 class="text-body text-primary font-medium">Uri Boness</h6>
                            <p class="text-body font-medium">Co-Founder</p>
                            <p class="text-body font-medium">Elastic</p>
                            <ul class="mt-auto flex gap-2 pt-4">
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

        <div class="overflow-hidden p-0 pt-10">
            <div class="web-big-padding-section-level-2 is-margin-replace-padding relative">
                <img
                    src="/images/bgs/pre-footer.png"
                    alt=""
                    class="web-pre-footer-bg"
                    style="z-index:-1"
                />
                <div class="container">
                    <div class="web-hero web-u-max-width-380">
                        <h3 class="text-display font-aeonik-pro text-primary">Join the team</h3>
                        <p class="text-primary web-u-opacity-64">
                            Find your next career at Appwrite and join a team of remote workers.
                        </p>
                        <a
                            href="https://appwrite.careers"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="web-button is-transparent mt-4 self-center"
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

    .web-big-padding-section-level-2.is-margin-replace-padding {
        padding-bottom: 0;
    }
</style>
