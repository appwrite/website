<script lang="ts">
    import { Main } from '$lib/layouts';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import PreFooter from '$lib/components/PreFooter.svelte';
    import { Carousel } from '$lib/components';
    import { TITLE_SUFFIX } from '$routes/titles';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import FloatingHeads from '$lib/components/FloatingHeads.svelte';
    import type { EventCardProps } from './EventCard.svelte';
    import EventCard from './EventCard.svelte';

    const events: EventCardProps[] = [
        {
            href: '/discord',
            cover: {
                src: '/images/community/events/office-hours.png',
                alt: ''
            },
            date: 'Sep 28th',
            location: 'Discord',
            title: 'Office hours',
            description: 'Join us for an exciting hour of technical conversations around Appwrite.',
            buttonText: 'View event'
        },
        {
            href: 'https://www.twitch.tv/wesscope',
            cover: {
                src: '/images/community/events/live-coding.png',
                alt: ''
            },
            date: 'Sep 28th',
            location: 'Twitch',
            title: 'Live coding with Wess',
            description: "Pluck is going mobile. Join us in building Pluck.io's Flutter app.",
            buttonText: 'View event'
        },
        {
            href: 'https://lu.ma/hf-kickoff-blr',
            cover: {
                src: '/images/community/events/hf-kickoff-bangalore.png',
                alt: 'Hacktoberfest kickoff event'
            },
            date: 'Oct 1st',
            location: 'Bengaluru',
            title: 'Hacktoberfest kickoff event',
            description: 'Join us for our Hacktoberfest kickoff event in Bengaluru.',
            buttonText: 'View event'
        },
        {
            href: 'https://hacktoberfest.com/',
            cover: {
                src: '/images/community/events/oss-celebration.png',
                alt: 'Hacktoberfest kickoff event'
            },
            date: 'Oct',
            location: 'Virtual',
            title: 'Hacktoberfest 10',
            description:
                'Join us for a month long celebration of open source in collaboration with DigitalOcean.',
            buttonText: 'View event'
        }
    ];

    const title = 'Community' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';
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
        <div class="aw-big-padding-section-level-1 u-position-relative u-overflow-hidden">
            <div
                class="u-position-absolute aw-u-hide-mobile"
                style:inline-size="704px"
                style:block-size="670px"
                style:z-index="-1"
                style:left="calc((50% - 704px / 2) + 18rem)"
                style:top="-4rem"
            >
                <img src="/images/community/sphere.png" alt="" />
            </div>
            <div class="aw-big-padding-section-level-2">
                <section class="aw-container aw-u-padding-block-end-0 u-position-relative">
                    <div class="aw-hero is-align-start aw-u-max-width-580">
                        <h1 class="aw-display aw-u-color-text-primary">
                            Built by a community of 700+ contributors
                        </h1>
                        <div>
                            <p class="aw-description">
                                Inspire and get inspired. Join Appwrite's community of maintainers
                                and contributors and help us make Appwrite better for developers
                                worldwide.
                            </p>
                            <div class="u-flex u-flex-wrap u-gap-12 u-margin-block-start-32">
                                <a
                                    href="/discord"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="aw-button is-full-width-mobile"
                                >
                                    <span class="text">Join our Discord</span>
                                </a>
                                <a
                                    href="https://github.com/appwrite/appwrite/stargazers"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="aw-button is-secondary is-full-width-mobile"
                                >
                                    <span aria-hidden="true" class="aw-icon-star" />
                                    <span>Star on GitHub</span>
                                    <span class="aw-inline-tag aw-sub-body-400">36.8K</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="aw-big-padding-section-level-2">
                <section class="aw-container">
                    <ul class="aw-grid-row-4 aw-grid-row-4-mobile-2" style="--gap-mobile:1.5rem;">
                        <li>
                            <div class="aw-card is-normal">
                                <div class="aw-title aw-u-color-text-primary">33K+</div>
                                <div class="aw-description">GitHub Stars</div>
                            </div>
                        </li>
                        <li>
                            <div class="aw-card is-normal">
                                <div class="aw-title aw-u-color-text-primary">8K+</div>
                                <div class="aw-description">Pull Requests</div>
                            </div>
                        </li>
                        <li>
                            <div class="aw-card is-normal">
                                <div class="aw-title aw-u-color-text-primary">15K+</div>
                                <div class="aw-description">Commits</div>
                            </div>
                        </li>
                        <li>
                            <div class="aw-card is-normal">
                                <div class="aw-title aw-u-color-text-primary">2.5K+</div>
                                <div class="aw-description">Issues</div>
                            </div>
                        </li>
                        <li>
                            <div class="aw-card is-normal">
                                <div class="aw-title aw-u-color-text-primary">400+</div>
                                <div class="aw-description">Open Issues</div>
                            </div>
                        </li>
                        <li>
                            <div class="aw-card is-normal">
                                <div class="aw-title aw-u-color-text-primary">1.9K+</div>
                                <div class="aw-description">Closed Issues</div>
                            </div>
                        </li>
                        <li>
                            <div class="aw-card is-normal">
                                <div class="aw-title aw-u-color-text-primary">4.9K+</div>
                                <div class="aw-description">Forks</div>
                            </div>
                        </li>
                        <li>
                            <div class="aw-card is-normal">
                                <div class="aw-title aw-u-color-text-primary">20K+</div>
                                <div class="aw-description">Contributors</div>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>

        <div class="aw-big-padding-section-level-1 u-position-relative">
            <div class="absolute-container">
                <div class="green-gradient" />
                <div class="pink-gradient" />
                <FloatingHeads
                    images={[
                        '/images/community/avatars/1.png',
                        '/images/community/avatars/2.png',
                        '/images/avatars/torsten.png',
                        '/images/community/avatars/3.png',
                        '/images/avatars/jade.png',
                        '/images/community/avatars/4.png',
                        '/images/community/avatars/5.png',
                        '/images/avatars/haimantika.png',
                        '/images/community/avatars/6.png',
                        '/images/avatars/may.png'
                    ]}
                />
            </div>

            <div class="aw-big-padding-section-level-2">
                <div class="aw-container u-position-relative">
                    <div class="aw-hero is-mobile-center aw-u-gap-20 aw-u-max-width-900">
                        <h1 class="aw-headline aw-u-color-text-primary">
                            The power of open source benefits us all
                        </h1>
                        <div>
                            <p class="aw-description">
                                See contributors of Appwrite since 2019 and discover how you can
                                start contributing.
                            </p>
                            <div
                                class="u-flex u-flex-wrap u-main-center u-gap-12 u-margin-block-start-32"
                            >
                                <a
                                    href="https://github.com/appwrite/appwrite/graphs/contributors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="aw-button is-secondary is-full-width-mobile"
                                >
                                    <span>View all contributors</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="aw-big-padding-section-level-1">
            <div class="aw-big-padding-section-level-2">
                <div class="aw-container">
                    <div class="aw-hero is-align-start">
                        <h2 class="aw-display aw-u-color-text-primary">Get involved</h2>
                        <div>
                            <p class="aw-description">
                                With every contribution, Appwrite gets better for all of us. Start
                                contributing today.
                            </p>
                        </div>
                    </div>

                    <div
                        class="aw-card is-normal u-margin-block-start-32"
                        style="--card-padding:2rem; --card-padding-mobile:1.25rem;"
                    >
                        <div
                            class="u-flex aw-u-flex-direction-column-mobile
									aw-u-gap-96 aw-u-row-gap-48"
                        >
                            <div>
                                <h3 class="aw-label aw-u-color-text-primary">
                                    Check our Open Issues
                                </h3>
                                <p class="aw-main-body-500 u-margin-block-start-4">
                                    Anyone can join and help Appwrite become better.
                                </p>
                                <a
                                    href="https://github.com/appwrite/appwrite/issues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="aw-button is-secondary u-margin-block-start-32"
                                >
                                    <span class="aw-icon-github" aria-hidden="true" />
                                    <span class="">View all Open Issues</span>
                                </a>
                            </div>
                            <div class="u-stretch">
                                <table class="aw-table-line">
                                    <thead class="aw-table-line-head">
                                        <tr class="aw-table-line-row">
                                            <th
                                                class="aw-table-line-cell aw-u-color-text-primary u-un-break-text"
                                                >Issue #</th
                                            >
                                            <th class="aw-table-line-cell aw-u-color-text-primary"
                                                >Title</th
                                            >
                                        </tr>
                                    </thead>
                                    <tbody class="aw-table-line-body">
                                        <tr class="aw-table-line-row">
                                            <td class="aw-table-line-cell u-un-break-text">
                                                <span class="aw-caption-400">#5232</span>
                                            </td>
                                            <td class="aw-table-line-cell">
                                                <div>
                                                    <a
                                                        href="https://github.com/appwrite/appwrite/issues/5232"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        class="aw-link aw-sub-body-500"
                                                    >
                                                        Feature: Security Scans like SAST, DAST,
                                                        FOSS, CAST in pipeline
                                                    </a>
                                                    <span>(appwrite/appwrite)</span>
                                                </div>
                                                <ul
                                                    class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-8"
                                                >
                                                    <li>
                                                        <div class="aw-tag">Enhancement</div>
                                                    </li>
                                                    <li>
                                                        <div class="aw-tag">Help Wanted</div>
                                                    </li>
                                                    <li>
                                                        <div class="aw-tag">Discussion</div>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr class="aw-table-line-row">
                                            <td class="aw-table-line-cell u-un-break-text">
                                                <span class="aw-caption-400">#5748</span>
                                            </td>
                                            <td class="aw-table-line-cell">
                                                <div>
                                                    <a
                                                        href="https://github.com/appwrite/appwrite/issues/5748"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        class="aw-link aw-sub-body-500"
                                                    >
                                                        Feature: overload Feature for
                                                        Storage.CreateFile for using Blob instead of
                                                        File
                                                    </a>
                                                    <span>(appwrite/appwrite)</span>
                                                </div>
                                                <ul
                                                    class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-8"
                                                >
                                                    <li>
                                                        <div class="aw-tag">Enhancement</div>
                                                    </li>
                                                    <li>
                                                        <div class="aw-tag">Help Wanted</div>
                                                    </li>
                                                    <li>
                                                        <div class="aw-tag">Discussion</div>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr class="aw-table-line-row">
                                            <td class="aw-table-line-cell u-un-break-text">
                                                <span class="aw-caption-400">#680</span>
                                            </td>
                                            <td class="aw-table-line-cell">
                                                <div>
                                                    <a
                                                        href="https://github.com/appwrite/sdk-generator/issues/680"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        class="aw-link aw-sub-body-500"
                                                    >
                                                        Feature: Unit Tests
                                                    </a>
                                                    <span>(appwrite/sdk-generator)</span>
                                                </div>
                                                <ul
                                                    class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-8"
                                                >
                                                    <li>
                                                        <div class="aw-tag">Enhancement</div>
                                                    </li>
                                                    <li>
                                                        <div class="aw-tag">Help Wanted</div>
                                                    </li>
                                                    <li>
                                                        <div class="aw-tag">Discussion</div>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr class="aw-table-line-row">
                                            <td class="aw-table-line-cell u-un-break-text">
                                                <span class="aw-caption-400">#679</span>
                                            </td>
                                            <td class="aw-table-line-cell">
                                                <div>
                                                    <a
                                                        href="https://github.com/appwrite/sdk-generator/issues/679"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        class="aw-link aw-sub-body-500"
                                                    >
                                                        Feature: overload Feature for
                                                        Storage.CreateFile for using Blob instead of
                                                        File
                                                    </a>
                                                    <span>(appwrite/sdk-generator)</span>
                                                </div>
                                                <ul
                                                    class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-8"
                                                >
                                                    <li>
                                                        <div class="aw-tag">Enhancement</div>
                                                    </li>
                                                    <li>
                                                        <div class="aw-tag">Help Wanted</div>
                                                    </li>
                                                    <li>
                                                        <div class="aw-tag">Discussion</div>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="aw-big-padding-section-level-2">
                <section class="aw-container">
                    <h4 class="aw-label aw-u-color-text-primary">Other ways to help</h4>
                    <ul
                        class="grid-box u-gap-32 aw-u-gap-20-mobile u-margin-block-start-20"
                        style="--grid-item-size:15rem"
                    >
                        <li>
                            <div class="aw-card is-normal u-flex-vertical aw-u-gap-6">
                                <div class="aw-sub-body-500 aw-u-color-text-primary">
                                    Create content
                                </div>
                                <div class="aw-sub-body-400">
                                    Help others discover Appwrite with videos and blogs.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="aw-card is-normal u-flex-vertical aw-u-gap-6">
                                <div class="aw-sub-body-500 aw-u-color-text-primary">
                                    Present at meetups
                                </div>
                                <div class="aw-sub-body-400">
                                    Share your experience and represent Appwrite in public.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="aw-card is-normal u-flex-vertical aw-u-gap-6">
                                <div class="aw-sub-body-500 aw-u-color-text-primary">
                                    Report bugs
                                </div>
                                <div class="aw-sub-body-400">
                                    Find bugs and submit PRs to fix them.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="aw-card is-normal u-flex-vertical aw-u-gap-6">
                                <div class="aw-sub-body-500 aw-u-color-text-primary">
                                    Submit new ideas
                                </div>
                                <div class="aw-sub-body-400">
                                    Suggest features, integrations, or SDKs for our roadmap.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="aw-card is-normal u-flex-vertical aw-u-gap-6">
                                <div class="aw-sub-body-500 aw-u-color-text-primary">
                                    Improve documentation
                                </div>
                                <div class="aw-sub-body-400">
                                    Find improvements in our docs and improve accessibility.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="aw-card is-normal u-flex-vertical aw-u-gap-6">
                                <div class="aw-sub-body-500 aw-u-color-text-primary">
                                    Helping others
                                </div>
                                <div class="aw-sub-body-400">
                                    Support developers with their projects and contributions.
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
            <div class="aw-big-padding-section-level-2">
                <section class="aw-container aw-u-sep-block-start aw-u-padding-block-start-64">
                    <Carousel size="big">
                        <svelte:fragment slot="header">
                            <h4 class="aw-label aw-u-color-text-primary">Upcoming Events</h4>
                        </svelte:fragment>
                        {#each events as event}
                            <li>
                                <EventCard
                                    href={event.href}
                                    cover={event.cover}
                                    date={event.date}
                                    location={event.location}
                                    title={event.title}
                                    description={event.description}
                                    buttonText={event.buttonText}
                                />
                            </li>
                        {/each}
                    </Carousel>
                </section>
            </div>
        </div>

        <div
            class="aw-big-padding-section-level-1 u-position-relative aw-white-section theme-light"
        >
            <div class="aw-big-padding-section-level-2">
                <div class="aw-container">
                    <div class="aw-hero is-center">
                        <h2 class="aw-display aw-u-color-text-primary">Inspire and get inspired</h2>
                        <p class="aw-description">
                            Visit our showcase website built with Appwrite to find inspiration for
                            your projects or to showcase what you have built.
                        </p>
                        <a
                            href="https://builtwith.appwrite.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="aw-button is-secondary aw-u-cross-child-center u-margin-block-start-16"
                        >
                            <span>View all projects</span>
                        </a>
                    </div>
                    <ul class="aw-grid-3-desktop-1-mobile aw-u-margin-block-start-64">
                        <li>
                            <a
                                class="aw-card is-white aw-u-flex-vertical u-gap-8"
                                href="https://builtwith.appwrite.io/projects/6467cedd4502d0e29205/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style="--card-padding:0.5rem;"
                            >
                                <div class="u-padding-12">
                                    <h3 class="aw-main-body-500 aw-u-color-text-primary">
                                        Auth UI
                                    </h3>
                                    <p class="u-trim-2">
                                        Appwirte-powered authentication screens generator for any
                                        application.
                                    </p>
                                </div>
                                <img
                                    src="https://cloud.appwrite.io/v1/storage/buckets/thumbnails/files/64803bb4f34eb4b05ee3/preview?width=800&output=webp&project=builtWithAppwrite"
                                    class="u-width-full-line aw-u-block-size-160 aw-u-media-cover"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                class="aw-card is-white aw-u-flex-vertical u-gap-8"
                                href="https://builtwith.appwrite.io/projects/648bfe0c1d8d70602b0b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style="--card-padding:0.5rem;"
                            >
                                <div class="u-padding-12">
                                    <h3 class="aw-main-body-500 aw-u-color-text-primary">Glitch</h3>
                                    <p class="u-trim-2">
                                        Appwrite-powered collaboration Tool for streamlined team
                                        communication.
                                    </p>
                                </div>
                                <img
                                    src="/images/community/projects/glitch.png"
                                    class="u-width-full-line aw-u-block-size-160 aw-u-media-cover"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                class="aw-card is-white aw-u-flex-vertical u-gap-8"
                                href="https://builtwith.appwrite.io/projects/648606ad9cd179190b28/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style="--card-padding:0.5rem;"
                            >
                                <div class="u-padding-12">
                                    <h3 class="aw-main-body-500 aw-u-color-text-primary">
                                        uCanEarn
                                    </h3>
                                    <p class="u-trim-2">
                                        Appwrite-powered platform where you can sell your digital
                                        products online.
                                    </p>
                                </div>
                                <img
                                    src="/images/community/projects/ucanearn.png"
                                    class="u-width-full-line aw-u-block-size-160 aw-u-media-cover"
                                    alt=""
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="aw-big-padding-section-level-1 aw-white-section theme-light">
            <div class="aw-big-padding-section-level-2">
                <div class="aw-container">
                    <div class="aw-grid-15-25-desktop aw-u-row-gap-48 aw-u-column-gap-96">
                        <div class="aw-hero is-align-start aw-u-max-width-380">
                            <div class="aw-display aw-u-color-text-primary">
                                Visit the community
                            </div>
                            <p class="aw-description">
                                Discover Appwrite's community across platforms and join the fun.
                            </p>
                        </div>
                        <ul class="aw-multi-columns-1">
                            <li>
                                <a
                                    href="/discord"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical"
                                    style="--card-padding:2rem"
                                >
                                    <div class="u-flex-vertical u-main-space-between u-gap-32">
                                        <span
                                            class="icon-discord aw-u-font-size-40"
                                            aria-hidden="true"
                                            aria-label="Discord logo"
                                        />
                                    </div>
                                    <div class="aw-title u-margin-block-start-auto">
                                        17K+ members
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/intent/follow?screen_name=appwrite"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical"
                                    style="--card-padding:2rem"
                                >
                                    <div class="u-flex-vertical u-main-space-between u-gap-32">
                                        <span
                                            class="aw-icon-x aw-u-font-size-40"
                                            aria-hidden="true"
                                            aria-label="X logo"
                                        />
                                    </div>
                                    <div class="aw-title u-margin-block-start-auto">
                                        125K+ followers
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/appwrite/appwrite"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical"
                                    style="--card-padding:2rem"
                                >
                                    <div class="u-flex-vertical u-main-space-between u-gap-32">
                                        <span
                                            class="icon-github aw-u-font-size-40"
                                            aria-hidden="true"
                                            aria-label="GitHub logo"
                                        />
                                    </div>
                                    <div class="aw-title u-margin-block-start-auto">
                                        33K+ stargazers
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/c/appwrite?sub_confirmation=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical"
                                    style="--card-padding:2rem"
                                >
                                    <div class="u-flex-vertical u-main-space-between u-gap-32">
                                        <span
                                            class="icon-youtube aw-u-font-size-40"
                                            aria-hidden="true"
                                            aria-label="Youtube logo"
                                        />
                                    </div>
                                    <div class="aw-title u-margin-block-start-auto">
                                        3K+ subscribers
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="aw-big-padding-section-level-1 u-padding-0">
            <div class="aw-big-padding-section-level-2">
                <div class="aw-container">
                    <div class="aw-hero is-center aw-u-max-width-800">
                        <h3 class="aw-display aw-u-color-text-primary">Appwrite insights</h3>
                        <p class="aw-main-body-400">
                            Sign up to our blog and get the latest insights from Appwrite. Learn
                            more about engineering, product design, building community, and tips &
                            tricks for using Appwrite.
                        </p>
                    </div>
                    <div
                        class="aw-subscribe-input aw-input-text is-reset-input-inside u-width-full-line aw-u-max-width-380 u-margin-inline-auto u-margin-block-start-32"
                    >
                        <input type="email" placeholder="Enter your email" />
                        <button class="aw-button">Sign up</button>
                    </div>
                </div>
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
    .absolute-container {
        position: absolute;
        width: 1720px;
        min-height: 100%;
        pointer-events: none;
        left: 50%;
        transform: translateX(-50%);
    }

    .pink-gradient {
        width: 842px;
        height: 719px;
        flex-shrink: 0;

        border-radius: 842px;
        opacity: 0.4;
        background: radial-gradient(50% 46.73% at 50% 53.27%, #fe9567 28.17%, #fd366e 59.38%);
        filter: blur(150px);

        position: absolute;
        right: -250px;
        top: 00px;
    }

    .green-gradient {
        border-radius: 771px;
        opacity: 0.3;
        background: radial-gradient(49.55% 43.54% at 47% 50.69%, #e7f8f7 0%, #85dbd8 100%);
        filter: blur(150px);
        width: 571px;
        height: 771px;
        position: absolute;

        left: -200px;
        bottom: -300px;
    }
</style>
