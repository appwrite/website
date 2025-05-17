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
    import Scale from '$routes/(experiments)/new-homepage/(components)/scale.svelte';
    import { Button } from '$lib/components/ui';

    let email = '';
    let firstName = '';
    let lastName = '';
    let companyName = '';
    let companySize: string | null = null;
    let companyWebsite = '';
    let useCase = '';

    let submitted = false;
    let submitting = false;
    let error: string | undefined;

    async function handleSubmit() {
        error = undefined;
        submitting = true;

        const cloudEmail = loggedIn && $user?.email ? $user.email : undefined;

        const response = await fetch(`${PUBLIC_GROWTH_ENDPOINT}/feedback/sales/enterprise`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                subject: companyName,
                cloudEmail,
                companyName,
                companySize,
                companyWebsite,
                firstName,
                lastName,
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
    <enhanced:img src="../bg.png" alt="" />
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
                                            Thank you for your submission
                                        </h1>
                                        <p class="text-description">
                                            Your details for the enterprise plan have been sent
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
                                            Appwrite for Enterprise
                                        </h1>
                                        <p class="text-description">
                                            Enterprise businesses partner with Appwrite to empower
                                            their developers with an all-in-one backend platform, so
                                            they can focus on innovation, not reinventing the wheel.
                                            Reduce complexity, accelerate development, and launch
                                            faster.
                                            <br />
                                            <br />
                                            Ready to talk? Fill out the form, and one of our experts
                                            will be in touch.
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
                                            <li class="web-form-item">
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
                                            <li class="web-form-item flex-col gap-1">
                                                <label class="block" for="companyWebsite"
                                                    >Company website</label
                                                >
                                                <input
                                                    required
                                                    pattern="^(https:\/\/www\.|https:\/\/)?([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+)[a-zA-Z0-9\-\._~:\/\?#[\]@!\$&'\(\)\*\+,;=.]*$"
                                                    class="web-input-text w-full"
                                                    type="text"
                                                    placeholder="https://appwrite.io"
                                                    id="companyWebsite"
                                                    bind:value={companyWebsite}
                                                />
                                            </li>
                                            <li
                                                class="web-form-item flex-col gap-1 sm:col-span-1 md:col-span-2"
                                            >
                                                <label class="block" for="use-case"
                                                    >Please share more information about your use
                                                    case</label
                                                >
                                                <textarea
                                                    required
                                                    class="web-input-text w-full"
                                                    id="use-case"
                                                    placeholder="Describe your use case and how our Enterprise Plan can support it"
                                                    bind:value={useCase}
                                                ></textarea>
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
            <Scale />
            <LogoList />
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
