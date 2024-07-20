<script lang="ts">
    import { spring } from 'svelte/motion';
    import type { ContributionsMatrix, TicketData } from '../tickets/constants';
    import Lockup from './Lockup.svelte';
    import Lines from './Lines.svelte';
    import { fade } from 'svelte/transition';

    type $$Props = Omit<TicketData, '$id' | 'contributions'> & {
        contributions?: Promise<ContributionsMatrix> | ContributionsMatrix;
        disableEffects?: boolean;
    };
    $: ({
        name,
        title,
        id,
        aw_email,
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
    let springGlare = spring({ x: 50, y: 50, o: 0.25 }, springR);
    let springBackground = spring({ x: 50, y: 50 }, springR);
    let hovering = false;

    const round = (num: number, fix = 3) => parseFloat(num.toFixed(fix));
    const clamp = (num: number, min = -20, max = 20) => Math.min(Math.max(num, min), max);
    const adjust = (
        value: number,
        fromMin: number,
        fromMax: number,
        toMin: number,
        toMax: number
    ) => {
        return round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));
    };

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
                x: percent.x,
                y: percent.y,
                o: 1
            });

            springBackground.stiffness = springR.stiffness;
            springBackground.damping = springR.damping;
            springBackground.set({
                x: adjust(percent.x, 0, 100, 37, 63),
                y: adjust(percent.y, 0, 100, 33, 67)
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
            springGlare.set({ x: 50, y: 50, o: 0 });

            springBackground.stiffness = snapStiff;
            springBackground.damping = snapDamp;
            springBackground.set({ x: 50, y: 50 }, { soft: 1 });

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
            <p class="web-title web-u-color-text-primary">
                {name?.trim() || '-'}
            </p>

            <p class="web-label">{title}</p>

            <div class="logo" style:width="75%">
                <Lockup fill={false} animate={!disableEffects} />
            </div>
            <div class="shine" />
            <div class="noise" />
            <Lines />
        </div>
        <div class="stub" class:pink={aw_email}>
            {#await contributions then c}
                {#if c && show_contributions}
                    <div
                        class="github"
                        out:fade={{ duration: 100 }}
                        data-remove-delay={removeDelay ? '' : undefined}
                    >
                        {#each c as row}
                            <div class="row">
                                {#each row as level, i}
                                    <div style:--index={row.length - i} data-level={level} />
                                {/each}
                            </div>
                        {/each}
                    </div>
                {/if}
            {/await}
            <div class="details">
                <span>Init 2.0</span>
                <span>{`Ticket Number: #${id?.toString().padStart(6, '0')}`}</span>
            </div>
            <div class="shine" />
            <div class="noise" />
        </div>
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract' as *;
    $base-width: 22;

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

    .wrapper {
        position: relative;
        font-size: var(--base-width, var(--base-width-default));
        width: 100%;
        perspective: 600px;
        animation: fade 1s ease-out;
        z-index: 100;
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
        opacity: 0.8;
        background-image: url('/images/tickets/shine.svg');
        mix-blend-mode: hard-light;
    }

    .noise {
        background-size: cover;
        opacity: 0.7;
        background-image: url('/images/tickets/noise.png');
    }

    .ticket {
        display: flex;
        gap: 4px;
        overflow: hidden;
        border-radius: pxToRem(16);
        min-width: 50vw;
        width: 100%;

        transition: transform 100ms;
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotateY(var(--rx)) rotateX(var(--ry));
        transform: rotateY(var(--rx)) rotateX(var(--ry));
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        overflow: hidden;
    }

    .stub {
        background: #000;
        width: 20%;
        border-radius: pxToRem(16);
        line-height: 1;
        position: relative;
        overflow: hidden;

        &.pink {
            color: white;
            background: linear-gradient(
                135deg,
                hsl(var(--web-color-pink-500)) 0%,
                hsl(var(--web-color-pink-500)) 61%,
                hsl(var(--web-color-secondary-100)) 100%
            );
        }

        .shine {
            background-position: 25% -120px;
            background-size: 500%;
            opacity: 0.5;
        }

        .noise {
            background-position: bottom right;
        }

        .details {
            transform-origin: center;
            position: absolute;
            inset: 0;
            display: grid;
            align-items: center;
            margin-left: 50px;
            gap: 4px;
            padding: pxToRem(20) 0;
            grid-template-columns: max-content;

            span {
                font-family: var(--web-font-family-aeonik-fono);
                font-size: pxToRem(12);
                transform: rotate(90deg);
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
            gap: pxToRem(8);

            position: absolute;
            inset-block-start: 0;
            inset-inline-end: 50px;

            mask-image: linear-gradient(to left, hsl(240, 3%, 14%), transparent);

            &[data-remove-delay] {
                --delay: 0ms;
            }

            .row {
                display: flex;
                gap: pxToRem(8);

                div {
                    --size: 8px;
                    width: var(--size);
                    height: var(--size);

                    border-radius: calc(var(--size) / 4);
                    animation: fade-in 500ms ease calc(calc(75ms * var(--index)) + var(--delay))
                        forwards;

                    &[data-level] {
                        --bg-color: white;
                    }

                    &[data-level='0'] {
                        opacity: 0;
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
                }
            }
        }
    }

    .lockup {
        --base-width-default: clamp(12rem, 60vw, #{$base-width}rem);
        height: var(--base-width, var(--base-width-default));
        width: 80%;
        background: #000;
        padding: pxToRem(24);
        position: relative;
        border-radius: pxToRem(16);
        overflow: hidden;

        .shine {
            background-size: 150%;
        }

        .logo {
            position: absolute;

            transform: translateY(30%);
            z-index: 10;
        }
    }

    .web-title {
        font-size: pxToRem(24);
        line-height: 1;
    }

    .web-label {
        font-size: pxToRem(16);

        margin-block-start: pxToRem(0.25);
    }

    @keyframes -global-fade-in {
        from {
            background-color: rgba(255, 255, 255, 0);
        }
        to {
            background-color: rgba(255, 255, 255, 1);
        }
    }
</style>
