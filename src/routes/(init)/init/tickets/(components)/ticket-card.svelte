<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import Lockup from '../../(components)/lockup.svelte';
    import type { ContributionsMatrix } from '../../(utils)/contributions';
    import type { TicketData } from '../../(utils)/tickets';
    import TicketUrl from './ticket-url.svelte';
    import { initDates } from '../../+page.svelte';

    let coords = $state({ x: 0, y: 0 });

    type Props = Omit<TicketData, 'contributions'> & {
        disableEffects?: boolean;
        flipped?: boolean;
        stickerPack?: string[];
        editing?: boolean;
        $id?: string;
        contributions?: Promise<ContributionsMatrix>;
    };

    let {
        name,
        id,
        title,
        contributions,
        avatar_url,
        flipped = false,
        editing,
        disableEffects = false,
        sticker,
        stickerPack,
        ...props
    }: Props = $props();

    const firstName = name?.split(' ')[0].trim();

    const handleFlip = () => {
        if (disableEffects) return;
        flipped = !flipped;
    };

    interface TiltBounds {
        x: number;
        y: number;
        width: number;
        height: number;
    }

    interface CenterPoint {
        x: number;
        y: number;
    }

    const tilt = (node: HTMLElement) => {
        let bounds: TiltBounds;

        const rotateToMouse = (e: MouseEvent) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const leftX = mouseX - bounds.x;
            const topY = mouseY - bounds.y;

            coords = { x: leftX, y: topY };

            const center: CenterPoint = {
                x: leftX - bounds.width / 2,
                y: topY - bounds.height / 2
            };
            const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

            node.style.transform = `scale3d(1.05, 1.05, 1.05) rotate3d(${center.y / 100}, ${-center.x / 100}, 0, ${Math.log(distance) * 2}deg)`;

            const glowElement = node.querySelector('.glow') as HTMLElement | null;
            if (glowElement) {
                glowElement.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          rgba(255,255,255,0.075),
          transparent
        )
      `;
            }
        };

        const handleMouseenter = () => {
            bounds = node.getBoundingClientRect();
            document.addEventListener('mousemove', rotateToMouse);
        };

        const handleMouseleave = () => {
            document.removeEventListener('mousemove', rotateToMouse);

            node.style.transform = '';
            const glowElement = node.querySelector('.glow') as HTMLElement | null;
            if (glowElement) {
                glowElement.style.backgroundImage = '';
            }
        };

        node.addEventListener('mouseenter', handleMouseenter);
        node.addEventListener('mouseleave', handleMouseleave);

        return {
            destroy(): void {
                node.removeEventListener('mouseenter', handleMouseenter);
                node.removeEventListener('mouseleave', handleMouseleave);
                document.removeEventListener('mousemove', rotateToMouse);
            }
        };
    };
</script>

<button
    class={classNames('group peer relative perspective-[1500px]', {
        'hover:cursor-none': !disableEffects
    })}
    onclick={handleFlip}
>
    <div use:tilt class="size-full rounded-2xl transition-all duration-300 ease-out">
        <div
            class={classNames(
                'group relative z-10 mx-auto flex aspect-[3.65/5.72] max-w-xs min-w-xs flex-col gap-1 rounded-3xl bg-[#27272A] p-1 shadow-lg transition-transform transform-3d',
                'shadow-black/25 hover:shadow-xl',
                'outline-accent border-8 border-black outline-2 outline-dashed',
                'before:absolute before:inset-x-0 before:top-0 before:h-px before:rounded-2xl before:bg-linear-to-r before:from-transparent before:via-white/30 before:to-transparent',
                { 'rotate-y-180': flipped }
            )}
        >
            <!-- front of the ticket -->
            <div class="absolute inset-1 flex flex-1 flex-col gap-1 backface-hidden">
                <TicketUrl docId={props.$id} />
                <div class="relative z-10 flex flex-1 flex-col rounded-xl bg-[#19191C] p-2">
                    <img
                        src="/images/logos/appwrite.svg"
                        alt="appwrite"
                        class="mt-3 ml-2 h-4 w-auto self-start"
                    />
                    <div class="flex flex-1 items-center">
                        <Lockup class="w-full" />
                    </div>

                    <div class="mb-2 flex items-center gap-4 p-1 text-left">
                        <img
                            src={avatar_url}
                            alt="{firstName}'s Avatar"
                            class="size-16 rounded outline-2 outline-offset-1 outline-[var(--color-offset)] outline-dashed"
                        />
                        <div class="flex flex-col flex-wrap gap-1">
                            <h3
                                class="text-primary font-aeonik-pro max-w-[10ch] overflow-hidden pb-1 text-[2rem] leading-8 overflow-ellipsis whitespace-nowrap"
                            >
                                {name}<span
                                    class={classNames('text-accent', {
                                        'animate-caret-blink': editing
                                    })}>_</span
                                >
                            </h3>
                            {#if title}
                                <span
                                    class="text-secondary font-aeonik-pro text-x-micro tracking-loose relative w-fit uppercase"
                                    >{title}
                                </span>
                            {/if}
                        </div>
                    </div>

                    <div
                        class="font-aeonik-fono tracking-loose border-offset text-x-micro relative z-10 flex items-center justify-between rounded-lg border-2 border-dashed bg-black p-2 uppercase"
                    >
                        <span>Init / {initDates}</span>
                        <span
                            >Ticket <span class="text-accent">#</span>{id
                                .toString()
                                .padStart(6, '0')}</span
                        >
                    </div>

                    <div
                        class="absolute inset-0 top-0 min-h-full w-full bg-[radial-gradient(rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:60px_60px]"
                    ></div>
                </div>
            </div>
            <!-- back of the ticket -->
            <div class="absolute inset-1 z-10 flex rotate-y-180 flex-col gap-1 backface-hidden">
                <TicketUrl docId={props.$id} />
                <div class="relative z-10 flex flex-1 flex-col gap-1 rounded-xl bg-[#19191C] p-2">
                    <div class="relative aspect-square">
                        {#if sticker !== null && typeof sticker !== 'undefined' && stickerPack && sticker in stickerPack}
                            <div
                                class="flex aspect-square size-full items-stretch overflow-hidden rounded-[1px] border-black bg-black outline-2 [outline-offset:-1px] outline-[var(--color-offset)] outline-dashed"
                            >
                                <div
                                    class="bg-smooth m-0.5 flex flex-1 items-center justify-center rounded-[1px] border border-white/32"
                                >
                                    <img
                                        src={stickerPack[sticker]}
                                        alt="Sticker"
                                        class="h-auto w-3/4"
                                    />
                                </div>
                            </div>
                        {/if}
                    </div>
                    <div
                        class="border-offset mt-auto mb-0 rounded-md border-2 border-dashed bg-black p-2"
                    >
                        <div
                            class="text-primary font-aeonik-fono tracking-loose text-x-micro border-offset mb-2 flex items-center justify-between border-b pb-2 uppercase"
                        >
                            <span>Init / {initDates}</span>
                            <span
                                >Ticket <span class="text-accent">#</span>{id
                                    .toString()
                                    .padStart(6, '0')}</span
                            >
                        </div>

                        {#if contributions}
                            <div class="grid h-10 w-full grid-cols-52 grid-rows-7 gap-0.5">
                                {#await contributions then c}
                                    {#each c as l, i}
                                        {#each l as level}
                                            <div class="flex gap-1">
                                                <div
                                                    class={classNames(
                                                        'size-1 shrink-0 rounded-[1px] bg-white',
                                                        {
                                                            'opacity-20': level === 1,
                                                            'opacity-40': level === 2,
                                                            'opacity-64': level === 3,
                                                            'opacity-80': level === 4
                                                        }
                                                    )}
                                                ></div>
                                            </div>
                                        {/each}
                                    {/each}{/await}
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
            <!-- that sweet sweet glow-->
            <div
                class="glow pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-2xl"
            ></div>
        </div>
    </div>
    <div
        class={classNames(
            'bg-offset text-primary text-caption pointer-events-none absolute flex items-center gap-1 rounded-md px-3 py-0.5 font-medium opacity-0 backdrop-blur-2xl transition-opacity group-hover:opacity-100',
            {
                hidden: disableEffects
            }
        )}
        style:left="{coords.x}px"
        style:top="{coords.y}px"
    >
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.66669 9.16667C1.66669 6.83333 5.41669 5 10 5C14.5834 5 18.3334 6.83333 18.3334 9.16667C18.3334 10.7011 16.7316 11.9793 14.3708 12.7203C13.8458 12.8851 13.3334 12.4756 13.3334 11.9254C13.3334 11.5293 13.6069 11.1889 13.9847 11.0698C15.6745 10.5368 16.6667 9.68638 16.6667 9.16667C16.6667 8.25 14.1667 6.66667 10 6.66667C5.83335 6.66667 3.33335 8.25 3.33335 9.16667C3.33335 9.81543 5.64166 10.918 8.22316 11.4375C8.33083 11.4592 8.43689 11.4883 8.53998 11.5259C8.58827 11.5157 8.63824 11.5104 8.68941 11.5104L7.71966 10.5003C7.42677 10.1952 7.42677 9.70057 7.71966 9.39547C8.01256 9.09038 8.48743 9.09038 8.78032 9.39547L11.0303 11.7392C11.171 11.8857 11.25 12.0844 11.25 12.2917C11.25 12.4989 11.171 12.6976 11.0303 12.8441L8.78032 15.1878C8.48743 15.4929 8.01255 15.4929 7.71966 15.1878C7.42677 14.8827 7.42677 14.3881 7.71966 14.083L8.56982 13.1975C5.20571 12.588 1.66669 10.9678 1.66669 9.16667Z"
                fill="currentColor"
            />
        </svg>

        Flip
    </div>
</button>
