<script lang="ts">
    import Closed from '../../(assets)/envelope-closed.svg';
    import Open from '../../(assets)/envelope-open.svg';

    const emails = [
        {
            title: 'Thank you for registering.',
            copy: 'Before we get started, confirm your identity by clicking the link below...',
            open: false
        },
        {
            title: 'You have been invited',
            copy: 'Create a user in Acme corp. You can accept or decline this invitation...',
            open: true
        }
    ];
</script>

<div
    class="absolute z-10 flex max-w-sm scale-95 flex-col gap-4 rounded-lg border border-white/[0.02] bg-gradient-to-br from-white/[0.02] to-white/[0.005] backdrop-blur-2xl max-md:-right-32 max-md:bottom-20 max-sm:-right-48 md:top-16 md:right-0 md:scale-100 md:rounded-2xl"
>
    <div class="flex flex-col gap-1 divide-y divide-white/5">
        {#each emails as email}
            <div class="flex items-center gap-3 p-4">
                {#if email.open}
                    <div
                        class="border-greyscale-600 flex size-6 shrink-0 items-center justify-center rounded-[6px] border"
                    >
                        <img src={Open} class="size-4" alt="Open envelope" />
                    </div>
                {:else}
                    <div
                        class="border-accent flex size-6 shrink-0 items-center justify-center rounded-[6px] border"
                    >
                        <img src={Closed} class="size-4" alt="Closed envelope" />
                    </div>
                {/if}
                <div class="text-micro -tracking-tight">
                    <span class="text-primary font-medium">{email.title} </span>
                    <span class="text-secondary font-normal">{email.copy}</span>
                </div>
            </div>
        {/each}
    </div>
</div>
