<script lang="ts">
	import { Main } from '$lib/layouts';

	import FooterNav from '../../lib/components/FooterNav.svelte';
	import MainFooter from '../../lib/components/MainFooter.svelte';
</script>

<Main>
	<div class="u-position-fixed u-padding-0 u-inset-0 u-z-index-20 u-flex u-main-center u-cross-center"
		 style="background:hsl(var(--aw-color-black) / 0.3); backdrop-filter:blur(15px);">

		<div class="aw-input-text-search-wrapper aw-u-max-width-680 aw-u-margin-inline-20">
			<span class="icon-search" aria-hidden="true" style="inset-block-start:1.25rem" />
			<input class="aw-input-text aw-u-padding-block-end-0 u-position-relative u-z-index-1" type="search" placeholder="Search"
					style="border-end-start-radius:0; border-end-end-radius:0;">
			<div class="aw-card is-normal u-overflow-y-auto"
				 style="--card-padding-mobile:1rem; border-radius:0 0 0.5rem 0.5rem; margin-block-start:-0.0625rem; max-block-size: min(18.75rem, calc(100vh - 5.5rem)); border-block-start-width:0;">
				<h6 class="aw-eyebrow">Recommended</h6>
				<ul class="u-margin-block-start-8">
					<li>
						<a href="/" class="aw-button is-text aw-u-trim-1 u-max-width-100-percent u-line-height-2 aw-u-padding-block-4">
							<span class="u-inline aw-u-color-text-secondary">Quick start  /</span>
							<span class="u-inline aw-u-color-text-primary">Quick start start start start start start start start start start start start start start with Flutter</span>
						</a>
					</li>
					<li>
						<a href="/" class="aw-button is-text aw-u-trim-1 u-max-width-100-percent u-line-height-2 aw-u-padding-block-4">
							<span class="u-inline aw-u-color-text-secondary">Quick start  /</span>
							<span class="u-inline aw-u-color-text-primary">Quick start start start start start start start start start start start start start start with Flutter</span>
						</a>
					</li>
					<li>
						<a href="/" class="aw-button is-text aw-u-trim-1 u-max-width-100-percent u-line-height-2 aw-u-padding-block-4">
							<span class="u-inline aw-u-color-text-secondary">Quick start  /</span>
							<span class="u-inline aw-u-color-text-primary">Quick start start start start start start start start start start start start start start with Flutter</span>
						</a>
					</li>
					<li>
						<a href="/" class="aw-button is-text aw-u-trim-1 u-max-width-100-percent u-line-height-2 aw-u-padding-block-4">
							<span class="u-inline aw-u-color-text-secondary">Quick start  /</span>
							<span class="u-inline aw-u-color-text-primary">Quick start start start start start start start start start start start start start start with Flutter</span>
						</a>
					</li>
					<li>
						<a href="/" class="aw-button is-text aw-u-trim-1 u-max-width-100-percent u-line-height-2 aw-u-padding-block-4">
							<span class="u-inline aw-u-color-text-secondary">Quick start  /</span>
							<span class="u-inline aw-u-color-text-primary">Quick start start start start start start start start start start start start start start with Flutter</span>
						</a>
					</li>
					<li>
						<a href="/" class="aw-button is-text aw-u-trim-1 u-max-width-100-percent u-line-height-2 aw-u-padding-block-4">
							<span class="u-inline aw-u-color-text-secondary">Quick start  /</span>
							<span class="u-inline aw-u-color-text-primary">Quick start start start start start start start start start start start start start start with Flutter</span>
						</a>
					</li>
					<li>
						<a href="/" class="aw-button is-text aw-u-trim-1 u-max-width-100-percent u-line-height-2 aw-u-padding-block-4">
							<span class="u-inline aw-u-color-text-secondary">Quick start  /</span>
							<span class="u-inline aw-u-color-text-primary">Quick start start start start start start start start start start start start start start with Flutter</span>
						</a>
					</li>
					<li>
						<a href="/" class="aw-button is-text aw-u-trim-1 u-max-width-100-percent u-line-height-2 aw-u-padding-block-4">
							<span class="u-inline aw-u-color-text-secondary">Quick start  /</span>
							<span class="u-inline aw-u-color-text-primary">Quick start start start start start start start start start start start start start start with Flutter</span>
						</a>
					</li>
					<li>
						<a href="/" class="aw-button is-text aw-u-trim-1 u-max-width-100-percent u-line-height-2 aw-u-padding-block-4">
							<span class="u-inline aw-u-color-text-secondary">Quick start  /</span>
							<span class="u-inline aw-u-color-text-primary">Quick start start start start start start start start start start start start start start with Flutter</span>
						</a>
					</li>
					<li>
						<a href="/" class="aw-button is-text aw-u-trim-1 u-max-width-100-percent u-line-height-2 aw-u-padding-block-4">
							<span class="u-inline aw-u-color-text-secondary">Quick start  /</span>
							<span class="u-inline aw-u-color-text-primary">Quick start start start start start start start start start start start start start start with Flutter</span>
						</a>
					</li>
					<li>
						<a href="/" class="aw-button is-text aw-u-trim-1 u-max-width-100-percent u-line-height-2 aw-u-padding-block-4">
							<span class="u-inline aw-u-color-text-secondary">Quick start  /</span>
							<span class="u-inline aw-u-color-text-primary">Quick start start start start start start start start start start start start start start with Flutter</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>



	<div class="aw-container">



		<FooterNav />
		<MainFooter />
	</div>
</Main>
