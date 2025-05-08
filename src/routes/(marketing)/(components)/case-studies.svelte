<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { Button } from '$lib/components/ui';
    import MasonryGrid from 'svelte-masonry';
    import { classNames } from '$lib/utils/classnames';

    const testimonials = [
        {
            name: 'Ryan O’Conner',
            copy: `The switch to using Appwrite brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works.`,
            image: '/images/testimonials/ryan-oconner.png',
            title: 'Founder',
            company: 'K-Collect'
        },
        {
            name: 'David Forster',
            copy: `We really loved working with Appwrite for launching our bootstrapped "Open Mind" App. I am still surprised how easy the implementation into Flutter was.`,
            image: '/images/testimonials/david-forster.png',
            title: 'Founder',
            company: 'Open Mind'
        },
        {
            name: 'Marius Bolik',
            copy: `The integrated user authentication and the ease of creating data structures have undoubtedly saved us several weeks' worth of time.`,
            image: '/images/testimonials/marius-bolik2.png',
            title: 'CTO',
            company: 'mySHOEFITTER'
        },
        {
            name: 'Sergio Ponguta',
            copy: `Just go for it, don’t think twice. Try Appwrite, and you will love it!`,
            image: '/images/testimonials/smartbee.png',
            title: 'Founder',
            company: 'Smart Bee'
        },
        {
            name: 'Phil McClusky',
            copy: 'Just like a Swiss Army Knife, you can choose and use the tools that you need with Appwrite.',
            image: '/images/testimonials/majik.png',
            title: 'Developer',
            company: 'Majik Kids'
        }
    ];
</script>

<div
    class={classNames(
        'border-smooth relative -mb-4 flex items-center justify-center overflow-hidden border-t pt-20 pb-40',
        'from-0% before:absolute before:inset-0 before:top-0 before:left-0 before:-z-10 before:block before:h-full before:bg-radial-[circle_at_120%_-50%] before:from-purple-500/30 before:to-transparent before:to-40% before:blur-2xl',
        'after:from-accent/20 after:absolute after:inset-0 after:top-0 after:right-0 after:-z-10 after:mt-auto after:mb-0 after:block after:h-full after:bg-radial-[circle_at_-15%_125%] after:from-0% after:to-transparent after:to-40% after:blur-2xl'
    )}
>
    <div class="container mx-auto">
        <div class="flex w-full flex-col justify-between py-8 md:flex-row">
            <h2
                class="text-description text-secondary font-aeonik-pro max-w-[789px] text-[32px] leading-9 -tracking-[1px] text-pretty"
            >
                <span class="text-primary">DevKind</span> reduced development time by 60%, and
                lowered server costs by 40%. LangX handled millions of requests. K-collect reduced
                infrastructure costs by <span class="text-primary">700%</span>.
            </h2>
            <Button href={PUBLIC_APPWRITE_DASHBOARD} class="self-end" variant="secondary"
                >Start building for free</Button
            >
        </div>
        <MasonryGrid>
            {#each testimonials as testimonial}
                <div class="animate-fade-in border-smooth bg-card h-fit rounded-2xl border p-5">
                    {testimonial.copy}

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
                            {#if testimonial.title}
                                <span class="text-sub-body text-secondary block">
                                    {testimonial.title} // {testimonial.company}
                                </span>
                            {/if}
                        </div>
                    </div>
                </div>
            {/each}
        </MasonryGrid>
        <!-- <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {#each testimonials as testimonial}
                <div class="border-smooth bg-card h-fit rounded-2xl border p-5">
                    {testimonial.copy}
                </div>
            {/each}
        </div> -->
    </div>
</div>
