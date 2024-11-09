<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import { classNames } from '$lib/utils/classnames';
    import { buildOpenGraphImage } from '$lib/utils/metadata';
    import Lockup from '../(components)/Lockup.svelte';
    import Window from '../(components)/retro-ui/Window.svelte';
    import Ticket from '../(components)/ticket/Ticket.svelte';
    import { getMockContributions, loginGithub } from '../helpers';

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
    <div
        class={classNames(
            'checkerboard relative flex h-full w-full items-center justify-center bg-[#F4F4F7] !py-10 px-8',
            'after:absolute after:inset-0 after:-z-0 after:bg-gradient-to-b after:from-white after:via-white after:via-5% after:to-transparent'
        )}
    >
        <Window theme="light" class="flex aspect-[12.8/7.4] h-full flex-1 flex-col">
            <span slot="toolbar">Init</span>
            <div
                slot="content"
                class="mt-4 grid flex-1 grid-cols-1 items-center justify-between gap-24 border-b-2 border-l-2 border-black bg-white p-8 outline-2 outline-[#D8D8DB] [outline-style:inset] md:grid-cols-12 md:flex-row"
            >
                <div class="col-span-4 flex flex-col">
                    <Lockup class="w-3/4" />
                    <h2 class="text-title text-secondary font-aeonik-pro">
                        launches on<br /> December 5th
                    </h2>

                    <div class="my-6 h-px w-full bg-black/8" />

                    <p class="text-body text-secondary mb-2 font-medium">
                        Register today and claim your ticket
                    </p>
                    <div class="my-2">
                        <button class="web-button !w-full cursor-pointer" on:click={loginGithub}>
                            <div class="web-icon-github" />
                            <span class="text">Register with GitHub account</span>
                        </button>

                        <p class="text-caption text-secondary mt-4">
                            By registering, you agree to our <a
                                href="/terms"
                                class="web-link underline">Terms and Conditions</a
                            >
                            and <a href="/privacy" class="web-link underline">Privacy Policy</a>
                        </p>
                    </div>
                </div>
                <div class="col-span-7 col-start-6">
                    <Ticket
                        contributions={getMockContributions()}
                        name="Jesse Winton"
                        title="Design Engineer"
                        id={1}
                    />
                </div>
            </div>
        </Window>
    </div>

    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>
