<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import { ToggleGroup } from 'bits-ui';
    import type { CaseStudy } from './case-studies-light.svelte';
    import { Icon } from '$lib/components/ui';

    interface CaseStudyCardProps {
        value: string;
        study: CaseStudy;
        isActive?: boolean;
    }

    const { study, value, isActive }: CaseStudyCardProps = $props();
</script>

<ToggleGroup.Item
    {value}
    class={cn(
        'relative grid w-full cursor-pointer overflow-hidden rounded-2xl border transition-all ease-in-out [grid-template-areas:"stack"] md:max-h-[467px]',
        'group/card hover:bg-white/80',
        'outline-0 duration-250 hover:shadow-[0px_0px_0px_4px_rgba(0,0,0,0.08)] focus:shadow-[0px_0px_0px_4px_rgba(0,0,0,0.08)]!',
        'data-[state="off"]:basis-[15%] data-[state="off"]:border-black/8 data-[state="off"]:bg-white data-[state="off"]:p-4 sm:data-[state="off"]:p-6 md:data-[state="off"]:p-8',
        'data-[state="on"]:basis-[70%] data-[state="on"]:border-black/12 data-[state="on"]:bg-white data-[state="on"]:p-4 data-[state="on"]:shadow-[0px_0px_0px_4px_rgba(0,0,0,0.08)]! sm:data-[state="on"]:p-6 md:data-[state="on"]:p-8 lg:data-[state="on"]:p-12'
    )}
>
    <img
        loading="lazy"
        src={study.logo}
        alt={study.headline}
        width={100}
        height={100}
        class={cn(
            'h-4 shrink-0 opacity-100 transition-all [grid-area:stack] sm:h-5 lg:h-12',
            'self-center justify-self-center group-[&[data-state=on]]/card:invisible group-[&[data-state=on]]/card:opacity-0'
        )}
    />

    <div
        class={cn(
            'relative hidden w-full space-y-4 overflow-hidden p-4 text-left transition-opacity delay-400 [grid-area:stack] sm:space-y-5 sm:p-5 md:space-y-6 md:p-6',
            'group-[&[data-state=on]]/card:block group-[&[data-state=on]]/card:opacity-100 group-[&[data-state=on]]/card:blur-none'
        )}
    >
        <!-- Logo at top -->
        <img
            loading="lazy"
            width={80}
            height={80}
            src={study.logo}
            alt={study.headline}
            class={cn('h-6 w-auto sm:h-7 md:h-8', {
                'animate-fade-in': isActive
            })}
        />

        <!-- Main headline -->
        <span
            class={cn(
                'font-aeonik-pro block text-left text-lg leading-tight text-black sm:text-xl md:text-2xl',
                {
                    'animate-fade-in': isActive
                }
            )}
        >
            {study.headline}
        </span>

        <!-- Testimonial quote -->
        <div class="text-left text-sm leading-relaxed font-bold text-black sm:text-base">
            "{study.blurb}"
        </div>

        <!-- Bottom section with author and link -->
        <div class="flex items-start gap-2">
            <img
                loading="lazy"
                src={study.avatar}
                alt={study.headline}
                class="size-6 flex-shrink-0 rounded-full sm:size-7 md:size-8"
            />
            <div class="flex min-w-0 flex-1 flex-col gap-0.5 pr-2 text-left">
                <span class="text-xs font-medium text-black sm:text-sm">{study.name},</span>
                <span class="text-xs font-normal break-words text-gray-800 sm:text-sm"
                    >{study.title}</span
                >
            </div>
            <a
                href={study.url}
                class="group flex flex-shrink-0 items-center gap-1 text-left text-xs whitespace-nowrap text-black hover:underline sm:text-sm"
                >Read customer story <Icon
                    name="arrow-right"
                    class="flex-shrink-0 transition-transform group-hover:translate-x-0.5"
                ></Icon></a
            >
        </div>
    </div>
</ToggleGroup.Item>
