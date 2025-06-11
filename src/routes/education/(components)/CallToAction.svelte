<script>
    import { Button } from '$lib/components/ui';
    import { classNames } from '$lib/utils/classnames';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';

    const educationSignUp = getAppwriteDashboardUrl('/console/education');
</script>

<div
    class={classNames(
        'border-greyscale-200/4 relative -mb-24 flex min-h-[600px] items-center justify-center border-y',
        'before:absolute before:inset-0 before:top-0 before:left-0 before:-z-10 before:block before:h-full before:bg-[radial-gradient(circle_at_-15%_-10%,_hsla(343,_98%,_60%,_0.2)_0px,_transparent_40%)]',
        'after:absolute after:inset-0 after:top-0 after:right-0 after:-z-10 after:mt-auto after:mb-0 after:block after:h-full after:bg-[radial-gradient(circle_at_120%_125%,_hsla(177,_53%,_69%,_0.2)_0px,_transparent_40%)]'
    )}
>
    <div class="container">
        <div class="flex max-w-3xl flex-col items-center justify-center gap-4 text-center mx-auto">
            <h2 class="text-primary font-aeonik-pro text-4xl md:text-6xl">
                Start building like a team of hundreds with Appwrite
            </h2>
            <p class="text-xl">
                Develop your developer skills with Appwrite Pro, join a vibrant community of
                open-source contributors, and start building with a vast array of frameworks.
            </p>
            <Button href={educationSignUp} class="mt-4 !w-full md:!w-fit">Sign up</Button>
        </div>
    </div>
</div>
