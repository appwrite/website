<script lang="ts">
	import { createTreeView, melt } from '@melt-ui/svelte';

	export let expandable = false;

	const handleMenuClick = () => {
		const gridHugeNavs = document.querySelector('.aw-grid-huge-navs');
		const referencesMenu = document.querySelector('.aw-references-menu');

		gridHugeNavs?.classList.toggle('is-open');
		referencesMenu?.classList.remove('is-open');
	};

	type NavLink = {
		label: string;
		href: string;
		icon?: string;
	};

	type NavGroup = {
		label?: string;
		href?: string;
		icon?: string;
		items: Array<NavLink | NavGroup>;
	};

	function isNavLink(item: NavLink | NavGroup): item is NavLink {
		return !('items' in item);
	}

	type NavTree = Array<NavGroup>;

	const navTree: NavTree = [
		{
			items: [
				{
					label: 'Quick Start',
					href: '/docs/quick-start',
					icon: 'icon-play'
				},
				{
					label: 'Tutorials',
					href: '/docs/tutorials',
					icon: 'icon-book-open'
				},
				{
					label: 'SDKs',
					href: '#',
					icon: 'icon-cog'
				},
				{
					label: 'Command Line',
					href: '#',
					icon: 'icon-terminal'
				},
				{
					label: 'References',
					href: '/docs/reference',
					icon: 'icon-document'
				}
			]
		},
		{
			label: 'Products',
			href: '/docs/products',
			items: [
				{
					label: 'Auth',
					href: '#',
					icon: 'icon-user-group',

					items: [
						{
							label: 'Inner item',
							href: '#'
						}
					]
				},
				{
					label: 'Databases',
					href: '#',
					icon: 'icon-database',
					items: [
						{
							label: 'Inner item',
							href: '#'
						}
					]
				},
				{
					label: 'Functions',
					href: '#',
					icon: 'icon-lightning-bolt',
					items: [
						{
							label: 'Inner item',
							href: '#'
						}
					]
				},
				{
					label: 'Storage',
					href: '#',
					icon: 'icon-folder',
					items: [
						{
							label: 'Inner item',
							href: '#'
						}
					]
				}
			]
		},
		{
			label: 'APIS',
			href: '#',
			items: [
				{
					label: 'Realtime',
					href: '#',
					icon: 'icon-clock'
				},
				{
					label: 'REST',
					href: '#',
					icon: 'icon-play'
				},
				{
					label: 'GraphQL',
					href: '#',
					icon: 'icon-play'
				}
			]
		},
		{
			label: 'Advanced',
			href: '#',
			items: [
				{
					label: 'Integration',
					href: '#',
					icon: 'icon-puzzle'
				},
				{
					label: 'Platform',
					href: '#',
					icon: 'icon-play'
				},
				{
					label: 'Migrations',
					href: '#',
					icon: 'icon-refresh'
				},
				{
					label: 'Self-hosting',
					href: '#',
					icon: 'icon-server'
				}
			]
		}
	];

	const {
		elements: { tree, group, item }
	} = createTreeView({
		forceVisible: false
	});
</script>

