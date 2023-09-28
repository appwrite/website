<script lang="ts">
	import { FooterNav, MainFooter } from '$lib/components';
	import { DEFAULT_HOST } from '$lib/utils/metadata';
	import { Main } from '$lib/layouts';
	import { TITLE_SUFFIX } from '$routes/titles';

	const title = 'Heroes' + TITLE_SUFFIX;
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

<div
	class="u-position-absolute aw-is-not-mobile"
	style="pointer-events:none; inset-inline-start:822px;"
>
	<img src="/images/temp/bg-side-heroes.png" width="" alt="" />
</div>

<Main>
	<div class="aw-big-padding-section">
		<div class="aw-big-padding-section-level-1">
			<div class="aw-big-padding-section-level-2">
				<section class="aw-container aw-u-padding-block-end-0">
					<div class="aw-hero is-align-start aw-u-max-width-480">
						<h1 class="aw-display aw-u-color-text-primary">Appwrite Heroes</h1>
						<div class="">
							<p class="aw-main-body-500">
								If you love building, writing, speaking, and helping other developers build with
								Appwrite, help us support you by joining the Appwrite Heroes program and becoming a
								leader in our developer community.
							</p>
							<button class="aw-button is-secondary is-full-width-mobile u-margin-block-start-32">
								<span class="text">Become a Hero</span>
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
		<div class="aw-big-padding-section-level-1">
			<div class="aw-big-padding-section-level-2">
				<section class="aw-container">
					<div class="aw-hero aw-u-max-width-800">
						<h2 class="aw-title aw-u-color-text-primary">About Appwrite Heroes</h2>
						<div class="">
							<p class="aw-sub-body-500">
								The Appwrite Heroes program is an exclusive group of developers who are experts in
								Appwrite and dedicated to creating valuable content to assist other developers in
								achieving success. Appwrite Heroes excel in creating video tutorials, written
								guides, blog posts, or providing support in our fast-growing Discord community.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>

		<div class="aw-big-padding-section-level-1 u-position-relative aw-white-section theme-light">
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<div class="aw-hero">
						<div class="aw-display aw-u-color-text-primary">Meet our Heroes</div>
					</div>
					<ul class="aw-multi-columns-1 aw-u-margin-block-start-80">
						<li>
							<div class="aw-card is-white">
								<div class="aw-social-item u-flex-vertical u-gap-24">
									<div class="u-flex u-gap-16 u-main-space-between">
										<div class="aw-user-box">
											<img
												class="aw-user-box-image"
												src="images/heroes/avatars/diana.png"
												alt=""
											/>
											<div class="aw-user-box-name aw-sub-body-500">Diana Pham</div>
											<div class="aw-user-box-username aw-sub-body-400">Developer Advocate</div>
										</div>
									</div>
									<p class="aw-sub-body-500 aw-u-text-color-neutral-700">
										Diana discovered Appwrite and its wonderful team while completing her master's
										in computer science. Now, as a developer advocate at Vonage, she is excited to
										build projects using both backend servicing and telecommunications APIs.
									</p>
									<ul class="u-flex u-gap-12">
										<li>
											<a href="https://github.com/dianapham" target="_blank" aria-label="GitHub profile">
												<span class="icon-github" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a href="https://twitter.com/dianasoyster" target="_blank" aria-label="X profile">
												<span class="aw-icon-x" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a href="https://www.linkedin.com/in/dianasoyster" target="_blank" aria-label="LinkedIn profile">
												<span class="aw-icon-linkedin" aria-hidden="true" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-white">
								<div class="aw-social-item u-flex-vertical u-gap-24">
									<div class="u-flex u-gap-16 u-main-space-between">
										<div class="aw-user-box">
											<img
												class="aw-user-box-image"
												src="images/heroes/avatars/stephen.png"
												alt=""
											/>
											<div class="aw-user-box-name aw-sub-body-500">Stephen Simon</div>
											<div class="aw-user-box-username aw-sub-body-400">Community Director</div>
										</div>
									</div>
									<p class="aw-sub-body-500 aw-u-text-color-neutral-700">
										Stephen Simon leads one of the world's largest developer communities and has
										been instrumental in developing and implementing strategies to foster a sense of
										belonging and connection among community members. He also currently works on
										React and Azure.
									</p>
									<ul class="u-flex u-gap-12">
										<li>
											<a href="https://github.com/codewithsimon" target="_blank" aria-label="GitHub profile">
												<span class="icon-github" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a href="https://twitter.com/codewithsimon" target="_blank" aria-label="X profile">
												<span class="aw-icon-x" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a href="https://www.linkedin.com/in/codewithsimon" target="_blank" aria-label="LinkedIn profile">
												<span class="aw-icon-linkedin" aria-hidden="true" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-white">
								<div class="aw-social-item u-flex-vertical u-gap-24">
									<div class="u-flex u-gap-16 u-main-space-between">
										<div class="aw-user-box">
											<img
												class="aw-user-box-image"
												src="images/heroes/avatars/lucas.png"
												alt=""
											/>
											<div class="aw-user-box-name aw-sub-body-500">Lucas Audart</div>
											<div class="aw-user-box-username aw-sub-body-400">Web Consultant</div>
										</div>
									</div>
									<p class="aw-sub-body-500 aw-u-text-color-neutral-700">
										Lucas is a web consultant at Zenika who specializes in front-end technologies
										and has spoken about Appwrite and other technologies at various development
										conferences in France.
									</p>
									<ul class="u-flex u-gap-12">
										<li>
											<a href="https://github.com/Slocaly" target="_blank" aria-label="GitHub profile">
												<span class="icon-github" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a href="https://twitter.com/Slocalyy" target="_blank" aria-label="X profile">
												<span class="aw-icon-x" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a href="https://www.linkedin.com/in/lucas-audart" target="_blank" aria-label="LinkedIn profile">
												<span class="aw-icon-linkedin" aria-hidden="true" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-white">
								<div class="aw-social-item u-flex-vertical u-gap-24">
									<div class="u-flex u-gap-16 u-main-space-between">
										<div class="aw-user-box">
											<img
												class="aw-user-box-image"
												src="images/heroes/avatars/tanmoy.png"
												alt=""
											/>
											<div class="aw-user-box-name aw-sub-body-500">Tanmoy Karmakar</div>
											<div class="aw-user-box-username aw-sub-body-400">Software Engineer</div>
										</div>
									</div>
									<p class="aw-sub-body-500 aw-u-text-color-neutral-700">
										Tanmoy Karmakar is a co-organizer at Flutter Kolkata and SDE-II [Flutter] at
										SaaS Labs. He loves to create content related to Flutter and organize events and
										meet-ups. Learning new ways to complement Flutter development always amuses him.
									</p>
									<ul class="u-flex u-gap-12">
										<li>
											<a href="https://github.com/tanmoy27112000" target="_blank" aria-label="GitHub profile">
												<span class="icon-github" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a href="https://twitter.com/tanmoykar27" target="_blank" aria-label="X profile">
												<span class="aw-icon-x" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a href="https://www.linkedin.com/in/tanmoykarmakar2711" target="_blank" aria-label="Linkedin profile">
												<span class="aw-icon-linkedin" aria-hidden="true" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-white">
								<div class="aw-social-item u-flex-vertical u-gap-24">
									<div class="u-flex u-gap-16 u-main-space-between">
										<div class="aw-user-box">
											<img
												class="aw-user-box-image"
												src="images/heroes/avatars/bishwajeet.png"
												alt=""
											/>
											<div class="aw-user-box-name aw-sub-body-500">Bishwajeet Parhi</div>
											<div class="aw-user-box-username aw-sub-body-400">Flutter Developer</div>
										</div>
									</div>
									<p class="aw-sub-body-500 aw-u-text-color-neutral-700">
										Bishwajeet Parhi is a Flutter developer and active open-source contributor. He's
										currently a junior pursuing a Computer Science and Engineering degree and also
										an organizer of the Hack This Fall hackathon.
									</p>
									<ul class="u-flex u-gap-12">
										<li>
											<a href="https://github.com/2002Bishwajeet" target="_blank" aria-label="GitHub profile">
												<span class="icon-github" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a href="https://twitter.com/biswa_20p" target="_blank" aria-label="X profile">
												<span class="aw-icon-x" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a href="https://www.linkedin.com/in/2002bishwajeet" target="_blank" aria-label="LinkedIn profile">
												<span class="aw-icon-linkedin" aria-hidden="true" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-white">
								<div class="aw-social-item u-flex-vertical u-gap-24">
									<div class="u-flex u-gap-16 u-main-space-between">
										<div class="aw-user-box">
											<img
												class="aw-user-box-image"
												src="images/heroes/avatars/mickael.png"
												alt=""
											/>
											<div class="aw-user-box-name aw-sub-body-500">Mickaël Alves</div>
											<div class="aw-user-box-username aw-sub-body-400">Front-end Consultant</div>
										</div>
									</div>
									<p class="aw-sub-body-500 aw-u-text-color-neutral-700">
										Mickaël is a front-end developer working as a web consultant in Lyon at Zenika. He co-organizes meetups with LyonJS and speaks at conferences about Appwrite, Flutter, and Remotion.
									</p>
									<ul class="u-flex u-gap-12">
										<li>
											<a href="https://github.com/CruuzAzul" target="_blank" aria-label="GitHub profile">
												<span class="icon-github" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a href="https://twitter.com/CruuzAzul" target="_blank" aria-label="X profile">
												<span class="aw-icon-x" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a href="https://www.linkedin.com/in/mickaelalves" target="_blank" aria-label="LinkedIn profile">
												<span class="aw-icon-linkedin" aria-hidden="true" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-white">
								<div class="aw-social-item u-flex-vertical u-gap-24">
									<div class="u-flex u-gap-16 u-main-space-between">
										<div class="aw-user-box">
											<img
												class="aw-user-box-image"
												src="images/heroes/avatars/safwan.png"
												alt=""
											/>
											<div class="aw-user-box-name aw-sub-body-500">Safwan Parkar</div>
											<div class="aw-user-box-username aw-sub-body-400">Full Stack Engineer</div>
										</div>
									</div>
									<p class="aw-sub-body-500 aw-u-text-color-neutral-700">
										Safwan is a Full Stack Engineer with experience in various technologies such as
										React, Next, Express, Node, MySQL and Flutter. He is among the most active
										members on the Appwrite Discord server and also a community moderator.
									</p>
									<ul class="u-flex u-gap-12">
										<li>
											<a href="https://github.com/safwanyp/" target="_blank" aria-label="GitHub profile">
												<span class="icon-github" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a href="https://twitter.com/debingalooo" target="_blank" aria-label="X profile">
												<span class="aw-icon-x" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a href="https://www.linkedin.com/in/safwanyp/" target="_blank" aria-label="LinkedIn profile">
												<span class="aw-icon-linkedin" aria-hidden="true" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-white">
								<div class="aw-social-item u-flex-vertical u-gap-24">
									<div class="u-flex u-gap-16 u-main-space-between">
										<div class="aw-user-box">
											<img
												class="aw-user-box-image"
												src="images/heroes/avatars/emilia.png"
												alt=""
											/>
											<div class="aw-user-box-name aw-sub-body-500">Emilia</div>
											<div class="aw-user-box-username aw-sub-body-400">Software Engineer</div>
										</div>
									</div>
									<p class="aw-sub-body-500 aw-u-text-color-neutral-700">
										Emilia is a current student who actively focuses on system administration and
										coding. She likes working with Docker, Linux, Svelte, and Go, is currently
										exploring Envoy proxy, Crowdsec, Kubernetes, and Rust, and happens to be one of
										the most active contributors in Appwrite's Discord community.
									</p>
									<ul class="u-flex u-gap-12">
										<li>
											<a href="https://github.com/Emiliaaah" target="_blank" aria-label="GitHub profile">
												<span class="icon-github" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a href="https://twitter.com/CodingEmilia" target="_blank" aria-label="X profile">
												<span class="aw-icon-x" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a href="https://www.linkedin.com/in/emilia-van-der-ploeg" target="_blank" aria-label="LinkedIn profile">
												<span class="aw-icon-linkedin" aria-hidden="true" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="aw-big-padding-section-level-2">
				<ul class="aw-scroll-carousel">
					<li>
						<div
							class="aw-card is-white"
							style="--p-card-padding:0.5rem; --card-border-radius:1.25rem"
						>
							<img
								class="u-block aw-u-border-radius-12"
								src="https://eladscil.files.wordpress.com/2022/12/img_6246-large.jpeg"
								width="362"
								alt=""
							/>
						</div>
					</li>
					<li>
						<div
							class="aw-card is-white"
							style="--p-card-padding:0.5rem; --card-border-radius:1.25rem"
						>
							<img
								class="u-block aw-u-border-radius-12"
								src="https://eladscil.files.wordpress.com/2023/07/img_9674-large.jpeg"
								width="362"
								alt=""
							/>
						</div>
					</li>
					<li>
						<div
							class="aw-card is-white"
							style="--p-card-padding:0.5rem; --card-border-radius:1.25rem"
						>
							<img
								class="u-block aw-u-border-radius-12"
								src="https://eladscil.files.wordpress.com/2022/12/img_6167-large.jpeg"
								width="362"
								alt=""
							/>
						</div>
					</li>
					<li>
						<div
							class="aw-card is-white"
							style="--p-card-padding:0.5rem; --card-border-radius:1.25rem"
						>
							<img
								class="u-block aw-u-border-radius-12"
								src="https://eladscil.files.wordpress.com/2023/07/img_9861-large.jpeg"
								width="362"
								alt=""
							/>
						</div>
					</li>
					<li>
						<div
							class="aw-card is-white"
							style="--p-card-padding:0.5rem; --card-border-radius:1.25rem"
						>
							<img
								class="u-block aw-u-border-radius-12"
								src="https://eladscil.files.wordpress.com/2022/12/img_6210-large.jpeg"
								width="362"
								alt=""
							/>
						</div>
					</li>

					<li>
						<div
							class="aw-card is-white"
							style="--p-card-padding:0.5rem; --card-border-radius:1.25rem"
						>
							<img
								class="u-block aw-u-border-radius-12"
								src="https://eladscil.files.wordpress.com/2023/07/img_9674-large.jpeg"
								width="362"
								alt=""
							/>
						</div>
					</li>
					<li>
						<div
							class="aw-card is-white"
							style="--p-card-padding:0.5rem; --card-border-radius:1.25rem"
						>
							<img
								class="u-block aw-u-border-radius-12"
								src="https://eladscil.files.wordpress.com/2022/12/img_6167-large.jpeg"
								width="362"
								alt=""
							/>
						</div>
					</li>
					<li>
						<div
							class="aw-card is-white"
							style="--p-card-padding:0.5rem; --card-border-radius:1.25rem"
						>
							<img
								class="u-block aw-u-border-radius-12"
								src="https://eladscil.files.wordpress.com/2023/07/img_9861-large.jpeg"
								width="362"
								alt=""
							/>
						</div>
					</li>
					<li>
						<div
							class="aw-card is-white"
							style="--p-card-padding:0.5rem; --card-border-radius:1.25rem"
						>
							<img
								class="u-block aw-u-border-radius-12"
								src="https://eladscil.files.wordpress.com/2022/12/img_6210-large.jpeg"
								width="362"
								alt=""
							/>
						</div>
					</li>
				</ul>
			</div>
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<section class="aw-hero is-align-start">
						<h2 class="aw-display aw-u-color-text-primary u-max-width-700">
							How Appwrite Heroes can benefit you
						</h2>
					</section>
					<div class="u-overflow-hidden aw-u-margin-block-start-80">
						<ul class="aw-info-boxes aw-sub-body-500">
							<li class="aw-info-boxes-item">
								<img src="/images/icons/gradients/discussion.svg" width="40" height="40" alt="" />
								<h3 class="aw-info-boxes-title">Channel access</h3>
								<p class="aw-info-boxes-content">
									Access to internal channel with Appwrite’s Engineering and DevRel teams
								</p>
							</li>
							<li class="aw-info-boxes-item">
								<img src="/images/icons/gradients/community.svg" width="40" height="40" alt="" />
								<h3 class="aw-info-boxes-title">In-person gatherings</h3>
								<p class="aw-info-boxes-content">
									Top contributors get invited to an in-person gathering with the Appwrite team
								</p>
							</li>
							<li class="aw-info-boxes-item">
								<img src="/images/icons/gradients/verified.svg" width="40" height="40" alt="" />
								<h3 class="aw-info-boxes-title">Digital badge</h3>
								<p class="aw-info-boxes-content">
									Exclusive digital badge to share on Discord and LinkedIn
								</p>
							</li>
							<li class="aw-info-boxes-item">
								<img src="/images/icons/gradients/travel.svg" width="40" height="40" alt="" />
								<h3 class="aw-info-boxes-title">Travel</h3>
								<p class="aw-info-boxes-content">
									Travel paid for top contributors (case-by-case) to attend dev conferences
								</p>
							</li>
							<li class="aw-info-boxes-item">
								<img src="/images/icons/gradients/labs.svg" width="40" height="40" alt="" />
								<h3 class="aw-info-boxes-title">
									<span class="">Beta-test</span>
								</h3>
								<p class="aw-info-boxes-content">Opportunity to beta-test Appwrite releases</p>
							</li>
							<li class="aw-info-boxes-item">
								<img src="/images/icons/gradients/unlock.svg" width="40" height="40" alt="" />
								<h3 class="aw-info-boxes-title">
									<span class="">Roadmap access</span>
								</h3>
								<p class="aw-info-boxes-content">Special access to a more in-depth roadmap</p>
							</li>
						</ul>
					</div>
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
						<h5 class="aw-display aw-u-color-text-primary">Become a Hero</h5>
						<p class="aw-description aw-u-color-text-primary" style="opacity:0.64">
							Have you been actively providing value for the Appwrite community? Apply now to join
							our hero program! Applications are open every three months.
						</p>
						<a
							href="https://7nxwryuitoy.typeform.com/heroes-apply"
							target="_blank"
							class="aw-button is-transparent is-full-width-mobile aw-u-cross-child-center u-margin-block-start-20"
						>
							Become a Hero
						</a>
					</div>
				</div>
				<div class="aw-big-padding-section-level-2 u-position-relative">
					<div class="aw-container u-position-relative">
						<FooterNav />
						<MainFooter />
					</div>
				</div>
			</div>
		</div>
	</div>
</Main>

<style lang="scss">
	.aw-scroll-carousel li {
		animation: marquee 15s linear infinite;
		@keyframes marquee {
			0% {
				transform: translate(0, 0);
			}
			100% {
				transform: translate(-100%, 0);
			}
		}
	}
</style>
