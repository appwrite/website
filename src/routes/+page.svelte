<script lang="ts">
  import OpenSource from "$lib/animations/OpenSource.svelte";
  import Products from "$lib/animations/Products/Products.svelte";
  import ProductsMobile from "$lib/animations/Products/ProductsMobile.svelte";
  import Button from "$lib/components/Button.svelte";
  import LogoList from "$lib/components/LogoList.svelte";
  import PreFooter from "$lib/components/PreFooter.svelte";
  import Technologies from "$lib/components/Technologies.svelte";
  import { Main } from "$lib/layouts";
  import { isMobileNavOpen } from "$lib/layouts/Main.svelte";
  import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from "$lib/utils/metadata";
  import FooterNav from "../lib/components/FooterNav.svelte";
  import MainFooter from "../lib/components/MainFooter.svelte";
  import DeveloperCard from "./DeveloperCard.svelte";

  const title = "Appwrite - Build like a team of hundreds";
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
  class="absolute top-0 h-screen w-screen overflow-hidden"
  class:web-u-hide-mobile={$isMobileNavOpen}
>
  <div
    class="pointer-events-none absolute h-[400px] w-[800px] bg-[radial-gradient(ellipse_closest-side_at_50%_50%,_rgba(253,54,110,0.2)_20%_,_rgba(255,255,255,0)_100%)]"
    style="left: 50%; translate: -50%; z-index: 10"
  ></div>
</div>

<div
  class="web-is-only-desktop absolute"
  style="top: 22rem; left: 54%; translate: calc(-50% - 900px); width: 75.9375rem;"
  class:web-u-hide-mobile={$isMobileNavOpen}
>
  <img src="/images/bgs/hero-lines-1.png" alt="" />
</div>

<div
  class="web-is-only-desktop absolute"
  style="top: 42rem; left: 49%; translate: calc(-50% + 800px); width: 60rem;"
  class:web-u-hide-mobile={$isMobileNavOpen}
>
  <img src="/images/bgs/hero-lines-2.png" alt="" />
</div>

<Main>
  <div class="web-big-padding-section hidden">
    <div class="web-big-padding-section-level-1">
      <div class="web-big-padding-section-level-2">
        <section class="web-container web-u-padding-block-end-0">
          <a
            href="/blog/post/announcing-appwrite-new-ai-integrations"
            class="web-hero-banner-button web-u-margin-block-end-24"
          >
            <span class="web-icon-star" aria-hidden="true" />
            <span class="web-caption-500">New</span>
            <div class="web-hero-banner-button-sep" />
            <span class="web-caption-400 web-u-trim-1"
              >Announcing new AI Appwrite Integrations</span
            >
            <span class="web-icon-arrow-right" aria-hidden="true" />
          </a>
          <div class="web-hero is-horizontal">
            <h1 class="web-headline">
              <span class="web-gradient-text">
                Build like a team of hundreds<span
                  class="web-u-color-text-accent">_</span
                >
              </span>
            </h1>
            <div class="u-cross-child-end">
              <p class="web-description">
                Build your entire backend within minutes and scale effortlessly
                using Appwrite's open-source platform. Add Authentication,
                Databases, Functions, Storage, and Messaging to your projects
                using the frameworks and languages of your choice.
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
          class="web-container web-u-padding-block-0"
          style="--container-size:78.75rem"
        >
          <div class="web-media-container">
            <img
              class="block"
              src="/images/pages/homepage/dashboard.png"
              alt="console dashboard"
              style:aspect-ratio="1244 / 717"
            />
          </div>
        </section>
      </div>
      <LogoList />
    </div>

    <Products />
    <ProductsMobile />

    <div
      class="web-big-padding-section-level-1 web-white-section light relative"
    >
      <div
        class="u-inset-block-end-0 u-inset-inline-start u-width-full-line absolute"
      >
        <img
          class="u-width-full-line block"
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
              Migrate your data from and to any platform at any time with
              Appwrite Migrations. With built-in security and privacy for peace
              of mind.
            </p>
          </section>
          <div class="web-u-margin-block-start-80 overflow-hidden">
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
                <h3 class="aw-info-boxes-title">GDPR</h3>
                <p class="aw-info-boxes-content">
                  Safeguard user data and privacy with provided GDPR
                  regulations.
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
                Been a huge supporter of Appwrite for over a year, championing
                it even at the companies I was working at. Their community is
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
                Application that would redefine seamless communication. Along
                the way, I discovered an incredible tool that transformed my
                backend game - Appwrite!
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
                authentication process for your app with each new API
                development is a pain. Here's my secret: I let <a
                  href="https://twitter.com/appwrite"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="web-link is-inline">@appwrite</a
                > handle my authentication process while I focus on the business
                logic.
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
                I have used Appwrite twice, and the experience of using it was
                great as I got to build a full-stack application. I would gladly
                recommend it to anyone looking to explore an alternative
                database option. Appwrite is simply the best.
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
                perfect choice for developers who want to build secure and
                scalable applications.
              </DeveloperCard>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="web-big-padding-section-level-1 relative overflow-hidden">
      <div
        class="web-is-not-mobile absolute"
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
        <div class="web-container relative">
          <section class="web-hero is-align-start">
            <span class="web-badges web-eyebrow">SDKs_</span>
            <h2 class="web-display web-u-color-text-primary u-max-width-600">
              Code the way you want
            </h2>
            <p class="web-description u-max-width-600">
              We support many SDKs making Appwrite flexible to your needs and
              ensuring you can code with the language you want at any time.
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
      <div class="web-big-padding-section-level-2 relative overflow-hidden">
        <div
          class="web-is-not-mobile absolute z-0"
          style:width="50%"
          style:height="100%"
          style:left="0"
        >
          <div
            style:display="grid"
            style:place-items="center"
            style:height="100%"
          >
            <img
              src="/images/bgs/diagonal-lines.png"
              alt=""
              width="512"
              loading="lazy"
            />
          </div>
        </div>
        <div class="web-container relative">
          <div class="grid grid-cols-2">
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
        class="web-big-padding-section-level-2 is-margin-replace-padding relative overflow-hidden"
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
