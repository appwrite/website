<script lang="ts">
	import type { NavLink } from '$lib/layouts/Main.svelte';

	export let open = false;
	export let links: NavLink[];
</script>

<svelte:window on:resize={() => (open = false)} />

<nav class="aw-side-nav aw-is-only-mobile" class:u-hide={!open}>
	<div class="aw-side-nav-wrapper aw-u-padding-inline-16">
		<div class="u-flex items-center u-gap-8">
			<button class="aw-button is-secondary u-width-full-line">Sign Up</button>

			<button class="aw-button u-width-full-line">Get Started</button>
		</div>
		<div class="aw-side-nav-scroll">
			<section>
				<ul>
					{#each links as { href, label }}
						<li>
							<a class="aw-side-nav-button" {href}>
								<span class="aw-caption-400">{label}</span>
							</a>
						</li>
					{/each}
				</ul>
			</section>
		</div>
		<div class="aw-side-nav-mobile-footer-buttons">
			<button class="aw-button is-text u-width-full-line">
				<span class="aw-icon-star" aria-hidden="true" />
				<span class="text">Star on GitHub</span>
				<span class="aw-inline-tag aw-sub-body-400">99.9k</span>
			</button>
		</div>
	</div>
</nav>
