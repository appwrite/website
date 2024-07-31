<script lang="ts">
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { Main } from '$lib/layouts';
    import { TITLE_SUFFIX } from '$routes/titles';
    import FooterNav from '../../../lib/components/FooterNav.svelte';
    import MainFooter from '../../../lib/components/MainFooter.svelte';
    import { socials } from '$lib/constants';
    import { anyify } from '$lib/utils/anyify';
    //import BlobPink from "$routes/startups/(assets)/blob-pink.svg";
    // import BlobPinkMobile from "$routes/startups/(assets)/blob-pink-mobile.svg";
    import Pink from './bg.png';

    let email = '';
    let name = '';
    let companyName = '';
    let companySize: string | null = null;
    let companyWebsite = '';
    let integrationStatus: string | null = null;
    let linkToDocumentation = '';
    let productUrl = '';
    let extraDetails = '';
    let subject = '';
    let message = '';
    let hasCreatedIntegration = false;
    let error: string | undefined;
    let submitted = false;

    async function handleSubmit() {
        error = undefined;
        message = `Name of representative: ${name}\n\nWork Email: ${email}\n\nCompany Name: ${companyName}\n\nCompany Size: ${companySize}\n\nCompany Website: ${companyWebsite}\n\nIntegration status: ${integrationStatus}\n\nLink to Documentation: ${linkToDocumentation}\n\nLink to product/company assets: ${productUrl}\n\nDetails: ${extraDetails}`;
        subject = `Technology Partner Application: ${companyName}`
        
        const response = await fetch('https://growth.appwrite.io/v1/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                firstName: name,
                subject,
                message
            })
        });
        if (response.status >= 400) {
            error = response.status >= 500 ? 'Server Error.' : 'Error submitting form.';
            return;
        }

        submitted = true;
    }

    const title = 'Contact us' + TITLE_SUFFIX;
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

<div class="u-position-absolute" style="pointer-events:none;">
    <img src={Pink} alt="" />
</div>

