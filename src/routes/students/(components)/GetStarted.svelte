<script lang="ts">
    import Badge from '$lib/components/ui/Badge.svelte';
    import Button from '$lib/components/ui/Button.svelte';
    import { classNames } from '$lib/utils/classnames';

    const items = [
        {
            label: 'Enroll to the GitHub Student Developer Pack',
            description: 'Sign up for the Student Developer pack and explore the benefits.',
            cta: { url: 'https://github.com', label: 'Click now' }
        },
        {
            label: 'Redeem your $250 credits',
            description:
                'Create your Appwrite account and add a valid payment method. Once verified, your $250 credit will be applied.',
            cta: { url: 'https://github.com', label: 'Click now' }
        },
        {
            label: 'Start from our docs',
            description:
                'Once your Appwrite account is created, go to our Docs and get started with Appwrite Cloud.',
            cta: { url: 'https://github.com', label: 'Click now' }
        }
    ];
</script>

<div
    class={classNames(
        'light relative mt-10 min-h-80',
        'before:absolute before:top-0 before:left-0 before:z-0 before:block before:h-80 before:w-full before:bg-[radial-gradient(at_25%_0%,_hsla(343,_98%,_60%,_0.4)_0px,_transparent_75%)] md:before:w-1/2',
        'after:absolute after:top-0 after:right-0 after:z-0 after:block after:hidden after:h-80 after:w-1/2 after:bg-[radial-gradient(at_100%_0%,_hsla(177,_53%,_69%,_0.6)_0px,_transparent_75%)] md:after:block'
    )}
>
    <div class="container relative z-10 flex flex-col justify-center py-24">
        <h2 class="text-primary font-aeonik-pro text-4xl">Get started today</h2>

        <div
            class="mt-12 grid place-items-center gap-16 rounded-2xl bg-white p-4 shadow shadow-black/20 md:grid-cols-3"
        >
            {#each items as item, i}
                <div class="group relative flex flex-col gap-6 py-4 px-6">
                    <Badge>Step {i + 1}</Badge>
                    <div class={classNames('flex flex-col gap-2 font-medium')}>
                        <h3 class="text-primary text-pretty">{item.label}</h3>
                        <p class="text-secondary text-pretty">{item.description}</p>
                    </div>
                    <a class="web-button is-secondary text-accent mt-auto mb-0" href={item.cta.url}
                        >{item.cta.label}</a
                    >
                </div>
            {/each}
        </div>
    </div>
</div>
