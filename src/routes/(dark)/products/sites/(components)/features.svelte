<script lang="ts">
    import DDOS from '../(assets)/icons/ddos.png';
    import SSR from '../(assets)/icons/ssr.png';
    import Domains from '../(assets)/icons/domains.png';

    const items = [
        {
            icon: DDOS,
            label: 'DDOS Protection',
            description:
                'Automatically detect and mitigate Distributed Denial-of-Service (DDoS) attacks to ensure your app stays online and responsive, even under attacks.'
        },
        {
            icon: SSR,
            label: 'Server-side rendering',
            description:
                'Deliver dynamic content faster and improve SEO with built-in support for server-side rendering (SSR) in your apps.'
        },
        {
            icon: Domains,
            label: 'Custom domains',
            description:
                'Easily connect your own domain name to your Appwrite project, site, or function for a fully branded experience.'
        }
    ];
</script>

<div class="border-smooth container mx-auto mb-20 border-y border-dashed py-12">
    <div class="divide-smooth grid w-full grid-cols-1 divide-dashed max-sm:divide-y md:grid-cols-3">
        {#each items as { icon, label, description }}
            <div
                class="text-sub-body border-smooth flex flex-col border-dashed py-10 text-center font-medium last-of-type:border-0 md:border-r md:px-8 md:text-left"
            >
                <img class="mx-auto mb-3 size-10 md:mx-0" src={icon} alt={label} />
                <h3 class="text-primary mb-1">{label}</h3>
                <p class="text-secondary">{description}</p>
            </div>
        {/each}
    </div>
</div>
