<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import type { ContributionsMatrix, TicketData } from '$routes/(init)/init/utils';
    import Lockup from '../../(components)/lockup.svelte';

    type $$Props = Omit<TicketData, '$id' | 'contributions'> & {
        contributions?: Promise<ContributionsMatrix> | ContributionsMatrix;
    };

    export let { name, id, ...rest } = $$props as $$Props;

    const firstName = name.split(' ')[0];

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

    interface TiltVariables {
        scale: number;
        rotateX: number;
        rotateY: number;
        rotateZ: number;
        glowX: number;
        glowY: number;
        isHovering: boolean;
    }

    let variables: TiltVariables = {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        glowX: 50,
        glowY: 50,
        isHovering: false
    };

    export const tilt = (node: HTMLElement) => {
        let bounds: TiltBounds;

        const rotateToMouse = (e: MouseEvent) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const leftX = mouseX - bounds.x;
            const topY = mouseY - bounds.y;
            const center: CenterPoint = {
                x: leftX - bounds.width / 2,
                y: topY - bounds.height / 2
            };
            const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

            node.style.transform = `
            scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

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

        function handleMouseenter(): void {
            bounds = node.getBoundingClientRect();
            document.addEventListener('mousemove', rotateToMouse);
        }

        function handleMouseleave(): void {
            document.removeEventListener('mousemove', rotateToMouse);
            node.style.transform = '';
            const glowElement = node.querySelector('.glow') as HTMLElement | null;
            if (glowElement) {
                glowElement.style.backgroundImage = '';
            }
        }

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

<div class="perspective-[1500px]">
    <div
        class={classNames(
            'relative z-10 flex aspect-[3.65/5.72] max-w-sm flex-col gap-1 overflow-hidden rounded-2xl bg-[#27272A] p-1 shadow-lg transition-transform',
            'before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-white/30 before:to-transparent',
            '[transform:rotate-3d(0)] [transition-property:transform,_box-shadow] duration-300 ease-out',
            'hover:[box-shadow:_0_5px_20px_5px_#00000044] hover:duration-150'
        )}
        use:tilt
    >
        <div
            class="border-offset font-aeonik-fono text-micro bg-subtle relative z-10 flex h-9 w-full items-center justify-between rounded-xl border p-2 uppercase"
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
                    d="M8.85993 15.9082C9.1532 16.1887 9.42886 16.3008 9.67815 16.3008C9.92743 16.3008 10.2031 16.1887 10.4964 15.9082C10.7921 15.6254 11.0813 15.1923 11.335 14.6187C11.7947 13.5793 12.1058 12.1513 12.1596 10.5412L7.19664 10.5412C7.25046 12.1513 7.56154 13.5793 8.02129 14.6187C8.27499 15.1923 8.56414 15.6254 8.85993 15.9082ZM6.19613 10.5412C6.25014 12.2655 6.5818 13.8363 7.10675 15.0232C7.24724 15.3408 7.40393 15.6363 7.57643 15.9022C5.46084 15.0694 3.90506 13.0155 3.71892 10.5412L6.19613 10.5412ZM3.71892 9.54119L6.19613 9.54118C6.25014 7.81689 6.5818 6.24603 7.10675 5.05917C7.24724 4.74154 7.40393 4.44609 7.57643 4.18017C5.46084 5.01297 3.90505 7.06689 3.71892 9.54119ZM7.19664 9.54118L12.1596 9.54118C12.1058 7.93106 11.7948 6.5031 11.335 5.46367C11.0813 4.89009 10.7921 4.45701 10.4964 4.17415C10.2031 3.89371 9.92743 3.78158 9.67815 3.78158C9.42886 3.78158 9.1532 3.89371 8.85993 4.17415C8.56414 4.45701 8.27499 4.89009 8.02129 5.46367C7.56154 6.5031 7.25046 7.93106 7.19664 9.54118ZM13.1602 9.54118C13.1061 7.81689 12.7745 6.24603 12.2495 5.05917C12.109 4.74154 11.9524 4.44609 11.7799 4.18017C13.8955 5.01297 15.4512 7.06689 15.6374 9.54118L13.1602 9.54118ZM15.6374 10.5412C15.4512 13.0155 13.8955 15.0694 11.7799 15.9022C11.9524 15.6363 12.109 15.3408 12.2495 15.0232C12.7745 13.8363 13.1061 12.2655 13.1602 10.5412L15.6374 10.5412ZM16.6561 10.0412C16.6561 6.05208 13.5518 2.78158 9.67815 2.78158C5.80449 2.78158 2.7002 6.05208 2.7002 10.0412C2.7002 14.0303 5.80449 17.3008 9.67815 17.3008C13.5518 17.3008 16.6561 14.0303 16.6561 10.0412Z"
                    fill="#E4E4E7"
                />
            </svg>
            <span>https://appwrite.io/init/tickets/{id}</span>
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.4 7H5.6C5.03995 7 4.75992 7 4.54601 7.10899C4.35785 7.20487 4.20487 7.35785 4.10899 7.54601C4 7.75992 4 8.03995 4 8.6V14.4C4 14.9601 4 15.2401 4.10899 15.454C4.20487 15.6422 4.35785 15.7951 4.54601 15.891C4.75992 16 5.03995 16 5.6 16H11.4C11.9601 16 12.2401 16 12.454 15.891C12.6422 15.7951 12.7951 15.6422 12.891 15.454C13 15.2401 13 14.9601 13 14.4V8.6C13 8.03995 13 7.75992 12.891 7.54601C12.7951 7.35785 12.6422 7.20487 12.454 7.10899C12.2401 7 11.9601 7 11.4 7Z"
                    stroke="#ADADB0"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M7 5.125V5C7 4.44772 7.44772 4 8 4H15C15.5523 4 16 4.44772 16 5V12C16 12.5523 15.5523 13 15 13H14.875"
                    stroke="#ADADB0"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
        <div class="relative z-10 flex flex-1 flex-col rounded-xl bg-[#19191C] p-2">
            <img
                src="/images/logos/appwrite.svg"
                alt="appwrite"
                class="mt-3 ml-2 h-4 w-auto self-start"
            />
            <div class="flex flex-1 items-center">
                <Lockup class="w-full" />
            </div>
            <!-- <div class="absolute inset-x-0 top-0 z-0">
            {#await contributions then c}
                {#if c && show_contributions}
                    <div class="flex flex-wrap gap-1" out:fade={{ duration: 100 }}>
                        {#each c as row}
                            {#each row as level, index}
                                <div
                                    class={classNames('grid-block size-2', {
                                        'opacity-8': level === 0,
                                        'opacity-25': level === 1,
                                        'opacity-50': level === 2,
                                        'opacity-75': level === 3
                                    })}
                                    style:animation-delay={`${(index + 1) * 100 + 250}ms`}
                                />
                            {/each}
                        {/each}
                    </div>
                {/if}
            {/await}
        </div> -->

            <div>
                <h3>{firstName}</h3>
            </div>

            <div
                class="font-aeonik-fono border-offset text-x-micro relative z-10 flex items-center justify-between rounded-lg border-2 border-dashed bg-black p-2 uppercase"
            >
                <span>Launch Week <span class="text-accent">/</span> FEB X - X</span>
                <span
                    >Ticket <span class="text-accent">#</span>{id.toString().padStart(6, '0')}</span
                >
            </div>

            <div
                class="absolute inset-0 top-0 min-h-full w-full bg-[radial-gradient(rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:60px_60px]"
            />
        </div>
        <div class="glow absolute inset-0 z-10" />
    </div>
</div>
