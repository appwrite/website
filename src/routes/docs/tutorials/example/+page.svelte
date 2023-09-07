<script>
	import { Docs } from '$lib/layouts';
	import Sidebar from '$routes/docs/Sidebar.svelte';
	import MainFooter from "../../../../lib/components/MainFooter.svelte";
</script>

<Docs variant="two-side-navs">
	<Sidebar />
	<main class="u-contents">
		<article class="aw-article u-contents">
			<header class="aw-article-header">
				<div class="aw-article-header-start u-flex-vertical aw-u-cross-start">
					<button
						class="
                            aw-button is-text aw-is-only-mobile
                            aw-u-padding-block-0 aw-u-padding-inline-start-0 aw-u-padding-inline-end-12"
						aria-label="previous page"
					>
						<span class="icon-cheveron-left" aria-hidden="true" />
					</button>
					<ul class="aw-metadata aw-caption-400">
						<li>[level-of-difficulty]</li>
						<li>[time-to-read] min</li>
					</ul>
					<div class="u-position-relative u-flex u-cross-center">
						<button
							class="
                            aw-button is-text is-icon aw-u-cross-center aw-u-size-40
                            u-position-absolute u-inset-inline-start-0 aw-u-translate-x-negative"
							aria-label="previous page"
						>
							<span
								class="icon-cheveron-left aw-u-font-size-24 aw-u-color-text-primary"
								aria-hidden="true"
							/>
						</button>
						<h1 class="aw-title">Header</h1>
					</div>
				</div>
				<div class="aw-article-header-end" />
			</header>
			<div class="aw-article-content">
				<section class="aw-article-content-section">
					<section class="aw-article-content-sub-section">
						<header class="aw-article-content-header">
							<h2 class="aw-main-body-500">Prerequisites</h2>
						</header>
						<ul class="aw-list">
							<li>Lorem ipsum dolor sit amet consectetur.</li>
							<li>Lorem ipsum dolor sit amet consectetur. Cras laoreet dolor ultrices ligula.</li>
							<li>
								Quam pretium blandit egestas nec diam lacus volutpat a lorem. Porta augue proin.
							</li>
						</ul>
						<div class="aw-media">
							<img
								class=""
								src="https://pink.appwrite.io/articles/announcement.png"
								alt=""
								loading="lazy"
							/>
						</div>
					</section>
					<section class="aw-article-content-sub-section">
						<header class="aw-article-content-header">
							<h2 class="aw-main-body-500">Featured products</h2>
							<ul class="u-flex u-flex-wrap u-gap-8">
								<li><div class="aw-tag">product</div></li>
								<li><div class="aw-tag">product</div></li>
								<li><div class="aw-tag">product</div></li>
							</ul>
						</header>
						<p>
							Lorem ipsum dolor sit amet consectetur. Ullamcorper tincidunt ut egestas mauris
							rhoncus arcu. Habitant est leo maecenas et. Tempus elementum eget rutrum eget semper.
							Vulputate quis odio velit fames tristique sit magna nec ut.
						</p>
					</section>
				</section>

				<section class="aw-article-content-section is-with-line">
					<section class="aw-article-content-sub-section">
						<header class="aw-article-content-header">
							<span class="aw-numeric-badge">1</span>
							<h2 class="aw-main-body-500">Featured products</h2>
						</header>
						<p>
							Lorem ipsum dolor sit amet consectetur. Id nisi quam nisl iaculis semper nibh egestas
							ut. Dictum tortor arcu feugiat metus pellentesque posuere.
						</p>
						<section class="aw-code-snippet theme-dark" aria-label="code-snippet panel">
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
					</section>
				</section>

				<section class="aw-article-content-section is-with-line">
					<section class="aw-article-content-sub-section">
						<header class="aw-article-content-header">
							<span class="aw-numeric-badge">2</span>
							<h2 class="aw-main-body-500">Featured products</h2>
						</header>
						<p>
							Lorem ipsum dolor sit amet consectetur. Id nisi quam nisl iaculis semper nibh egestas
							ut. Dictum tortor arcu feugiat metus pellentesque posuere.
						</p>
						<section class="aw-code-snippet theme-dark" aria-label="code-snippet panel">
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
					</section>
					<section class="aw-article-content-sub-section">
						<h2 class="aw-sub-body-500 aw-u-color-text-primary">Sub title</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur. Id nisi quam nisl iaculis semper nibh egestas
							ut. Dictum tortor arcu feugiat metus pellentesque posuere.
						</p>
					</section>
					<section class="aw-article-content-sub-section">
						<h2 class="aw-sub-body-500 aw-u-color-text-primary">Sub title</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur. Id nisi quam nisl iaculis semper nibh egestas
							ut. Dictum tortor arcu feugiat metus pellentesque posuere.
						</p>
						<section class="aw-code-snippet theme-dark" aria-label="code-snippet panel">
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
					</section>
				</section>

				<section class="aw-article-content-section">
					<section class="aw-article-content-sub-section">
						<header class="aw-article-content-header">
							<span class="aw-numeric-badge">3</span>
							<h2 class="aw-main-body-500">Featured products</h2>
						</header>
						<p>
							Lorem ipsum dolor sit amet consectetur. Id nisi quam nisl iaculis semper nibh egestas
							ut. Dictum tortor arcu feugiat metus pellentesque posuere.
						</p>
						<section class="aw-code-snippet theme-dark" aria-label="code-snippet panel">
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
					</section>
				</section>

				<section class="aw-article-content-section">
					<section class="aw-article-content-sub-section">
						<blockquote class="aw-blockquote">
							<p class="aw-description">
								“Lorem ipsum dolor sit amet consectetur. Diam fermentum tellus ante purus nullam eget sit id ac. Purus viverra ultrices fusce posuere sed enim duis aliquam sit. Vitae fames potenti donec ultricies in. Quis sed iaculis consectetur cras feugiat nibh gravida tincidunt volutpat. Eleifend vel blandit cras tempor sed nam quis aliquet. Facilisi tempor amet id integer gravida duis. Aliquet nulla tellus risus tortor neque vestibulum arcu.”
							</p>
							<footer class="aw-blockquote-footer">
								<div class="aw-sub-body-400 aw-u-color-text-primary" role="">[quoted name]</div>
								<div class="aw-caption-400">[role - optional]</div>
							</footer>
						</blockquote>
					</section>
					<section class="aw-article-content-sub-section">
						<div class="aw-inline-info">
							<span class="icon-info" aria-hidden="true"></span>
							<h5 class="aw-sub-body-500 aw-u-color-text-primary">Lorem ipsum dolor sit amet consectetur</h5>
							<p class="aw-paragraph-md">Lorem ipsum dolor sit amet consectetur. Sed volutpat nec pharetra nisl dis. Donec accumsan in orci volutpat augue sed sit sollicitudin. Nunc nec nunc nisl faucibus cursus diam tellus aliquet. Ac blandit et varius egestas.</p>
						</div>
					</section>
					<section class="aw-article-content-sub-section">
						<ul class="aw-pink-dots">
							<li>aaa</li>
							<li>bbb</li>
							<li>
								ccc
								<ul class="aw-pink-dots">
									<li>aaa</li>
									<li>bbb</li>
									<li>
										ccc
										<ul class="aw-pink-dots">
											<li>aaa</li>
											<li>bbb</li>
											<li>ccc</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</section>
				</section>

				<section class="aw-content-footer">
					<header class="aw-content-footer-header">
						<div class="aw-content-footer-header-start">
							<h5 class="aw-main-body-500 aw-u-color-text-primary">Was this page helpful?</h5>
							<div class="u-flex u-gap-8">
								<input
									class="aw-radio-button is-like"
									type="radio"
									aria-label="Helpful"
									name="happy"
								/>
								<input
									class="aw-radio-button is-dislike"
									type="radio"
									aria-label="UnHelpful"
									name="happy"
								/>
							</div>
						</div>
						<div class="aw-content-footer-header-end">
							<ul class="aw-metadata aw-caption-400">
								<li>Last updated on July 16, 2023</li>
								<li>
									<button class="">
										<!-- TODO: wait for implement icons in website -->
										<span class="icon-edit" aria-hidden="true" />
										<span>Update on GitHub</span>
									</button>
								</li>
							</ul>
						</div>
					</header>
					<div class="aw-card is-transparent" style="--card-padding:1rem">
						<label for="message">
							<span class="aw-u-color-text-primary">What did you like?</span>
							<span class="">(optional)</span>
						</label>
						<textarea
							class="aw-input-text u-margin-block-start-8"
							id="message"
							placeholder="Write your message"
						/>
						<div class="u-flex u-main-end u-margin-block-start-16">
							<button class="aw-button is-text">
								<span class="">Cancel</span>
							</button>
							<button class="aw-button">
								<span class="">Submit</span>
							</button>
						</div>
					</div>
				</section>
			</div>
			<aside class="aw-references-menu aw-u-padding-inline-start-24">
				<div class="aw-references-menu-content">
					<div class="u-flex u-main-space-between u-cross-center u-gap-16">
						<h5 class="aw-references-menu-title aw-eyebrow">On This Page</h5>
					</div>
					<ol class="aw-references-menu-list">
						<li class="aw-references-menu-item">
							<a href="." class="aw-references-menu-link is-selected">
								<span class="aw-caption-400">Prerequisites</span>
							</a>
						</li>
						<li class="aw-references-menu-item">
							<a href="." class="aw-references-menu-link">
								<span class="aw-caption-400">Featured products</span>
							</a>
						</li>
						<li class="aw-references-menu-item">
							<a href="." class="aw-references-menu-link">
								<span class="aw-numeric-badge">1</span>
								<span class="aw-caption-400">Title</span>
							</a>
						</li>
						<li class="aw-references-menu-item">
							<a href="." class="aw-references-menu-link">
								<span class="aw-numeric-badge">2</span>
								<span class="aw-caption-400">Title</span>
							</a>
							<ol class="aw-references-menu-list u-margin-block-start-16 u-margin-inline-start-32">
								<li class="aw-references-menu-item">
									<a href="." class="aw-references-menu-link">
										<span class="aw-caption-400">Subtitle</span>
									</a>
								</li>
								<li class="aw-references-menu-item">
									<a href="." class="aw-references-menu-link">
										<span class="aw-caption-400">Subtitle</span>
									</a>
								</li>
							</ol>
						</li>
						<li class="aw-references-menu-item">
							<a href="." class="aw-references-menu-link">
								<span class="aw-numeric-badge">3</span>
								<span class="aw-caption-400">Title</span>
							</a>
						</li>
					</ol>
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

	<MainFooter variant="docs"/>

</Docs>

<!-- <script type="module" src="/src/main.ts"></script>

<script>
    $(document).ready(function() {
        $("#MenuButton, #ToggleMenu").on("click", function(){
            $(".aw-grid-two-side-navs").toggleClass("is-open");
            $(".aw-references-menu").removeClass("is-open");
        });


       
    });
</script> -->
