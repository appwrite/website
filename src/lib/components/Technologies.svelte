<script lang="ts">
    import { trackEvent } from '$lib/actions/analytics';
    import Tooltip from '$lib/components/Tooltip.svelte';
    import { themeInUse } from '$routes/+layout.svelte';

    $: platforms = [
        {
            name: 'Flutter',
            href: '/docs/quick-starts/flutter',
            image: `/images/platforms/${$themeInUse}/flutter.svg`
        },
        {
            name: 'Next',
            href: '/docs/quick-starts/nextjs',
            image: `/images/platforms/${$themeInUse}/nextjs.svg`
        },
        {
            name: 'React',
            href: '/docs/quick-starts/react',
            image: `/images/platforms/${$themeInUse}/react.svg`
        },
        {
            name: 'Svelte',
            href: '/docs/quick-starts/sveltekit',
            image: `/images/platforms/${$themeInUse}/svelte.svg`
        },
        {
            name: 'Nuxt',
            href: '/docs/quick-starts/nuxt',
            image: `/images/platforms/${$themeInUse}/nuxt.svg`
        },
        {
            name: 'Vue',
            href: '/docs/quick-starts/vue',
            image: `/images/platforms/${$themeInUse}/vue.svg`
        },
        {
            name: 'Angular',
            href: '/docs/quick-starts/angular',
            image: `/images/platforms/${$themeInUse}/angular.svg`
        },
        {
            name: 'Refine',
            href: '/docs/quick-starts/refine',
            image: `/images/platforms/${$themeInUse}/refine.svg`
        },
        {
            name: 'Apple',
            href: '/docs/quick-starts/apple',
            image: `/images/platforms/${$themeInUse}/apple.svg`
        },
        {
            name: 'Android',
            href: '/docs/quick-starts/android',
            image: `/images/platforms/${$themeInUse}/android.svg`
        },
        {
            name: 'React Native',
            href: '/docs/quick-starts/react-native',
            image: `/images/platforms/${$themeInUse}/react-native.svg`
        }
    ] as Array<{
        name: string;
        href: string;
        image: string;
    }>;
</script>

<ul
    class="web-u-margin-block-32-mobile web-u-margin-block-40-not-mobile flex flex-wrap gap-4 lg:max-w-[34rem]"
>
    {#each platforms as platform}
        <Tooltip>
            <li>
                <a
                    href={platform.href}
                    class="web-icon-button web-box-icon has-border-gradient"
                    on:click={() => trackEvent({ plausible: { name: `${platform.name} clicked` } })}
                >
                    <img
                        src={platform.image}
                        alt="{platform.name} quick start"
                        width="32"
                        height="32"
                    />
                </a>
            </li>
            <svelte:fragment slot="tooltip">{platform.name}</svelte:fragment>
        </Tooltip>
    {/each}
</ul>
