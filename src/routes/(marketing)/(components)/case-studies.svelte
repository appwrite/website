<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { Button } from '$lib/components/ui';
    import { classNames } from '$lib/utils/classnames';
    import Masonry from '$lib/components/ui/masonry.svelte';

    const testimonials = [
        {
            name: 'Marius Bolik',
            copy: `Not only is the software an absolute game-changer, but the team is always there when you need them. The integrated user authentication and the ease of creating data structures have undoubtedly saved us several weeks' worth of time.`,
            image: '/images/testimonials/marius-bolik2.png',
            title: 'CTO',
            company: 'mySHOEFITTER'
        },
        {
            name: 'David Forster',
            copy: `Working with Appwrite saved us a lot of money in comparison to Firebase since the amount of users grew quite fast and we needed a quick switch. I am still surprised how easy the implementation into Flutter was.`,
            image: '/images/testimonials/david-forster.png',
            title: 'Founder',
            company: 'Open Mind'
        },
        {
            name: 'Ryan O’Conner',
            copy: `The switch to using Appwrite brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works. There's no struggling with writing backend code and working with databases, as that's already taken care of.`,
            image: '/images/testimonials/ryan-oconner.png',
            title: 'Founder',
            company: 'K-Collect'
        },
        {
            name: 'Hassan Ahmed',
            copy: `A special thanks to Appwrite for providing robust features and seamless functionality that allow us to focus on what matters most—empowering merchants with real-time insights and control over their store operations.`,
            image: '/images/testimonials/smartbee.png',
            title: 'Fullstack Developer',
            company: 'DevKind'
        },
        {
            name: 'Jonas Janssen',
            copy: `Thanks to Appwrite and advances in technology, we were able to get an MVP out in 2/3 months with 1 developer.`,
            image: '/images/testimonials/smartbee.png',
            title: 'Founder',
            company: 'UNDO'
        },
        {
            name: 'Xue',
            copy: `With its comprehensive suite of services including authentication, database management, storage, and serverless functions, Appwrite emerged as an ideal choice for my needs.`,
            image: '/images/testimonials/smartbee.png',
            title: 'Founder',
            company: 'LangX'
        },
        {
            name: 'Petto',
            copy: `Simplifying app development is a significant need in the industry, and your efforts to abstract complexity, reduce repetitive tasks, and make the development process more enjoyable are highly commendable.`,
            image: '/images/testimonials/smartbee.png',
            title: '@gipetto'
        }
    ];

    let [minColWidth, maxColWidth, gap] = [200, 800, 20];
    let width = $state(0),
        height = $state(0);
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
        <div class="mt-8 columns-1 [column-gap:20px] md:columns-2 lg:columns-3">
            {#each testimonials as testimonial}
                <div
                    class={classNames(
                        'border-smooth bg-card mb-5 h-fit [break-inside:avoid] rounded-2xl border p-5 last-of-type:col-start-2'
                    )}
                >
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

                            <span class="text-sub-body text-secondary block">
                                {testimonial.title}
                                {#if testimonial.company}
                                    // {testimonial.company}
                                {/if}
                            </span>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .masonry {
        columns: 3;
        column-gap: 32px;
    }
</style>
