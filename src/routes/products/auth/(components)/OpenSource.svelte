<script lang="ts">
    import { sleep, unwrite, write } from '$lib/animations';
    import { GITHUB_REPO_LINK, GITHUB_STARS } from '$lib/constants';
    import { onMount } from 'svelte';
    import collaboration from '../(assets)/collaboration.svg';
    import customization from '../(assets)/customization.svg';
    import transparency from '../(assets)/transparency.svg';

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
            await sleep(3000);
            await unwrite(platforms[activeIndex], (v) => (activePlatform = v), 500);
            activeIndex = (activeIndex + 1) % platforms.length;
            await sleep(3000);
        }
    };

    onMount(() => {
        rotatePlatforms();
    });
</script>

<section class="light bg-greyscale-50 py-4 md:py-20">
    <div class="container overflow-x-hidden">
        <div class="mx-auto mb-20 flex max-w-2xl flex-col items-center gap-y-4 text-center">
            <h2 class="text-display text-primary font-aeonik-pro">
                Open source <br />alternative to

                <div
                    class="relative inline-flex items-center justify-center bg-[linear-gradient(-146deg,_#FD376F,_#19191D_47%,_#19191D)] bg-clip-text text-transparent"
                >
                    {activePlatform}{' '}
                    <div
                        class="animate-caret-blink absolute top-1/2 -right-2 bottom-0 block h-[75%] w-px -translate-y-1/2 bg-[linear-gradient(-146deg,_#FD376F,_#19191D_47%,_#19191D)]"
                    />
                </div>
            </h2>
            <p class="text-description text-secondary font-medium">
                Appwrite is a 100% open source project, giving you the <br />flexibility and support
                you need to get your project started.
            </p>
            <div class="mt-2 flex items-center gap-2">
                <a
                    href={GITHUB_REPO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="web-button is-secondary web-u-inline-width-100-percent-mobile h-10"
                >
                    <span class="web-icon-star" aria-hidden="true" />
                    <span class="text">Star on GitHub</span>
                    <span class="web-inline-tag text-sub-body">{GITHUB_STARS}</span>
                </a>
                <a class="web-button is-secondary" href="https://appwrite.io/discord">
                    <span class="web-icon-discord" />
                    <span class="text">Join Discord</span>
                </a>
            </div>
        </div>

        <div class="mx-auto grid place-items-center gap-8 md:grid-cols-3">
            {#each items as item}
                <div class="max-w-[275px] text-center">
                    <img src={item.icon} alt={item.title} class="mx-auto" />
                    <h3 class="text-sub-body text-primary mt-8 font-medium">{item.title}</h3>
                    <p class="text-sub-body text-secondary mt-4 font-normal">{item.copy}</p>
                </div>
            {/each}
        </div>
    </div>
</section>
