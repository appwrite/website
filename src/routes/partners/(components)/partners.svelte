<script>
    import { classNames } from '$lib/utils/classnames';

    import Platinum from '../(assets)/icons/platinum.png';
    import Gold from '../(assets)/icons/gold.png';
    import Silver from '../(assets)/icons/silver.png';
    import { clamp } from '$lib/utils/clamp';

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
    class={classNames(
        'border-smooth relative flex items-center justify-center overflow-hidden border-b bg-[#17171A] py-32',
        'after:absolute after:inset-0 after:top-0 after:right-0 after:mt-auto after:mb-0 after:block after:h-full after:bg-[radial-gradient(circle_at_120%_-40%,_hsla(343,_98%,_60%,_0.2)_0px,_transparent_40%)]'
    )}
>
    <div class="mx-auto grid items-center gap-16 md:grid-cols-2">
        <div class="max-w-lg space-y-8">
            <h1 class="font-aeonik-pro text-title text-primary text-pretty">Partner Tiers</h1>
            <p class="text-body text-secondary text-pretty font-medium">
                Our Partner Program is designed to scale with you as you grow. With flexible tiers
                tailored to your success.
            </p>

            <div class="flex flex-col items-center gap-2 md:flex-row">
                <a href="/" class="web-button is-secondary !w-full md:!w-fit">Become a partner</a>
            </div>
        </div>

        <div class="relative">
            {#each tiers as { title, icon }, i}
                <div
                    class="animate relative opacity-0"
                    style:z-index={tiers.length - i}
                    style:animation-delay="calc({i} * 0.2s)"
                >
                    <div
                        class="border-smooth flex items-center gap-4 overflow-hidden rounded-[40px] border-2 bg-black bg-gradient-to-br from-black to-white/20 py-1 pr-6"
                        style:margin-bottom={i === tiers.length - 1
                            ? 0
                            : `-${clamp(32, i * 40, 80)}px`}
                        style:transform="scale({1 - i * 0.15})"
                    >
                        <div class="flex items-center gap-2">
                            <img src={icon} alt="{title} Icon" class="h-32 w-auto" />
                            <div>
                                <span class="text-primary -mb-2 block font-medium uppercase"
                                    >{title}<span class="text-accent">_</span></span
                                >
                                <h3 class="text-primary text-[48px]">Appwrite Partner</h3>
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
        animation: card-in 600ms ease-out forwards;
    }
    @keyframes card-in {
        0% {
            transform: translateY(100%);
            opacity: 0;
            filter: blur(2px);
        }
        100% {
            transform: translateY(0);
            opacity: 1;
            filter: blur(0);
        }
    }
</style>
