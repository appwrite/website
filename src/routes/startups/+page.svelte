<script lang="ts">
    import ProjectTimeline from './(assets)/project-timeline.avif';
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
        "Ryan O'Conner",
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
                            cloud platform for you to build your products. You will receive Cloud
                            credits and a discount for Appwrite's paid plans.
                        </p>
                        <Button onclick={scrollToForm} class="mx-auto mt-3">Apply now</Button>
                    </div>
                </section>
            </div>

            <div
                class="web-big-padding-section-level-2 e-u-padding-block-start-48-mobile e-u-padding-block-start-80-desktop e-u-margin-block-end-80-mobile"
            >
                <section class="container">
                    <ul class="web-u-flex-vertical-mobile e-u-gap-64-mobile flex gap-20">
                        <li class="mx-auto flex max-w-[350px] flex-1 flex-col items-center gap-4">
                            <img
                                src="/images/icons/gradients/backend.svg"
                                width="48"
                                height="48"
                                alt=""
                            />
                            <div class="flex flex-col gap-2 text-center">
                                <h2 class="text-label text-primary">Complete platform</h2>
                                <p class="text-main-body font-medium">
                                    Get discounted access to Appwrite’s paid plans and develop,
                                    host, and scale your entire application with Appwrite.
                                </p>
                            </div>
                        </li>
                        <li class="mx-auto flex max-w-[350px] flex-1 flex-col items-center gap-4">
                            <img
                                src="/images/icons/gradients/cloud-credit.svg"
                                width="48"
                                height="48"
                                alt=""
                            />
                            <div class="flex flex-col gap-2 text-center">
                                <h2 class="text-label text-primary">Cloud credits</h2>
                                <p class="text-main-body font-medium">
                                    Save on development and cloud costs and reduce risk at an early
                                    stage.
                                </p>
                            </div>
                        </li>
                        <li class="mx-auto flex max-w-[350px] flex-1 flex-col items-center gap-4">
                            <img
                                src="/images/icons/gradients/support.svg"
                                width="48"
                                height="48"
                                alt=""
                            />
                            <div class="flex flex-col gap-2 text-center">
                                <h2 class="text-label text-primary">Priority support</h2>
                                <p class="text-main-body font-medium">
                                    Get community support and priority support from the Appwrite
                                    team.
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>

        <div class="web-white-section light relative py-10">
            <div class="web-big-padding-section-level-2 e-mt-20-mobile">
                <div class="container">
                    <div class="web-timeline-content">
                        <ol class="web-timeline-content-list">
                            <li>
                                <div
                                    class="web-timeline-content-item-top web-grid-1-1"
                                    style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;"
                                >
                                    <div class="flex flex-col gap-4">
                                        <h3 class="text-title font-aeonik-pro text-primary">
                                            Ship faster
                                        </h3>
                                        <p class="text-main-body font-medium">
                                            Utilizing Appwrite as your backend, you significantly
                                            cut down the time and resources spent on building a
                                            backend infrastructure from scratch. This means you can
                                            get to quicker iterations and faster time-to-market,
                                            directly addressing the challenge of finding
                                            product-market fit sooner.
                                        </p>
                                    </div>
                                    <div>
                                        <a
                                            href="/blog/post/customer-stories-myshoefitter"
                                            class="web-card is-white group flex flex-col gap-5"
                                        >
                                            <div class="border-card">
                                                <div class="glow"></div>
                                            </div>
                                            <p class="aw-sub-body-500">
                                                The integrated user authentication and the ease of
                                                creating data structures have undoubtedly saved us
                                                several weeks' worth of time.
                                            </p>
                                            <div class="web-user-box">
                                                <img
                                                    class="web-user-box-image"
                                                    src="/images/testimonials/marius-bolik2.png"
                                                    alt="Avatar of Kap.ts"
                                                    width="48"
                                                    height="48"
                                                />
                                                <div
                                                    class="web-user-box-name text-sub-body font-medium"
                                                >
                                                    Marius Bolik
                                                </div>
                                                <div class="web-user-box-username text-sub-body">
                                                    CTO // mySHOEFITTER
                                                </div>
                                            </div>
                                            <span
                                                class="text-sub-body text-primary flex items-center gap-1"
                                                >Read customer story <span
                                                    class="web-icon-arrow-right transition-transform group-hover:translate-x-1"
                                                ></span></span
                                            >
                                        </a>
                                    </div>
                                </div>

                                <div
                                    class="web-is-only-desktop"
                                    style="margin-block-start:80px; margin-inline-start: -50px"
                                >
                                    <img alt="" src={ProjectTimeline} width="1250" />
                                </div>

                                <div
                                    class="web-is-not-desktop"
                                    style="padding-block-start: 48px; margin-inline-start:-32px;"
                                >
                                    <img alt="" src={ProjectTimeline} />
                                </div>
                            </li>
                            <li class="web-timeline-content-item">
                                <div
                                    class="web-grid-1-1"
                                    style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:6.5rem;"
                                >
                                    <div class="web-is-not-mobile">
                                        <img alt="" src={UsageGraphs} />
                                    </div>
                                    <div class="web-u-flex-basis-380 flex flex-col gap-4">
                                        <h3 class="text-title font-aeonik-pro text-primary">
                                            Scalable architecture
                                        </h3>
                                        <p class="text-main-body font-medium">
                                            Appwrite's scalable architecture ensures you can build
                                            your product with growth in mind. Whether you're just
                                            testing the waters or ready to scale up rapidly, our
                                            infrastructure seamlessly adjusts to your needs, easing
                                            the transition through different stages of your business
                                            growth.
                                        </p>
                                        <a
                                            href="/blog/post/case-study-kcollect"
                                            class="web-card group is-white web-u-margin-block-start-64 e-mt-4-mobile gap-5"
                                        >
                                            <div class="border-card">
                                                <div class="glow"></div>
                                            </div>
                                            <p class="aw-sub-body-500">{ryanOconner.text}</p>
                                            <div class="web-user-box">
                                                <img
                                                    class="web-user-box-image"
                                                    src={ryanOconner.image}
                                                    alt={`Avatar of ${ryanOconner.name}`}
                                                    width="48"
                                                    height="48"
                                                />
                                                <div
                                                    class="web-user-box-name text-sub-body font-medium"
                                                >
                                                    {ryanOconner.name}
                                                </div>
                                                <div class="web-user-box-username text-sub-body">
                                                    {ryanOconner.handle}
                                                </div>
                                            </div>
                                            <span
                                                class="text-sub-body text-primary flex items-center gap-1"
                                                >Read customer story <span
                                                    class="web-icon-arrow-right transition-transform group-hover:translate-x-1"
                                                ></span></span
                                            >
                                        </a>
                                    </div>
                                </div>
                                <div class="web-is-only-mobile">
                                    <img
                                        class="blockmx-auto max-w-[450px]"
                                        alt=""
                                        src={UsageGraphs}
                                    />
                                </div>
                            </li>
                            <li class="web-timeline-content-item">
                                <div
                                    class="web-timeline-content-item-top web-grid-1-1"
                                    style="--grid-1-1-gap: 2.5rem; --grid-1-1-gap-desktop: 6.5rem;"
                                >
                                    <div class="flex flex-col gap-4">
                                        <h3 class="text-title font-aeonik-pro text-primary">
                                            Built-in security and compliance
                                        </h3>
                                        <p class="text-main-body font-medium">
                                            Appwrite comes with built-in security features like
                                            authentication, database security, and more, reducing
                                            the time and effort you need to spend on securing your
                                            application.
                                        </p>
                                        <div
                                            class="web-card is-white web-u-margin-block-start-64 e-mt-4-mobile flex flex-col gap-5"
                                        >
                                            <p class="aw-sub-body-500">{souvikSarkar.text}</p>
                                            <div class="web-user-box">
                                                <img
                                                    class="web-user-box-image"
                                                    src={souvikSarkar.image}
                                                    alt={`Avatar of ${souvikSarkar.name}`}
                                                    width="48"
                                                    height="48"
                                                />
                                                <div
                                                    class="web-user-box-name text-sub-body font-medium"
                                                >
                                                    {souvikSarkar.name}
                                                </div>
                                                <div class="web-user-box-username text-sub-body">
                                                    {souvikSarkar.handle}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="web-is-not-desktop relative">
                                        <img
                                            class="blockmx-auto max-w-[450px]"
                                            src={SecurityOptions}
                                            alt=""
                                            style="height:auto;"
                                        />
                                    </div>

                                    <div class="web-is-only-desktop relative overflow-hidden">
                                        <div class="flex">
                                            <img
                                                src={SecurityOptions}
                                                alt=""
                                                class="ml-auto"
                                                style="width:500px; height:auto;"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="web-timeline-content-item">
                                <div
                                    class="web-timeline-content-item-top web-grid-1-1"
                                    style="--grid-1-1-gap: 2.5rem; --grid-1-1-gap-desktop: 6.5rem;"
                                >
                                    <div
                                        class="e-u-order-1-mobile e-mx-auto-mobile web-u-max-width-580 w-full"
                                    >
                                        <div
                                            class="web-chat web-u-max-width-580 web-u-margin-block-start-40-mobile"
                                        >
                                            <CommunitySupportChat />
                                        </div>
                                    </div>
                                    <div class="web-mx-auto-mobile ml-auto flex flex-col gap-4">
                                        <h3 class="text-title font-aeonik-pro text-primary">
                                            Power of open source community
                                        </h3>
                                        <p class="text-main-body font-medium">
                                            Join a growing community of developers and founders who
                                            use Appwrite to build their products. Gain access to a
                                            wealth of knowledge, support, and shared experiences to
                                            help navigate the challenges of startup growth.
                                        </p>
                                        <a
                                            href="/blog/post/case-study-myshoefitter"
                                            class="web-card group is-white web-u-margin-block-start-64 e-mt-4-mobile gap-5"
                                        >
                                            <div class="border-card">
                                                <div class="glow"></div>
                                            </div>
                                            <p class="aw-sub-body-500">{mariusBolik.text}</p>
                                            <div class="web-user-box">
                                                <img
                                                    class="web-user-box-image"
                                                    src={mariusBolik.image}
                                                    alt={`avatar of ${mariusBolik.name}`}
                                                    width="48"
                                                    height="48"
                                                />
                                                <div
                                                    class="web-user-box-name text-sub-body font-medium"
                                                >
                                                    {mariusBolik.name}
                                                </div>
                                                <div class="web-user-box-username text-sub-body">
                                                    {mariusBolik.handle}
                                                </div>
                                            </div>
                                            <span
                                                class="text-sub-body text-primary flex items-center gap-1"
                                                >Read customer story <span
                                                    class="web-icon-arrow-right transition-transform group-hover:translate-x-1"
                                                ></span></span
                                            >
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <div
                class="web-big-padding-section-level-2 web-u-overflow-hidden e-mt-50-desktop e-mt-38-mobile"
            >
                <h4
                    class="text-title font-aeonik-pro text-primary mx-auto max-w-[350px] text-center"
                >
                    Focus on building your product
                </h4>
                <div class="scroll-carousel">
                    <ul class="inner gap-8">
                        {#each testimonials as t}
                            <li>
                                <div
                                    class="web-card is-white web-u-margin-block-start-64 e-mt-12-mobile gap-5"
                                    style="inline-size:23.625rem"
                                >
                                    <p class="aw-sub-body-500">{t.text}</p>
                                    <div class="web-user-box">
                                        <img
                                            class="web-user-box-image"
                                            src={t.image}
                                            alt="Avatar of Kap.ts"
                                            width="48"
                                            height="48"
                                        />
                                        <div class="web-user-box-name text-sub-body font-medium">
                                            {t.name}
                                        </div>
                                        <div class="web-user-box-username text-sub-body">
                                            {t.handle}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>

        <div id="form" class="overflow-hidden pt-10">
            <div class="is-margin-replace-padding relative pt-[7.5rem]">
                <div class="relative">
                    <div class="web-big-padding-section-level-2">
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
                                        <h6
                                            class="text-label flex items-center justify-center gap-2"
                                        >
                                            <img
                                                class="shrink-0"
                                                src="/images/icons/colored/check.svg"
                                                alt=""
                                            />
                                            <span class="text-primary"
                                                >Thank you for your submission</span
                                            >
                                        </h6>
                                        <p class="text-main-body">
                                            Our team will review your application and get back to
                                            you soon.
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
