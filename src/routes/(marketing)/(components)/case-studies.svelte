<script lang="ts" module>
    import CaseStudyCard from './case-study-card.svelte';

    /** Logos live under `/images/logos/trusted-by/` with the same #ADADB0 treatment as the homepage logo strip. */
    /** All homepage case-study cards; three are chosen at random on each visit (see `pickRandomStudies`). */
    export const allCaseStudies = [
        {
            logo: '/images/logos/trusted-by/devkind.svg',
            logoWidth: 107,
            logoHeight: 32,
            headline: 'DevKind reduced development time by 60% and lowered server costs by 40%',
            blurb: 'A special thanks to Appwrite for providing robust features and seamless functionality.',
            name: 'Hassan Ahmed',
            title: 'Software Engineer',
            company: 'DevKind',
            avatar: '/images/testimonials/hassan.avif',
            url: '/blog/post/customer-story-storealert'
        },
        {
            logo: '/images/logos/trusted-by/langx.svg',
            logoWidth: 134,
            logoHeight: 29,
            headline: 'LangX handled millions of requests using Appwrite',
            blurb: 'With its comprehensive suite of services, Appwrite emerged as an ideal choice for my needs.',
            name: 'Xue',
            title: 'Founder',
            company: 'LangX',
            avatar: '/images/testimonials/xue.avif',
            url: '/blog/post/customer-stories-langx'
        },
        {
            logo: '/images/logos/trusted-by/k-collect.svg',
            logoWidth: 110,
            logoHeight: 35,
            headline: 'K-Collect reduced infrastructure costs by 700%',
            blurb: 'A major impact that Appwrite made was the amount of time and stress saved.',
            name: "Ryan O'Connor",
            title: 'Founder',
            company: 'K-Collect',
            avatar: '/images/testimonials/ryan.avif',
            url: '/blog/post/customer-stories-kcollect'
        },
        /* Open Mind - restore when trusted-by logo is finalized
        {
            logo: '/images/logos/trusted-by/open-mind.svg',
            logoWidth: 64,
            logoHeight: 32,
            headline: 'Open Mind scaled substance-education content for tens of thousands of users',
            blurb: 'We really loved working with Appwrite for launching our bootstrapped "Open Mind" App. I am still surprised how easy the implementation into Flutter was.',
            name: 'David Forster',
            title: 'Founder',
            company: 'Open Mind',
            avatar: '/images/testimonials/david-forster.avif',
            url: '/blog/post/customer-stories-open-mind'
        },
        */
        /* Smartbee - restore when trusted-by logo is finalized
        {
            logo: '/images/logos/trusted-by/smartbee.svg',
            logoWidth: 120,
            logoHeight: 32,
            headline: 'Smartbee aggregates real-time sensor data across seven Colombian coal mines',
            blurb: 'Just go for it, don’t think twice. Try Appwrite, and you will love it!',
            name: 'Sergio Ponguta',
            title: 'Founder',
            company: 'Smartbee',
            avatar: '/images/testimonials/smartbee.avif',
            url: '/blog/post/customer-stories-smartbee'
        },
        */
        {
            logo: '/images/logos/trusted-by/majik-kids.svg',
            logoWidth: 88,
            logoHeight: 32,
            headline: 'Majik Kids built a Fair Pay audio platform for children on Appwrite Cloud',
            blurb: 'Just like a Swiss Army Knife, you can choose and use the tools that you need with Appwrite.',
            name: 'Phil McClusky',
            title: 'Development Lead',
            company: 'Majik Kids',
            avatar: '/images/testimonials/majik.avif',
            url: '/blog/post/customer-stories-majik-kids'
        },
        {
            logo: '/images/logos/trusted-by/myshoefitter.svg',
            logoWidth: 197,
            logoHeight: 32,
            headline: 'mySHOEFITTER sized 12,000+ feet accurately for major EU retailers',
            blurb: 'The integrated user authentication and the ease of creating data structures have undoubtedly saved us several weeks’ worth of time.',
            name: 'Marius Bolik',
            title: 'CTO',
            company: 'mySHOEFITTER',
            avatar: '/images/testimonials/marius-bolik2.avif',
            url: '/blog/post/customer-stories-myshoefitter'
        },
        {
            logo: '/images/logos/trusted-by/socialaize.svg',
            logoWidth: 126,
            logoHeight: 32,
            headline:
                'Socialaize runs hundreds of thousands of function executions per day on Cloud',
            blurb: 'It’s especially nice that Appwrite have to deal with the scaling now and not me.',
            name: 'Zach Handley',
            title: 'Founder',
            company: 'Socialaize',
            avatar: '/images/testimonials/zach-handley.avif',
            url: '/blog/post/customer-story-socialaize'
        },
        {
            logo: '/images/logos/trusted-by/undo.svg',
            logoWidth: 125,
            logoHeight: 32,
            headline: 'UNDO went from idea to paying customers tracking 9,000+ circular assets',
            blurb: 'Thanks to Appwrite and advances in technology, we were able to get an MVP out in 2/3 months with 1 developer.',
            name: 'Jonas Janssen',
            title: 'Co-founder',
            company: 'UNDO',
            avatar: '/images/testimonials/jonas-janssen.avif',
            url: '/blog/post/customer-stories-undo'
        },
        {
            logo: '/images/logos/trusted-by/radar.svg',
            logoWidth: 100,
            logoHeight: 32,
            headline: 'Radar shipped a polished iOS hub for every kind of media recommendation',
            blurb: 'The barrier to entry is zero with Appwrite. And I think that’s really special.',
            name: 'Matt Martino',
            title: 'Founder',
            company: 'Paradox',
            avatar: '/images/testimonials/matt-martino.avif',
            url: '/blog/post/customer-story-radar'
        }
    ] as const;

    export type CaseStudy = (typeof allCaseStudies)[number];

    /** Fisher–Yates shuffle (copy). */
    export function shuffleCaseStudies<T>(studies: readonly T[]): T[] {
        const out = [...studies];
        for (let i = out.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [out[i], out[j]] = [out[j], out[i]];
        }
        return out;
    }

    const VISIBLE_COUNT = 3;

    export function pickRandomStudies(): CaseStudy[] {
        return shuffleCaseStudies(allCaseStudies).slice(0, VISIBLE_COUNT);
    }
