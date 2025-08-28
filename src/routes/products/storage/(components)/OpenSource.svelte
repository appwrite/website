<script lang="ts">
    import { Button } from '$lib/components/ui';
    import { cn } from '$lib/utils/cn';

    const items = [
        {
            title: 'Join the community',
            content: 'Get on the go support from a very active and welcoming community.',
            icon: '/images/icons/gradients/community.svg'
        },
        {
            title: 'Self-host or go Cloud',
            content: 'Build the way you want. Pick between self hosting or cloud.',
            icon: '/images/icons/gradients/self-hosted.svg'
        },
        {
            title: 'No vendor lock-in',
            content: 'You own your data and can easily move to and from Appwrite.',
            icon: '/images/icons/gradients/lock.svg'
        }
    ];
</script>

<div class="light py-12 md:py-20">
    <div class="container">
        <div class="web-hero is-center mx-auto">
            <h2 class="web-display web-u-color-text-primary">Powered by open source</h2>
            <p class="web-main-body-500 web-u-margin-block-start-0 web-u-max-width-580 mx-auto">
                Appwrite is a 100% open source project, giving you the flexibility and support you
                need to get your project started.
            </p>
            <Button
                variant="secondary"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                class="mx-auto mt-4 !w-full md:!w-fit"
            >
                <span>Join the community</span>
            </Button>
        </div>
    </div>
</div>
<div class="light !pt-0 pb-20 md:pb-40">
    <div class="web-u-max-width-993 container">
        <div class="overflow-hidden">
            <div
                class="text-sub-body grid place-items-center gap-8 divide-black/4 font-medium md:grid-cols-3 md:divide-x"
            >
                {#each items as { title, content, icon }}
                    <div
                        class={cn(
                            'relative flex flex-col items-center justify-center px-11 text-center md:-mr-8 md:max-w-[290px] md:px-0 md:pr-8'
                        )}
                    >
                        <img src={icon} width="40" height="40" alt="" />
                        <h3 class="text-sub-body text-primary mt-4 mb-1 font-medium">
                            {title}
                        </h3>
                        <p class="text-sub-body">{content}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
