<script lang="ts">
    import Training from '../(assets)/icons/training.svg';
    import CoMarketing from '../(assets)/icons/co-marketing.svg';
    import Support from '../(assets)/icons/support.svg';
    import Revenue from '../(assets)/icons/revenue.svg';
    import EarlyAccess from '../(assets)/icons/early-access.svg';
    import Discounts from '../(assets)/icons/discounts.svg';

    const items = [
        {
            title: 'Revenue share',
            description:
                'For each client you sell Appwrite to you will receive a part of the revenue for a whole year.',
            icon: Revenue
        },
        {
            title: 'Discounts',
            description:
                'You will be able to provide your clients with Cloud credits to give them discounts on their Appwrite account.',
            icon: Discounts
        },
        {
            title: 'Co-marketing',
            description:
                'We will have a dedicated partner catalog, and official partner badge and other visibility opportunities.',
            icon: CoMarketing
        },
        {
            title: 'Training',
            description:
                'We provide in depth training and workshops to help you master Appwrite for your clients.',
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
        }
    ];
</script>

<div class="flex flex-col items-center pt-24 pb-24">
    <div class="mb-20 flex flex-col gap-2 text-center">
        <span class="font-aeonik-fono tracking-loose text-micro text-primary uppercase">
            Benefits<span class="text-accent">_</span>
        </span>
        <h2 class="text-primary font-aeonik-pro text-title">Growing together</h2>
    </div>

    <div class="border-smooth w-full border-y border-dashed">
        <div
            class="border-smooth container grid grid-cols-1 gap-px border-y border-dashed sm:grid-cols-2 lg:grid-cols-3"
        >
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
