<script lang="ts">
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { Main } from '$lib/layouts';
    import { TITLE_SUFFIX } from '$routes/titles';
    import FooterNav from '../../../lib/components/FooterNav.svelte';
    import MainFooter from '../../../lib/components/MainFooter.svelte';
    import { socials } from '$lib/constants';
    import { anyify } from '$lib/utils/anyify';
    import Pink from './bg.png';
    import { getReferrerAndUtmSource } from '$lib/utils/utm';
    import { PUBLIC_GROWTH_ENDPOINT } from '$env/static/public';

    let email = '';
    let name = '';
    let companyName = '';
    let companySize: string | null = null;
    let companyWebsite = '';
    let integrationStatus: string | null = null;
    let linkToDocumentation = '';
    let productUrl = '';
    let extraDetails = '';
    let hasCreatedIntegration = false;

    let submitted = false;
    let submitting = false;
    let error: string | undefined;

    async function handleSubmit() {
        error = undefined;
        submitting = true;

        const response = await fetch(`${PUBLIC_GROWTH_ENDPOINT}/conversations/technology-partner`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                companyName,
                companySize,
                companyWebsite,
                integrationStatus,
                integrationDocs:
                    linkToDocumentation || 'N/A' /* fallback when integrationStatus is !== yes */,
                brandAssets: productUrl,
                extraDetails,
                ...getReferrerAndUtmSource()
            })
        });

        submitting = false;

        if (response.status >= 400) {
            error = response.status >= 500 ? 'Server Error.' : 'Error submitting form.';
            return;
        }

        submitted = true;
    }

    const title = 'Become a Technology Partner' + TITLE_SUFFIX;
    const description =
        "Want to integrate your app with Appwrite's API? Apply to our Technology Partners program by filling a short form.";
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';
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
</svelte:head>

<div class="absolute" style="pointer-events:none;">
    <img src={Pink} alt="" />
</div>

