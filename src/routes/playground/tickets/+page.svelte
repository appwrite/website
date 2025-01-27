<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import { buildOpenGraphImage } from '$lib/utils/metadata';
    import Window from '../(components)/retro-ui/Window.svelte';
    import Ticket from '../(components)/ticket/Ticket.svelte';
    import { getMockContributions } from '../helpers';

    const title = 'Init - Appwrite';
    const description = 'The start of something new.';
    const ogImage = buildOpenGraphImage('init', description);
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
</svelte:head>

<Main>
    <Window class="flex aspect-[12.8/7.4] h-full flex-1 flex-col">
        <span slot="title">Init</span>

        <Ticket
            contributions={getMockContributions()}
            name="Jesse Winton"
            title="Design Engineer"
            id={1}
        />
    </Window>

    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>