<nav class="aw-side-nav" class:is-transparent={!expandable} use:melt={$tree}>
	<div class="aw-side-nav-wrapper">
		<button class="aw-input-text aw-is-not-desktop">
			<span class="icon-search" />
			<span class="text">Search in docs</span>
		</button>
		<div class="aw-side-nav-scroll">
			{#each navTree as navGroup}
				<section>
					{#if navGroup.label}
						<h4 class="aw-side-nav-header aw-eyebrow">{navGroup.label}</h4>
					{/if}
					<ul>
						{#each navGroup.items as groupItem}
							{@const id = `${navGroup.label}-${groupItem?.label}`}
							<li>
								{#if isNavLink(groupItem)}
									<a class="aw-side-nav-button" href={groupItem.href} use:melt={$item({ id })}>
										<span class={groupItem.icon} aria-hidden="true" />
										<span class="aw-caption-400">{groupItem.label}</span>
									</a>
								{:else}
									<li>
										<a
											class="aw-side-nav-button"
											use:melt={$item({ id, hasChildren: true })}
											href={groupItem.href}
										>
											<span class={groupItem.icon} aria-hidden="true" />
											<span class="aw-caption-400">{groupItem.label}</span>
											<span
												class="icon-cheveron-down u-margin-inline-start-auto"
												aria-hidden="true"
											/>
										</a>
										<ul class="aw-side-nav-inner" use:melt={$group({ id })}>
											{#each groupItem.items as subItem}
												{@const subId = `${navGroup.label}-${groupItem?.label}-${subItem?.label}}`}
												<li>
													<a
														class="aw-side-nav-button"
														use:melt={$item({ id: subId })}
														href={subItem.href}
													>
														<span class="aw-icon-holder" />
														<span class="aw-caption-400">{subItem.label}</span>
													</a>
												</li>
											{/each}
										</ul>
									</li>
								{/if}
							</li>
						{/each}
					</ul>
				</section>
			{/each}
			<!-- <section>
				<h4 class="aw-side-nav-header aw-eyebrow">Products</h4>
				<ul>
					<li>
						<button class="aw-side-nav-button is-selected">
							<span class="icon-user-group" aria-hidden="true" />
							<span class="aw-caption-400">Auth</span>
							<span class="icon-cheveron-down u-margin-inline-start-auto" aria-hidden="true" />
						</button>
						<ul class="aw-side-nav-inner">
							<li>
								<button class="aw-side-nav-button is-selected">
									<span class="aw-icon-holder" />
									<span class="aw-caption-400">Inner item</span>
								</button>
							</li>
							<li>
								<button class="aw-side-nav-button">
									<span class="aw-icon-holder" />
									<span class="aw-caption-400">Inner item</span>
								</button>
							</li>
						</ul>
					</li>
					<li>
						<button class="aw-side-nav-button">
							<span class="icon-database" aria-hidden="true" />
							<span class="aw-caption-400">Databases</span>
							<span class="icon-cheveron-down u-margin-inline-start-auto" aria-hidden="true" />
						</button>
					</li>
					<li>
						<button class="aw-side-nav-button">
							<span class="icon-lightning-bolt" aria-hidden="true" />
							<span class="aw-caption-400">Functions</span>
							<span class="icon-cheveron-down u-margin-inline-start-auto" aria-hidden="true" />
						</button>
					</li>
					<li>
						<button class="aw-side-nav-button">
							<span class="icon-folder" aria-hidden="true" />
							<span class="aw-caption-400">Storage</span>
							<span class="icon-cheveron-down u-margin-inline-start-auto" aria-hidden="true" />
						</button>
					</li>
				</ul>
			</section>
			<section>
				<h4 class="aw-side-nav-header aw-eyebrow">APIS</h4>
				<ul>
					<li>
						<a class="aw-side-nav-button" href=".">
							<span class="icon-clock" aria-hidden="true" />
							<span class="aw-caption-400">Realtime</span>
						</a>
					</li>
					<li>
						<a class="aw-side-nav-button" href=".">
							<span class="icon-play" aria-hidden="true" />
							<span class="aw-caption-400">REST</span>
						</a>
					</li>
					<li>
						<a class="aw-side-nav-button" href=".">
							<span class="icon-play" aria-hidden="true" />
							<span class="aw-caption-400">GraphQL</span>
						</a>
					</li>
				</ul>
			</section>
			<section>
				<h4 class="aw-side-nav-header aw-eyebrow">Advanced</h4>
				<ul>
					<li>
						<button class="aw-side-nav-button">
							<span class="icon-puzzle" aria-hidden="true" />
							<span class="aw-caption-400">Integration</span>
							<span class="icon-cheveron-down u-margin-inline-start-auto" aria-hidden="true" />
						</button>
					</li>
					<li>
						<button class="aw-side-nav-button">
							<span class="icon-play" aria-hidden="true" />
							<span class="aw-caption-400">Platform</span>
							<span class="icon-cheveron-down u-margin-inline-start-auto" aria-hidden="true" />
						</button>
					</li>
					<li>
						<button class="aw-side-nav-button">
							<span class="icon-refresh" aria-hidden="true" />
							<span class="aw-caption-400">Migrations</span>
							<span class="icon-cheveron-down u-margin-inline-start-auto" aria-hidden="true" />
						</button>
					</li>
				</ul>
			</section> -->
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
