<script lang="ts">
	import { Main } from '$lib/layouts';

	import FooterNav from '../../lib/components/FooterNav.svelte';
	import MainFooter from '../../lib/components/MainFooter.svelte';
</script>

<Main>
	<div class="u-position-fixed u-inset-0 u-z-index-20 u-flex u-main-center u-cross-center"
		 style="background:hsl(var(--aw-color-black) / 0.3); backdrop-filter:blur(15px);">

		<div class="aw-input-text-search-wrapper aw-u-max-width-480">
			<span class="icon-search" aria-hidden="true" />
			<input class="aw-input-text" type="search" placeholder="Search">
			<div class="aw-card is-normal aw-u-max-height-300 u-overflow-y-auto"
				 style="--card-padding-mobile:1rem; border-radius:0 0 0.5rem 0.5rem; margin-block-start:-0.5rem">
				<h6 class="aw-eyebrow">Recommended</h6>
				<ul class="u-margin-block-start-8">
					<li>
						<button class="aw-button is-text aw-u-trim-1 u-max-width-100-percent">
							<span class="u-inline aw-u-color-text-secondary">Quick start  /</span>
							<span class="u-inline aw-u-color-text-primary">Quick start start start start start start start with Flutter</span>
						</button>
					</li>
					<li>
						<button class="aw-button is-text">
							<span class="aw-u-color-text-secondary">Quick start  /</span>
							<span class="aw-u-color-text-primary">Quick start with Flutter</span>
						</button>
					</li>
					<li>
						<button class="aw-button is-text">
							<span class="aw-u-color-text-secondary">Quick start  /</span>
							<span class="aw-u-color-text-primary">Quick start with Flutter</span>
						</button>
					</li>
					<li>
						<button class="aw-button is-text">
							<span class="aw-u-color-text-secondary">Quick start  /</span>
							<span class="aw-u-color-text-primary">Quick start with Flutter</span>
						</button>
					</li>
					<li>
						<button class="aw-button is-text">
							<span class="aw-u-color-text-secondary">Quick start  /</span>
							<span class="aw-u-color-text-primary">Quick start with Flutter</span>
						</button>
					</li>
					<li>
						<button class="aw-button is-text">
							<span class="aw-u-color-text-secondary">Quick start  /</span>
							<span class="aw-u-color-text-primary">Quick start with Flutter</span>
						</button>
					</li>
					<li>
						<button class="aw-button is-text">
							<span class="aw-u-color-text-secondary">Quick start  /</span>
							<span class="aw-u-color-text-primary">Quick start with Flutter</span>
						</button>
					</li>
					<li>
						<button class="aw-button is-text">
							<span class="aw-u-color-text-secondary">Quick start  /</span>
							<span class="aw-u-color-text-primary">Quick start with Flutter</span>
						</button>
					</li>
					<li>
						<button class="aw-button is-text">
							<span class="aw-u-color-text-secondary">Quick start  /</span>
							<span class="aw-u-color-text-primary">Quick start with Flutter</span>
						</button>
					</li>
					<li>
						<button class="aw-button is-text">
							<span class="aw-u-color-text-secondary">Quick start  /</span>
							<span class="aw-u-color-text-primary">Quick start with Flutter</span>
						</button>
					</li>
					<li>
						<button class="aw-button is-text">
							<span class="aw-u-color-text-secondary">Quick start  /</span>
							<span class="aw-u-color-text-primary">Quick start with Flutter</span>
						</button>
					</li>
					<li>
						<button class="aw-button is-text">
							<span class="aw-u-color-text-secondary">Quick start  /</span>
							<span class="aw-u-color-text-primary">Quick start with Flutter</span>
						</button>
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
