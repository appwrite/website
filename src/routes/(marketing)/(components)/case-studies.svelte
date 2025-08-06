<script lang="ts" module>
    import DevKind from '../(assets)/logos/devkind.svg';
    import LangX from '../(assets)/logos/langx.svg';
    import KCollect from '../(assets)/logos/k-collect.svg';
    import CaseStudyCard from './case-study-card.svelte';

    const studies = [
        {
            logo: DevKind,
            headline: 'DevKind reduced development time by 60% and lowered server costs by 40%',
            blurb: 'A special thanks to Appwrite for providing robust features and seamless functionality.',
            name: 'Hassan Ahmed',
            title: 'Engineer at DevKind',
            avatar: '/images/testimonials/hassan.png',
            url: '/blog/post/customer-story-storealert'
        },
        {
            logo: LangX,
            headline: 'LangX handled millions of requests using Appwrite',
            blurb: 'With its comprehensive suite of services, Appwrite emerged as an ideal choice for my needs.',
            name: 'Xue',
            title: 'Founder at LangX',
            avatar: '/images/testimonials/xue.webp',
            url: '/blog/post/customer-stories-langx'
        },
        {
            logo: KCollect,
            headline: 'K-Collect reduced infrastructure costs by 700%',
            blurb: 'A major impact that Appwrite made was the amount of time and stress saved.',
            name: "Ryan O'Connor",
            title: 'Founder at K-Collect',
            avatar: '/images/testimonials/ryan.png',
            url: '/blog/post/customer-stories-kcollect'
        }
    ];

    export type CaseStudy = (typeof studies)[number];
</script>

<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { ToggleGroup } from 'bits-ui';

    let value = $state<string>('0');

    const getValue = () => {
        return value;
    };

    const setValue = (newValue: string) => {
        if (!newValue.length) return;
        value = newValue;
    };
</script>

<div
    class={classNames(
        'relative -mb-4 flex items-center justify-center overflow-hidden pt-30 pb-40',
        'from-0% before:absolute before:inset-0 before:top-0 before:left-0 before:-z-10 before:block before:h-full before:bg-radial-[circle_at_120%_-50%] before:from-purple-500/30 before:to-transparent before:to-40% before:blur-2xl',
        'after:from-accent/20 after:absolute after:inset-0 after:top-0 after:right-0 after:-z-10 after:mt-auto after:mb-0 after:block after:h-full after:bg-radial-[circle_at_-15%_125%] after:from-0% after:to-transparent after:to-40% after:blur-2xl'
    )}
>
    <ToggleGroup.Root
        bind:value={getValue, setValue}
        type="single"
        class="container flex h-full items-stretch gap-4"
    >
        {#each studies as study, index}
            <CaseStudyCard {study} isActive={value === index.toString()} value={index.toString()} />
        {/each}
    </ToggleGroup.Root>
</div>
