<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import { newsletter } from '$lib/components/Newsletter.svelte';
    import PreFooter from '$lib/components/PreFooter.svelte';
    import { GITHUB_STARS } from '$lib/constants';
    import { Main } from '$lib/layouts';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import DeveloperCard from "$routes/DeveloperCard.svelte";

    export let data;


    const metrics = [
        { metric: `${GITHUB_STARS}+`, description: 'GitHub Stars' },
        { metric: '3K+', description: 'Pull Requests' },
        { metric: '18K+', description: 'Commits' },
        { metric: '3K+', description: 'Issues' },
        { metric: '600+', description: 'Open Issues' },
        { metric: '2.5K+', description: 'Closed Issues' },
        { metric: '3.5K+', description: 'Forks' },
        { metric: '800+', description: 'Contributors' }
    ];

    let name = '';
    let email = '';
    let submitted = false;
    let error: string | undefined;
    let submitting = false;

    async function submit() {
        submitting = true;
        error = undefined;
        const response = await newsletter(name, email);
        submitting = false;
        if (response.status >= 400) {
            error = response.status >= 500 ? 'Server Error.' : 'Error submitting form.';
            return;
        }
        submitted = true;
    }

    const title = 'Storage' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Desscription -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <!-- Image -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Main>
    <div class="web-big-padding-section u-overflow-hidden">
        <div class="web-big-padding-section-level-1 u-position-relative u-overflow-hidden">
            <div class="web-big-padding-section-level-2">
                <section class="web-container hero web-u-padding-block-end-0">
                    <div>
                        <h1 class="web-display web-u-color-text-primary">
                            Robust and secure storage infrastructure
                        </h1>
                        <p class="web-main-body-500 u-margin-block-start-20">
                            Securely store files with advanced compression, encryption and image transformations.
                        </p>
                        <div class="u-flex u-gap-8 u-margin-block-start-32">
                            <a href="/" class="web-button">
                                <span class="text">Become a Hero</span>
                            </a>
                            <a href="/" class="web-button is-secondary">
                                <span class="text">Read the docs</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <img src="/images/pages/storage/product-shot.png" width="708" alt="" />
                    </div>
                </section>
            </div>
        </div>
        <div class="web-big-padding-section-level-1 u-position-relative web-u-sep-block-start">
            <div class="web-big-padding-section-level-2">
                <section class="web-container hero web-u-padding-block-end-0">
                    <div>
                        <h2 class="web-title web-u-color-text-primary">
                            Preview media files however you want
                        </h2>
                        <p class="web-main-body-500 u-margin-block-start-16">
                            Appwrite Storage's preview endpoint lets you manipulate image previews while also managing different formats and compression algorithms.
                        </p>
                        <div class="u-flex u-gap-8 u-margin-block-start-32">
                            <a href="/" class="web-button is-secondary">
                                <span class="text">Learn more</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <img src="/images/pages/storage/product-shot-2.png" width="708" alt="" />
                    </div>
                </section>
            </div>
            <div class="web-big-padding-section-level-2">
                <section class="web-container hero-flipped web-u-padding-block-end-0">
                    <div>
                        <img src="/images/pages/storage/product-shot-3.png" width="708" alt="" />
                    </div>
                    <div>
                        <h2 class="web-title web-u-color-text-primary">
                            Optimized for small and large files
                        </h2>
                        <p class="web-main-body-500 u-margin-block-start-16">
                            Appwrite offers chunked uploads for large files and several compression options for optimized upload times.
                        </p>
                        <div class="u-flex u-gap-8 u-margin-block-start-32">
                            <a href="/" class="web-button is-secondary">
                                <span class="text">Learn more</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <div class="web-big-padding-section-level-2">
                <div class="web-hero" style="--hero-max-inline-size:24rem; --hero-gap:1rem;">
                    <h1 class="web-title web-u-color-text-primary">Protect your files and set permissions</h1>
                    <p class="web-main-body-500 web-u-max-width-380 u-margin-inline-auto">
                        Set up file encryption and granular user permissions in your storage infrastructure
                    </p>
                    <a href="/" class="web-button is-secondary u-margin-inline-auto u-margin-block-start-16">Learn more</a>
                </div>
                <div class="web-container u-flex u-margin-block-start-64 is-only-desktop">
                    <img src="/images/pages/storage/bucket-modal.png" width="708" alt="" />
                    <img src="/images/pages/storage/permission-modal.png" width="708" alt="" class="u-margin-block-start-56 u-margin-inline-start-negative-64" />
                </div>
            </div>
        </div>

        <div
                class="web-big-padding-section-level-1 u-position-relative web-white-section theme-light"
        >
            <div class="web-big-padding-section-level-2">
                <div class="web-container">
                    <div class="web-hero is-center web-u-max-width-380">
                        <span class="web-badges web-eyebrow">Dashboard_</span>
                        <h2 class="web-title web-u-color-text-primary">Easily manage your storage infrastructure</h2>
                        <p class="aw-main-body-500 web-u-margin-block-start-0">
                            Organize your buckets and files with ease in your dashboard, as well as manage security, permissions, compression, and more.
                        </p>
                        <a
                                href="https://builtwith.appwrite.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="web-button is-secondary web-u-cross-child-center u-margin-block-start-16"
                        >
                            <span>Learn more</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="web-big-padding-section-level-2">
                <div class="web-container">
                    <div class="u-flex u-gap-32 web-u-flex-vertical-mobile">
                        <div class="u-flex-vertical u-gap-32">
                            <div class="web-u-flex-vertical web-u-gap-2">
                                <h3 class="web-main-body-500 web-u-color-text-primary">
                                    File management dashboard
                                </h3>
                                <p class="web-main-body-500">
                                    Visualize and search for files with different view options and manipulate multiple at the same time.
                                </p>
                            </div>
                            <div class="web-media" style="border-radius:1.5rem">
                                <section class="web-card e-console-card is-white u-padding-0">
                                    <header class="e-header-console u-padding-block-end-0 u-flex-vertical u-gap-16">
                                        <div class=" u-flex u-gap-16">
                                            <h4 class="heading-level-5 u-trim-1 u-line-height-1">Files</h4>
                                            <div class="tag u-cross-child-end">
                                                <code class="web-u-font-size-10">65f935a927c927931b68</code>
                                            </div>
                                        </div>
                                        <div class="tabs">
                                            <ul class="tabs-list scroll-shadow-horizontal">
                                                <li class="tabs-item">
                                                    <button class="tabs-button is-selected" tabindex="0" role="tab">
                                                        <span class="text">Files </span>
                                                    </button>
                                                </li>
                                                <li class="tabs-item">
                                                    <button class="tabs-button" tabindex="-1" role="tab">
                                                        <span class="text">Usage </span>
                                                    </button>
                                                </li>
                                                <li class="tabs-item">
                                                    <button class="tabs-button" tabindex="-1" role="tab">
                                                        <span class="text">Settings</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </header>
                                    <div class="e-console-card-content u-flex-vertical u-gap-16 u-padding-block-start-16 u-padding-inline-start-24">
                                        <div class="u-flex u-gap-8">
                                            <div
                                                    class="input-text-wrapper is-with-end-button u-width-full-line u-width-200"
                                                    style="--amount-of-buttons:1"
                                            >
                                                <input class="input-text e-pink-input-light" type="search" placeholder="Search" />
                                                <div class="icon-search" aria-hidden="true"></div>
                                            </div>
                                            <button class="button is-secondary" aria-label="filter" style="padding:10px 12px">
                                                <span class="icon-filter" aria-hidden="true"></span>
                                            </button>
                                            <button class="button is-secondary" type="button" style="padding:12px">
                                                <span class="icon-view-boards u-opacity-50" aria-hidden="true" aria-label="columns"></span>
                                                <span class="inline-tag">4</span>
                                            </button>
                                        </div>
                                        <div>
                                            <div class="table" role="table" data-private="" style="">
                                                <div class="table-thead" role="rowheader">
                                                    <div class="table-row" role="row">
                                                        <div style="" class="table-thead-col" role="columnheader">
                                                            <span class="eyebrow-heading-3">Filename</span>
                                                        </div>
                                                        <div style="--p-col-width: 140;" class="table-thead-col is-only-desktop" role="columnheader">
                                                            <span class="eyebrow-heading-3">ID</span>
                                                        </div>
                                                        <div style="--p-col-width: 100;" class="table-thead-col is-only-desktop" role="columnheader">
                                                            <span class="eyebrow-heading-3">Type</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="table-tbody" role="rowgroup">
                                                    <div class="table-row" role="row">
                                                        <div style="" class="table-col " data-title="Name" role="cell">
                                                            <div class="u-flex u-gap-12 u-cross-center">
                                                                <img width="32" height="32" class="avatar" src="/images/pages/storage/file-1.png" title="CiutatVella.mp4" alt="CiutatVella.mp4" style="--size: 2rem; background-color: transparent;">
                                                                <span class="text u-trim">CiutatVella.mp4</span>
                                                            </div>
                                                        </div>
                                                        <div class="table-col" data-title="Size" role="cell" data-private="">
                                                            <div class="tag u-cross-child-end">
                                                                <code class="web-u-font-size-12">637a4...936e2</code>
                                                            </div>
                                                        </div>
                                                        <div class="table-col" data-title="Type" role="cell" data-private="">
                                                            <span class="text u-trim"><span>video/mp4</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="table-row" role="row">
                                                        <div style="" class="table-col " data-title="Name" role="cell">
                                                            <div class="u-flex u-gap-12 u-cross-center">
                                                                <img width="32" height="32" class="avatar" src="/images/pages/storage/file-2.png" title="Eixample.mp4" alt="Eixample.mp4" style="--size: 2rem; background-color: transparent;">
                                                                <span class="text u-trim">Eixample.mp4</span>
                                                            </div>
                                                        </div>
                                                        <div class="table-col" data-title="Size" role="cell" data-private="">
                                                            <div class="tag u-cross-child-end">
                                                                <code class="web-u-font-size-12">637a4...936e2</code>
                                                            </div>
                                                        </div>
                                                        <div class="table-col" data-title="Type" role="cell" data-private="">
                                                            <span class="text u-trim"><span>video/mp4</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="table-row" role="row">
                                                        <div style="" class="table-col " data-title="Name" role="cell">
                                                            <div class="u-flex u-gap-12 u-cross-center">
                                                                <img width="32" height="32" class="avatar" src="/images/pages/storage/file-3.png" title="SantsMontjuïc.mp4" alt="SantsMontjuïc.mp4" style="--size: 2rem; background-color: transparent;">
                                                                <span class="text u-trim">SantsMontjuïc.mp4</span>
                                                            </div>
                                                        </div>
                                                        <div class="table-col" data-title="Size" role="cell" data-private="">
                                                            <div class="tag u-cross-child-end">
                                                                <code class="web-u-font-size-12">637a4...936e2</code>
                                                            </div>
                                                        </div>
                                                        <div class="table-col" data-title="Type" role="cell" data-private="">
                                                            <span class="text u-trim"><span>video/mp4</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="table-row" role="row">
                                                        <div style="" class="table-col " data-title="Name" role="cell">
                                                            <div class="u-flex u-gap-12 u-cross-center">
                                                                <img width="32" height="32" class="avatar" src="/images/pages/storage/file-4.png" title="Barceloneta.mp4" alt="Barceloneta.mp4" style="--size: 2rem; background-color: transparent;">
                                                                <span class="text u-trim">Barceloneta.mp4</span>
                                                            </div>
                                                        </div>
                                                        <div class="table-col" data-title="Size" role="cell" data-private="">
                                                            <div class="tag u-cross-child-end">
                                                                <code class="web-u-font-size-12">637a4...936e2</code>
                                                            </div>
                                                        </div>
                                                        <div class="table-col" data-title="Type" role="cell" data-private="">
                                                            <span class="text u-trim"><span>video/mp4</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div class="web-u-flex-sep" style="--web-color-border: 240 5.7% 10.4% / 0.04;"></div>
                        <div class="u-flex-vertical u-gap-32">
                            <div class="web-u-flex-vertical web-u-gap-2">
                                <h3 class="web-main-body-500 web-u-color-text-primary">
                                    Extensive settings options
                                </h3>
                                <p class="web-main-body-500">
                                    Manage security, permissions, compression, and more with straightforward Bucket settings.
                                </p>
                            </div>
                            <div class="web-card is-white u-padding-20">
                                <div class="u-flex-vertical u-gap-16">
                                    <div class="-u-flex-vertical">
                                        <h4 class="web-caption-500 web-u-color-text-primary">Maximum file size</h4>
                                        <p class="web-caption-500">Set the maximum file size (in bytes) allowed in the bucket.</p>
                                    </div>
                                    <div class="u-flex u-gap-8">
                                        <div class="form-item u-stretch">
                                            <label class="label" for="input1" style="--p-label-text-color: var(--color-neutral-80);">Size</label>
                                            <input id="input1" class="input-text e-pink-input-light" placeholder="300">
                                        </div>
                                        <div class="form-item">
                                            <label class="label" for="input2" style="--p-label-text-color: var(--color-neutral-80);">Unit</label>
                                            <div class="select e-pink-input-light">
                                                <select id="input2" class="e-pink-input-light" style="inline-size:5.5rem">
                                                    <option>MB</option>
                                                    <option>GB</option>
                                                </select>
                                                <span class="icon-cheveron-down" aria-hidden="true"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="web-card is-white u-padding-20">
                                <div class="u-flex-vertical u-gap-16">
                                    <div class="-u-flex-vertical">
                                        <h4 class="web-caption-500 web-u-color-text-primary">Compression algorithm</h4>
                                        <p class="web-caption-500">For files larger than 20MB, compression will be skipped even if it's enabled.</p>
                                    </div>
                                    <div class="u-flex u-gap-8">
                                        <div class="form-item u-stretch">
                                            <label class="label" for="input3" style="--p-label-text-color: var(--color-neutral-80);">Compression algorithm</label>
                                            <div class="select e-pink-input-light">
                                                <select id="input3" class="e-pink-input-light">
                                                    <option>Gzip</option>
                                                    <option>RAR</option>
                                                </select>
                                                <span class="icon-cheveron-down" aria-hidden="true"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="web-card is-white u-padding-20">
                                <div class="u-flex-vertical u-gap-16">
                                    <div class="-u-flex-vertical">
                                        <h4 class="web-caption-500 web-u-color-text-primary">File extensions</h4>
                                        <p class="web-caption-500">Up to 100 file extensions can be added. Leave blank to allow all file types.</p>
                                    </div>
                                    <div class="u-flex u-gap-8">
                                        <div class="form-item u-stretch">
                                            <label class="label" for="input3" style="--p-label-text-color: var(--color-neutral-80);">Allowed file extensions</label>
                                            <div class="input-text-wrapper">
                                                <div class="tags-input e-pink-input-light">
                                                    <div class="tags">
                                                        <ul class="tags-list">
                                                            <li class="tags-item">
                                                                <div class="input-tag" style="--p-bg-color:var(--color-neutral-15);--p-text-color: var(--color-neutral-60);">
                                                                    <span class="tag-text">jpg</span>
                                                                    <button type="button" class="input-tag-delete-button" aria-label="delete jpg tag">
                                                                        <span class="icon-x" aria-hidden="true"></span>
                                                                    </button>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <input id="read" placeholder="Allowed file extensions (mp4, jpg, pdf, etc.)" type="text" class="tags-input-text e-pink-input-light">
                                                </div>
                                                <div class="u-flex u-gap-12 u-margin-block-start-8">
                                                    <button type="button" class="tag is-selected"><span class="icon-plus" aria-hidden="true"></span> jpg </button>
                                                    <button type="button" class="tag"><span class="icon-plus" aria-hidden="true"></span> png </button>
                                                    <button type="button" class="tag"><span class="icon-plus" aria-hidden="true"></span> svg </button>
                                                    <button type="button" class="tag"><span class="icon-plus" aria-hidden="true"></span> gif </button>
                                                    <button type="button" class="tag"><span class="icon-plus" aria-hidden="true"></span> html </button>
                                                    <button type="button" class="tag"><span class="icon-plus" aria-hidden="true"></span> pdf </button>
                                                    <button type="button" class="tag"><span class="icon-plus" aria-hidden="true"></span> mp4 </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="web-big-padding-section-level-1 web-white-section theme-light">
            <div class="web-big-padding-section-level-2">
                <div class="web-container">
                    <div class="web-grid-1-1">
                        <div class="web-hero is-align-start web-u-max-width-380">
                            <span class="web-badges web-eyebrow">APIs_</span>
                            <h2 class="web-title web-u-color-text-primary">What you can do with Storage APIs</h2>
                            <p class="aw-main-body-500 web-u-margin-block-start-0">
                                Appwrite's Storage APIs allow you to create and update your files, apply image transformations, and more.
                            </p>
                            <a
                                    href="/docs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="web-button u-margin-block-start-16"
                            >
                                <span>View docs</span>
                            </a>
                        </div>
                        <div class="u-flex-vertical web-u-gap-20">
                            <div class="u-flex u-gap-8">
                                <button class="tag is-selected">
                                    List files
                                </button>
                                <button class="tag">
                                    Create file
                                </button>
                                <button class="tag">
                                    Get file
                                </button>
                                <button class="tag">
                                    Delete file
                                </button>
                            </div>
                            <section class="theme-dark web-code-snippet" aria-label="code-snippet panel">
                                <header class="web-code-snippet-header">
                                    <div class="web-code-snippet-header-start">
                                        <div class="u-flex u-gap-16">
                                            <div class="web-tag">
                                                <span class="text">Node.js</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="web-code-snippet-header-end">
                                        <ul class="buttons-list u-flex u-gap-8">
                                            <li class="buttons-list-item">
                                                <!-- REPLACE with dynamic partial used in Header of docs -->
                                                <button class="web-select is-colored">
                                                    <div class="physical-select"> <span>Web</span></div>
                                                    <span class="icon-cheveron-down" aria-hidden="true"></span>
                                                </button>
                                            </li>
                                            <li class="buttons-list-item u-padding-inline-start-8">
                                                <button aria-describedby="SESItRlYoy" id="zSXaeTV-HF" data-state="closed" data-melt-tooltip-trigger="" class="web-icon-button" aria-label="copy code from code-snippet">
                                                    <span class="web-icon-copy" aria-hidden="true"></span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </header>
                                <div class="web-code-snippet-content" style="block-size:13rem">
                                    <pre><code class="web-code language-text"><span class="line">[code]</span></code></pre>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div class="web-big-padding-section-level-2">
                <div class="web-container">
                    <ul class="web-multi-columns-1 web-u-margin-block-start-80">
                        <li class="u-flex-vertical web-u-gap-20">
                            <div class="web-card is-white u-flex-vertical u-gap-20">
                                <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices lacus.</q>
                                <div class="web-user-box">
                                    <img class="web-user-box-image" src="/images/community/avatars/kap.png" alt="Avatar of Kap.ts">
                                    <div class="web-user-box-name web-sub-body-500">Kap.ts</div>
                                    <div class="web-user-box-username web-sub-body-400">@Kaperskyguru</div>
                                </div>
                            </div>
                        </li>
                        <li class="u-flex-vertical web-u-gap-20">
                            <div class="web-card is-white u-flex-vertical u-gap-20">
                                <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices lacus.</q>
                                <div class="web-user-box">
                                    <img class="web-user-box-image" src="/images/community/avatars/kap.png" alt="Avatar of Kap.ts">
                                    <div class="web-user-box-name web-sub-body-500">Kap.ts</div>
                                    <div class="web-user-box-username web-sub-body-400">@Kaperskyguru</div>
                                </div>
                            </div>
                        </li>
                        <li class="u-flex-vertical web-u-gap-20">
                            <div class="web-card is-white u-flex-vertical u-gap-20">
                                <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices lacus.</q>
                                <div class="web-user-box">
                                    <img class="web-user-box-image" src="/images/community/avatars/kap.png" alt="Avatar of Kap.ts">
                                    <div class="web-user-box-name web-sub-body-500">Kap.ts</div>
                                    <div class="web-user-box-username web-sub-body-400">@Kaperskyguru</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="web-big-padding-section-level-1 web-white-section theme-light">
            <div class="web-big-padding-section-level-2">
                <div class="web-container">
                    <div class="web-hero is-center web-u-max-width-800">
                        <h2 class="web-display web-u-color-text-primary">Powered by open source</h2>
                        <p class="aw-main-body-500 web-u-margin-block-start-0 web-u-max-width-580 u-margin-inline-auto">
                            Appwrite is a 100% open source project, giving you the flexibility and support you need to get your project started.
                        </p>
                        <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                class="web-button is-secondary web-u-cross-child-center u-margin-block-start-16"
                        >
                            <span>Join the community</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="web-big-padding-section-level-2">
                <div class="web-container web-u-max-width-993">
                    <div class="u-overflow-hidden web-u-margin-block-start-80">
                        <ul class="web-info-boxes items-centered web-sub-body-500">
                            <li class="web-info-boxes-item">
                                <img
                                        src="/images/icons/gradients/community.svg"
                                        width="40"
                                        height="40"
                                        alt=""
                                />
                                <h3 class="web-info-boxes-title u-main-center">SJoin the community and share knowledge</h3>
                                <p class="web-info-boxes-content">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                        src="/images/icons/gradients/self-hosted.svg"
                                        width="40"
                                        height="40"
                                        alt=""
                                />
                                <h3 class="web-info-boxes-title u-main-center">Self-host or go Cloud</h3>
                                <p class="web-info-boxes-content">
                                    Lorem ipsum dolor sit amet consectetur. Nullam ligula blandit.
                                </p>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                        src="/images/icons/gradients/lock.svg"
                                        width="40"
                                        height="40"
                                        alt=""
                                />
                                <h3 class="web-info-boxes-title u-main-center">No vendor lock-in</h3>
                                <p class="web-info-boxes-content">
                                    Lorem ipsum dolor sit amet consectetur. Nullam ligula blandit.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


        <div class="web-big-padding-section-level-1">
            <div class="web-big-padding-section-level-2">
                <div class="web-container">
                    <ul class="web-grid-3-desktop-1-mobile">
                        <li>
                            <a href="/docs/products/auth" class="web-card is-transparent u-height-100-percent" style="--card-padding:1.5rem;">
                                <div class="u-flex u-cross-center u-gap-8">
                                    <img
                                            src="/images/icons/illustrated/dark/auth.png"
                                            alt=""
                                            class=""
                                            width="48"
                                            height="48"
                                    />
                                    <h4
                                            class="web-sub-body-500 web-u-color-text-primary u-margin-block-start-8"
                                    >
                                        Auth
                                    </h4>
                                </div>
                                <p class="web-sub-body-400 u-margin-block-start-4">
                                    Build secure authentication and manage your users.
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="/docs/products/functions" class="web-card is-transparent u-height-100-percent" style="--card-padding:1.5rem;">
                                <div class="u-flex u-cross-center u-gap-8">
                                    <img
                                            src="/images/icons/illustrated/dark/functions.png"
                                            alt=""
                                            class=""
                                            width="48"
                                            height="48"
                                    />
                                    <h4
                                            class="web-sub-body-500 web-u-color-text-primary u-margin-block-start-8"
                                    >
                                        Functions
                                    </h4>
                                </div>
                                <p class="web-sub-body-400 u-margin-block-start-4">
                                    Scale big and unlock limitless potential with Appwrite functions.
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="/docs/products/databases" class="web-card is-transparent u-height-100-percent" style="--card-padding:1.5rem;">
                                <div class="u-flex u-cross-center u-gap-8">
                                    <img
                                            src="/images/icons/illustrated/dark/databases.png"
                                            alt=""
                                            class=""
                                            width="48"
                                            height="48"
                                    />
                                    <h4
                                            class="web-sub-body-500 web-u-color-text-primary u-margin-block-start-8"
                                    >
                                        Databases
                                    </h4>
                                </div>
                                <p class="web-sub-body-400 u-margin-block-start-4">
                                    Store and query structured data, ensuring scalable storage.
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="/docs/products/messaging" class="web-card is-transparent u-height-100-percent" style="--card-padding:1.5rem;">
                                <div class="u-flex u-cross-center u-gap-8">
                                    <img
                                            src="/images/icons/illustrated/dark/messaging.png"
                                            alt=""
                                            class=""
                                            width="48"
                                            height="48"
                                    />
                                    <h4
                                            class="web-sub-body-500 web-u-color-text-primary u-margin-block-start-8"
                                    >
                                        Messaging
                                    </h4>
                                </div>
                                <p class="web-sub-body-400 u-margin-block-start-4">
                                    Manage your files’ project, using convenient APIs and utilities.
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="/docs/apis/realtime" class="web-card is-transparent u-height-100-percent" style="--card-padding:1.5rem;">
                                <div class="u-flex u-cross-center u-gap-8">
                                    <img
                                            src="/images/icons/illustrated/dark/realtime.png"
                                            alt=""
                                            class=""
                                            width="48"
                                            height="48"
                                    />
                                    <h4
                                            class="web-sub-body-500 web-u-color-text-primary u-margin-block-start-8"
                                    >
                                        Realtime
                                    </h4>
                                </div>
                                <p class="web-sub-body-400 u-margin-block-start-4">
                                    Utilize realtime information from all Appwrite services.
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                    class="web-big-padding-section-level-2 is-margin-replace-padding u-position-relative"
            >
                <div class="web-container">
                    <PreFooter />
                    <FooterNav />
                    <MainFooter />
                </div>
            </div>
        </div>
    </div>
