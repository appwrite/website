<script lang="ts">
	import { Tabs } from '$lib/UI';

	type Table = {
		title: string;
		rows: {
			title: string;
			free: string | true;
			pro: string | true;
			scale: string | true;
		}[];
	};

	const cols = ['free', 'pro', 'scale'] as const;

	const tables = [
		{
			title: 'Resources',
			rows: [
				{
					title: 'Bandwidth',
					free: '10GB',
					pro: '300GB',
					scale: '5TB'
				},
				{
					title: 'Additional bandwidth',
					free: '-',
					pro: '$40 per 100GB',
					scale: '$40 per 100GB'
				},
				{
					title: 'Storage',
					free: '2GB',
					pro: '150GB',
					scale: '500GB'
				},
				{
					title: 'Additional storage',
					free: '-',
					pro: '$3 per 100GB',
					scale: '$3 per 100GB'
				},
				{
					title: 'Compute',
					free: '750K executions',
					pro: '3.5M executions',
					scale: '10M executions'
				}
			]
		},
		{
			title: 'Platform',
			rows: [
				{
					title: 'Number of projects',
					free: 'Unlimited',
					pro: 'Unlimited',
					scale: 'Unlimited'
				},
				{
					title: 'Projects pausing',
					free: 'Never',
					pro: 'Never',
					scale: 'Never'
				},
				{
					title: 'Organization Members',
					free: '1',
					pro: '1',
					scale: 'Unlimited'
				},
				{
					title: 'Additional Organization members',
					free: '-',
					pro: '$15 per member',
					scale: '$0'
				},
				{
					title: 'Connected websites and apps',
					free: '3 per project',
					pro: 'Unlimited',
					scale: 'Unlimited'
				},
				{
					title: 'Custom domains',
					free: 'Unlimited',
					pro: 'Unlimited',
					scale: 'Unlimited'
				},
				{
					title: 'Appwrite branding on emails',
					free: true,
					pro: '-',
					scale: '-'
				},
				{
					title: 'Webhooks',
					free: '2 Per project',
					pro: 'Unlimited',
					scale: 'Unlimited'
				},
				{
					title: 'Logs retention',
					free: '1 hour',
					pro: '7 days',
					scale: '14 days'
				},
				{
					title: 'Budget caps and alerts',
					free: 'Not needed',
					pro: true,
					scale: true
				},
				{
					title: 'Additional organization member roles',
					free: 'Unlimited',
					pro: 'Unlimited',
					scale: 'Unlimited'
				}
			]
		},
		{
			title: 'Auth',
			rows: [
				{
					title: 'Users',
					free: '75,000 Monthly active users',
					pro: '200,000 Monthly active users',
					scale: '500,000 Monthly active users'
				},
				{
					title: 'Additional users (cost per user)',
					free: '-',
					pro: '$3 per 1,000 users',
					scale: '$3 per 1,000 users'
				},
				{
					title: 'Teams',
					free: '100 per project',
					pro: 'Unlimited',
					scale: 'Unlimited'
				},
				{
					title: 'SSO',
					free: '-',
					pro: '-',
					scale: 'Coming soon'
				}
			]
		},
		{
			title: 'Databases',
			rows: [
				{
					title: 'Databases',
					free: '1 per project',
					pro: 'Unlimited',
					scale: 'Unlimited'
				},
				{
					title: 'Documents',
					free: 'Unlimited',
					pro: 'Unlimited',
					scale: 'Unlimited'
				},
				{
					title: 'Reads & Writes',
					free: 'Unlimited',
					pro: 'Unlimited',
					scale: 'Unlimited'
				},
				{
					title: 'Dedicated databases',
					free: '-',
					pro: 'Coming soon',
					scale: 'Coming soon'
				}
			]
		},
		{
			title: 'Storage',
			rows: [
				{
					title: 'Buckets',
					free: '3 per project',
					pro: 'Unlimited',
					scale: 'Unlimited'
				},
				{
					title: 'File size limit',
					free: '50MB',
					pro: '5TB',
					scale: '5TB'
				},
				{
					title: 'Image transformations',
					free: 'Unlimited',
					pro: 'Unlimited',
					scale: 'Unlimited'
				}
			]
		},
		{
			title: 'Functions',
			rows: [
				{
					title: 'Functions',
					free: '5 per project',
					pro: 'Unlimited',
					scale: 'Unlimited'
				},
				{
					title: 'Executions',
					free: '750K',
					pro: '3.5M',
					scale: '10M'
				},
				{
					title: 'Additional executions',
					free: '-',
					pro: '$2 per 1 Million',
					scale: '$2 per 1 Million'
				}
			]
		},
		{
			title: 'Realtime',
			rows: [
				{
					title: 'Concurrent connections',
					free: '250',
					pro: '750',
					scale: '1500'
				},
				{
					title: 'Additional concurrent connections',
					free: '-',
					pro: '$5 per 1,000',
					scale: '$5 per 1,000'
				},
				{
					title: 'Messages',
					free: '3M',
					pro: 'Unlimited',
					scale: 'Unlimited'
				}
			]
		},
		{
			title: 'Support',
			rows: [
				{
					title: 'Community',
					free: true,
					pro: true,
					scale: true
				},
				{
					title: 'Email',
					free: '-',
					pro: true,
					scale: true
				},
				{
					title: 'Phone',
					free: '-',
					pro: '-',
					scale: true
				},
				{
					title: 'SLA',
					free: '-',
					pro: '-',
					scale: true
				}
			]
		}
	] satisfies Table[];

	let tab = 'free';
