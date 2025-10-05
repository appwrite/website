<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';

    const benefits = [
        {
            label: 'All-in-one platform',
            description:
                'Use one platform for backend development and web hosting and reduce vendors.',
            icon: '/images/icons/gradients/globe.svg'
        },
        {
            label: 'AI-powered development',
            description: "Connect your favorite AI productivity tools with Appwrite's MCP.",
            icon: '/images/icons/gradients/stars.svg'
        },
        {
            label: 'Scale effortlessly',
            description:
                'From MVP to enterprise, our app scales automatically, letting you focus on your business goals.',
            icon: '/images/icons/gradients/rocket.svg'
        },
        {
            label: 'Zero configuration development',
            description: 'Spin up your backend in minutes, deploy in seconds. Fast and simple.',
            icon: '/images/icons/gradients/backend.svg'
        },
        {
            label: 'Built-in security',
            description: "Your users' data is safe from day one with Appwrite's built in security.",
            icon: '/images/icons/gradients/shield.svg'
        },
        {
            label: 'Compliance',
            description: 'We adhere to all needed compliance: GDPR, HIPAA, CCPA, SOC-2.',
            icon: '/images/icons/gradients/eu.svg'
        },
        {
            label: 'Open-source',
            description:
                'Your data is always yours. Want to migrate away? You can do so at any time.',
            icon: '/images/icons/gradients/database.svg'
        }
    ];

    type BenefitsProps = {
        theme?: 'light' | 'dark';
        description?: string;
    } & HTMLAttributes<HTMLDivElement>;

    const {
        theme = 'light',
        description = "You don't need to have a team of engineers to develop, host, and scale applications. Appwrite gives you everything you need, including built-in security, AI, and open source.",
        class: classes,
        ...restProps
    }: BenefitsProps = $props();
</script>

<div
    class={cn('bg-[#EDEDF0] pt-20 pb-12 md:pt-30 md:pb-20', theme, classes, {
        'bg-greyscale-900': theme === 'dark'
    })}
    {...restProps}
>
    <div class="container mx-auto">
        <section class="flex flex-col items-start gap-x-30 md:flex-row">
            <h2
                class="text-title font-aeonik-pro text-primary max-w-[700px] leading-12 text-pretty"
            >
                Benefits of Appwrite<br />for
                <span class="relative"
                    >startups<span class="absolute bottom-0 left-0 h-1 w-full"></span></span
                ><span class="text-accent">_</span>
            </h2>
            <p class="text-secondary text-description mt-4 max-w-xl font-medium">
                {description}
            </p>
        </section>
    </div>
    <div class="mt-12 border-y border-dashed border-black/8 md:mt-20">
        <div
            class="mx-auto grid grid-cols-2 overflow-hidden lg:grid-cols-4"
            style="max-width: 1200px; margin-inline: auto;"
        >
            {#each benefits as box}
                <div
                    class="text-sub-body group relative border-dashed border-black/8 px-4 py-6 font-medium last-of-type:border-0 sm:px-2.5 sm:py-8 sm:pr-8 sm:max-lg:even:border-r-0 md:border-r md:border-b md:p-8 md:pr-8 lg:nth-of-type-[5]:border-b-0 lg:nth-of-type-[6]:border-b-0 lg:nth-of-type-[8]:border-b-0"
                >
                    <img loading="lazy" src={box.icon} width="40" height="40" alt="" />
                    <h3 class="text-primary mt-4 flex flex-wrap items-center gap-0.5">
                        {box.label}
                    </h3>
                    <p class="text-secondary mt-1">
                        {box.description}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</div>
