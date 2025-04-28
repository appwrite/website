<script lang="ts">
    import { onDestroy, onMount, type Component, type Snippet } from 'svelte';

    import Auth from '../(assets)/icons/auth.svg';
    import Databases from '../(assets)/icons/databases.svg';
    import Functions from '../(assets)/icons/functions.svg';
    import Storage from '../(assets)/icons/storage.svg';
    import Realtime from '../(assets)/icons/realtime.svg';
    import Messaging from '../(assets)/icons/messaging.svg';
    import { classNames } from '$lib/utils/classnames';
    import { inView } from 'motion';

    import AuthSlide from '../(assets)/slides/auth.svg';
    import DatabasesSlide from '../(assets)/slides/databases.svg';
    import FunctionsSlide from '../(assets)/slides/functions.svg';
    import StorageSlide from '../(assets)/slides/storage.svg';
    import RealtimeSlide from '../(assets)/slides/realtime.svg';
    import MessagingSlide from '../(assets)/slides/messaging.svg';
    import { write } from '$lib/animations';

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
            ) => `<svg width="98" height="75" viewBox="0 0 98 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H35.3623C41.9897 1 47.3623 6.37258 47.3623 13V62C47.3623 68.6274 52.7349 74 59.3623 74H98" class="group-hover:stroke-white ${isActive && 'stroke-white'} group-focus-within:stroke-white transition-all stroke-smooth" stroke-dasharray="4 4"/>
                   </svg>`,
            image: AuthSlide
        },
        {
            label: 'Databases',
            icon: Databases,
            line: (
                isActive: boolean
            ) => `<svg width="98" height="2" viewBox="0 0 98 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1L98 1.00001" class="group-hover:stroke-white group-focus-within:stroke-white ${isActive && 'stroke-white'} transition-all stroke-smooth" stroke-dasharray="4 4"/>
                   </svg>`,
            image: DatabasesSlide
        },
        {
            label: 'Functions',
            icon: Functions,
            line: (
                isActive: boolean
            ) => `<svg width="98" height="75" viewBox="0 0 98 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 74H35.3623C41.9897 74 47.3623 68.6274 47.3623 62V13C47.3623 6.37258 52.7349 0.999998 59.3623 0.999998H98" class="group-hover:stroke-white ${isActive && 'stroke-white'} group-focus-within:stroke-white transition-all stroke-smooth" stroke-dasharray="4 4"/>
                   </svg>`,
            image: FunctionsSlide
        },
        {
            label: 'Storage',
            icon: Storage,
            line: (
                isActive: boolean
            ) => `<svg width="98" height="75" viewBox="0 0 98 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M98 1H62.6377C56.0103 1 50.6377 6.37258 50.6377 13V62C50.6377 68.6274 45.2651 74 38.6377 74H-9.53674e-07" class="group-hover:stroke-white ${isActive && 'stroke-white'} group-focus-within:stroke-white transition-all stroke-smooth" stroke-dasharray="4 4"/>
                   </svg>`,
            image: StorageSlide
        },
        {
            label: 'Realtime',
            icon: Realtime,
            line: (
                isActive: boolean
            ) => `<svg width="98" height="2" viewBox="0 0 98 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1L98 1.00001" class="group-hover:stroke-white group-focus-within:stroke-white ${isActive && 'stroke-white'} transition-all stroke-smooth" stroke-dasharray="4 4"/>
                   </svg>`,
            image: RealtimeSlide
        },
        {
            label: 'Messaging',
            icon: Messaging,
            line: (
                isActive: boolean
            ) => `<svg width="98" height="75" viewBox="0 0 98 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M98 74H62.6377C56.0103 74 50.6377 68.6274 50.6377 62V13C50.6377 6.37258 45.2651 0.999998 38.6377 0.999998H-9.53674e-07" class="group-hover:stroke-white ${isActive && 'stroke-white'} group-focus-within:stroke-white transition-all stroke-smooth" stroke-dasharray="4 4"/>
                   </svg>`,
            image: MessagingSlide
        }
    ];

    let activeIndex = $state(0);
    let paused = $state<boolean>(false);

    const autoCycle = () => {
        if (paused) return;
        activeIndex = (activeIndex + 1) % products.length;
    };

    let interval = $state<NodeJS.Timeout>();

    const handleSetActive = (index: number) => {
        paused = true;
        activeIndex = index;
    };

    const handleMouseOut = () => {
        paused = false;
    };

    $effect(() => {
        interval = setInterval(autoCycle, 5000);

        return () => {
            clearInterval(interval);
        };
    });

    let eyebrow = $state('');
    let container: HTMLElement;

    const writeEyebrow = async () => {
        await write('Integrate', (v) => (eyebrow = v), 500);
    };

    $effect(() => {
        inView(container, () => {
            writeEyebrow();
        });
    });
