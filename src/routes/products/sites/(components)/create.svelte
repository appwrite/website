<script lang="ts">
    import { write } from '$lib/animations';
    import { inView } from 'motion';
    import Dashboard from '../(assets)/dashboards/create-dashboard.svg';

    let eyebrow = $state('');
    let container: HTMLElement;

    const writeEyebrow = async () => {
        await write('Create', (v) => (eyebrow = v), 500);
    };

    $effect(() => {
        inView(container, () => {
            writeEyebrow();
        });
    });
</script>

<div class="flex h-fit flex-1 gap-3" bind:this={container}>
    <div class="sticky inset-y-0 top-0 left-0 flex h-full justify-center bg-transparent">
        <div
            class="border-gradient absolute z-10 flex size-4 items-center justify-center rounded-full bg-gradient-to-tl from-transparent to-white/32"
        >
            <div class="size-1 rounded-full bg-white"></div>
        </div>
    </div>
    <div class="flex w-full flex-col gap-8 md:px-8">
        <span class="text-primary text-micro font-aeonik-fono uppercase"
            >{eyebrow}<span class="text-accent">_</span></span
        >

        <div
            class="border-smooth flex aspect-video w-full flex-col rounded-t-3xl border bg-gradient-to-br from-white/10 via-white/5 to-white/10 mask-b-from-0% px-2 pt-2 backdrop-blur-xl"
        >
            <img
                src={Dashboard}
                alt="Create a site dashboard"
                class="h-full w-full rounded-t-2xl"
            />
        </div>

        <div class="relative z-10 mx-auto -mt-24 flex max-w-md flex-col gap-4 text-center">
            <h2 class="text-title text-primary font-aeonik-pro">
                Clone a template or import a repository
            </h2>
            <p class="text-secondary text-description font-medium">
                See a preview of your crafted messages on the Console before sending them.
            </p>
        </div>
    </div>
</div>