<Main>
    <div class="web-big-padding-section">
        <div id="form" class="web-big-padding-section-level-1 u-padding-0 u-overflow-hidden">
            <div
                class="web-big-padding-section-level-2 is-margin-replace-padding u-position-relative"
            >
                <div class="u-position-relative">
                    <div class="web-container u-position-relative">
                        <!-- before submit -->
                        <div
                            class="u-position-relative u-z-index-1 web-grid-1-1-opt-2 u-gap-32 e-u-row-gap-0"
                        >
                            <div>
                                <div
                                    class="web-u-max-inline-size-none-mobile"
                                    class:web-u-max-width-380={!submitted}
                                >
                                    {#if submitted}
                                        <section class="u-flex-vertical web-u-gap-20">
                                            <h1 class="web-display web-u-color-text-primary">
                                                Thank you for applying
                                            </h1>
                                            <p class="web-description web-u-padding-block-end-32">
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
                                        <section class="u-flex-vertical web-u-gap-20">
                                            <h4 class="web-display web-u-color-text-primary">
                                                Become a partner
                                            </h4>
                                            <p class="web-description">
                                                Apply to the Partners Program by filling out this
                                                form. Our team will reach out to you to confirm your
                                                application was accepted.
                                            </p>
                                        </section>
                                    {/if}
                                    <section
                                        class="u-flex-vertical u-gap-12 u-padding-block-start-40 u-margin-block-start-40 web-u-sep-block-start"
                                    >
                                        <h2 class="web-label web-u-color-text-primary">
                                            Follow us
                                        </h2>
                                        <ul class="u-flex u-gap-8">
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
                                    class="u-flex-vertical u-gap-16"
                                >
                                    <div class="u-flex u-main-end">
                                        <ul
                                            class="web-form-list is-two-columns u-gap-16 u-width-full-line web-u-max-width-580 web-u-max-inline-size-none-mobile"
                                        >
                                            <li class="web-form-item u-flex-vertical u-gap-4">
                                                <label class="u-block" for="name"
                                                    >Name of representative</label
                                                >
                                                <input
                                                    required
                                                    class="web-input-text"
                                                    type="text"
                                                    placeholder="Enter name"
                                                    id="name"
                                                    bind:value={name}
                                                />
                                            </li>
                                            <li class="web-form-item u-flex-vertical u-gap-4">
                                                <label class="u-block" for="workEmail"
                                                    >Work email address</label
                                                >
                                                <input
                                                    required
                                                    class="web-input-text"
                                                    type="email"
                                                    placeholder="Enter email"
                                                    id="workEmail"
                                                    bind:value={email}
                                                />
                                            </li>
                                            <li class="web-form-item u-flex-vertical u-gap-4">
                                                <label class="u-block" for="companyName"
                                                    >Company name</label
                                                >
                                                <input
                                                    required
                                                    class="web-input-text"
                                                    type="text"
                                                    placeholder="Enter company name"
                                                    id="companyName"
                                                    bind:value={companyName}
                                                />
                                            </li>
                                            <li class="web-form-item u-flex-vertical u-gap-4">
                                                <label class="u-block" for="companySize"
                                                    >Company size</label
                                                >

                                                <div class="u-position-relative">
                                                    <select
                                                        class="web-input-text"
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
                                                        class="icon-cheveron-down u-position-absolute u-inset-inline-end-8 u-inset-block-start-8 web-u-pointer-events-none"
                                                        aria-hidden="true"
                                                    ></span>
                                                </div>
                                            </li>
                                            <li
                                                class="web-form-item is-column-span-2 u-flex-vertical u-gap-4"
                                            >
                                                <label class="u-block" for="companyWebsite"
                                                    >Company website</label
                                                >
                                                <input
                                                    required
                                                    class="web-input-text"
                                                    type="url"
                                                    placeholder="http://company.com"
                                                    id="companyWebsite"
                                                    bind:value={companyWebsite}
                                                />
                                            </li>
                                            <li
                                                class="web-form-item is-column-span-2 u-flex-vertical u-gap-4"
                                            >
                                                <label class="u-block" for="integration"
                                                    >Have you already created an integration with
                                                    Appwrite?</label
                                                >
                                                <div class="u-position-relative">
                                                    <select
                                                        class="web-input-text"
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
                                                        class="icon-cheveron-down u-position-absolute u-inset-inline-end-8 u-inset-block-start-8 web-u-pointer-events-none"
                                                        aria-hidden="true"
                                                    ></span>
                                                </div>
                                            </li>
                                            {#if hasCreatedIntegration}
                                                <li
                                                    class="web-form-item is-column-span-2 u-flex-vertical u-gap-4"
                                                >
                                                    <label class="u-block" for="linkToDocumentation"
                                                        >Link to the integration's documentation</label
                                                    >
                                                    <input
                                                        required
                                                        class="web-input-text"
                                                        type="url"
                                                        placeholder="Enter url"
                                                        id="linkToDocumentation"
                                                        bind:value={linkToDocumentation}
                                                    />
                                                </li>
                                            {/if}
                                            <li
                                                class="web-form-item is-column-span-2 u-flex-vertical u-gap-4"
                                            >
                                                <label class="u-block" for="productUrl"
                                                    >Link to the product/company's brand assets</label
                                                >
                                                <input
                                                    required
                                                    class="web-input-text"
                                                    type="url"
                                                    placeholder="Enter url"
                                                    id="productUrl"
                                                    bind:value={productUrl}
                                                />
                                            </li>
                                            <li
                                                class="web-form-item is-column-span-2 u-flex-vertical u-gap-4"
                                            >
                                                <label class="u-block" for="details"
                                                    >Any other details you'd like to share with us?</label
                                                >
                                                <textarea
                                                    required
                                                    class="web-input-text"
                                                    placeholder="Enter your message"
                                                    id="details"
                                                    bind:value={extraDetails}
                                                ></textarea>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        class="u-flex u-gap-16 u-main-space-between web-u-flex-vertical-reverse-mobile"
                                    >
                                        <p class="web-caption-400 web-u-max-width-380">
                                            {#if error}
                                                {error}
                                            {/if}
                                        </p>
                                        <button
                                            type="submit"
                                            class="web-button u-cross-child-center web-u-inline-width-100-percent-mobile-break1"
                                        >
                                            <span>Submit</span>
                                        </button>
                                    </div>
                                </form>
                            {/if}
                        </div>
                    </div>
                    <div class="web-container">
                        <FooterNav />
                        <MainFooter />
                    </div>
                </div>
            </div>
        </div>
    </div>
</Main>
