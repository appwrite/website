<script lang="ts">
    import { toScale } from '$lib/utils/toScale';
    import { quadInOut } from 'svelte/easing';
    import { spring } from 'svelte/motion';
    import { fade, type TransitionConfig } from 'svelte/transition';
    import Glow from '../(assets)/glow.svg';
    import Logo from '../(assets)/logo.svg';
    import BgPink from '../(assets)/ticket-bg-pink.svg';
    import BgRainbow from '../(assets)/ticket-bg-rainbow.svg';
    import Bg from '../(assets)/ticket-bg.svg';
    import type { ContributionsMatrix, TicketData } from '../tickets/constants';

    type $$Props = Omit<TicketData, '$id' | 'contributions'> & {
        contributions?: Promise<ContributionsMatrix> | ContributionsMatrix;
        disableEffects?: boolean;
    };
    $: ({
        name,
        gh_user,
        id,
        tribe = null,
        contributions,
        variant = 'default',
        show_contributions = true,
        disableEffects = false
    } = $$props as $$Props);

    $: bg = {
        default: Bg,
        pink: BgPink,
        rainbow: BgRainbow
    }[variant];

    function getTribeSource(tribe: string) {
        if (variant === 'rainbow') {
            return `/images/tribes/rainbow/${tribe?.toLowerCase()}.svg`;
        }
        return `/images/tribes/${tribe?.toLowerCase()}.svg`;
    }

    /* Animation details */
    let removeDelay = false;
    $: if (!show_contributions) {
        removeDelay = true;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function appear(_node: HTMLElement): TransitionConfig {
        return {
            css(t, u) {
                return `
                    opacity: ${toScale(u, [1, 0], variant === 'rainbow' ? [1, 0.5] : [0.32, 0.04])};
                `;
            },
            duration: 400,
            easing: quadInOut
        };
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

    function mouse(node: HTMLElement) {
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

        --background-x: ${$springBackground.x}%;
        --background-y: ${$springBackground.y}%;
	`;
</script>

<div class="wrapper">
    {#if variant === 'pink' && !disableEffects}
        <img class="glow" src={Glow} alt="" />
    {/if}
    <div class="ticket" data-variant={variant} use:mouse style={styles}>
        <img src={bg} alt="" class="bg" />
        <p class="text-title font-aeonik-pro text-primary">{name?.trim() || '-'}</p>
        {#if gh_user}
            <p class="text-label">@{gh_user}</p>
        {/if}
        <div class="bottom-left">
            <img src={Logo} alt="init_" />
            <span>FEB 26 - MAR 1</span>
        </div>

        <div class="id">
            <span>#{id?.toString().padStart(6, '0')}</span>
        </div>

        {#key `${tribe}-${variant}`}
            {#if tribe}
                <img
                    class="tribe"
                    src={getTribeSource(tribe)}
                    alt={tribe}
                    style:display={tribe ? undefined : 'none'}
                    in:appear|global
                />
            {/if}
        {/key}

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

        <div class="frufru">
            <svg viewBox="0 0 460 644" fill="none" xmlns="http://www.w3.org/2000/svg">
                <clipPath id="clip" clipPathUnits="objectBoundingBox">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0,0.025 C0,0.011,0.016,0,0.035,0 H0.965 C0.984,0,1,0.011,1,0.025 V0.975 C1,0.989,0.984,1,0.965,1 H0.035 C0.016,1,0,0.989,0,0.975 V0.025 M0.413,0.031 C0.413,0.028,0.417,0.025,0.422,0.025 H0.578 C0.583,0.025,0.587,0.028,0.587,0.031 C0.587,0.034,0.583,0.037,0.578,0.037 H0.422 C0.417,0.037,0.413,0.034,0.413,0.031"
                        fill="black"
                    />
                </clipPath>
            </svg>
            <div class="shine"></div>
            <div class="glare"></div>
        </div>
    </div>
</div>

<style lang="scss">
    @use 'sass:math';

    $base-width: 28.75;

    @function adjusted($value) {
        @return #{math.div($value, $base-width)}em;
    }

    .frufru {
        position: absolute;
        inset: 0;

        svg {
            position: absolute;
            inset: 0;
        }
    }

    .shine,
    .glare {
        will-change:
            transform, opacity, background-image, background-size, background-position,
            background-blend-mode, filter;
        border-radius: adjusted(1);
        border-bottom-left-radius: adjusted(1.2);
        clip-path: url(#clip);
    }

    .shine {
        position: absolute;
        inset: 0;

        display: grid;
        transform: translateZ(1px);
        overflow: hidden;
        z-index: 3;
        background: transparent;
        background-size: cover;
        background-position: center;
        filter: brightness(0.85) contrast(2.75) saturate(0.65);
        mix-blend-mode: color-dodge;
        opacity: var(--card-opacity);
    }

    .glare {
        position: absolute;
        inset: 0;

        transform: translateZ(1px);
        z-index: 4;
        background: radial-gradient(
            farthest-corner circle at var(--mx) var(--my),
            rgba(255, 255, 255, 0.8) 10%,
            rgba(255, 255, 255, 0.65) 20%,
            rgba(0, 0, 0, 0.5) 90%
        );
        mix-blend-mode: overlay;
        opacity: calc(var(--o) * 0.2);
    }

    [data-variant='rainbow'] {
        .bottom-left img {
            filter: brightness(0) invert(1);
        }

        .shine {
            --space: 4.5%;
            --angle: 15deg;
            --imgsize: 300% 400%;
            background-image: repeating-linear-gradient(
                var(--angle),
                hsla(283, 49%, 60%, 0.75) calc(var(--space) * 1),
                hsla(2, 74%, 59%, 0.75) calc(var(--space) * 2),
                hsla(53, 67%, 53%, 0.75) calc(var(--space) * 3),
                hsla(93, 56%, 52%, 0.75) calc(var(--space) * 4),
                hsla(176, 38%, 50%, 0.75) calc(var(--space) * 5),
                hsla(228, 100%, 77%, 0.75) calc(var(--space) * 6),
                hsla(283, 49%, 61%, 0.75) calc(var(--space) * 7)
            );
            background-blend-mode: color-dodge;
            background-size: var(--imgsize);
            background-position:
                0% calc(var(--background-y) * 1),
                var(--background-x) var(--background-y);
            filter: brightness(calc((var(--pointer-from-center) * 0.3) + 0.5)) contrast(2.3)
                saturate(1);

            &::after {
                position: absolute;
                inset: 0;

                content: '';
                background-image: radial-gradient(
                    farthest-corner ellipse at calc(((var(--pointer-x)) * 0.5) + 25%)
                        calc(((var(--pointer-y)) * 0.5) + 25%),
                    hsl(0, 0%, 100%) 5%,
                    hsla(300, 100%, 11%, 0.6) 40%,
                    hsl(0, 0%, 22%) 120%
                );
                background-position: center center;
                background-size: 400% 500%;
                filter: brightness(calc((var(--pointer-from-center) * 0.2) + 0.4)) contrast(0.85)
                    saturate(1.1);
                mix-blend-mode: hard-light;
            }
        }

        .glare {
            opacity: var(--o);

            background-image: radial-gradient(
                farthest-corner circle at var(--pointer-x) var(--pointer-y),
                hsla(0, 0%, 100%, 1) 10%,
                hsla(0, 0%, 100%, 0.6) 35%,
                hsla(180, 11%, 35%, 1) 60%
            );
            mix-blend-mode: soft-light;
        }
    }

    .wrapper {
        position: relative;
        font-size: var(--base-width, var(--base-width-default));
        overflow: visible;

        perspective: 600px;
    }

    .glow {
        position: absolute;
        inset-block-start: adjusted(-12);
        inset-inline-end: adjusted(-12);
        max-inline-size: unset;
        max-block-size: unset;
        inline-size: 160%;
        z-index: -1;
    }

    .ticket {
        --base-width-default: clamp(12rem, 40vw, #{$base-width}rem);
        width: var(--base-width, var(--base-width-default));
        aspect-ratio: 460 / 644;

        padding: adjusted(2);
        padding-block-start: adjusted(3.5);
        position: relative;
        border-radius: adjusted(1);
        overflow: hidden;

        transition: transform 100ms;
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotateY(var(--rx)) rotateX(var(--ry));
        transform: rotateY(var(--rx)) rotateX(var(--ry));
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }

    .bg {
        position: absolute;
        inset: 0;
        z-index: -1;
    }

    .text-label {
        font-size: adjusted(1.5);
        line-height: #{math.div(28, 24)}em;
        margin-block-start: adjusted(0.25);
    }

    .bottom-left {
        position: absolute;
        inset-block-end: adjusted(2);
        inset-inline-start: adjusted(2);

        display: flex;
        flex-direction: column;
        gap: adjusted(0.5);

        img {
            width: adjusted(5.6875);
        }

        span {
            font-family: var(--web-font-family-aeonik-fono);
            color: hsl(var(--web-color-primary));
            font-size: adjusted(0.875);
            font-style: normal;
            font-weight: 400;
            line-height: 114.286%;
        }
    }

    .id {
        position: absolute;
        inset-block-end: adjusted(2);
        inset-inline-end: adjusted(2);
        display: grid;
        place-items: center;

        span {
            color: rgba(255, 255, 255, 0.5);
            font-family: var(--web-font-family-aeonik-fono);
            font-size: adjusted(0.875);
            font-style: normal;
            font-weight: 400;
            line-height: 114.286%;
        }
    }

    .tribe {
        position: absolute;
        inset-block-end: adjusted(-6);
        inset-inline-start: adjusted(-8);

        width: adjusted(28.75);
        /* Make it white */
        filter: brightness(0) invert(1);
        opacity: 0.04;

        [data-variant='rainbow'] & {
            opacity: 0.5;
        }
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

    .github {
        --delay: 700ms;
        display: flex;
        flex-direction: column;
        gap: adjusted(0.25);

        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;

        mask-image: linear-gradient(to left, hsl(240, 3%, 14%), transparent);

        &[data-remove-delay] {
            --delay: 0ms;
        }

        .row {
            display: flex;
            gap: adjusted(0.25);

            div {
                --size: #{adjusted(0.5275)};
                width: var(--size);
                height: var(--size);

                border-radius: calc(var(--size) / 4);
                animation: fade-in 500ms ease calc(calc(75ms * var(--index)) + var(--delay))
                    forwards;

                &[data-level] {
                    --bg-color: var(--web-color-accent);

                    [data-variant='rainbow'] & {
                        --bg-color: 0 0% 90%;
                    }
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
</style>
