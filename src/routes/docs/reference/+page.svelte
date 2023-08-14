<script>
	import { Docs } from '$lib/layouts';
	import Sidebar from '../Sidebar.svelte';
</script>

<Docs expanded>
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
								class="aw-code-snippet u-position-sticky"
								style="--inset-block-start:var(--p-grid-huge-navs-secondary-sticky-position);"
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
								class="aw-code-snippet u-position-sticky"
								style="--inset-block-start:var(--p-grid-huge-navs-secondary-sticky-position);"
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
								class="aw-code-snippet u-position-sticky"
								style="--inset-block-start:var(--p-grid-huge-navs-secondary-sticky-position);"
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
								class="aw-code-snippet u-position-sticky"
								style="--inset-block-start:var(--p-grid-huge-navs-secondary-sticky-position);"
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
								class="aw-code-snippet u-position-sticky"
								style="--inset-block-start:var(--p-grid-huge-navs-secondary-sticky-position);"
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
			</div>
			<aside class="aw-references-menu">
				<button class="aw-icon-button" id="refOpen">
					<span class="icon-menu-alt-4" aria-hidden="true" />
				</button>
				<div class="aw-references-menu-content">
					<div class="u-flex u-main-space-between u-cross-center u-gap-16">
						<h5 class="aw-references-menu-title aw-eyebrow">On This Page</h5>
						<button class="aw-icon-button" id="refClose">
							<span class="icon-x" aria-hidden="true" />
						</button>
					</div>
					<ul class="aw-references-menu-list">
						<li class="aw-references-menu-item">
							<a href="" class="aw-references-menu-link is-selected aw-caption-400">Title</a>
						</li>
						<li class="aw-references-menu-item">
							<a href="" class="aw-references-menu-link aw-caption-400">Title</a>
						</li>
						<li class="aw-references-menu-item">
							<a href="" class="aw-references-menu-link aw-caption-400">Title</a>
						</li>
						<li class="aw-references-menu-item">
							<a href="" class="aw-references-menu-link aw-caption-400">Title</a>
						</li>
					</ul>
					<div class="u-sep-block-start u-padding-block-start-20">
						<a class="aw-button is-text" href="#">
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
					<a href="">Supports</a>
				</li>
				<li>
					<a href="">Status</a>
				</li>
				<li>
					<a href="">Changelog</a>
				</li>
			</ul>
			<div class="aw-main-footer-grid-1-column-4 aw-main-footer-copyright">
				Copyright © 2023 Appwrite • Version 0.30.13.504
			</div>
		</div>
	</footer>
</Docs>