</script>

<div class="my-12 flex h-fit flex-1 gap-3" bind:this={container}>
    <div class="sticky inset-y-0 top-0 left-0 flex h-full justify-center bg-transparent">
        <div
            class="border-gradient absolute z-10 flex size-4 items-center justify-center rounded-full bg-gradient-to-tl from-transparent to-white/32"
        >
            <div class="size-1 rounded-full bg-white"></div>
        </div>
    </div>
    <div class="mx-auto flex w-full flex-col gap-16 bg-center md:px-8">
        <span class="text-primary text-micro font-aeonik-fono uppercase"
            >{eyebrow}<span class="text-accent">_</span></span
        >
        <div
            class="relative grid grid-cols-1 place-items-center [background:_radial-gradient(50%_50%_at_50%_50%,_rgba(253,_54,_110,_0.1)_0%,_rgba(253,_54,_110,_0)_100%)] md:grid-cols-12"
        >
            <!-- left side -->
            <div class="col-span-3 mb-8 w-full">
                <div
                    class="text-body flex items-end gap-2 font-medium text-white md:flex-col md:gap-12"
                >
                    {#each products.slice(0, 3) as product, index}
                        {@const isActive = index === activeIndex}
                        <div class="group relative mr-auto ml-0 flex w-fit items-center md:w-full">
                            <button
                                class={classNames(
                                    'bg-card border-smooth ml-auto flex cursor-pointer items-center gap-2 rounded-xl border py-2 pr-4 pl-3 backdrop-blur-md transition-all md:mr-[100px]',
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
                                <img src={product.icon} alt={product.label} class="h-6 w-6" />
                                {product.label}
                            </button>
                            <div
                                class={classNames('absolute right-0 hidden md:block', {
                                    'top-1/2': index === 0,
                                    'bottom-1/2': index === 2
                                })}
                            >
                                {@html product.line(isActive)}
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
            <!-- window -->
            <div
                class="window col-span-6 flex aspect-[6.5/4.75] w-full items-center justify-center rounded-[48px] border border-dashed border-transparent p-3 md:aspect-[6.5/4.5]"
                style:animation-delay="0.6s"
            >
                <div
                    class="window flex h-full flex-1 rounded-[40px] border border-dashed border-transparent p-3"
                    style:animation-delay="0.4s"
                >
                    <div
                        class="window flex h-full flex-1 rounded-[28px] border border-dashed border-transparent p-3"
                        style:animation-delay="0.2s"
                    >
                        <div
                            class="bg-greyscale-850 border-smooth flex flex-1 flex-col rounded-[20px] border px-2 pb-2"
                        >
                            <div class="flex h-8 w-fit items-center justify-start gap-1.5 pl-2">
                                {#each Array.from({ length: 3 }) as _}
                                    <div
                                        class="size-2 flex-1 shrink cursor-pointer rounded-full bg-[#D9D9D9] transition hover:opacity-75"
                                    ></div>
                                {/each}
                            </div>
                            <div class="relative flex-1 overflow-hidden rounded-2xl bg-[#19191C]">
                                {#each products as product, i}
                                    {@const isActive = i === activeIndex}
                                    <img
                                        src={product.image}
                                        class={classNames(
                                            'absolute inset-0 h-full w-full rounded-2xl object-cover transition-all duration-500 ease-out',
                                            'scale-102 opacity-0 blur-md',
                                            {
                                                'scale-100 opacity-100 blur-none': isActive,
                                                invisible: !isActive
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
            <div class="col-span-3 mt-8 w-full md:mt-0">
                <div class="text-body flex gap-2 font-medium text-white md:flex-col md:gap-12">
                    {#each products.slice(3) as product, i}
                        {@const index = i + 3}
                        {@const isActive = index === activeIndex}
                        <div class="group relative mr-0 ml-auto flex w-fit items-center md:w-full">
                            <button
                                class={classNames(
                                    'bg-card border-smooth mr-auto flex cursor-pointer items-center gap-2 rounded-xl border py-2 pr-4 pl-3 backdrop-blur-md transition-all md:ml-[100px]',
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
                                <img src={product.icon} alt={product.label} class="h-6 w-6" />
                                {product.label}
                            </button>
                            <div
                                class={classNames('absolute left-0 hidden md:block', {
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
        <div class="mx-auto flex flex-col gap-2 text-center">
            <h2 class="text-primary text-title font-aeonik-pro">Integrate your backend</h2>
            <p class="text-secondary mx-auto">
                Integrate your frontend easily with our backend products:<br /> Auth, Databases, Functions,
                Messaging, Storage and Realtime.
            </p>
        </div>
    </div>
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
