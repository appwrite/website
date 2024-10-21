<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';

    import TeamsConsole from '../(assets)/teams-console.png';
    import PermissionsConsole from '../(assets)/permissions-console.png';

    const consoles: Array<{ title: string; copy: string; image: string }> = [
        {
            title: 'Teams management',
            copy: 'Organize users into multi-tenant teams to enable collective access to resources.',
            image: TeamsConsole
        },
        {
            title: 'Full control over permissions',
            copy: 'Define the level of access and control users or teams have over resources according to their roles.',
            image: PermissionsConsole
        }
    ];
</script>

<section class="light bg-greyscale-50 py-4 md:py-20">
    <div class="container">
        <div
            class="mx-auto mb-20 flex max-w-md flex-col items-center justify-center gap-y-6 text-center"
        >
            <span class="web-badges web-eyebrow text-micro font-aeonik-fono uppercase !text-white"
                >Access_</span
            >
            <h2 class="text-title text-primary font-aeonik-pro">
                Easily manage teams and permissions
            </h2>
            <p class="text-body text-secondary font-medium">
                Create custom roles and level of access to resources such as projects, files, etc.
            </p>
            <a href={PUBLIC_APPWRITE_DASHBOARD} class="web-button is-secondary mt-2">Learn more</a>
        </div>
    </div>

    <div class="container grid gap-8 overflow-x-hidden pr-0 pl-5 md:grid-cols-2 md:px-5">
        {#each consoles as console}
            <div>
                <div class="space-y-2 pr-5 md:pr-0">
                    <h3 class="text-primary font-medium">{console.title}</h3>
                    <p class="text-secondary max-w-[26rem]">{console.copy}</p>
                </div>

                <div
                    class="mt-8 w-[150%] rounded-3xl bg-gradient-to-br from-black/6 via-black/4 via-[61%] to-black/6 p-3 md:w-full"
                >
                    <img class="rounded-xl" src={console.image} alt="{console.title} image" />
                </div>
            </div>
        {/each}
    </div>
</section>
