<script lang="ts">
    import OpenSource from '$lib/animations/OpenSource.svelte';
    import Products from '$lib/animations/Products/Products.svelte';
    import ProductsMobile from '$lib/animations/Products/ProductsMobile.svelte';
    import PreFooter from '$lib/components/PreFooter.svelte';
    import Technologies from '$lib/components/Technologies.svelte';
    import { Main } from '$lib/layouts';
    import { isMobileNavOpen } from '$lib/layouts/Main.svelte';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import FooterNav from '../lib/components/FooterNav.svelte';
    import MainFooter from '../lib/components/MainFooter.svelte';
    import DeveloperCard from './DeveloperCard.svelte';

    const title = 'Appwrite - Build like a team of hundreds';
    const description = DEFAULT_DESCRIPTION;
    const ogImage = `${DEFAULT_HOST}/images/open-graph/website.png`;
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

<div
    style:position="absolute"
    style:top="0"
    style:width="100vw"
    style:height="100vh"
    style:overflow="hidden"
    class:web-u-hide-mobile={$isMobileNavOpen}
>
    <div
        class="u-position-absolute"
        style="top: -800px; left: 50%; translate: -50%; pointer-events:none; z-index: 10"
    >
        <enhanced:img
            style="width:1466px; height:804px; transform:rotate(150.348deg); opacity: 0.65; filter: blur(127.5px);
		max-block-size: unset; max-inline-size: unset;"
            src="./top-page-dark.png"
            alt=""
        />
    </div>
</div>

<div
    class="u-position-absolute web-is-only-desktop"
    style="top: 22rem; left: 54%; translate: calc(-50% - 900px); width: 75.9375rem;"
    class:web-u-hide-mobile={$isMobileNavOpen}
>
    <img src="/images/bgs/hero-lines-1.png" alt="" />
</div>

<div
    class="u-position-absolute web-is-only-desktop"
    style="top: 42rem; left: 49%; translate: calc(-50% + 800px); width: 60rem;"
    class:web-u-hide-mobile={$isMobileNavOpen}
>
    <img src="/images/bgs/hero-lines-2.png" alt="" />
</div>

