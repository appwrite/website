<script>
	import { Docs } from '$lib/layouts';
	import Sidebar from '../Sidebar.svelte';

	const handleRefClick = () => {
		document.querySelector('.aw-references-menu')?.classList.toggle('is-open');
		document.querySelector('.aw-grid-two-side-navs')?.classList.remove('is-open');
	};
</script>

<Docs variant="expanded">
	<Sidebar expandable />
	<main class="u-contents">
		<article class="aw-article u-contents">
			<header class="aw-article-header">
				<div class="aw-article-header-start">
					<h1 class="aw-title">[reference]</h1>
					<div class="aw-inline-code">CLIENT</div>
				</div>
				<div class="aw-article-header-end">
					<div class="u-flex u-gap-24 aw-u-color-text-primary">
						<div class="u-flex u-cross-center u-gap-8">
							<label class="u-small" for="platform">Platform</label>
							<div class="aw-select is-colored">
								<select id="platform">
									<option>Web SDK</option>
								</select>
								<span class="icon-cheveron-down" aria-hidden="true" />
							</div>
						</div>
						<div class="u-flex u-cross-center u-gap-8">
							<label class="u-small" for="version">Version</label>
							<div class="aw-select is-colored">
								<select id="version">
									<option>Cloud</option>
								</select>
								<span class="icon-cheveron-down" aria-hidden="true" />
							</div>
						</div>
					</div>
				</div>
			</header>
			<div class="aw-article-content">
				<section class="aw-article-content-grid-6-4">
					<div class="aw-article-content-grid-6-4-column-1 u-flex-vertical u-gap-32">
						<p class="aw-paragraph-md">
							Lorem ipsum dolor sit amet consectetur. Bibendum sed ultrices sit aenean. Vel posuere
							arcu venenatis hendrerit at facilisis. Consequat consectetur phasellus magna pulvinar
							nisi mi aliquam. Id non imperdiet fringilla duis eu neque fames dui feugiat. Neque
							nunc elit cursus dignissim ornare sem lectus.
						</p>
						<p class="aw-paragraph-md">
							In viverra at ultrices sit. Vitae pulvinar tincidunt sed et eleifend nunc dictumst.
							Nulla ullamcorper praesent cursus orci enim. Sed ut nibh consequat id volutpat. Turpis
							amet tincidunt purus consequat nibh in varius ipsum. Aenean pellentesque duis semper
							aenean eget ac morbi dictum in. In amet mollis consequat neque turpis duis sem. Purus
							tincidunt amet curabitur nibh adipiscing quis duis. Duis cras elit ut arcu malesuada
							lectus sed. Non viverra volutpat sit turpis lorem urna at eget hendrerit.
						</p>
					</div>
					<div class="aw-article-content-grid-6-4-column-2 u-flex-vertical u-gap-32">
						<div class="u-contents theme-dark">
							<section
								class="aw-code-snippet u-margin-block-start-auto"
								aria-label="code-snippet panel"
							>
								<header class="aw-code-snippet-header">
									<div class="aw-code-snippet-header-start">
										<div class="u-flex u-gap-16">
											<div class="aw-tag">
												<span class="text">Default</span>
											</div>
										</div>
									</div>
									<div class="aw-code-snippet-header-end">
										<ul class="buttons-list u-flex u-gap-8">
											<li class="buttons-list-item u-flex u-cross-child-scenter">
												<div class="aw-select">
													<select>
														<option>Web SDK</option>
														<option>Android SDK</option>
													</select>
													<span class="icon-cheveron-down" aria-hidden="true" />
												</div>
											</li>
											<li class="buttons-list-item aw-u-padding-inline-start-20">
												<button class="aw-icon-button" aria-label="copy code from code-snippet">
													<span class="icon-duplicate" aria-hidden="true" />
												</button>
											</li>
										</ul>
									</div>
								</header>
								<div class="aw-code-snippet-content">CONTENT</div>
							</section>
						</div>
					</div>
				</section>
				<section class="aw-article-content-grid-6-4">
					<div class="-article-content-grid-6-4-column-1 u-flex-vertical u-gap-32">
						<header class="aw-article-content-header">
							<h2 class="aw-main-body-500">Featured products</h2>
						</header>
						<p class="aw-sub-body-400">
							Lorem ipsum dolor sit amet consectetur. Bibendum sed ultrices sit aenean. Vel posuere
							arcu venenatis hendrerit at facilisis. Consequat consectetur phasellus magna pulvinar
							nisi mi aliquam. Id non imperdiet fringilla duis eu neque fames dui feugiat. Neque
							nunc elit cursus dignissim ornare sem lectus.
						</p>
						<ul
							class="collapsible u-width-full-line"
							style="--p-toggle-border-color: var(--aw-color-border);"
						>
							<li class="collapsible-item">
								<details class="collapsible-wrapper" open>
									<summary class="collapsible-button">
										<span class="text"> Request </span>
										<div class="icon aw-u-color-text-primary">
											<span class="icon-cheveron-down" aria-hidden="true" />
										</div>
									</summary>
									<div class="collapsible-content">
										<div class="aw-card is-transparent u-padding-16 u-margin-block-start-16">
											<ul class="u-flex-vertical">
												<li>
													<article>
														<header class="u-flex u-cross-baseline u-gap-8">
															<h3 class="aw-eyebrow aw-u-color-text-primary">userid</h3>
															<span class="aw-caption-400">string</span>
															<div class="aw-tag">required</div>
														</header>
														<p class="aw-sub-body-400 u-margin-block-start-16">
															Choose your own unique ID or pass the string ID.unique() to auto
															generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and
															underscore. Can't start with a special char. Max length is 36 chars.
														</p>
													</article>
												</li>
												<li
													class="u-sep-block-start u-padding-block-start-16 u-margin-block-start-16"
												>
													<article>
														<header class="u-flex u-cross-baseline u-gap-8">
															<h3 class="aw-eyebrow aw-u-color-text-primary">email</h3>
															<span class="aw-caption-400">string</span>
															<div class="aw-tag">required</div>
														</header>
														<p class="aw-sub-body-400 u-margin-block-start-16">User emails.</p>
													</article>
												</li>
												<li
													class="u-sep-block-start u-padding-block-start-16 u-margin-block-start-16"
												>
													<article>
														<header class="u-flex u-cross-baseline u-gap-8">
															<h3 class="aw-eyebrow aw-u-color-text-primary">password</h3>
															<span class="aw-caption-400">string</span>
															<div class="aw-tag">required</div>
														</header>
														<p class="aw-sub-body-400 u-margin-block-start-16">
															User password. Must be at least 8 chars.
														</p>
													</article>
												</li>
												<li
													class="u-sep-block-start u-padding-block-start-16 u-margin-block-start-16"
												>
													<article>
														<header class="u-flex u-cross-baseline u-gap-8">
															<h3 class="aw-eyebrow aw-u-color-text-primary">name</h3>
															<span class="aw-caption-400">string</span>
														</header>
														<p class="aw-sub-body-400 u-margin-block-start-16">
															User name. Max length: 128 chars.
														</p>
													</article>
												</li>
											</ul>
										</div>
									</div>
								</details>
							</li>
							<li class="collapsible-item">
								<details class="collapsible-wrapper">
									<summary class="collapsible-button">
										<span class="text"> Responnse </span>
										<div class="icon aw-u-color-text-primary">
											<span class="icon-cheveron-down" aria-hidden="true" />
										</div>
									</summary>
									<div class="collapsible-content">
										<div class="aw-card is-transparent u-padding-16 u-margin-block-start-16">
											<ul>
												<li>
													<article>
														<header class="u-flex u-cross-baseline u-gap-8">
															<h3 class="aw-eyebrow aw-u-color-text-primary">userid</h3>
															<span class="aw-caption-400">string</span>
															<div class="aw-tag">required</div>
														</header>
														<p class="aw-sub-body-400 u-margin-block-start-16">
															Choose your own unique ID or pass the string ID.unique() to auto
															generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and
															underscore. Can't start with a special char. Max length is 36 chars.
														</p>
													</article>
												</li>
											</ul>
										</div>
									</div>
								</details>
							</li>
							<li class="collapsible-item">
								<details class="collapsible-wrapper">
									<summary class="collapsible-button">
										<span class="text"> Errors </span>
										<div class="icon aw-u-color-text-primary">
											<span class="icon-cheveron-down" aria-hidden="true" />
										</div>
									</summary>
									<div class="collapsible-content">
										<div class="aw-card is-transparent u-padding-16 u-margin-block-start-16">
											<ul>
												<li>
													<article>
														<header class="u-flex u-cross-baseline u-gap-8">
															<h3 class="aw-eyebrow aw-u-color-text-primary">userid</h3>
															<span class="aw-caption-400">string</span>
															<div class="aw-tag">required</div>
														</header>
														<p class="aw-sub-body-400 u-margin-block-start-16">
															Choose your own unique ID or pass the string ID.unique() to auto
															generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and
															underscore. Can't start with a special char. Max length is 36 chars.
														</p>
													</article>
												</li>
											</ul>
										</div>
									</div>
								</details>
							</li>
						</ul>
					</div>
					<div class="aw-article-content-grid-6-4-column-2 u-flex-vertical u-gap-32">
						<div class="u-contents theme-dark">
							<div
								class="u-position-sticky"
								style="--inset-block-start:var(--p-grid-huge-navs-secondary-sticky-position);"
							>
								<section class="aw-code-snippet" aria-label="code-snippet panel">
									<header class="aw-code-snippet-header">
										<div class="aw-code-snippet-header-start">
											<div class="u-flex u-gap-16">
												<div class="aw-tag">
													<span class="text">Default</span>
												</div>
											</div>
										</div>
										<div class="aw-code-snippet-header-end">
											<ul class="buttons-list u-flex u-gap-8">
												<li class="buttons-list-item u-flex u-cross-child-scenter">
													<div class="aw-select">
														<select>
															<option>Web SDK</option>
															<option>Android SDK</option>
														</select>
														<span class="icon-cheveron-down" aria-hidden="true" />
													</div>
												</li>
												<li class="buttons-list-item aw-u-padding-inline-start-20">
													<button class="aw-icon-button" aria-label="copy code from code-snippet">
														<span class="icon-duplicate" aria-hidden="true" />
													</button>
												</li>
											</ul>
										</div>
									</header>
									<div class="aw-code-snippet-content">CONTENT</div>
								</section>
								<section class="aw-code-snippet" aria-label="code-snippet panel">
									<header class="aw-code-snippet-header">
										<div class="aw-code-snippet-header-start">
											<div class="u-flex u-gap-16">
												<div class="aw-tag">
													<span class="text">Default</span>
												</div>
											</div>
										</div>
										<div class="aw-code-snippet-header-end">
											<ul class="buttons-list u-flex u-gap-8">
												<li class="buttons-list-item u-flex u-cross-child-scenter">
													<div class="aw-select">
														<select>
															<option>Web SDK</option>
															<option>Android SDK</option>
														</select>
														<span class="icon-cheveron-down" aria-hidden="true" />
													</div>
												</li>
												<li class="buttons-list-item aw-u-padding-inline-start-20">
													<button class="aw-icon-button" aria-label="copy code from code-snippet">
														<span class="icon-duplicate" aria-hidden="true" />
													</button>
												</li>
											</ul>
										</div>
									</header>
									<div class="aw-code-snippet-content">CONTENT</div>
								</section>
							</div>
						</div>
					</div>
				</section>
			</div>
			<aside class="aw-references-menu">
				<button class="aw-icon-button" id="refOpen" on:click={handleRefClick}>
					<span class="icon-menu-alt-4" aria-hidden="true" />
				</button>
				<div class="aw-references-menu-content">
					<div class="u-flex u-main-space-between u-cross-center u-gap-16">
						<h5 class="aw-references-menu-title aw-eyebrow">On This Page</h5>
						<button class="aw-icon-button" id="refClose" on:click={handleRefClick}>
							<span class="icon-x" aria-hidden="true" />
						</button>
					</div>
					<ul class="aw-references-menu-list">
						<li class="aw-references-menu-item">
							<a href="." class="aw-references-menu-link is-selected aw-caption-400">Title</a>
						</li>
						<li class="aw-references-menu-item">
							<a href="." class="aw-references-menu-link aw-caption-400">Title</a>
						</li>
						<li class="aw-references-menu-item">
							<a href="." class="aw-references-menu-link aw-caption-400">Title</a>
						</li>
						<li class="aw-references-menu-item">
							<a href="." class="aw-references-menu-link aw-caption-400">Title</a>
						</li>
					</ul>
					<div class="u-sep-block-start u-padding-block-start-20">
						<a class="aw-button is-text u-main-start aw-u-padding-inline-0" href=".">
							<span class="icon-arrow-up" aria-hidden="true" />
							<span class="aw-sub-body-500">Back to top</span>
						</a>
					</div>
				</div>
			</aside>
		</article>
	</main>
	<footer class="aw-main-footer u-margin-block-start-48 u-small">
		<div class="aw-main-footer-grid-1">
			<ul class="aw-main-footer-grid-1-column-1 u-flex u-gap-8">
				<li>
					<button class="aw-icon-button" aria-label="Appwrite on Discord">
						<span class="icon-discord" aria-hidden="true" />
					</button>
				</li>
				<li>
					<button class="aw-icon-button" aria-label="Appwrite GitHub">
						<span class="icon-github" aria-hidden="true" />
					</button>
				</li>
				<li>
					<button class="aw-icon-button" aria-label="Appwrite on Twitter">
						<span class="icon-twitter" aria-hidden="true" />
					</button>
				</li>
				<li>
					<button class="aw-icon-button" aria-label="Appwrite on LinkedIn">
						<span class="icon-linkedin" aria-hidden="true" />
					</button>
				</li>
				<li>
					<button class="aw-icon-button" aria-label="Appwrite YouTube">
						<span class="icon-youtube" aria-hidden="true" />
					</button>
				</li>
			</ul>
			<div class="aw-main-footer-grid-1-column-2">
				<div class="aw-select is-colored">
					<button class="physical-select">
						<span class="icon-moon" aria-hidden="true" />
						<span>Dark</span>
					</button>
					<span class="icon-cheveron-down" aria-hidden="true" />
				</div>
			</div>
			<ul class="aw-main-footer-grid-1-column-3 aw-main-footer-links">
				<li>
					<a href=".">Supports</a>
				</li>
				<li>
					<a href=".">Status</a>
				</li>
				<li>
					<a href=".">Changelog</a>
				</li>
			</ul>
			<div class="aw-main-footer-grid-1-column-4 aw-main-footer-copyright">
				Copyright © 2023 Appwrite
			</div>
		</div>
	</footer>
</Docs>
