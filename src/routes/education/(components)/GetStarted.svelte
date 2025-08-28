<script lang="ts">
    import { Button, Icon, type IconType } from '$lib/components/ui';
    import Badge from '$lib/components/ui/badge.svelte';
    import { cn } from '$lib/utils/cn';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';

    const educationSignUp = getAppwriteDashboardUrl('/console/education');

    const items: Array<{
        label: string;
        description: string;
        cta: {
            url: string;
            label: string;
            icon?: IconType;
        };
    }> = [
        {
            label: 'Enroll to the GitHub Student Developer Pack',
            description: 'Sign up for the Student Developer pack and explore the benefits.',
            cta: {
                url: 'https://github.com/education',
                label: 'Enroll on GitHub Education',
                icon: 'github'
            }
        },
        {
            label: 'Access the Education plan',
            description:
                'Create your Appwrite account through the Education program sign up page. Once verified, the Education plan will be applied to your account.',
            cta: { url: educationSignUp, label: 'Sign up' }
        },
        {
            label: 'Start from our docs',
            description:
                'Once your Appwrite account is created, go to our Docs and get started with Appwrite Cloud.',
            cta: { url: 'https://appwrite.io/docs', label: 'Go to Appwrite Docs' }
        }
    ];
</script>

<div
    class={cn(
        'light border-smooth relative mt-10 min-h-80 border-t',
        'before:absolute before:top-0 before:left-0 before:z-0 before:block before:h-80 before:w-full before:bg-[radial-gradient(at_25%_0%,_hsla(343,_98%,_60%,_0.4)_0px,_transparent_73%,_transparent_100%)] md:before:w-1/2',
        'after:absolute after:top-0 after:right-0 after:z-0 after:hidden after:h-80 after:w-1/2 after:bg-[radial-gradient(at_100%_0%,_hsla(177,_53%,_69%,_0.6)_0px,_transparent_73%,_transparent_100%)] after:md:block md:after:block'
    )}
>
    <div class="relative z-10 container flex flex-col justify-center py-24">
        <h2 class="text-primary font-aeonik-pro text-subtitle">Get started today</h2>

        <div
            class="divide-smooth mt-12 grid gap-8 divide-y rounded-2xl bg-white px-5 py-10 shadow-[-6px_8px_24px_rgba(0,_0,_0,_0.06),_0px_0px_0px_rgba(0,_0,_0,_0.06)] lg:grid-cols-3 lg:divide-x lg:divide-y-0"
        >
            {#each items as item, i}
                <div
                    class="group relative flex h-full flex-col gap-6 px-4 pb-8 last-of-type:pb-0 lg:pb-0"
                >
                    <Badge>Step {i + 1}</Badge>
                    <div class={cn('flex flex-1 flex-col gap-2 font-medium')}>
                        <h3 class="text-primary text-pretty">{item.label}</h3>
                        <p class="text-secondary text-pretty">{item.description}</p>
                    </div>
                    <Button
                        variant="secondary"
                        class="text-accent mt-auto mb-0 !w-full md:!w-fit"
                        href={item.cta.url}
                        target="_blank"
                    >
                        {#if item.cta.icon}
                            <Icon name={item.cta.icon} />
                        {/if}
                        {item.cta.label}</Button
                    >
                </div>
            {/each}
        </div>
    </div>
</div>
