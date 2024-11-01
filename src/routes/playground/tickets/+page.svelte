<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import { buildOpenGraphImage } from '$lib/utils/metadata';
    import Toolbar from '../(components)/retro-ui/Toolbar.svelte';
    import Window from '../(components)/retro-ui/Window.svelte';
    import Ticket from '../(components)/ticket/Ticket.svelte';

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
    <div class="relative flex h-full w-full items-center justify-center bg-[#F4F4F7]">
        <Window mode="light" class="flex h-full flex-1 flex-col">
            <Toolbar slot="toolbar">Init_Ticket</Toolbar>
            <div
                slot="content"
                class="mt-4 flex flex-1 items-center justify-between border-b-2 border-l-2 border-black bg-white p-8 outline-2 outline-[#D8D8DB] [outline-style:inset]"
            >
                <Ticket />
            </div>
        </Window>
    </div>

    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>
