<script lang="ts">
    import Auth from '../(assets)/icons/auth.svg';
    import Databases from '../(assets)/icons/databases.svg';
    import Functions from '../(assets)/icons/functions.svg';
    import Storage from '../(assets)/icons/storage.svg';
    import Realtime from '../(assets)/icons/realtime.svg';
    import Messaging from '../(assets)/icons/messaging.svg';
    import { classNames } from '$lib/utils/classnames';

    import AuthSlide from '../(assets)/slides/auth.svg';
    import DatabasesSlide from '../(assets)/slides/databases.svg';
    import FunctionsSlide from '../(assets)/slides/functions.svg';
    import StorageSlide from '../(assets)/slides/storage.svg';
    import RealtimeSlide from '../(assets)/slides/realtime.svg';
    import MessagingSlide from '../(assets)/slides/messaging.svg';
    import SitesSlide from '../(assets)/slides/sites.svg';
    import Grid from './grid-system/grid.svelte';
    import Cell from './grid-system/cell.svelte';
    import { inView } from 'motion';

    const lineClass = (isActive: boolean) =>
        `group-hover:stroke-white ${isActive ? 'stroke-white' : ''} group-focus-within:stroke-white transition-all stroke-smooth`;

    const products: Array<{
        label: string;
        icon: string;
        line: (isActive: boolean) => string;
        image: string;
    }> = [
        {
            label: 'Auth',
            icon: Auth,
            line: (
                isActive: boolean
            ) => `<svg width="98" height="107" viewBox="0 0 98 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H45.3623C51.9897 1 57.3623 6.37258 57.3623 13V94C57.3623 100.627 62.7349 106 69.3623 106H98" stroke-dasharray="4 4" class="${lineClass(isActive)}"/>
                   </svg>`,
            image: AuthSlide
        },
        {
            label: 'Databases',
            icon: Databases,
            line: (
                isActive: boolean
            ) => `<svg width="98" height="36" viewBox="0 0 98 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H35.3626C41.9899 1 47.3624 6.37239 47.3626 12.9997L47.3629 23.0003C47.363 29.6276 52.7356 35 59.3629 35H98.0009" class="group-hover:stroke-white group-focus-within:stroke-white ${isActive && 'stroke-white'} transition-all stroke-smooth" stroke-dasharray="4 4"/>
                   </svg>`,
            image: DatabasesSlide
        },
        {
            label: 'Functions',
            icon: Functions,
            line: (
                isActive: boolean
            ) => `<svg width="98" height="36" viewBox="0 0 98 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 35H35.3626C41.9899 35 47.3624 29.6276 47.3626 23.0003L47.3629 12.9997C47.363 6.37239 52.7356 1 59.3629 1H98.0009" class="group-hover:stroke-white ${isActive && 'stroke-white'} group-focus-within:stroke-white transition-all stroke-smooth" stroke-dasharray="4 4"/>
                   </svg>`,
            image: FunctionsSlide
        },
        {
            label: 'Storage',
            icon: Storage,
            line: (
                isActive: boolean
            ) => `<svg width="98" height="107" viewBox="0 0 98 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 106H45.3623C51.9897 106 57.3623 100.627 57.3623 94V13C57.3623 6.37258 62.7349 0.999995 69.3623 0.999995H98" class="group-hover:stroke-white ${isActive && 'stroke-white'} group-focus-within:stroke-white transition-all stroke-smooth" stroke-dasharray="4 4"/>
                   </svg>`,
            image: StorageSlide
        },
        {
            label: 'Realtime',
            icon: Realtime,
            line: (
                isActive: boolean
            ) => `<svg width="98" height="75" viewBox="0 0 98 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M98 1H62.6377C56.0103 1 50.6377 6.37258 50.6377 13V62C50.6377 68.6274 45.2651 74 38.6377 74H-9.53674e-07" class="group-hover:stroke-white ${isActive && 'stroke-white'} group-focus-within:stroke-white transition-all stroke-smooth" stroke-dasharray="4 4"/>
                   </svg>`,
            image: RealtimeSlide
        },

        {
            label: 'Messaging',
            icon: Messaging,
            line: (
                isActive: boolean
            ) => `<svg width="98" height="2" viewBox="0 0 98 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1L98 1.00001" class="group-hover:stroke-white group-focus-within:stroke-white ${isActive && 'stroke-white'} transition-all stroke-smooth" stroke-dasharray="4 4"/>
                   </svg>`,
            image: MessagingSlide
        },
        {
            label: 'Sites',
            icon: Realtime,
            line: (
                isActive: boolean
            ) => `<svg width="98" height="75" viewBox="0 0 98 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M98 74H62.6377C56.0103 74 50.6377 68.6274 50.6377 62V13C50.6377 6.37258 45.2651 0.999998 38.6377 0.999998H-9.53674e-07" class="group-hover:stroke-white ${isActive && 'stroke-white'} group-focus-within:stroke-white transition-all stroke-smooth" stroke-dasharray="4 4"/>
                   </svg>`,
            image: SitesSlide
        }
    ];

    let activeIndex = $state(0);
    let paused = $state<boolean>(false);

    const autoCycle = () => {
        if (paused) return;
        activeIndex = (activeIndex + 1) % products.length;
    };

    let interval = $state<ReturnType<typeof setInterval>>();

    const handleSetActive = (index: number) => {
        paused = true;
        activeIndex = index;
    };

    const handleMouseOut = () => {
        paused = false;
    };

    let animate = $state<boolean>(false);

    const useInView = (node: HTMLElement) => {
        inView(node, () => {
            animate = true;
        });
    };

    $effect(() => {
        interval = setInterval(autoCycle, 5000);

        return () => {
            clearInterval(interval);
        };
    });
