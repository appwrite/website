<script lang="ts">
    import { cn } from '$lib/utils/classnames';
    import { inView } from 'motion';

    import Platinum from '../(assets)/icons/platinum.png';
    import Gold from '../(assets)/icons/gold.png';
    import Silver from '../(assets)/icons/silver.png';
    import { clamp } from '$lib/utils/clamp';

    let animate: boolean = false;

    const useInView = (node: HTMLElement) => {
        inView(
            node,
            () => {
                animate = true;
            },
            { amount: 'all' }
        );
    };

    const tiers = [
        {
            title: 'Platinum',
            icon: Platinum
        },
        {
            title: 'Gold',
            icon: Gold
        },
        {
            title: 'Silver',
            icon: Silver
        }
    ];
</script>

<div
    class={cn(
        'border-smooth relative flex items-center justify-center border-t border-b border-dashed bg-[#17171A] py-32 [border-top-style:solid]',
        'after:absolute after:inset-0 after:top-0 after:right-0 after:z-0 after:mt-auto after:mb-0 after:block after:h-full after:bg-[radial-gradient(circle_at_120%_-40%,_hsla(343,_98%,_60%,_0.2)_0px,_transparent_40%)]'
    )}
    use:useInView
>
    <div
        class="container relative z-10 mx-auto flex w-full flex-col items-center justify-between gap-16 md:flex-row"
    >
        <div class="flex max-w-lg flex-col gap-8 px-8">
            <div class="flex flex-col gap-4">
                <h2 class="font-aeonik-pro text-title text-primary text-pretty">Partner Tiers</h2>
                <p class="text-body text-secondary text-pretty font-medium">
                    As your business grows, so do the opportunities with Appwrite. Our Partner
                    Program is designed to evolve with you, offering flexible tiers that adapt to
                    your unique needs and goals. Together, we’ll build a scalable partnership that
                    ensures long-term success in a competitive market.
                </p>
            </div>

            <div class="mt-3 flex flex-col items-center gap-2 md:flex-row">
                <a href="#become-a-partner" class="web-button is-secondary !w-full md:!w-fit"
                    >Become a Partner</a
                >
            </div>
        </div>

        <div class="mask relative overflow-hidden px-8" style:--mask-height="150px">
            {#each tiers as { title, icon }, i}
                <div
                    class={cn('relative h-fit min-w-md rounded-3xl opacity-0', {
                        animate
                    })}
                    style:z-index={tiers.length - i}
                    style:animation-delay="{i * 0.1}s"
                >
                    <div
                        class="flex h-fit items-center justify-center gap-4 rounded-3xl border border-[#292929] bg-black bg-gradient-to-br from-black to-white/20 py-3 px-5"
                        style:margin-bottom={i === tiers.length - 1
                            ? 0
                            : `-${clamp(32, i * 40, 80)}px`}
                        style:transform="scale({1 - i * 0.15})"
                    >
                        <div class="flex items-center justify-center gap-4 pr-2">
                            <img src={icon} alt="{title} Icon" class="h-16 w-auto md:h-20" />
                            <div class="-mt-2 flex grow flex-col">
                                <span class="text-primary mt-2 block font-medium uppercase"
                                    >{title}<span class="text-accent">_</span></span
                                >
                                <h3 class="text-primary font-aeonik-pro text-title">
                                    Appwrite Partner
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .animate {
        animation: card-in 1200ms var(--transition-timing-function-spring) forwards;
    }
    @keyframes card-in {
        0% {
            transform: translateY(20%);
            opacity: 0;
            filter: blur(8px);
        }
        100% {
            transform: translateY(0);
            opacity: 1;
            filter: blur(0);
        }
    }
</style>
