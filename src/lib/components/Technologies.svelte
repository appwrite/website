<script lang="ts">
    import { trackEvent } from '$lib/actions/analytics';
    import Tooltip from '$lib/components/Tooltip.svelte';
    import { useTheme } from 'sveltekit-themes';

    const theme = useTheme();

    $: platforms = [
        {
            name: 'Flutter',
            href: '/docs/quick-starts/flutter',
            image: `/images/platforms/${theme.current}/flutter.svg`
        },
        {
            name: 'Next',
            href: '/docs/quick-starts/nextjs',
            image: `/images/platforms/${theme.current}/nextjs.svg`
        },
        {
            name: 'React',
            href: '/docs/quick-starts/react',
            image: `/images/platforms/${theme.current}/react.svg`
        },
        {
            name: 'Svelte',
            href: '/docs/quick-starts/sveltekit',
            image: `/images/platforms/${theme.current}/svelte.svg`
        },
        {
            name: 'Nuxt',
            href: '/docs/quick-starts/nuxt',
            image: `/images/platforms/${theme.current}/nuxt.svg`
        },
        {
            name: 'Vue',
            href: '/docs/quick-starts/vue',
            image: `/images/platforms/${theme.current}/vue.svg`
        },
        {
            name: 'Angular',
            href: '/docs/quick-starts/angular',
            image: `/images/platforms/${theme.current}/angular.svg`
        },
        {
            name: 'Refine',
            href: '/docs/quick-starts/refine',
            image: `/images/platforms/${theme.current}/refine.svg`
        },
        {
            name: 'Apple',
            href: '/docs/quick-starts/apple',
            image: `/images/platforms/${theme.current}/apple.svg`
        },
        {
            name: 'Android',
            href: '/docs/quick-starts/android',
            image: `/images/platforms/${theme.current}/android.svg`
        },
        {
            name: 'React Native',
            href: '/docs/quick-starts/react-native',
            image: `/images/platforms/${theme.current}/react-native.svg`
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
                    onclick={() =>
                        trackEvent(
                            `technologies-${platform.name.replace(' ', '-').toLowerCase()}-click`
                        )}
                >
                    <img
                        src={platform.image}
                        alt="{platform.name} quick start"
                        width="32"
                        height="32"
                    />
                </a>
            </li>
            {#snippet tooltip()}
                {platform.name}
            {/snippet}
        </Tooltip>
    {/each}
</ul>
