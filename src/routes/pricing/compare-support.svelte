<script lang="ts">
    import Button from '$lib/components/ui/Button.svelte';
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';

    const supportOptions = [
        {
            header: {
                title: 'Basic',
                price: '$50/month',
                button: 'secondary',
                href: '/contact-us'
            }
        },
        {
            header: {
                title: 'Standard',
                price: '$99/month',
                button: 'primary',
                href: '/contact-us'
            }
        },
        {
            header: {
                title: 'Premium',
                price: '$999/month',
                button: 'secondary',
                href: '/contact-us'
            }
        }
    ];
</script>

<div class="dark bg-[linear-gradient(180deg,_#232325E6_0%,#19191C_100%)] py-10">
    <div class="web-big-padding-section-level-2 container">
        <div class="relative">
            <article>
                <div class="container">
                    <header class="text-center">
                        <h3 class="text-title font-aeonik-pro text-primary">Support</h3>
                        <p class="text-body mt-4 font-medium">
                            We offer different support tiers for self-hosted projects who need
                            premium support.
                        </p>
                    </header>
                </div>
                <section class="mt-16 grid grid-cols-[200px_repeat(3,_1fr)]">
                    <div></div>
                    {#each supportOptions as supportOption}
                        <div
                            class="mx-4 mb-8 flex flex-col items-center gap-3 rounded-2xl border border-[#FFFFFF0F] bg-[#232325E6] p-2.5"
                        >
                            <div class="flex gap-2">
                                <span class="text-[#FFFFFF]">{supportOption.header.title}</span
                                ><span>{supportOption.header.price}</span>
                            </div>
                            <a
                                href="{PUBLIC_APPWRITE_DASHBOARD}/{supportOption.header.href}"
                                class="web-button"
                                class:is-secondary={supportOption.header.button === 'secondary'}
                            >
                                <span class="text-sub-body font-medium">Contact us</span>
                            </a>
                        </div>
                    {/each}

                    <div class="border-t border-[#FFFFFF0F] py-4">Response times</div>
                    <div class="border-t border-[#FFFFFF0F] py-4 text-center">10GB</div>
                    <div class="border-t border-[#FFFFFF0F] py-4 text-center">300GB</div>
                    <div class="border-t border-[#FFFFFF0F] py-4 text-center">300GB</div>

                    <div class="border-t border-[#FFFFFF0F] py-4">Avg resolution time</div>
                    <div class="border-t border-[#FFFFFF0F] py-4 text-center">-</div>
                    <div class="border-t border-[#FFFFFF0F] py-4 text-center">$40 per 100GB</div>
                    <div class="border-t border-[#FFFFFF0F] py-4 text-center">$40 per 100GB</div>

                    <div class="border-t border-[#FFFFFF0F] py-4">Availability</div>
                    <div class="border-t border-[#FFFFFF0F] py-4 text-center">2GB</div>
                    <div class="border-t border-[#FFFFFF0F] py-4 text-center">150GB</div>
                    <div class="border-t border-[#FFFFFF0F] py-4 text-center">150GB</div>

                    <div class="border-t border-[#FFFFFF0F] py-4">Support channels</div>
                    <div class="border-t border-[#FFFFFF0F] py-4 text-center">-</div>
                    <div class="border-t border-[#FFFFFF0F] py-4 text-center">$3 per 100GB</div>
                    <div class="border-t border-[#FFFFFF0F] py-4 text-center">$3 per 100GB</div>

                    <div class="border-y border-[#FFFFFF0F] py-4">Support agents</div>
                    <div class="border-y border-[#FFFFFF0F] py-4 text-center">750k Executions</div>
                    <div class="border-y border-[#FFFFFF0F] py-4 text-center">3.5M Executions</div>
                    <div class="border-y border-[#FFFFFF0F] py-4 text-center">3.5M Executions</div>
                </section>
            </article>
        </div>
    </div>
</div>
