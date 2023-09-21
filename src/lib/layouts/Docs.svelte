<script lang="ts" context="module">
	import { navigating } from '$app/stores';
	import { writable } from 'svelte/store';

	export type DocsLayoutVariant = 'default' | 'expanded' | 'two-side-navs';
	export type DocsLayoutState = {
		showReferences: boolean;
		showSidenav: boolean;
	};
	export const layoutState = writable<DocsLayoutState>({
		showReferences: false,
		showSidenav: false
	});
	export function toggleReferences() {
		layoutState.update((state) => ({
			showReferences: !state.showReferences,
			showSidenav: false
		}));
	}
	export function toggleSidenav() {
		layoutState.update((state) => ({
			showReferences: false,
			showSidenav: !state.showSidenav
		}));
	}
</script>

<script lang="ts">
	export let variant: DocsLayoutVariant = 'default';

	const variantClasses: Record<DocsLayoutVariant, string> = {
		default: 'aw-grid-side-nav',
		expanded: 'aw-grid-huge-navs',
		'two-side-navs': 'aw-grid-two-side-navs'
	};

	$: variantClass = variantClasses[variant];

	navigating.subscribe(() => {
		layoutState.set({
			showReferences: false,
			showSidenav: false
		});
	});
</script>

<div class="u-position-relative">
	<div
		class={variantClass}
		class:is-open={$layoutState.showSidenav}
		style:--container-size={variant === 'default' ? 'var(--container-size-large)' : undefined}
	>
		<section class="aw-mobile-header is-transparent">
			<div class="aw-mobile-header-start">
				<a href="/">
					<img
						class="aw-logo u-only-dark"
						src="/images/logos/appwrite.svg"
						alt="appwrite"
						width="130"
					/>
					<img
						class="aw-logo u-only-light"
						src="/images/logos/appwrite-light.svg"
						alt="appwrite"
						width="130"
					/>
				</a>
			</div>
			<div class="aw-mobile-header-end">
				<a href="https://cloud.appwrite.io/console" class="aw-button">
					<span class="aw-sub-body-500">Go to console</span>
				</a>
				<button on:click={toggleSidenav} class="aw-button is-text" aria-label="open navigation">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
					>
						<path d="M3 5.5H17" stroke="#E4E4E7" stroke-width="1.2" stroke-linecap="round" />
						<path d="M3 14.5H17" stroke="#E4E4E7" stroke-width="1.2" stroke-linecap="round" />
					</svg>
				</button>
			</div>
		</section>
		<header class="aw-main-header is-transparent" class:is-transparent={variant !== 'expanded'}>
			<div class="aw-main-header-wrapper">
				<div class="aw-main-header-row">
					<div class="aw-main-header-start u-stretch">
						<a href="/">
							<img
								class="aw-logo u-only-dark"
								src="/images/logos/appwrite.svg"
								alt="appwrite"
								width="130"
							/>
							<img
								class="aw-logo u-only-light"
								src="/images/logos/appwrite-light.svg"
								alt="appwrite"
								width="130"
							/>
						</a>
						<nav class="aw-main-header-nav">
							<ul class="aw-main-header-nav-list">
								<li class="aw-main-header-nav-item">
									<a class="aw-main-header-nav-link is-selected" href="/docs">Docs</a>
								</li>
							</ul>
						</nav>
						<div class="u-flex u-stretch aw-u-margin-inline-start-48">
							<button class="aw-input-button aw-u-flex-basis-400">
								<span class="icon-search" aria-hidden="true" />
								<span class="text">Search in docs</span>

								<div class="u-flex u-gap-4 u-margin-inline-start-auto">
									<span class="aw-kbd" aria-label="command">⌘</span>
									<span class="aw-kbd">k</span>
								</div>
							</button>
						</div>
					</div>
					<div class="aw-main-header-end">
						<div class="u-flex u-gap-8">
							<button class="aw-button is-text">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="16"
									viewBox="0 0 18 16"
									fill="none"
								>
									<path
										d="M8.55214 0.894436C8.73682 0.525615 9.26319 0.525617 9.44786 0.894438L11.3548 4.70276C11.4282 4.84944 11.5688 4.95086 11.7312 4.97425L15.9844 5.5871C16.3973 5.64659 16.5607 6.15521 16.2598 6.44413L13.1922 9.38955C13.0721 9.50495 13.0171 9.67255 13.0457 9.83669L13.7708 14.0043C13.8418 14.4126 13.4147 14.7256 13.0468 14.5349L9.23053 12.5564C9.08598 12.4815 8.91402 12.4815 8.76948 12.5564L4.95321 14.5349C4.58534 14.7256 4.1582 14.4126 4.22923 14.0044L4.95432 9.83669C4.98288 9.67255 4.92794 9.50495 4.80776 9.38955L1.74017 6.44413C1.43926 6.15521 1.60274 5.64659 2.01564 5.5871L6.26881 4.97425C6.43118 4.95086 6.5718 4.84944 6.64524 4.70276L8.55214 0.894436Z"
										stroke="white"
										stroke-opacity="0.48"
										stroke-width="1.20208"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<span class="text">Star on GitHub</span>
								<span class="aw-inline-tag aw-sub-body-400">99.9k</span>
							</button>
							<a href="https://cloud.appwrite.io/console" class="aw-button">
								<span class="aw-sub-body-500">Go to console</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
		<slot />
	</div>
</div>
