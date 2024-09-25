<script lang="ts">
    import { GITHUB_REPO_LINK, GITHUB_STARS } from '$lib/constants';
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
</script>

<section class="light bg-greyscale-50 py-20">
    <div class="container overflow-x-hidden">
        <div class="mx-auto mb-20 flex max-w-xl flex-col items-center gap-y-6 text-center">
            <h2 class="text-display text-primary font-aeonik-pro">
                Open source alternative to
                <span
                    class="inline-block bg-[linear-gradient(-146deg,_#FD376F,_#19191D_47%,_#19191D)] bg-clip-text text-transparent"
                >
                    Auth0
                </span>
            </h2>
            <p class="text-body text-secondary font-medium">
                Appwrite is a 100% open source project, giving you the <br />flexibility and support
                you need to get your project started.
            </p>
            <div class="flex items-center gap-2">
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
