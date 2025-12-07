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
    import DevelopersToolkit from '../(marketing)/(components)/developers-toolkit.svelte';
    import { TITLE_SUFFIX } from '$routes/titles';
    import { DEFAULT_HOST } from '$lib/utils/metadata';

    import { PUBLIC_GROWTH_ENDPOINT } from '$env/static/public';
    import Faq from './faq.svelte';
    import { getReferrerAndUtmSource } from '$lib/utils/utm';
    import CommunitySupportChat from '$lib/components/CommunitySupportChat.svelte';
    import { trackEvent } from '$lib/actions/analytics';
    import { Button } from '$lib/components/ui';
    import CaseStudiesLight from './case-studies-light.svelte';
    import { Benefits } from '$routes/(marketing)/(components)';
    import StartupPartnerCTA from './(components)/StartupPartnerCTA.svelte';

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
            <div class="web-big-padding-section-level-2 h-64">
                <DevelopersToolkit />
            </div>
        </div>

        <!-- Benefits section -->
        <Benefits />

        <!-- Case Studies Section -->
        <CaseStudiesLight />

        <div id="form" class="web-white-section light overflow-hidden">
            <div class=" relative pt-20 pb-8 md:pt-40 md:pb-30">
                <div class="relative">
                    <div class="relative container">
                        <!-- before submit -->
                        <div class="web-grid-1-1-opt-2 e-u-row-gap-0 relative z-1 gap-8">
                            <div>
                                <div
                                    class="web-u-max-inline-size-none-mobile"
                                    class:web-u-max-width-380={!submitted}
                                >
                                    <section class="flex flex-col gap-5">
                                        <h4 class="text-title font-aeonik-pro text-primary">
                                            Join the Appwrite Startups program
                                        </h4>
                                        <p class="text-description" style="font-size: 18px;">
                                            We support VC backed tech startups that have been
                                            established within the last decade with:
                                        </p>

                                        <div class="flex flex-col gap-3">
                                            <div class="flex gap-4">
                                                <img
                                                    class="mt-1 self-start"
                                                    src="/images/icons/gradients/v-icon.svg"
                                                    alt="yes"
                                                    width="18"
                                                    height="18"
                                                />
                                                <p
                                                    class="text-description"
                                                    style="font-size: 18px;"
                                                >
                                                    Appwrite Cloud Pro for 12 months
                                                </p>
                                            </div>
                                            <div class="flex gap-4">
                                                <img
                                                    class="mt-1 self-start"
                                                    src="/images/icons/gradients/v-icon.svg"
                                                    alt="yes"
                                                    width="18"
                                                    height="18"
                                                />
                                                <p
                                                    class="text-description"
                                                    style="font-size: 18px;"
                                                >
                                                    Premium email support as part of Pro
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
                                    class="web-u-max-width-380 web-u-max-inline-size-none-mobile relative z-1 mx-auto flex flex-col gap-2 text-center"
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
                                        <div class="flex flex-col gap-2">
                                            <p class="text-caption text-secondary">
                                                This form is protected by reCAPTCHA, and the Google <br
                                                />
                                                <a
                                                    href="https://policies.google.com/privacy"
                                                    class="text-accent">Privacy Policy</a
                                                >
                                                and
                                                <a
                                                    href="https://policies.google.com/terms"
                                                    class="text-accent">Terms of Service</a
                                                >
                                                apply.
                                            </p>
                                            {#if error}
                                                <p class="text-caption web-u-max-width-380">
                                                    {error}
                                                </p>
                                            {/if}
                                        </div>
                                        <Button
                                            type="submit"
                                            disabled={submitting}
                                            class="web-u-inline-width-100-percent-mobile-break1 self-center"
                                        >
                                            Get Started
                                        </Button>
                                    </div>
                                </form>
                            {/if}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Become a startup partner section -->
        <StartupPartnerCTA />

        <div class="container">
            <FooterNav />
            <MainFooter />
        </div>
    </div>
</Main>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;
    @use '$scss/abstract/variables/devices' as devices;

    @media #{devices.$break1} {
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
        .e-u-row-gap-0 {
            row-gap: 0;
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
    }
</style>
