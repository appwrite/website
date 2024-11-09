<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import { buildOpenGraphImage } from '$lib/utils/metadata';
    import Lockup from '../(components)/Lockup.svelte';
    import Window from '../(components)/retro-ui/Window.svelte';
    import Ticket from '../(components)/ticket/Ticket.svelte';
    import { loginGithub } from '../helpers';

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
    <div class="checkerboard relative flex h-full w-full items-center justify-center bg-[#F4F4F7]">
        <Window theme="light" class="flex h-full flex-1 flex-col">
            <span slot="toolbar">Init_Ticket</span>
            <div
                slot="content"
                class="mt-4 flex flex-1 items-center justify-between gap-12 border-b-2 border-l-2 border-black bg-white p-8 outline-2 outline-[#D8D8DB] [outline-style:inset]"
            >
                <div class="flex flex-col gap-2">
                    <Lockup class="!w-full" />
                    <h2 class="text-title text-secondary font-aeonik-pro">
                        launches on<br /> December 5th
                    </h2>

                    <p class="text-body text-secondary font-medium">
                        Register today and claim your ticket
                    </p>
                    <div class="space-y-2">
                        <button class="web-button !w-full cursor-pointer" on:click={loginGithub}>
                            <div class="web-icon-github" />
                            <span class="text">Register with GitHub account</span>
                        </button>
                    </div>
                </div>
            </div>
        </Window>
    </div>

    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>