<Main>
    <div class="web-big-padding-section">
        <div class="web-big-padding-section-level-1">
            <div class="web-big-padding-section-level-2">
                <section class="web-container u-padding-block-end-0">
                    <a
                        href="/blog/post/everything-new-with-appwrite-1.5"
                        class="web-hero-banner-button web-u-margin-block-end-24"
                    >
                        <span class="web-icon-star" aria-hidden="true" />
                        <span class="web-caption-500">New</span>
                        <div class="web-hero-banner-button-sep" />
                        <span class="web-caption-400">Everything new in Appwrite 1.5</span>
                        <span class="web-icon-arrow-right" aria-hidden="true" />
                    </a>
                    <div class="web-hero is-horizontal">
                        <h1 class="web-headline">
                            <span class="web-gradient-text">
                                Build like a team of hundreds<span class="web-u-color-text-accent"
                                    >_</span
                                >
                            </span>
                        </h1>
                        <div class="u-cross-child-end">
                            <p class="web-description">
                                Appwrite's open-source platform lets you add Auth, DBs, Functions,
                                Storage, and Messaging to your product and build any application 
				at any scale, own your data, and use your preferred coding 
				languages and tools.
                            </p>
                            <a
                                href="https://cloud.appwrite.io"
                                class="web-button is-full-width-mobile u-margin-block-start-32"
                            >
                                <span class="text">Get started</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <div class="web-big-padding-section-level-2">
                <section
                    class="web-container u-padding-block-0"
                    style="--container-size:78.75rem"
                >
                    <div class="web-media-container">
                        <img
                            class="u-block"
                            src="/images/pages/homepage/dashboard.png"
                            alt="console dashboard"
                            style:aspect-ratio="1244 / 717"
                        />
                    </div>
                </section>
            </div>
            <div class="web-big-padding-section-level-2">
                <div class="web-container">
                    <h2
                        class="web-title web-u-color-text-primary web-u-text-align-center web-u-max-width-600 u-margin-inline-auto"
                    >
                        Trusted by developers from the world's leading organizations
                    </h2>
                    <ul class="web-grid-3c-4c-6c is-for-logos u-padding-block-start-80">
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

        <div
            class="web-big-padding-section-level-1 u-position-relative web-white-section theme-light"
        >
            <div
                class="u-position-absolute u-inset-block-end-0 u-inset-inline-start u-width-full-line"
            >
                <img
                    class="u-block u-width-full-line"
                    src="/images/bgs/padding-section-1.svg"
                    alt=""
                    style:max-height="48rem"
                />
            </div>

            <div class="web-big-padding-section-level-2">
                <div class="web-container">
                    <section class="web-hero is-align-start">
                        <span class="web-badges web-eyebrow">PRIVACY & SECURITY_</span>
                        <h2 class="web-display web-u-color-text-primary u-max-width-700">
                            Self-host your data or take it to the Cloud
                        </h2>
                        <p class="web-description u-max-width-700">
                            Migrate your data from and to any platform at any time with Appwrite
                            Migrations. With built-in security and privacy for peace of mind.
                        </p>
                    </section>
                    <div class="u-overflow-hidden web-u-margin-block-start-80">
                        <ul class="web-info-boxes web-sub-body-500">
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/self-hosted.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title">Self-Hosted</h3>
                                <p class="web-info-boxes-content">
                                    Own your data or host it on a cloud region of choice.
                                </p>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/lock.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title">Encryption</h3>
                                <p class="web-info-boxes-content">
                                    Built-in data encryption both in rest and in transit.
                                </p>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/shield.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title">Abuse protection</h3>
                                <p class="web-info-boxes-content">
                                    Protect your APIs from abuse with built-in protection.
                                </p>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/database.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title">Data migrations</h3>
                                <p class="web-info-boxes-content">
                                    Easily transfer data from 3rd parties or between Cloud and
                                    self-hosted.
                                </p>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/star.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title">GDPR</h3>
                                <p class="web-info-boxes-content">
                                    Safeguard user data and privacy with provided GDPR regulations.
                                </p>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/soc-2.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title">
                                    <span>SOC-2</span>
                                    <span class="web-inline-tag is-pink">Coming Soon</span>
                                </h3>
                                <p class="web-info-boxes-content">
                                    Ensure the highest level of security and privacy protection.
                                </p>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/hipaa.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title">
                                    <span>HIPAA</span>
                                    <span class="web-inline-tag is-pink">Coming Soon</span>
                                </h3>
                                <p class="web-info-boxes-content">
                                    Protect sensitive user health data.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <OpenSource />
            <div class="web-big-padding-section-level-2">
                <div class="web-container">
                    <div class="web-hero">
                        <div class="web-display web-u-color-text-primary">
                            Loved by developers like you
                        </div>
                    </div>
                    <ul class="web-multi-columns-1 web-u-margin-block-start-80">
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
                                    class="web-link is-inline">@appwrite</a
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
                                    class="web-link is-inline">@appwrite</a
                                >. With its robust feature set and open-source nature, it's the
                                perfect choice for developers who want to build secure and scalable
                                applications.
                            </DeveloperCard>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="web-big-padding-section-level-1 u-position-relative u-overflow-hidden">
            <div
                class="u-position-absolute web-is-not-mobile"
                style:inline-size="768px"
                style:block-size="768px"
                style:inset-block-start="0rem"
                style:z-index="-1"
                style:left="calc(50% - 384px + 350px)"
            >
                <img
                    src="/images/animations/tech-dark.png"
                    width="768"
                    height="768"
                    alt=""
                    style="position: absolute; display: block;"
                />
            </div>
            <div class="web-big-padding-section-level-2 is-margin-replace-padding">
                <div class="web-container u-position-relative">
                    <section class="web-hero is-align-start">
                        <span class="web-badges web-eyebrow">SDKs_</span>
                        <h2 class="web-display web-u-color-text-primary u-max-width-600">
                            Code the way you want
                        </h2>
                        <p class="web-description u-max-width-600">
                            We support many SDKs making Appwrite flexible to your needs and ensuring
                            you can code with the language you want at any time.
                        </p>
                        <Technologies />
                        <a
                            href="/docs/sdks"
                            class="web-button is-secondary"
                            style:align-self="start"
                        >
                            <span class="web-sub-body-500">Explore all SDKs</span>
                        </a>
                    </section>
                </div>
            </div>
            <div class="web-big-padding-section-level-2 u-position-relative u-overflow-hidden">
                <div
                    class="u-position-absolute u-z-index-0 web-is-not-mobile"
                    style:width="50%"
                    style:height="100%"
                    style:left="0"
                >
                    <div style:display="grid" style:place-items="center" style:height="100%">
                        <img src="/images/bgs/diagonal-lines.png" alt="" width="512" />
                    </div>
                </div>
                <div class="web-container u-position-relative">
                    <div class="grid-1-1">
                        <section class="web-hero is-align-start">
                            <span class="web-badges web-eyebrow">Scale_</span>
                            <h2 class="web-display u-max-width-600 web-u-color-text-primary">
                                We scale for you
                            </h2>
                        </section>
                        <ul
                            class="web-big-list-info u-margin-inline-start-auto web-u-inline-width-100-percent-mobile-break1 web-u-margin-block-start-48"
                        >
                            <li class="web-big-list-info-item">
                                <div class="web-headline web-u-color-text-primary">90K</div>
                                <div class="text">Projects</div>
                            </li>
                            <li class="web-big-list-info-item">
                                <div class="web-headline web-u-color-text-primary">+1B</div>
                                <div class="text">Requests served</div>
                            </li>
                            <li class="web-big-list-info-item">
                                <div class="web-headline web-u-color-text-primary">20K</div>
                                <div class="text">Organizations</div>
                            </li>
                            <li class="web-big-list-info-item">
                                <div class="web-headline web-u-color-text-primary">99.99%</div>
                                <div class="text">Guaranteed uptime</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                class="web-big-padding-section-level-2 is-margin-replace-padding u-position-relative u-overflow-hidden"
            >
                <div class="web-container">
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
