<script lang="ts">
    import type { ContributionsMatrix, TicketData } from '$routes/init/tickets/constants';
    import { spring } from 'svelte/motion';
    import staticLockup from '../../(assets)/static-lockup.svg';

    import { fade } from 'svelte/transition';
    import Lockup from '../Lockup.svelte';
    import Lines from '../Lines.svelte';

    type $$Props = Omit<TicketData, '$id' | 'contributions'> & {
        contributions?: Promise<ContributionsMatrix> | ContributionsMatrix;
        disableEffects?: boolean;
    };
    $: ({
        name,
        title,
        id,
        contributions,
        show_contributions = true,
        disableEffects = false
    } = $$props as $$Props);

    /* Animation details */
    let removeDelay = false;
    $: if (!show_contributions) {
        removeDelay = true;
    }

    const springR = { stiffness: 0.066, damping: 0.25 };

    let springRotate = spring({ x: 0, y: 0 }, springR);
    let springGlare = spring({ x: 0, y: 0, o: 0.25 }, springR);
    let hovering = false;

    const round = (num: number, fix = 3) => parseFloat(num.toFixed(fix));
    const clamp = (num: number, min = -20, max = 20) => Math.min(Math.max(num, min), max);

    function isTouchEvent(e: MouseEvent | TouchEvent): e is TouchEvent {
        return e.type === 'touchmove';
    }

    function onMouse(node: HTMLElement) {
        if (disableEffects) return;
        const mouseMove = (e: MouseEvent) => {
            const clientX = isTouchEvent(e) ? e.touches[0].clientX : e.clientX;
            const clientY = isTouchEvent(e) ? e.touches[0].clientY : e.clientY;

            const el = e.target as HTMLElement;
            const rect = el.getBoundingClientRect(); // get element's current size/position
            const absolute = {
                x: clientX - rect.left, // get mouse position from left
                y: clientY - rect.top // get mouse position from right
            };
            const percent = {
                x: round((100 / rect.width) * absolute.x),
                y: round((100 / rect.height) * absolute.y)
            };
            const center = {
                x: percent.x - 50,
                y: percent.y - 50
            };

            springRotate.stiffness = springR.stiffness;
            springRotate.damping = springR.damping;
            springRotate.set({
                x: round(-(center.x / 7)),
                y: round(center.y / 10)
            });

            springGlare.stiffness = springR.stiffness;
            springGlare.damping = springR.damping;
            springGlare.set({
                x: round(percent.x / 8),
                y: round(percent.y / 10),
                o: 0.2
            });

            hovering = true;
        };
        const mouseLeave = () => {
            if (disableEffects) return;

            const snapStiff = 0.05;
            const snapDamp = 0.5;

            springRotate.stiffness = snapStiff;
            springRotate.damping = snapDamp;
            springRotate.set({ x: 0, y: 0 });

            springGlare.stiffness = snapStiff;
            springGlare.damping = snapDamp;
            springGlare.set({ x: 0, y: 0, o: 0 });

            hovering = false;
        };

        node.addEventListener('mousemove', mouseMove);
        node.addEventListener('mouseleave', mouseLeave);

        return {
            destroy() {
                node.removeEventListener('mousemove', mouseMove);
                node.removeEventListener('mouseleave', mouseLeave);
            }
        };
    }

    $: styles = `
		--rx: ${$springRotate.x}deg;
		--ry: ${$springRotate.y}deg;
        --opacity: ${hovering ? 1 : 0};
        --mx: ${$springGlare.x}%;
		--my: ${$springGlare.y}%;
        --pointer-x: ${$springGlare.x}%;
        --pointer-y: ${$springGlare.y}%;
        --pointer-from-top: ${$springGlare.y / 100};
        --pointer-from-left: ${$springGlare.x / 100};
		--o: ${$springGlare.o};
        --card-opacity: ${$springGlare.o};
        --pointer-from-center: ${clamp(
            Math.sqrt(
                ($springGlare.y - 50) * ($springGlare.y - 50) +
                    ($springGlare.x - 50) * ($springGlare.x - 50)
            ) / 50,
            0,
            1
        )};
	`;
</script>

