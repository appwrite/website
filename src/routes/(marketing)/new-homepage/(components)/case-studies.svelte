<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import ProductHunt from '../(assets)/logos/product-hunt.svg';
    import Avatar from '../(assets)/images/avatar.png';
    import { ToggleGroup } from 'bits-ui';

    import Icon from '$lib/components/ui/icon';

    const studies = [
        {
            logo: ProductHunt,
            headline:
                'Product Hunt has leveraged Appwrite to transform logistics and supply chain management for circular businesses',
            blurb: 'Been a huge supporter of Appwrite for over a year, championing it even at the companies I was working at.',
            name: 'Terry Lennon',
            title: 'Engineer at Product Hunt',
            avatar: Avatar,
            url: '/case-studies/product-hunt'
        },
        {
            logo: ProductHunt,
            headline:
                'Product Hunt has leveraged Appwrite to transform logistics and supply chain management for circular businesses',
            blurb: 'Been a huge supporter of Appwrite for over a year, championing it even at the companies I was working at.',
            name: 'Terry Lennon',
            title: 'Engineer at Product Hunt',
            avatar: Avatar,
            url: '/case-studies/product-hunt'
        },
        {
            logo: ProductHunt,
            headline:
                'Product Hunt has leveraged Appwrite to transform logistics and supply chain management for circular businesses',
            blurb: 'Been a huge supporter of Appwrite for over a year, championing it even at the companies I was working at.',
            name: 'Terry Lennon',
            title: 'Engineer at Product Hunt',
            avatar: Avatar,
            url: '/case-studies/product-hunt'
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
        'relative flex min-h-[60vh] items-center justify-center overflow-hidden',
        'from-0% before:absolute before:inset-0 before:top-0 before:left-0 before:-z-10 before:block before:h-full before:bg-radial-[circle_at_120%_-50%] before:from-purple-500/30 before:to-transparent before:to-40% before:blur-2xl',
        'after:from-accent/20 after:absolute after:inset-0 after:top-0 after:right-0 after:-z-10 after:mt-auto after:mb-0 after:block after:h-full after:bg-radial-[circle_at_-15%_125%] after:from-0% after:to-transparent after:to-40% after:blur-2xl'
    )}
>
    <ToggleGroup.Root
        bind:value={getValue, setValue}
        type="single"
        class="container flex h-full items-center gap-4"
    >
        {#each studies as study, i}
            <ToggleGroup.Item
                value={i.toString()}
                class={classNames(
                    'data-[state="on"]:border-smooth grid h-[425px] cursor-pointer place-content-center place-items-center overflow-hidden rounded-2xl border border-transparent px-12 py-6 backdrop-blur-3xl transition-all duration-400 ease-in-out [grid-template-areas:"stack"]',
                    'group/card text-left! hover:bg-black/24 data-[state="off"]:[flex-basis:15%] data-[state="off"]:bg-black/16 data-[state="on"]:[flex-basis:70%] data-[state="on"]:bg-black/24'
                )}
            >
                <img
                    src={study.logo}
                    alt={study.headline}
                    class={classNames(
                        'visible opacity-100 transition-all [grid-area:stack]',
                        'group-[&[data-state=on]]/card:invisible group-[&[data-state=on]]/card:opacity-0',
                        'brightness-50'
                    )}
                />

                <div
                    class={classNames(
                        'invisible space-y-4 opacity-0 transition-opacity delay-400 [grid-area:stack]',
                        'group-[&[data-state=on]]/card:visible group-[&[data-state=on]]/card:opacity-100'
                    )}
                >
                    <img src={study.logo} alt={study.headline} />
                    {#if value === i.toString()}
                        <span class="text-title font-aeonik-pro text-primary flex flex-wrap gap-2"
                            >{#each study.headline.split(' ') as word, i}
                                <span class="animate-enter" style:animation-delay="{i * 25}ms">
                                    {word}
                                </span>
                            {/each}</span
                        >
                    {/if}

                    <div class="border-smooth mt-8 border-t border-dashed pt-8">
                        <div class="text-primary text-sub-body max-w-[60%] font-medium">
                            "{study.blurb}"
                        </div>

                        <div class="mt-4 flex justify-between">
                            <div class="flex gap-2">
                                <img src={study.avatar} alt={study.headline} class="size-6" />
                                <span class="text-caption">{study.name}, {study.title}</span>
                            </div>

                            <a href={study.url} class="text-primary group flex items-center gap-2"
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
