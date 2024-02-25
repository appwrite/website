<script>
    import { FooterNav, MainFooter, PreFooter } from '$lib/components';
    import Main from '$lib/layouts/Main.svelte';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { Fence } from '$markdoc/nodes/_Module.svelte';
    import { MultiCode } from '$markdoc/tags/_Module.svelte';
    import { TITLE_SUFFIX } from '$routes/titles';
    import { setContext } from 'svelte';
    import Draft from './(components)/Draft.svelte';
    import Schedule from './(components)/Schedule.svelte';
    import Send from './(components)/Send.svelte';
    import Target from './(components)/Target.svelte';
    import { writable } from 'svelte/store';
    import MultiCodeContextless from './(components)/MultiCodeContextless.svelte';

    const title = 'Messaging' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    const sendMessageCode = [
        {
            language: 'js',
            content: `import { Messaging, MessageType, ID } from 'node-appwrite';

const messaging = Messaging(client);

const messageId = ID.unique();
const subject = 'New Workout';
const content = "<h1>New Workout</h1><p>There's a new workout!</p>";
const topics = [TOPIC_ID];
const users = [];
const targets = [];
const cc = undefined;
const bcc = undefined;
const status = MessageType.Processing; // Send now
const isHtml = true;
const scheduledAt = undefined;

messaging.createEmail(
  messageId,
  subject,
  content,
  topics,
  users,
  targets,
  cc,
  bcc,
  status,
  isHtml,
  scheduledAt
);
            `
        },
        {
            language: 'python',
            content: `import { Messaging, MessageType, ID } from 'node-appwrite';

const messaging = Messaging(client);

const messageId = ID.unique();
const subject = 'New Workout';
const content = "<h1>New Workout</h1><p>There's a new workout!</p>";
const topics = [TOPIC_ID];
const users = [];
const targets = [];
const cc = undefined;
const bcc = undefined;
const status = MessageType.Processing; // Send now
const isHtml = true;
const scheduledAt = undefined;

messaging.createEmail(
  messageId,
  subject,
  content,
  topics,
  users,
  targets,
  cc,
  bcc,
  status,
  isHtml,
  scheduledAt
);
            `
        }
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
    <div class="aw-big-padding-section u-overflow-hidden">
        <div class="hero">
            <enhanced:img src="./(assets)/blur-left.png" alt="" class="blur-left" />
            <enhanced:img src="./(assets)/blur-right.png" alt="" class="blur-right" />

            <div class="aw-container">
                <div>
                    <div class="product">
                        <img src="/images/icons/illustrated/dark/messaging.png" alt="" />
                        <span class="aw-eyebrow aw-u-color-text-primary">
                            Messaging<span class="aw-u-color-text-accent">_</span>
                        </span>
                        <span class="aw-hero-banner-button aw-eyebrow">BETA</span>
                    </div>
                    <h1 class="aw-display aw-u-color-text-primary">
                        Open source messaging service for developers
                    </h1>
                    <p class="aw-description u-margin-block-start-20">
                        Set up messaging within minutes and send push notifications, emails, and SMS
                        directly from the Appwrite Console.
                    </p>
                    <div class="u-flex u-items-center u-gap-8 u-margin-block-start-32 hero-buttons">
                        <a class="aw-button" href="https://cloud.appwrite.io" target="_blank"
                            >Get started</a
                        >
                        <a
                            class="aw-button is-secondary"
                            href="https://appwrite.io/docs/products/messaging"
                            target="_blank">Read the docs</a
                        >
                    </div>
                </div>

                <div class="phone-wrapper">
                    <enhanced:img class="phone" src="./(assets)/phone.png" alt="" />
                </div>
            </div>
        </div>

        <div class="steps aw-container">
            <Draft />
            <Target />
            <Schedule />
            <Send />
        </div>

        <div
            class="aw-big-padding-section-level-1 u-position-relative aw-white-section theme-light aw-u-padding-block-end-0"
        >
            <div class="aw-big-padding-section-level-2">
                <div class="aw-container">
                    <section class="aw-hero is-align-start">
                        <span class="aw-badges aw-eyebrow">PRIVACY & SECURITY_</span>
                        <h2 class="aw-display aw-u-color-text-primary u-max-width-700">
                            All of your messagesin one place
                        </h2>
                    </section>
                    <div class="u-overflow-hidden aw-u-margin-block-start-80">
                        <ul class="aw-info-boxes is-desktop-max-out-3 aw-sub-body-500">
                            <li class="aw-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/mobile.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="aw-info-boxes-title">Push notifications</h3>
                                <p class="aw-info-boxes-content">
                                    Effortlessly send push notifications for seamless instant
                                    communication.
                                </p>
                                <ul class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-16">
                                    <li>
                                        <a class="aw-interactive-tag" href="/">
                                            <span class="aw-icon-firebase" aria-hidden="true" />
                                            <span class="text">FCM</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="aw-interactive-tag" href="/">
                                            <span class="aw-icon-apple" aria-hidden="true" />
                                            <span class="text">APNS</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="aw-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/email.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="aw-info-boxes-title">Emails</h3>
                                <p class="aw-info-boxes-content">
                                    Easily send emails for smooth communication and information
                                    sharing.
                                </p>
                                <ul class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-16">
                                    <li>
                                        <a class="aw-interactive-tag" href="/">
                                            <span class="aw-icon-mailgun" aria-hidden="true" />
                                            <span class="text">Mailgun</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="aw-interactive-tag" href="/">
                                            <span class="aw-icon-sendgrid" aria-hidden="true" />
                                            <span class="text">Sendgrid</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="aw-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/message.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="aw-info-boxes-title">SMS</h3>
                                <p class="aw-info-boxes-content">
                                    Send SMS for quick updates beyond your app's environment.
                                </p>
                                <ul class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-16">
                                    <li>
                                        <a class="aw-interactive-tag" href="/">
                                            <span class="icon-twilio" aria-hidden="true" />
                                            <span class="text">Twilio</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="aw-interactive-tag" href="/">
                                            <span class="icon-vonage" aria-hidden="true" />
                                            <span class="text">Vonage</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="aw-interactive-tag" href="/">
                                            <span class="text">+3</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="aw-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/bell.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="aw-info-boxes-title">
                                    In app notifications
                                    <span class="aw-inline-tag is-pink">Coming Soon</span>
                                </h3>
                                <p class="aw-info-boxes-content">
                                    Send realtime alerts to your users within your application.
                                </p>
                                <ul class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-16">
                                    <li>
                                        <a class="aw-interactive-tag" href="/">
                                            <span
                                                class="aw-icon-appwrite u-small aw-u-margin-inline-end-4"
                                                aria-hidden="true"
                                            />
                                            <span class="text">Appwrite</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="aw-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/chat.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="aw-info-boxes-title">
                                    Chat
                                    <span class="aw-inline-tag is-pink">Coming Soon</span>
                                </h3>
                                <p class="aw-info-boxes-content">
                                    Connect chat apps such as Slack, Discord, and WhatsApp.
                                </p>
                                <ul class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-16">
                                    <li>
                                        <a class="aw-interactive-tag" href="/">
                                            <span class="icon-slack" aria-hidden="true" />
                                            <span class="text">Slack</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="aw-interactive-tag" href="/">
                                            <span class="icon-discord" aria-hidden="true" />
                                            <span class="text">Discord</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="aw-interactive-tag" href="/">
                                            <span class="icon-whatsapp" aria-hidden="true" />
                                            <span class="text">WhatsApp</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="aw-big-padding-section-level-2 u-position-relative u-z-index-1 theme-light">
                <div class="aw-container u-position-relative">
                    <img
                        class="u-position-absolute u-z-index-1 is-not-mobile"
                        style="width:1500px; height:auto; max-block-size:none; max-inline-size:none; inset-block-end:-27rem; rotate:145deg; inset-inline-start:-42rem;"
                        src="/images/messaging/stripes.png"
                        alt="stripes"
                    />
                    <div class="grid-1-1 u-position-relative u-z-index-1">
                        <section class="aw-hero is-align-start">
                            <span class="aw-badges aw-eyebrow">PERFORMANCE_</span>
                            <h2 class="aw-display u-max-width-600 aw-u-color-text-primary">
                                Optimized efficiency
                            </h2>
                        </section>
                        <ul
                            class="aw-big-list-info u-margin-inline-start-auto aw-u-inline-width-100-percent-mobile-break1 aw-u-margin-block-start-48"
                        >
                            <li class="aw-big-list-info-item">
                                <div class="aw-headline aw-u-color-text-primary">500+</div>
                                <div class="aw-description aw-u-color-text-secondary">
                                    messages per second
                                </div>
                            </li>
                            <li class="aw-big-list-info-item">
                                <div class="aw-headline aw-u-color-text-primary">33k+</div>
                                <div class="aw-description aw-u-color-text-secondary">
                                    messages per minute
                                </div>
                            </li>
                            <li class="aw-big-list-info-item">
                                <div class="aw-headline aw-u-color-text-primary">9</div>
                                <div class="aw-description aw-u-color-text-secondary">
                                    third party providers
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="aw-big-padding-section-level-1 u-position-relative u-z-index-1"
            style="background-color:hsl(var(--aw-color-greyscale-900))"
        >
            <div class="aw-big-padding-section-level-2">
                <div class="aw-container">
                    <div class="aw-hero is-align-start">
                        <span class="aw-badges aw-eyebrow">SDKs_</span>
                        <h2 class="aw-display aw-u-color-text-primary u-max-width-700">
                            Start today with your preferred technologies
                        </h2>
                    </div>
                    <div class="aw-grid-1-1-opt-2 aw-u-gap-64 aw-u-margin-block-start-64">
                        <div class="u-flex-vertical u-gap-16">
                            <h3 class="aw-label aw-u-color-text-primary">Subscribe to a topic</h3>
                            <p class="aw-description">
                                Subscribe to receive all messages related to that topic.
                            </p>

                            <div class="u-margin-block-start-16">
                                <MultiCodeContextless data={sendMessageCode} />
                            </div>
                        </div>
                        <div class="u-flex-vertical u-gap-16">
                            <h3 class="aw-label aw-u-color-text-primary">Send a message</h3>
                            <p class="aw-description">Send a message to all targets on a topic.</p>
                            <div class="u-margin-block-start-16">
                                <MultiCodeContextless data={sendMessageCode} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="aw-big-padding-section-level-1">
            <div class="aw-big-padding-section-level-2">
                <section class="aw-container aw-u-sep-block-start aw-u-padding-block-start-80">
                    <h4 class="aw-label u-text-center aw-u-color-text-primary">
                        Keep exploring our products
                    </h4>
                    <ul class="u-flex u-flex-wrap u-gap-32 u-margin-block-start-32">
                        <li class="aw-u-flex-basis-378">
                            <a
                                class="aw-card is-normal"
                                href="/docs/products/auth"
                                style="background: rgba(255, 255, 255, 0.04);"
                            >
                                <div
                                    class="u-flex-vertical u-gap-8 aw-u-padding-inline-8 aw-u-padding-block-end-8"
                                >
                                    <div class="u-flex u-cross-center u-gap-8">
                                        <img
                                            src="/images/icons/illustrated/dark/auth.png"
                                            alt="auth"
                                            width="32"
                                            height="32"
                                        />
                                        <h4 class="aw-main-body-400 aw-u-color-text-primary">
                                            Auth
                                        </h4>
                                        <span
                                            class="aw-icon-arrow-right u-margin-inline-start-auto"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p class="aw-sub-body-400">
                                        Build secure authentication and manage your users.
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li class="aw-u-flex-basis-378">
                            <a
                                class="aw-card is-normal"
                                href="/docs/products/functions"
                                style="background: rgba(255, 255, 255, 0.04);"
                            >
                                <div
                                    class="u-flex-vertical u-gap-8 aw-u-padding-inline-8 aw-u-padding-block-end-8"
                                >
                                    <div class="u-flex u-cross-center u-gap-8">
                                        <img
                                            src="/images/icons/illustrated/dark/functions.png"
                                            alt="functions"
                                            width="32"
                                            height="32"
                                        />
                                        <h4 class="aw-main-body-400 aw-u-color-text-primary">
                                            Functions
                                        </h4>
                                        <span
                                            class="aw-icon-arrow-right u-margin-inline-start-auto"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p class="aw-sub-body-400">
                                        Scale big and unlock limitless potential with Appwrite
                                        functions.
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li class="aw-u-flex-basis-378">
                            <a
                                class="aw-card is-normal"
                                href="/docs/products/databases"
                                style="background: rgba(255, 255, 255, 0.04);"
                            >
                                <div
                                    class="u-flex-vertical u-gap-8 aw-u-padding-inline-8 aw-u-padding-block-end-8"
                                >
                                    <div class="u-flex u-cross-center u-gap-8">
                                        <img
                                            src="/images/icons/illustrated/dark/databases.png"
                                            alt=""
                                            width="32"
                                            height="32"
                                        />
                                        <h4 class="aw-main-body-400 aw-u-color-text-primary">
                                            Databases
                                        </h4>
                                        <span
                                            class="aw-icon-arrow-right u-margin-inline-start-auto"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p class="aw-sub-body-400">
                                        Store and query structured data, ensuring scalable storage.
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li class="aw-u-flex-basis-378">
                            <a
                                class="aw-card is-normal"
                                href="/docs/products/storage"
                                style="background: rgba(255, 255, 255, 0.04);"
                            >
                                <div
                                    class="u-flex-vertical u-gap-8 aw-u-padding-inline-8 aw-u-padding-block-end-8"
                                >
                                    <div class="u-flex u-cross-center u-gap-8">
                                        <img
                                            src="/images/icons/illustrated/dark/storage.png"
                                            alt="storage"
                                            width="32"
                                            height="32"
                                        />
                                        <h4 class="aw-main-body-400 aw-u-color-text-primary">
                                            Storage
                                        </h4>
                                        <span
                                            class="aw-icon-arrow-right u-margin-inline-start-auto"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p class="aw-sub-body-400">
                                        Manage your files' project, using convenient APIs and
                                        utilities.
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li class="aw-u-flex-basis-378">
                            <a
                                class="aw-card is-normal"
                                href="/docs/apis/realtime"
                                style="background: rgba(255, 255, 255, 0.04);"
                            >
                                <div
                                    class="u-flex-vertical u-gap-8 aw-u-padding-inline-8 aw-u-padding-block-end-8"
                                >
                                    <div class="u-flex u-cross-center u-gap-8">
                                        <img
                                            src="/images/icons/illustrated/dark/realtime.png"
                                            alt="realtime"
                                            width="32"
                                            height="32"
                                        />
                                        <h4 class="aw-main-body-400 aw-u-color-text-primary">
                                            Realtime
                                        </h4>
                                        <span
                                            class="aw-icon-arrow-right u-margin-inline-start-auto"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p class="aw-sub-body-400">
                                        Utilize realtime information from all Appwrite services.
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
            <div
                class="aw-big-padding-section-level-2 is-margin-replace-padding u-position-relative"
            >
                <div class="aw-container">
                    <PreFooter />
                    <FooterNav />
                    <MainFooter />
                </div>
            </div>
        </div>
    </div></Main
>

<style lang="scss">
    .hero {
        overflow: hidden;
        position: relative;
        border-block-end: 1px solid hsl(var(--aw-color-offset));
        margin-block-start: -5rem;
        padding-block-start: 5rem;

        .aw-container {
            display: grid;
            // grid-template-columns: 580px 700px;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 5.625rem;
            min-block-size: 800px;
            // block-size: 90vh;
            @media (max-width: 1023px) {
                padding-block-start: 5rem;
                display: flex;
                flex-direction: column;
                gap: 3rem;
                justify-content: center;
                align-items: center;
                width: 100%;
            }

            .phone-wrapper {
                position: relative;
                block-size: 100%;
                inline-size: 100%;

                .phone {
                    max-inline-size: unset;
                    max-block-size: unset;

                    position: absolute;
                    display: block;
                    block-size: 100%;
                    translate: 0 100px;
                    inline-size: auto;
                }
                @media (max-width: 1023px) {
                    block-size: 800px;
                    translate: 0 0;
                }
                @media (max-width: 500px) {
                    block-size: 500px;
                    translate: 0 -50px;
                }
            }
        }

        &-buttons {
            @media (max-width: 500px) {
                flex-direction: column;
                gap: 1rem;
                & a {
                    width: 100%;
                }
            }
        }

        [class^='blur-'] {
            max-inline-size: unset;
            max-block-size: unset;
            pointer-events: none;
        }

        .blur-left {
            position: absolute;
            block-size: 1200px;
            inline-size: auto;
            inset-inline-start: -600px;
            inset-block-start: -250px;
        }

        .blur-right {
            position: absolute;
            block-size: 1200px;
            inline-size: auto;
            inset-inline-end: -500px;
            inset-block-end: -600px;
        }

        .product {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            img {
                $size: 2rem;
                block-size: $size;
                inline-size: $size;
            }
        }

        h1 {
            margin-block-start: 1.25rem;
        }
    }

    .steps {
        position: relative;
        padding-block-start: 5rem;

        --padding-block-end: 7.5rem;
    }
</style>
