<script lang="ts">
    import Grid from './grid-system/grid.svelte';
    import Cell from './grid-system/cell.svelte';
    import { inView } from 'motion';
    import GDPR from '../(assets)/gdpr.svg';
    import CCPA from '../(assets)/ccpa.svg';
    import HIPAA from '../(assets)/hipaa.svg';
    import SOC2 from '../(assets)/soc2.svg';

    let animate: boolean = false;

    const useInView = (node: HTMLElement) => {
        inView(node, () => {
            animate = true;
        });
    };

    const icons = [
        { label: 'GDPR', src: GDPR },
        { label: 'CCPA', src: CCPA },
        { label: 'HIPAA', src: HIPAA },
        { label: 'SOC 2', src: SOC2 }
    ];
</script>

<div class="relative h-full scroll-m-16 px-4" id="security-and-compliance">
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center" use:useInView>
        <Grid rows={2} bottomBorder>
            <Cell column={2} columnStart={1} class="px-4 pt-12 md:pt-40">
                <div class="space-y-4">
                    <span
                        class="font-aeonik-fono text-secondary text-micro tracking-loose inline-block uppercase"
                        >Security & Compliance</span
                    >
                    <h2
                        data-animate={animate}
                        class="text-subtitle text-primary font-aeonik-pro before:bg-accent text-pretty before:absolute before:-left-0.25 before:mt-1.25 before:h-4.75 before:w-px before:origin-top before:scale-y-0 before:transition-transform before:duration-700 data-[animate=true]:before:scale-y-100"
                    >
                        Secure by default
                    </h2>
                </div>
            </Cell>
            <Cell column={4} columnStart={3} class="py-8 md:py-40">
                <div class="space-y-8">
                    <p class="text-paragraph-lg px-4">
                        Appwrite has been and continues to be security-driven. From the very
                        beginning, we ensured security measures, like encryption and abuse
                        protection, were built into Appwrite Cloud, and were easy to manage from the
                        Console. Over the past year, we have taken security and compliance measures
                        up a notch by adhering to <span class="text-primary"
                            >GDPR, CCPA, HIPAA, and SOC 2 Type 2</span
                        > compliance regulations.
                    </p>

                    <div
                        class="illustration grid grid-cols-2 place-items-center justify-between gap-4 p-4 md:grid-cols-4"
                    >
                        {#each icons as { label, src }}
                            <div class="flex items-center gap-2">
                                <img {src} alt={label} />
                                <span class="text-sub-body text-primary font-medium">{label}</span>
                            </div>
                        {/each}
                    </div>

                    <p class="text-paragraph-lg max-w-lg px-4">
                        More recently, we have added three new features to ensure even more security
                        and compliance regulations are in place: <span class="text-primary"
                            >Roles for based access management, MFA for the Appwrite Console,
                            and Database Backups</span
                        >.
                    </p>
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
