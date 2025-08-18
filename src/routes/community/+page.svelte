<script lang="ts" module>
    import type { EventCardProps } from './EventCard.svelte';

    const baseEvent = {
        location: 'Discord',
        title: 'Office Hours: Ask me anything!',
        description:
            'Join us for another round of Office Hours, where we answer your questions and geek out on everything tech and Appwrite!',
        buttonText: 'View event'
    };

    export const events: EventCardProps[] = [
        {
            ...baseEvent,
            href: 'https://discord.com/events/564160730845151244/1279026334496067669/1357434273753338106',
            cover: {
                src: '/images/community/events/office-hours.png',
                alt: ''
            },
            date: '2025-04-10'
        },
        {
            ...baseEvent,
            href: 'https://discord.com/events/564160730845151244/1279026334496067669/1362457578700800000',
            cover: {
                src: '/images/community/events/office-hours-2.png',
                alt: ''
            },
            date: '2025-04-17'
        },
        {
            ...baseEvent,
            href: 'https://discord.com/events/564160730845151244/1279026334496067669/1364994293760000000',
            cover: {
                src: '/images/community/events/office-hours-3.png',
                alt: ''
            },
            date: '2025-04-24'
        }
    ];
</script>

<script lang="ts">
    import { Carousel } from '$lib/components';
    import FloatingHeads from '$lib/components/FloatingHeads.svelte';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import MetricCard from '$lib/components/MetricCard.svelte';
    import { newsletter } from '$lib/components/Newsletter.svelte';
    import PreFooter from '$lib/components/PreFooter.svelte';
    import { Main } from '$lib/layouts';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import EventCard from './EventCard.svelte';
    import type { ProjectCardProps } from './ProjectCard.svelte';
    import ProjectCard from './ProjectCard.svelte';

    import { SOCIAL_STATS } from '$lib/constants';
    import { Button, Icon } from '$lib/components/ui';
    import { trackEvent } from '$lib/actions/analytics';
    import InlineTag from '$lib/components/ui/inline-tag.svelte';

    let { data } = $props();

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
        { metric: SOCIAL_STATS.GITHUB.STAT, description: 'GitHub Stars' },
        { metric: SOCIAL_STATS.GITHUB.EXTRA!.PULL_REQUESTS, description: 'Pull Requests' },
        { metric: SOCIAL_STATS.GITHUB.EXTRA!.COMMITS, description: 'Commits' },
        { metric: SOCIAL_STATS.GITHUB.EXTRA!.ISSUES, description: 'Issues' },
        { metric: SOCIAL_STATS.GITHUB.EXTRA!.OPEN_ISSUES, description: 'Open Issues' },
        { metric: SOCIAL_STATS.GITHUB.EXTRA!.CLOSED_ISSUES, description: 'Closed Issues' },
        { metric: SOCIAL_STATS.GITHUB.EXTRA!.FORKS, description: 'Forks' },
        { metric: SOCIAL_STATS.GITHUB.EXTRA!.CONTRIBUTORS, description: 'Contributors' }
    ];

    let name = $state('');
    let email = $state('');
    let submitted = $state(false);
    let error: string | undefined = $state();
    let submitting = $state(false);

    async function submit() {
        submitting = true;
        error = undefined;
        const response = await newsletter(name, email);

        trackEvent('community-insights_subscribe-submit');

        submitting = false;
        if (response.status >= 400) {
            error = response.status >= 500 ? 'Server Error.' : 'Error submitting form.';
            return;
        }
        submitted = true;
    }

    const title = 'Community' + TITLE_SUFFIX;
    const description =
        'Join our vibrant community of developers. Ask questions, contribute solutions, and inspire others to improve the backend development experience.';
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';
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
    <div class="web-big-padding-section overflow-hidden">
        <div class="relative overflow-hidden py-10">
            <div
                class="web-u-z-index-1-negative web-u-hide-mobile absolute"
                style:inline-size="704px"
                style:block-size="670px"
                style:left="calc((50% - 704px / 2) + 18rem)"
                style:top="-4rem"
            >
                <img src="/images/community/sphere.png" alt="" />
            </div>
            <div class="web-big-padding-section-level-2">
                <section class="web-u-padding-block-end-0 relative container">
                    <div class="web-hero is-align-start web-u-max-width-580">
                        <h1 class="text-display font-aeonik-pro text-primary">
                            Built by a community of 800+ contributors
                        </h1>
                        <div>
                            <p class="text-description">
                                Inspire and get inspired. Join Appwrite's community of maintainers
                                and contributors and help us make Appwrite better for developers
                                worldwide.
                            </p>
                            <div class="mt-8 flex flex-wrap gap-3">
                                <Button
                                    href={SOCIAL_STATS.DISCORD.LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="is-full-width-mobile"
                                >
                                    <span class="text">Join our Discord</span>
                                </Button>
                                <Button
                                    variant="secondary"
                                    href={SOCIAL_STATS.GITHUB.LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="is-full-width-mobile"
                                >
                                    <Icon name="star" aria-hidden="true" />
                                    <span>Star on GitHub</span>
                                    <InlineTag>{SOCIAL_STATS.GITHUB.STAT}</InlineTag>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="web-big-padding-section-level-2">
                <section class="container">
                    <ul class="web-grid-row-4 web-grid-row-4-mobile-2" style="--gap-mobile:1.5rem;">
                        {#each metrics as props}
                            <li>
                                <MetricCard {...props} />
                            </li>
                        {/each}
                    </ul>
                </section>
            </div>
        </div>

        <div class="relative py-10">
            <div class="absolute-container">
                <div class="green-gradient"></div>
                <div class="pink-gradient"></div>
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

            <div class="web-big-padding-section-level-2">
                <div class="relative container">
                    <div class="web-hero is-mobile-center web-u-max-width-900 gap-5">
                        <h2 class="text-headline font-aeonik-pro text-primary">
                            The power of open source benefits us all
                        </h2>
                        <div>
                            <p class="text-description">
                                See contributors of Appwrite since 2019 and discover how you can
                                start contributing.
                            </p>
                            <div class="mt-8 flex flex-wrap justify-center gap-3">
                                <Button
                                    href="{SOCIAL_STATS.GITHUB.LINK}/graphs/contributors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="secondary"
                                    class="is-full-width-mobile"
                                >
                                    <span>View all contributors</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-10">
            <div class="web-big-padding-section-level-2">
                <div class="container">
                    <div class="web-hero is-align-start">
                        <h2 class="text-display font-aeonik-pro text-primary">Get involved</h2>
                        <div>
                            <p class="text-description">
                                With every contribution, Appwrite gets better for all of us. Start
                                contributing today.
                            </p>
                        </div>
                    </div>

                    <div
                        class="web-card is-normal mt-8"
                        style="--card-padding:2rem; --card-padding-mobile:1.25rem;"
                    >
                        <div
                            class="web-u-flex-direction-column-mobile web-u-row-gap-48 flex gap-28"
                        >
                            <div>
                                <h3 class="text-label text-primary">Check our Open Issues</h3>
                                <p class="text-body mt-1 font-medium">
                                    Anyone can join and help Appwrite become better.
                                </p>
                                <Button
                                    href="{SOCIAL_STATS.GITHUB.LINK}/issues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="mt-8"
                                    variant="secondary"
                                >
                                    <Icon name="github" aria-hidden="true" />
                                    <span class="">View all Open Issues</span>
                                </Button>
                            </div>
                            <div class="flex-1">
                                <table class="web-table-line">
                                    <thead class="web-table-line-head">
                                        <tr class="web-table-line-row">
                                            <th
                                                class="web-table-line-cell text-primary text-start whitespace-nowrap"
                                                >Issue #</th
                                            >
                                            <th class="web-table-line-cell text-primary text-start"
                                                >Title</th
                                            >
                                        </tr>
                                    </thead>
                                    <tbody class="web-table-line-body">
                                        {#each data.issues as issue}
                                            <tr class="web-table-line-row">
                                                <td class="web-table-line-cell whitespace-nowrap">
                                                    <span class="text-caption">#{issue.number}</span
                                                    >
                                                </td>
                                                <td class="web-table-line-cell">
                                                    <div>
                                                        <a
                                                            href={issue.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            class="web-link text-sub-body font-medium"
                                                        >
                                                            {issue.title}
                                                        </a>
                                                        <span>({issue.repository})</span>
                                                    </div>
                                                    {#if issue.tags.length > 0}
                                                        <ul class="mt-2 flex flex-wrap gap-2">
                                                            {#each issue.tags as tag}
                                                                <li>
                                                                    <div class="web-tag">{tag}</div>
                                                                </li>
                                                            {/each}
                                                        </ul>
                                                    {/if}
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
            <div class="web-big-padding-section-level-2">
                <section class="container">
                    <h4 class="text-label text-primary">Other ways to help</h4>
                    <ul
                        class="mt-5 grid gap-5 md:grid-cols-4 md:gap-8"
                        style="--grid-item-size:15rem"
                    >
                        <li>
                            <div
                                class="web-card is-normal has-border-gradient web-u-gap-6 flex h-full flex-col"
                            >
                                <div class="text-sub-body text-primary font-medium">
                                    Create content
                                </div>
                                <div class="text-sub-body">
                                    Help others discover Appwrite with videos and blogs.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div
                                class="web-card is-normal has-border-gradient web-u-gap-6 flex h-full flex-col"
                            >
                                <div class="text-sub-body text-primary font-medium">
                                    Present at meetups
                                </div>
                                <div class="text-sub-body">
                                    Share your experience and represent Appwrite in public.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div
                                class="web-card is-normal has-border-gradient web-u-gap-6 flex h-full flex-col"
                            >
                                <div class="text-sub-body text-primary font-medium">
                                    Report bugs
                                </div>
                                <div class="text-sub-body">
                                    Find bugs and submit PRs to fix them.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div
                                class="web-card is-normal has-border-gradient web-u-gap-6 flex h-full flex-col"
                            >
                                <div class="text-sub-body text-primary font-medium">
                                    Submit new ideas
                                </div>
                                <div class="text-sub-body">
                                    Suggest features, integrations, or SDKs for our roadmap.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div
                                class="web-card is-normal has-border-gradient web-u-gap-6 flex h-full flex-col"
                            >
                                <div class="text-sub-body text-primary font-medium">
                                    Improve documentation
                                </div>
                                <div class="text-sub-body">
                                    Find improvements in our docs and improve accessibility.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div
                                class="web-card is-normal has-border-gradient web-u-gap-6 flex h-full flex-col"
                            >
                                <div class="text-sub-body text-primary font-medium">
                                    Helping others
                                </div>
                                <div class="text-sub-body">
                                    Support developers with their projects and contributions.
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
            <div class="web-big-padding-section-level-2">
                <section class="web-u-sep-block-start web-u-padding-block-start-64 container">
                    <Carousel size="big">
                        {#snippet header()}
                            <h4 class="text-label text-primary">Upcoming Events</h4>
                        {/snippet}
                        <li>There are no upcoming events scheduled.</li>
                        <!-- {#each events as event}
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
                        {/each} -->
                    </Carousel>
                </section>
            </div>
        </div>

        <div class="web-white-section light relative py-10">
            <div class="web-big-padding-section-level-2">
                <div class="container">
                    <div class="web-hero is-center">
                        <h2 class="text-display font-aeonik-pro text-primary">
                            Inspire and get inspired
                        </h2>
                        <p class="text-description web-u-margin-block-start-0">
                            Visit our showcase website built with Appwrite to find inspiration for
                            your projects or to showcase what you have built.
                        </p>
                        <Button
                            variant="secondary"
                            href="https://builtwith.appwrite.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="mt-4 self-center"
                            event="community-builtwith_appwrite-click"
                        >
                            <span>View all projects</span>
                        </Button>
                    </div>
                    <ul class="web-grid-3-desktop-1-mobile web-u-margin-block-start-64">
                        {#each projects as project}
                            <li>
                                <ProjectCard {...project} />
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
        <div class="web-white-section light py-10">
            <div class="web-big-padding-section-level-2">
                <div class="container">
                    <div class="web-grid-15-25-desktop web-u-row-gap-48 web-u-column-gap-96">
                        <div class="web-hero is-align-start web-u-max-width-380">
                            <div class="text-display font-aeonik-pro text-primary">
                                Visit the community
                            </div>
                            <p class="text-description">
                                Discover Appwrite's community across platforms and join the fun.
                            </p>
                        </div>
                        <ul class="grid grid-cols-1 md:grid-cols-2" style:--p-col-gap="-1rem">
                            <li>
                                <a
                                    href={SOCIAL_STATS.DISCORD.LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="web-card is-white web-u-min-block-size-320 flex flex-col transition-transform hover:-translate-y-2"
                                    style="--card-padding:2rem;rotate: 6deg"
                                >
                                    <div class="flex flex-col justify-between gap-8">
                                        <span
                                            class="icon-discord web-u-font-size-40"
                                            aria-hidden="true"
                                            aria-label="Discord"
                                        ></span>
                                    </div>
                                    <div class="text-title font-aeonik-pro mt-auto">
                                        {SOCIAL_STATS.DISCORD.STAT} members
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={SOCIAL_STATS.TWITTER.LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="web-card is-white web-u-min-block-size-320 flex flex-col transition-transform hover:-translate-y-2"
                                    style="--card-padding:2rem; rotate: 2deg"
                                >
                                    <div class="flex flex-col justify-between gap-8">
                                        <span
                                            class="web-icon-x web-u-font-size-40"
                                            aria-hidden="true"
                                            aria-label="X"
                                        ></span>
                                    </div>
                                    <div class="text-title font-aeonik-pro mt-auto">
                                        {SOCIAL_STATS.TWITTER.STAT} followers
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={SOCIAL_STATS.GITHUB.LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="web-card is-white web-u-min-block-size-320 flex flex-col transition-transform hover:-translate-y-2"
                                    style="--card-padding:2rem; rotate: -10deg"
                                >
                                    <div class="flex flex-col justify-between gap-8">
                                        <span
                                            class="icon-github web-u-font-size-40"
                                            aria-hidden="true"
                                            aria-label="GitHub"
                                        ></span>
                                    </div>
                                    <div class="text-title font-aeonik-pro mt-auto">
                                        {SOCIAL_STATS.GITHUB.STAT} stargazers
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={SOCIAL_STATS.YOUTUBE.LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="web-card is-white web-u-min-block-size-320 flex flex-col transition-transform hover:-translate-y-2"
                                    style="--card-padding:2rem; rotate: -6deg"
                                >
                                    <div class="flex flex-col justify-between gap-8">
                                        <span
                                            class="icon-youtube web-u-font-size-40"
                                            aria-hidden="true"
                                            aria-label="Youtube"
                                        ></span>
                                    </div>
                                    <div class="text-title font-aeonik-pro mt-auto">
                                        {SOCIAL_STATS.YOUTUBE.STAT} subscribers
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-10">
            <div class="web-big-padding-section-level-2">
                <div class="container">
                    <div class="web-grid-1-1-opt-2 gap-8">
                        <div class="">
                            <div
                                class="web-u-max-inline-size-none-mobile"
                                class:web-u-max-width-380={!submitted}
                            >
                                <section class="flex flex-col gap-5">
                                    <h2 class="text-title font-aeonik-pro text-primary">
                                        Appwrite insights
                                    </h2>
                                    <p class="text-description web-u-padding-block-end-40">
                                        Sign up to our company blog and get the latest insights from
                                        Appwrite. Learn more about engineering, product design,
                                        building community, and tips & tricks for using Appwrite.
                                    </p>
                                </section>
                            </div>
                        </div>
                        {#if submitted}
                            <div class="flex items-center gap-2">
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
                                onsubmit={(e) => {
                                    e.preventDefault();
                                    submit();
                                }}
                                class="flex flex-col gap-4"
                            >
                                <div class="flex flex-col gap-1">
                                    <label for="name">Your name</label>
                                    <input
                                        class="web-input-text"
                                        type="text"
                                        placeholder="Enter your name"
                                        id="name"
                                        name="name"
                                        required
                                        bind:value={name}
                                    />
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label for="email">Your email</label>
                                    <input
                                        class="web-input-text"
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        id="email"
                                        name="email"
                                        bind:value={email}
                                    />
                                </div>
                                <Button type="submit" disabled={submitting}>Sign up</Button>
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

            <div class="relative pt-[7.5rem]">
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

    .web-multi-columns-1 {
        .web-card {
            border: 1px solid hsl(var(--web-color-offset));
        }
        @media (max-width: 1235px) {
            --p-col-gap: 2rem !important;
            .web-card {
                rotate: none !important;
            }
        }
    }
</style>