<Main>
    <div class="web-big-padding-section">
        <div id="form" class="overflow-hidden p-0 pt-10">
            <div class="relative pt-[7.5rem]">
                <div class="relative">
                    <div class="container relative">
                        <!-- before submit -->
                        <div class="web-grid-1-1-opt-2 e-u-row-gap-0 relative z-[1] gap-8">
                            <div>
                                <div
                                    class="web-u-max-inline-size-none-mobile"
                                    class:web-u-max-width-380={!submitted}
                                >
                                    {#if submitted}
                                        <section class="flex flex-col gap-5">
                                            <h1 class="text-display font-aeonik-pro text-primary">
                                                Thank you for applying
                                            </h1>
                                            <p class="text-description web-u-padding-block-end-32">
                                                Your application has been sent successfully. Our
                                                team will try to get back to you as soon as
                                                possible.
                                            </p>
                                            <a
                                                href="/integrations"
                                                class="web-button is-secondary web-u-margin-block-end-32"
                                            >
                                                <span>Back to integrations</span>
                                            </a>
                                        </section>
                                    {:else}
                                        <section class="flex flex-col gap-5">
                                            <h1 class="text-display font-aeonik-pro text-primary">
                                                Become a Technology Partner
                                            </h1>
                                            <p class="text-description">
                                                Apply to our Technology Partners Program by filling
                                                out this form. Our team will reach out to you to
                                                confirm your application was accepted.
                                            </p>
                                        </section>
                                    {/if}
                                    <section
                                        class="web-u-sep-block-start mt-10 flex flex-col gap-3 pt-10"
                                    >
                                        <h2 class="text-label text-primary">Follow us</h2>
                                        <ul class="flex gap-2">
                                            {#each socials as social}
                                                <li>
                                                    <a
                                                        href={social.link}
                                                        class="web-icon-button"
                                                        aria-label={social.label}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <span
                                                            class={social.icon}
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                </li>
                                            {/each}
                                        </ul>
                                    </section>
                                    <div
                                        class="web-is-only-mobile web-u-margin-block-start-40 web-u-padding-block-start-40 web-u-sep-block-start"
                                    />
                                </div>
                            </div>
                            {#if !submitted}
                                <form
                                    method="post"
                                    on:submit|preventDefault={handleSubmit}
                                    class="flex flex-col gap-4"
                                >
                                    <div class="flex justify-end">
                                        <ul
                                            class="web-form-list is-two-columns web-u-max-width-580 web-u-max-inline-size-none-mobile w-full gap-4"
                                        >
                                            <li class="web-form-item flex flex-col gap-1">
                                                <label class="block" for="name"
                                                    >Name of representative</label
                                                >
                                                <input
                                                    required
                                                    class="web-input-text"
                                                    type="text"
                                                    placeholder="Walter O'Brien"
                                                    id="name"
                                                    bind:value={name}
                                                />
                                            </li>
                                            <li class="web-form-item flex flex-col gap-1">
                                                <label class="block" for="workEmail"
                                                    >Work email address</label
                                                >
                                                <input
                                                    required
                                                    class="web-input-text"
                                                    type="email"
                                                    placeholder="walter@appwrite.io"
                                                    id="workEmail"
                                                    bind:value={email}
                                                />
                                            </li>
                                            <li class="web-form-item flex flex-col gap-1">
                                                <label class="block" for="companyName"
                                                    >Company name</label
                                                >
                                                <input
                                                    required
                                                    class="web-input-text"
                                                    type="text"
                                                    placeholder="Acme Corp"
                                                    id="companyName"
                                                    bind:value={companyName}
                                                />
                                            </li>
                                            <li class="web-form-item flex flex-col gap-1">
                                                <label class="block" for="companySize"
                                                    >Company size</label
                                                >

                                                <div class="relative">
                                                    <select
                                                        class="web-input-text w-full appearance-none"
                                                        id="companySize"
                                                        bind:value={companySize}
                                                    >
                                                        <option value={null}>Select size</option>
                                                        <option>1-10 employees</option>
                                                        <option>11-50 employees</option>
                                                        <option>51-200 employees</option>
                                                        <option>201-500 employees</option>
                                                        <option>501-1000 employees</option>
                                                        <option>1001-5000 employees</option>
                                                        <option>5000+ employees</option>
                                                    </select>
                                                    <span
                                                        class="icon-cheveron-down web-u-pointer-events-none absolute top-[11px] right-2"
                                                        aria-hidden="true"
                                                    ></span>
                                                </div>
                                            </li>
                                            <li
                                                class="web-form-item is-column-span-2 flex flex-col gap-1"
                                            >
                                                <label class="block" for="companyWebsite"
                                                    >Company website</label
                                                >
                                                <input
                                                    required
                                                    class="web-input-text"
                                                    type="url"
                                                    placeholder="https://appwrite.io"
                                                    id="companyWebsite"
                                                    bind:value={companyWebsite}
                                                />
                                            </li>
                                            <li
                                                class="web-form-item is-column-span-2 flex flex-col gap-1"
                                            >
                                                <label class="block" for="integration"
                                                    >Have you already created an integration with
                                                    Appwrite?</label
                                                >
                                                <div class="relative">
                                                    <select
                                                        class="web-input-text w-full appearance-none"
                                                        id="integration"
                                                        bind:value={integrationStatus}
                                                        on:change={(e) =>
                                                            anyify(e.target).value === 'yes'
                                                                ? (hasCreatedIntegration = true)
                                                                : (hasCreatedIntegration = false)}
                                                    >
                                                        <option value={null}>Select</option>
                                                        <option value="yes"
                                                            >Yes, we have already created an
                                                            integration</option
                                                        >
                                                        <option value="no"
                                                            >No, it is currently in the process of
                                                            being built</option
                                                        >
                                                        <option value="notYet"
                                                            >No, we have yet to start building</option
                                                        >
                                                    </select>
                                                    <span
                                                        class="icon-cheveron-down web-u-pointer-events-none absolute top-[11px] right-2"
                                                        aria-hidden="true"
                                                    ></span>
                                                </div>
                                            </li>
                                            {#if hasCreatedIntegration}
                                                <li
                                                    class="web-form-item is-column-span-2 flex flex-col gap-1"
                                                >
                                                    <label class="block" for="linkToDocumentation"
                                                        >Link to the integration's documentation</label
                                                    >
                                                    <input
                                                        required
                                                        class="web-input-text"
                                                        type="url"
                                                        placeholder="https://appwrite.io/docs"
                                                        id="linkToDocumentation"
                                                        bind:value={linkToDocumentation}
                                                    />
                                                </li>
                                            {/if}
                                            <li
                                                class="web-form-item is-column-span-2 flex flex-col gap-1"
                                            >
                                                <label class="block" for="productUrl"
                                                    >Link to the product/company's brand assets</label
                                                >
                                                <input
                                                    required
                                                    class="web-input-text"
                                                    type="url"
                                                    placeholder="https://appwrite.io/assets"
                                                    id="productUrl"
                                                    bind:value={productUrl}
                                                />
                                            </li>
                                            <li
                                                class="web-form-item is-column-span-2 flex flex-col gap-1"
                                            >
                                                <label class="block" for="details"
                                                    >Any other details you'd like to share with us?</label
                                                >
                                                <textarea
                                                    required
                                                    class="web-input-text"
                                                    placeholder="Your message"
                                                    id="details"
                                                    bind:value={extraDetails}
                                                ></textarea>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        class="web-u-flex-vertical-reverse-mobile flex justify-between gap-4"
                                    >
                                        <p class="text-caption web-u-max-width-380">
                                            {#if error}
                                                {error}
                                            {/if}
                                        </p>
                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            class="web-button web-u-inline-width-100-percent-mobile-break1 self-center"
                                        >
                                            <span>Submit</span>
                                        </button>
                                    </div>
                                </form>
                            {/if}
                        </div>
                    </div>
                    <div class="container">
                        <FooterNav />
                        <MainFooter />
                    </div>
                </div>
            </div>
        </div>
    </div>
</Main>
