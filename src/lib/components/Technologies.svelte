<script lang="ts">
    import Tooltip from '$lib/components/Tooltip.svelte';

    const platforms: Array<{
        name: string;
        href: string;
        image: string;
    }> = [
        {
            name: 'Flutter',
            href: '/docs/quick-starts/flutter',
            image: '/images/platforms/dark/flutter.svg'
        },
        {
            name: 'Next',
            href: '/docs/quick-starts/nextjs',
            image: '/images/platforms/dark/nextjs.svg'
        },
        {
            name: 'React',
            href: '/docs/quick-starts/react',
            image: '/images/platforms/dark/react.svg'
        },
        {
            name: 'Svelte',
            href: '/docs/quick-starts/sveltekit',
            image: '/images/platforms/dark/svelte.svg'
        },
        {
            name: 'Nuxt',
            href: '/docs/quick-starts/nuxt',
            image: '/images/platforms/dark/nuxt.svg'
        },
        {
            name: 'Vue',
            href: '/docs/quick-starts/vue',
            image: '/images/platforms/dark/vue.svg'
        },
        {
            name: 'Angular',
            href: '/docs/quick-starts/angular',
            image: '/images/platforms/dark/angular.svg'
        },
        {
            name: 'Apple',
            href: '/docs/quick-starts/apple',
            image: '/images/platforms/dark/apple.svg'
        },
        {
            name: 'Android',
            href: '/docs/quick-starts/android',
            image: '/images/platforms/dark/android.svg'
        }
    ];
</script>

<ul class="u-flex u-flex-wrap u-gap-16 aw-u-margin-block-32-mobile aw-u-margin-block-40-not-mobile">
    {#each platforms as platform}
        <Tooltip>
            <li>
                <a href={platform.href} class="aw-box-icon has-border-gradient">
                    <img src={platform.image} alt="{platform.name} Logo" width="32" height="32" />
                </a>
            </li>
            <svelte:fragment slot="tooltip">{platform.name}</svelte:fragment>
        </Tooltip>
    {/each}
</ul>
