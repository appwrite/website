<script lang="ts">
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

<div class="relative w-full max-w-[100vw] overflow-hidden">
    <div class="group light flex w-fit gap-4">
        {#each Array.from({ length: 4 }) as _, i}
            <div
                class="animate-scroll-deprecate group-hover:[animation-play-state:paused;] flex items-center gap-4"
                aria-hidden={i !== 0}
            >
                {#each testimonials as testimonial}
                    <div
                        class="flex h-fit w-[90vw] flex-col justify-center rounded-2xl bg-white p-6 transition-all md:w-lg"
                    >
                        <p class="text-sub-body text-secondary flex-1 font-medium">
                            {testimonial.copy}
                        </p>

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
            </div>
        {/each}
    </div>
</div>
