<script lang="ts">
    import { trackEvent } from '$lib/actions/analytics';
    import OpenSource from '$lib/animations/OpenSource.svelte';
    import Products from '$lib/animations/Products/Products.svelte';
    import ProductsMobile from '$lib/animations/Products/ProductsMobile.svelte';
    import AppwriteIn100Seconds from '$lib/components/AppwriteIn100Seconds.svelte';
    import PreFooter from '$lib/components/PreFooter.svelte';
    import Technologies from '$lib/components/Technologies.svelte';
    import { Button } from '$lib/components/ui';
    import Badge from '$lib/components/ui/badge.svelte';
    import GradientText from '$lib/components/ui/gradient-text.svelte';
    import Hero from '$lib/components/ui/hero.svelte';
    import { Main } from '$lib/layouts';
    import { isMobileNavOpen } from '$lib/layouts/Main.svelte';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import {
        DEFAULT_DESCRIPTION,
        DEFAULT_HOST,
        getInlinedScriptTag,
        organizationJsonSchema,
        softwareAppSchema
    } from '$lib/utils/metadata';
    import FooterNav from '../lib/components/FooterNav.svelte';
    import MainFooter from '../lib/components/MainFooter.svelte';
    import DeveloperCard from './DeveloperCard.svelte';
    import CoverImage from './dashboard.webp';

    const title = 'Appwrite - Build like a team of hundreds';
    const description = DEFAULT_DESCRIPTION;
    const ogImage = `${DEFAULT_HOST}/images/open-graph/website.png`;

    const infoBoxes: Array<{ label: string; description: string; icon: string }> = [
        {
            label: 'Self-Hosted',
            description: 'Own your data or host it on a cloud region of choice.',
            icon: '/images/icons/gradients/self-hosted.svg'
        },
        {
            label: 'Encryption',
            description: 'Built-in data encryption both in rest and in transit.',
            icon: '/images/icons/gradients/lock.svg'
        },
        {
            label: 'Abuse protection',
            description: 'Protect your APIs from abuse with built-in protection.',
            icon: '/images/icons/gradients/shield.svg'
        },
        {
            label: 'Data migrations',
            description: 'Easily transfer data from 3rd parties or between Cloud and self-hosted.',
            icon: '/images/icons/gradients/database.svg'
        },
        {
            label: 'GDPR',
            description: 'Safeguard user data and privacy with provided GDPR regulations.',
            icon: '/images/icons/gradients/star.svg'
        },
        {
            label: 'SOC-2',
            description: 'Ensure the highest level of security and privacy protection.',
            icon: '/images/icons/gradients/soc-2.svg'
        },
        {
            label: 'HIPAA',
            description: 'Protect sensitive user health data.',
            icon: '/images/icons/gradients/hipaa.svg'
        }
    ];
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Description -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <!-- Image -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />

    <!-- eslint-disable-next-line svelte/no-at-html-tags-->
    {@html getInlinedScriptTag(softwareAppSchema())}

    <!-- eslint-disable-next-line svelte/no-at-html-tags-->
    {@html getInlinedScriptTag(organizationJsonSchema())}
</svelte:head>

<Main></Main>
