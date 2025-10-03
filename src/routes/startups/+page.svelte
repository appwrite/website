<script lang="ts">
    import ProjectTimeline from './(assets)/project-timeline.webp';
    import UsageGraphs from './(assets)/usage-graphs.avif';
    import SecurityOptions from './(assets)/security-options.avif';

    import BackgroundHero from './(assets)/bg-hero.svg';
    import BackgroundLeft from './(assets)/bg-left.png';
    import BackgroundRight from './(assets)/bg-right.png';
    import BlobGreen from './(assets)/blob-green.svg';
    import BlobPink from './(assets)/blob-pink.svg';
    import BlobGreenMobile from './(assets)/blob-green-mobile.svg';
    import BlobPinkMobile from './(assets)/blob-pink-mobile.svg';

    import { Main } from '$lib/layouts';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import { TITLE_SUFFIX } from '$routes/titles';
    import { DEFAULT_HOST } from '$lib/utils/metadata';

    import { PUBLIC_GROWTH_ENDPOINT } from '$env/static/public';
    import Faq from './faq.svelte';
    import { getReferrerAndUtmSource } from '$lib/utils/utm';
    import CommunitySupportChat from '$lib/components/CommunitySupportChat.svelte';
    import { trackEvent } from '$lib/actions/analytics';
    import { Button } from '$lib/components/ui';
    import CaseStudiesLight from './case-studies-light.svelte';
    import Features from '$routes/(marketing)/(components)/features.svelte';
    import Benefits from '$routes/(marketing)/(components)/benefits.svelte';

    const title = 'Startups' + TITLE_SUFFIX;
    const description =
        "Get cloud credits to fulfill all your startup's backend and hosting needs. Apply for Appwrite's Startups Program today.";
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    let personName: string;
    let personEmail: string;
    let companyName: string;
    let companyUrl: string;

    let error: string | undefined;
    let submitted = false;
    let submitting = false;

    function scrollToForm() {
        const form = document.getElementById('form');
        form?.scrollIntoView({ behavior: 'smooth' });
    }

    async function handleSubmit() {
        error = undefined;
        submitting = true;

        const response = await fetch(`${PUBLIC_GROWTH_ENDPOINT}/conversations/startups`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                personName,
                personEmail,
                companyName,
                companyUrl: companyUrl.startsWith('http') ? companyUrl : `https://${companyUrl}`,
                ...getReferrerAndUtmSource()
            })
        });

        trackEvent('startups-form-submit');

        submitting = false;

        if (response.status >= 400) {
            error =
                response.status >= 500
                    ? 'Internal server Error.'
                    : 'Error submitting form. Please contact support.';
            return;
        }

        submitted = true;
    }

    function resetForm() {
        personName = '';
        personEmail = '';
        companyName = '';
        companyUrl = '';
        error = undefined;
        submitted = false;
    }

    const testimonial = (name: string, handle: string, text: string, image: string) => {
        return {
            name,
            handle,
            text,
            image: `/images/testimonials/${image}.png`
        };
    };

    const mariusBolik = testimonial(
        'Marius Bolik',
        'CTO // mySHOEFITTER',
        'Appwrite has been a tremendous asset in implementing our IT infrastructure. Not only is the software an absolute game-changer, but the team is always there when you need them.',
        'marius-bolik2'
    );

    const souvikSarkar = testimonial(
        'Souvik Sarkar',
        '@Jeet_2003',
        'With its robust feature set and open-source nature, Appwrite is the perfect choice for developers who want to build secure and scalable applications.',
        'souvik-sarkar'
    );

    const ryanOconner = testimonial(
        "Ryan O'Connor",
        'Founder // K-Collect',
        "There's no struggling with writing backend code and working with databases, as that's already taken care of.",
        'ryan-oconner'
    );

    const testimonials = [
        souvikSarkar,
        ryanOconner,
        testimonial(
            'Gilbert Gonzalez',
            '@ggsotillo',
            'We reduced 80% time-to-market of our apps using Appwrite.',
            'gilbert-gonzalez'
        ),
        testimonial(
            'Eddie Jaoude',
            '@eddiejaoude',
            'It is great you are delivering an awesome product that is Open Source as well as having a great community!',
            'eddie-jaoude'
        ),
        testimonial(
            'David Forster',
            'Creator // Open Mind',
            'Appwrite saved us a lot of money in comparison to Firebase since the amount of users grew quite fast and we needed a quick switch. I am still surprised how easy the implementation into Flutter was.',
            'david-forster'
        ),
        testimonial(
            'Marius Bolik',
            'CTO // mySHOEFITTER',
            'The integrated user authentication and the ease of creating data structures have undoubtedly saved us several weeks worth of time.',
            'marius-bolik2'
        ),
        testimonial(
            "Ryan O'Conner",
            'Founder // K-Collect',
            'For me, Appwrite is the perfect backend solution. All you have to do is sign up, and your backend is ready to go. I have never seen such an innovative and easy-to-understand backend solution before!',
            'ryan-oconner'
        ),
        testimonial(
            'Diego Ferreyra',
            '@diego_ferreyra1',
            "Loving it. I've been a web developer for 20+ years and I've never gotten from 0 lines to actual useful coding so fast. 100% recommend.",
            'diego-ferreyra'
        ),
        testimonial(
            'Alejandro Morales',
            '@alexparton',
            "I just migrated a project from Firebase to Appwrite: Authentication, Users, Databases and Storage. And I can't be more in love with it.",
            'alejandro-morales'
        ),
        testimonial(
            'Marius Bolik',
            'CTO // mySHOEFITTER',
            'The integrated user authentication and the ease of creating data structures have undoubtedly saved us several weeks worth of time.',
            'marius-bolik2'
        ),
        testimonial(
            'Jonas Janssen',
            'Founder // UNDO',
            'Thanks to Appwrite and advances in technology, we were able to get an MVP out in 2-3 months with 1 developer.',
            'jonas-janssen'
        ),
        testimonial(
            'Zach Handley',
            'CTO // Socialaize',
            "We have somewhere between 200,000 to 600,000 function executions per day. It's especially nice that you guys have to deal with the scaling now and not me.",
            'zach-handley'
        ),
        mariusBolik
    ];
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

