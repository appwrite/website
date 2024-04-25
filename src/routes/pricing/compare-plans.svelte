<script lang="ts">
    import { browser } from '$app/environment';
    import { Tabs } from '$lib/UI';
    import { visible } from '$lib/actions/visible';
    import { isHeaderHidden } from '$lib/layouts/Main.svelte';
    import { getScrollDir } from '$lib/utils/getScrollDir';
    import { isVisible } from '$lib/utils/isVisible';
    import { createAccordion, melt } from '@melt-ui/svelte';
    import { writable } from 'svelte/store';
    import { fly } from 'svelte/transition';

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
                    title: 'No Appwrite branding on emails',
                    free: '-',
                    pro: true,
                    scale: true
                },
                {
                    title: 'Custom SMTP',
                    free: '-',
                    pro: true,
                    scale: true
                },
                {
                    title: 'Webhooks',
                    free: '2 per project',
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
                    free: '-',
                    pro: '-',
                    scale: 'Coming Soon'
                }
            ]
        },
        {
            title: 'Auth',
            rows: [
                {
                    title: 'Users',
                    free: '75,000 monthly active users',
                    pro: '200,000 monthly active users',
                    scale: '500,000 monthly active users'
                },
                {
                    title: 'Additional users',
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
                    // pro: 'Start trial',
                    pro: 'Start building',
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
                    pro: '5GB',
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
                    pro: '500',
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

    const {
        elements: { root, trigger, content, heading, item },
        states: { value }
    } = createAccordion({
        defaultValue: ['Resources'],
        multiple: true,
        forceVisible: true
    });

    const visibleTables = writable([] as string[]);
    $: activeTable = $visibleTables.sort((a, b) => {
        return tables.findIndex((t) => t.title === a) - tables.findIndex((t) => t.title === b);
    })[0];

    let scrollDir = 'down';
    let shouldShowTable = false;
</script>

<svelte:window on:scroll={() => (scrollDir = getScrollDir())} />

<div class="web-big-padding-section-level-1 web-white-section theme-light">
    <div class="web-big-padding-section-level-2">
        <div class="u-position-relative">
            <article use:melt={$root}>
                <div class="web-container">
                    <header
                        class="web-u-text-align-center"
                        use:visible
                        on:visible={(e) => {
                            shouldShowTable = !e.detail;
                        }}
                    >
                        <h3 class="web-title web-u-color-text-primary">Compare plans</h3>
                        <p class="web-main-body-500 u-margin-block-start-16">
                            Discover our plans and find the one that fits your project’s needs.
                        </p>
                    </header>

                    <div
                        class="web-is-only-mobile web-u-padding-block-start-48 web-u-padding-inline-8 web-u-margin-inline-8-negative web-u-filter-blur-8 /u-position-sticky /u-z-index-5"
                        style:--inset-block-start="2rem"
                    >
                        <Tabs bind:tab tabs={cols} let:TabsList>
                            <TabsList
                                class=" web-u-mobile-divider web-u-container-query-inline"
                                stretch
                                style="--p-secondary-tabs-bg-color-default: var(--web-color-white);
								--p-secondary-tabs-text-color-selected: var(--web-color-accent);
								--p-secondary-tabs-bg-color-selected: var(--web-color-accent) / 0.08;"
                                let:tab
                            >
                                <span class="web-main-body-500 u-capitalize">{tab}</span>
                            </TabsList>
                        </Tabs>
                    </div>

                    <div
                        class="web-is-not-mobile web-u-grid-auto-column-1fr is-with-footer-border u-gap-32 web-u-padding-inline-8 web-u-margin-inline-8-negative web-u-filter-blur-8 u-position-sticky u-z-index-5 web-u-container-query-inline"
                        style:--inset-block-start={$isHeaderHidden ? '0px' : '70px'}
                        style:transition="inset-block-start 0.3s ease"
                    >
                        <div
                            class="web-description web-u-color-text-primary web-u-cross-child-center"
                            style:opacity={browser ? 1 : 0}
                            style:position={browser ? 'relative' : undefined}
                        >
                            <span style="opacity: 0;">{activeTable}</span>
                            {#key `${activeTable}-${shouldShowTable}`}
                                <div
                                    style="position: absolute; top: 50%; transform: translateY(-50%);"
                                    in:fly={{
                                        y: scrollDir === 'down' ? 16 : -16,
                                        delay: 250,
                                        duration: 250
                                    }}
                                    out:fly={{ y: scrollDir === 'down' ? -16 : 16, duration: 250 }}
                                >
                                    {#if shouldShowTable && activeTable}
                                        {activeTable}
                                    {/if}
                                </div>
                            {/key}
                        </div>
                        <div class="web-mini-card">
                            <div
                                class="u-flex u-cross-center u-gap-16 u-flex-wrap u-main-space-between"
                            >
                                <h4 class="web-label web-u-color-text-primary">Starter</h4>
                                <a
                                    href="https://cloud.appwrite.io/register"
                                    class="web-button is-secondary"
                                >
                                    <span class="web-sub-body-500">Start building</span>
                                </a>
                            </div>
                        </div>
                        <div class="web-mini-card">
                            <div
                                class="u-flex u-cross-center u-gap-16 u-flex-wrap u-main-space-between"
                            >
                                <h4 class="web-label web-u-color-text-primary">Pro</h4>
                                <a
                                    class="web-button"
                                    href="https://cloud.appwrite.io/console?type=createPro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <!-- <span class="web-sub-body-500">Start trial</span> -->
                                    <span class="web-sub-body-500">Start building</span>
                                </a>
                            </div>
                        </div>
                        <div class="web-mini-card">
                            <div
                                class="u-flex u-cross-center u-gap-16 u-flex-wrap u-main-space-between"
                            >
                                <h4 class="web-label web-u-color-text-primary">Scale</h4>
                                <button class="web-button is-secondary" disabled>
                                    <span class="web-sub-body-500">Coming soon</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="web-u-stretch-sep-full-screen" />

                    {#each tables as table}
                        {@const isOpen = $value?.includes(table.title)}
                        <table
                            class="web-compare-table web-sub-body-400"
                            class:is-open-in-mobile={isOpen}
                            use:melt={$item(table.title)}
                            use:visible={{ top: 128 }}
                            on:visible={(e) => {
                                const isVisible = e.detail;
                                visibleTables.update((p) => {
                                    if (isVisible) {
                                        return [...p, table.title];
                                    } else {
                                        return p.filter((t) => t !== table.title);
                                    }
                                });
                            }}
                        >
                            <caption
                                class="web-compare-table-caption web-description web-u-color-text-primary"
                                use:melt={$heading({ level: 3 })}
                                style:position={browser ? 'unset' : undefined}
                            >
                                <button
                                    class="web-compare-table-caption-button"
                                    use:melt={$trigger(table.title)}
                                >
                                    <span>{table.title}</span>
                                    <span
                                        class="icon-cheveron-down web-is-only-mobile web-u-inline-block"
                                        aria-hidden="true"
                                    />
                                </button>
                            </caption>

                            <tbody class="web-compare-table-body" use:melt={$content(table.title)}>
                                {#each table.rows as row}
                                    <tr>
                                        <th class="web-sub-body-500">{row.title}</th>
                                        {#each cols as col, index}
                                            <td
                                                class="level-{index}"
                                                class:is-selected={col === tab}
                                            >
                                                {#if typeof row[col] === 'string'}
                                                    {row[col]}
                                                {:else}
                                                    <img
                                                        src="/images/icons/gradients/v-icon.svg"
                                                        alt="yes"
                                                    />
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