</script>

<div class="mx-auto flex h-fit max-w-6xl flex-1 gap-3">
    <Grid rows={2} bottomBorder>
        <Cell column={2} columnStart={1} class="px-4 pt-12 md:pt-40">
            <div class="space-y-4 px-4" use:useInView>
                <h2
                    data-animate={animate}
                    class="text-subtitle text-primary font-aeonik-pro before:bg-accent text-pretty before:absolute before:left-4 before:mt-1.25 before:h-6 before:w-px before:origin-top before:scale-y-0 before:transition-transform before:duration-700 data-[animate=true]:before:scale-y-100"
                >
                    All in one development<br /> platform
                </h2>
            </div>
        </Cell>
        <Cell column={4} columnStart={3} class="px-4 pt-12 md:pt-40"
            ><div class="text-paragraph-lg">
                <p>
                    One platform and one subscription to develop, deploy, and scale your
                    applications.
                </p>
            </div>
        </Cell>
        <Cell column={4} class="pt-8 pb-12 md:pb-40">
            <div class="mx-auto flex w-full flex-col gap-16 bg-center px-4">
                <div
                    class="relative grid grid-cols-1 place-items-center gap-0 [background:_radial-gradient(50%_50%_at_50%_50%,_rgba(253,_54,_110,_0.1)_0%,_rgba(253,_54,_110,_0)_100%)] lg:grid-cols-12"
                >
                    <!-- left side -->
                    <div class="col-span-3 w-fit translate-x-6">
                        <div
                            class="text-body flex items-center gap-2 font-medium text-white max-sm:justify-center lg:flex-col lg:items-end lg:gap-12"
                        >
                            {#each products.slice(0, 4) as product, index}
                                {@const isActive = index === activeIndex}
                                <div
                                    class="group relative ml-0 flex w-fit items-center md:mr-auto md:w-full"
                                >
                                    <button
                                        class={classNames(
                                            'bg-card border-smooth md:text-caption flex cursor-pointer items-center gap-2 rounded-xl border py-2 pr-4 pl-3 text-sm backdrop-blur-md transition-all hover:bg-white/8 md:mr-[100px] md:ml-auto',
                                            {
                                                'bg-accent/12 border-accent/36 md:border-smooth md:bg-card':
                                                    isActive
                                            }
                                        )}
                                        onmouseover={() => handleSetActive(index)}
                                        onfocus={() => handleSetActive(index)}
                                        onmouseout={() => handleMouseOut()}
                                        onblur={() => handleMouseOut()}
                                    >
                                        <img
                                            src={product.icon}
                                            alt={product.label}
                                            class="size-4 md:size-6"
                                        />
                                        {product.label}
                                    </button>
                                    <div
                                        class={classNames(
                                            'absolute right-0 bottom-1/2 hidden lg:block',
                                            {
                                                'top-1/2': index < 2,
                                                'bottom-1/2': index > 2
                                            }
                                        )}
                                    >
                                        {@html product.line(isActive)}
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                    <!-- window -->
                    <div
                        class="window md:asepct-[19/13] col-span-6 flex aspect-[19/12] w-full items-center justify-center rounded-[48px] border-dashed border-transparent p-3 md:border"
                        style:animation-delay="0.6s"
                    >
                        <div
                            class="window flex h-full flex-1 rounded-[40px] border-dashed border-transparent md:border md:p-3"
                            style:animation-delay="0.4s"
                        >
                            <div
                                class="window flex h-full flex-1 rounded-[28px] border-dashed border-transparent md:border md:p-3"
                                style:animation-delay="0.2s"
                            >
                                <div
                                    class="bg-greyscale-850 border-smooth flex flex-1 flex-col rounded-[20px] border px-2 pb-2"
                                >
                                    <div
                                        class="flex h-8 w-fit items-center justify-start gap-1.5 pl-2"
                                    >
                                        {#each Array.from({ length: 3 }) as _}
                                            <div
                                                class="size-2 flex-1 shrink cursor-pointer rounded-full bg-[#D9D9D9] transition hover:opacity-75"
                                            ></div>
                                        {/each}
                                    </div>
                                    <div
                                        class="relative flex-1 overflow-hidden rounded-2xl bg-[#19191C]"
                                    >
                                        {#each products as product, i}
                                            {@const isActive = i === activeIndex}
                                            <img
                                                src={product.image}
                                                class={classNames(
                                                    'absolute inset-0 h-full w-full rounded-2xl object-cover transition-all duration-500 ease-out',
                                                    'scale-102 opacity-0 blur-md',
                                                    {
                                                        'scale-100 opacity-100 blur-none': isActive,
                                                        invisible: !isActive,
                                                        'object-[center_top]': i === 5
                                                    }
                                                )}
                                                aria-hidden={!isActive}
                                                alt=""
                                            />
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- right side -->
                    <div class="col-span-3 mt-8 w-full lg:mt-0">
                        <div
                            class="text-body flex gap-2 font-medium text-white max-lg:justify-center lg:flex-col lg:gap-12"
                        >
                            {#each products.slice(4) as product, i}
                                {@const index = i + 4}
                                {@const isActive = index === activeIndex}
                                <div
                                    class="group relative mr-0 flex items-center md:w-full lg:ml-auto"
                                >
                                    <button
                                        class={classNames(
                                            'bg-card border-smooth md:text-caption flex cursor-pointer items-center gap-2 rounded-xl border py-2 pr-4 pl-3 text-sm backdrop-blur-md transition-all hover:bg-white/8 md:mr-auto md:ml-[100px]',
                                            {
                                                'bg-accent/12 border-accent/36 md:border-smooth md:bg-card':
                                                    isActive
                                            }
                                        )}
                                        onclick={() => handleSetActive(index)}
                                        onmouseover={() => handleSetActive(index)}
                                        onfocus={() => handleSetActive(index)}
                                        onmouseout={() => handleMouseOut()}
                                        onblur={() => handleMouseOut()}
                                    >
                                        <img
                                            src={product.icon}
                                            alt={product.label}
                                            class="size-4 md:size-6"
                                        />
                                        {product.label}
                                    </button>
                                    <div
                                        class={classNames('absolute left-0 hidden lg:block', {
                                            'top-1/2': i === 0,
                                            'bottom-1/2': i === 2
                                        })}
                                    >
                                        {@html product.line(isActive)}
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </Cell>
    </Grid>
</div>

<style>
    .window {
        --border-color: var(--color-pink-hue), 65%, 48%;
        animation: border-pulse 2.5s infinite ease-in-out;
    }

    @keyframes border-pulse {
        0% {
            border-color: hsla(var(--border-color), 1);
        }
        25% {
            border-color: hsla(var(--border-color), 0.5);
        }
        50% {
            border-color: hsla(var(--border-color), 0);
        }
        75% {
            border-color: hsla(var(--border-color), 0.5);
        }
        100% {
            border-color: hsla(var(--border-color), 1);
        }
    }
</style>
