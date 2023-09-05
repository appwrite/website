<script lang="ts">
	import { browser } from '$app/environment';
	import { addEventListener } from '@melt-ui/svelte/internal/helpers';
	import { onMount } from 'svelte';

	let theme: 'light' | 'dark' | null = 'dark';

	function setupThemeObserver() {
		const handleVisibility = () => {
			theme = getVisibleTheme();
		};

		const observer = new MutationObserver(handleVisibility);
		observer.observe(document.body, { childList: true, subtree: true });

		const callbacks = [
			addEventListener(window, 'scroll', handleVisibility),
			addEventListener(window, 'resize', handleVisibility)
		];

		return () => {
			observer.disconnect();
			callbacks.forEach((callback) => callback());
		};
	}

	function isInViewport(element: Element): boolean {
		const rect = element.getBoundingClientRect();
		const windowWidth = window.innerWidth || document.documentElement.clientWidth;
		const vertInView = rect.top <= 32 && rect.bottom >= 32;
		const horInView = rect.left <= windowWidth && rect.right >= 0;

		return vertInView && horInView;
	}

	function getVisibleTheme() {
		const themes = Array.from(document.querySelectorAll('.theme-dark, .theme-light')).filter(
			(element) => {
				const { classList } = element;
				if (
					classList.contains('aw-mobile-header') ||
					classList.contains('aw-main-header') ||
					element === document.body
				) {
					return false;
				}
				return true;
			}
		);

		for (const theme of themes) {
			if (isInViewport(theme)) {
				return theme.classList.contains('theme-light') ? 'light' : 'dark';
			}
		}

		return 'dark';
	}

	onMount(() => {
		return setupThemeObserver();
	});
</script>

<div id="app" class="u-position-relative">
	<section class="aw-mobile-header theme-{theme}" class:is-transparent={browser}>
		<div class="aw-mobile-header-start">
			<a href="/">
				<img
					class="aw-logo aw-u-only-dark"
					src="/images/logos/appwrite.svg"
					alt="appwrite"
					width="130"
				/>
				<img
					class="aw-logo aw-u-only-light"
					src="/images/logos/appwrite-light.svg"
					alt="appwrite"
					width="130"
				/>
			</a>
		</div>
		<div class="aw-mobile-header-end">
			<button class="aw-button">
				<span class="text">Get Started</span>
			</button>
			<button class="aw-button is-text" aria-label="open navigation">
				<i class="aw-icon-hamburger-menu" />
			</button>
		</div>
	</section>
	<header class="aw-main-header theme-{theme}" class:is-transparent={browser}>
		<div class="aw-container" style="--container-size:103rem">
			<div class="aw-main-header-wrapper">
				<div class="aw-main-header-row">
					<div class="aw-main-header-start">
						<a href="/">
							<img
								class="aw-logo aw-u-only-dark"
								src="/images/logos/appwrite.svg"
								alt="appwrite"
								width="130"
							/>
							<img
								class="aw-logo aw-u-only-light"
								src="/images/logos/appwrite-light.svg"
								alt="appwrite"
								width="130"
							/>
						</a>
						<nav class="aw-main-header-nav">
							<ul class="aw-main-header-nav-list">
								<li class="aw-main-header-nav-item">
									<a class="aw-main-header-nav-link" href=".">Community</a>
								</li>
								<li class="aw-main-header-nav-item">
									<a class="aw-main-header-nav-link" href="/docs">Docs</a>
								</li>
								<li class="aw-main-header-nav-item">
									<a class="aw-main-header-nav-link" href=".">Blog</a>
								</li>
								<li class="aw-main-header-nav-item">
									<a class="aw-main-header-nav-link" href="/pricing">Pricing</a>
								</li>
								<li class="aw-main-header-nav-item">
									<a class="aw-main-header-nav-link" href=".">Roadmap</a>
								</li>
							</ul>
						</nav>
					</div>
					<div class="aw-main-header-end">
						<div class="u-flex u-gap-8">
							<button class="aw-button is-text">
								<i class="aw-icon-star" />
								<span class="text">Star on GitHub</span>
								<span class="aw-inline-tag aw-sub-body-400">99.9k</span>
							</button>
							<button class="aw-button is-secondary">Sign Up</button>
							<button class="aw-button">
								<span class="text">Get Started</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	<main class="aw-main-section">
		<slot />
	</main>
</div>
