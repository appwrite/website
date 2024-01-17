<script lang="ts">
    import { toScale } from '$lib/utils/toScale';
    import { quadInOut } from 'svelte/easing';
    import { fade, type TransitionConfig } from 'svelte/transition';
    import Glow from '../(assets)/glow.svg';
    import Logo from '../(assets)/logo.svg';
    import ShinePink from '../(assets)/shine-pink.svg';
    import ShineSvg from '../(assets)/shine.svg';
    import BgRainbow from '../(assets)/ticket-bg-rainbow.svg';
    import BgPink from '../(assets)/ticket-bg-pink.svg';
    import Bg from '../(assets)/ticket-bg.svg';
    import type { TicketData } from '../ticket/constants';
    import { spring } from 'svelte/motion';

    type $$Props = Omit<TicketData, '$id'>;
    $: ({
        name,
        gh_user,
        id,
        tribe = null,
        contributions,
        variant = 'default',
        show_contributions = true
    } = $$props as $$Props);

    $: bg = {
        default: Bg,
        pink: BgPink,
        rainbow: BgRainbow
    }[variant];

    $: shine = {
        default: ShineSvg,
        pink: ShinePink,
        rainbow: ShineSvg
    }[variant];

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
    const springD = { stiffness: 0.03, damping: 0.45 };

    let springRotate = spring({ x: 0, y: 0 }, springR);
    let springBg = spring({ x: 0, y: 0 }, springD);
    let hovering = false;

    const round = (num: number, fix = 3) => parseFloat(num.toFixed(fix));
    const clamp = (num: number, min = -20, max = 20) => Math.min(Math.max(num, min), max);

    function isTouchEvent(e: MouseEvent | TouchEvent): e is TouchEvent {
        return e.type === 'touchmove';
    }

    function mouse(node: HTMLElement) {
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

            // springBackground.stiffness = springR.stiffness;
            // springBackground.damping = springR.damping;
            // springBackground.set({
            //     x: round(50 + percent.x / 4 - 12.5),
            //     y: round(50 + percent.y / 3 - 16.67)
            // });
            springRotate.stiffness = springR.stiffness;
            springRotate.damping = springR.damping;
            springRotate.set({
                x: round(-(center.x / 7)),
                y: round(center.y / 10)
            });
            springBg.set({
                x: percent.x / 5,
                y: percent.y / 5
            });

            // springGlare.stiffness = springR.stiffness;
            // springGlare.damping = springR.damping;
            // springGlare.set({
            //     x: percent.x,
            //     y: percent.y,
            //     o: 1
            // });

            // // get angle of mouse position relative to center of element
            // angle = Math.atan2(center.y, center.x) * (180 / Math.PI);

            // // get proximity to center of element. 0 = center, 1 = edge
            // $centerProximity = Math.sqrt(center.x * center.x + center.y * center.y) / 50 - 0.1;
            hovering = true;
        };
        const mouseLeave = () => {
            const snapStiff = 0.05;
            const snapDamp = 0.5;

            springRotate.stiffness = snapStiff;
            springRotate.damping = snapDamp;
            springRotate.set({ x: 0, y: 0 });

            springBg.stiffness = snapStiff;
            springBg.damping = snapDamp;
            springBg.set({ x: 0, y: 0 });
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
        --bg-x: ${$springBg.x}%;
        --bg-y: ${$springBg.y}%;
        --opacity: ${hovering ? 1 : 0};
        
	`;
</script>

<div class="wrapper">
    {#if variant === 'pink'}
        <img class="glow" src={Glow} alt="" />
    {/if}
    <div class="ticket" data-variant={variant} use:mouse style={styles}>
        <img src={bg} alt="" class="bg" />
        <p class="aw-title aw-u-color-text-primary">{name?.trim() || '-'}</p>
        {#if gh_user}
            <p class="aw-label">@{gh_user}</p>
        {/if}
        <div class="bottom-left">
            <img src={Logo} alt="init_" />
            <span>JAN 22 - 27</span>
        </div>

        <div class="id">
            <span>#{id.toString().padStart(6, '0')}</span>
        </div>

        {#key tribe}
            {#if tribe}
                <img
                    class="tribe"
                    src="/images/tribes/{variant === 'rainbow'
                        ? 'rainbow'
                        : ''}/{tribe?.toLowerCase()}.svg"
                    alt={tribe}
                    style:display={tribe ? undefined : 'none'}
                    in:appear|global
                />
            {/if}
        {/key}

        {#if contributions && show_contributions}
            <div class="github" out:fade={{ duration: 100 }}>
                {#each contributions as row}
                    <div class="row">
                        {#each row as level, j}
                            <div style:--index={row.length - j} data-level={level} />
                        {/each}
                    </div>
                {/each}
            </div>
        {/if}

        <!-- <img class="shine" src={shine} alt="" /> -->
    </div>
</div>

<style lang="scss">
    @use 'sass:math';

    $base-width: 28.75;

    @function adjusted($value) {
        @return #{math.div($value, $base-width)}em;
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

    .shine {
        position: absolute;
        inset: 0;
    }

    .bg {
        position: absolute;
        inset: 0;
        z-index: -1;
    }

    .aw-title {
        font-size: adjusted(2.5);
        line-height: #{math.div(44, 40)}em;
    }

    .aw-label {
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
            font-family: var(--aw-font-family-aeonik-fono);
            color: hsl(var(--aw-color-primary));
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
            font-family: var(--aw-font-family-aeonik-fono);
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
        display: flex;
        flex-direction: column;
        gap: adjusted(0.25);

        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;

        mask-image: linear-gradient(to left, hsl(240, 3%, 14%), transparent);

        .row {
            display: flex;
            gap: adjusted(0.25);

            div {
                --size: #{adjusted(0.5275)};
                width: var(--size);
                height: var(--size);

                border-radius: calc(var(--size) / 4);
                animation: fade-in 500ms ease calc(calc(75ms * var(--index)) + 700ms) forwards;

                &[data-level] {
                    --bg-color: var(--aw-color-accent);

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
