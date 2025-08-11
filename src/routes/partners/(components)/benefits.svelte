<script lang="ts">
    import Training from '../(assets)/icons/training.svg';
    import CoMarketing from '../(assets)/icons/co-marketing.svg';
    import Support from '../(assets)/icons/support.svg';
    import Revenue from '../(assets)/icons/revenue.svg';
    import EarlyAccess from '../(assets)/icons/early-access.svg';
    import Discounts from '../(assets)/icons/discounts.svg';
    import Experience from '../(assets)/icons/experience.svg';
    import Expert from '../(assets)/icons/expert.svg';
    import Ship from '../(assets)/icons/ship.svg';
    import { Button } from '$lib/components/ui';

    const items = [
        {
            title: 'Co-marketing',
            description:
                'We will have a dedicated partner catalog, an official partner badge, and other visibility opportunities.',
            icon: CoMarketing
        },
        {
            title: 'Training',
            description:
                'We provide in-depth training and workshops to help you master Appwrite for your clients.',
            icon: Training
        },
        {
            title: 'Support',
            description:
                'You will get access to the Appwrite engineering team to get the support you need.',
            icon: Support
        },
        {
            title: 'Early access',
            description:
                'You will get early access to new features and products and the ability to influence our roadmap.',
            icon: EarlyAccess
        },
        {
            title: 'Innovation',
            description:
                "Empower your team and elevate your customers' experiences with the newest technology.",
            icon: Revenue
        },
        {
            title: 'Discounts',
            description:
                'Volume discounts are available in case you handle the bill for your clients.',
            icon: Discounts
        }
    ];

    const whys = [
        {
            title: 'Developer experience',
            description:
                'Appwrite is built for and by developers, with a strong focus on your experience. Never worry about scaling or security again.',
            icon: Experience
        },
        {
            title: 'Ship faster',
            description:
                'Appwrite reduces the time and resources spent building a backend infrastructure from scratch.',
            icon: Ship
        },
        {
            title: 'All in one platform',
            description: 'Everything you need to develop, deploy, and scale your applications.',
            icon: Expert
        }
    ];
</script>

<div class="border-smooth flex flex-col items-center border-b pt-24 pb-24">
    <div class="mb-20 flex flex-col gap-2 text-center">
        <span class="font-aeonik-fono tracking-loose text-eyebrow text-primary uppercase">
            Benefits<span class="text-accent">_</span>
        </span>
        <h2 class="text-primary font-aeonik-pro text-title">Growing together</h2>
    </div>

    <div class="hidden w-full lg:block">
        <div class="border-smooth relative w-full border-t border-dashed">
            <div
                class="divide-smooth container hidden grid-cols-3 gap-px divide-x divide-dashed lg:grid"
            >
                {#each items.slice(0, 3) as item}
                    <div
                        class="bg-greyscale-900 relative flex flex-col gap-4 p-8 nth-of-type-[3]:border-none"
                    >
                        <img src={item.icon} alt="{item.title} Icon" class="size-12" />
                        <span class="text-primary -mb-3">{item.title}</span>
                        <p class="text-secondary">{item.description}</p>
                    </div>
                {/each}
            </div>
        </div>
        <div class="border-smooth relative w-full border-y border-dashed">
            <div
                class="divide-smooth container hidden grid-cols-3 gap-px divide-x divide-dashed lg:grid"
            >
                {#each items.slice(3, items.length) as item}
                    <div
                        class="bg-greyscale-900 relative flex flex-col gap-4 p-8 nth-of-type-[3]:border-none"
                    >
                        <img src={item.icon} alt="{item.title} Icon" class="size-12" />
                        <span class="text-primary -mb-3">{item.title}</span>
                        <p class="text-secondary">{item.description}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <div class="hidden w-full md:block lg:hidden">
        <div class="border-smooth relative w-full border-t border-dashed">
            <div
                class="divide-smooth container hidden grid-cols-2 gap-px divide-x divide-dashed md:grid"
            >
                {#each items.slice(0, 2) as item}
                    <div
                        class="bg-greyscale-900 relative flex flex-col gap-4 p-8 nth-of-type-[3]:border-none"
                    >
                        <img src={item.icon} alt="{item.title} Icon" class="size-12" />
                        <span class="text-primary -mb-3">{item.title}</span>
                        <p class="text-secondary">{item.description}</p>
                    </div>
                {/each}
            </div>
        </div>
        <div class="border-smooth relative w-full border-y border-dashed">
            <div
                class="divide-smooth container hidden grid-cols-2 gap-px divide-x divide-dashed md:grid"
            >
                {#each items.slice(2, 4) as item}
                    <div
                        class="bg-greyscale-900 relative flex flex-col gap-4 p-8 nth-of-type-[3]:border-none"
                    >
                        <img src={item.icon} alt="{item.title} Icon" class="size-12" />
                        <span class="text-primary -mb-3">{item.title}</span>
                        <p class="text-secondary">{item.description}</p>
                    </div>
                {/each}
            </div>
        </div>
        <div class="border-smooth relative w-full border-b border-dashed">
            <div
                class="divide-smooth container hidden grid-cols-2 gap-px divide-x divide-dashed md:grid"
            >
                {#each items.slice(4, items.length) as item}
                    <div
                        class="bg-greyscale-900 relative flex flex-col gap-4 p-8 nth-of-type-[3]:border-none"
                    >
                        <img src={item.icon} alt="{item.title} Icon" class="size-12" />
                        <span class="text-primary -mb-3">{item.title}</span>
                        <p class="text-secondary">{item.description}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <div class="block w-full md:hidden">
        <div class="border-smooth relative w-full border-y border-dashed">
            <div class="divide-smooth container grid grid-cols-1 gap-px divide-y divide-dashed">
                {#each items as item}
                    <div class="bg-greyscale-900 relative flex flex-col gap-4 p-8">
                        <img src={item.icon} alt="{item.title} Icon" class="size-12" />
                        <span class="text-primary -mb-3">{item.title}</span>
                        <p class="text-secondary">{item.description}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <Button
        variant="secondary"
        class="mx-auto mt-20"
        href="#become-a-partner"
        event="partners-become_a_partner_benefits-click">Become a partner</Button
    >
</div>

<div class="border-smooth flex flex-col items-center pt-24 pb-24">
    <div class="mb-20 flex flex-col gap-2 text-center">
        <h2 class="text-primary font-aeonik-pro text-title">Why Appwrite?</h2>
    </div>

    <div class="border-smooth relative w-full border-y border-dashed">
        <div
            class="divide-smooth container grid grid-cols-1 gap-px divide-dashed max-md:divide-y md:grid-cols-3 md:divide-x"
        >
            {#each whys as why}
                <div
                    class="bg-greyscale-900 relative flex flex-col items-center gap-4 p-8 text-center nth-of-type-[3]:border-none"
                >
                    <img src={why.icon} alt="{why.title} Icon" class="size-12" />
                    <span class="text-primary -mb-3">{why.title}</span>
                    <p class="text-secondary">{why.description}</p>
                </div>
            {/each}
        </div>
    </div>

    <Button href="#become-a-partner" variant="secondary" class="mx-auto mt-20"
        >Become a partner</Button
    >
</div>
