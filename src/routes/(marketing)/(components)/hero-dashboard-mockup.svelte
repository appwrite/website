<script lang="ts">
    import { cn } from '$lib/utils/cn';

    const MOCKUP_SRC = '/assets/visuals/dashboard-screenshot.avif';
    const MOCKUP_WIDTH = 1280;
    const MOCKUP_HEIGHT = 483;
    const MOCKUP_ALT =
        'Appwrite Cloud console overview with project metrics for bandwidth and requests';

    type Placement = 'aside' | 'below';

    const {
        placement = 'aside',
        fetchpriority = 'high'
    }: {
        placement?: Placement;
        fetchpriority?: 'high' | 'low' | 'auto' | undefined;
    } = $props();
</script>

<div
    class={cn(
        placement === 'aside' &&
            'bg-smooth -mb-108 max-w-[150vw] translate-x-8 -translate-y-32 scale-70 overflow-hidden rounded-t-2xl border-x border-t border-white/10 mask-b-from-0% mask-b-to-70% px-2 pt-2 backdrop-blur-2xl md:mt-12 md:mb-0 md:ml-24 md:translate-x-1/4 md:translate-y-0 md:scale-100 md:mask-b-to-100% lg:ml-12',
        placement === 'below' &&
            'bg-smooth mx-auto -mb-8 max-h-[min(60vw,320px)] w-full max-w-[min(1185px,calc(100vw-1rem))] scale-[0.88] overflow-hidden rounded-t-2xl border-x border-t border-white/10 mask-b-from-[44%] mask-b-to-[100%] px-2 pt-2 backdrop-blur-2xl sm:max-h-[min(56vw,360px)] sm:scale-95 md:mb-0 md:max-h-[min(50vw,400px)] md:scale-100 md:mask-b-from-[50%] lg:max-h-[min(48vw,440px)]'
    )}
>
    <div class="bg-greyscale-900 h-full overflow-hidden rounded-t-xl">
        <img
            src={MOCKUP_SRC}
            alt={MOCKUP_ALT}
            width={MOCKUP_WIDTH}
            height={MOCKUP_HEIGHT}
            class="block h-auto w-full"
            {fetchpriority}
        />
    </div>
</div>
