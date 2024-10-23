<script lang="ts">
    import KCollect from '../(assets)/k-collect.png';
    import OpenMind from '../(assets)/open-mind.png';
    import ShoeFitter from '../(assets)/shoefitter.png';
    import SmartBee from '../(assets)/smartbee.png';
    import MajikKids from '../(assets)/majik.png';
    import { onMount } from 'svelte';

    const testimonials = [
        {
            name: 'Ryan O’Conner',
            copy: `The switch to using Appwrite brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works.`,
            image: KCollect,
            title: 'Founder',
            company: 'K-Collect'
        },
        {
            name: 'David Forster',
            copy: `We really loved working with Appwrite for launching our bootstrapped "Open Mind" App. I am still surprised how easy the implementation into Flutter was.`,
            image: OpenMind,
            title: 'Founder',
            company: 'Open Mind'
        },
        {
            name: 'Marius Bolik',
            copy: `The integrated user authentication and the ease of creating data structures have undoubtedly saved us several weeks' worth of time.`,
            image: ShoeFitter,
            title: 'CTO',
            company: 'mySHOEFITTER'
        },
        {
            name: 'Sergio Ponguta',
            copy: `Just go for it, don’t think twice. Try Appwrite, and you will love it!`,
            image: SmartBee,
            title: 'Founder',
            company: 'Smart Bee'
        },
        {
            name: 'Phil McClusky',
            copy: 'Just like a Swiss Army Knife, you can choose and use the tools that you need with Appwrite.',
            image: MajikKids,
            title: 'Developer',
            company: 'Majik Kids'
        }
    ];

    const viewportWidth = 150;
</script>

<div class="overflow-hidden">
    <div
        class="light animate-scroll flex items-center justify-center hover:[animation-play-state:paused]"
        style:width={`${viewportWidth}vw`}
    >
        {#each testimonials as testimonial, i}
            <div
                class="mr-4 flex h-[175px] origin-left flex-col justify-center rounded-2xl bg-white p-6 transition-all"
                style:width={`${viewportWidth / testimonials.length}vw`}
            >
                <p class="text-sub-body text-secondary flex-1 font-medium">{testimonial.copy}</p>

                <div class="mt-4 flex items-center gap-3">
                    <img
                        src={testimonial.image}
                        class="size-12 rounded-full"
                        alt="{testimonial.company} Logo"
                    />
                    <div>
                        <span class="text-secondary text-sub-body block font-medium">
                            {testimonial.name}
                        </span>
                        <span class="text-sub-body text-secondary block"
                            >{testimonial.title} // {testimonial.company}</span
                        >
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
