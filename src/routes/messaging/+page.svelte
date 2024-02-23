<script lang="ts">
    import { Main } from '$lib/layouts';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import PreFooter from '$lib/components/PreFooter.svelte';

    export let data;
</script>

<Main>
    <div class="aw-big-padding-section u-overflow-hidden">
        <div class="aw-big-padding-section-level-1 u-position-relative u-overflow-hidden">
            <div class="green-gradient" />
            <div class="pink-gradient" />
            <div class="aw-big-padding-section-level-2">
                <div class="aw-container u-position-relative">
                    <div
                        class="aw-hero is-align-start is-mobile-center aw-u-gap-20 aw-u-max-width-900"
                        style="--hero-max-inline-size:48rem"
                    >
                        <div class="u-flex u-cross-center u-gap-8">
                            <img
                                src="/images/icons/illustrated/dark/auth.png"
                                alt=""
                                width="32"
                                height="32"
                            />
                            <span class="aw-eyebrow aw-u-color-text-accent-click"
                                >MESSAGING<span class="aw-u-text-color-primary-500">_</span></span
                            >
                            <div class="aw-hero-banner-button aw-eyebrow">BETA</div>
                        </div>
                        <h1 class="aw-display aw-u-color-text-primary aw-u-text-wrap-balance">
                            Open source messaging service for developers
                        </h1>
                        <div>
                            <p class="aw-description">
                                Send push notifications, emails, and SMS in just minutes,
                                streamlining your multi-channel communication effortlessly.
                            </p>
                            <div
                                class="u-flex u-flex-wrap u-gap-12 u-margin-block-start-32 aw-u-flex-direction-column-mobile"
                            >
                                <a href="" class="aw-button is-full-width-mobile">
                                    <span>Get started</span>
                                </a>
                                <a href="" class="aw-button is-secondary is-full-width-mobile">
                                    <span>Read the docs</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="aw-big-padding-section-level-1 aw-u-sep-block-start">
            <div class="aw-big-padding-section-level-2" />
        </div>

        <div class="aw-big-padding-section-level-1" />

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
                        alt
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
                            <section
                                class="theme-dark aw-code-snippet u-margin-block-start-24"
                                aria-label="code-snippet panel"
                            >
                                <header class="aw-code-snippet-header">
                                    <div class="aw-code-snippet-header-start">
                                        <div class="u-flex u-gap-16">
                                            <div class="aw-interactive-tag">
                                                <span class="text">Web</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="aw-code-snippet-header-end">
                                        <ul class="buttons-list u-flex u-gap-8">
                                            <li
                                                class="buttons-list-item u-flex u-cross-child-scenter"
                                            >
                                                <div class="aw-select">
                                                    <select>
                                                        <option value="js">JavaScript</option>
                                                        <option value="php">PHP</option>
                                                        <option value="python">Python</option>
                                                        <option value="ruby">Ruby</option>
                                                        <option value="deno">Deno</option>
                                                        <option value="dart">Dart</option>
                                                        <option value="kotlin">Kotlin</option>
                                                        <option value="swift">Swift</option>
                                                        <option value="csharp">C#</option>
                                                    </select>
                                                    <span
                                                        class="icon-cheveron-down"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                            </li>
                                            <li
                                                class="buttons-list-item aw-u-padding-inline-start-20"
                                            >
                                                <button
                                                    class="aw-icon-button"
                                                    aria-label="copy code from code-snippet"
                                                >
                                                    <span class="aw-icon-copy" aria-hidden="true" />
                                                </button>
                                                <!--<Tooltip>-->
                                            </li>
                                        </ul>
                                    </div>
                                </header>
                                <div class="aw-code-snippet-content" style="background:none">
                                    [CODE]
                                </div>
                            </section>
                        </div>
                        <div class="u-flex-vertical u-gap-16">
                            <h3 class="aw-label aw-u-color-text-primary">Subscribe to a topic</h3>
                            <p class="aw-description">
                                Subscribe to receive all messages related to that topic.
                            </p>
                            <section
                                class="theme-dark aw-code-snippet u-margin-block-start-24"
                                aria-label="code-snippet panel"
                            >
                                <header class="aw-code-snippet-header">
                                    <div class="aw-code-snippet-header-start">
                                        <div class="u-flex u-gap-16">
                                            <div class="aw-interactive-tag">
                                                <span class="text">Web</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="aw-code-snippet-header-end">
                                        <ul class="buttons-list u-flex u-gap-8">
                                            <li
                                                class="buttons-list-item u-flex u-cross-child-scenter"
                                            >
                                                <div class="aw-select">
                                                    <select>
                                                        <option value="js">JavaScript</option>
                                                        <option value="php">PHP</option>
                                                        <option value="python">Python</option>
                                                        <option value="ruby">Ruby</option>
                                                        <option value="deno">Deno</option>
                                                        <option value="dart">Dart</option>
                                                        <option value="kotlin">Kotlin</option>
                                                        <option value="swift">Swift</option>
                                                        <option value="csharp">C#</option>
                                                    </select>
                                                    <span
                                                        class="icon-cheveron-down"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                            </li>
                                            <li
                                                class="buttons-list-item aw-u-padding-inline-start-20"
                                            >
                                                <button
                                                    class="aw-icon-button"
                                                    aria-label="copy code from code-snippet"
                                                >
                                                    <span class="aw-icon-copy" aria-hidden="true" />
                                                </button>
                                                <!--<Tooltip>-->
                                            </li>
                                        </ul>
                                    </div>
                                </header>
                                <div class="aw-code-snippet-content" style="background:none">
                                    [CODE]
                                </div>
                            </section>
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
                                href=""
                                style="background: rgba(255, 255, 255, 0.04);"
                            >
                                <div
                                    class="u-flex-vertical u-gap-8 aw-u-padding-inline-8 aw-u-padding-block-end-8"
                                >
                                    <div class="u-flex u-cross-center u-gap-8">
                                        <img
                                            src="/images/icons/illustrated/dark/auth.png"
                                            alt=""
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
                                href=""
                                style="background: rgba(255, 255, 255, 0.04);"
                            >
                                <div
                                    class="u-flex-vertical u-gap-8 aw-u-padding-inline-8 aw-u-padding-block-end-8"
                                >
                                    <div class="u-flex u-cross-center u-gap-8">
                                        <img
                                            src="/images/icons/illustrated/dark/functions.png"
                                            alt=""
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
                                href=""
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
                                href=""
                                style="background: rgba(255, 255, 255, 0.04);"
                            >
                                <div
                                    class="u-flex-vertical u-gap-8 aw-u-padding-inline-8 aw-u-padding-block-end-8"
                                >
                                    <div class="u-flex u-cross-center u-gap-8">
                                        <img
                                            src="/images/icons/illustrated/dark/storage.png"
                                            alt=""
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
                                        Manage your files’ project, using convenient APIs and
                                        utilities.
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li class="aw-u-flex-basis-378">
                            <a
                                class="aw-card is-normal"
                                href=""
                                style="background: rgba(255, 255, 255, 0.04);"
                            >
                                <div
                                    class="u-flex-vertical u-gap-8 aw-u-padding-inline-8 aw-u-padding-block-end-8"
                                >
                                    <div class="u-flex u-cross-center u-gap-8">
                                        <img
                                            src="/images/icons/illustrated/dark/realtime.png"
                                            alt=""
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
    </div>
</Main>

<style lang="scss">
    .pink-gradient {
        position: absolute;
        inset-block-start: 50px;
        inset-inline-end: -120px;
        inline-size: 983px;
        block-size: 985px;
        background: url('/images/messaging/pink-gradient.png') no-repeat;
        background-position: center center;
        background-size: contain;
    }

    .green-gradient {
        position: absolute;
        inset-block-start: -30px;
        inset-inline-start: -120px;
        inline-size: 460px;
        block-size: 709px;
        background: url('/images/messaging/green-gradient.png') no-repeat;
        background-position: center center;
        background-size: contain;
    }
</style>