</script>

<div class="aw-big-padding-section-level-1 aw-white-section theme-light">
	<div class="aw-big-padding-section-level-2">
		<div class="u-position-relative">
			<article>
				<div class="aw-container">
					<header class="aw-u-text-align-center">
						<h3 class="aw-title aw-u-color-text-primary">Compare plans</h3>
						<p class="aw-main-body-500 u-margin-block-start-16">
							Discover our plans and find the one that fits your project’s needs.
						</p>
					</header>

					<div
						class="aw-u-padding-block-start-48 aw-u-padding-inline-8 aw-u-margin-inline-8-negative aw-u-filter-blur-8 /u-position-sticky /u-z-index-5"
						style="/--inset-block-start:2rem"
					>
						<Tabs bind:tab tabs={cols} let:TabsList>
							<TabsList
								class="aw-is-only-mobile aw-u-mobile-divider"
								stretch
								style="--p-secondary-tabs-bg-color-default: var(--aw-color-neutral-0);
								--p-secondary-tabs-text-color-selected: var(--aw-color-accent);
								--p-secondary-tabs-bg-color-selected: var(--aw-color-accent) / 0.08;"
								let:tab
							>
								<span class="aw-main-body-500 u-capitalize">{tab}</span>
							</TabsList>
						</Tabs>
					</div>

					<div
						class="aw-is-not-mobile aw-u-grid-auto-column-1fr is-with-footer-border u-gap-32 aw-u-padding-inline-8 aw-u-margin-inline-8-negative aw-u-padding-block-start-80
                     aw-u-filter-blur-8 u-position-sticky u-z-index-5"
						style="--inset-block-start:1rem"
					>
						<div class="aw-label aw-u-color-text-primary aw-u-cross-child-center" style="opacity:0">
							Compare plans
						</div>
						<div class="aw-mini-card">
							<div class="u-flex u-cross-center u-gap-16 u-flex-wrap u-main-space-between">
								<h4 class="aw-label aw-u-color-text-primary">Free</h4>
								<button class="aw-button is-secondary">
									<span class="aw-sub-body-500">Start building</span>
								</button>
							</div>
						</div>
						<div class="aw-mini-card">
							<div class="u-flex u-cross-center u-gap-16 u-flex-wrap u-main-space-between">
								<h4 class="aw-label aw-u-color-text-primary">Pro</h4>
								<button class="aw-button">
									<span class="aw-sub-body-500">Go Pro</span>
								</button>
							</div>
						</div>
						<div class="aw-mini-card">
							<div class="u-flex u-cross-center u-gap-16 u-flex-wrap u-main-space-between">
								<h4 class="aw-label aw-u-color-text-primary">Scale</h4>
								<button class="aw-button is-secondary">
									<span class="aw-sub-body-500">Get Scale</span>
								</button>
							</div>
						</div>
					</div>
					<div class="aw-u-stretch-sep-full-screen" />

					{#each tables as table}
						<table class="aw-compare-table is-open-in-mobile aw-sub-body-400">
							<caption class="aw-compare-table-caption aw-description aw-u-color-text-primary">
								<button class="aw-compare-ta ble-caption-button">
									<span>{table.title}</span>
									<span class="icon-cheveron-down aw-is-only-mobile" aria-hidden="true" />
								</button>
							</caption>
							<tbody class="aw-compare-table-body">
								{#each table.rows as row}
									<tr>
										<th class="aw-sub-body-500">{row.title}</th>
										{#each cols as col, index}
											<td class="level-{index}" class:is-selected={col === tab}>
												{#if typeof row[col] === 'string'}
													{row[col]}
												{:else}
													<img src="/images/icons/gradients/v-icon.svg" alt="yes" />
												{/if}
											</td>
										{/each}
									</tr>
								{/each}
							</tbody>
						</table>
					{/each}
				</div>
			</article>
		</div>
	</div>
</div>
