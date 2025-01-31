<script lang="ts">
    const testimonials = [
        {
            name: 'Ryan O’Conner',
            copy: `The switch to using Appwrite brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works.`,
            image: '/images/testimonials/k-collect.png',
            title: 'Founder',
            company: 'K-Collect'
        },
        {
            name: 'David Forster',
            copy: `We really loved working with Appwrite for launching our bootstrapped "Open Mind" App. I am still surprised how easy the implementation into Flutter was.`,
            image: '/images/testimonials/open-mind.png',
            title: 'Founder',
            company: 'Open Mind'
        },
        {
            name: 'Marius Bolik',
            copy: `The integrated user authentication and the ease of creating data structures have undoubtedly saved us several weeks' worth of time.`,
            image: '/images/testimonials/shoefitter.png',
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

<div class="group relative my-8 w-full overflow-clip">
    <div
        class="animate-marquee light flex w-max gap-4 pl-4 group-hover:[animation-play-state:paused]"
    >
        {#each testimonials as testimonial}
            <div
                class="flex h-fit w-lg flex-col justify-center rounded-2xl bg-white p-6 transition-all"
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
                        <span class="text-sub-body text-secondary block"
                            >{testimonial.title} // {testimonial.company}</span
                        >
                    </div>
                </div>
            </div>
        {/each}
        {#each testimonials as testimonial}
            <div
                aria-hidden="true"
                class="flex h-fit w-lg flex-col justify-center rounded-2xl bg-white p-6 transition-all"
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
                        <span class="text-sub-body text-secondary block"
                            >{testimonial.title} // {testimonial.company}</span
                        >
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
