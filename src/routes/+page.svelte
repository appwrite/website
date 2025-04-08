<script lang="ts">
    import { trackEvent } from '$lib/actions/analytics';
    import OpenSource from '$lib/animations/OpenSource.svelte';
    import Products from '$lib/animations/Products/Products.svelte';
    import ProductsMobile from '$lib/animations/Products/ProductsMobile.svelte';
    import AppwriteIn100Seconds from '$lib/components/AppwriteIn100Seconds.svelte';
    import PreFooter from '$lib/components/PreFooter.svelte';
    import Technologies from '$lib/components/Technologies.svelte';
    import { Button, Icon } from '$lib/components/ui';
    import Badge from '$lib/components/ui/badge.svelte';
    import GradientText from '$lib/components/ui/gradient-text.svelte';
    import Hero from '$lib/components/ui/hero.svelte';
    import { Main } from '$lib/layouts';
    import { isMobileNavOpen } from '$lib/layouts/Main.svelte';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import {
        DEFAULT_DESCRIPTION,
        DEFAULT_HOST,
        getInlinedScriptTag,
        organizationJsonSchema,
        softwareAppSchema
    } from '$lib/utils/metadata';
    import FooterNav from '../lib/components/FooterNav.svelte';
    import MainFooter from '../lib/components/MainFooter.svelte';
    import DeveloperCard from './DeveloperCard.svelte';
    import CoverImage from './dashboard.webp';

    const title = 'Appwrite - Build like a team of hundreds';
    const description = DEFAULT_DESCRIPTION;
    const ogImage = `${DEFAULT_HOST}/images/open-graph/website.png`;

    const infoBoxes: Array<{ label: string; description: string; icon: string }> = [
        {
            label: 'Self-Hosted',
            description: 'Own your data or host it on a cloud region of choice.',
            icon: '/images/icons/gradients/self-hosted.svg'
        },
        {
            label: 'Encryption',
            description: 'Built-in data encryption both in rest and in transit.',
            icon: '/images/icons/gradients/lock.svg'
        },
        {
            label: 'Abuse protection',
            description: 'Protect your APIs from abuse with built-in protection.',
            icon: '/images/icons/gradients/shield.svg'
        },
        {
            label: 'Data migrations',
            description: 'Easily transfer data from 3rd parties or between Cloud and self-hosted.',
            icon: '/images/icons/gradients/database.svg'
        },
        {
            label: 'GDPR',
            description: 'Safeguard user data and privacy with provided GDPR regulations.',
            icon: '/images/icons/gradients/star.svg'
        },
        {
            label: 'SOC-2',
            description: 'Ensure the highest level of security and privacy protection.',
            icon: '/images/icons/gradients/soc-2.svg'
        },
        {
            label: 'HIPAA',
            description: 'Protect sensitive user health data.',
            icon: '/images/icons/gradients/hipaa.svg'
        }
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

    <!-- eslint-disable-next-line svelte/no-at-html-tags-->
    {@html getInlinedScriptTag(softwareAppSchema())}

    <!-- eslint-disable-next-line svelte/no-at-html-tags-->
    {@html getInlinedScriptTag(organizationJsonSchema())}
</svelte:head>

<div
    style:position="absolute"
    style:inset="0"
    style:overflow="hidden"
    class:web-u-hide-mobile={$isMobileNavOpen}
>
    <div
        class="absolute"
        style="top: -800px; left: 50%; translate: -50%; pointer-events:none; z-index: 10"
    >
        <enhanced:img
            style="width:1466px; height:804px; transform:rotate(150.348deg); opacity: 0.65; filter: blur(127.5px);
		max-block-size: unset; max-inline-size: unset;"
            src="./top-page-dark.webp"
            alt=""
        />
    </div>
</div>

<div
    class="web-is-only-desktop absolute"
    style="top: 22rem; left: 54%; translate: calc(-50% - 900px); width: 75.9375rem;"
    class:web-u-hide-mobile={$isMobileNavOpen}
>
    <img src="/images/bgs/hero-lines-1.webp" alt="" />
</div>

<div
    class="web-is-only-desktop absolute"
    style="top: 42rem; width: calc(50% - 5rem); right: 0;"
    class:web-u-hide-mobile={$isMobileNavOpen}
>
    <div style="left: 0;">
        <img src="/images/bgs/hero-lines-2.webp" alt="" />
    </div>
</div>

<Main>
    <div class="web-big-padding-section">
        <div class="pb-10">
            <div class="my-12 lg:my-[7.5rem]">
                <section class="container pb-0">
                    <a
                        href="/blog/post/what-is-mcp"
                        class="web-hero-banner-button mb-4 flex items-center! gap-1"
                        on:click={() => trackEvent({ plausible: { name: 'Banner button click' } })}
                    >
                        <Icon name="star" class="shrink-0 fill-white" aria-hidden="true"></Icon>
                        <span class="text-caption shrink-0 font-medium">New</span>
                        <div class="web-hero-banner-button-sep"></div>
                        <span class="text-caption web-u-trim-1"
                            >Announcing new Appwrite MCP server</span
                        >
                        <span class="web-icon-arrow-right shrink-0" aria-hidden="true"></span>
                    </a>
                    <Hero>
                        <GradientText slot="title"
                            >Build like a team of hundreds<span class="text-accent">_</span
                            ></GradientText
                        >

                        <svelte:fragment slot="description">
                            Build your entire backend within minutes and scale effortlessly using
                            Appwrite's open-source platform. Add Authentication, Databases,
                            Functions, Storage, and Messaging to your projects using the frameworks
                            and languages of your choice.
                        </svelte:fragment>
                        <div class="mt-8 flex flex-col gap-4 sm:flex-row" slot="cta">
                            <Button
                                href={getAppwriteDashboardUrl()}
                                class="w-full lg:w-fit"
                                onclick={() =>
                                    trackEvent({
                                        plausible: { name: 'Get started in hero' },
                                        posthog: { name: 'get-started-btn_hero_click' }
                                    })}
                            >
                                Start building
                            </Button>

                            <Button
                                variant="secondary"
                                href="/contact-us/enterprise"
                                class="w-full lg:w-fit">Request a demo</Button
                            >

                            <!-- <AppwriteIn100Seconds /> -->
                        </div>
                    </Hero>
                </section>
            </div>
            <div class="mb-12 lg:my-[7.5rem]">
                <section
                    class="web-u-padding-block-0 relative container"
                    style="--container-size:78.75rem"
                >
                    <div class="absolute top-1/2 left-1/2 z-10 -translate-1/2">
                        <AppwriteIn100Seconds />
                    </div>
                    <div class="web-media-container">
                        <img
                            class="block"
                            src={CoverImage}
                            alt="console dashboard"
                            style:aspect-ratio="1244 / 717"
                        />
                    </div>
                </section>
            </div>
            <div class="mb-12 lg:my-[7.5rem]">
                <div class="container">
                    <h2
                        class="text-title font-aeonik-pro text-primary web-u-max-width-600 mx-auto text-center"
                    >
                        Trusted by developers from the world's leading organizations
                    </h2>
                    <ul class="web-grid-3c-4c-6c is-for-logos web-u-padding-block-start-80">
                        <li>
                            <img
                                src="/images/logos/trusted-by/apple.svg"
                                alt="Apple"
                                width="42"
                                height="48"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/oracle.svg"
                                alt="ORACLE"
                                width="136"
                                height="17"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/tiktok.svg"
                                alt="TikTok"
                                width="133"
                                height="32"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/intel.svg"
                                alt="intel"
                                width="76"
                                height="30"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/ibm.svg"
                                alt="IBM"
                                width="74"
                                height="30"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/american-airlines.svg"
                                alt="American Airlines"
                                width="147"
                                height="24"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/deloitte.svg"
                                alt="Deloitte."
                                width="103"
                                height="20"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/gm.svg"
                                alt="GM"
                                width="48"
                                height="48"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/ey.svg"
                                alt="EY"
                                width="46"
                                height="48"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/nestle.svg"
                                alt="Nestle"
                                width="119"
                                height="34"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/bosch.svg"
                                alt="BOSCH"
                                width="110"
                                height="37"
                            />
                        </li>
                        <li>
                            <img
                                src="/images/logos/trusted-by/decathlon.svg"
                                alt="DECATHLON"
                                width="127"
                                height="32"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <Products />
        <ProductsMobile />

        <div class="web-white-section light relative py-10">
            <div class="absolute bottom-0 w-full">
                <img
                    class="block w-full"
                    src="/images/bgs/padding-section-1.svg"
                    alt=""
                    style:max-height="48rem"
                />
            </div>

            <div class="my-[7.5rem]">
                <div class="container">
                    <section class="web-hero is-align-start">
                        <Badge>PRIVACY & SECURITY_</Badge>
                        <h2 class="text-display font-aeonik-pro text-primary max-w-[700px]">
                            Self-host your data or take it to the Cloud
                        </h2>
                        <p class="text-secondary mt-5 max-w-[700px] text-xl font-medium">
                            Migrate your data from and to any platform at any time with Appwrite
                            Migrations. With built-in security and privacy for peace of mind.
                        </p>
                    </section>
                    <div class="mt-20 overflow-hidden">
                        <ul
                            class="web-info-boxes text-sub-body divide-x divide-y divide-black/4 font-medium"
                        >
                            {#each infoBoxes as box}
                                <li class="relative border-black/4 p-8 last-of-type:border-r">
                                    <img src={box.icon} width="40" height="40" alt="" />
                                    <h3
                                        class="text-primary mt-4 flex flex-wrap items-baseline gap-3"
                                    >
                                        {box.label}
                                    </h3>
                                    <p class="text-secondary mt-1">
                                        {box.description}
                                    </p>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
            <OpenSource />
            <div class="my-[7.5rem]">
                <div class="container">
                    <div class="web-hero">
                        <div class="text-display font-aeonik-pro text-primary">
                            Loved by developers like you
                        </div>
                    </div>
                    <ul class="web-multi-columns-1 mt-20">
                        <li>
                            <DeveloperCard
                                name="Terry Lennon"
                                tag="@terry_lennon"
                                icon="product-hunt"
                                avatarSrc="/images/community/avatars/terry.png"
                            >
                                Been a huge supporter of Appwrite for over a year, championing it
                                even at the companies I was working at. Their community is
                                second-to-none, speed of feature release is exceptional, and the
                                support in their Discord is incredible.
                            </DeveloperCard>
                        </li>
                        <li>
                            <DeveloperCard
                                name="Varun Dhand"
                                tag="@varundhand"
                                icon="linkedin"
                                avatarSrc="/images/community/avatars/varun.png"
                            >
                                Recently, I embarked on a journey to create a Real-Time Chat
                                Application that would redefine seamless communication. Along the
                                way, I discovered an incredible tool that transformed my backend
                                game - Appwrite!
                            </DeveloperCard>
                        </li>
                        <li>
                            <DeveloperCard
                                name="Kap.ts"
                                tag="@Kaperskyguru"
                                icon="x"
                                avatarSrc="/images/community/avatars/kap.png"
                            >
                                Backend Engineers, you will agree with me that building the
                                authentication process for your app with each new API development is
                                a pain. Here's my secret: I let <a
                                    href="https://twitter.com/appwrite"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="web-link underline">@appwrite</a
                                > handle my authentication process while I focus on the business logic.
                            </DeveloperCard>
                        </li>
                        <li>
                            <DeveloperCard
                                name="Stephen Simon"
                                tag="@codewithsimon"
                                icon="product-hunt"
                                avatarSrc="/images/community/avatars/stephen.png"
                            >
                                Absolutely in love with Appwrite and the commitment to the
                                community!
                            </DeveloperCard>
                        </li>
                        <li>
                            <DeveloperCard
                                name="Teri"
                                tag="@terieyenike"
                                icon="product-hunt"
                                avatarSrc="/images/community/avatars/terieyenike.png"
                            >
                                I have used Appwrite twice, and the experience of using it was great
                                as I got to build a full-stack application. I would gladly recommend
                                it to anyone looking to explore an alternative database option.
                                Appwrite is simply the best.
                            </DeveloperCard>
                        </li>
                        <li>
                            <DeveloperCard
                                name="Souvik Sarkar"
                                tag="@Jeet_2003"
                                icon="x"
                                avatarSrc="/images/community/avatars/souvik.png"
                            >
                                If you're looking for a backend server that is both powerful and
                                easy to use, check out <a
                                    href="https://twitter.com/appwrite"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="web-link underline">@appwrite</a
                                >. With its robust feature set and open-source nature, it's the
                                perfect choice for developers who want to build secure and scalable
                                applications.
                            </DeveloperCard>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="relative overflow-hidden pt-10">
            <div
                class="web-is-not-mobile absolute"
                style:inline-size="768px"
                style:block-size="768px"
                style:inset-block-start="0rem"
                style:z-index="-1"
                style:left="calc(50% - 384px + 350px)"
                style:margin-top="6.25rem"
            >
                <img
                    src="/images/animations/tech-dark.png"
                    width="768"
                    height="768"
                    alt=""
                    style="position: absolute; display: block;"
                />
            </div>
            <div class="py-[7.5rem]">
                <div class="relative container">
                    <section class="web-hero is-align-start">
                        <span class="web-badges text-micro !text-white uppercase">SDKs_</span>
                        <h2 class="text-display font-aeonik-pro text-primary max-w-[600px]">
                            Code the way you want
                        </h2>
                        <p class="text-secondary mt-5 max-w-[600px] text-xl font-medium">
                            We support many SDKs making Appwrite flexible to your needs and ensuring
                            you can code with the language you want at any time.
                        </p>
                        <Technologies />
                        <Button
                            href="/docs/sdks"
                            variant="secondary"
                            onclick={() => trackEvent({ plausible: { name: 'Explore all SDKs' } })}
                            >Explore all SDKs</Button
                        >
                    </section>
                </div>
            </div>
            <div class="relative my-[7.5rem] overflow-hidden">
                <div
                    class="web-is-not-mobile absolute z-0"
                    style:width="50%"
                    style:height="100%"
                    style:left="0"
                >
                    <div style:display="grid" style:place-items="center" style:height="100%">
                        <img
                            src="/images/bgs/diagonal-lines.png"
                            alt=""
                            width="512"
                            loading="lazy"
                        />
                    </div>
                </div>
                <div class="relative container">
                    <div class="grid md:grid-cols-2">
                        <section class="web-hero is-align-start">
                            <span class="web-badges text-micro !text-white uppercase">Scale_</span>
                            <h2 class="text-display font-aeonik-pro text-primary max-w-[600px]">
                                We scale for you
                            </h2>
                        </section>
                        <ul
                            class="web-big-list-info web-u-inline-width-100-percent-mobile-break1 web-u-margin-block-start-48 ml-auto"
                        >
                            <li class="web-big-list-info-item">
                                <div class="text-headline font-aeonik-pro text-primary">100K</div>
                                <div class="text">Projects</div>
                            </li>
                            <li class="web-big-list-info-item">
                                <div class="text-headline font-aeonik-pro text-primary">+1B</div>
                                <div class="text">Requests served</div>
                            </li>
                            <li class="web-big-list-info-item">
                                <div class="text-headline font-aeonik-pro text-primary">20K</div>
                                <div class="text">Organizations</div>
                            </li>
                            <li class="web-big-list-info-item">
                                <div class="text-headline font-aeonik-pro text-primary">99.99%</div>
                                <div class="text">Guaranteed uptime</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="relative overflow-hidden pt-[7.5rem]">
                <div class="container">
                    <PreFooter />
                    <FooterNav />
                    <MainFooter />
                </div>
            </div>
        </div>
    </div>
</Main>

<style lang="scss">
</style>
