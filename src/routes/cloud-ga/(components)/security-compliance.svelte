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

<div class="relative h-full">
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center" use:useInView>
        <Grid rows={2} bottomBorder>
            <Cell column={2} columnStart={1} class="px-8 py-12 md:py-20">
                <h2
                    data-animate={animate}
                    class="text-title text-primary font-aeonik-pro before:bg-accent text-pretty before:absolute before:left-0 before:mt-2.5 before:h-6 before:w-px before:origin-top before:scale-y-0 before:transition-transform before:duration-700 data-[animate=true]:before:scale-y-100"
                >
                    Security &<br /> Compliance
                </h2>
            </Cell>
            <Cell column={4} columnStart={3} class="px-8 pb-8 md:py-20">
                <div class="space-y-8">
                    <p class="max-w-lg">
                        Appwrite has been and continues to be security driven. From the very
                        beginning, we ensured security measures, like encryption and abuse
                        protection, were built into Appwrite Cloud, and were easy to manage from the
                        Console. Over the past year, we have taken security and compliance measures
                        up a notch by adhering to <span class="text-primary"
                            >GDPR, CCPA, HIPAA, and SOC 2 Type 1</span
                        > compliance regulations.
                    </p>

                    <div class="illustration flex justify-between p-4">
                        {#each icons as { label, src }}
                            <div class="flex items-center gap-2">
                                <img {src} alt={label} />
                                <span class="text-sub-body text-primary font-medium">{label}</span>
                            </div>
                        {/each}
                    </div>

                    <p class="max-w-lg">
                        Most recently, we have added three new features to ensure even more security
                        and compliance regulations are in place: <span class="text-primary"
                            >Roles for access management, 2FA for the Appwrite Console, and Database
                            Backups</span
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
