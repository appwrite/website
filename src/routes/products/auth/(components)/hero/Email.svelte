<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    const emails = [
        {
            title: 'Thank you for registering.',
            copy: 'Before we get started, confirm your identity be clicking the link belo...'
        },
        {
            title: 'Your have been invited',
            copy: 'Create a user in Acme corp. You can accept or decline this invitation...'
        }
    ];
</script>

<div
    class="flex max-w-xs flex-col gap-4 rounded-2xl border border-white/[0.02] bg-gradient-to-br from-white/[0.016] to-white/[0.005]"
>
    <div class="flex flex-col gap-1 divide-y divide-white/5">
        {#each emails as email, i}
            <div class="text-micro py-6 px-4 -tracking-tight">
                <span class="text-primary font-medium">{email.title} </span>
                <span class="text-secondary font-normal">{email.copy}</span>
            </div>{/each}
    </div>
</div>
