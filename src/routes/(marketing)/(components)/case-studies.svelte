<script lang="ts">
    import { Icon } from '$lib/components/ui';
    import { classNames } from '$lib/utils/classnames';
    import { animate, stagger } from 'motion';
    import { ToggleGroup } from 'bits-ui';
    import DevKind from '../(assets)/logos/devkind.svg';
    import LangX from '../(assets)/logos/langx.svg';
    import KCollect from '../(assets)/logos/k-collect.svg';

    const studies = [
        {
            logo: DevKind,
            headline: 'DevKind reduced development time by 60% and lowered server costs by 40%',
            blurb: 'A special thanks to Appwrite for providing robust features and seamless functionality.',
            name: 'Hassan Ahmed',
            title: 'Engineer at DevKind',
            avatar: '/images/testimonials/hassan.png',
            url: '/blog/post/customer-stories-storealert'
        },
        {
            logo: LangX,
            headline: 'LangX handled millions of requests using Appwrite',
            blurb: 'With its comprehensive suite of services Appwrite emerged as an ideal choice for my needs.',
            name: 'Xue',
            title: 'Founder at LangX',
            avatar: '/images/testimonials/xue.webp',
            url: '/blog/post/customer-stories-langx'
        },
        {
            logo: KCollect,
            headline: 'K-collect reduced infrastructure costs by 700%',
            blurb: 'A major impact that Appwrite made was the amount of time and stress saved.',
            name: "Ryan O'connor",
            title: 'Founder at K-collect',
            avatar: '/images/testimonials/ryan.png',
            url: '/blog/post/customer-stories-kcollect'
        }
    ];

    let value = $state<string>('0');

    const getValue = () => {
        return value;
    };

    const setValue = (newValue: string) => {
        if (!newValue.length) return;
        value = newValue;
    };
</script>

<div
    class={classNames(
        'relative -mb-4 flex min-h-[60vh] items-center justify-center overflow-hidden pt-30 pb-40',
        'from-0% before:absolute before:inset-0 before:top-0 before:left-0 before:-z-10 before:block before:h-full before:bg-radial-[circle_at_120%_-50%] before:from-purple-500/30 before:to-transparent before:to-40% before:blur-2xl',
        'after:from-accent/20 after:absolute after:inset-0 after:top-0 after:right-0 after:-z-10 after:mt-auto after:mb-0 after:block after:h-full after:bg-radial-[circle_at_-15%_125%] after:from-0% after:to-transparent after:to-40% after:blur-2xl'
    )}
>
    <ToggleGroup.Root
        bind:value={getValue, setValue}
        type="single"
        class="container flex h-full flex-col items-center gap-4 md:flex-row"
    >
        {#each studies as study, i}
            <ToggleGroup.Item
                value={i.toString()}
                class={classNames(
                    'data-[state="on"]:border-smooth align-items-center grid cursor-pointer justify-items-center overflow-hidden rounded-2xl border border-transparent px-12 py-12 backdrop-blur-3xl transition-all duration-400 ease-in-out [grid-template-areas:"stack"] max-sm:data-[state="off"]:h-[125px] max-sm:data-[state="on"]:h-[425px] md:h-[425px] md:place-content-center md:place-items-center md:items-center md:justify-center',
                    'group/card hover:bg-black/24 data-[state="off"]:bg-black/16 data-[state="on"]:basis-full data-[state="on"]:bg-black/24 md:data-[state="off"]:basis-[15%] md:data-[state="on"]:basis-[70%]',
                    'outline-0 duration-300 hover:shadow-[0px_0px_0px_4px_var(--color-offset)] focus:shadow-[0px_0px_0px_4px_var(--color-offset)]!'
                )}
            >
                <img
                    src={study.logo}
                    alt={study.headline}
                    width={100}
                    height={100}
                    class={classNames(
                        'visible h-5 px-2 opacity-100 transition-all [grid-area:stack] lg:h-7',
                        'group-[&[data-state=on]]/card:invisible group-[&[data-state=on]]/card:opacity-0',
                        'brightness-50'
                    )}
                />

                <div
                    class={classNames(
                        'invisible space-y-4 opacity-0 blur-sm transition-opacity delay-400 [grid-area:stack]',
                        'group-[&[data-state=on]]/card:visible group-[&[data-state=on]]/card:opacity-100 group-[&[data-state=on]]/card:blur-none'
                    )}
                >
                    <img
                        width={100}
                        height={100}
                        src={study.logo}
                        alt={study.headline}
                        class="w-20"
                    />

                    <span
                        class="text-title font-aeonik-pro text-primary relative flex flex-wrap gap-2 text-left"
                        class:active={value === i.toString()}
                    >
                        {study.headline}
                    </span>

                    <div
                        class={classNames('border-smooth mt-8 border-t border-dashed pt-8', {
                            'animate-fade-in [animation-delay:500ms]': value === i.toString()
                        })}
                    >
                        <div
                            class="text-primary text-sub-body text-left font-medium md:max-w-[60%]"
                        >
                            "{study.blurb}"
                        </div>

                        <div class="mt-4 flex flex-col justify-between gap-4 lg:flex-row">
                            <div class="flex items-center gap-2">
                                <img
                                    src={study.avatar}
                                    alt={study.headline}
                                    class="size-8 rounded-full md:size-6"
                                />
                                <span
                                    class="text-caption text-primary text-left font-medium text-pretty"
                                    >{study.name}<span class="hidden md:inline">,</span>
                                    <span class="text-secondary block md:inline">{study.title}</span
                                    ></span
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
        {/each}
    </ToggleGroup.Root>
</div>
