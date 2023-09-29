<script lang="ts">
	import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
	import { Main } from '$lib/layouts';
	import { TITLE_SUFFIX } from '$routes/titles';

	import FooterNav from '$lib/components/FooterNav.svelte';
	import MainFooter from '$lib/components/MainFooter.svelte';

	const title = 'Privacy' + TITLE_SUFFIX;
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

<div class="u-position-absolute" style="pointer-events:none;">
	<svg
		class="aw-is-not-mobile"
		xmlns="http://www.w3.org/2000/svg"
		width="1728"
		height="518"
		viewBox="0 0 1728 518"
		fill="none"
	>
		<g opacity="0.12" filter="url(#filter0_f_1684_10385)">
			<ellipse cx="864" rx="805" ry="262" fill="#FD366E" />
		</g>
		<defs>
			<filter
				id="filter0_f_1684_10385"
				x="-196.022"
				y="-517.022"
				width="2120.04"
				height="1034.04"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur stdDeviation="127.511" result="effect1_foregroundBlur_1684_10385" />
			</filter>
		</defs>
	</svg>
</div>

<Main>
	<div class="aw-container">
		<div class="aw-grid-120-1fr-auto">
			<header class="aw-grid-120-1fr-auto-header">
				<h1 class="aw-title aw-u-color-text-primary">Privacy Policy</h1>
				<button
					class="u-flex u-width-full-line u-main-space-between u-cross-center
                        aw-u-padding-20 aw-u-color-text-primary aw-is-only-mobile
                       aw-u-margin-inline-32-negative u-margin-block-start-24 aw-u-sep-block"
					style="inline-size:100vw"
				>
					<span class="aw-description">Table of contents</span>
					<span class="icon-menu-alt-4" aria-hidden="true" />
				</button>
			</header>
			<aside class="aw-grid-120-1fr-auto-side aw-is-mobile-closed">
				<div class="aw-page-steps">
					<div class="aw-page-steps-location aw-is-not-mobile" style="--location:0%;">
						<button class="aw-page-steps-location-button">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
							>
								<g clip-path="url(#clip0_1684_10747)">
									<g filter="url(#filter0_b_1684_10747)">
										<circle
											cx="8"
											cy="8"
											r="8"
											fill="url(#paint0_linear_1684_10747)"
											fill-opacity="0.32"
										/>
										<circle
											cx="8"
											cy="8"
											r="7.75"
											stroke="url(#paint1_linear_1684_10747)"
											stroke-width="0.5"
										/>
									</g>
									<circle cx="8" cy="7.99219" r="3" fill="white" />
								</g>
								<defs>
									<filter
										id="filter0_b_1684_10747"
										x="-200"
										y="-200"
										width="416"
										height="416"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feGaussianBlur in="BackgroundImageFix" stdDeviation="100" />
										<feComposite
											in2="SourceAlpha"
											operator="in"
											result="effect1_backgroundBlur_1684_10747"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect1_backgroundBlur_1684_10747"
											result="shape"
										/>
									</filter>
									<linearGradient
										id="paint0_linear_1684_10747"
										x1="2.02105"
										y1="1.10843"
										x2="16.3872"
										y2="17.2901"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="white" stop-opacity="0.4" />
										<stop offset="1" stop-color="white" stop-opacity="0" />
									</linearGradient>
									<linearGradient
										id="paint1_linear_1684_10747"
										x1="7.45643"
										y1="-1.10615"
										x2="5.53812"
										y2="17.9973"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="white" stop-opacity="0.16" />
										<stop offset="1" stop-color="white" stop-opacity="0" />
									</linearGradient>
									<clipPath id="clip0_1684_10747">
										<rect width="16" height="16" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</button>
					</div>
					<ul class="aw-page-steps-list aw-sub-body-500">
						<li>
							<a href="#introduction" class="is-selected">Introduction</a>
						</li>
						<li>
							<a href="#personalData"
								>What Personal Data we collect, why we collect it, and how it is used</a
							>
						</li>
						<li>
							<a href="#protect">How we protect and retain your Personal Data</a>
						</li>
						<li>
							<a href="#share">How we share your Personal Data</a>
						</li>
						<li>
							<a href="#additional">Additional information regarding transfers of Personal Data</a>
						</li>
						<li>
							<a href="#privacy">Your privacy rights. How to delete your account</a>
						</li>
						<li>
							<a href="#children">Use by children</a>
						</li>
						<li>
							<a href="#interaction">Interaction with third party products</a>
						</li>
						<li>
							<a href="#log">Log files</a>
						</li>
						<li>
							<a href="#analytic">Analytic tools</a>
						</li>
						<li>
							<a href="#payments">Payments</a>
						</li>
						<li>
							<a href="#privacyLaw">Specific provisions applicable under California privacy law</a>
						</li>
						<li>
							<a href="#contact">Contact us</a>
						</li>
					</ul>
				</div>
			</aside>
			<main class="aw-grid-120-1fr-auto-main /aw-is-mobile-closed">
				<div class="aw-content is-count-headers">
					<section id="introduction">
						<div>
							<p>
								This privacy policy (“Privacy Policy”) governs how we, Appwrite Code Ltd. (together,
								“Appwrite” “we”, “our” or “us”) use, collect and store Personal Data we collect or
								receive from or about you (“you”) such as in the following use cases:
							</p>
							<ol class="aw-order-list-level-1">
								<li>
									When you browse or visit our website, <a href="/" class="aw-link"
										>https://appwrite.io/</a
									> (“Website”)
								</li>
								<li>
									When you make use of, or interact with, our Website
									<ol class="aw-order-list-level-2">
										<li>When you create an account and when you log in</li>
										<li>When you purchase our products in our Swag Store</li>
										<li>
											When you subscribe to our distribution list(s) / newsletter(s) / blog(s)
										</li>
										<li>When you submit a job application</li>
										<li>
											When you contact us (e.g. customer support, need help, submit a request, when
											you report a security vulnerability)
										</li>
										<li>When you apply for our fund</li>
									</ol>
								</li>
								<li>
									When you make use of, or interact with, our  application, and any other
									application, that we license (each individually, and collectively, the “App”).  
									<ol class="aw-order-list-level-2">
										<li>When you create an account and when you log in</li>
									</ol>
								</li>
								<li>
									When you attend a marketing event and/or we exchange business cards and you
									provide us with your Personal Data
								</li>
								<li>When we use the Personal Data of our customers (e.g. contact details)</li>
								<li>
									When you interact with us on our social media profiles (e.g., Facebook, GitHub,
									Twitter, LinkedIn).
								</li>
							</ol>
						</div>

						<p>
							Hereinafter the Website and the App will be referred to as the “Service”. Please read
							this Privacy Policy carefully, so you can understand our practices and your rights in
							relation to personal data. “Personal Data” or “Personal Information” means any
							information that can be used, alone or together with other data, to uniquely identify
							any living human being and any information deemed as Personally Identifiable
							Information by privacy laws. Please note that this is a master privacy policy and some
							of its provisions only apply to individuals in certain jurisdictions. For example, the
							legal basis in the table below is only relevant to GDPR-protected individuals.
							Important note: Nothing in this Privacy Policy is intended to limit in any way your
							statutory right, including your rights to a remedy or means of enforcement.
						</p>
						<p>
							This Privacy Policy can be updated from time to time and, therefore, we ask you to
							check back periodically for the latest version of this Privacy Policy.  If we
							implement significant changes to the use of your Personal Data in a manner different
							from that stated at the time of collection, we will notify you by posting a notice on
							our Website or by other means.
						</p>
					</section>
					<section id="personalData">
						<h2 class="aw-title aw-u-color-text-primary">
							What personal data we collect, why we collect it, and how it is used
						</h2>
						<p>When you browse or visit our website</p>
						<div class="aw-info-table-scroll">
							<div class="aw-info-table-wrapper">
								<table class="aw-info-table">
									<tbody class="aw-info-table-tbody">
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header">Specific personal data we collect</th>
											<td class="aw-info-table-col">Cookies, analytic tools and log files</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>What is the personal data collected and for what purpose?</th
											>
											<td class="aw-info-table-col"
												>Marketing purposes, usage analytics and statistics, improving quality of
												service</td
											>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Legal basis (GDPR only, if applicable)</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>Consent</li>
													<li>Legitimate interest (e.g. essential cookies)</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Third parties with whom we share your personal data</th
											>
											<td class="aw-info-table-col">
												For more information, please read our cookies policy <a
													href="https://appwrite.io/policy/cookies"
													target="_blank"
													rel="noopener noreferrer"
												>
													Appwrite Cookies Policy (https://appwrite.io/policy/cookies)
												</a>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Consequences of not providing the personal data</th
											>
											<td class="aw-info-table-col"
												>Certain non-essential Website features may not be available
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div>
							<h3 class="aw-sub-body-500 aw-u-color-text-primary">
								When you make use of, or interact with, our Website
							</h3>
							<p>When you create an account and when you log in</p>
						</div>

						<div class="aw-info-table-scroll">
							<div class="aw-info-table-wrapper">
								<table class="aw-info-table">
									<thead class="aw-info-table-thead">
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header" />
											<th class="aw-info-table-col-header">Product development purposes</th>
											<th class="aw-info-table-col-header">Marketing purposes</th>
										</tr>
									</thead>
									<tbody class="aw-info-table-tbody">
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header">Specific personal data we collect</th>
											<td class="aw-info-table-col">
												<ul>
													<li>Full name</li>
													<li>Email address</li>
													<li>IP address</li>
													<li>Country</li>
													<li>User-agent (info about the browser)</li>
												</ul>
											</td>
											<td class="aw-info-table-col">
												<ul>
													<li>Full name</li>
													<li>Email address</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>What is the personal data collected and for what purpose?</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>To be able to create an account</li>
													<li>To be able to log in</li>
													<li>To be able to enjoy features available to registered users</li>
													<li>To collect Informative reason for the administrator.</li>
													<li>To better project development (identify reported problem)</li>
												</ul>
											</td>
											<td class="aw-info-table-col">
												<ul>
													<li>To send you marketing communications and product update</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Legal basis (GDPR only, if applicable)</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>
														Processing is necessary for the performance of a contract to which the
														data subject is party or in order to take steps at the request of the
														data subject prior to entering into a contract
													</li>
													<li>
														Legitimate interest (e.g. to allow you to create an account and log-in)
													</li>
												</ul>
											</td>
											<td class="aw-info-table-col">Consent</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Third parties with whom we share your personal data</th
											>
											<td class="aw-info-table-col">
												3rd party platforms such as for the following purposes:
												<ul>
													<li>Orbit</li>
													<li>Google analytics</li>
												</ul>
											</td>
											<td class="aw-info-table-col">
												3rd party platforms such as for the following purposes:
												<ul>
													<li>Mailgun</li>
													<li>Orbit</li>
													<li>Hubspot</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Consequences of not providing the personal data</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>Cannot be able to create an account</li>
													<li>Cannot be able to log in</li>
													<li>Cannot be able to enjoy features available to registered users</li>
													<li>Cannot collect Informative reason for the administrator.</li>
													<li>Cannot better project development (identify reported problem)</li>
												</ul>
											</td>
											<td class="aw-info-table-col"> Cannot send you marketing communications </td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div class="aw-info-table-scroll">
							<div class="aw-info-table-wrapper">
								<table class="aw-info-table">
									<tbody class="aw-info-table-tbody">
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header" />
											<td class="aw-info-table-col" />
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>
					<section>
						<h3 class="aw-sub-body-500 aw-u-color-text-primary">
							When you purchase products in our Swag Store
						</h3>
						<div class="aw-info-table-scroll">
							<div class="aw-info-table-wrapper">
								<table class="aw-info-table">
									<thead class="aw-info-table-thead">
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header" />
											<th class="aw-info-table-col-header">Product development purposes</th>
										</tr>
									</thead>
									<tbody class="aw-info-table-tbody">
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header">Specific personal data we collect</th>
											<td class="aw-info-table-col">
												<ul>
													<li>Full name</li>
													<li>Email address</li>
													<li>Address, including (Apartment, Postal Code and City)</li>
													<li>Phone number</li>
													<li>
														Payment information (e.g., 4 last digits of the credit card number)
													</li>
													<li>And any other information that you decide to provide us with</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>What is the personal data collected and for what purpose?</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>To allow you to purchase Appwrite's products from our Swag Store.</li>
													<li>To customize your experience</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Legal basis (GDPR only, if applicable)</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>
														Processing is necessary for the performance of a contract to which the
														data subject is party or in order to take steps at the request of the
														data subject prior to entering into a contract
													</li>
													<li>
														Legitimate interest (e.g. to allow you to purchase Appwrite's swag
														products)
													</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Third parties with whom we share your personal data</th
											>
											<td class="aw-info-table-col">
												3rd party platforms such as for the following purposes:
												<ul>
													<li>Shopify</li>
													<li>Printful</li>
													<li>Printfection</li>
													<li>Stripe</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Consequences of not providing the personal data</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>Cannot purchase our swag products</li>
													<li>Cannot customize your experience</li>
												</ul>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>
					<section>
						<h3 class="aw-sub-body-500 aw-u-color-text-primary">
							When you subscribe to our distribution list(s) / newsletter(s) / blog(s)
						</h3>
						<div class="aw-info-table-scroll">
							<div class="aw-info-table-wrapper">
								<table class="aw-info-table">
									<tbody class="aw-info-table-tbody">
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header">Specific personal data we collect</th>
											<td class="aw-info-table-col">
												<ul>
													<li>Full name</li>
													<li>Email address</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>What is the personal data collected and for what purpose?</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>To add you to our mailing list</li>
													<li>To send newsletters or other marketing communications.</li>
													<li>To add you to our blog distribution list</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Legal basis (GDPR only, if applicable)</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>Consent</li>
													<li>
														Legitimate interest (e.g. send you more information about Appwrite)
													</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Third parties with whom we share your personal data</th
											>
											<td class="aw-info-table-col">
												3rd party platforms such as for the following purposes:
												<ul>
													<li>ActiveCampaign</li>
													<li>Mailgun</li>
													<li>Orbit</li>
													<li>Hubspot</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Consequences of not providing the personal data</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>Cannot add you to our mailing list</li>
													<li>Cannot send you marketing communications</li>
													<li>Cannot add you to our blog distribution list</li>
												</ul>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>
					<section>
						<h3 class="aw-sub-body-500 aw-u-color-text-primary">
							When we process your job application
						</h3>
						<div class="aw-info-table-scroll">
							<div class="aw-info-table-wrapper">
								<table class="aw-info-table">
									<tbody class="aw-info-table-tbody">
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header">Specific personal data we collect</th>
											<td class="aw-info-table-col">
												<ul>
													<li>Full name</li>
													<li>Email address</li>
													<li>City</li>
													<li>Country</li>
													<li>Phone number</li>
													<li>LinkedIn profile</li>
													<li>Resume/CV</li>
													<li>Any other data that you decide to supply/provide us</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>What is the personal data collected and for what purpose?</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>To process your job application</li>
													<li>To assess the candidate</li>
													<li>To communicate with you for candidacy-related matters</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Legal basis (GDPR only, if applicable)</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>
														Processing is necessary for the performance of a contract to which the
														data subject is party or in order to take steps at the request of the
														data subject prior to entering into a contract
													</li>
													<li>Legitimate interest (e.g. process your job application)</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Third parties with whom we share your personal data</th
											>
											<td class="aw-info-table-col">
												3rd party platforms such as for the following purposes:
												<ul>
													<li>Homerun</li>
													<li>LinkedIn Premium</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Consequences of not providing the personal data</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>Cannot process your job application</li>
													<li>Cannot assess your suitability as a candidate</li>
													<li>Cannot communicate with your for candidacy-related matters</li>
												</ul>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>
					<section>
						<h3 class="aw-sub-body-500 aw-u-color-text-primary">
							When you contact us (e.g. customer support, need help, submit a request or when you
							report a security vulnerability)
						</h3>
						<div class="aw-info-table-scroll">
							<div class="aw-info-table-wrapper">
								<table class="aw-info-table">
									<tbody class="aw-info-table-tbody">
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header">Specific personal data we collect</th>
											<td class="aw-info-table-col">
												<ul>
													<li>Full name</li>
													<li>Email address</li>
													<li>Message</li>
													<li>Any other data that you decide to supply/provide us</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>What is the personal data collected and for what purpose?</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>To process and answer questions</li>
													<li>To provide support (e.g., to solve problems)</li>
													<li>To analyze the security vulnerability report sent by you</li>
													<li>To customize your experience</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Legal basis (GDPR only, if applicable)</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>
														Processing is necessary for the performance of a contract to which the
														data subject is party or in order to take steps at the request of the
														data subject prior to entering into a contract
													</li>
													<li>Legitimate interest (e.g. respond to a query sent by you)</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Third parties with whom we share your personal data</th
											>
											<td class="aw-info-table-col">
												3rd party platforms such as for the following purposes:
												<ul>
													<li>HelpScout</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Consequences of not providing the personal data</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>Cannot assist you and respond your query</li>
													<li>Cannot provide support</li>
													<li>Cannot analyze the security vulnerability report sent by you</li>
													<li>Cannot customize your experience</li>
												</ul>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>
					<section>
						<h3 class="aw-sub-body-500 aw-u-color-text-primary">When you apply for our fund</h3>
						<div class="aw-info-table-scroll">
							<div class="aw-info-table-wrapper">
								<table class="aw-info-table">
									<tbody class="aw-info-table-tbody">
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header">Specific personal data we collect</th>
											<td class="aw-info-table-col">
												<ul>
													<li>Full name</li>
													<li>Email address</li>
													<li>GitHub repository</li>
													<li>GitHub profile</li>
													<li>Any other data that you decide to supply/provide us</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>What is the personal data collected and for what purpose?</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>To process and answer questions</li>
													<li>To provide support (e.g., to solve problems)</li>
													<li>To analyze the security vulnerability report sent by you</li>
													<li>To customize your experience</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Legal basis (GDPR only, if applicable)</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>
														Processing is necessary for the performance of a contract to which the
														data subject is party or in order to take steps at the request of the
														data subject prior to entering into a contract
													</li>
													<li>Legitimate interest (e.g. process your fund application)</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Third parties with whom we share your personal data</th
											>
											<td class="aw-info-table-col">
												3rd party platforms such as for the following purposes:
												<ul>
													<li>GitHub</li>
													<li>OpenCollective</li>
													<li>Asana</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Consequences of not providing the personal data</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>Cannot process your application</li>
													<li>Cannot support open-source projects</li>
													<li>Cannot send you fund and project related communications</li>
												</ul>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>
					<section>
						<h3 class="aw-sub-body-500 aw-u-color-text-primary">
							When you attend a marketing event and/or we exchange business cards and you provide us
							with your Personal Data
						</h3>
						<div class="aw-info-table-scroll">
							<div class="aw-info-table-wrapper">
								<table class="aw-info-table">
									<tbody class="aw-info-table-tbody">
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header">Specific personal data we collect</th>
											<td class="aw-info-table-col">
												<ul>
													<li>Full name</li>
													<li>Company name</li>
													<li>Job position</li>
													<li>Email address</li>
													<li>Any other data that you decide to supply/provide us with</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>What is the personal data collected and for what purpose?</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>To establish a business connection</li>
													<li>To send marketing communications</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Legal basis (GDPR only, if applicable)</th
											>
											<td class="aw-info-table-col">
												Depending on the context, legitimate interest (B2B marketing),
												pre-contractual discussions or consent
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Third parties with whom we share your personal data</th
											>
											<td class="aw-info-table-col">
												3rd party platforms such as for the following purposes:
												<ul>
													<li>ActiveCampaign</li>
													<li>Hubspot</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Consequences of not providing the personal data</th
											>
											<td class="aw-info-table-col">
												<ul>
													<li>Cannot establish a business connection</li>
													<li>Cannot send marketing communications</li>
												</ul>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>
					<section>
						<h3 class="aw-sub-body-500 aw-u-color-text-primary">
							When you interact with us on our social media profiles (e.g., Facebook, GitHub,
							Twitter, LinkedIn, Discord)
						</h3>
						<div class="aw-info-table-scroll">
							<div class="aw-info-table-wrapper">
								<table class="aw-info-table">
									<tbody class="aw-info-table-tbody">
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header">Specific personal data we collect</th>
											<td class="aw-info-table-col">
												<ul>
													<li>Full name</li>
													<li>Company name</li>
													<li>Job Title</li>
													<li>LinkedIn and Twitter URL</li>
													<li>Twitter Handle</li>
													<li>
														Any other data that you decide to supply/provide us and/or publicly
														available on your social media account
													</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>What is the personal data collected and for what purpose?</th
											>
											<td class="aw-info-table-col">
												To reply and/or respond to your request or question
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Legal basis (GDPR only, if applicable)</th
											>
											<td class="aw-info-table-col">
												Depending on the context, legitimate interest (B2B marketing),
												pre-contractual discussions or consent
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Third parties with whom we share your personal data</th
											>
											<td class="aw-info-table-col">
												3rd party platforms such as for the following purposes:
												<ul>
													<li>
														Social media platforms (e.g. Facebook,  GitHub, Twitter, LinkedIn,
														Discord)
													</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-info-table-col-row">
											<th class="aw-info-table-col-header"
												>Consequences of not providing the personal data</th
											>
											<td class="aw-info-table-col">
												Cannot reply and/or respond to your request or question
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<p>
							Finally, please note that some of the abovementioned Personal Data will be used for
							detecting, taking steps to prevent, and prosecution of fraud or other illegal
							activity, to identify and repair errors, to conduct audits, and for security purposes.
							Personal Data may also be used to comply with applicable laws, with investigations
							performed by the relevant authorities, law enforcement purposes, and/or to exercise or
							defend legal claims. In certain cases, we may or will anonymize or de-identify your
							Personal Data and further use it for internal and external purposes, including,
							without limitation, to improve the services and for research purposes. “Anonymous
							Information” means information which does not enable identification of an individual
							user, such as aggregated information about the use of our services. We may use
							Anonymous Information and/or disclose it to third parties without restrictions (for
							example, in order to improve our services and enhance your experience with them).
						</p>
					</section>
					<section class="count-secondary-title" id="protect">
						<h2 class="aw-title aw-u-color-text-primary">
							How we protect and retain your personal data
						</h2>
						<div class="u-flex u-flex-vertical u-gap-8">
							<h3 class="aw-sub-body-500 aw-u-color-text-primary">Security</h3>
							<p>
								We have implemented appropriate technical, organizational and security measures
								designed to protect your Personal Data. However, please note that we cannot
								guarantee that the information will not be compromised as a result of unauthorized
								penetration to our servers. As the security of information depends in part on the
								security of the computer, device or network you use to communicate with us and the
								security you use to protect your user IDs and passwords, please make sure to take
								appropriate measures to protect this information.
							</p>
							<h3 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-12">
								Retention of your Personal Data
							</h3>
							<p>
								Your Personal Data will be stored until we delete the record and we proactively
								delete it or you send a valid deletion request, please note that in some
								circumstances we may store your Personal Data for longer periods of time, for
								example (i) where we are required to do so in accordance with legal, regulatory, tax
								or accounting requirements, or (ii) for us to have an accurate record of your
								dealings with us in the event of any complaints or challenges, or (iii) if we
								reasonably believe there is a prospect of litigation relating to your Personal Data
								or dealings. Regarding retention of cookies, you can read more in our cookie policy
								https://appwrite.io/policy/cookies.
							</p>
						</div>
					</section>
					<section class="count-secondary-title" id="share">
						<h2 class="aw-title aw-u-color-text-primary">How we share your personal data</h2>
						<div class="u-flex u-flex-vertical u-gap-8">
							<p>
								In addition to the recipients described above, we may share your Personal Data as
								follows:
							</p>
							<span class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-12" />
							<p>
								With our business partners with whom we jointly offer products or services. We may
								also share Personal Data with our affiliated companies.
							</p>
							<span class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-12" />
							<p>
								To the extent necessary, with regulators, courts or competent authorities, to comply
								with applicable laws, regulations and rules (including, without limitation, federal,
								state or local laws), and requests of law enforcement, regulatory and other
								governmental agencies or if required to do so by court order;
							</p>
							<span class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-12" />
							<p>
								If, in the future, we sell or transfer, or we consider selling or transferring, some
								or all of our business, shares or assets to a third party, we will disclose your
								Personal Data to such third party (whether actual or potential) in connection with
								the foregoing events;
							</p>
							<span class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-12" />
							<p>
								In the event that we are acquired by, or merged with, a third party entity, or in
								the event of bankruptcy or a comparable event, we reserve the right to transfer,
								disclose or assign your Personal Data in connection with the foregoing events,
								including, in connection with, or during negotiations of, any merger, sale of
								company assets, consolidation or restructuring, financing, or acquisition of all or
								a portion of our business by or to another company; and/or
							</p>
							<span class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-12" />
							<p>
								Where you have provided your consent to us sharing or transferring your Personal
								Data (e.g., where you provide us with marketing consents or opt-in to optional
								additional services or functionality).
							</p>
						</div>
					</section>
					<section class="count-secondary-title" id="additional">
						<h2 class="aw-title aw-u-color-text-primary">
							Additional information regarding transfers or personal data
						</h2>
						<div class="u-flex u-flex-vertical u-gap-8">
							<h3 class="aw-sub-body-500 aw-u-color-text-primary">External transfers</h3>
							<p>
								Where we transfer your Personal Data outside of EU/EEA (for example to third parties
								who provide us with services), we will generally obtain contractual commitments from
								them to protect your Personal Data. When Appwrite engages in such transfers of
								Personal Data, it relies on i) Adequacy Decisions as adopted by European Commission
								on the basis of Article 45 of Regulation (EU) 2016/679 (GDPR) (for example, when we
								access from Israel), or ii) Standard Contractual Clauses issued by the European
								Commission. Appwrite also continually monitors the circumstances surrounding such
								transfers in order to ensure that these maintain, in practice, a level of protection
								that is essentially equivalent to the one guaranteed by the GDPR.
							</p>
						</div>
					</section>
					<section class="count-secondary-title" id="privacy">
						<h2 class="aw-title aw-u-color-text-primary">
							Your privacy rights. How to delete your account
						</h2>
						<div class="u-flex u-flex-vertical u-gap-8">
							<h3 class="aw-sub-body-500 aw-u-color-text-primary">Rights</h3>
							<p>
								The following rights (which may be subject to certain exemptions or derogations)
								shall apply to certain individuals (some of which only apply to individuals
								protected by the GDPR)
							</p>
							<ul>
								<li>
									You have a right to access Personal Data held about you. Your right of access may
									normally be exercised free of charge, however we reserve the right to charge an
									appropriate administrative fee where permitted by applicable law;
								</li>
								<li>
									You have the right to request that we rectify any Personal Data we hold that is
									inaccurate or misleading;
								</li>
								<li>
									You have the right to request the erasure/deletion of your Personal Data (e.g.
									from our records). Please note that there may be circumstances in which we are
									required to retain your Personal Data, for example for the establishment, exercise
									or defense of legal claims;
								</li>
								<li>
									You have the right to object, to or to request restriction, of the processing;
								</li>
								<li>
									You have the right to data portability. This means that you may have the right to
									receive your Personal Data in a structured, commonly used and machine-readable
									format, and that you have the right to transmit that data to another controller;
								</li>
								<li>You have the right to object to profiling;</li>
								<li>
									You have the right to withdraw your consent at any time. Please note that there
									may be circumstances in which we are entitled to continue processing your data, in
									particular, if the processing is required to meet our legal and regulatory
									obligations. Also, please note that the withdrawal of consent shall not affect the
									lawfulness of processing based on consent before its withdrawal;
								</li>
								<li>
									You also have a right to request certain details of the basis on which your
									Personal Data is transferred outside the European Economic Area, but data transfer
									agreements and/or other details may need to be partially redacted for reasons of
									commercial confidentiality;
								</li>
								<li>
									ou have a right to lodge a complaint with your local data protection supervisory
									authority (i.e., your place of habitual residence, place or work or place of
									alleged infringement) at any time or before the relevant institutions in your
									place of residence. We ask that you please attempt to resolve any issues with us
									before you contact your local supervisory authority and/or relevant institution.
								</li>
							</ul>

							<span class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-12" />
							<p>
								You can exercise your rights by contacting us at privacy@appwrite.io. You may use an
								authorized agent to submit a request on your behalf if you provide the authorized
								agent written permission signed by you. To protect your privacy, we may take steps
								to verify your identity before fulfilling your request. Subject to legal and other
								permissible considerations, we will make every reasonable effort to honor your
								request promptly in accordance with applicable law or inform you if we require
								further information in order to fulfill your request. When processing your request,
								we may ask you for additional information to confirm or verify your identity and for
								security purposes, before processing and/or honoring your request. We reserve the
								right to charge a fee where permitted by law, for instance, if your request is
								manifestly unfounded or excessive. In the event that your request would adversely
								affect the rights and freedoms of others (for example, would impact the duty of
								confidentiality we owe to others) or if we are legally entitled to deal with your
								request in a different way than initially requested, we will address your request to
								the maximum extent possible, all in accordance with applicable law.
							</p>

							<span class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-12" />
							<p>
								Deleting your account: Should you ever decide to delete your account, you may do so
								by emailing privacy@appwrite.io. If you terminate your account, any association
								between your account and Personal Data we store will no longer be accessible through
								your account. However, given the nature of sharing on certain services, any public
								activity on your account prior to deletion will remain stored on our servers and
								will remain accessible to the public.
							</p>
						</div>
					</section>
					<section class="count-secondary-title" id="children">
						<h2 class="aw-title aw-u-color-text-primary">Use by children</h2>
						<p>
							We do not offer our products or services for use by children and, therefore, we do not
							knowingly collect Personal Data from, and/or about children under the age of eighteen
							(18). If you are under the age of eighteen (18), do not provide any Personal Data to
							us without involvement of a parent or a guardian. For the purposes of the GDPR, we do
							not intend to offer information society services directly to children. In the event
							that we become aware that you provide Personal Data in violation of applicable privacy
							laws, we reserve the right to delete it. If you believe that we might have any such
							information, please contact us at privacy@appwrite.io.
						</p>
					</section>
					<section class="count-secondary-title" id="interaction">
						<h2 class="aw-title aw-u-color-text-primary">Interaction with third party products</h2>
						<p>
							We enable you to interact with third party websites, mobile software applications and
							products or services that are not owned or controlled by us (each a “Third Party
							Service”). We are not responsible for the privacy practices or the content of such
							Third Party Services. Please be aware that Third Party Services can collect Personal
							Data from you. Accordingly, we encourage you to read the terms and conditions and
							privacy policies of each Third Party Service.
						</p>
					</section>
					<section class="count-secondary-title" id="log">
						<h2 class="aw-title aw-u-color-text-primary">Log files</h2>
						<p>
							We use log files. We use such information to analyze trends, administer the Website,
							track users’ movement around the Website, and gather demographic information.
						</p>
					</section>
					<section class="count-secondary-title" id="analytic">
						<h2 class="aw-title aw-u-color-text-primary">Analytic tools</h2>
						<p>
							WWe use log files. We use such information to analyze trends, administer the Website,
							track users’ movement around the Website, and gather demographic information.
						</p>
						<ul class="u-flex u-flex-vertical u-gap-24">
							<li>
								<span class="aw-u-color-text-primary">Google Analytics </span>
								- The Website uses a tool called “Google Analytics” to collect information about use
								of the Website. Google Analytics collects information such as how often users visit this
								Website, what pages they visit when they do so, and what other websites they used prior
								to coming to this Website. We use the information we get from Google Analytics to maintain
								and improve the Website and our products. We do not combine the information collected
								through the use of Google Analytics with Personal Data we collect. Google’s ability to
								use and share information collected by Google Analytics about your visits to this Website
								is restricted by the Google Analytics Terms of Service, available at
								<a
									href="https://marketingplatform.google.com/about/analytics/terms/us/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Google Analytics Terms of Service
									(https://marketingplatform.google.com/about/analytics/terms/us/)</a
								>, and the Google Privacy Policy, available at
								<a
									href="https://www.google.com/policies/privacy/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Google Privacy Policy (https://www.google.com/policies/privacy/)</a
								>. You may learn more about how Google collects and processes data specifically in
								connection with Google Analytics at
								<a
									href="https://www.google.com/policies/privacy/partners/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Google Privacy Policy for Partners
									(https://www.google.com/policies/privacy/partners/)</a
								>. You may prevent your data from being used by Google Analytics by downloading and
								installing the Google Analytics Opt-out Browser Add-on, available at
								<a
									href="https://tools.google.com/dlpage/gaoptout/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Google Analytics Opt-out Browser Add-on
									(https://tools.google.com/dlpage/gaoptout/)</a
								>.
							</li>
							<li>
								<span class="aw-u-color-text-primary">Orbit </span>
								- Orbit is a community analytics service offered by Orbit that tracks and reports community
								activity. For more information on the privacy practices of Orbit, please visit the Orbit
								Privacy & Terms web page:
								<a
									href="https://orbit.love/privacy-policy/"
									target="_blank"
									rel="noopener noreferrer"
									>Orbit Privacy Policy (https://orbit.love/privacy-policy/)</a
								>.
							</li>
							<li>
								<span class="aw-u-color-text-primary">Sentry </span>
								- Sentry is a monitoring software and a performance monitoring software. Sentry helps
								diagnose, fix, and optimize the performance of the Website. Sentry's ability to use and
								share information collected by Sentry is regulated by their terms of service, available
								at
								<a href="https://sentry.io/terms/" target="_blank" rel="noopener noreferrer"
									>Sentry Terms of Service (https://sentry.io/terms/)</a
								>, and their Privacy Policy available at
								<a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer"
									>Sentry Privacy Policy (https://sentry.io/privacy/)</a
								>.
							</li>
							<li>
								<span class="aw-u-color-text-primary">Mixpanel </span>
								- Mixpanel is a website that collects information about use of our console. It collects
								information such as how often users visit this console, what pages they visit when they
								do so, but not PII. We use the information we get from Mixpanel to maintain and improve
								the Website and our products. Mixpanel’s ability to use and share information about your
								visits is restricted by the Terms of Service, available at
								<a
									href="https://mixpanel.com/legal/terms-of-use"
									target="_blank"
									rel="noopener noreferrer"
									>Mixpanel Terms of Use (https://mixpanel.com/legal/terms-of-use)</a
								>
								and the Mixpanel Privacy Policy, available at
								<a
									href="https://mixpanel.com/legal/privacy-policy"
									target="_blank"
									rel="noopener noreferrer"
									>Mixpanel Privacy Policy (https://mixpanel.com/legal/privacy-policy)</a
								>.
							</li>
							<li>
								We reserve the right to remove or add new analytic tools. We reserve the right to
								remove or add new analytic tools.
							</li>
						</ul>
					</section>
					<section class="count-secondary-title" id="payments">
						<h2 class="aw-title aw-u-color-text-primary">Payments</h2>
						<p>
							We may provide paid products and/or services within the Service. In that case, we use
							third-party services for payment processing (e.g. payment processors). We will not
							store or collect your payment card details. That information is provided directly to
							our third-party payment processors whose use of your Personal Data is governed by
							their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS
							as managed by the PCI Security Standards Council, which is a joint effort of brands
							like Visa, MasterCard, American Express and Discover. PCI-DSS requirements help ensure
							the secure handling of payment information. The payment processors we work with are:
						</p>
						<ul class="aw-pink-dots u-flex u-flex-vertical u-gap-24">
							<li>
								<span class="aw-u-color-text-primary">Apple Store In-App Payments</span> - Their
								Privacy Policy can be viewed at
								<a
									href="https://www.apple.com/legal/privacy/en-ww/"
									target="_blank"
									rel="noopener noreferrer">https://www.apple.com/legal/privacy/en-ww/</a
								>
							</li>
							<li>
								<span class="aw-u-color-text-primary">Google Play In-App Payments</span> - Their
								Privacy Policy can be viewed at
								<a
									href="https://www.google.com/policies/privacy/"
									target="_blank"
									rel="noopener noreferrer">https://www.google.com/policies/privacy/</a
								>
							</li>
							<li>
								<span class="aw-u-color-text-primary">Stripe</span> - Their Privacy Policy can be
								viewed at
								<a href="https://stripe.com/us/privacy" target="_blank" rel="noopener noreferrer"
									>https://stripe.com/us/privacy</a
								>
							</li>
							<li>
								<span class="aw-u-color-text-primary">Paypal/Braintree</span> - Their Privacy Policy
								can be viewed at
								<a
									href="https://www.paypal.com/webapps/mpp/ua/privacy-full"
									target="_blank"
									rel="noopener noreferrer">https://www.paypal.com/webapps/mpp/ua/privacy-full</a
								>
							</li>
						</ul>
					</section>
					<section class="count-secondary-title" id="privacyLaw">
						<h2 class="aw-title aw-u-color-text-primary">
							Specific provisions applicable under California Privacy Law
						</h2>
						<div class="u-flex u-flex-vertical u-gap-8">
							<h3 class="aw-sub-body-500 aw-u-color-text-primary">
								Our California Do Not Track Notice (Shine the Light)
							</h3>
							<p>
								Do Not Track (“DNT”) is a privacy preference that users can set in certain web
								browsers. Please note that we do not respond to or honor DNT signals or similar
								mechanisms transmitted by web browsers, but we may allow third parties, such as
								companies that provide us with analytics tools, to collect personally identifiable
								information about an individual consumer’s online activities over time and across
								different web sites when a consumer uses the Services.
							</p>
						</div>
					</section>
					<section class="count-secondary-title" id="contact">
						<h2 class="aw-title aw-u-color-text-primary">Contact us</h2>
						<p>
							f you have any questions, concerns or complaints regarding our compliance with this
							notice and the data protection laws, or if you wish to exercise your rights, we
							encourage you to first contact us at <a
								href="mailto:privacy@appwrite.io"
								target="_blank"
								rel="noopener noreferrer">privacy@appwrite.io</a
							>.
						</p>
					</section>
				</div>
			</main>
		</div>

		<FooterNav />
		<MainFooter />
	</div>
</Main>