<Main>
    <img class="absolute inset-0 mx-auto block" src={BackgroundHero} alt="" />
    <img class="e-bg-left-mobile absolute top-0" src={BackgroundLeft} alt="" />
    <img class="e-bg-right-mobile absolute right-0" src={BackgroundRight} alt="" />
    <div class="web-big-padding-section relative overflow-hidden">
        <div class="relative py-10">
            <div class="web-big-padding-section-level-2 e-u-margin-block-128-desktop">
                <section class="web-u-padding-block-end-0 container">
                    <div
                        class="web-hero"
                        style="--hero-max-inline-size:49.375rem; --hero-gap:1.125rem;"
                    >
                        <h1 class="text-headline font-aeonik-pro text-primary">
                            Build your startup with Appwrite
                        </h1>
                        <p
                            class="text-description web-u-max-width-640 e-u-padding-inline-32-desktop mx-auto"
                        >
                            The Appwrite Startups Program supports your startup with an all-in-one
                            development platform for you to build your products. You will receive
                            Cloud credits and a discount for Appwrite's paid plans.
                        </p>
                        <Button onclick={scrollToForm} class="mx-auto mt-3">Apply now</Button>
                    </div>
                </section>
            </div>

            <div
                class="web-big-padding-section-level-2 e-u-padding-block-start-48-mobile e-u-padding-block-start-80-desktop e-u-margin-block-end-80-mobile"
            >
                <section class="container">
                    <ul
                        class="web-u-flex-vertical-mobile e-u-gap-64-mobile grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4"
                    >
                        <li class="mx-auto flex flex-col items-center gap-4">
                            <img
                                src="/images/icons/gradients/backend.svg"
                                width="48"
                                height="48"
                                alt=""
                            />
                            <div class="flex flex-col gap-2 text-center">
                                <h2 class="text-label text-primary">Up to 80% discounts</h2>
                                <p class="text-body font-medium">
                                    Get discounts on Appwrite’s paid plans. We offer up to 80% on
                                    both Pro and Scale.
                                </p>
                            </div>
                        </li>
                        <li class="mx-auto flex flex-col items-center gap-4">
                            <img
                                src="/images/icons/gradients/cloud-credit.svg"
                                width="48"
                                height="48"
                                alt=""
                            />
                            <div class="flex flex-col gap-2 text-center">
                                <h2 class="text-label text-primary">Cloud credits</h2>
                                <p class="text-body font-medium">
                                    Save on development and cloud costs and reduce risk at an early
                                    stage.
                                </p>
                            </div>
                        </li>
                        <li class="mx-auto flex flex-col items-center gap-4">
                            <img
                                src="/images/icons/gradients/support.svg"
                                width="48"
                                height="48"
                                alt=""
                            />
                            <div class="flex flex-col gap-2 text-center">
                                <h2 class="text-label text-primary">Priority support</h2>
                                <p class="text-body font-medium">
                                    Get community support and priority support from the Appwrite
                                    team.
                                </p>
                            </div>
                        </li>
                        <li class="mx-auto flex flex-col items-center gap-4">
                            <img
                                src="/images/icons/gradients/swag.svg"
                                width="48"
                                height="48"
                                alt=""
                            />
                            <div class="flex flex-col gap-2 text-center">
                                <h2 class="text-label text-primary">Founder swag</h2>
                                <p class="text-body font-medium">
                                    Get community support and dedicated email support from the
                                    Appwrite team.
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>

        <!-- Developer toolkit section -->
        <div class="web-white-section light relative border-b border-dashed border-black/8 pt-10">
            <div class="web-big-padding-section-level-2 h-[256px]">
                <section class="container">
                    <div class="mx-auto max-w-[720px] text-center">
                        <h3 class="text-title font-aeonik-pro text-primary">
                            Your startups<br />developer toolkit
                        </h3>
                        <p class="text-body mt-2 font-medium">
                            Appwrite offers an all-in-one hosting platform for you to build <br />
                            and deploy your product from a single place.
                        </p>
                    </div>

                    <div class="mt-6 flex flex-wrap items-center justify-center gap-0">
                        <!-- Build group -->
                        <div
                            class="inline-flex items-center gap-2 rounded-[24px] border border-dashed border-black/8 bg-white px-4 py-2"
                        >
                            <span class="text-sm font-medium text-gray-700 uppercase">Build</span>
                            <span
                                class="bg-smooth text-caption text-primary flex h-10 items-center gap-2 rounded-[20px] px-3"
                            >
                                <img
                                    src="/images/icons/illustrated/light/auth.png"
                                    alt="Auth"
                                    class="h-6 w-6 shrink-0"
                                />
                                Auth
                            </span>
                            <span
                                class="bg-smooth text-caption text-primary flex h-10 items-center gap-2 rounded-[20px] px-3"
                            >
                                <img
                                    src="/images/icons/illustrated/light/databases.png"
                                    alt="Databases"
                                    class="h-6 w-6 shrink-0"
                                />
                                Databases
                            </span>
                            <span
                                class="bg-smooth text-caption text-primary flex h-10 items-center gap-2 rounded-[20px] px-3"
                            >
                                <img
                                    src="/images/icons/illustrated/light/storage.png"
                                    alt="Storage"
                                    class="h-6 w-6 shrink-0"
                                />
                                Storage
                            </span>
                            <span
                                class="bg-smooth text-caption text-primary flex h-10 items-center gap-2 rounded-[20px] px-3"
                            >
                                <img
                                    src="/images/icons/illustrated/light/functions.png"
                                    alt="Functions"
                                    class="h-6 w-6 shrink-0"
                                />
                                Functions
                            </span>
                            <span
                                class="bg-smooth text-caption text-primary flex h-10 items-center gap-2 rounded-[20px] px-3"
                            >
                                <img
                                    src="/images/icons/illustrated/light/messaging.png"
                                    alt="Messaging"
                                    class="h-6 w-6 shrink-0"
                                />
                                Messaging
                            </span>
                            <span
                                class="bg-smooth text-caption text-primary flex h-10 items-center gap-2 rounded-[20px] px-3"
                            >
                                <img
                                    src="/images/icons/illustrated/light/realtime.png"
                                    alt="Realtime"
                                    class="h-6 w-6 shrink-0"
                                />
                                Realtime
                            </span>
                        </div>
                        <!-- dashed gap between groups (horizontal) -->
                        <div
                            aria-hidden="true"
                            class="mx-0 h-px w-6 self-center border-t border-dashed border-black/8"
                        ></div>
                        <!-- Deploy group -->
                        <div
                            class="inline-flex items-center gap-2 rounded-[24px] border border-dashed border-black/8 bg-white px-4 py-2"
                        >
                            <span class="text-sm font-medium text-gray-700 uppercase">DEPLOY</span>
                            <span
                                class="bg-smooth text-caption text-primary flex h-10 items-center gap-2 rounded-[20px] px-3"
                            >
                                <img
                                    src="/images/icons/illustrated/light/sites.png"
                                    alt="Sites"
                                    class="h-6 w-6 shrink-0"
                                />
                                Sites
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <!-- Benefits section -->
        <Benefits />

        <!-- Case Studies Section -->
        <CaseStudiesLight />

        <div id="form" class="overflow-hidden">
            <div class=" relative pt-20 pb-8 md:pt-40 md:pb-30">
                <div class="relative">
                    <div class="relative container">
                        <img
                            class="web-is-only-desktop absolute"
                            style="inset-inline-end:-650px; inset-block-start:-200px; max-width:none; max-height:none;"
                            src={BlobGreen}
                            alt=""
                        />
                        <img
                            class="web-is-only-desktop absolute"
                            style="inset-inline-start:-1000px; inset-block-start:-800px; max-width:none; max-height:none;"
                            src={BlobPink}
                            alt=""
                        />
                        <img
                            class="web-is-only-mobile absolute"
                            style="inset-inline-end:-450px; inset-block-start:400px; max-width:none; max-height:none;"
                            src={BlobGreenMobile}
                            alt=""
                        />
                        <img
                            class="web-is-only-mobile absolute"
                            style="inset-inline-start:-700px; inset-block-start:-400px; max-width:none; max-height:none;"
                            src={BlobPinkMobile}
                            alt=""
                        />

                        <!-- before submit -->
                        <div class="web-grid-1-1-opt-2 e-u-row-gap-0 relative z-[1] gap-8">
                            <div>
                                <div
                                    class="web-u-max-inline-size-none-mobile"
                                    class:web-u-max-width-380={!submitted}
                                >
                                    <section class="flex flex-col gap-5">
                                        <h4 class="text-title font-aeonik-pro text-primary">
                                            Join the Appwrite Startups program
                                        </h4>
                                        <p class="text-description">
                                            We support your startup with:
                                        </p>

                                        <div class="flex flex-col gap-3">
                                            <div class="flex gap-4">
                                                <div class="web-check-bullet mt-1"></div>
                                                <p class="text-description">
                                                    Cloud credits and discounts on a paid plan
                                                </p>
                                            </div>
                                            <div class="flex gap-4">
                                                <div class="web-check-bullet mt-1"></div>
                                                <p class="text-description">
                                                    Priority email support
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                    <div
                                        class="web-is-only-mobile web-u-margin-block-start-40 web-u-padding-block-start-40 web-u-sep-block-start"
                                    ></div>
                                </div>
                            </div>
                            {#if submitted}
                                <div
                                    class="web-u-max-width-380 web-u-max-inline-size-none-mobile relative z-[1] mx-auto flex flex-col gap-2 text-center"
                                >
                                    <h6 class="text-label flex items-center justify-center gap-2">
                                        <img
                                            class="shrink-0"
                                            src="/images/icons/colored/check.svg"
                                            alt=""
                                        />
                                        <span class="text-primary"
                                            >Thank you for your submission</span
                                        >
                                    </h6>
                                    <p class="text-body">
                                        Our team will review your application and get back to you
                                        soon.
                                    </p>
                                    <Button
                                        onclick={resetForm}
                                        variant="secondary"
                                        class="mx-auto mt-4 block w-full! md:w-fit"
                                        >Back to form</Button
                                    >
                                </div>
                            {:else}
                                <form
                                    method="post"
                                    on:submit|preventDefault={handleSubmit}
                                    class="flex flex-col gap-4"
                                >
                                    <div class="flex justify-end">
                                        <ul
                                            class="web-form-list web-u-max-width-580 web-u-max-inline-size-none-mobile w-full gap-4"
                                        >
                                            <li class="web-form-item flex flex-col gap-1">
                                                <div class="block">Full name</div>
                                                <input
                                                    required
                                                    class="web-input-text"
                                                    type="text"
                                                    placeholder="Walter O'Brien"
                                                    aria-label="Full name"
                                                    bind:value={personName}
                                                />
                                            </li>
                                            <li class="web-form-item flex flex-col gap-1">
                                                <div class="block">Email address</div>
                                                <input
                                                    required
                                                    class="web-input-text"
                                                    type="email"
                                                    placeholder="walter@company.com"
                                                    aria-label="Email address"
                                                    bind:value={personEmail}
                                                />
                                            </li>
                                            <li class="web-form-item flex flex-col gap-1">
                                                <div class="block">Company name</div>
                                                <input
                                                    required
                                                    class="web-input-text"
                                                    type="text"
                                                    name="company"
                                                    placeholder="Company Inc."
                                                    aria-label="Company name"
                                                    bind:value={companyName}
                                                />
                                            </li>
                                            <li class="web-form-item flex flex-col gap-1">
                                                <div class="block">Company website</div>
                                                <input
                                                    required
                                                    class="web-input-text"
                                                    type="text"
                                                    pattern="^(https:\/\/www\.|https:\/\/)?([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+)[a-zA-Z0-9\-\._~:\/\?#[\]@!\$&'\(\)\*\+,;=.]*$"
                                                    name="company-website"
                                                    placeholder="https://company.com"
                                                    aria-label="Company website"
                                                    bind:value={companyUrl}
                                                />
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
                                        <Button
                                            type="submit"
                                            disabled={submitting}
                                            class="web-u-inline-width-100-percent-mobile-break1 self-center"
                                        >
                                            Apply
                                        </Button>
                                    </div>
                                </form>
                            {/if}
                        </div>
                    </div>

                    <div class="web-big-padding-section-level-2 relative">
                        <div class="relative container" style:z-index="10">
                            <section class="web-grid-4-6">
                                <header>
                                    <div class="text-display font-aeonik-pro text-primary">FAQ</div>
                                </header>
                                <Faq />
                            </section>
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
    @use '$scss/abstract/mixins/border-gradient' as gradients;
    @use '$scss/abstract/variables/devices' as devices;

    @keyframes scroll {
        to {
            transform: translate(calc(-50% - 1rem));
        }
    }
    .scroll-carousel {
        display: flex;
        width: 100%;
        overflow: auto;

        .inner {
            padding-inline: 4rem;

            display: flex;
            gap: 2rem;
            flex-shrink: 0;

            > * {
                flex-shrink: 0;
                scroll-snap-align: start;
            } /* items */
        }
    }

    .border-card {
        position: absolute;
        inset: 0;
        border: 1px solid transparent;
        mask-clip: padding-box, border-box;
        mask-composite: intersect;
        border-radius: inherit;
        mask-image: linear-gradient(transparent, transparent), linear-gradient(#000, #000);

        &:hover {
            .glow {
                opacity: 1;
            }
        }

        .glow {
            opacity: 0;
            transition: opacity 0.25s ease-out;
            position: absolute;
            inset: 0;
            width: 60px;
            aspect-ratio: 1/1;
            offset-path: rect(0 auto auto 0 round 60px);
            offset-distance: 0;
            offset-rotate: auto;
            animation: glow 6s infinite linear forwards;
            background-color: var(--color-pink-200);
            box-shadow:
                var(--color-pink-200) 0px 0px 60px 30px,
                var(--color-pink-200) 0px 0px 100px 60px,
                var(--color-pink-200) 0px 0px 140px 90px;
        }

        @keyframes glow {
            0% {
                offset-distance: 0;
            }
            100% {
                offset-distance: 100%;
            }
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        .scroll-carousel {
            overflow: hidden;

            &:hover {
                .inner {
                    animation-play-state: paused;
                }
            }

            .inner {
                padding-inline: 0;
                animation: scroll 40s linear infinite;
            }
        }
    }

    @media #{devices.$break1} {
        .web-grid-1-1 {
            display: flex;
            flex-direction: column;
            gap: 32px;
        }
        .web-hero .text-description {
            margin-block-start: 0;
        }
        .e-u-padding-block-start-48-mobile {
            padding-block-start: 3rem;
        }
        .e-u-gap-64-mobile {
            gap: 4rem;
        }
        .e-u-margin-block-end-80-mobile {
            margin-block-end: 5rem;
        }
        .e-mt-20-mobile {
            margin-block-start: 5rem;
        }
        .e-mt-4-mobile {
            margin-block-start: 1rem;
        }
        .e-mt-12-mobile {
            margin-block-start: 3rem;
        }
        .e-u-row-gap-0 {
            row-gap: 0;
        }
        .e-u-order-1-mobile {
            order: 1;
        }
        .e-mx-auto-mobile {
            margin-inline: auto;
        }
        .e-mt-38-mobile {
            margin-block-start: 8rem;
        }
        .e-bg-left-mobile {
            width: 300px;
            height: auto;
            inset-inline-start: 0; /*transform:translateX(-50px);*/
            inset-block-start: 50px;
            opacity: 0.4;
        }
        .e-bg-right-mobile {
            width: 300px;
            height: auto;
            inset-inline-end: 0; /*transform:translateX(50px);*/
            inset-block-start: 100px;
            opacity: 0.4;
        }
    }

    @media #{devices.$break2open} {
        .web-grid-1-1 {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

    /* from 1280px and bugger */
    @media #{devices.$break3open} {
        .e-u-padding-block-start-80-desktop {
            padding-block-start: 5rem;
        }
        .e-u-margin-block-128-desktop {
            margin-block: 8rem;
        }
        .e-u-padding-inline-32-desktop {
            padding-inline: 2rem;
        }
        .e-mt-50-desktop {
            margin-block-start: 12.5rem;
        }
    }
</style>
