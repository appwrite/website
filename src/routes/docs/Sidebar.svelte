<script lang="ts">
	import { page } from '$app/stores';
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
					label: 'Home',
					href: '/docs',
					icon: 'icon-home'
				},
				{
					label: 'Quick Start',
					href: '/docs/quick-starts',
					icon: 'icon-play'
				},
				{
					label: 'Tutorials',
					href: '/docs/tutorials',
					icon: 'icon-book-open'
				},
				{
					label: 'SDKs',
					href: '/docs/sdks',
					icon: 'icon-cog'
				},
				{
					label: 'References',
					href: '/docs/reference',
					icon: 'icon-document',
					items: [
						{
							label: 'Account',
							href: '/docs/reference/cloud/client-web/account'
						},
						{
							label: 'Users',
							href: '/docs/reference/cloud/client-web/users'
						},
						{
							label: 'Teams',
							href: '/docs/reference/cloud/client-web/teams'
						},
						{
							label: 'Databases',
							href: '/docs/reference/cloud/client-web/databases'
						},
						{
							label: 'Storage',
							href: '/docs/reference/cloud/client-web/storage'
						},
						{
							label: 'Functions',
							href: '/docs/reference/cloud/client-web/functions'
						},
						{
							label: 'Localization',
							href: '/docs/reference/cloud/client-web/locale'
						},
						{
							label: 'Avatars',
							href: '/docs/reference/1.3.x/client-web/avatars'
						}
					]
				}
			]
		},
		{
			label: 'Products',
			href: '/docs/products',
			items: [
				{
					label: 'Auth',
					href: '/docs/products/auth',
					icon: 'icon-user-group',

					items: [
						{
							label: 'Quick start',
							href: '/docs/products/auth/quick-start'
						},
						{
							label: 'Email and password',
							href: '/docs/products/auth/email-password'
						},
						{
							label: 'Phone (SMS)',
							href: '/docs/products/auth/phone-sms'
						},
						{
							label: 'Magic URL',
							href: '/docs/products/auth/magic-url'
						},
						{
							label: 'OAuth 2',
							href: '/docs/products/auth/oauth2'
						},
						{
							label: 'Anonymous',
							href: '/docs/products/auth/anonymous'
						},
						{
							label: 'User management',
							href: '/docs/products/auth/user-management'
						},
						{
							label: 'Server integrations',
							href: '/docs/products/auth/server-integrations'
						},
						{
							label: 'Security',
							href: '/docs/products/auth/security'
						}
					]
				},
				{
					label: 'Databases',
					href: '/docs/products/databases',
					icon: 'icon-database',
					items: [
						{
							label: 'Quick start',
							href: '/docs/products/databases/quick-start'
						},
						{
							label: 'Databases',
							href: '/docs/products/databases/databases'
						},
						{
							label: 'Collections',
							href: '/docs/products/databases/collections'
						},
						{
							label: 'Documents',
							href: '/docs/products/databases/documents'
						},
						{
							label: 'Queries',
							href: '/docs/products/databases/queries'
						},
						{
							label: 'Order',
							href: '/docs/products/databases/order'
						},
						{
							label: 'Pagination',
							href: '/docs/products/databases/pagination'
						},
						{
							label: 'Permissions',
							href: '/docs/products/databases/permissions'
						},
						{
							label: 'Relationships',
							href: '/docs/products/databases/relationships'
						},
					]
				},
				{
					label: 'Functions',
					href: '/docs/products/functions',
					icon: 'icon-lightning-bolt',
					items: [
						{
							label: 'Quick start',
							href: '/docs/products/functions/quick-start'
						},
						{
							label: 'Development',
							href: '/docs/products/functions/develop'
						},
						{
							label: 'Deployment',
							href: '/docs/products/functions/deploy'
						},
						{
							label: 'Execution',
							href: '/docs/products/functions/execute'
						},
						{
							label: 'Runtimes',
							href: '/docs/products/functions/runtimes'
						},
						{
							label: 'Examples',
							href: '/docs/products/functions/examples'
						},

					]
				},
				{
					label: 'Storage',
					href: '/docs/products/storage',
					icon: 'icon-folder',
					items: [
						{
							label: 'Quick start',
							href: '/docs/products/storage/quick-start'
						},
						{
							label: 'Buckets',
							href: '/docs/products/storage/buckets'
						},
						{
							label: 'Upload and download',
							href: '/docs/products/storage/upload-download'
						},
						{
							label: 'Images',
							href: '/docs/products/storage/images'
						},
						{
							label: 'Permissions',
							href: '/docs/products/storage/permissions'
						},
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
					href: '/docs/apis/realtime',
					icon: 'icon-clock'
				},
				{
					label: 'REST',
					href: '/docs/apis/rest',
					icon: 'icon-play'
				},
				{
					label: 'GraphQL',
					href: '/docs/apis/graphql',
					icon: 'icon-play'
				}
			]
		},
		{
			label: 'Tooling',
			href: '#',
			items: [
				{
					label: 'Command Line',
					href: '#',
					icon: 'icon-terminal'
				},
				{
					label: 'Assistant',
					href: '/docs/tooling/assistant',
					icon: 'icon-magic-wand'
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
					href: '/docs/platform',
					icon: 'icon-play',
					items: [
						{
							label: 'API keys',
							href: '/docs/platform/api-keys'
						},
						{
							label: 'Events',
							href: '/docs/platform/events'
						},
						{
							label: 'Custom domains',
							href: '/docs/platform/custom-domains'
						},
						{
							label: 'Response codes',
							href: '/docs/platform/response-code'
						},
						{
							label: 'Permissions',
							href: '/docs/platform/permissions'
						}
					]
				},
				{
					label: 'Migrations',
					href: '/docs/products/migrations',
					icon: 'icon-refresh',
					items: [
						{
							label: 'From Firebase',
							href: '/docs/products/migrations/firebase'
						},
						{
							label: 'From Supabase',
							href: '/docs/products/migrations/supabase'
						},
						{
							label: 'From Nhost',
							href: '/docs/products/migrations/nhost'
						},
						{
							label: 'From Cloud',
							href: '/docs/products/migrations/cloud'
						},
						{
							label: 'From self-hosted',
							href: '/docs/products/migrations/self-hosted'
						},

					]
				},
				{
					label: 'Self-hosting',
					href: '/docs/self-hosting',
					icon: 'icon-server',
					items: [
						{
							label: 'Install',
							href: '/docs/self-hosting/install'
						},
						{
							label: 'Email delivery',
							href: '/docs/self-hosting/email'
						},
						{
							label: 'SMS delivery',
							href: '/docs/self-hosting/sms'
						},
						{
							label: 'Functions',
							href: '/docs/self-hosting/functions'
						},
						{
							label: 'Storage',
							href: '/docs/self-hosting/storage'
						},
						{
							label: 'TLS Certificates',
							href: '/docs/self-hosting/tls-certificates'
						},
						{
							label: 'Update',
							href: '/docs/self-hosting/update'
						},
						{
							label: 'Debug',
							href: '/docs/self-hosting/debug'
						},
						{
							label: 'Production',
							href: '/docs/self-hosting/production'
						},
					]
				}
			]
		}
	];

	const getGroupItemId = (group: NavGroup, item: NavLink | NavGroup) => {
		return `${group.label}/${item.label}`.toLowerCase().replace(/\s/g, '-');
	};

	const currentGroup = $page.url.pathname.split('/')[2] ?? undefined;
	const currentItem = $page.url.pathname.split('/')[3] ?? undefined;
	const currentId =
		currentGroup && currentItem
			? getGroupItemId({ label: currentGroup, items: [] }, { label: currentItem, href: '' })
			: undefined;

	const {
		elements: { tree, group, item }
	} = createTreeView({
		defaultExpanded: currentId ? [currentId] : [],
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
							{@const id = getGroupItemId(navGroup, groupItem)}
							<li>
								{#if isNavLink(groupItem)}
									<a
										class="aw-side-nav-button"
										class:is-selected={$page.url?.pathname === groupItem.href}
										href={groupItem.href}
										use:melt={$item({ id })}
									>
										<span class={groupItem.icon} aria-hidden="true" />
										<span class="aw-caption-400">{groupItem.label}</span>
									</a>
								{:else}
									<li>
										<a
											class="aw-side-nav-button"
											use:melt={$item({ id, hasChildren: true })}
											href={groupItem.href}
											class:is-selected={groupItem.href &&
												$page.url?.pathname.includes(groupItem.href)}
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
														class:is-selected={$page.url?.pathname === subItem.href}
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
								<a href="/docs/product/auth" class="aw-side-nav-button" data-sveltekit-noscroll>
									<span class="aw-icon-holder" />
									<span class="aw-caption-400">Getting started</span>
								</a>
							</li>
							<li>
								<a href="/docs/product/auth/email-password" class="aw-side-nav-button" data-sveltekit-noscroll>
									<span class="aw-icon-holder" />
									<span class="aw-caption-400">Email and Password</span>
								</a>
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
						<a class="aw-side-nav-button" href="#">
							<span class="icon-clock" aria-hidden="true" />
							<span class="aw-caption-400">Realtime</span>
						</a>
					</li>
					<li>
						<a class="aw-side-nav-button" href="#">
							<span class="icon-play" aria-hidden="true" />
							<span class="aw-caption-400">REST</span>
						</a>
					</li>
					<li>
						<a class="aw-side-nav-button" href="#">
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