</Main>

<style lang="scss">
  /* light mode */
  .e-console-card {
    &-content {  background-color:hsl(var(--color-neutral-5)); border-radius:0 0 16px 16px;  }
    .tag { box-sizing:content-box; block-size:15px; padding:2.46px 8.45px; border:none; }
  }
  .e-header-console { padding:1.5rem; background-color:#fff; border-radius:16px 16px 0 0; border-block-end:solid 1px hsl(var(--web-color-border));  }
  .tabs {
    --p-tabs-text-color:            var(--p-tabs-text-color-default);
    --p-tabs-text-color-default:    var(--color-neutral-50);
    --p-tabs-text-color-hover:      var(--color-neutral-80);
    --p-tabs-text-color-active:     var(--color-neutral-80);
    --p-tabs-text-color-selected:   var(--color-neutral-80);

    --p-tabs-bg-color:              var(--p-tabs-bg-defalut);
    --p-tabs-bg-defalut:            var(--transparent);
    --p-tabs-bg-color-hover:        var(--color-neutral-10);

    --p-tabs-outline-color:          var(--p-tabs-outline-color-default);
    --p-tabs-outline-color-default:  var(--transparent);
    --p-tabs-outline-color-focus:    var(--color-neutral-1000) / 0.16;

    --p-tabs-border-color:          var(--p-tabs-border-color-default);
    --p-tabs-border-color-default:  var(--transparent);
    --p-tabs-border-color-selected: var(--color-neutral-80);

    --tabs-shadow-color:       var(--color-neutral-0);
    --tabs-button-arrow-color: var(--color-neutral-80);

  }
  .button {
    /* Light Theme */
    --p-text-color-default: var(--color-neutral-60);
    --p-button-color-default: var(--color-neutral-5);
    --p-border-color-default: var(--color-neutral-15);

    --p-text-color-hover: var(--p-text-color-default);
    --p-button-color-hover: var(--color-neutral-10);
    --p-border-color-hover: var(--p-border-color-default);

    --p-text-color-focus: var(--p-text-color-default);
    --p-button-color-focus: var(--p-button-color-default);
    --p-border-color-focus: var(--transparent);

    --p-text-color-active: var(--color-neutral-90);
    --p-button-color-active: var(--color-neutral-15);
    --p-border-color-active: var(--color-neutral-15);
  }
  .tag {
    --p-tag-text-color-default:  var(--color-neutral-70);
    --p-tag-bg-color-default:    var(--web-color-offset);
    --p-tag-border-color-default:var(--web-color-offset);

    --p-tag-text-color-clickable:var(--color-neutral-60);
    --p-tag-bg-color-clickable:  var(--color-neutral-5);
    --p-tag-border-color-clickable:var(--color-neutral-10);

    --p-tag-text-color-hover:    var(--color-neutral-70);
    --p-tag-bg-color-hover:      var(--color-neutral-10);
    --p-tag-border-color-hover:  var(--p-tag-bg-color-hover);

    --p-tag-text-color-active:   var(--color-neutral-70);
    --p-tag-bg-color-active:     var(--color-neutral-15);
    --p-tag-border-color-active: var(--p-tag-bg-color-active);

    --p-tag-text-color-selected:   var(--p-tag-text-color-clickable);
    --p-tag-bg-color-selected:     var(--p-tag-bg-color-clickable);
    --p-tag-border-color-selected: var(--color-neutral-50);

    --p-tag-text-color-disabled:   var(--color-neutral-20);
    --p-tag-bg-color-disabled:     var(--color-neutral-5);
    --p-tag-border-color-disabled: var(--color-neutral-10);
  }

  .inline-tag {
    --p-inline-tag-text-color-default:  var(--p-text-color, var(--color-neutral-60));
    --p-inline-tag-bg-color-default:    var(--color-neutral-10);
  }
  .heading-level-5 { --p-heading-text-color:var(--color-neutral-80); }
  .table {
    --p-table-bg-color: var(--color-neutral-0);
    --p-table-bg-color-focus: var(--color-neutral-5);
    //--p-table-bg-even-row-color: var(--color-neutral-0);
    --p-table-border-color: var(--color-neutral-10);
    --p-tbody-color-text: var(--color-neutral-60);
    box-shadow: none;
    border-radius: 16px 0 16px 0;
  }

  .e-pink-input-light {
    --p-text-color-default: var(--color-neutral-60);
    --p-bg-color-default: var(--color-neutral-0);
    --p-border-color-default: var(--color-neutral-15);

    --p-text-color-hover: var(--p-text-color-default);
    --p-bg-color-hover: var(--p-bg-color-default);
    --p-border-color-hover: var(--color-neutral-20);

    --p-text-color-focus: var(--p-text-color-default);
    --p-bg-color-focus: var(--p-bg-color-default);
    --p-border-color-focus: var(--color-neutral-20);

    --p-text-color-readonly: var(--color-neutral-20);
    --p-bg-color-readonly: var(--color-neutral-5);
    --p-border-color-readonly: var(--p-border-color-default);

    --p-text-color-disabled: var(--color-neutral-20);
    --p-bg-color-disabled: var(--color-neutral-0);
    --p-border-color-disabled: var(--p-border-color-default);
  }


  .hero {
    display: grid;
    grid-template-columns: 30.0625rem minmax(0, 1fr);
    gap: 5vw;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 1023px) {
      display: block;

      overflow: hidden;
      gap: 2rem;

      > :first-child {
        max-width: 40rem;
        margin-inline: auto;
      }

      > :nth-child(2) {
        scale: 1;
        width: 100%;
        height: 24rem;
        position: relative;

        img {
          position: absolute;
          display: block;
          width: 40rem;

          left: 50%;
          top: 50%;
          transform: translate(-30%, -50%);

          max-block-size: unset;
          max-inline-size: unset;
        }
      }
    }
  }
  .hero-flipped {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 30.0625rem;
    gap: 5vw;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 1023px) {
      display: block;

      overflow: hidden;
      gap: 2rem;

      > :first-child {
        max-width: 40rem;
        margin-inline: auto;
      }

      > :nth-child(2) {
        scale: 1;
        width: 100%;
        height: 24rem;
        position: relative;

        img {
          position: absolute;
          display: block;
          width: 40rem;

          left: 50%;
          top: 50%;
          transform: translate(-30%, -50%);

          max-block-size: unset;
          max-inline-size: unset;
        }
      }
    }
  }

  .absolute-container {
    position: absolute;
    width: 1720px;
    min-height: 100%;
    pointer-events: none;
    left: 50%;
    transform: translateX(-50%);
  }

  .pink-gradient {
    width: 842px;
    height: 719px;
    flex-shrink: 0;

    border-radius: 842px;
    opacity: 0.4;
    background: radial-gradient(50% 46.73% at 50% 53.27%, #fe9567 28.17%, #fd366e 59.38%);
    filter: blur(150px);

    position: absolute;
    right: -250px;
    top: 00px;
  }

  .green-gradient {
    border-radius: 771px;
    opacity: 0.3;
    background: radial-gradient(49.55% 43.54% at 47% 50.69%, #e7f8f7 0%, #85dbd8 100%);
    filter: blur(150px);
    width: 571px;
    height: 771px;
    position: absolute;

    left: -200px;
    bottom: -300px;
  }

  .web-multi-columns-1 {
    .web-card {
      border: 1px solid hsl(var(--web-color-offset));
    }
    @media (max-width: 1235px) {
      --p-col-gap: 2rem !important;
      .web-card {
        rotate: none !important;
      }
    }
  }
</style>

