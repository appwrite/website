<script lang="ts">
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { Main } from '$lib/layouts';
    import { TITLE_SUFFIX } from '$routes/titles';
    import FooterNav from '../../../lib/components/FooterNav.svelte';
    import MainFooter from '../../../lib/components/MainFooter.svelte';
    import { socials } from '$lib/constants';
    import BlobPink from "$routes/startups/(assets)/blob-pink.svg";
    import BlobPinkMobile from "$routes/startups/(assets)/blob-pink-mobile.svg";

    let email = '';
    let firstName = '';
    let subject = '';
    let message = '';
    let error: string | undefined;
    let submitted = false;

    async function handleSubmit() {
        error = undefined;
        const response = await fetch('https://growth.appwrite.io/v1/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                firstName,
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
    <enhanced:img src="./bg.png" alt="" />
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
                                        <section class="u-flex-vertical web-u-gap-20">
                                            <h4 class="web-display web-u-color-text-primary">
                                                Become a partner
                                            </h4>
                                            <p class="web-description">
                                                Apply to the Partners Program by filling out this form. Our team will reach out to you to confirm your application was accepted.
                                            </p>
                                        </section>
                                        <section
                                                class="u-flex-vertical u-gap-12 u-padding-block-start-40 u-margin-block-start-40 web-u-sep-block-start"
                                        >
                                            <h2 class="web-label web-u-color-text-primary">Follow us</h2>
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
                                                            <span class={social.icon} aria-hidden="true" />
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
                                {#if submitted}
                                    <div
                                            class="u-position-relative u-z-index-1 u-flex-vertical u-gap-8 u-text-center web-u-max-width-380 web-u-max-inline-size-none-mobile u-margin-inline-auto"
                                    >
                                        <h6
                                                class="web-label u-flex u-main-center u-cross-center u-gap-8 e-mobile-fix-1"
                                        >
                                            <img
                                                    class="u-flex-shrink-0"
                                                    src="/images/icons/colored/check.svg"
                                                    alt=""
                                            />
                                            <span class="web-u-color-text-primary"
                                            >Thank you for applying</span
                                            >
                                        </h6>
                                        <p class="web-main-body-400">
                                            Your application has been sent successfully. Our team will try to get back to you as soon as possible.
                                        </p>
                                        <button
                                                on:click={resetForm}
                                                class="web-button is-secondary is-full-width-mobile u-block u-margin-inline-auto u-margin-block-start-16"
                                        >Back to Integrations</button
                                        >
                                    </div>
                                {:else}
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
                                                        <div class="u-block">Name of representative</div>
                                                        <input
                                                                required
                                                                class="web-input-text"
                                                                type="text"
                                                                placeholder="Enter name"
                                                        />
                                                </li>
                                                <li class="web-form-item u-flex-vertical u-gap-4">
                                                        <div class="u-block">Work email address</div>
                                                        <input
                                                                required
                                                                class="web-input-text"
                                                                type="email"
                                                                placeholder="Enter email"
                                                        />
                                                </li>
                                                <li class="web-form-item u-flex-vertical u-gap-4">
                                                        <div class="u-block">Company name</div>
                                                        <input
                                                                required
                                                                class="web-input-text"
                                                                type="text"
                                                                name="company"
                                                                placeholder="Enter company name"
                                                        />
                                                </li>
                                                <li class="web-form-item u-flex-vertical u-gap-4">
                                                    <div class="u-block">Company size</div>
                                                    <select class="web-input-text">
                                                        <option>Select size</option>
                                                        <option>1-10</option>
                                                        <option>11-100</option>
                                                        <option>101-1000</option>
                                                        <option>1000+</option>
                                                    </select>
                                                </li>
                                                <li class="web-form-item is-column-span-2 u-flex-vertical u-gap-4">
                                                    <div class="u-block">Company website</div>
                                                    <input
                                                            required
                                                            class="web-input-text"
                                                            type="url"
                                                            placeholder="http://company.com"
                                                    />
                                                </li>
                                                <li class="web-form-item is-column-span-2 u-flex-vertical u-gap-4">
                                                    <div class="u-block">Have you already created an integration with Appwrite?</div>
                                                    <select class="web-input-text">
                                                        <option>Select</option>
                                                        <option>1-10</option>
                                                        <option>11-100</option>
                                                        <option>101-1000</option>
                                                        <option>1000+</option>
                                                    </select>
                                                </li>
                                                <li class="web-form-item is-column-span-2 u-flex-vertical u-gap-4">
                                                    <div class="u-block">Link to the product/company's brand assets</div>
                                                    <input
                                                            required
                                                            class="web-input-text"
                                                            type="url"
                                                            name="company-website"
                                                            placeholder="Enter url"
                                                    />
                                                </li>
                                                <li class="web-form-item is-column-span-2 u-flex-vertical u-gap-4">
                                                    <div class="u-block">Any other details you'd like to share with us?</div>
                                                    <textarea
                                                            required
                                                            class="web-input-text"
                                                            name="company-website"
                                                            placeholder="Enter your message"
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
                                                <span>Apply</span>
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

    <div class="web-container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>
