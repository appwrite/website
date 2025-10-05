<script>
    import { Button } from '$lib/components/ui';
    import { cn } from '$lib/utils/cn';
</script>

<div
    class={cn(
        'border-greyscale-200/4 relative -mb-24 flex min-h-[600px] items-center justify-center border-y',
        'before:absolute before:inset-0 before:top-0 before:left-0 before:-z-10 before:block before:h-full before:bg-[radial-gradient(circle_at_-15%_-10%,_hsla(343,_98%,_60%,_0.2)_0px,_transparent_40%)]',
        'after:absolute after:inset-0 after:top-0 after:right-0 after:-z-10 after:mt-auto after:mb-0 after:block after:h-full after:bg-[radial-gradient(circle_at_120%_125%,_hsla(177,_53%,_69%,_0.2)_0px,_transparent_40%)]'
    )}
>
    <div class="container">
        <div class="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 text-center">
            <h2 class="font-aeonik-pro text-title text-white">
                Become a startup partner<span class="text-accent">_</span>
            </h2>
            <p class="text-description text-secondary">
                Appwrite partners with venture capital firms and startup <br /> accelerators to
                provide exclusive discounts and other benefits <br /> to their portfolio companies.
            </p>
            <Button href="mailto:sales@appwrite.io" class="mt-4 !w-full md:!w-fit">
                Apply now
            </Button>
        </div>
    </div>
</div>
