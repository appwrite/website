<script lang="ts">
    import Spinner from '$lib/components/shared/spinner.svelte';
    import { Icon } from '$lib/components/ui';
    import HeroCrosshairs from '../(assets)/hero-crosshairs.svg';
    import HeroDivider from '../(assets)/hero-divider.svg';
    import { type PageData } from '../$types';
    import { enhance } from '$app/forms';

    type Props = {} & Omit<PageData, 'changelogCount'>;

    let { claimed, ticketId }: Props = $props();
    let claiming: boolean = $state(false);
</script>

<section class="relative h-[900px] w-full overflow-hidden bg-[#19191C]">
    <!-- Gradient background (top portion) -->
    <div
        class="pointer-events-none absolute inset-x-0 top-0 h-[411px] w-full select-none"
        style="background: linear-gradient(180deg, #19191C 8.94%, #7E1935 31.7%, #FD366E 54.47%, #FEAFC5 77.92%, #EDEDF0 100%);"
        aria-hidden="true"
    >
        <img
            src={HeroCrosshairs}
            alt=""
            class="h-full w-full object-cover"
            aria-hidden="true"
        />
    </div>

    <!-- Main hero content area -->
    <div class="absolute inset-x-0 top-[491px] mx-auto w-full max-w-[1728px] px-[clamp(1.25rem,4vw,120rem)]">
        <div class="flex flex-col gap-16">
            <!-- Large INIT wordmark row: 5 outlined left, 1 filled, 5 outlined right -->
            <!-- Offset left by 5 * (469 + 32) = 2505px so the filled logo aligns to left edge -->
            <div class="ml-[-2505px] flex items-center gap-8">
                {#each { length: 11 } as _, i}
                    {@const isFilled = i === 5}
                    <svg
                        width="469"
                        height="165"
                        viewBox="0 0 469 167"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-[165px] w-[469px] shrink-0"
                        aria-hidden={!isFilled}
                        role={isFilled ? 'img' : 'presentation'}
                    >
                        {#if isFilled}
                            <title>Init</title>
                            <path d="M93.0387 1V17.9714H56.9095V149.029H93.0387V166H0V149.029H36.3654V17.9714H0V1H93.0387Z" fill="white"/>
                            <path d="M126.044 166H106.208V1H126.044L205.15 127.814V1H224.75V166H205.15L126.044 38.95V166Z" fill="white"/>
                            <path d="M329.886 1V17.9714H293.757V149.029H329.886V166H236.848V149.029H273.213V17.9714H236.848V1H329.886Z" fill="white"/>
                            <path d="M415.396 166H394.852V19.8572H341.249V1H469V19.8572H415.396V166Z" fill="white"/>
                        {:else}
                            <g opacity="0.1" style="mix-blend-mode:difference">
                                <path d="M93.0387 1V17.9714H56.9095V149.029H93.0387V166H0V149.029H36.3654V17.9714H0V1H93.0387Z" stroke="white" stroke-width="2"/>
                                <path d="M126.044 166H106.208V1H126.044L205.15 127.814V1H224.75V166H205.15L126.044 38.95V166Z" stroke="white" stroke-width="2"/>
                                <path d="M329.886 1V17.9714H293.757V149.029H329.886V166H236.848V149.029H273.213V17.9714H236.848V1H329.886Z" stroke="white" stroke-width="2"/>
                                <path d="M415.396 166H394.852V19.8572H341.249V1H469V19.8572H415.396V166Z" stroke="white" stroke-width="2"/>
                            </g>
                        {/if}
                    </svg>
                {/each}
            </div>

            <!-- Bottom row: text + CTAs -->
            <div class="flex flex-col gap-5">
                <!-- Divider line -->
                <img
                    src={HeroDivider}
                    alt=""
                    class="w-full opacity-16"
                    aria-hidden="true"
                />

                <!-- Content row -->
                <div class="flex items-start justify-between gap-8">
                    <!-- Left: date text -->
                    <div class="max-w-[379px]">
                        <p class="font-aeonik-fono text-sm uppercase leading-[1.2] tracking-tight text-white">
                            APPWRITE LAUNCH WEEK 4.0<br />
                            MARCH 23 - 27<br />
                            2026
                        </p>
                    </div>

                    <!-- Right: CTA links -->
                    <div class="flex w-[276px] flex-col gap-2">
                        {#if claimed}
                            <a
                                href={`/init/tickets/${ticketId}`}
                                class="group flex items-center justify-between gap-1.5 rounded-none border border-white/10 bg-white/12 px-3 py-2 pr-1.5 transition-colors hover:bg-white/16"
                            >
                                <span class="font-aeonik-fono text-sm uppercase leading-[1.2] tracking-tight text-[#E4E4E7]">
                                    YOUR INIT TICKET
                                </span>
                                <Icon name="chevron-right" class="size-5 text-white" />
                            </a>
                        {:else}
                            <form
                                action="?/oauth"
                                method="post"
                                use:enhance={async () => {
                                    claiming = true;
                                }}
                            >
                                <button
                                    type="submit"
                                    disabled={claiming}
                                    class="group flex w-full items-center justify-between gap-1.5 rounded-none border border-white/10 bg-white/12 px-3 py-2 pr-1.5 transition-colors hover:bg-white/16 disabled:opacity-50"
                                >
                                    <span class="font-aeonik-fono text-sm uppercase leading-[1.2] tracking-tight text-[#E4E4E7]">
                                        {#if claiming}
                                            <Spinner />
                                        {:else}
                                            CLAIM YOUR TICKET
                                        {/if}
                                    </span>
                                    <Icon name="chevron-right" class="size-5 text-white" />
                                </button>
                            </form>
                        {/if}

                        <a
                            href="https://www.youtube.com/watch?v=appwrite-init-4"
                            target="_blank"
                            rel="noopener"
                            class="group flex items-center justify-between gap-1.5 rounded-none border border-white/10 bg-white/12 px-3 py-2 pr-1.5 transition-colors hover:bg-white/16"
                        >
                            <span class="font-aeonik-fono text-sm uppercase leading-[1.2] tracking-tight text-[#E4E4E7]">
                                Announcement video
                            </span>
                            <Icon name="chevron-right" class="size-5 text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
