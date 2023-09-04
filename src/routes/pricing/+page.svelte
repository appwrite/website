<script lang="ts">
	import { Tabs } from '$lib/UI';
	import { MainFooter, FooterNav, PreFooter } from '$lib/components';

	import { Homepage } from '$lib/layouts';
	import Faq from './faq.svelte';
</script>

<div class="u-position-absolute u-overflow-hidden" style="pointer-events:none; inline-size:100%;">
	<img
		src="/images/bgs/pricing-hero.svg"
		alt=""
		class="aw-u-gradient-mobile-align"
		style="margin-inline:auto; display:block;"
	/>
</div>

<Homepage>
	<div class="aw-big-padding-section">
		<div class="aw-big-padding-section-level-1 theme-dark">
			<div class="aw-big-padding-section-level-2">
				<section class="aw-container">
					<div class="aw-hero">
						<h1
							class="aw-display aw-u-max-width-700 aw-u-cross-child-center aw-u-opacity-90 aw-u-mobile-align-text-center"
							style="background: linear-gradient(90deg, #F47298 0%, #E4E1E5 61.98%, #E4E4E7 100%);
                                -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; padding-block-end:2px;"
						>
							Simple, transparent pricing with no surprises
						</h1>
					</div>
				</section>
			</div>
			<div class="aw-big-padding-section-level-2">
				<section class="aw-container">
					<div class="aw-pricing-cards">
						<ul class="aw-pricing-cards-list">
							<li>
								<article
									class="aw-card is-transparent has-border-gradient u-height-100-percent"
									style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 63.19%, rgba(255, 255, 255, 0.00) 100%);"
								>
									<div class="aw-pricing-cards-item">
										<header class="aw-pricing-cards-header">
											<h2 class="aw-label">Free</h2>
											<div class="aw-title aw-u-color-text-primary u-margin-block-start-8">$0</div>
											<div class="u-margin-block-start-4 u-opacity-0">per user/month</div>
											<p class="aw-main-body-500 u-margin-block-start-16">
												For personal passion projects and non-commercial use
											</p>
											<button class="aw-button is-secondary is-full-width u-margin-block-start-32">
												<span class="aw-sub-body-500">Start building</span>
											</button>
										</header>
										<div class="aw-pricing-cards-content">
											<ul class="aw-checked-list-circle">
												<li class=""><span class="">100GB bandwidth</span></li>
												<li class=""><span class="">Unlimited projects</span></li>
												<li class=""><span class="">Never paused</span></li>
												<li class=""><span class="">750K executions</span></li>
												<li class=""><span class="">50MB uploads</span></li>
												<li class=""><span class="">1 Database, 3 Buckets, 5 Functions</span></li>
												<li class=""><span class="">Community support</span></li>
												<li class=""><span class="">Non-removable Appwrite branding</span></li>
												<li class=""><span class="">No Add-ons</span></li>
											</ul>
										</div>
									</div>
								</article>
							</li>
							<li>
								<article
									class="aw-card is-transparent is-transparent-pink has-border-gradient u-height-100-percent"
								>
									<div class="aw-pricing-cards-item">
										<header class="aw-pricing-cards-header">
											<h2 class="aw-label">Pro</h2>
											<div class="aw-title aw-u-color-text-primary u-margin-block-start-8">$15</div>
											<div class="u-margin-block-start-4">per user/month</div>
											<p class="aw-main-body-500 u-margin-block-start-16">
												For pro teams and production projects that need to scale
											</p>
											<button class="aw-button is-full-width u-margin-block-start-32">
												<span class="aw-sub-body-500">Get Pro</span>
											</button>
										</header>
										<div class="aw-pricing-cards-content">
											<p>Everything in Free plus:</p>
											<ul class="aw-checked-list-circle">
												<li class=""><span class="">300GB bandwidth</span></li>
												<li class=""><span class="">Unlimited projects</span></li>
												<li class=""><span class="">Never paused</span></li>
												<li class=""><span class="">150K Monthly active users</span></li>
												<li class=""><span class="">150GB Storage</span></li>
												<li class=""><span class="">3M executions</span></li>
												<li class="">
													<span class="">Unlimited Databases, Buckets and Functions</span>
												</li>
												<li class=""><span class="">Email support</span></li>
												<li class=""><span class="">Removable Appwrite branding</span></li>
												<li class=""><span class="">Add-ons</span></li>
											</ul>
										</div>
									</div>
								</article>
							</li>
							<li>
								<article
									class="aw-card is-transparent has-border-gradient u-height-100-percent"
									style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 63.19%, rgba(255, 255, 255, 0.00) 100%);"
								>
									<div class="aw-pricing-cards-item">
										<header class="aw-pricing-cards-header">
											<h2 class="aw-label">Scale</h2>
											<div class="aw-title aw-u-color-text-primary u-margin-block-start-8">
												$685
											</div>
											<div class="u-margin-block-start-4">per organiztion/month</div>
											<p class="aw-main-body-500 u-margin-block-start-16">
												For scaling teams and agencies that need dedicated support.
											</p>
											<button class="aw-button is-secondary is-full-width u-margin-block-start-32">
												<span class="aw-sub-body-500">Get Scale</span>
											</button>
										</header>
										<div class="aw-pricing-cards-content">
											<p>Everything in Free & Pro, plus:</p>
											<ul class="aw-checked-list-circle">
												<li class=""><span class="">Extra support log retention days</span></li>
												<li class=""><span class="">Additional org member roles</span></li>
												<li class=""><span class="">SSO</span></li>
											</ul>
										</div>
									</div>
								</article>
							</li>
						</ul>
					</div>

					<ul class="aw-grid-1-1-opt-2 u-gap-32 aw-u-margin-block-start-80">
						<li>
							<article
								class="aw-card is-transparent has-border-gradient u-min-height-100-percent"
								style="background:rgba(35, 35, 37, 0.90);"
							>
								<header class="u-flex u-gap-12">
									<h3 class="aw-main-body-500 aw-u-color-text-primary">Enterprises</h3>
									<div class="aw-inline-tag is-pink">Coming Soon</div>
								</header>
								<p class="u-margin-block-start-8">
									Large scale projects seeking greater performance, collaboration and security.
								</p>
								<button class="aw-button is-secondary u-margin-block-start-32">
									<span>Contact Us</span>
								</button>
							</article>
						</li>
						<li>
							<article
								class="aw-card is-transparent has-border-gradient u-min-height-100-percent"
								style="background:rgba(35, 35, 37, 0.90);"
							>
								<header class="u-flex u-gap-12">
									<h3 class="aw-main-body-500 aw-u-color-text-primary">Open-source teams</h3>
								</header>
								<p class="u-margin-block-start-8">
									We support OSS companies with a free Pro Plan. Get in touch to find out.
								</p>
								<button class="aw-button is-secondary u-margin-block-start-32">
									<span>Contact Us</span>
								</button>
							</article>
						</li>
					</ul>
				</section>
			</div>
		</div>
		<div class="aw-big-padding-section-level-1 aw-white-section theme-light">
			<div class="aw-big-padding-section-level-2">
				<div class="u-position-relative">
					<article>
						<div class="aw-container">
							<header class="aw-u-text-align-center">
								<h3 class="aw-title aw-u-color-text-primary">Compare plans</h3>
								<p class="aw-main-body-500 u-margin-block-start-16">
									Discover our plans and find the one that fits your project’s needs.
								</p>
							</header>

							<div
								class="aw-u-padding-block-start-48 aw-u-padding-inline-8 aw-u-margin-inline-8-negative aw-u-filter-blur-8 /u-position-sticky /u-z-index-5"
								style="/--inset-block-start:2rem"
							>
								<ul
									class="aw-secondary-tabs aw-is-only-mobile aw-u-mobile-divider"
									style="
                --p-secondary-tabs-bg-color-default:var(--aw-color-neutral-0);
                --p-secondary-tabs-text-color-selected:var(--aw-color-accent);
                --p-secondary-tabs-bg-color-selected:var(--aw-color-accent) / 0.08;"
								>
									<li class="aw-secondary-tabs-item u-stretch">
										<button class="aw-secondary-tabs-button is-selected u-width-full-line">
											<span class="aw-main-body-500">Free</span>
										</button>
									</li>
									<li class="aw-secondary-tabs-item u-stretch">
										<button class="aw-secondary-tabs-button u-width-full-line">
											<span class="aw-main-body-500">Pro</span>
										</button>
									</li>
									<li class="aw-secondary-tabs-item u-stretch">
										<button class="aw-secondary-tabs-button u-width-full-line">
											<span class="aw-main-body-500">Scale</span>
										</button>
									</li>
								</ul>
							</div>

							<div
								class="aw-is-not-mobile aw-u-grid-auto-column-1fr is-with-footer-border u-gap-32 aw-u-padding-inline-8 aw-u-margin-inline-8-negative aw-u-padding-block-start-80
                         aw-u-filter-blur-8 u-position-sticky u-z-index-5"
								style="--inset-block-start:1rem"
							>
								<div
									class="aw-label aw-u-color-text-primary aw-u-cross-child-center"
									style="opacity:0"
								>
									Compare plans
								</div>
								<div class="aw-mini-card">
									<div class="u-flex u-cross-center u-gap-16 u-flex-wrap u-main-space-between">
										<h4 class="aw-label aw-u-color-text-primary">Free</h4>
										<button class="aw-button is-secondary">
											<span class="aw-sub-body-500">Start building</span>
										</button>
									</div>
								</div>
								<div class="aw-mini-card">
									<div class="u-flex u-cross-center u-gap-16 u-flex-wrap u-main-space-between">
										<h4 class="aw-label aw-u-color-text-primary">Pro</h4>
										<button class="aw-button">
											<span class="aw-sub-body-500">Go Pro</span>
										</button>
									</div>
								</div>
								<div class="aw-mini-card">
									<div class="u-flex u-cross-center u-gap-16 u-flex-wrap u-main-space-between">
										<h4 class="aw-label aw-u-color-text-primary">Scale</h4>
										<button class="aw-button is-secondary">
											<span class="aw-sub-body-500">Get Scale</span>
										</button>
									</div>
								</div>
							</div>
							<div class="aw-u-stretch-sep-full-screen" />

							<table class="aw-compare-table is-open-in-mobile aw-sub-body-400">
								<caption class="aw-compare-table-caption aw-description aw-u-color-text-primary">
									<button class="aw-compare-table-caption-button">
										<span>Resources</span>
										<span class="icon-cheveron-down aw-is-only-mobile" aria-hidden="true" />
									</button>
								</caption>
								<tbody class="aw-compare-table-body">
									<tr>
										<th class="aw-sub-body-500">Bandwidth</th>
										<td class="level-0 is-selected">10GB</td>
										<td class="level-1">300GB</td>
										<td class="level-2">5TB</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Additional bandwidth</th>
										<td class="level-0 is-selected">-</td>
										<td class="level-1">$40 per 100GB</td>
										<td class="level-2">$40 per 100GB</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Storage</th>
										<td class="level-0 is-selected">2GB</td>
										<td class="level-1">150GB</td>
										<td class="level-2">500GB</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Additional storage</th>
										<td class="level-0 is-selected">-</td>
										<td class="level-1">$3 per 100GB</td>
										<td class="level-2">$3 per 100GB</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Compute</th>
										<td class="level-0 is-selected">750K executions</td>
										<td class="level-1">3.5M executions</td>
										<td class="level-2">10M executions</td>
									</tr>
								</tbody>
							</table>

							<table class="aw-compare-table aw-sub-body-400">
								<caption class="aw-compare-table-caption aw-description aw-u-color-text-primary">
									<button class="aw-compare-table-caption-button">
										<span>Platform</span>
										<span class="icon-cheveron-down aw-is-only-mobile" aria-hidden="true" />
									</button>
								</caption>
								<tbody class="aw-compare-table-body">
									<tr>
										<th class="aw-sub-body-500">Number of projects</th>
										<td class="level-0 is-selected">Unlimited</td>
										<td class="level-1">Unlimited</td>
										<td class="level-2">Unlimited</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Projects pausing</th>
										<td class="level-0 is-selected">Never</td>
										<td class="level-1">Never</td>
										<td class="level-2">Never</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Organization Members</th>
										<td class="level-0 is-selected">1</td>
										<td class="level-1">1</td>
										<td class="level-2">Unlimited</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Additional Organization members</th>
										<td class="level-0 is-selected">-</td>
										<td class="level-1">$15 per member</td>
										<td class="level-2">$0</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Connected websites and apps</th>
										<td class="level-0 is-selected">3 per project</td>
										<td class="level-1">Unlimited</td>
										<td class="level-2">Unlimited</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Custom domains</th>
										<td class="level-0 is-selected">Unlimited</td>
										<td class="level-1">Unlimited</td>
										<td class="level-2">Unlimited</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Appwrite branding on emails</th>
										<td class="level-0 is-selected">
											<img src="/images/icons/gradients/v-icon.svg" alt="has" />
										</td>
										<td class="level-1">-</td>
										<td class="level-2">-</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Webhooks</th>
										<td class="level-0 is-selected">2 Per project</td>
										<td class="level-1">Unlimited</td>
										<td class="level-2">Unlimited</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Logs retention</th>
										<td class="level-0 is-selected">1 hour</td>
										<td class="level-1">7 days</td>
										<td class="level-2">14 days</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Budget caps and alerts</th>
										<td class="level-0 is-selected">Not needed</td>
										<td class="level-1">
											<img src="/images/icons/gradients/v-icon.svg" alt="available" />
										</td>
										<td class="level-2">
											<img src="/images/icons/gradients/v-icon.svg" alt="available" />
										</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Additional organization member roles</th>
										<td class="level-0 is-selected">Unlimited</td>
										<td class="level-1">Unlimited</td>
										<td class="level-2">Unlimited</td>
									</tr>
								</tbody>
							</table>

							<table class="aw-compare-table aw-sub-body-400">
								<caption class="aw-compare-table-caption aw-description aw-u-color-text-primary">
									<button class="aw-compare-table-caption-button">
										<span>Auth</span>
										<span class="icon-cheveron-down aw-is-only-mobile" aria-hidden="true" />
									</button>
								</caption>
								<tbody class="aw-compare-table-body">
									<tr>
										<th class="aw-sub-body-500">Users</th>
										<td class="level-0 is-selected">75,000 Monthly active users</td>
										<td class="level-1">200,000 Monthly active users</td>
										<td class="level-2">500,000 Monthly active users</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Additional users (cost per user)</th>
										<td class="level-0 is-selected">-</td>
										<td class="level-1">$3 per 1,000 users</td>
										<td class="level-2">$3 per 1,000 users</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Teams</th>
										<td class="level-0 is-selected">100 per project</td>
										<td class="level-1">Unlimited</td>
										<td class="level-2">Unlimited</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">SSO</th>
										<td class="level-0 is-selected">-</td>
										<td class="level-1">-</td>
										<td class="level-2">Coming soon</td>
									</tr>
								</tbody>
							</table>

							<table class="aw-compare-table aw-sub-body-400">
								<caption class="aw-compare-table-caption aw-description aw-u-color-text-primary">
									<button class="aw-compare-table-caption-button">
										<span>Databases</span>
										<span class="icon-cheveron-down aw-is-only-mobile" aria-hidden="true" />
									</button>
								</caption>
								<tbody class="aw-compare-table-body">
									<tr>
										<th class="aw-sub-body-500">Databases</th>
										<td class="level-0 is-selected">1 per project</td>
										<td class="level-1">Unlimited</td>
										<td class="level-2">Unlimited</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Documents</th>
										<td class="level-0 is-selected">Unlimited</td>
										<td class="level-1">Unlimited</td>
										<td class="level-2">Unlimited</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Reads & Writes</th>
										<td class="level-0 is-selected">Unlimited</td>
										<td class="level-1">Unlimited</td>
										<td class="level-2">Unlimited</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Dedicated databases</th>
										<td class="level-0 is-selected">-</td>
										<td class="level-1">Coming soon</td>
										<td class="level-2">Coming soon</td>
									</tr>
								</tbody>
							</table>

							<table class="aw-compare-table aw-sub-body-400">
								<caption class="aw-compare-table-caption aw-description aw-u-color-text-primary">
									<button class="aw-compare-table-caption-button">
										<span>Storage</span>
										<span class="icon-cheveron-down aw-is-only-mobile" aria-hidden="true" />
									</button>
								</caption>
								<tbody class="aw-compare-table-body">
									<tr>
										<th class="aw-sub-body-500">Buckets</th>
										<td class="level-0 is-selected">3 per project</td>
										<td class="level-1">Unlimited</td>
										<td class="level-2">Unlimited</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">File size limit</th>
										<td class="level-0 is-selected">50MB</td>
										<td class="level-1">5TB</td>
										<td class="level-2">5TB</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Image transformations</th>
										<td class="level-0 is-selected">Unlimited</td>
										<td class="level-1">Unlimited</td>
										<td class="level-2">Unlimited</td>
									</tr>
								</tbody>
							</table>

							<table class="aw-compare-table aw-sub-body-400">
								<caption class="aw-compare-table-caption aw-description aw-u-color-text-primary">
									<button class="aw-compare-table-caption-button">
										<span>Functions</span>
										<span class="icon-cheveron-down aw-is-only-mobile" aria-hidden="true" />
									</button>
								</caption>
								<tbody class="aw-compare-table-body">
									<tr>
										<th class="aw-sub-body-500">Functions</th>
										<td class="level-0 is-selected">5 per project</td>
										<td class="level-1">Unlimited</td>
										<td class="level-2">Unlimited</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Executions</th>
										<td class="level-0 is-selected">750K</td>
										<td class="level-1">3.5M</td>
										<td class="level-2">10M</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Additional executions</th>
										<td class="level-0 is-selected">-</td>
										<td class="level-1">$2 per 1 Million</td>
										<td class="level-2">$2 per 1 Million</td>
									</tr>
								</tbody>
							</table>

							<table class="aw-compare-table aw-sub-body-400">
								<caption class="aw-compare-table-caption aw-description aw-u-color-text-primary">
									<button class="aw-compare-table-caption-button">
										<span>Realtime</span>
										<span class="icon-cheveron-down aw-is-only-mobile" aria-hidden="true" />
									</button>
								</caption>
								<tbody class="aw-compare-table-body">
									<tr>
										<th class="aw-sub-body-500">Concurrent connections</th>
										<td class="level-0 is-selected">250</td>
										<td class="level-1">750</td>
										<td class="level-2">1500</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Additional concurrent connections</th>
										<td class="level-0 is-selected">-</td>
										<td class="level-1">$5 per 1,000</td>
										<td class="level-2">$5 per 1,000</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Messages</th>
										<td class="level-0 is-selected">3M</td>
										<td class="level-1">Unlimited</td>
										<td class="level-2">Unlimited</td>
									</tr>
								</tbody>
							</table>

							<table class="aw-compare-table aw-sub-body-400">
								<caption class="aw-compare-table-caption aw-description aw-u-color-text-primary">
									<button class="aw-compare-table-caption-button">
										<span>Support</span>
										<span class="icon-cheveron-down aw-is-only-mobile" aria-hidden="true" />
									</button>
								</caption>
								<tbody class="aw-compare-table-body">
									<tr>
										<th class="aw-sub-body-500">Community</th>
										<td class="level-0 is-selected">
											<img src="/images/icons/gradients/v-icon.svg" alt="yes" />
										</td>
										<td class="level-1">
											<img src="/images/icons/gradients/v-icon.svg" alt="yes" />
										</td>
										<td class="level-2">
											<img src="/images/icons/gradients/v-icon.svg" alt="yes" />
										</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Email</th>
										<td class="level-0 is-selected">-</td>
										<td class="level-1">
											<img src="/images/icons/gradients/v-icon.svg" alt="yes" />
										</td>
										<td class="level-2">
											<img src="/images/icons/gradients/v-icon.svg" alt="yes" />
										</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">24/7 chat support</th>
										<td class="level-0 is-selected">-</td>
										<td class="level-1">-</td>
										<td class="level-2">
											<img src="/images/icons/gradients/v-icon.svg" alt="yes" />
										</td>
									</tr>
									<tr>
										<th class="aw-sub-body-500">Dedicated customer success manager</th>
										<td class="level-0 is-selected">-</td>
										<td class="level-1">-</td>
										<td class="level-2">
											<img src="/images/icons/gradients/v-icon.svg" alt="yes" />
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</article>
				</div>
			</div>
		</div>

		<div class="aw-big-padding-section-level-1 theme-dark u-position-relative u-overflow-hidden">
			<img
				src="/images/bgs/pre-footer.svg"
				alt=""
				class="pre-footer-bg u-gradient-mobile-align-2"
			/>

			<div class="aw-big-padding-section-level-2 u-position-relative">
				<div class="aw-container">
					<section class="aw-grid-4-6">
						<header>
							<div class="aw-display aw-u-color-text-primary">FAQ</div>
						</header>
						<Faq />
					</section>
				</div>
			</div>
			<div class="aw-big-padding-section-level-2 u-position-relative">
				<div class="aw-container u-position-relative">
					<PreFooter />
					<FooterNav />
					<MainFooter />
				</div>
			</div>
		</div>
	</div>
</Homepage>

<style lang="scss">
	.pre-footer-bg {
		position: absolute;
		top: 55%;
		left: calc(50% - 300px);
		transform: translate(-50%, -50%);
		width: 3000px;
		height: auto;
		max-inline-size: unset;
		max-block-size: unset;
	}
</style>
