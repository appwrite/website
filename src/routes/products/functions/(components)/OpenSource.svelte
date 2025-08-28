<script lang="ts">
    import { sleep, unwrite, write } from '$lib/animations';
    import { SOCIAL_STATS } from '$lib/constants';
    import { onMount } from 'svelte';
    import collaboration from '../(assets)/collaboration.svg';
    import customization from '../(assets)/customization.svg';
    import transparency from '../(assets)/transparency.svg';
    import { GithubStats, DiscordLink } from '$lib/components/shared';

    const items = [
        {
            title: 'Community collaboration',
            copy: "Share knowledge and learn from others' experiences.",
            icon: collaboration
        },
        {
            title: 'Transparency and security',
            copy: 'The source code is openly accessible for anyone to inspect.',
            icon: transparency
        },
        {
            title: 'Customization and flexibility',
            copy: 'The freedom to customize and adapt products to your needs. ',
            icon: customization
        }
    ];

    const platforms = ['Auth0', 'Firebase', 'Supabase', 'NHost'];

    let activeIndex = 0;
    let activePlatform = platforms[activeIndex];

    const rotatePlatforms = async () => {
        while (true) {
            await write(platforms[activeIndex], (v) => (activePlatform = v), 500);
            await sleep(5000);
            await unwrite(platforms[activeIndex], (v) => (activePlatform = v), 500);
            activeIndex = (activeIndex + 1) % platforms.length;
            await sleep(500);
        }
    };

    onMount(() => {
        rotatePlatforms();
    });
</script>

<section class="light bg-greyscale-50 pt-32 pb-40">
    <div class="container overflow-x-hidden">
        <div class="mx-auto mb-20 flex max-w-2xl flex-col items-center gap-y-4 text-center">
            <h2 class="md:text-display text-title text-primary font-aeonik-pro">
                Open source <br class="hidden md:block" />alternative to

                <div
                    class="relative inline-flex bg-[linear-gradient(-146deg,_#FD376F,_#19191D_47%,_#19191D)] bg-clip-text text-transparent"
                >
                    {activePlatform}{' '}
                    <div
                        class="animate-caret-blink absolute top-1/2 -right-2 bottom-0 block h-[75%] w-px -translate-y-1/2 bg-[linear-gradient(-146deg,_#FD376F,_#19191D_47%,_#19191D)]"
                    ></div>
                </div>
            </h2>
            <p class="md:text-description text-main-body text-secondary font-medium">
                Appwrite is a 100% open source project, giving you the flexibility and support you
                need to get your project started.
            </p>
            <div
                class="mx-auto mt-2 flex w-full flex-col items-center justify-center gap-2 md:flex-row"
            >
                <GithubStats class="h-10 !w-full md:!w-fit" />
                <DiscordLink class="h-10 !w-full md:!w-fit" />
            </div>
        </div>

        <div class="mx-auto grid place-items-center gap-8 md:grid-cols-3">
            {#each items as item}
                <div class="max-w-[275px] text-center">
                    <img src={item.icon} alt={item.title} class="mx-auto" />
                    <h3 class="text-sub-body text-primary mt-4 font-medium">{item.title}</h3>
                    <p class="text-sub-body text-secondary mt-2 font-normal">{item.copy}</p>
                </div>
            {/each}
        </div>
    </div>
</section>
