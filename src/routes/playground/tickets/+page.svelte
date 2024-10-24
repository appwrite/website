<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import { loginGithub } from '../helpers';
    import { buildOpenGraphImage } from '$lib/utils/metadata';

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
    <div class="relative flex h-screen w-full items-center justify-center bg-[#F4F4F7]">
        <div
            class="window absolute inset-0 m-6 flex flex-col border-t-2 border-r-4 border-b-4 border-l-2 border-t-white border-r-[#87878A] border-b-[#87878A] border-l-white bg-[#FAFAFB] p-4"
        >
            <div
                class="flex h-10 w-full items-center justify-between border-2 border-t-white border-r-[#87878A] border-b-[#87878A] border-l-white bg-[#EDEDF0] px-4"
            >
                <div class="flex-1 space-y-1.5">
                    <div class="h-0.5 w-full bg-[#d8d8d8]" />
                    <div class="h-0.5 w-full bg-[#d8d8d8]" />
                    <div class="h-0.5 w-full bg-[#d8d8d8]" />
                </div>
                <span class="font-aeonik-fono tracking-loose px-6 text-sm uppercase text-[#2D2D31]"
                    >Init</span
                >
                <div class="flex-1 space-y-1.5">
                    <div class="h-0.5 w-full bg-[#d8d8d8]" />
                    <div class="h-0.5 w-full bg-[#d8d8d8]" />
                    <div class="h-0.5 w-full bg-[#d8d8d8]" />
                </div>
            </div>
            <div
                class="mt-4 flex flex-1 items-center justify-between border-b-2 border-l-2 border-black bg-white p-8 outline-2 outline-[#D8D8DB] [outline-style:inset]"
            >
                <div class="ticket relative h-[450px] w-[60%] bg-[#1D1D21]" />
            </div>
        </div>
    </div>
    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style>
    @keyframes stutter {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0px);
        }
    }

    .window {
        box-shadow: 10px 10px 0 0 #c7c7c9;
    }

    .ticket {
        animation: stutter 1.25s steps(2, end) infinite;
        box-shadow: 10px 10px 0 0 #d2d2d3;
    }
</style>
