<script lang="ts">
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { Main } from '$lib/layouts';
    import { TITLE_SUFFIX } from '$routes/titles';
    import FooterNav from '../../lib/components/FooterNav.svelte';
    import MainFooter from '../../lib/components/MainFooter.svelte';
    import { socials } from '$lib/constants';
    import { PUBLIC_GROWTH_ENDPOINT } from '$env/static/public';
    import { getReferrerAndUtmSource } from '$lib/utils/utm';

    let email = '';
    let firstName = '';
    let subject = '';
    let message = '';

    let submitted = false;
    let submitting = false;
    let error: string | undefined;

    async function handleSubmit() {
        error = undefined;
        submitting = true;

        const response = await fetch(`${PUBLIC_GROWTH_ENDPOINT}/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                firstName,
                subject,
                message,
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

    const title = 'Contact us' + TITLE_SUFFIX;
    const description =
        'Fill in this short form to get in touch with the Appwrite team. Questions, feature requests or bug reports - all input is welcome!';
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
    <enhanced:img src="./bg.png" alt="" />
</div>

<Main>
    <div class="web-big-padding-section">
        <div class="py-10">
            <div class="web-big-padding-section-level-2">
                <div class="container">
                    <div class="web-grid-1-1-opt-2 gap-8">
                        <div>
                            <div
                                class="web-u-max-inline-size-none-mobile"
                                class:web-u-max-width-380={!submitted}
                            >
                                {#if submitted}
                                    <section class="flex flex-col gap-5">
                                        <h1 class="text-display font-aeonik-pro text-primary">
                                            Thank you for your message
                                        </h1>
                                        <p class="text-description web-u-padding-block-end-32">
                                            Your message has been sent successfully. We appreciate
                                            your feedback, our team will try to get back to you as
                                            soon as possible.
                                        </p>
                                        <a
                                            href="/"
                                            class="web-button is-secondary web-u-margin-block-end-32"
                                        >
                                            <span>Back to homepage</span>
                                        </a>
                                    </section>
                                {:else}
                                    <section class="flex flex-col gap-5">
                                        <h1 class="text-display font-aeonik-pro text-primary">
                                            Contact Us
                                        </h1>
                                        <p class="text-description web-u-padding-block-end-40">
                                            We'd love your input: questions, feature requests, bugs
                                            or compliments.
                                        </p>
                                    </section>
                                {/if}
                                <section
                                    class="web-u-padding-block-start-40 web-u-sep-block-start flex flex-col gap-3"
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
                                                    <span class={social.icon} aria-hidden="true"
                                                    ></span>
                                                </a>
                                            </li>
                                        {/each}
                                    </ul>
                                </section>
                                <div
                                    class="web-is-only-mobile web-u-margin-block-start-40 web-u-padding-block-start-40 web-u-sep-block-start"
                                ></div>
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
                                        class="web-form-list web-u-max-width-580 web-u-max-inline-size-none-mobile grid w-full gap-4 md:grid-cols-2"
                                    >
                                        <li class="web-form-item">
                                            <input
                                                required
                                                class="web-input-text w-full"
                                                type="text"
                                                placeholder="Name"
                                                aria-label="Name"
                                                bind:value={firstName}
                                            />
                                        </li>
                                        <li class="web-form-item">
                                            <input
                                                required
                                                class="web-input-text w-full"
                                                type="email"
                                                placeholder="Email address"
                                                aria-label="Email address"
                                                bind:value={email}
                                            />
                                        </li>
                                        <li class="web-form-item col-span-2">
                                            <input
                                                required
                                                class="web-input-text w-full"
                                                type="text"
                                                name="subject"
                                                placeholder="Subject"
                                                aria-label="Subject"
                                                bind:value={subject}
                                            />
                                        </li>
                                        <li class="web-form-item col-span-2">
                                            <textarea
                                                required
                                                name="message"
                                                class="web-input-text w-full"
                                                placeholder="Your message"
                                                aria-label="Message"
                                                bind:value={message}
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
                                    <!-- <p class="text-caption web-u-max-width-380">
										This form is protected by reCAPTCHA, and the Google <a
											class="web-link"
											href="/privacy"
											target="_blank" rel="noopener noreferrer">Privacy Policy</a
										>
										and <a class="web-link" href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
									</p> -->
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
            </div>
        </div>
    </div>

    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>