</script>

<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import { ToggleGroup } from 'bits-ui';
    import { onMount } from 'svelte';

    let mounted = $state(false);
    let orderedStudies = $state<CaseStudy[]>([]);

    let value = $state<string>('0');

    const getValue = () => value;

    const setValue = (newValue: string) => {
        if (!newValue.length) return;
        value = newValue;
    };

    onMount(() => {
        orderedStudies = pickRandomStudies();
        value = '0';
        mounted = true;
    });
</script>

<div
    class={cn(
        'border-smooth relative mb-0 flex items-center justify-center overflow-hidden border-t py-20 md:pt-30 md:pb-40',
        'from-0% before:absolute before:inset-0 before:top-0 before:left-0 before:-z-10 before:block before:h-full before:bg-radial-[circle_at_120%_-50%] before:from-purple-500/30 before:to-transparent before:to-40% before:blur-2xl',
        'after:from-accent/20 after:absolute after:inset-0 after:top-0 after:right-0 after:-z-10 after:mt-auto after:mb-0 after:block after:h-full after:bg-radial-[circle_at_-15%_125%] after:from-0% after:to-transparent after:to-40% after:blur-2xl'
    )}
>
    {#if mounted}
        <ToggleGroup.Root
            bind:value={getValue, setValue}
            type="single"
            class="container flex h-full flex-col items-stretch gap-4 max-lg:min-h-[40rem] lg:min-h-0 lg:flex-row"
        >
            {#each orderedStudies as study, index (study.url)}
                <CaseStudyCard
                    {study}
                    isActive={value === index.toString()}
                    value={index.toString()}
                />
            {/each}
        </ToggleGroup.Root>
    {:else}
        <div class="container max-lg:min-h-[40rem] lg:min-h-[467px]" aria-hidden="true"></div>
    {/if}
</div>
