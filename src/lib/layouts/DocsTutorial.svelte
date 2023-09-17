<script lang="ts">
	type Link = {
		title: string;
		href: string;
		step: number;
	};

	export let title: string;
	export let toc: Array<
		Link & {
			children?: Array<Omit<Link, 'step'>>;
		}
	>;
	export let nextStep: Link | undefined = undefined;
	export let prevStep: Link | undefined = undefined;
</script>

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
					<slot name="metadata" />
				</ul>
				<div class="u-position-relative u-flex u-cross-center">
					<button
						class="
						aw-button is-text is-only-icon aw-u-cross-center aw-u-size-40
						u-position-absolute u-inset-inline-start-0 aw-u-translate-x-negative"
						aria-label="previous page"
					>
						<span
							class="icon-cheveron-left aw-u-font-size-24 aw-u-color-text-primary aw-is-not-mobile"
							aria-hidden="true"
						/>
					</button>
					<h1 class="aw-title">{title}</h1>
				</div>
			</div>
			<div class="aw-article-header-end" />
		</header>
		<div class="aw-article-content">
			<slot />
			<div class="u-flex u-main-space-between">
				{#if prevStep}
					<a href={prevStep.href} class="aw-button is-text">
						<span class="icon-cheveron-left" aria-hidden="true" />
						<span class="aw-sub-body-500">
							Step {prevStep.step}<span class="aw-is-not-mobile">: {prevStep.title}</span>
						</span>
					</a>
				{/if}
				{#if nextStep}
					<a href={nextStep.href} class="aw-button is-secondary">
						<span class="aw-sub-body-500">
							Step {nextStep.step}<span class="aw-is-not-mobile">: {nextStep.title}</span>
						</span>
						<span class="icon-cheveron-right" aria-hidden="true" />
					</a>
				{/if}
			</div>

			<section class="aw-content-footer">
				<header class="aw-content-footer-header u-cross-center">
					<div class="aw-content-footer-header-start u-cross-center">
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
							<li>Last updated: July 16, 2023</li>
							<li>
								<button class="u-flex u-gap-4 u-cross-baseline">
									<span class="icon-pencil-alt u-contents" aria-hidden="true" />
									<span>Update on GitHub</span>
								</button>
							</li>
						</ul>
					</div>
				</header>
				<div class="aw-card is-transparent" style="--card-padding:1rem">
					<label for="message">
						<span class="aw-caption-400 aw-u-color-text-primary">What did you like?</span>
						<span class="aw-caption-400">(optional)</span>
					</label>
					<textarea
						class="aw-input-text u-margin-block-start-8"
						id="message"
						placeholder="Write your message"
					/>
					<div class="u-flex u-gap-8 u-main-end u-margin-block-start-16">
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
					<h5 class="aw-references-menu-title aw-eyebrow">Tutorial Steps</h5>
				</div>
				<ol class="aw-references-menu-list">
					{#each toc as parent}
						<li class="aw-references-menu-item">
							<a href={parent.href} class="aw-references-menu-link">
								<span class="aw-numeric-badge">{parent.step}</span>
								<span class="aw-caption-400">{parent.title}</span>
							</a>
							{#if parent.children}
								<ol
									class="aw-references-menu-list u-margin-block-start-16 u-margin-inline-start-32"
								>
									{#each parent.children as child}
										<li class="aw-references-menu-item">
											<a href={child.href} class="aw-references-menu-link">
												<span class="aw-caption-400">{child.title}</span>
											</a>
										</li>
									{/each}
								</ol>
							{/if}
						</li>
					{/each}
				</ol>
				<div class="u-sep-block-start u-padding-block-start-20">
					<a class="aw-button is-text u-main-start aw-u-padding-inline-0" href="#top">
						<span class="icon-arrow-up" aria-hidden="true" />
						<span class="aw-sub-body-500">Back to top</span>
					</a>
				</div>
			</div>
		</aside>
	</article>
</main>
