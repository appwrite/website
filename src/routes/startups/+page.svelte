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
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';

    import { PUBLIC_GROWTH_ENDPOINT } from '$env/static/public';

    const title = 'Startups' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    const infiniteScroll = (node: HTMLElement) => {
        if (window.matchMedia('prefers-reduced-motion').matches) return;
        const content = node.querySelector('.inner') as HTMLElement;
        content.innerHTML += content?.innerHTML;
        node.dataset.animated = 'true';
    };

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
                companyUrl: companyUrl.startsWith('http') ? companyUrl : `https://${companyUrl}`
            })
        });

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
        'marius-bolik'
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
            'Diego Ferreyra',
            '@diego_ferreyra1',
            'Loving it. I’ve been a web developer for 20+ years and I’ve never gotten from 0 lines to actual useful coding so fast. 100% recommend.',
            'diego-ferreyra'
        ),
        testimonial(
            'Alejandro Morales',
            '@alexparton',
            "I just migrated a project from Firebase to Appwrite: Authentication, Users, Databases and Storage. And I can't be more in love with it.",
            'alejandro-morales'
        ),
        mariusBolik
    ];
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

<Main>
    <img
        class="u-block u-position-absolute u-inset-inline-end-0 u-inset-block-start-0 u-margin-inline-auto u-inset-0"
        src={BackgroundHero}
        alt=""
    />
    <img
        class="u-position-absolute u-inset-inline-start-0 u-inset-block-start-0 e-bg-left-mobile"
        src={BackgroundLeft}
        alt=""
    />
    <img
        class="u-position-absolute u-inset-inline-end-0 u-inset-block-start-0 e-bg-right-mobile"
        src={BackgroundRight}
        alt=""
    />
    <div class="web-big-padding-section u-position-relative u-overflow-hidden">
        <div class="web-big-padding-section-level-1 u-position-relative">
            <div class="web-big-padding-section-level-2 e-u-margin-block-128-desktop">
                <section class="web-container web-u-padding-block-end-0">
                    <div
                        class="web-hero"
                        style="--hero-max-inline-size:49.375rem; --hero-gap:1.125rem;"
                    >
                        <h1 class="web-headline web-u-color-text-primary">
                            Build your startup with Appwrite
                        </h1>
                        <p
                            class="web-description web-u-max-width-640 u-margin-inline-auto e-u-padding-inline-32-desktop"
                        >
                            The Appwrite Startups Program supports your startup with a complete
                            backend for you to build your products. Eligible startups receive
                            Appwrite Cloud Pro for 12 months.
                        </p>
                        <button
                            on:click={scrollToForm}
                            class="web-button u-margin-inline-auto u-margin-block-start-12">
                            Apply now
                        </button>
                    </div>
                </section>
            </div>

            <div
                class="web-big-padding-section-level-2 e-u-padding-block-start-48-mobile e-u-padding-block-start-80-desktop e-u-margin-block-end-80-mobile"
            >
                <section class="web-container">
                    <ul class="u-flex web-u-flex-vertical-mobile web-u-gap-80 e-u-gap-64-mobile">
                        <li
                            class="u-flex-vertical u-cross-center u-gap-16 u-stretch u-max-width-350 u-margin-inline-auto"
                        >
                            <img
                                src="/images/icons/gradients/backend.svg"
                                width="48"
                                height="48"
                                alt=""
                            />
                            <div class="u-flex-vertical u-gap-8 u-text-center">
                                <h2 class="web-label web-u-color-text-primary">Complete backend</h2>
                                <p class="web-main-body-500">
                                    Get access to Appwrite’s Pro plan and build your entire backend
                                    with Appwrite.
                                </p>
                            </div>
                        </li>
                        <li
                            class="u-flex-vertical u-cross-center u-gap-16 u-stretch u-max-width-350 u-margin-inline-auto"
                        >
                            <img
                                src="/images/icons/gradients/cloud-credit.svg"
                                width="48"
                                height="48"
                                alt=""
                            />
                            <div class="u-flex-vertical u-gap-8 u-text-center">
                                <h2 class="web-label web-u-color-text-primary">Cloud credits</h2>
                                <p class="web-main-body-500">
                                    Get Appwrite Cloud Pro for 12 months and reduce risk at an early
                                    stage.
                                </p>
                            </div>
                        </li>
                        <li
                            class="u-flex-vertical u-cross-center u-gap-16 u-stretch u-max-width-350 u-margin-inline-auto"
                        >
                            <img
                                src="/images/icons/gradients/support.svg"
                                width="48"
                                height="48"
                                alt=""
                            />
                            <div class="u-flex-vertical u-gap-8 u-text-center">
                                <h2 class="web-label web-u-color-text-primary">Premium support</h2>
                                <p class="web-main-body-500">
                                    Get community support and premium email support from the
                                    Appwrite team.
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>

        <div
            class="web-big-padding-section-level-1 u-position-relative web-white-section theme-light"
        >
            <div class="web-big-padding-section-level-2 e-u-margin-block-start-80-mobile">
                <div class="web-container">
                    <div class="web-timeline-content">
                        <ol class="web-timeline-content-list">
                            <li>
                                <div
                                    class="web-timeline-content-item-top web-grid-1-1"
                                    style="--grid-1-1-gap:2.5rem; --grid-1-1-gap-desktop:15rem;"
                                >
                                    <div class="u-flex-vertical u-gap-16">
                                        <h3 class="web-title web-u-color-text-primary">
                                            Ship faster
                                        </h3>
                                        <p class="web-main-body-500">
                                            Utilizing Appwrite as your backend, you significantly
                                            cut down the time and resources spent on building a
                                            backend infrastructure from scratch. This means you can
                                            get to quicker iterations and faster time-to-market,
                                            directly addressing the challenge of finding
                                            product-market fit sooner.
                                        </p>
                                    </div>
                                    <div>
                                        <div class="web-card is-white u-flex-vertical web-u-gap-20">
                                            <p class="aw-sub-body-500">
                                                The integrated user authentication and the ease of
                                                creating data structures have undoubtedly saved us
                                                several weeks' worth of time.
                                            </p>
                                            <div class="web-user-box">
                                                <img
                                                    class="web-user-box-image"
                                                    src="/images/community/avatars/myshoefitter.png"
                                                    alt="Avatar of Kap.ts"
                                                    width="48"
                                                    height="48"
                                                />
                                                <div class="web-user-box-name web-sub-body-500">
                                                    Marius Bolik
                                                </div>
                                                <div class="web-user-box-username web-sub-body-400">
                                                    CTO // mySHOEFITTER
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="is-only-desktop"
                                    style="margin-block-start:80px; margin-inline-start: -50px"
                                >
                                    <img alt="" src={ProjectTimeline} width="1250" />
                                </div>

                                <div
                                    class="is-not-desktop"
                                    style="min-inline-size: 700px; padding-block-start: 48px; margin-inline-start:-32px;"
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
                                    <div class="u-flex-vertical u-gap-16 web-u-flex-basis-380">
                                        <h3 class="web-title web-u-color-text-primary">
                                            Scalable architecture
                                        </h3>
                                        <p class="web-main-body-500">
                                            Appwrite's scalable architecture ensures you can build
                                            your product with growth in mind. Whether you're just
                                            testing the waters or ready to scale up rapidly, our
                                            infrastructure seamlessly adjusts to your needs, easing
                                            the transition through different stages of your business
                                            growth.
                                        </p>
                                        <div
                                            class="web-card is-white web-u-gap-20 web-u-margin-block-start-64 e-u-margin-block-start-16-mobile"
                                        >
                                            <p class="aw-sub-body-500">{ryanOconner.text}</p>
                                            <div class="web-user-box">
                                                <img
                                                    class="web-user-box-image"
                                                    src={ryanOconner.image}
                                                    alt={`Avatar of ${ryanOconner.name}`}
                                                    width="48"
                                                    height="48"
                                                />
                                                <div class="web-user-box-name web-sub-body-500">
                                                    {ryanOconner.name}
                                                </div>
                                                <div class="web-user-box-username web-sub-body-400">
                                                    {ryanOconner.handle}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="web-is-only-mobile u-flex">
                                    <img
                                        class="u-block u-max-width-450 u-margin-inline-auto"
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
                                    <div class="u-flex-vertical u-gap-16">
                                        <h3 class="web-title web-u-color-text-primary">
                                            Built-in security and compliance
                                        </h3>
                                        <p class="web-main-body-500">
                                            Appwrite comes with built-in security features like
                                            authentication, database security, and more, reducing
                                            the time and effort you need to spend on securing your
                                            application.
                                        </p>
                                        <div
                                            class="web-card is-white u-flex-vertical web-u-gap-20 web-u-margin-block-start-64 e-u-margin-block-start-16-mobile"
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
                                                <div class="web-user-box-name web-sub-body-500">
                                                    {souvikSarkar.name}
                                                </div>
                                                <div class="web-user-box-username web-sub-body-400">
                                                    {souvikSarkar.handle}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="web-is-not-desktop u-position-relative">
                                        <img
                                            class="u-block u-max-width-450 u-margin-inline-auto"
                                            src={SecurityOptions}
                                            alt=""
                                            style="height:auto;"
                                        />
                                    </div>

                                    <div
                                        class="web-is-only-desktop u-position-relative u-overflow-hidden"
                                    >
                                        <div class="u-flex">
                                            <img
                                                src={SecurityOptions}
                                                alt=""
                                                class="u-margin-inline-start-auto"
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
                                        class="e-u-order-1-mobile e-u-margin-inline-auto-mobile u-width-full-line web-u-max-width-580"
                                        style="margin-block: auto;"
                                    >
                                        <div
                                            class="web-chat web-u-max-width-580 web-u-margin-block-start-40-mobile"
                                        >
                                            <ul class="web-chat-list">
                                                <li class="web-chat-item is-user-a">
                                                    <div class="web-chat-message">
                                                        <div class="web-user-box">
                                                            <img
                                                                class="web-user-box-image"
                                                                src="/images/community/avatars/6.avif"
                                                                height="40"
                                                                width="40"
                                                                alt="Avatar of Teri"
                                                            />
                                                            <div
                                                                class="web-user-box-name u-flex u-gap-8"
                                                            >
                                                                <span class="web-sub-body-500"
                                                                    >Louis Baker</span
                                                                >
                                                                <time
                                                                    class="web-caption-400 web-u-color-text-tertiary"
                                                                    >8:32 AM</time
                                                                >
                                                            </div>
                                                            <div
                                                                class="web-user-box-content web-caption-400 web-u-color-text-primary"
                                                            >
                                                                Hello devs! I am getting a CORS
                                                                error when sending a request to the
                                                                backend. Can you help me?
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="web-chat-item is-user-b">
                                                    <div class="web-chat-message">
                                                        <div class="web-user-box">
                                                            <img
                                                                class="web-user-box-image"
                                                                src="/images/avatars/steven.avif"
                                                                width="48"
                                                                height="48"
                                                                alt="Avatar of Teri"
                                                            />
                                                            <div
                                                                class="web-user-box-name u-flex u-gap-8"
                                                            >
                                                                <span class="web-sub-body-500"
                                                                    >Steven</span
                                                                >
                                                                <time
                                                                    class="web-caption-400 web-u-color-text-tertiary"
                                                                    >8:38 AM</time
                                                                >
                                                            </div>
                                                            <div
                                                                class="web-user-box-content web-caption-400 web-u-color-text-primary"
                                                            >
                                                                Hey Louis! Is this the message you
                                                                get
                                                                <a
                                                                    class="web-link is-pink"
                                                                    href="/blog/post/cors-error"
                                                                    target="_blank"
                                                                    >`Access blocked by CORS policy`</a
                                                                >?
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="web-chat-item is-user-a">
                                                    <div class="web-chat-message">
                                                        <div class="web-user-box">
                                                            <img
                                                                class="web-user-box-image"
                                                                src="/images/community/avatars/6.avif"
                                                                height="40"
                                                                width="40"
                                                                alt="Avatar of Teri"
                                                            />
                                                            <div
                                                                class="web-user-box-name u-flex u-gap-8"
                                                            >
                                                                <span class="web-sub-body-500"
                                                                    >Louis Baker</span
                                                                >
                                                                <time
                                                                    class="web-caption-400 web-u-color-text-tertiary"
                                                                    >9:05 AM</time
                                                                >
                                                            </div>
                                                            <div
                                                                class="web-user-box-content web-caption-400 web-u-color-text-primary"
                                                            >
                                                                Yes!
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="web-chat-item is-user-b">
                                                    <div class="web-chat-message">
                                                        <div class="web-user-box">
                                                            <img
                                                                class="web-user-box-image"
                                                                src="/images/avatars/steven.avif"
                                                                width="48"
                                                                height="48"
                                                                alt="Avatar of Teri"
                                                            />
                                                            <div
                                                                class="web-user-box-name u-flex u-gap-8"
                                                            >
                                                                <span class="web-sub-body-500"
                                                                    >Steven</span
                                                                >
                                                                <time
                                                                    class="web-caption-400 web-u-color-text-tertiary"
                                                                    >8:38 AM</time
                                                                >
                                                            </div>
                                                            <div
                                                                class="web-user-box-content web-caption-400 web-u-color-text-primary"
                                                            >
                                                                You should be able to debug this
                                                                with a few steps. Just follow this
                                                                blog:
                                                                <a
                                                                    class="web-link is-pink"
                                                                    href="/blog/post/cors-error"
                                                                    target="_blank"
                                                                    >/blog/post/cors-error</a
                                                                >. Let me know if this helps 🙂
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div
                                        class="u-flex-vertical u-gap-16 u-margin-inline-start-auto web-u-margin-inline-auto-mobile"
                                    >
                                        <h3 class="web-title web-u-color-text-primary">
                                            Power of open source community
                                        </h3>
                                        <p class="web-main-body-500">
                                            Join a growing community of developers and founders who
                                            use Appwrite to build their products. Gain access to a
                                            wealth of knowledge, support, and shared experiences to
                                            help navigate the challenges of startup growth.
                                        </p>
                                        <div
                                            class="web-card is-white web-u-gap-20 web-u-margin-block-start-64 e-u-margin-block-start-16-mobile"
                                        >
                                            <p class="aw-sub-body-500">{mariusBolik.text}</p>
                                            <div class="web-user-box">
                                                <img
                                                    class="web-user-box-image"
                                                    src={mariusBolik.image}
                                                    alt={`avatar of ${mariusBolik.name}`}
                                                    width="48"
                                                    height="48"
                                                />
                                                <div class="web-user-box-name web-sub-body-500">
                                                    {mariusBolik.name}
                                                </div>
                                                <div class="web-user-box-username web-sub-body-400">
                                                    {mariusBolik.handle}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <div
                class="web-big-padding-section-level-2 web-u-overflow-hidden e-u-margin-block-start-200-desktop e-u-margin-block-start-128-mobile"
            >
                <h4
                    class="web-title web-u-color-text-primary u-text-center u-max-width-350 u-margin-inline-auto"
                >
                    Focus on building your product
                </h4>
                <div class="scroll-carousel" use:infiniteScroll>
                    <ul class="inner u-gap-32">
                        {#each testimonials as t}
                            <li>
                                <div
                                    class="web-card is-white web-u-gap-20 web-u-margin-block-start-64 e-u-margin-block-start-48-mobile"
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
                                        <div class="web-user-box-name web-sub-body-500">
                                            {t.name}
                                        </div>
                                        <div class="web-user-box-username web-sub-body-400">
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

        <div id="form" class="web-big-padding-section-level-1 u-padding-0 u-overflow-hidden">
            <div
                class="web-big-padding-section-level-2 is-margin-replace-padding u-position-relative"
            >
                <div class="u-position-relative">
                    <div class="web-big-padding-section-level-2">
                        <div class="web-container u-position-relative">
                            <img
                                class="u-position-absolute is-only-desktop"
                                style="inset-inline-end:-650px; inset-block-start:-200px; max-width:none; max-height:none;"
                                src={BlobGreen}
                                alt=""
                            />
                            <img
                                class="u-position-absolute is-only-desktop"
                                style="inset-inline-start:-1000px; inset-block-start:-800px; max-width:none; max-height:none;"
                                src={BlobPink}
                                alt=""
                            />
                            <img
                                class="u-position-absolute is-only-mobile"
                                style="inset-inline-end:-450px; inset-block-start:400px; max-width:none; max-height:none;"
                                src={BlobGreenMobile}
                                alt=""
                            />
                            <img
                                class="u-position-absolute is-only-mobile"
                                style="inset-inline-start:-700px; inset-block-start:-400px; max-width:none; max-height:none;"
                                src={BlobPinkMobile}
                                alt=""
                            />

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
                                            <h4 class="web-title web-u-color-text-primary">
                                                Join the Appwrite Startups program
                                            </h4>
                                            <p class="web-description">
                                                We support VC backed startups that have been
                                                established within the last decade with:
                                            </p>

                                            <div class="u-flex-vertical u-gap-12">
                                                <div class="u-flex u-gap-16">
                                                    <div
                                                        class="web-check-bullet u-margin-block-start-4"
                                                    ></div>
                                                    <p class="web-description">
                                                        Appwrite Cloud Pro for 12 months
                                                    </p>
                                                </div>
                                                <div class="u-flex u-gap-16">
                                                    <div
                                                        class="web-check-bullet u-margin-block-start-4"
                                                    ></div>
                                                    <p class="web-description">
                                                        Premium email support as part of Pro
                                                    </p>
                                                </div>
                                            </div>
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
                                                >Thank you for your submission</span
                                            >
                                        </h6>
                                        <p class="web-main-body-400">
                                            Our team will review your application and get back to
                                            you soon.
                                        </p>
                                        <button
                                            on:click={resetForm}
                                            class="web-button is-secondary is-full-width-mobile u-block u-margin-inline-auto u-margin-block-start-16"
                                            >Back to form</button
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
                                                    <div class="u-block">Full name</div>
                                                    <input
                                                        required
                                                        class="web-input-text"
                                                        type="text"
                                                        placeholder="Enter full name"
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
                                                        placeholder="Enter email address"
                                                        aria-label="Email address"
                                                        bind:value={personEmail}
                                                    />
                                                </li>
                                                <li
                                                    class="web-form-item is-column-span-2 u-flex-vertical u-gap-4"
                                                >
                                                    <div class="u-block">Company name</div>
                                                    <input
                                                        required
                                                        class="web-input-text"
                                                        type="text"
                                                        name="company"
                                                        placeholder="Enter company name"
                                                        aria-label="Company name"
                                                        bind:value={companyName}
                                                    />
                                                </li>
                                                <li
                                                    class="web-form-item is-column-span-2 u-flex-vertical u-gap-4"
                                                >
                                                    <div class="u-block">Company website</div>
                                                    <input
                                                        required
                                                        class="web-input-text"
                                                        type="text"
                                                        name="company-website"
                                                        placeholder="Enter company website"
                                                        aria-label="Company website"
                                                        bind:value={companyUrl}
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
                                            >
                                                <span>Apply</span>
                                            </button>
                                        </div>
                                    </form>
                                {/if}
                            </div>
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
    :global([data-animated]).scroll-carousel {
        overflow: hidden;

        .inner {
            padding-inline: 0;
            animation: scroll 40s linear infinite;
        }
    }

    @media #{devices.$break1} {
        .web-grid-1-1 {
            display: flex;
            flex-direction: column;
            gap: 32px;
        }
        .web-hero .web-description {
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
        .e-u-margin-block-start-80-mobile {
            margin-block-start: 5rem;
        }
        .e-u-margin-block-start-16-mobile {
            margin-block-start: 1rem;
        }
        .e-u-margin-block-start-48-mobile {
            margin-block-start: 3rem;
        }
        .e-u-row-gap-0 {
            row-gap: 0;
        }
        .e-u-order-1-mobile {
            order: 1;
        }
        .e-u-margin-inline-auto-mobile {
            margin-inline: auto;
        }
        .e-u-margin-block-start-128-mobile {
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
    @media #{devices.$break1} {
        .e-mobile-fix-1 {
            display: block;
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
        .e-u-margin-block-start-200-desktop {
            margin-block-start: 12.5rem;
        }
    }
</style>
