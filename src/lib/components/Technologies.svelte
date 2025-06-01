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

<style>
    .animated-border-button {
        position: relative;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .animated-border-button::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 0.5rem;
        border: 1px solid transparent;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%) border-box;
        mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .animated-border-button::after {
        content: '';
        position: absolute;
        inset-x: 0;
        top: -1px;
        height: 1px;
        width: 0;
        margin: 0 auto;
        background: linear-gradient(90deg, transparent, var(--color-primary, currentColor), transparent);
        transition: width 0.4s ease;
        border-radius: 1px;
        z-index: 1;
    }
    
    .animated-border-button:hover {
        transform: translateY(-2px);
        box-shadow: 
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            0 0 20px rgba(255, 255, 255, 0.15);
    }
    
    .animated-border-button:hover::before {
        opacity: 1;
    }
    
    .animated-border-button:hover::after {
        width: 50%;
    }
    
    .animated-border-button:active {
        transform: translateY(0);
        transition-duration: 0.1s;
    }
    
    /* Dark mode adjustments */
    :global(.dark) .animated-border-button:hover {
        box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.2),
            0 0 25px rgba(255, 255, 255, 0.1);
    }
    
    :global(.dark) .animated-border-button::after {
        background: linear-gradient(90deg, transparent, var(--color-primary, #ffffff), transparent);
    }
</style>

<ul
    class="web-u-margin-block-32-mobile web-u-margin-block-40-not-mobile flex flex-wrap gap-4 lg:max-w-[34rem]"
>
    {#each platforms as platform}
        <Tooltip>
            <li>
                <a
                    href={platform.href}
                    class="web-icon-button web-box-icon has-border-gradient animated-border-button"
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