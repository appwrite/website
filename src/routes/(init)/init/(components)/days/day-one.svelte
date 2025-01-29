<script lang="ts">
    import { format } from 'date-fns';
    import Globe from '../../(assets)/globe.svg';
    import Window from '../ui/window.svelte';
    import KeyIllustration from './key-illustration.svelte';
    import { classNames } from '$lib/utils/classnames';

    type $$Props = {
        release: Date;
        index: number;
    };

    export let release: $$Props['release'];
    export let index: $$Props['index'];
</script>

<div class="scroll-mt-10 space-y-4 pb-20" id="day-{index}">
    <Window>
        <div slot="title" class="text-micro flex items-center gap-1 text-white">
            Day {index} <span class="text-accent">/</span>
            {format(release, 'EEEE, MMM d')}
        </div>

        <div class="border-smooth overflow-hidden rounded-xl border">
            <KeyIllustration
                title="Sites"
                description="The new Appwrite CLI allows you to test your functions locally, easily migrate databases and more."
                url="/"
                illustration={Globe}
                {index}
                {release}
            />

            <div
                class={classNames(
                    'divide-offset mt-10 divide-y-2 divide-dashed',
                    'before:border-offset before:-mb-px before:block before:h-0.5 before:w-full before:border-t-2 before:border-dashed',
                    'after:border-offset after:-mt-px after:block after:h-0.5 after:w-full after:border-t-2 after:border-dashed'
                )}
            >
                {#each Array.from({ length: 3 }) as _}
                    <div>
                        <div
                            class={classNames(
                                'bg-smooth relative mx-8 -mb-0.5 flex items-center justify-between py-4 px-4',
                                'before:border-offset before:absolute before:inset-y-0 before:left-0 before:-mr-px before:block before:w-0.5 before:border-l-2 before:border-dashed',
                                'after:border-offset after:absolute after:inset-y-0 after:right-0 after:-ml-px after:block after:w-0.5 after:border-r-2 after:border-dashed'
                            )}
                        >
                            <div class="text-primary flex items-center gap-4">
                                <span class="bg-smooth rounded-[4px] py-0.5 px-2">Blog</span>
                                <span class="font-aeonik-pro text-label"
                                    >Serverless functions 101: best practices</span
                                >
                            </div>
                            <span>Read article <span class="web-icon-arrow-right" /></span>
                        </div>
                    </div>
                {/each}
            </div>

            <div class="flex h-32 items-center gap-4 px-8">Videos n shit</div>
        </div>
    </Window>
</div>
