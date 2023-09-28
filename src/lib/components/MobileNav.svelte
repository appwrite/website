<script lang="ts">
	import type { NavLink } from '$lib/layouts/Main.svelte';

	export let open = false;
	export let links: NavLink[];
</script>

<svelte:window on:resize={() => (open = false)} />

<nav class="aw-side-nav aw-is-not-desktop" class:u-hide={!open}>
	<div class="aw-side-nav-wrapper aw-u-padding-inline-16">
		<div class="u-flex items-center u-gap-8">
			<a href="https://cloud.appwrite.io/register" class="aw-button is-secondary u-width-full-line">Sign up</a>

			<a href="https://cloud.appwrite.io" class="aw-button u-width-full-line">Get started</a>
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
			<a href="https://github.com/appwrite/appwrite/stargazers" target="_blank" class="aw-button is-text u-width-full-line">
				<span class="aw-icon-star" aria-hidden="true" />
				<span class="text">Star on GitHub</span>
				<span class="aw-inline-tag aw-sub-body-400">33.2K</span>
			</a>
		</div>
	</div>
</nav>
