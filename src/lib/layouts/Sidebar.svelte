<script lang="ts" context="module">
	export type NavLink = {
		label: string;
		href: string;
		icon?: string;
		isParent?: boolean;
	};

	export type NavGroup = {
		label?: string;
		items: Array<NavLink>;
	};

	export type NavParent = {
		label: string;
		href: string;
	};

	export type NavTree = Array<NavGroup | NavLink>;
</script>

<script lang="ts">
	import Tooltip from '$lib/components/Tooltip.svelte';
	import { layoutState, toggleSidenav } from './Docs.svelte';
	import SidebarNavButton from './SidebarNavButton.svelte';

	export let expandable = false;
	export let navigation: NavTree;
	export let parent: NavParent | undefined = undefined;

	function isNavLink(item: NavLink | NavGroup): item is NavLink {
		return 'href' in item;
	}
</script>

<nav class="aw-side-nav">
	<div class="aw-side-nav-wrapper">
		<button
			class="aw-input-text aw-is-not-desktop"
			on:click={() => ($layoutState.showSearch = true)}
		>
			<span class="aw-icon-search" />
			<span class="text">Search in Docs</span>
		</button>
		<div class="aw-side-nav-scroll">
			{#if parent}
				<section class="aw-side-nav-wrapper-parent">
					<a href={parent.href} aria-label="go back">
						<span class="icon-cheveron-left" aria-hidden="true" />
					</a>
					<span class="aw-side-nav-wrapper-parent-title aw-eyebrow">{parent.label}</span>
				</section>
			{/if}
			{#each navigation as navGroup}
				<section>
					{#if isNavLink(navGroup)}
						{#if expandable && !$layoutState.showSidenav}
							<Tooltip placement="right">
								<SidebarNavButton groupItem={navGroup} />
								<svelte:fragment slot="tooltip">{navGroup.label}</svelte:fragment>
							</Tooltip>
						{:else}
							<SidebarNavButton groupItem={navGroup} />
						{/if}
					{:else}
						{#if navGroup.label}
							<h4 class="aw-side-nav-header aw-eyebrow u-un-break-text">{navGroup.label}</h4>
						{/if}
						<ul>
							{#each navGroup.items as groupItem}
								<li>
									{#if expandable && !$layoutState.showSidenav}
										<Tooltip placement="right">
											<SidebarNavButton {groupItem} />
											<svelte:fragment slot="tooltip">{groupItem.label}</svelte:fragment>
										</Tooltip>
									{:else}
										<SidebarNavButton {groupItem} />
									{/if}
								</li>
							{/each}
						</ul>
					{/if}
				</section>
			{/each}
		</div>
		{#if expandable}
			<button
				on:click={toggleSidenav}
				class="aw-icon-button u-margin-inline-start-auto"
				style:margin-bottom="1rem"
				aria-label="toggle nav"
			>
				<span class="icon-cheveron-right" aria-hidden="true" />
			</button>
		{/if}
		<div class="aw-side-nav-mobile-footer-buttons">
			<button class="aw-button u-width-full-line">
				<span class="text">Go to Console</span>
			</button>

			<a
				href="https://github.com/appwrite/appwrite/stargazers"
				target="_blank"
				rel="noopener noreferrer"
				class="aw-button is-text u-width-full-line"
			>
				<span class="aw-icon-star" aria-hidden="true" />
				<span class="text">Star on GitHub</span>
				<span class="aw-inline-tag aw-sub-body-400">35.2K</span>
			</a>
		</div>
	</div>
</nav>
