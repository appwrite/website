<script lang="ts">
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import { Main } from '$lib/layouts';
    import { TITLE_SUFFIX } from '$routes/titles';
    import { loggedIn, user } from '$lib/utils/console';
    import { PUBLIC_GROWTH_ENDPOINT } from '$env/static/public';
    import { getReferrerAndUtmSource } from '$lib/utils/utm';
    import { FooterNav, MainFooter } from '$lib/components';

    let name = '';
    let email = '';
    let eventName = '';
    let socialHandles = '';
    let eventPublicWebLink = '';
    let estimatedAttendees = '';
    let eventDate = new Date().toISOString().split('T')[0];
    let eventType: 'Virtual' | 'In Person' | 'Hybrid' = 'Virtual';

    let submitted = false;
    let submitting = false;
    let error: string | undefined;

    async function handleSubmit() {
        error = undefined;
        submitting = true;

        const subject = `Event Sponsorship Application`;

        const cloudEmail = loggedIn && $user?.email ? $user.email : undefined;

        try {
            const response = await fetch(`${PUBLIC_GROWTH_ENDPOINT}/feedback/sponsorships`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    subject,
                    cloudEmail,
                    eventName,
                    eventDate,
                    eventType,
                    socialHandles,
                    eventPublicWebLink,
                    estimatedAttendees,
                    ...getReferrerAndUtmSource()
                })
            });

            if (response.status >= 400) {
                error = response.status >= 500 ? 'Server Error.' : 'Error submitting form.';
                return;
            }

            submitted = true;
        } catch {
            error = 'Error submitting form.';
        } finally {
            submitting = false;
        }
    }

    const title = 'Event sponsorship' + TITLE_SUFFIX;
    const description = 'Apply for Appwrite Cloud Pro credits for your event.';
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
                                            <h2 class="web-display web-u-color-text-primary">
                                                Submission received
                                            </h2>
                                            <p class="web-description web-u-padding-block-end-32">
                                                Thank you for applying for an Appwrite hackathon
                                                sponsorship. We will get back to you in a couple of
                                                days.
                                            </p>
                                            <a
                                                href="/"
                                                class="web-button is-secondary web-u-margin-block-end-32"
                                            >
                                                <span>Back to home</span>
                                            </a>
                                        </section>
                                    {:else}
                                        <section class="flex flex-col gap-5">
                                            <h4 class="web-display web-u-color-text-primary">
                                                Event sponsorship
                                            </h4>
                                            <p class="web-description">
                                                Hosting an event or hackathon? Apply for an Appwrite
                                                sponsorship and get $50 Cloud credits for all your
                                                attendees to build with Appwrite Pro.
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
                                                <label class="u-block" for="eventName"
                                                    >Event name</label
                                                >
                                                <input
                                                    required
                                                    class="web-input-text w-full"
                                                    type="text"
                                                    placeholder="Awesome hackathon"
                                                    id="eventName"
                                                    bind:value={eventName}
                                                />
                                            </li>
                                            <li class="web-form-item">
                                                <label class="u-block" for="eventLink"
                                                    >Event link</label
                                                >

                                                <input
                                                    required
                                                    class="web-input-text w-full"
                                                    type="url"
                                                    placeholder="https://appwrite.io"
                                                    id="eventLink"
                                                    bind:value={eventPublicWebLink}
                                                />
                                            </li>
                                            <li class="web-form-item">
                                                <label class="u-block" for="eventDate"
                                                    >Event date</label
                                                >
                                                <input
                                                    required
                                                    type="date"
                                                    id="eventDate"
                                                    bind:value={eventDate}
                                                    class="web-input-text w-full"
                                                    min={new Date().toISOString().split('T')[0]}
                                                />
                                            </li>
                                            <li class="web-form-item">
                                                <label class="u-block" for="estimatedAttendees"
                                                    >Estimated attendees</label
                                                >
                                                <input
                                                    required
                                                    min="10"
                                                    type="number"
                                                    placeholder="10"
                                                    id="estimatedAttendees"
                                                    bind:value={estimatedAttendees}
                                                    class="web-input-text w-full"
                                                />
                                            </li>
                                            <li
                                                class="web-form-item flex-col gap-1 sm:col-span-1 md:col-span-2"
                                            >
                                                <label class="u-block" for="eventType"
                                                    >Event type</label
                                                >

                                                <div class="relative">
                                                    <select
                                                        class="web-input-text w-full appearance-none"
                                                        id="eventType"
                                                        bind:value={eventType}
                                                    >
                                                        <option value={null}
                                                            >Select event type</option
                                                        >
                                                        <option>Virtual</option>
                                                        <option>In-Person</option>
                                                        <option>Both</option>
                                                    </select>
                                                    <span
                                                        class="icon-cheveron-down web-u-pointer-events-none absolute top-[11px] right-2"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                            </li>
                                            <li
                                                class="web-form-item flex-col gap-1 sm:col-span-1 md:col-span-2"
                                            >
                                                <label class="u-block" for="socialHandles"
                                                    >Social media handles</label
                                                >
                                                <textarea
                                                    required
                                                    id="socialHandles"
                                                    class="web-input-text w-full"
                                                    bind:value={socialHandles}
                                                    placeholder="List your social media handles or profile URLs"
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

<style lang="scss">
    .web-form-item {
        gap: 4px;
        display: flex;
        flex-direction: column;
    }

    input[type='date'] {
        padding: 0.8rem;
        position: relative;

        /* Position the native calendar icon */
        &::-webkit-calendar-picker-indicator {
            top: 50%;
            right: 1rem;
            cursor: pointer;
            position: absolute;
            transform: translateY(-50%);
        }
    }
</style>
