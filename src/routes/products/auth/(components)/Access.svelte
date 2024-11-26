<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';

    import TeamsConsole from '../(assets)/teams-console.png';
    import PermissionsConsole from '../(assets)/permissions-console.png';
    import { cn } from '$lib/utils/classnames';

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

<section class="light bg-greyscale-50 pt-32 pb-40">
    <div class="container">
        <div
            class="mx-auto mb-20 flex max-w-md flex-col items-center justify-center gap-y-4 text-center"
        >
            <span class="web-badges web-eyebrow text-micro font-aeonik-fono uppercase !text-white"
                >Access_</span
            >
            <h2 class="text-title text-primary font-aeonik-pro">
                Easily manage teams <br /> and permissions
            </h2>
            <p class="text-body text-secondary font-medium">
                Create custom roles and level of access to resources such as projects, files, etc.
            </p>
            <a
                href="/docs/advanced/platform/permissions"
                class="web-button is-secondary mt-2 !w-full md:!w-fit">Learn more</a
            >
        </div>
    </div>

    <div
        class="container grid place-items-center gap-12 overflow-x-hidden pr-0 pl-5 md:grid-cols-2 md:px-5"
    >
        {#each consoles as console}
            <div
                class={cn(
                    'relative',
                    'first-of-type:after:absolute first-of-type:after:top-0 first-of-type:after:-right-6 first-of-type:after:bottom-0 first-of-type:after:ml-8 first-of-type:after:w-px first-of-type:after:bg-[#19191C]/4'
                )}
            >
                <div class="space-y-1 pr-5 md:pr-0">
                    <h3 class="text-primary text-body font-medium">{console.title}</h3>
                    <p class="text-secondary text-body max-w-[30rem] font-medium">{console.copy}</p>
                </div>

                <div
                    class="mt-8 w-[150%] rounded-3xl border border-black/8 bg-gradient-to-br from-black/6 via-black/4 via-[61%] to-black/6 p-2 md:w-full"
                >
                    <img class="rounded-2xl" src={console.image} alt="{console.title} image" />
                </div>
            </div>
        {/each}
    </div>
</section>
