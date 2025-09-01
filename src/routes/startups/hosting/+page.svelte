<script lang="ts">
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import { Main } from '$lib/layouts';
    import { TITLE_SUFFIX } from '$routes/titles';
    import FooterNav from '../../../lib/components/FooterNav.svelte';
    import MainFooter from '../../../lib/components/MainFooter.svelte';
    import { loggedIn, user } from '$lib/utils/console';
    import { PUBLIC_GROWTH_ENDPOINT } from '$env/static/public';
    import { getReferrerAndUtmSource } from '$lib/utils/utm';
    import LogoList from '$lib/components/LogoList.svelte';
    import Scale from '$routes/(marketing)/(components)/scale.svelte';
    import { Button } from '$lib/components/ui';
    import { trackEvent } from '$lib/actions/analytics';
    import Features from '$routes/(marketing)/(components)/features.svelte';

    let email = '';
    let firstName = '';
    let lastName = '';
    let companyName = '';
    let companyWebsite = '';

    let submitted = false;
    let submitting = false;
    let error: string | undefined;

    async function handleSubmit() {
        error = undefined;
        submitting = true;

        const cloudEmail = loggedIn && $user?.email ? $user.email : undefined;

        const response = await fetch(`${PUBLIC_GROWTH_ENDPOINT}/conversations/startups`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                subject: companyName,
                cloudEmail,
                companyName,
                companyWebsite,
                firstName,
                lastName,
                ...getReferrerAndUtmSource()
            })
        });

        trackEvent('startups-form-submit');

        submitting = false;
        if (response.status >= 400) {
            error = response.status >= 500 ? 'Server Error.' : 'Error submitting form.';
            return;
        }

        submitted = true;
    }

    const title = 'Startups' + TITLE_SUFFIX;
    const description =
        "Join Appwrite's Startups program and benefit from discounts and Cloud credits to cut your cloud costs.";
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
        <div id="form" class="web-big-padding-section-level-1 overflow-hidden p-0">
            <div class="web-big-padding-section-level-2 is-margin-replace-padding relative">
                <div class="relative">
                    <div class="web-container relative">
                        <!-- before submit -->
                        <div class="relative z-1 grid grid-cols-1 gap-16 md:grid-cols-2">
                            <div>
                                {#if submitted}
                                    <section class="flex flex-col gap-5">
                                        <h1 class="web-display web-u-color-text-primary">
                                            Thank you for your submission.
                                        </h1>
                                        <p class="text-description">
                                            Your details for the Startups program have been sent
                                            successfully. Our team will get back to you as soon as
                                            possible.
                                        </p>
                                        <Button variant="secondary" href="/pricing" class="mb-8">
                                            <span>Back to pricing</span>
                                        </Button>
                                    </section>
                                {:else}
                                    <section class="flex flex-col gap-5">
                                        <h1 class="text-display font-aeonik-pro text-primary">
                                            Appwrite for Startups
                                        </h1>
                                        <p class="text-description">
                                            Startups develop, deploy, and Scale with Appwrite.
                                            The program ensures you get the all-in-one development
                                            platform you need so that you can focus on innovation.
                                            Including Startup web (app) hosting.
                                            Reduce complexity, accelerate development, and launch faster.
                                            <br />
                                            <br />
                                            Join the Appwrite Startups program and benefit from reduced 
                                            costs and faster development.
                                        </p>
                                    </section>
                                {/if}
                            </div>
                            {#if !submitted}
                                <form
                                    method="post"
                                    on:submit|preventDefault={handleSubmit}
                                    class="mt-4 flex flex-col gap-4 lg:mt-0"
                                >
                                    <div class="flex w-full">
                                        <ul class="web-form-list grid w-full gap-4 md:grid-cols-2">
                                            <li class="web-form-item">
                                                <label class="block" for="firstName"
                                                    >First name</label
                                                >
                                                <input
                                                    required
                                                    class="web-input-text"
                                                    type="text"
                                                    placeholder="Walter"
                                                    id="firstName"
                                                    bind:value={firstName}
                                                />
                                            </li>
                                            <li class="web-form-item">
                                                <label class="block" for="lastName">Last name</label
                                                >
                                                <input
                                                    required
                                                    class="web-input-text"
                                                    type="text"
                                                    placeholder="O'Brien"
                                                    id="lastName"
                                                    bind:value={lastName}
                                                />
                                            </li>
                                            <li class="web-form-item">
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
                                            <li class="web-form-item">
                                                <label class="block" for="companyName"
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
                                            <li class="web-form-item flex-col gap-1">
                                                <label class="block" for="companyWebsite"
                                                    >Company website</label
                                                >
                                                <input
                                                    required
                                                    pattern="^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+(\/.*)?$"
                                                    class="web-input-text w-full"
                                                    type="text"
                                                    placeholder="appwrite.io or https://appwrite.io"
                                                    id="companyWebsite"
                                                    bind:value={companyWebsite}
                                                    title="Enter a valid URL like example.com, example.org, or https://site.co.uk"
                                                    minlength="4"
                                                    maxlength="200"
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
                                        <Button
                                            type="submit"
                                            disabled={submitting}
                                            class="u-cross-child-center web-u-inline-width-100-percent-mobile-break1 cursor-pointer"
                                        >
                                            <span>Submit</span>
                                        </Button>
                                    </div>
                                </form>
                            {/if}
                        </div>
                    </div>
                </div>
            </div>
            <Scale
                testimonial={{
                    name: 'Ryan O’Connor',
                    title: 'Founder',
                    company: 'K-Collect',
                    image: '/images/testimonials/ryan-oconner-testimonial.png'
                }}
                theme="dark"
            >
                The switch to using Appwrite brought
                <span class="text-primary">infinite value that I'm still discovering today.</span>
            </Scale>
            <LogoList />
            <Features theme="dark" class="-mt-24" />
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
