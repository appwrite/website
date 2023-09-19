<script lang="ts" context="module">
	export type NavLink = {
		label: string;
		href: string;
		icon?: string;
	};

	export type NavGroup = {
		label?: string;
		items: Array<NavLink>;
	};

	export type NavParent = {
		backlink: string;
		label: string;
		icon: string;
		href: string;
	};

	export type NavTree = Array<NavGroup | NavLink>;
</script>

<script lang="ts">
	import { page } from '$app/stores';

	export let expandable = false;
	export let navigation: NavTree;
	export let parent: NavParent | undefined = undefined;

	const handleMenuClick = () => {
		const gridHugeNavs = document.querySelector('.aw-grid-huge-navs');
		const referencesMenu = document.querySelector('.aw-references-menu');

		gridHugeNavs?.classList.toggle('is-open');
		referencesMenu?.classList.remove('is-open');
	};

	function isNavLink(item: NavLink | NavGroup): item is NavLink {
		return 'href' in item;
	}
</script>

<nav class="aw-side-nav" class:is-transparent={!expandable}>
	<div class="aw-side-nav-wrapper">
		<button class="aw-input-text aw-is-not-desktop">
			<span class="icon-search" />
			<span class="text">Search in docs</span>
		</button>
		<div class="aw-side-nav-scroll">
			{#if parent}
				<section style:padding-bottom="16px" style:border-bottom="1px solid #232325">
					<a class="aw-side-nav-button" href={parent.backlink}>
						<span class="icon-cheveron-left" aria-hidden="true" />
						<span class="aw-caption-400">Back</span>
					</a>
					<a
						class="aw-side-nav-button"
						href={parent.href}
						class:is-selected={$page.url?.pathname === parent.href}
					>
						<span class={parent.icon} aria-hidden="true" />
						<span class="aw-caption-500">{parent.label}</span>
					</a>
				</section>
			{/if}
			{#each navigation as navGroup}
				<section>
					{#if isNavLink(navGroup)}
						<a
							class="aw-side-nav-button"
							href={navGroup.href}
							class:is-selected={$page.url?.pathname === navGroup.href}
						>
							<span class={navGroup.icon} aria-hidden="true" />
							<span class="aw-caption-400">{navGroup.label}</span>
						</a>
					{:else}
						{#if navGroup.label}
							<h4 class="aw-side-nav-header aw-eyebrow">{navGroup.label}</h4>
						{/if}
						<ul>
							{#each navGroup.items as groupItem}
								<li>
									<a
										class="aw-side-nav-button"
										class:is-selected={$page.url?.pathname === groupItem.href}
										href={groupItem.href}
									>
										{#if groupItem.icon}
											<span class={groupItem.icon} aria-hidden="true" />
										{/if}
										<span class="aw-caption-400">{groupItem.label}</span>
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</section>
			{/each}
		</div>
		{#if expandable}
			<button
				on:click={handleMenuClick}
				class="aw-icon-button u-margin-inline-start-auto"
				aria-label="toggle nav"
			>
				<span class="icon-cheveron-right" aria-hidden="true" />
			</button>
		{/if}
		<div class="aw-side-nav-mobile-footer-buttons">
			<button class="aw-button u-width-full-line">
				<span class="text">Go to console</span>
			</button>

			<button class="aw-button is-text u-width-full-line">
				<span class="aw-icon-star" aria-hidden="true" />
				<span class="text">Star on GitHub</span>
				<span class="aw-inline-tag aw-sub-body-400">99.9k</span>
			</button>
		</div>
	</div>
</nav>
