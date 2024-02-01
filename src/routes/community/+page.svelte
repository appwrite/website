<script lang="ts">
    import { Main } from '$lib/layouts';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import PreFooter from '$lib/components/PreFooter.svelte';
    import { Carousel } from '$lib/components';
    import { TITLE_SUFFIX } from '$routes/titles';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { newsletter } from '$lib/components/Newsletter.svelte';
    import FloatingHeads from '$lib/components/FloatingHeads.svelte';
    import type { EventCardProps } from './EventCard.svelte';
    import EventCard from './EventCard.svelte';
    import type { ProjectCardProps } from './ProjectCard.svelte';
    import ProjectCard from './ProjectCard.svelte';
    import MetricCard from '$lib/components/MetricCard.svelte';

    export let data;

    const events: EventCardProps[] = [
        {
            href: '/discord',
            cover: {
                src: '/images/community/events/december-1.png',
                alt: ''
            },
            date: 'December 14th',
            location: 'Discord',
            title: 'Office hours',
            description: 'Join us for an exciting hour of technical conversations around Appwrite.',
            buttonText: 'View event'
        },
        {
            href: '/discord',
            cover: {
                src: '/images/community/events/december-2.png',
                alt: ''
            },
            date: 'December 21st',
            location: 'Discord',
            title: 'Office hours',
            description: 'Join us for an exciting hour of technical conversations around Appwrite.',
            buttonText: 'View event'
        },
        {
            href: '/discord',
            cover: {
                src: '/images/community/events/december-3.png',
                alt: ''
            },
            date: 'December 28th',
            location: 'Discord',
            title: 'Office hours',
            description: 'Join us for an exciting hour of technical conversations around Appwrite.',
            buttonText: 'View event'
        }
    ];

    const projects: ProjectCardProps[] = [
        {
            title: 'Auth UI',
            description: 'Appwrite-powered authentication screens generator for any application.',
            image: {
                src: 'https://cloud.appwrite.io/v1/storage/buckets/thumbnails/files/64803bb4f34eb4b05ee3/preview?width=800&output=webp&project=builtWithAppwrite',
                alt: 'Auth UI: Fully customizable login flow for your applications'
            },
            href: 'https://builtwith.appwrite.io/projects/6467cedd4502d0e29205/'
        },
        {
            title: 'Glitch',
            description: 'Appwrite-powered collaboration Tool for streamlined team communication.',
            image: {
                src: '/images/community/projects/glitch.png',
                alt: 'A screenshot of the Glitch dashboard. There\'s a sidebar, and a headline that reads: "Welcome to Glitch, powered by Appwrite"'
            },
            href: 'https://builtwith.appwrite.io/projects/648bfe0c1d8d70602b0b/'
        },
        {
            title: 'uCanEarn',
            description:
                'Appwrite-powered platform where you can sell your digital products online.',
            image: {
                src: '/images/community/projects/ucanearn.png',
                alt: "A screenshot of uCanEarn's website"
            },
            href: 'https://builtwith.appwrite.io/projects/648606ad9cd179190b28/'
        }
    ];

    const metrics = [
        { metric: '39K+', description: 'GitHub Stars' },
        { metric: '3K+', description: 'Pull Requests' },
        { metric: '18K+', description: 'Commits' },
        { metric: '3K+', description: 'Issues' },
        { metric: '600+', description: 'Open Issues' },
        { metric: '2.5K+', description: 'Closed Issues' },
        { metric: '3.5K+', description: 'Forks' },
        { metric: '800+', description: 'Contributors' }
    ];

    let name = '';
    let email = '';
    let submitted = false;
    let error: string | undefined;
    let submitting = false;

    async function submit() {
        submitting = true;
        error = undefined;
        const response = await newsletter(name, email);
        submitting = false;
        if (response.status >= 400) {
            error = response.status >= 500 ? 'Server Error.' : 'Error submitting form.';
            return;
        }
        submitted = true;
    }

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
                            Built by a community of 800+ contributors
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
                                    <span class="aw-inline-tag aw-sub-body-400">39.1K</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="aw-big-padding-section-level-2">
                <section class="aw-container">
                    <ul class="aw-grid-row-4 aw-grid-row-4-mobile-2" style="--gap-mobile:1.5rem;">
                        {#each metrics as props}
                            <li>
                                <MetricCard {...props} />
                            </li>
                        {/each}
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
                                        {#each data.issues as issue}
                                            <tr class="aw-table-line-row">
                                                <td class="aw-table-line-cell u-un-break-text">
                                                    <span class="aw-caption-400"
                                                        >#{issue.number}</span
                                                    >
                                                </td>
                                                <td class="aw-table-line-cell">
                                                    <div>
                                                        <a
                                                            href={issue.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            class="aw-link aw-sub-body-500"
                                                        >
                                                            {issue.title}
                                                        </a>
                                                        <span>({issue.repository})</span>
                                                    </div>
                                                    <ul
                                                        class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-8"
                                                    >
                                                        {#each issue.tags as tag}
                                                            <li>
                                                                <div class="aw-tag">{tag}</div>
                                                            </li>
                                                        {/each}
                                                    </ul>
                                                </td>
                                            </tr>
                                        {/each}
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
                            <div
                                class="aw-card is-normal has-border-gradient u-flex-vertical aw-u-gap-6"
                            >
                                <div class="aw-sub-body-500 aw-u-color-text-primary">
                                    Create content
                                </div>
                                <div class="aw-sub-body-400">
                                    Help others discover Appwrite with videos and blogs.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div
                                class="aw-card is-normal has-border-gradient u-flex-vertical aw-u-gap-6"
                            >
                                <div class="aw-sub-body-500 aw-u-color-text-primary">
                                    Present at meetups
                                </div>
                                <div class="aw-sub-body-400">
                                    Share your experience and represent Appwrite in public.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div
                                class="aw-card is-normal has-border-gradient u-flex-vertical aw-u-gap-6"
                            >
                                <div class="aw-sub-body-500 aw-u-color-text-primary">
                                    Report bugs
                                </div>
                                <div class="aw-sub-body-400">
                                    Find bugs and submit PRs to fix them.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div
                                class="aw-card is-normal has-border-gradient u-flex-vertical aw-u-gap-6"
                            >
                                <div class="aw-sub-body-500 aw-u-color-text-primary">
                                    Submit new ideas
                                </div>
                                <div class="aw-sub-body-400">
                                    Suggest features, integrations, or SDKs for our roadmap.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div
                                class="aw-card is-normal has-border-gradient u-flex-vertical aw-u-gap-6"
                            >
                                <div class="aw-sub-body-500 aw-u-color-text-primary">
                                    Improve documentation
                                </div>
                                <div class="aw-sub-body-400">
                                    Find improvements in our docs and improve accessibility.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div
                                class="aw-card is-normal has-border-gradient u-flex-vertical aw-u-gap-6"
                            >
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
                        <p class="aw-description" style:margin-block-start="0">
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
                        {#each projects as project}
                            <li>
                                <ProjectCard {...project} />
                            </li>
                        {/each}
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
                        <ul class="aw-multi-columns-1" style:--p-col-gap="-1rem">
                            <li>
                                <a
                                    href="/discord"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical"
                                    style="--card-padding:2rem;rotate: 6deg"
                                >
                                    <div class="u-flex-vertical u-main-space-between u-gap-32">
                                        <span
                                            class="icon-discord aw-u-font-size-40"
                                            aria-hidden="true"
                                            aria-label="Discord"
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
                                    style="--card-padding:2rem; rotate: 2deg"
                                >
                                    <div class="u-flex-vertical u-main-space-between u-gap-32">
                                        <span
                                            class="aw-icon-x aw-u-font-size-40"
                                            aria-hidden="true"
                                            aria-label="X"
                                        />
                                    </div>
                                    <div class="aw-title u-margin-block-start-auto">
                                        128K+ followers
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/appwrite/appwrite"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical"
                                    style="--card-padding:2rem; rotate: -10deg"
                                >
                                    <div class="u-flex-vertical u-main-space-between u-gap-32">
                                        <span
                                            class="icon-github aw-u-font-size-40"
                                            aria-hidden="true"
                                            aria-label="GitHub"
                                        />
                                    </div>
                                    <div class="aw-title u-margin-block-start-auto">
                                        38K+ stargazers
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/c/appwrite?sub_confirmation=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical"
                                    style="--card-padding:2rem; rotate: -6deg"
                                >
                                    <div class="u-flex-vertical u-main-space-between u-gap-32">
                                        <span
                                            class="icon-youtube aw-u-font-size-40"
                                            aria-hidden="true"
                                            aria-label="Youtube"
                                        />
                                    </div>
                                    <div class="aw-title u-margin-block-start-auto">
                                        4K+ subscribers
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="aw-big-padding-section-level-1">
            <div class="aw-big-padding-section-level-2">
                <div class="aw-container">
                    <div class="aw-grid-1-1-opt-2 u-gap-32">
                        <div class="">
                            <div
                                class="aw-u-max-inline-size-none-mobile"
                                class:aw-u-max-width-380={!submitted}
                            >
                                <section class="u-flex-vertical aw-u-gap-20">
                                    <h1 class="aw-title aw-u-color-text-primary">
                                        Appwrite insights
                                    </h1>
                                    <p class="aw-description aw-u-padding-block-end-40">
                                        Sign up to our company blog and get the latest insights from
                                        Appwrite. Learn more about engineering, product design,
                                        building community, and tips & tricks for using Appwrite.
                                    </p>
                                </section>
                            </div>
                        </div>
                        {#if submitted}
                            <div class="u-flex u-gap-8 u-cross-center">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="9"
                                        cy="9"
                                        r="8"
                                        fill="#FD366E"
                                        fill-opacity="0.08"
                                        stroke="#FD366E"
                                        stroke-opacity="0.32"
                                        stroke-width="1.2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M5.25 10.5L7.75 12.5L12.75 6"
                                        stroke="#E4E4E7"
                                        stroke-width="1.2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>

                                <span class="text">
                                    Thank you for subscribing! An email has been sent to your inbox.
                                </span>
                            </div>
                        {:else}
                            <form
                                method="post"
                                on:submit|preventDefault={submit}
                                class="u-flex-vertical u-gap-16"
                            >
                                <div class="u-flex u-flex-vertical u-gap-4">
                                    <label for="name">Your name</label>
                                    <input
                                        class="aw-input-text"
                                        type="text"
                                        placeholder="Enter your name"
                                        id="name"
                                        name="name"
                                        required
                                        bind:value={name}
                                    />
                                </div>
                                <div class="u-flex u-flex-vertical u-gap-4">
                                    <label for="email">Your email</label>
                                    <input
                                        class="aw-input-text"
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        id="email"
                                        name="email"
                                        bind:value={email}
                                    />
                                </div>
                                <button type="submit" class="aw-button" disabled={submitting}
                                    >Sign up</button
                                >
                                {#if error}
                                    <span class="text">
                                        Something went wrong. Please try again later.
                                    </span>
                                {/if}
                            </form>
                        {/if}
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

    .aw-multi-columns-1 {
        .aw-card {
            border: 1px solid hsl(var(--aw-color-offset));
        }
        @media (max-width: 1235px) {
            --p-col-gap: 2rem !important;
            .aw-card {
                rotate: none !important;
            }
        }
    }
</style>
