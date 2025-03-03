<script lang="ts">
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import { Main } from '$lib/layouts';
    import { TITLE_SUFFIX } from '$routes/titles';
    import FooterNav from '../../../lib/components/FooterNav.svelte';
    import MainFooter from '../../../lib/components/MainFooter.svelte';
    import { loggedIn, user } from '$lib/utils/console';
    import { PUBLIC_GROWTH_ENDPOINT } from '$env/static/public';
    import { getReferrerAndUtmSource } from '$lib/utils/utm';

    let email = '';
    let name = '';
    let companyName = '';
    let companySize: string | null = null;
    let companyWebsite = '';
    let useCase = '';

    let submitted = false;
    let submitting = true;
    let error: string | undefined;

    async function handleSubmit() {
        error = undefined;
        submitting = true;
        const subject = `Enterprise Plan Application: ${companyName}`;

        const cloudEmail = loggedIn && $user?.email ? $user.email : undefined;

        const response = await fetch(`${PUBLIC_GROWTH_ENDPOINT}/feedback/sales`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                subject,
                cloudEmail,
                companyName,
                companySize,
                companyWebsite,
                firstName: name,
                message: useCase,
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

    const title = 'Enterprise' + TITLE_SUFFIX;
    const description =
        "Want to learn more about Appwrite's Enterprise plan? Send us a message, and we'll propose a pricing solution that fits your unique use case.";
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

<div class="absolute" style="pointer-events:none;">
    <enhanced:img src="../bg.png" alt="" />
</div>

<Main>
    <div class="web-big-padding-section">
        <div id="form" class="web-big-padding-section-level-1 u-padding-0 u-overflow-hidden">
            <div class="web-big-padding-section-level-2 is-margin-replace-padding relative">
                <div class="relative">
                    <div class="web-container relative">
                        <!-- before submit -->
                        <div class="u-z-index-1 web-grid-1-1-opt-2 u-gap-32 e-u-row-gap-0 relative">
                            <div>
                                <div
                                    class="web-u-max-inline-size-none-mobile"
                                    class:web-u-max-width-380={!submitted}
                                >
                                    {#if submitted}
                                        <section class="flex flex-col gap-5">
                                            <h1 class="web-display web-u-color-text-primary">
                                                Thank you for your submission
                                            </h1>
                                            <p class="web-description web-u-padding-block-end-32">
                                                Your details for the enterprise plan have been sent
                                                successfully. Our team will get back to you as soon
                                                as possible.
                                            </p>
                                            <a
                                                href="/pricing"
                                                class="web-button is-secondary web-u-margin-block-end-32"
                                            >
                                                <span>Back to pricing</span>
                                            </a>
                                        </section>
                                    {:else}
                                        <section class="flex flex-col gap-5">
                                            <h1 class="web-display web-u-color-text-primary">
                                                Enterprise Plan
                                            </h1>
                                            <p class="web-description">
                                                Interested in a pricing solution that fits your
                                                specific requirements? Let’s talk.
                                            </p>
                                        </section>
                                    {/if}
                                </div>
                            </div>
                            {#if !submitted}
                                <form
                                    method="post"
                                    on:submit|preventDefault={handleSubmit}
                                    class="mt-4 flex flex-col gap-4 lg:mt-0"
                                >
                                    <div class="flex justify-end">
                                        <ul
                                            class="web-form-list web-u-max-width-580 web-u-max-inline-size-none-mobile grid w-full gap-4 md:grid-cols-2"
                                        >
                                            <li class="web-form-item">
                                                <label class="u-block" for="name"
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
                                            <li class="web-form-item">
                                                <label class="u-block" for="workEmail"
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
                                            <li class="web-form-item">
                                                <label class="u-block" for="companyName"
                                                    >Company name</label
                                                >
                                                <input
                                                    required
                                                    class="web-input-text w-full"
                                                    type="text"
                                                    placeholder="Acme Corp"
                                                    id="companyName"
                                                    bind:value={companyName}
                                                />
                                            </li>
                                            <li class="web-form-item">
                                                <label class="u-block" for="companySize"
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
                                                    />
                                                </div>
                                            </li>
                                            <li class="web-form-item flex-col gap-1 md:col-span-2">
                                                <label class="u-block" for="companyWebsite"
                                                    >Company website</label
                                                >
                                                <input
                                                    required
                                                    class="web-input-text w-full"
                                                    type="url"
                                                    placeholder="https://appwrite.io"
                                                    id="companyWebsite"
                                                    bind:value={companyWebsite}
                                                />
                                            </li>
                                            <li
                                                class="web-form-item flex-col gap-1 sm:col-span-1 md:col-span-2"
                                            >
                                                <label class="u-block" for="use-case"
                                                    >Please share more information about your use
                                                    case</label
                                                >
                                                <textarea
                                                    required
                                                    class="web-input-text w-full"
                                                    id="use-case"
                                                    placeholder="Describe your use case and how our Enterprise Plan can support it"
                                                    bind:value={useCase}
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        class="flex flex-col items-center justify-between gap-4 sm:flex-col md:flex-col lg:flex-row"
                                    >
                                        <p
                                            class="web-caption-400 web-u-max-width-380 self-start lg:self-center"
                                        >
                                            {#if error}
                                                {error}
                                            {/if}
                                        </p>
                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            class="web-button u-cross-child-center web-u-inline-width-100-percent-mobile-break1 cursor-pointer"
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
            <div class="container">
                <FooterNav />
                <MainFooter />
            </div>
        </div>
    </div>
</Main>

<style>
    .web-form-item {
        gap: 4px;
        display: flex;
        flex-direction: column;
    }
</style>
