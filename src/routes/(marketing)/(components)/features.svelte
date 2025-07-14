<script lang="ts">
    import { trackEvent } from '$lib/actions/analytics';
    import Icon from '$lib/components/ui/icon';

    const features = [
        {
            label: 'Self-Hosted',
            description: 'Own your data or host it on a cloud region of choice.',
            icon: '/images/icons/gradients/self-hosted.svg',
            href: '/docs/advanced/self-hosting'
        },
        {
            label: 'Encryption',
            description: 'Built-in data encryption both in rest and in transit.',
            icon: '/images/icons/gradients/lock.svg',
            href: '/docs/advanced/security/encryption'
        },
        {
            label: 'Abuse protection',
            description: 'Protect your APIs from abuse with built-in protection.',
            icon: '/images/icons/gradients/shield.svg',
            href: '/docs/advanced/security/abuse-protection#rate-limiting'
        },
        {
            label: 'Data migrations',
            description: 'Easily transfer data from 3rd parties or between Cloud and self-hosted.',
            icon: '/images/icons/gradients/database.svg',
            href: '/docs/advanced/migrations'
        },
        {
            label: 'GDPR',
            description: 'Safeguard user data and privacy with provided GDPR regulations.',
            icon: '/images/icons/gradients/star.svg',
            href: '/docs/advanced/security/gdpr'
        },
        {
            label: 'SOC-2',
            description: 'Ensure the highest level of security and privacy protection.',
            icon: '/images/icons/gradients/soc-2.svg',
            href: '/docs/advanced/security/soc2'
        },
        {
            label: 'HIPAA',
            description: 'Protect sensitive user health data.',
            icon: '/images/icons/gradients/hipaa.svg',
            href: '/docs/advanced/security/hipaa'
        },
        {
            label: 'CCPA',
            description: 'Protect sensitive user health data.',
            icon: '/images/icons/gradients/ccpa.svg',
            href: '/docs/advanced/security/ccpa'
        }
    ];
</script>

<div class="light mt-4 bg-[#EDEDF0] pt-20 pb-12 md:pt-40">
    <div class="container mx-auto">
        <section class="flex flex-col items-start gap-x-20 md:flex-row">
            <h2
                class="text-title-lg font-aeonik-pro text-primary max-w-[700px] leading-12 text-pretty"
            >
                Self-host your data or take it to the Cloud<span class="text-accent">_</span>
            </h2>
            <p class="text-secondary text-description mt-4 max-w-xl font-medium">
                Migrate your data from and to any platform at any time with Appwrite’s migrations
                API. With built-in security and privacy for peace of mind.
            </p>
        </section>
    </div>
    <div class="mt-20 border-y border-dashed border-black/8">
        <div class="container grid grid-cols-2 overflow-hidden lg:grid-cols-4">
            {#each features as box}
                <a
                    class="text-sub-body group relative border-b border-dashed border-black/8 p-8 font-medium last-of-type:border-0 nth-of-type-[4]:border-r-0 nth-of-type-[7]:border-b-0 max-lg:even:border-r-0 md:border-r lg:nth-of-type-[5]:border-b-0 lg:nth-of-type-[6]:border-b-0 lg:nth-of-type-[8]:border-b-0"
                    href={box.href}
                    onclick={() => {
                        trackEvent(`feature-${box.label.toLowerCase().replace(' ', '-')}-click`);
                    }}
                >
                    <img loading="lazy" src={box.icon} width="40" height="40" alt="" />
                    <h3 class="text-primary mt-4 flex flex-wrap items-center gap-0.5">
                        {box.label}

                        <Icon
                            name="arrow-right"
                            class="-rotate-45 transition-all group-hover:translate-x-0.25 group-hover:-translate-y-0.25 group-hover:opacity-100 group-focus:translate-x-0.25 group-focus:-translate-y-0.25 group-focus:opacity-100 xl:opacity-0"
                        />
                    </h3>
                    <p class="text-secondary mt-1">
                        {box.description}
                    </p>
                </a>
            {/each}
        </div>
    </div>
</div>
