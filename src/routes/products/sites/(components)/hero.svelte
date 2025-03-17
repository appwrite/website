<script>
    import Frameworks from '$lib/components/marketing/frameworks.svelte';
    import { classNames } from '$lib/utils/classnames';

    import Illustration from '../(assets)/images/illustration.png';
</script>

<div
    class={classNames(
        'relative flex flex-col items-center',
        'before:absolute before:inset-0 before:top-0 before:left-0 before:-z-10 before:block before:h-full before:bg-[radial-gradient(circle_at_-15%_-10%,_hsla(343,_98%,_60%,_0.2)_0px,_transparent_40%)]',
        'after:absolute after:inset-0 after:top-0 after:right-0 after:-z-10 after:mt-auto after:mb-0 after:block after:h-full after:bg-[radial-gradient(circle_at_120%_125%,_hsla(248,_99%,_70%,_0.2)_0px,_transparent_40%)]'
    )}
>
    <div class="container mx-auto grid grid-cols-1 place-items-center gap-16 py-20 md:grid-cols-2">
        <div class="flex max-w-lg flex-col gap-8">
            <div class="flex items-center gap-2">
                <img
                    src="/images/icons/illustrated/dark/sites.png"
                    class="size-8"
                    alt="Sites icon"
                />
                <span class="font-aeonik-fono tracking-loose text-micro text-primary uppercase">
                    Sites<span class="web-u-color-text-accent">_</span>
                </span>
            </div>
            <h1 class="font-aeonik-pro text-display text-primary text-pretty">
                Your frontend and backend together, finally
            </h1>
            <p class="text-description text-secondary text-pretty font-medium">
                Host, manage, and scale your frontend directly from Appwrite, alongside your
                backend.
            </p>

            <div class="flex flex-col items-center gap-2 md:flex-row">
                <a href="#become-a-partner" class="web-button is-secondary !w-full md:!w-fit"
                    >Become a Partner</a
                >
            </div>
        </div>
        <img src={Illustration} alt="Illustration" class="w-full" />
    </div>
    <Frameworks class="mt-auto mb-0 w-full" headline="Host your favorite web frameworks" />
</div>
