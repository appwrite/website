<script>
    import { FooterNav, MainFooter, PreFooter } from '$lib/components';
    import Main from '$lib/layouts/Main.svelte';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import Draft from './(components)/Draft.svelte';
    import Schedule from './(components)/Schedule.svelte';
    import Send from './(components)/Send.svelte';
    import Target from './(components)/Target.svelte';
    import MultiCodeContextless from './(components)/MultiCodeContextless.svelte';

    const title = 'Messaging' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    const codeTopic = [
        {
            language: 'js',
            content: `import { Account, Messaging, ID } from "appwrite"

// Fetch target ID
const account = new Account(client)
const user = await account.get()
const targetId = user.targets[0].$id

// Subscribe to a topic
const messaging = new Messaging(client)
await messaging.createSubscriber(
    ['news', 'sport'],   // Topic ID
    ID.unique(),         // Subscription ID
    targetId,            // Target ID
)`
        },
        {
            language: 'dart',
            content: `import 'package:appwrite/appwrite.dart';

// Fetch target ID
final account = Account(client);
final user = await account.get();
final targetId = user.targets[0].$id;

// Subscribe to a topic
final messaging = Messaging(client);
await messaging.createSubscriber(
    topicId: 'news',
    subscriberId: ID.unique(),
    targetId: targetId
);`
        },
        {
            language: 'kotlin',
            content: `import io.appwrite.services.Account
import io.appwrite.services.Messaging
import io.appwrite.ID

// Fetch target ID
val account = Account(client)
val user = account.get()
val targetId = user.targets[0].id

// Subscribe to a topic
val messaging = Messaging(client)
messaging.createSubscriber(
    topicId = "news",
    subscriberId = ID.unique(),
    targetId = targetId
)`
        },
        {
            language: 'swift',
            content: `import Appwrite

// Fetch target ID
let account = Account(client)
let user = try await account.get()
let targetId = user.targets[0].id

// Subscribe to a topic
let messaging = Messaging(client)
try await messaging.createSubscriber(
    topicId: "news",
    subscriberId: ID.unique(),
    targetId: targetId
)`
        }
    ];

    const codeMessage = [
        {
            language: 'js',
            platform: 'Node.js',
            content: `import { Messaging, ID } from "node-appwrite"

const messaging = Messaging(client);
await messaging.createPush(
    ID.unique(),           // Message ID
    'Breaking update',     // Push title
    'Hello, world!',       // Push body
    ['news', 'sport'],       // Topic IDs
);`
        },
        {
            language: 'ts',
            platform: 'Deno',
            content: `import { Messaging, ID } from "https://deno.land/x/appwrite/mod.ts";

const messaging = new Messaging(client);
await messaging.createPush(
    ID.unique(),           // Message ID
    'Breaking update',     // Push title
    'Hello, world!',       // Push body
    ['news', 'sport'],       // Topic IDs
);`
        },
        {
            language: 'cs',
            platform: '.NET',
            content: `using Appwrite.Services.Messaging;
using Appwrite.ID;

var messaging = new Messaging(client);
await messaging.createPush(
    messageId: ID.unique(),
    subject: "Breaking update",
    content: "Hello, world!",
    topics: ['news', 'sport'],
);`
        },
        {
            language: 'kotlin',
            platform: 'Kotlin',
            content: `import io.appwrite.services.Messaging
import io.appwrite.ID

val messaging = Messaging(client)
messaging.createPush(
    messageId = ID.unique(),
    subject = "Breaking update",
    content = "Hello, world!",
    topics: listOf('news'),
)`
        },
        {
            language: 'swift',
            platform: 'Swift',
            content: `import Appwrite

let messaging = Messaging(client)
try await messaging.createPush(
    messageId: ID.unique(),
    subject: "Breaking update",
    content: "Hello, world!",
    topics: ["news", "sport"]
)`
        },
        {
            language: 'php',
            platform: 'PHP',
            content: `import 'package:appwrite/appwrite.dart';

final messaging = Messaging(client);
await messaging.createPush(
    messageId: ID.unique(),
    subject: "Breaking update",
    content: "Hello, world!",
    topics: ["news", "sport"],
);`
        },
        {
            language: 'dart',
            platform: 'Dart',
            content: `<?php

use Appwrite\Services\Messaging;
use Appwrite\ID;

$messaging = new Messaging(client);
$messaging->createPush(
    messageId: ID::unique(),
    subject: 'Breaking update',
    content: 'Hello, world!',
    topics: ['news', 'sport']
);`
        },
        {
            language: 'python',
            platform: 'Python',
            content: `from appwrite.services.messaging import Messaging
from appwrite.id import ID

messaging = Messaging(client)
messaging.create_email(
    message_id = ID.unique(),
    subject = "Breaking update",
    content = "Hello, world!",
    topics = ["news", "sport"]
)`
        },
        {
            language: 'dart',
            platform: 'Dart',
            content: `<?php

use Appwrite\Services\Messaging;
use Appwrite\ID;

$messaging = new Messaging(client);
$messaging->createPush(
    messageId: ID::unique(),
    subject: 'Breaking update',
    content: 'Hello, world!',
    topics: ['news', 'sport']
);`
        },
        {
            language: 'ruby',
            platform: 'Ruby',
            content: `require 'appwrite'

include Appwrite

messaging = Messaging.new(client)
messaging.create_email(
    message_id: ID.unique(),
    subject: 'Breaking update',
    content: 'Hello, world!',
    topics: ['news', 'sport']
)`
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
</svelte:head>

<Main>
    <div class="web-big-padding-section u-overflow-hidden">
        <div class="hero">
            <img src="/images/products/messaging/blur-left.png" alt="" class="blur-left" />
            <img src="/images/products/messaging/blur-right.png" alt="" class="blur-right" />

            <div class="web-container">
                <div>
                    <div class="product">
                        <img src="/images/icons/illustrated/dark/messaging.png" alt="" />
                        <span class="web-eyebrow web-u-color-text-primary">
                            Messaging<span class="web-u-color-text-accent">_</span>
                        </span>
                        <span class="web-hero-banner-button web-eyebrow">BETA</span>
                    </div>
                    <h1 class="web-display web-u-color-text-primary">
                        Open source messaging service for developers
                    </h1>
                    <p class="web-description u-margin-block-start-20">
                        Set up messaging within minutes and send push notifications, emails, and SMS
                        directly to your users.
                    </p>
                    <div class="u-flex u-items-center u-gap-8 u-margin-block-start-32 hero-buttons">
                        <a class="web-button" href="https://cloud.appwrite.io" target="_blank"
                            >Get started</a
                        >
                        <a
                            class="web-button is-secondary"
                            href="https://appwrite.io/docs/products/messaging"
                            target="_blank">Documentation</a
                        >
                    </div>
                </div>

                <div class="phone-wrapper">
                    <img class="phone"  src="/images/products/messaging/phone.png" alt="" />
                </div>
            </div>
        </div>

        <div class="steps web-container">
            <Draft />
            <Target />
            <Schedule />
            <Send />
        </div>

        <div
            class="web-big-padding-section-level-1 u-position-relative web-white-section theme-light web-u-padding-block-end-0"
        >
            <div class="web-big-padding-section-level-2" style="margin-block-end: 160px">
                <div class="web-container">
                    <section class="web-hero is-align-start">
                        <span class="web-badges web-eyebrow">capabilities_</span>
                        <h2 class="web-display web-u-color-text-primary u-max-width-700">
                            All of your messages in one place
                        </h2>
                    </section>
                    <div class="u-overflow-hidden web-u-margin-block-start-80">
                        <ul class="web-info-boxes is-desktop-max-out-3 web-sub-body-500">
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/mobile.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title">Push notifications</h3>
                                <p class="web-info-boxes-content">
                                    Effortlessly send push notifications for seamless instant
                                    communication.
                                </p>
                                <ul class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-16">
                                    <li>
                                        <a
                                            class="web-interactive-tag"
                                            href="/docs/products/messaging/fcm"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span class="web-icon-firebase" aria-hidden="true" />
                                            <span class="text">FCM</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="web-interactive-tag"
                                            href="/docs/products/messaging/apns"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span class="web-icon-apple" aria-hidden="true" />
                                            <span class="text">APNS</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/email.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title">Emails</h3>
                                <p class="web-info-boxes-content">
                                    Easily send emails for smooth communication and information
                                    sharing.
                                </p>
                                <ul class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-16">
                                    <li>
                                        <a
                                            class="web-interactive-tag"
                                            href="/docs/products/messaging/mailgun"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span class="web-icon-mailgun" aria-hidden="true" />
                                            <span class="text">Mailgun</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="web-interactive-tag"
                                            href="/docs/products/messaging/sendgrid"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span class="web-icon-sendgrid" aria-hidden="true" />
                                            <span class="text">SendGrid</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/message.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title">SMS</h3>
                                <p class="web-info-boxes-content">
                                    Send SMS for quick updates beyond your app's environment.
                                </p>
                                <ul class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-16">
                                    <li>
                                        <a
                                            class="web-interactive-tag"
                                            href="/docs/products/messaging/twilio"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span class="icon-twilio" aria-hidden="true" />
                                            <span class="text">Twilio</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="web-interactive-tag"
                                            href="/docs/products/messaging/vonage"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span class="icon-vonage" aria-hidden="true" />
                                            <span class="text">Vonage</span>
                                        </a>
                                    </li>
                                    <li>
                                        <span class="web-tag">
                                            <span class="text">+3</span>
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/bell.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title">
                                    In app notifications
                                    <span class="web-inline-tag is-pink">Coming Soon</span>
                                </h3>
                                <p class="web-info-boxes-content">
                                    Send realtime alerts to your users within your application.
                                </p>
                                <ul class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-16">
                                    <li>
                                        <a
                                            class="web-interactive-tag"
                                            href="/docs"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span
                                                class="web-icon-appwrite u-small web-u-margin-inline-end-4"
                                                aria-hidden="true"
                                            />
                                            <span class="text">Appwrite</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/chat.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title">
                                    Chat
                                    <span class="web-inline-tag is-pink">Coming Soon</span>
                                </h3>
                                <p class="web-info-boxes-content">
                                    Connect chat apps such as Slack, Discord, and WhatsApp.
                                </p>
                                <ul class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-16">
                                    <li>
                                        <span class="web-interactive-tag" data-readonly>
                                            <span class="icon-slack" aria-hidden="true" />
                                            <span class="text">Slack</span>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="web-interactive-tag" data-readonly>
                                            <span class="icon-discord" aria-hidden="true" />
                                            <span class="text">Discord</span>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="web-interactive-tag" data-readonly>
                                            <span class="icon-whatsapp" aria-hidden="true" />
                                            <span class="text">WhatsApp</span>
                                        </span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- <div class="web-big-padding-section-level-2 u-position-relative u-z-index-1 theme-light">
                <div class="web-container u-position-relative">
                    <img
                        class="u-position-absolute u-z-index-1 is-not-mobile"
                        style="width:1500px; height:auto; max-block-size:none; max-inline-size:none; inset-block-end:-27rem; rotate:145deg; inset-inline-start:-42rem;"
                        src="/images/messaging/stripes.png"
                        alt="stripes"
                    />
                    <div class="grid-1-1 u-position-relative u-z-index-1">
                        <section class="web-hero is-align-start">
                            <span class="web-badges web-eyebrow">PERFORMANCE_</span>
                            <h2 class="web-display u-max-width-600 web-u-color-text-primary">
                                Optimized efficiency
                            </h2>
                        </section>
                        <ul
                            class="web-big-list-info u-margin-inline-start-auto web-u-inline-width-100-percent-mobile-break1 web-u-margin-block-start-48"
                        >
                            <li class="web-big-list-info-item">
                                <div class="web-headline web-u-color-text-primary">500+</div>
                                <div class="web-description web-u-color-text-secondary">
                                    messages per second
                                </div>
                            </li>
                            <li class="web-big-list-info-item">
                                <div class="web-headline web-u-color-text-primary">33k+</div>
                                <div class="web-description web-u-color-text-secondary">
                                    messages per minute
                                </div>
                            </li>
                            <li class="web-big-list-info-item">
                                <div class="web-headline web-u-color-text-primary">9</div>
                                <div class="web-description web-u-color-text-secondary">
                                    third party providers
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> -->
        </div>

        <div
            class="u-position-relative u-z-index-1"
            style="background-color:hsl(var(--web-color-greyscale-900)); padding-block-start: 40px"
        >
            <div class="web-big-padding-section-level-2">
                <div class="web-container">
                    <div class="web-hero is-align-start">
                        <span class="web-badges web-eyebrow">SDKs_</span>
                        <h2 class="web-display web-u-color-text-primary u-max-width-700">
                            Start today with your preferred technologies
                        </h2>
                    </div>
                    <div
                        class="web-grid-1-1-opt-2 web-u-gap-64 web-u-margin-block-start-64 code-snippets"
                    >
                        <div class="u-flex-vertical u-gap-8 u-min-width-0">
                            <h3 class="web-label web-u-color-text-primary">Subscribe to a topic</h3>
                            <p class="web-description">
                                Subscribe to receive all messages related to a topic.
                            </p>

                            <div
                                class="u-margin-block-start-16 u-min-width-0"
                                style="margin-block-end: 94px"
                            >
                                <MultiCodeContextless data={codeTopic} height={450} />
                            </div>
                        </div>
                        <div class="u-flex-vertical u-gap-8 u-min-width-0">
                            <h3 class="web-label web-u-color-text-primary">Send a message</h3>
                            <p class="web-description">Send a message to all targets on a topic.</p>
                            <div class="u-margin-block-start-16 u-min-width-0">
                                <MultiCodeContextless data={codeMessage} height={450} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section
            class="web-big-padding-section-level-1 web-u-sep-block-start web-u-padding-block-start-80"
        >
            <div class="web-container">
                <h4 class="web-label u-text-center web-u-color-text-primary">
                    Keep exploring our products
                </h4>
                <ul
                    class="u-grid u-gap-32 u-margin-block-start-32"
                    style="grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr))"
                >
                    <li class="web-u-flex-basis-378">
                        <a
                            class="web-card is-normal"
                            href="/docs/products/auth"
                            style="background: rgba(255, 255, 255, 0.04);"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div
                                class="u-flex-vertical u-gap-8 web-u-padding-inline-8 web-u-padding-block-end-8"
                            >
                                <div class="u-flex u-cross-center u-gap-8">
                                    <img
                                        src="/images/icons/illustrated/dark/auth.png"
                                        alt="auth"
                                        width="32"
                                        height="32"
                                    />
                                    <h4 class="web-main-body-400 web-u-color-text-primary">Auth</h4>
                                    <span
                                        class="web-icon-arrow-right u-margin-inline-start-auto"
                                        aria-hidden="true"
                                    />
                                </div>
                                <p class="web-sub-body-400">
                                    Build secure authentication and manage your users.
                                </p>
                            </div>
                        </a>
                    </li>
                    <li class="web-u-flex-basis-378">
                        <a
                            class="web-card is-normal"
                            href="/docs/products/functions"
                            target="_blank"
                            rel="noopener noreferrer"
                            style="background: rgba(255, 255, 255, 0.04);"
                        >
                            <div
                                class="u-flex-vertical u-gap-8 web-u-padding-inline-8 web-u-padding-block-end-8"
                            >
                                <div class="u-flex u-cross-center u-gap-8">
                                    <img
                                        src="/images/icons/illustrated/dark/functions.png"
                                        alt="functions"
                                        width="32"
                                        height="32"
                                    />
                                    <h4 class="web-main-body-400 web-u-color-text-primary">
                                        Functions
                                    </h4>
                                    <span
                                        class="web-icon-arrow-right u-margin-inline-start-auto"
                                        aria-hidden="true"
                                    />
                                </div>
                                <p class="web-sub-body-400">
                                    Scale big and unlock limitless potential with Appwrite
                                    functions.
                                </p>
                            </div>
                        </a>
                    </li>
                    <li class="web-u-flex-basis-378">
                        <a
                            class="web-card is-normal"
                            href="/docs/products/databases"
                            target="_blank"
                            rel="noopener noreferrer"
                            style="background: rgba(255, 255, 255, 0.04);"
                        >
                            <div
                                class="u-flex-vertical u-gap-8 web-u-padding-inline-8 web-u-padding-block-end-8"
                            >
                                <div class="u-flex u-cross-center u-gap-8">
                                    <img
                                        src="/images/icons/illustrated/dark/databases.png"
                                        alt=""
                                        width="32"
                                        height="32"
                                    />
                                    <h4 class="web-main-body-400 web-u-color-text-primary">
                                        Databases
                                    </h4>
                                    <span
                                        class="web-icon-arrow-right u-margin-inline-start-auto"
                                        aria-hidden="true"
                                    />
                                </div>
                                <p class="web-sub-body-400">
                                    Store and query structured data, ensuring scalable storage.
                                </p>
                            </div>
                        </a>
                    </li>
                    <li class="web-u-flex-basis-378">
                        <a
                            class="web-card is-normal"
                            href="/docs/products/storage"
                            target="_blank"
                            rel="noopener noreferrer"
                            style="background: rgba(255, 255, 255, 0.04);"
                        >
                            <div
                                class="u-flex-vertical u-gap-8 web-u-padding-inline-8 web-u-padding-block-end-8"
                            >
                                <div class="u-flex u-cross-center u-gap-8">
                                    <img
                                        src="/images/icons/illustrated/dark/storage.png"
                                        alt="storage"
                                        width="32"
                                        height="32"
                                    />
                                    <h4 class="web-main-body-400 web-u-color-text-primary">
                                        Storage
                                    </h4>
                                    <span
                                        class="web-icon-arrow-right u-margin-inline-start-auto"
                                        aria-hidden="true"
                                    />
                                </div>
                                <p class="web-sub-body-400">
                                    Manage your files' project, using convenient APIs and utilities.
                                </p>
                            </div>
                        </a>
                    </li>
                    <li class="web-u-flex-basis-378">
                        <a
                            class="web-card is-normal"
                            href="/docs/apis/realtime"
                            target="_blank"
                            rel="noopener noreferrer"
                            style="background: rgba(255, 255, 255, 0.04);"
                        >
                            <div
                                class="u-flex-vertical u-gap-8 web-u-padding-inline-8 web-u-padding-block-end-8"
                            >
                                <div class="u-flex u-cross-center u-gap-8">
                                    <img
                                        src="/images/icons/illustrated/dark/realtime.png"
                                        alt="realtime"
                                        width="32"
                                        height="32"
                                    />
                                    <h4 class="web-main-body-400 web-u-color-text-primary">
                                        Realtime
                                    </h4>
                                    <span
                                        class="web-icon-arrow-right u-margin-inline-start-auto"
                                        aria-hidden="true"
                                    />
                                </div>
                                <p class="web-sub-body-400">
                                    Utilize realtime information from all Appwrite services.
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <div class="web-big-padding-section-level-2 is-margin-replace-padding u-position-relative">
            <div class="web-container">
                <PreFooter />
                <FooterNav />
                <MainFooter />
            </div>
        </div>
    </div>
</Main>

<style lang="scss">
    .hero {
        overflow: hidden;
        position: relative;
        border-block-end: 1px solid hsl(var(--web-color-offset));
        margin-block-start: -5rem;
        padding-block-start: 5rem;

        .web-container {
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
                //width: 100%;
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

    .code-snippets {
        position: relative;
        &:before {
            content: '';
            position: absolute;
            inset: 0;
            inset-inline-start: 50%;
            inset-block-end: 2.9rem;
            transform: translateX(-50%);
            width: 1px;
            background: hsl(var(--web-color-offset));
            z-index: -1;
            @media screen and (max-width: 1024px) {
                display: none;
            }
        }
    }

    .web-interactive-tag[data-readonly] {
        cursor: not-allowed;
        pointer-events: none;
    }

    @media (min-width:1024px) and (max-width:1279px) {
      .hero { padding-block-start:0; }
    }
</style>
