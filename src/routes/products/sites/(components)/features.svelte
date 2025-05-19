<script lang="ts">
    import DDOS from '../(assets)/icons/ddos.svg';
    import SSR from '../(assets)/icons/ssr.svg';
    import Domains from '../(assets)/icons/domains.svg';

    const items = [
        {
            icon: DDOS,
            label: 'DDOS Protection',
            description: 'Own your data or host it on a region of choice.'
        },
        {
            icon: SSR,
            label: 'Server-side rendering',
            description: 'Built-in data encryption both in rest and in transit.'
        },
        {
            icon: Domains,
            label: 'Custom domains',
            description: 'Protect users from abuse with built-in protection.'
        }
    ];
</script>

<div class="border-smooth container mx-auto mb-20 border-y border-dashed py-12">
    <div
        class="divide-smooth grid w-full grid-cols-1 divide-dashed max-sm:divide-y md:grid-cols-3 md:place-items-center"
    >
        {#each items as { icon, label, description }}
            <div
                class="text-sub-body border-smooth border-dashed py-10 text-center font-medium last-of-type:border-0 md:border-r md:px-8 md:text-left"
            >
                <img class="mx-auto mb-3 size-10 md:mx-0" src={icon} alt={label} />
                <h3 class="text-primary mb-1">{label}</h3>
                <p class="text-secondary">{description}</p>
            </div>
        {/each}
    </div>
</div>
