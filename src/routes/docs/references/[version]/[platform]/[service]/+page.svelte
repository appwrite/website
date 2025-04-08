<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/state';
    import { MainFooter, Select } from '$lib/components';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import { layoutState, toggleReferences } from '$lib/layouts/Docs.svelte';
    import { parse } from '$lib/utils/markdown';
    import {
        Platform,
        platformMap,
        preferredPlatform,
        preferredVersion,
        serviceMap,
        type Version,
        versions
    } from '$lib/utils/references';
    import type { LayoutContext } from '$markdoc/layouts/Article.svelte';
    import { Fence, Heading } from '$markdoc/nodes/_Module.svelte';
    import { API_REFERENCE_TITLE_SUFFIX } from '$routes/titles.js';
    import { getContext, onMount, setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import { anyify } from '$lib/utils/anyify.js';
    import { scrollToTop } from '$lib/actions/scrollToTop.js';
    import { clickOutside } from '$lib/actions/clickOutside.js';
    import { Accordion, AccordionItem } from '$lib/components/Accordion';
    import Request from './(components)/Request.svelte';
    import Response from './(components)/Response.svelte';
    import RateLimits from './(components)/RateLimits.svelte';

    let { data } = $props();

    setContext<LayoutContext>('headings', writable({}));

    const headings = getContext<LayoutContext>('headings');

<<<<<<< HEAD
    let selected: string | undefined = undefined;
    let selectedMenuItem: HTMLElement;

=======
    let selected: string | undefined = $state(undefined);
>>>>>>> main
    headings.subscribe((n) => {
        const noVisible = Object.values(n).every((n) => !n.visible);
        if (selected && noVisible) {
            return;
        }
        for (const key in n) {
            if (n[key].visible) {
                selected = key;
                setTimeout(() => {
                    if (selectedMenuItem) {
                        // First scroll the item into view
                        selectedMenuItem.scrollIntoView({ behavior: 'smooth', block: 'center' });

                        // Get the parent scrollable container (the menu)
                        const menuContainer = selectedMenuItem.closest(
                            '.web-references-menu-content'
                        );
                        if (menuContainer) {
                            // Add some offset to position the item higher in the viewport
                            const offset = 100; // Adjust this value as needed
                            menuContainer.scrollTop = menuContainer.scrollTop - offset;
                        }
                    }
                }, 0);
                break;
            }
        }
    });

    function selectPlatform(event: CustomEvent<unknown>) {
        const { version, service } = page.params;
        const platform = event.detail as Platform;

        // except nodejs, all other server sided need to be saved as without `server-` prefix
        const isServerSide =
            !platform.startsWith('client-') && !platform.startsWith('server-nodejs');

        let correctPlatform = platform;
        if (isServerSide) {
            correctPlatform = platform.replaceAll(`server-`, ``) as Platform;
        }

        preferredPlatform.set(correctPlatform as Platform);

        goto(`/docs/references/${version}/${platform}/${service}`, {
            noScroll: true
        });
    }

    function selectVersion(event: CustomEvent<unknown>) {
        const { platform, service } = page.params;
        const version = event.detail as Version;
        preferredVersion.set(version);
        goto(`/docs/references/${version}/${platform}/${service}`, {
            noScroll: true
        });
    }

    /**
     * Ensures consistency between documentation and the references page
     * by correctly handling server-side language prefixes.
     *
     * In normal code blocks, server-side languages are named without
     * a `server-` prefix, unlike client languages, which use `client-`.
     *
     * However, the references page follows a `client-` / `server-` prefix
     * convention. This function standardizes the naming to maintain consistency.
     */
    function handleServerSideLanguage() {
        // nodejs has a `server-` prefix.
        const needsServerPrefix =
            !platform.startsWith('client-') && !platform.startsWith('server-');
        if (needsServerPrefix && document.referrer) {
            platformBindingForSelect = `server-${platform}` as Platform;
        }
    }

    onMount(() => {
        preferredPlatform.set(platform);
        preferredVersion.set(page.params.version as Version);

        const isSame = $preferredPlatform === page.params.platform;
        const hasPlatformPrefix =
            $preferredPlatform.startsWith('client-') || $preferredPlatform.startsWith('server-');

        /* `document.referrer` = don't redirect if the page was opened via a direct url hit */
        if (!isSame && document.referrer) {
            const platformMode = hasPlatformPrefix
                ? $preferredPlatform
                : `server-${$preferredPlatform}`;

            goto(`/docs/references/${$preferredVersion}/${platformMode}/${page.params.service}`, {
                noScroll: true,
                replaceState: false
            });
        }

        handleServerSideLanguage();
    });

    // cleaned service description without Markdown links.
    let serviceDescription = $derived(
        (data.service?.description ?? '').replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
    );

    // the service description up to the first full stop, providing sufficient information.
    let shortenedDescription = $derived(
        serviceDescription.substring(0, serviceDescription.indexOf('.') + 1)
    );

<<<<<<< HEAD
    $: platformBindingForSelect = $page.params.platform as Platform;
    $: platform = ($preferredPlatform ?? $page.params.platform) as Platform;
    $: platformType = platform.startsWith('client-') ? 'CLIENT' : 'SERVER';
    $: serviceName = serviceMap[data.service?.name];
    $: title = serviceName + API_REFERENCE_TITLE_SUFFIX;
    $: description = shortenedDescription;
    $: ogImage = DEFAULT_HOST + '/images/open-graph/docs.png';

    // Add this function to determine the operation type and its order
    function getOperationOrder(methodTitle: string): number {
        const title = methodTitle.toLowerCase();
        if (title.startsWith('create')) return 1;
        if (title.startsWith('read') || title.startsWith('get') || title.startsWith('list'))
            return 2;
        if (title.startsWith('update')) return 3;
        if (title.startsWith('delete')) return 4;
        return 5; // Other operations
    }

    // Add this function to sort methods within each group
    function sortMethods(methods: any[]) {
        return methods.sort((a, b) => {
            const orderA = getOperationOrder(a.title);
            const orderB = getOperationOrder(b.title);
            if (orderA === orderB) {
                return a.title.localeCompare(b.title);
            }
            return orderA - orderB;
        });
    }

    function bindSelectedRef(node: HTMLElement, isSelected: boolean) {
        if (isSelected) {
            selectedMenuItem = node;
        }

        return {
            update(newIsSelected: boolean) {
                if (newIsSelected) {
                    selectedMenuItem = node;
                }
            }
        };
    }
=======
    let platformBindingForSelect = $derived(page.params.platform as Platform);
    let platform = $derived(($preferredPlatform ?? page.params.platform) as Platform);
    let platformType = $derived(platform.startsWith('client-') ? 'CLIENT' : 'SERVER');
    let serviceName = $derived(serviceMap[data.service?.name]);
    let title = $derived(serviceName + API_REFERENCE_TITLE_SUFFIX);
    let description = $derived(shortenedDescription);
    let ogImage = $derived(DEFAULT_HOST + '/images/open-graph/docs.png');
>>>>>>> main
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Description -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <!-- Image -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />

    {#if page.params.version !== 'cloud'}
        <link
            rel="canonical"
            href={`https://appwrite.io/docs/references/cloud/${page.params.platform}/${page.params.service}`}
        />
    {/if}
</svelte:head>

<main class="contents" id="main">
    <article class="web-article contents">
        <header class="web-article-header">
            <div class="web-article-header-start">
                <h1 class="text-title font-aeonik-pro">{serviceName}</h1>
                <div class="web-inline-code">{platformType}</div>
            </div>
            <div class="web-article-header-end">
                <div class="text-primary flex flex-col gap-6 md:flex-row">
                    <div class="flex items-center gap-2">
                        <label class="web-is-not-mobile text-xs" for="platform">Platform</label>
                        <Select
                            --min-width="10rem"
                            id="platform"
                            value={platformBindingForSelect}
                            on:change={selectPlatform}
                            options={[
                                ...Object.values(Platform)
                                    .filter((p) => p.startsWith('client-'))
                                    .map((p) => ({
                                        value: p,
                                        label: platformMap[p],
                                        group: 'Client'
                                    })),
                                ...Object.values(Platform)
                                    .filter((p) => p.startsWith('server-'))
                                    .map((p) => ({
                                        value: p,
                                        label: platformMap[p],
                                        group: 'Server'
                                    }))
                            ]}
                            nativeMobile
                        />
                    </div>
                    <div class="flex items-center gap-2">
                        <label class="web-is-not-mobile text-xs" for="version">Version</label>

                        <Select
                            nativeMobile
                            on:change={selectVersion}
                            value={page.params.version}
                            options={[
                                { value: 'cloud', label: 'Cloud' },
                                ...versions.map((version) => ({
                                    value: version,
                                    label: anyify(version)
                                }))
                            ]}
                        />
                    </div>
                </div>
            </div>
        </header>
        <div class="web-article-content" style:gap="6rem">
            <section class="web-article-content-grid-6-4">
                <div class="web-article-content-grid-6-4-column-1 flex flex-col gap-2">
                    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                    {@html parse(data.service?.description)}
                </div>
                <div class="web-article-content-grid-6-4-column-2 j-end flex flex-col gap-8">
                    <Fence
                        language="text"
                        badge="Base URL"
                        content="https://cloud.appwrite.io/v1"
                        process
                        withLineNumbers={false}
                    />
                </div>

                {#if data.methods.length === 0}
                    <div class="web-article-content-grid-6-4-column-2 flex flex-col gap-8">
                        <div class="web-inline-info">
                            <span class="icon-info" aria-hidden="true"></span>
                            <h5 class="text-sub-body text-primary font-medium">
                                No endpoint found for this version and platform
                            </h5>
                            Please switch to a newer version or different platform.
                        </div>
                    </div>
                {/if}
            </section>
            {#each Object.entries(data.methods.reduce((acc, method) => {
                    if (!acc[method.group]) {
                        acc[method.group] = [];
                    }
                    acc[method.group].push(method);
                    return acc;
                }, {})) as [_group, methods]}
                {#each sortMethods(methods) as method (method.id)}
                    <section class="web-article-content-grid-6-4">
                        <div class="web-article-content-grid-6-4-column-1 flex flex-col gap-8">
                            <header class="web-article-content-header">
                                <Heading id={method.id} level={2} inReferences
                                    >{method.title}</Heading
                                >
                            </header>
                            <div class="flex flex-col gap-2">
                                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                                {@html parse(method.description)}
                            </div>
                            <Accordion>
                                {#if method.parameters.length > 0}
                                    <AccordionItem open={true} title="Request">
                                        <Request {method} />
                                    </AccordionItem>
                                {/if}
                                <AccordionItem title="Response">
                                    <Response {method} />
                                </AccordionItem>
                                {#if method?.['rate-limit'] > 0 && method?.['rate-key']?.length > 0}
                                    <AccordionItem title="Rate limits">
                                        <RateLimits {method} {platformType} />
                                    </AccordionItem>
                                {/if}
                            </Accordion>
                        </div>
                        <div class="web-article-content-grid-6-4-column-2 flex flex-col gap-8">
                            <div class="dark contents">
                                <div
                                    class="sticky"
                                    style="--inset-block-start:var(--p-grid-huge-navs-secondary-sticky-position);"
                                >
                                    <Fence
                                        language="text"
                                        badge="Endpoint"
                                        content="{method.method.toUpperCase()} {method.url}"
                                        toCopy={method.url}
                                        process
                                        withLineNumbers={false}
                                    />
                                    <div class="mt-6">
                                        <Fence
                                            language={platform}
                                            content={method.demo}
                                            process
                                            withLineNumbers={false}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                {/each}
            {/each}
        </div>
        <aside
            class="web-references-menu"
            class:is-open={$layoutState.showReferences}
            use:clickOutside={() => ($layoutState.showReferences = false)}
        >
            {#if data.methods.length > 0}
                <button
                    class="web-icon-button"
                    id="refOpen"
                    onclick={toggleReferences}
                    aria-label="Toggle references"
                >
                    <span class="icon-menu-alt-4" aria-hidden="true"></span>
                </button>
                <div class="web-references-menu-content">
                    <div
                        class="web-references-menu-header mt-6 flex items-center justify-between gap-4"
                    >
                        <h5 class="web-references-menu-title text-micro uppercase">On This Page</h5>
                        <button
                            class="web-icon-button"
                            id="refClose"
                            onclick={toggleReferences}
                            aria-label="Toggle references"
                        >
                            <span class="icon-x" aria-hidden="true"></span>
                        </button>
                    </div>
                    <ul class="web-references-menu-list">
                        {#each Object.entries(data.methods.reduce((acc, method) => {
                                // Group methods by their group attribute
                                if (!acc[method.group]) {
                                    acc[method.group] = [];
                                }
                                acc[method.group].push(method);
                                return acc;
                            }, {})) as [group, methods]}
                            <li class="web-references-menu-group">
                                <h6 class="text-micro text-greyscale-500 mb-2 uppercase">
                                    {group}
                                </h6>
                                <ul class="flex flex-col gap-2">
                                    {#each sortMethods(methods) as method}
                                        <li class="web-references-menu-item">
                                            <a
                                                href={`#${method.id}`}
                                                class="web-references-menu-link text-caption"
                                                class:is-selected={method.id === selected}
                                                use:bindSelectedRef={method.id === selected}
                                            >
                                                {method.title}
                                            </a>
                                        </li>
                                    {/each}
                                </ul>
                            </li>
                        {/each}
                    </ul>
                    <div class="border-greyscale-900/4 web-u-padding-block-20 border-t">
                        <button class="web-link inline-flex items-center gap-2" use:scrollToTop>
                            <span class="web-icon-arrow-up" aria-hidden="true"></span>
                            <span class="text-caption">Back to top</span>
                        </button>
                    </div>
                </div>
            {/if}
        </aside>
    </article>
</main>
<MainFooter variant="docs" />

<style lang="scss">
    .web-inline-code {
        translate: 0 0.125rem;
    }
    .web-references-menu-group {
        margin-bottom: 1.5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
</style>
