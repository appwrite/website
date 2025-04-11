<script lang="ts">
    import { Button } from '$lib/components/ui';

    const plans: Array<{
        name: string;
        price: string;
        description: string;
        tag?: string;
        subtitle?: string;
    }> = [
        {
            name: 'Free',
            price: '$0',
            description: 'For personal hobby projects and students.'
        },
        {
            name: 'Pro',
            price: '$15',
            tag: 'Popular',
            description: 'For pro developers and teams that need to scale their products.',
            subtitle: 'per member/month'
        },
        {
            name: 'Scale',
            price: '$599',
            description: 'For pro developers and teams that need to scale their products.',
            subtitle: 'per organization/month'
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'For pro developers and teams that need to scale their products.',
            subtitle: 'per organization/month'
        }
    ];
</script>

<div class="relative flex min-h-[75vh] items-center justify-center py-20">
    <div class="container flex w-full flex-col items-center justify-center gap-10">
        <div
            class="gradient-background absolute bottom-0 left-0 z-0 h-screen w-full -translate-x-[25%] translate-y-8 rotate-25 overflow-hidden blur-3xl"
        ></div>

        <div
            class="animate-fade-in relative flex w-full flex-col items-center justify-between gap-8 [animation-delay:150ms] [animation-duration:1000ms] md:flex-row"
        >
            <h2 class="text-title text-primary font-aeonik-pro max-w-xl text-pretty">
                Start building like a team of hundreds today<span class="text-accent">_</span>
            </h2>

            <div class="flex gap-4">
                <Button href="/">Get started</Button>
                <Button href="/" variant="secondary">View pricing plans</Button>
            </div>
        </div>

        <div
            class="border-gradient divide-smooth grid w-full grid-cols-1 place-content-center place-items-center gap-8 divide-x divide-dashed rounded-xl bg-white/2 px-4 py-10 backdrop-blur-lg before:rounded-xl after:rounded-xl md:grid-cols-2 lg:grid-cols-4"
        >
            {#each plans as { name, price, tag: label, subtitle, description }}
                <div class="flex min-h-40 w-full flex-col gap-1 px-4">
                    <div class="flex items-center gap-4">
                        <span class="text-description text-secondary">{name}</span>
                        {#if label}
                            <span
                                class="bg-accent-200 text-caption rounded-lg px-1.5 py-0.5 font-medium text-white"
                                >{label}</span
                            >
                        {/if}
                    </div>
                    <div class="flex flex-1 flex-col">
                        <span class="text-title font-aeonik-pro text-primary">{price}</span>
                        {#if subtitle}
                            <span class="text-caption text-secondary">{subtitle}</span>
                        {/if}
                        <p class="text-caption text-secondary mt-auto mb-0 block">{description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    @keyframes lighting {
        0% {
            opacity: 0;
            clip-path: inset(5%);
            transform: scale(111.11%);
        }
        100% {
            opacity: 1;
            clip-path: inset(0);
            transform: scale(1);
        }
    }

    .gradient-background {
        background-position: 0 0 0 0;
        background-image:
            radial-gradient(
                ellipse 390px 50px at 10% 60%,
                rgba(254, 149, 103, 0.4) 0%,
                rgba(254, 149, 103, 0) 70%
            ),
            radial-gradient(
                ellipse 1100px 170px at 15% 70%,
                rgba(253, 54, 110, 0.16) 0%,
                rgba(253, 54, 110, 0) 70%
            ),
            radial-gradient(
                ellipse 1200px 180px at 30% 60%,
                rgba(253, 54, 110, 0.16) 0%,
                rgba(253, 54, 110, 0) 70%
            );
        animation: lighting 1.25s ease-out forwards;
    }
</style>
