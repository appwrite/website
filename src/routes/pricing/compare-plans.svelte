<script lang="ts">
    import { browser } from '$app/environment';
    import { Tabs } from '$lib/UI';
    import { visible } from '$lib/actions/visible';
    import { Tooltip } from '$lib/components';
    import { Button } from '$lib/components/ui';
    import { classNames } from '$lib/utils/classnames';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import { getScrollDir } from '$lib/utils/getScrollDir';
    import { createAccordion, melt } from '@melt-ui/svelte';
    import { writable } from 'svelte/store';
    import { fly } from 'svelte/transition';

    type Table = {
        title: string;
        rows: {
            title: string;
            info?: string;
            free: string | true;
            pro: string | true;
            scale: string | true;
            enterprise: string | true;
        }[];
    };

    const cols = ['free', 'pro', 'scale', 'enterprise'] as const;

    const tables: Array<Table> = [
        {
            title: 'Resources',
            rows: [
                {
                    title: 'Bandwidth',
                    free: '5GB / month',
                    pro: '300GB / month',
                    scale: '300GB / month',
                    enterprise: 'Custom'
                },
                {
                    title: 'Additional bandwidth',
                    free: '-',
                    pro: '$40 per 100GB / month',
                    scale: '$40 per 100GB / month',
                    enterprise: 'Custom'
                },
                {
                    title: 'Storage',
                    free: '2GB',
                    pro: '150GB',
                    scale: '150GB',
                    enterprise: 'Custom'
                },
                {
                    title: 'Additional storage',
                    free: '-',
                    pro: '$3 per 100GB ',
                    scale: '$3 per 100GB',
                    enterprise: 'Custom'
                },
                {
                    title: 'Executions',
                    free: '750K / month',
                    pro: '3.5M / month',
                    scale: '3.5M / month',
                    enterprise: 'Custom'
                }
            ]
        },
        {
            title: 'Platform',
            rows: [
                {
                    title: 'Organization Members',
                    free: '1',
                    pro: '1',
                    scale: 'Unlimited',
                    enterprise: 'Unlimited'
                },
                {
                    title: 'Additional Organization members',
                    free: '-',
                    pro: '$15 per member',
                    scale: '$0',
                    enterprise: '$0'
                },
                {
                    title: 'Connected websites and apps',
                    free: '3 per project',
                    pro: 'Unlimited',
                    scale: 'Unlimited',
                    enterprise: 'Unlimited'
                },
                {
                    title: 'No Appwrite branding on emails',
                    free: '-',
                    pro: true,
                    scale: true,
                    enterprise: true
                },
                {
                    title: 'Custom SMTP',
                    free: '-',
                    pro: true,
                    scale: true,
                    enterprise: true
                },
                {
                    title: 'Webhooks',
                    free: '2 per project',
                    pro: 'Unlimited',
                    scale: 'Unlimited',
                    enterprise: 'Unlimited'
                },
                {
                    title: 'Logs retention',
                    free: '1 hour',
                    pro: '7 days',
                    scale: '28 days',
                    enterprise: 'Custom'
                },
                {
                    title: 'Budget caps and alerts',
                    free: 'Not needed',
                    pro: true,
                    scale: true,
                    enterprise: true
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
                    scale: '200,000 monthly active users',
                    enterprise: 'Custom'
                },
                {
                    title: 'Additional users',
                    free: '-',
                    pro: '$3 per 1,000 users',
                    scale: '$3 per 1,000 users',
                    enterprise: 'Custom'
                },
                {
                    title: 'Phone OTP',
                    free: '10 SMS / month',
                    pro: '<a href="/docs/advanced/platform/phone-otp#rates" class="underline">View rates</a>',
                    scale: '<a href="/docs/advanced/platform/phone-otp#rates" class="underline">View rates</a>',
                    enterprise: 'Custom'
                },
                {
                    title: 'Teams',
                    free: '100 per project',
                    pro: 'Unlimited',
                    scale: 'Unlimited',
                    enterprise: 'Unlimited'
                },
                {
                    title: 'SSO',
                    free: '-',
                    pro: '-',
                    scale: 'Coming soon',
                    enterprise: 'Coming soon'
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
                    scale: 'Unlimited',
                    enterprise: 'Unlimited'
                },
                {
                    title: 'Documents',
                    free: 'Unlimited',
                    pro: 'Unlimited',
                    scale: 'Unlimited',
                    enterprise: 'Unlimited'
                },
                {
                    title: 'Reads',
                    free: '500K',
                    pro: '1750K',
                    scale: '1750K',
                    enterprise: 'Custom'
                },
                {
                    title: 'Writes',
                    free: '250K',
                    pro: '750K',
                    scale: '750K',
                    enterprise: 'Custom'
                },
                {
                    title: 'Additional reads',
                    free: '-',
                    pro: '$0.060 per 100k reads',
                    scale: '$0.060 per 100k reads',
                    enterprise: 'Custom'
                },
                {
                    title: 'Additional writes',
                    free: '-',
                    pro: '$0.10 per 100k writes',
                    scale: '$0.10 per 100k writes',
                    enterprise: 'Custom'
                },
                {
                    title: 'Backups',
                    free: '-',
                    pro: 'Daily',
                    scale: 'Custom',
                    enterprise: 'Custom'
                },
                {
                    title: 'Backups retention',
                    free: '-',
                    pro: '7 days retention',
                    scale: 'Custom',
                    enterprise: 'Custom'
                },
                {
                    title: 'Dedicated databases',
                    free: '-',
                    pro: 'Coming Soon',
                    scale: 'Coming soon',
                    enterprise: 'Coming soon'
                }
            ]
        },
        {
            title: 'Storage',
            rows: [
                {
                    title: 'Buckets',
                    free: '1 per project',
                    pro: 'Unlimited',
                    scale: 'Unlimited',
                    enterprise: 'Unlimited'
                },
                {
                    title: 'File size limit',
                    free: '50MB',
                    pro: '5GB',
                    scale: '5GB',
                    enterprise: 'Custom'
                },
                {
                    title: 'Image transformations',
                    free: '-',
                    pro: '100 origin images / month',
                    scale: '100 origin images / month',
                    enterprise: 'Custom'
                },
                {
                    title: 'Additional transformations',
                    free: '-',
                    pro: '$5 per 1000 origin images',
                    scale: '$5 per 1000 origin images',
                    enterprise: 'Custom'
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
                    scale: 'Unlimited',
                    enterprise: 'Unlimited'
                },
                {
                    title: 'Executions',
                    free: '750K / month',
                    pro: '3.5M / month',
                    scale: '3.5M / month',
                    enterprise: 'Custom'
                },
                {
                    title: 'GB-hours',
                    free: '100 GB-hour / month',
                    pro: '1,000 GB-hour / month',
                    scale: '1,000 GB-hour / month',
                    enterprise: 'Custom'
                },
                {
                    title: 'Additional GB-hours',
                    free: '-',
                    pro: '$0.09 per GB-hour',
                    scale: '$0.09 per GB-hour',
                    enterprise: 'Custom'
                },
                {
                    title: 'Compute options',
                    free: '0.5 CPUs - 512MB RAM',
                    pro: 'Up to 4 CPUs - 4GB RAM',
                    scale: 'Up to 4 CPUs - 4GB RAM',
                    enterprise: 'Custom'
                },
                {
                    title: 'Additional executions',
                    free: '-',
                    pro: '$2 per 1 Million',
                    scale: '$2 per 1 Million',
                    enterprise: 'Custom'
                },
                {
                    title: 'Express builds',
                    info: 'Dedicated priority queues for build jobs',
                    free: '-',
                    pro: true,
                    scale: true,
                    enterprise: true
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
                    scale: '500',
                    enterprise: 'Custom'
                },
                {
                    title: 'Additional concurrent connections',
                    free: '-',
                    pro: '$5 per 1,000',
                    scale: '$5 per 1,000',
                    enterprise: 'Custom'
                },
                {
                    title: 'Messages',
                    free: '3M',
                    pro: 'Unlimited',
                    scale: 'Unlimited',
                    enterprise: 'Unlimited'
                }
            ]
        },
        {
            title: 'Security',
            rows: [
                {
                    title: 'Organization roles',
                    free: '-',
                    pro: true,
                    scale: true,
                    enterprise: true
                },
                {
                    title: 'SOC-2',
                    free: '-',
                    pro: '-',
                    scale: true,
                    enterprise: true
                },
                {
                    title: 'HIPAA',
                    free: '-',
                    pro: '-',
                    scale: true,
                    enterprise: true
                },
                {
                    title: 'BAA',
                    free: '-',
                    pro: '-',
                    scale: true,
                    enterprise: true
                },
                {
                    title: 'Custom organization roles',
                    free: '-',
                    pro: '-',
                    scale: 'Coming Soon',
                    enterprise: 'Coming Soon'
                },
                {
                    title: 'Network logs',
                    free: '-',
                    pro: '-',
                    scale: 'Coming Soon',
                    enterprise: 'Coming Soon'
                },
                {
                    title: 'Activity logs',
                    free: '-',
                    pro: '-',
                    scale: 'Coming Soon',
                    enterprise: 'Coming Soon'
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
                    scale: true,
                    enterprise: true
                },
                {
                    title: 'Email',
                    free: '-',
                    pro: true,
                    scale: true,
                    enterprise: true
                },
                {
                    title: 'Priority',
                    free: '-',
                    pro: '-',
                    scale: true,
                    enterprise: true
                },
                {
                    title: 'SLA',
                    free: '-',
                    pro: '-',
                    scale: true,
                    enterprise: true
                },
                {
                    title: 'Private Slack channel',
                    free: '-',
                    pro: '-',
                    scale: true,
                    enterprise: true
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

<div class="web-white-section light py-10">
    <div class="web-big-padding-section-level-2">
        <div class="relative">
            <article use:melt={$root}>
                <div class="container">
                    <header
                        class="text-center"
                        use:visible
                        on:visible={(e) => {
                            shouldShowTable = !e.detail;
                        }}
                    >
                        <h3 class="text-title font-aeonik-pro text-primary">Compare plans</h3>
                        <p class="text-body mt-4 font-medium">
                            Discover our plans and find the one that fits your project’s needs.
                        </p>
                    </header>

                    <div
                        class="web-is-only-mobile web-u-padding-block-start-48 web-u-padding-inline-8 web-u-margin-inline-8-negative web-u-filter-blur-8 /sticky /z-[5]"
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
                                <span class="text-body font-medium capitalize">{tab}</span>
                            </TabsList>
                        </Tabs>
                    </div>

                    <div
                        class="web-is-not-mobile web-u-grid-auto-column-1fr is-with-footer-border web-u-padding-inline-8 web-u-margin-inline-8-negative web-u-filter-blur-8 web-u-container-query-inline sticky top-[70px] z-10 gap-8 [padding-block:20px]!"
                        style:transition="inset-block-start 0.3s ease"
                    >
                        <div
                            class="text-description text-primary self-center"
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
                                    out:fly={{
                                        y: scrollDir === 'down' ? -16 : 16,
                                        duration: 250
                                    }}
                                >
                                    {#if shouldShowTable && activeTable}
                                        {activeTable}
                                    {/if}
                                </div>
                            {/key}
                        </div>
                        <div class="web-mini-card">
                            <div class="flex flex-col items-center justify-between gap-2">
                                <h4 class="text-sub-body text-primary font-medium">Free</h4>
                                <Button
                                    variant="secondary"
                                    href={getAppwriteDashboardUrl('/register')}
                                    class="!w-full"
                                >
                                    <span class="text-sub-body font-medium">Start building</span>
                                </Button>
                            </div>
                        </div>
                        <div class="web-mini-card">
                            <div class="flex flex-col items-center justify-between gap-2">
                                <h4 class="text-sub-body text-primary font-medium">Pro</h4>
                                <Button
                                    class="!w-full"
                                    href={getAppwriteDashboardUrl(
                                        '/console?type=create&plan=tier-1'
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span class="text-sub-body font-medium">Start building</span>
                                </Button>
                            </div>
                        </div>
                        <div class="web-mini-card">
                            <div class="flex flex-col items-center justify-between gap-2">
                                <h4 class="text-sub-body text-primary font-medium">Scale</h4>
                                <Button
                                    variant="secondary"
                                    class="!w-full"
                                    href={getAppwriteDashboardUrl(
                                        '/console?type=create&plan=tier-2'
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span class="text-sub-body font-medium">Start building</span>
                                </Button>
                            </div>
                        </div>
                        <div class="web-mini-card">
                            <div class="flex flex-col items-center justify-between gap-2">
                                <h4 class="text-sub-body text-primary font-medium">Enterprise</h4>
                                <Button
                                    variant="secondary"
                                    class="!w-full"
                                    href="/contact-us/enterprise"
                                >
                                    <span class="text-sub-body font-medium">Contact</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div class="web-u-stretch-sep-full-screen"></div>

                    {#each tables as table}
                        {@const isOpen = $value?.includes(table.title)}
                        <table
                            class="web-compare-table text-sub-body"
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
                                class="web-compare-table-caption text-body text-primary text-left font-medium"
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
                                    ></span>
                                </button>
                            </caption>

                            <tbody class="web-compare-table-body" use:melt={$content(table.title)}>
                                {#each table.rows as row}
                                    <tr class="md:text-center">
                                        <th class="text-caption font-medium">
                                            <div class="flex items-center gap-1 text-left">
                                                {row.title}
                                                {#if row.info}
                                                    <Tooltip placement="top">
                                                        <button class="icon-info" aria-hidden="true"
                                                        ></button>
                                                        {#snippet tooltip()}
                                                            {row.info}
                                                        {/snippet}
                                                    </Tooltip>
                                                {/if}
                                            </div>
                                        </th>
                                        {#each cols as col, index}
                                            <td
                                                class={classNames(
                                                    `text-caption flex justify-center font-normal level-${index}`,
                                                    {
                                                        'md:bg-greyscale-100': col === 'pro'
                                                    }
                                                )}
                                                class:is-selected={col === tab}
                                            >
                                                {#if typeof row[col] === 'string'}
                                                    {@html row[col]}
                                                {:else}
                                                    <img
                                                        class="mx-auto self-center"
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

<style>
    .web-u-grid-auto-column-1fr {
        grid-auto-columns: max-content;
        grid-template-columns: repeat(5, 2fr);
    }

    .web-mini-card {
        padding-inline-start: inherit !important;
    }

    .web-label {
        font-size: var(--web-font-size-medium);
    }

    @media (min-width: 1024px) and (max-width: 1204px) {
        .web-description:nth-child(2) {
            padding-inline-start: 6rem;
        }
    }

    @media (min-width: 1024px) and (max-width: 1085px) {
        .web-button {
            padding-inline: 0.125rem !important;
        }

        .web-button .web-sub-body-500 {
            font-size: var(--web-font-size-micro) !important;
        }
    }

    @media (min-width: 1024px) and (max-width: 1210px) {
        .web-button {
            padding-inline: 0.15rem !important;
        }

        .web-button .web-sub-body-500 {
            font-size: var(--web-font-size-tiny);
        }
    }
</style>
