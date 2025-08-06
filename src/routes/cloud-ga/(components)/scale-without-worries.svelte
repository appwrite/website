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
            blurb: 'A special thanks to Appwrite for shouldering the heavy lifting behind StoreAlert, providing robust features and seamless functionality that allow us to focus on what matters most.',
            name: 'Hassan Ahmed',
            title: 'Full Stack Developer',
            company: 'DevKind',
            avatar: '/images/testimonials/hassan.png',
            url: '/blog/post/customer-story-storealert'
        },
        {
            blurb: 'With its robust feature set and open-source nature, Appwrite is the perfect choice for developers who want to build secure and scalable applications without breaking the bank.',
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
            <Cell column={2} columnStart={1} class="px-4 py-8 md:py-30">
                <div class="space-y-4">
                    <span
                        class="font-aeonik-fono text-secondary text-micro tracking-loose inline-block uppercase"
                        >Infrastructure & Scalability</span
                    >
                    <h2
                        data-animate={animate}
                        class="text-subtitle text-primary font-aeonik-pro before:bg-accent text-pretty before:absolute before:-left-0.25 before:mt-1 before:h-5 before:w-px before:origin-top before:scale-y-0 before:transition-transform before:duration-700 data-[animate=true]:before:scale-y-100 md:before:mt-1.75 md:before:h-6"
                    >
                        Scale without worries
                    </h2>
                </div>
            </Cell>
            <Cell column={4} columnStart={3} class="px-4 pb-8 md:py-30">
                <p class="text-paragraph-lg">
                  Appwrite Cloud was built to scale, quietly and reliably. Over the past months, 
                  we’ve seen teams of all sizes grow from their first few users to hundreds of 
                  thousands without touching their infrastructure or running into billing surprises. 
                  The platform has matured to a point where scaling isn’t a concern - it just happens.
                </p>
            </Cell>

            <Cell column={4} columnStart={1} class="pb-12 md:pb-30">
                <div class="grid grid-cols-1 gap-4 px-4 md:grid-cols-3 md:gap-8">
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
        </Grid>
    </div>
</div>