<div class="wrapper">
    <div class="ticket" use:onMouse style={styles}>
        <div class="lockup">
            <p class="text-title font-aeonik-pro text-primary">
                {name?.trim() || '-'}
            </p>

            <p class="text-label">{title}</p>

            <div class="logo" style:width="75%">
                {#if disableEffects}
                    <img src={staticLockup} alt="Init" style:margin-left="-20px" />
                {:else}
                    <Lockup fill={false} animate={!disableEffects} />
                {/if}
            </div>
            <div class="shine"></div>
            <div class="noise"></div>
            {#if !disableEffects}
                <Lines />
            {/if}
        </div>
        <div class="stub">
            {#await contributions then c}
                {#if c && show_contributions}
                    <div
                        class="github"
                        out:fade={{ duration: 100 }}
                        data-remove-delay={removeDelay ? '' : undefined}
                    >
                        {#each c as row}
                            <div class="row">
                                {#each row as level, j}
                                    <div style:--index={row.length - j} data-level={level}></div>
                                {/each}
                            </div>
                        {/each}
                    </div>
                {/if}
            {/await}
            <div class="details">
                <span>{`Ticket Number: #${id?.toString().padStart(6, '0')}`}</span>
            </div>
            <div class="shine"></div>
            <div class="noise"></div>
        </div>
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract/functions' as f;
    $base-width: 22;

    .wrapper {
        position: relative;
        font-size: var(--base-width, var(--base-width-default));
        width: 100%;
        perspective: 600px;
        animation: fade 1s ease-out;
        z-index: 100;
    }

    @keyframes fade {
        0% {
            opacity: 0;
            filter: blur(4px);
            transform: rotateX(15deg) rotateY(-10deg);
        }
        100% {
            opacity: 1;
            filter: blur(0px);
            transform: rotateX(0deg) rotateY(0deg);
        }
    }

    .shine,
    .noise {
        background-repeat: no-repeat;
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
        z-index: 2;
    }

    .shine {
        opacity: 0.5;
        background-image: url('/images/tickets/shine.svg');
        mix-blend-mode: hard-light;
        background-position: var(--pointer-x) var(--pointer-y);
    }

    .noise {
        background-size: cover;
        opacity: 0.7;
        background-image: url('/images/tickets/noise.png');
    }

    .ticket {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        gap: 4px;
        overflow: hidden;
        border-radius: f.pxToRem(16);
        aspect-ratio: 2 / 1;
        animation: fade 1s ease-out;
        transition: transform 100ms;
        transform-origin: center;
        transform: rotateY(var(--rx)) rotateX(var(--ry));
        transform-style: preserve-3d;
        overflow: hidden;
        .stub {
            background: #000;
            grid-column: 10 / -1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: f.pxToRem(8);
            line-height: 1;
            position: relative;
            overflow: hidden;

            .shine {
                background-position: 25% -120px;
                background-size: 500%;
                opacity: 0.5;
                transform-origin: center;
            }

            .noise {
                background-position: bottom right;
            }

            .details {
                transform-origin: center;
                position: absolute;
                inset: 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: fit-content;
                gap: 4px;
                padding: f.pxToRem(24) 0;
                left: 80%;

                span {
                    font-family: var(--web-font-family-aeonik-fono);
                    font-size: clamp(8px, 1vw, 12px);
                    writing-mode: vertical-lr;
                    transform-origin: center;
                    width: 100%;
                    text-transform: uppercase;
                    display: inline-block;
                }
            }

            .github {
                --delay: 700ms;
                display: flex;
                flex-direction: column;
                gap: f.pxToRem(4);
                width: 60%;
                margin: f.pxToRem(16);
                border-radius: f.pxToRem(16);

                &[data-remove-delay] {
                    --delay: 0ms;
                }

                .row {
                    gap: f.pxToRem(4);
                    display: flex;

                    div {
                        --size: 3px;
                        width: var(--size);
                        height: var(--size);
                        flex-shrink: 0;

                        border-radius: calc(var(--size) / 4);
                        animation: fade-in 500ms ease calc(calc(75ms * var(--index)) + var(--delay))
                            forwards;

                        @media screen and (min-width: 768px) {
                            --size: 8px;
                        }

                        &[data-level] {
                            --bg-color: var(--web-color-accent);
                        }

                        &[data-level='0'] {
                            opacity: 0.08;
                        }

                        &[data-level='1'] {
                            opacity: 0.25;
                        }

                        &[data-level='2'] {
                            opacity: 0.5;
                        }

                        &[data-level='3'] {
                            opacity: 0.75;
                        }

                        &[data-level='4'] {
                            opacity: 1;
                        }

                        @keyframes fade-in {
                            from {
                                background-color: hsl(var(--bg-color) / 0);
                                /* border: 1px solid hsl(var(--border-color, transparent) / 0); */
                            }
                            to {
                                background-color: hsl(var(--bg-color) / 1);
                                /* border: 1px solid hsl(var(--border-color, transparent) / 1); */
                            }
                        }
                    }
                }
            }
        }

        .lockup {
            grid-column: span 9 / span 9;
            height: 100%;
            background: #000;
            padding: f.pxToRem(20);
            position: relative;
            border-radius: f.pxToRem(16);
            overflow: hidden;

            .text-label {
                position: absolute;
                font-size: clamp(12px, 1vw, 16px);
            }

            .shine {
                background-size: 150%;
            }

            .logo {
                position: absolute;
                left: 48px;

                transform: translateY(75%) translateX(-10%);
                z-index: 10;

                @media screen and (min-width: 768px) {
                    transform: translateY(50%) translateX(-5%);
                }
            }
        }
    }
</style>
