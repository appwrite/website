<script lang="ts">
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { Main } from '$lib/layouts';
    import { TITLE_SUFFIX } from '$routes/titles';
    import FooterNav from '../../lib/components/FooterNav.svelte';
    import MainFooter from '../../lib/components/MainFooter.svelte';
    import { socials } from '$lib/constants';

    let personName = '';
    let personEmail = '';
    let projectName = '';
    let githubUrl = '';
    let websiteUrl = '';
    let license = '';
    let message = '';

    let error: string | undefined;
    let submitted = false;
    let submitting = true;

    async function handleSubmit() {
        error = undefined;
        submitting = true;
        const response = await fetch('https://growth.appwrite.io/v1/conversations/oss', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                personName,
                personEmail,
                projectName,
                githubUrl,
                websiteUrl,
                license,
                message
            })
        });
        if (response.status >= 400) {
            error = response.status >= 500 ? 'Server Error.' : 'Error submitting form.';
            return;
        }
        submitted = true;
        submitting = false;
    }

    const title = 'OSS program' + TITLE_SUFFIX;
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
        <div class="web-big-padding-section-level-1">
            <div class="web-big-padding-section-level-2">
                <div class="web-container">
                    <div class="web-grid-1-1-opt-2 u-gap-32">
                        <div>
                            <div
                                class="web-u-max-inline-size-none-mobile"
                                class:web-u-max-width-380={!submitted}
                            >
                                {#if submitted}
                                    <section class="u-flex-vertical web-u-gap-20">
                                        <h1 class="web-display web-u-color-text-primary">
                                            Thank you for your application
                                        </h1>
                                        <p class="web-description web-u-padding-block-end-32">
                                            Your application has been sent. Our team will try to get
                                            back to you as soon as possible.
                                        </p>
                                        <a
                                            href="/"
                                            class="web-button is-secondary web-u-margin-block-end-32"
                                        >
                                            <span>Back to homepage</span>
                                        </a>
                                    </section>
                                {:else}
                                    <section class="u-flex-vertical web-u-gap-20">
                                        <h1 class="web-display web-u-color-text-primary">
                                            OSS program
                                        </h1>
                                        <p class="web-description web-u-padding-block-end-40">
                                            Apply to the OSS Program by filling out this form. Our
                                            team will reach out to you to confirm your application
                                            was accepted.
                                        </p>
                                    </section>
                                {/if}
                                <section
                                    class="u-flex-vertical u-gap-12 web-u-padding-block-start-40 web-u-sep-block-start"
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
                                            <div class="u-block">Full name</div>
                                            <input
                                                required
                                                class="web-input-text"
                                                type="text"
                                                placeholder="Walter O'Brien"
                                                aria-label="Full name"
                                                bind:value={personName}
                                            />
                                        </li>
                                        <li class="web-form-item u-flex-vertical u-gap-4">
                                            <div class="u-block">Email address</div>
                                            <input
                                                required
                                                class="web-input-text"
                                                type="email"
                                                placeholder="walter@company.com"
                                                aria-label="Email address"
                                                bind:value={personEmail}
                                            />
                                        </li>
                                        <li
                                            class="web-form-item u-flex-vertical u-gap-4 is-column-span-2"
                                        >
                                            <div class="u-block">Project or company name</div>
                                            <input
                                                required
                                                class="web-input-text"
                                                type="text"
                                                placeholder="My app"
                                                aria-label="Project or company name"
                                                bind:value={projectName}
                                            />
                                        </li>
                                        <li class="web-form-item u-flex-vertical u-gap-4">
                                            <div class="u-block">GitHub URL</div>
                                            <input
                                                required
                                                class="web-input-text"
                                                type="url"
                                                placeholder="https://github.com/myapp"
                                                aria-label="GitHub URL"
                                                bind:value={githubUrl}
                                            />
                                        </li>
                                        <li class="web-form-item u-flex-vertical u-gap-4">
                                            <div class="u-block">Website URL</div>
                                            <input
                                                class="web-input-text"
                                                type="url"
                                                placeholder="https://myapp.com"
                                                aria-label="Website URL"
                                                bind:value={websiteUrl}
                                            />
                                        </li>
                                        <li
                                            class="web-form-item u-flex-vertical u-gap-4 is-column-span-2"
                                        >
                                            <div class="u-block">OSS license</div>
                                            <input
                                                class="web-input-text"
                                                type="text"
                                                placeholder="MIT"
                                                aria-label="OSS license"
                                                bind:value={license}
                                            />
                                        </li>
                                        <li
                                            class="web-form-item u-flex-vertical u-gap-4 is-column-span-2"
                                        >
                                            <div class="u-block">Message</div>
                                            <textarea
                                                required
                                                name="message"
                                                class="web-input-text"
                                                placeholder="Hey, I'm interested in joining the OSS program!"
                                                aria-label="Message"
                                                bind:value={message}
                                            />
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
                                        disabled={submitting}
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

    <div class="web-container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>
