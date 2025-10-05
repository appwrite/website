<script lang="ts" module>
    import DevKind from '$routes/(marketing)/(assets)/logos/devkind-light.svg';
    import LangX from '$routes/(marketing)/(assets)/logos/langx-light.svg';
    import KCollect from '$routes/(marketing)/(assets)/logos/k-collect-light.svg';
    import CaseStudyCardLight from './case-study-card-light.svelte';

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
    import { cn } from '$lib/utils/cn';
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
    class="relative mb-0 flex items-center justify-center overflow-hidden border-t border-dashed border-black/8 py-20 md:pt-30 md:pb-40"
    style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.01) 0%, rgba(0, 0, 0, 0.01) 100%), var(--background, #EDEDF0);"
>
    <ToggleGroup.Root
        bind:value={getValue, setValue}
        type="single"
        class="container flex h-full flex-col items-stretch gap-4 lg:flex-row"
    >
        {#each studies as study, index}
            <CaseStudyCardLight
                {study}
                isActive={value === index.toString()}
                value={index.toString()}
            />
        {/each}
    </ToggleGroup.Root>
</div>
