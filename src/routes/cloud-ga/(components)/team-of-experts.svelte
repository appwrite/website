<script lang="ts">
    import Grid from './grid-system/grid.svelte';
    import Cell from './grid-system/cell.svelte';
    import { inView } from 'motion';
    import Partners from '../(assets)/icons/partners.svg';
    import Startups from '../(assets)/icons/startups.svg';
    import Education from '../(assets)/icons/education.svg';
    import Enterprise from '../(assets)/icons/enterprise.svg';

    let animate: boolean = false;

    const useInView = (node: HTMLElement) => {
        inView(node, () => {
            animate = true;
        });
    };

    const icons = [
        { label: 'Partners Program', src: Partners, href: '/partners' },
        { label: 'Startups Program', src: Startups, href: '/startups' },
        { label: 'Education Program', src: Education, href: '/education' },
        { label: 'Appwrite for Enterprise', src: Enterprise, href: '/contact-us/enterprise' }
    ];
</script>

<div class="relative h-full">
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center" use:useInView>
        <Grid rows={2} bottomBorder>
            <Cell column={2} columnStart={1} class="px-4 py-12 md:py-20">
                <div class="space-y-4">
                    <span
                        class="font-aeonik-fono text-secondary text-micro tracking-loose uppercase"
                        >Dedicated Support</span
                    >
                    <h2
                        data-animate={animate}
                        class="text-title text-primary font-aeonik-pro before:bg-accent text-pretty before:absolute before:left-0 before:mt-2.5 before:h-6 before:w-px before:origin-top before:scale-y-0 before:transition-transform before:duration-700 data-[animate=true]:before:scale-y-100"
                    >
                        A team of experts
                    </h2>
                </div>
            </Cell>
            <Cell column={4} columnStart={3} class="px-4 pb-8 md:py-20"
                ><div class="text-paragraph-lg space-y-8">
                    <p>
                        The open-source community supporting Appwrite has been an undeniable
                        advantage in Appwrite’s success. They have been the first line of support
                        when Appwrite first started.
                    </p>
                    <p>
                        Today we have scaled out that support with dedicated programs, processes,
                        resources, partners, and support engineers. No matter what you are building,
                        from students to enterprise, Appwrite helps on you get to production, fast.
                    </p>

                    <p>
                        We don’t just provide you with an all in one development platform, we are
                        your dedicated partner in your development journey.
                    </p>
                    <div
                        class="illustration grid grid-flow-col grid-cols-1 grid-rows-2 gap-x-1 gap-y-4 p-4 md:grid-cols-2"
                    >
                        {#each icons as { label, src, href }}
                            <div class="flex items-center gap-2">
                                <img {src} alt={label} />
                                <a {href} class="text-sub-body text-primary font-medium underline"
                                    >{label}</a
                                >
                            </div>
                        {/each}
                    </div>
                </div>
            </Cell>
        </Grid>
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .illustration {
        @include gradients.border-gradient;
        --p-radius: 16px;

        background-color: hsl(var(--web-color-card));
        border-radius: var(--p-radius);
        --m-border-radius: var(--p-radius);
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0) 125.11%
        );
    }
</style>
