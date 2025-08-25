<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import { inView } from 'motion';

    import Platinum from '../(assets)/badges/platinum.svg';
    import Gold from '../(assets)/badges/gold.svg';
    import Silver from '../(assets)/badges/silver.svg';
    import { clamp } from '$lib/utils/clamp';
    import { Button } from '$lib/components/ui';

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
            badge: Platinum
        },
        {
            title: 'Gold',
            badge: Gold
        },
        {
            title: 'Silver',
            badge: Silver
        }
    ];
</script>

<div
    class={cn(
        'border-smooth relative flex items-center justify-center border-t border-b border-dashed [border-top-style:solid] bg-[#17171A] py-12 md:py-30',
        'after:absolute after:inset-0 after:top-0 after:right-0 after:z-0 after:mt-auto after:mb-0 after:block after:h-full after:bg-[radial-gradient(circle_at_120%_-40%,_hsla(343,_98%,_60%,_0.2)_0px,_transparent_40%)]'
    )}
    use:useInView
>
    <div
        class="relative z-10 container mx-auto flex w-full flex-col items-center justify-between gap-16 lg:flex-row"
    >
        <div class="flex flex-col gap-8 px-8 lg:max-w-lg">
            <div class="flex flex-col gap-4">
                <h2 class="font-aeonik-pro text-title text-primary text-pretty">Partner Tiers</h2>
                <p class="text-body text-secondary font-medium text-pretty">
                    As your business grows, so do the opportunities with Appwrite. Our Partner
                    Program is designed to evolve with you, offering flexible tiers that adapt to
                    your unique needs and goals. Together, we’ll build a scalable partnership that
                    ensures long-term success in a competitive market.
                </p>
            </div>

            <div class="mt-3 flex flex-col items-center gap-2 md:flex-row">
                <Button variant="secondary" href="#become-a-partner" class="!w-full md:!w-fit"
                    >Become a Partner</Button
                >
            </div>
        </div>

        <div class="mask relative px-8" style:--mask-height="150px">
            {#each tiers as { title, badge }, i}
                <div
                    class={cn('relative flex h-fit w-full justify-center opacity-0', {
                        animate
                    })}
                    style:z-index={tiers.length - i}
                    style:animation-delay="{i * 0.1}s"
                >
                    <img
                        src={badge}
                        alt="{title} Badge"
                        class="max-w-full"
                        style:margin-bottom={i === tiers.length - 1
                            ? 0
                            : `-${clamp(32, i * 40, 80)}px`}
                        style:transform="scale({1 - i * 0.15})"
                    />
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .animate {
        animation: card-in 1200ms var(--easing-spring) forwards;
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
