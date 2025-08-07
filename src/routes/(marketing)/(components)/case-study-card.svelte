<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { ToggleGroup } from 'bits-ui';
    import type { CaseStudy } from './case-studies.svelte';
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
    class={classNames(
        'relative grid w-full cursor-pointer overflow-hidden rounded-2xl border border-transparent p-12 backdrop-blur-3xl transition-all ease-in-out [grid-template-areas:"stack"] md:max-h-[467px]',
        'group/card hover:bg-black/24',
        'outline-0 duration-250 hover:shadow-[0px_0px_0px_4px_var(--color-offset)] focus:shadow-[0px_0px_0px_4px_var(--color-offset)]!',
        'data-[state="off"]:basis-[15%] data-[state="off"]:bg-black/16',
        'data-[state="on"]:basis-[70%] data-[state="on"]:bg-black/24'
    )}
>
    <img
        loading="lazy"
        src={study.logo}
        alt={study.headline}
        width={100}
        height={100}
        class={classNames(
            'h-5 shrink-0 px-2 opacity-100 transition-all [grid-area:stack] lg:h-12',
            'self-center justify-self-center brightness-50 group-[&[data-state=on]]/card:invisible group-[&[data-state=on]]/card:opacity-0'
        )}
    />

    <div
        class={classNames(
            'relative hidden w-full space-y-4 overflow-hidden transition-opacity delay-400 [grid-area:stack]',
            'group-[&[data-state=on]]/card:block group-[&[data-state=on]]/card:opacity-100 group-[&[data-state=on]]/card:blur-none'
        )}
    >
        <img
            loading="lazy"
            width={80}
            height={80}
            src={study.logo}
            alt={study.headline}
            class={classNames('-mt-8 h-20 w-20', {
                'animate-fade-in': isActive
            })}
        />

        <span
            class={classNames(
                'text-title font-aeonik-pro text-primary flex h-fit flex-wrap gap-2 overflow-hidden text-left text-pretty md:h-[3lh] lg:w-[20ch]',
                {
                    'animate-fade-in': isActive
                }
            )}
        >
            {study.headline}
        </span>

        <div
            class={classNames('border-smooth mt-8 border-t border-dashed pt-8', {
                'animate-fade-in [animation-delay:500ms]': isActive
            })}
        >
            <div class="text-primary text-sub-body text-left font-medium md:max-w-[60%]">
                "{study.blurb}"
            </div>

            <div class="mt-4 flex flex-col justify-between gap-4 lg:flex-row">
                <div class="flex items-center gap-2">
                    <img
                        loading="lazy"
                        src={study.avatar}
                        alt={study.headline}
                        class="size-8 rounded-full md:size-6"
                    />
                    <span class="text-caption text-primary text-left font-medium text-pretty"
                        >{study.name}<span class="hidden md:inline">,</span>
                        <span class="text-secondary block md:inline">{study.title}</span></span
                    >
                </div>

                <a
                    href={study.url}
                    class="text-primary text-sub-body group mt-4 flex items-center gap-2 text-right md:mt-0"
                    >Read customer story <Icon
                        name="arrow-right"
                        class="transition-transform group-hover:translate-x-0.5"
                    ></Icon></a
                >
            </div>
        </div>
    </div>
</ToggleGroup.Item>
