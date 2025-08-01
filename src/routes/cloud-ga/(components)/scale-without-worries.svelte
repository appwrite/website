<script lang="ts">
    import Grid from './grid-system/grid.svelte';
    import Cell from './grid-system/cell.svelte';
    import { inView } from 'motion';
    import Placeholder from '../(assets)/placeholder.png';

    let animate: boolean = false;

    const useInView = (node: HTMLElement) => {
        inView(node, () => {
            animate = true;
        });
    };

    const testimonials = [
        {
            blurb: 'A special thanks to Appwrite for shouldering the heavy lifting behind StoreAlert, providing robust features and seamless functionality that allow us to focus on what matters most—empowering merchants with real-time insights and control over their store operations.',
            name: 'Hassan Ahmed',
            title: 'Full Stack Developer',
            company: 'DevKind',
            avatar: '/images/testimonials/hassan.png',
            url: '/blog/post/customer-story-storealert'
        },
        {
            blurb: "If you're looking for a backend server that is both powerful and easy to use, check out @appwrite . With its robust feature set and open-source nature, it's the perfect choice for developers who want to build secure and scalable applications without breaking the bank.",
            name: 'Souvik Sarkar',
            title: '@Jeet_2003',
            avatar: '/images/testimonials/souvik-sarkar.png'
        },
        {
            blurb: 'We really loved working with Appwrite for launching our bootstrapped "Open Mind" App. It was saving us a lot of money in comparison to Firebase since the amount of users grew quite fast and we needed a quick switch.',
            name: 'David Forster',
            title: 'MD',
            company: 'Open Mind',
            avatar: '/images/testimonials/david-forster.png',
            url: '/blog/post/customer-stories-open-mind'
        }
    ];
</script>

<div class="relative h-full scroll-m-16 px-4" id="infrastructure-and-scalability">
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center" use:useInView>
        <Grid rows={3} bottomBorder>
            <Cell column={2} columnStart={1} class="px-4 py-12 md:py-20">
                <div class="space-y-4">
                    <span
                        class="font-aeonik-fono text-secondary text-micro tracking-loose inline-block uppercase"
                        >Infrastructure & Scalability</span
                    >
                    <h2
                        data-animate={animate}
                        class="text-subtitle text-primary font-aeonik-pro before:bg-accent text-pretty before:absolute before:-left-0.25 before:mt-2 before:h-6 before:w-px before:origin-top before:scale-y-0 before:transition-transform before:duration-700 data-[animate=true]:before:scale-y-100"
                    >
                        Scale without worries
                    </h2>
                </div>
            </Cell>
            <Cell column={4} columnStart={3} class="px-4 pb-8 md:py-20">
                <p class="text-paragraph-lg">
                    We aimed to build a platform that could easily scale to 1M users overnight
                    without you breaking a sweat over scalability or finance. Today, we are
                    confident that we have reached this state as the numbers show, Appwrite Cloud is
                    stable for any project to grow rapidly unexpectedly.
                </p>
            </Cell>

            <Cell column={4} columnStart={1}>
                <div class="grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
                    {#each testimonials as testimonial}
                        <div class="bg-card border-smooth h-fit rounded-2xl border p-4">
                            <span>{testimonial.blurb}</span>

                            <div class="mt-4 flex items-center gap-3">
                                <img
                                    src={testimonial.avatar}
                                    class="size-12 rounded-full"
                                    alt={testimonial.name}
                                />
                                <div>
                                    <span class="text-secondary text-sub-body block font-medium">
                                        {testimonial.name}
                                    </span>
                                    {#if testimonial.title}
                                        <span class="text-sub-body text-secondary block">
                                            {testimonial.title}
                                            {#if testimonial.company}// {testimonial.company}{/if}
                                        </span>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </Cell>

            <Cell column={4} columnStart={3} class="px-4 py-8 md:py-20">
                <div class="text-paragraph-lg space-y-8">
                    <p>
                        Building the infrastructure to support this goal wasn't easy, especially
                        with our vision of developing Appwrite Cloud from the ground up. However, we
                        pursued it to maintain control over both the platform's flexibility and the
                        pricing we offer. As accessibility is a key part of our mission, we knew
                        that providing a generous free tier and fair pricing was essential to
                        achieving that goal.
                    </p>
                    <p>
                        A cloud platform without the ability to scale is not much of a platform.
                        We’ve seen projects grow to xx users, executions, etc.
                    </p>
                </div>
            </Cell>
        </Grid>
    </div>
</div>
