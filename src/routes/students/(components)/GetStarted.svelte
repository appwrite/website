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
        'light min-h-80 relative mt-10',
        'before:h-80 before:absolute before:block before:w-full md:before:w-1/2 before:top-0 before:z-0 before:left-0 before:bg-[radial-gradient(at_25%_0%,_hsla(343,_98%,_60%,_0.4)_0px,_transparent_75%)]',
        'after:h-80 after:absolute after:block after:w-1/2 after:hidden md:after:block after:top-0 after:z-0 after:right-0 after:bg-[radial-gradient(at_100%_0%,_hsla(177,_53%,_69%,_0.6)_0px,_transparent_75%)]'
    )}
>
    <div class="container flex flex-col justify-center py-24 relative z-10">
        <h2 class="text-primary text-4xl font-aeonik-pro">Get started today</h2>

        <div
            class="bg-white mt-12 grid md:grid-cols-3 divide-x divide-greyscale-100/50 shadow shadow-black/20 rounded-2xl p-8"
        >
            {#each items as item, i}
                <div class="flex flex-col gap-6 px-8 py-4">
                    <Badge>Step {i + 1}</Badge>
                    <div class="flex flex-col gap-2 font-medium">
                        <h3 class="text-primary text-pretty">{item.label}</h3>
                        <p class="text-secondary text-pretty">{item.description}</p>
                    </div>
                    <Button variant="secondary" class="mb-0 mt-auto text-accent" href={item.cta.url}
                        >{item.cta.label}</Button
                    >
                </div>
            {/each}
        </div>
    </div>
</div>
