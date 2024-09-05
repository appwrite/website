<script>
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import Button from '$lib/components/ui/Button.svelte';
    import { classNames } from '$lib/utils/classnames';
</script>

<div
    class={classNames(
        'min-h-[600px] pt-20 border-y border-greyscale-200/[0.04] -mb-24 relative flex items-center justify-center',
        'before:h-full before:absolute before:block before:inset-0 before:top-0 before:z-0 before:left-0 before:bg-[radial-gradient(circle_at_-15%_-10%,_hsla(343,_98%,_60%,_0.2)_0px,_transparent_40%)]',
        'after:h-full after:absolute after:block after:inset-0 after:top-0 after:z-0 after:right-0 after:mt-auto after:mb-0 after:bg-[radial-gradient(circle_at_120%_125%,_hsla(177,_53%,_69%,_0.2)_0px,_transparent_40%)]'
    )}
>
    <div class="container">
        <div class="max-w-3xl text-center flex flex-col gap-8 items-center justify-center">
            <h2 class="text-4xl md:text-6xl text-primary font-aeonik-pro">
                Start building like a team of hundreds with Appwrite
            </h2>
            <p class="text-xl">
                Develop your developer skills with Appwrite Pro, join a vibrant community of
                open-source contributors, and start building with a vast array of frameworks.
            </p>
            <Button href={PUBLIC_APPWRITE_DASHBOARD} class="mt-4 w-full md:w-fit">Sign up</Button>
        </div>
    </div>
</div>
