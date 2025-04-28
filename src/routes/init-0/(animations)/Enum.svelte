<script lang="ts">
    import { onMount } from 'svelte';
    import LockSvg from './(assets)/lock.svg';
    import SafetySvg from './(assets)/safety.svg';
    import { animate, inView, spring } from 'motion';

    export let delay = 1;

    onMount(() => {
        inView('#enum-anim', () => {
            animate(
                '#enum-anim .icon-wrapper:not(:last-child)',
                {
                    opacity: [0, 1]
                },
                {
                    easing: spring({ mass: 1, stiffness: 100, damping: 15 }),
                    delay: delay
                }
            );
            animate(
                '#enum-anim .icon-wrapper:last-child',
                {
                    opacity: [0, 1],
                    y: 57
                },
                {
                    easing: spring({ mass: 1, stiffness: 100, damping: 15 }),
                    delay: delay
                }
            );

            [...new Array(4)].forEach((_, i) => {
                animate(
                    `#enum-anim .line:nth-child(${i + 1})`,
                    {
                        opacity: [0, 1]
                    },
                    {
                        easing: 'ease-out',
                        delay: delay + (0.2 * i + 1)
                    }
                );
            });
        });
    });
</script>

<div id="enum-anim" class="component">
    <div class="window">
        <div class="buttons">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
        <div class="window-bg"></div>

        <div class="lines">
            <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
            {#each { length: 4 } as _}
                <div class="line">
                    <div class="diamond-wrapper">
                        <div class="diamond"></div>
                    </div>
                    <div class="equals"></div>
                    <div class="rectangle"></div>
                </div>
            {/each}
        </div>
    </div>

    <div class="icon-wrapper">
        <img src={LockSvg} alt="lock" />
    </div>
    <div class="icon-wrapper">
        <img src={SafetySvg} alt="safety" />
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .component {
        width: 297px;
        height: 204.97px;
        position: relative;
    }

    .window {
        width: 238.44px;
        height: 204.97px;
        left: 58.56px;
        top: -0px;
        position: absolute;

        background: linear-gradient(
            180deg,
            rgba(34.63, 34.63, 36.77, 0.4) 0%,
            rgba(34.63, 34.63, 36.77, 0.24) 100%
        );
        box-shadow: 0px 2.247819185256958px 4.495638370513916px rgba(0, 0, 0, 0.02);
        backdrop-filter: blur(22.31px);

        @include gradients.border-gradient;
        --m-border-radius: 12px;
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.14) 0%,
            rgba(255, 255, 255, 0) 106.54%
        );
    }

    .buttons {
        display: flex;
        gap: 5px;
        left: 10.7px;
        top: 10.69px;
        position: absolute;
    }

    .circle {
        width: 8px;
        height: 8px;
        background: #ededf0;
        border-radius: 9999px;
    }

    .window-bg {
        width: 227.28px;
        height: 170.11px;
        left: 5.58px;
        top: 29.28px;
        position: absolute;
        background: rgba(255, 255, 255, 0.04);
        box-shadow: 0px 1.7886674404144287px 3.5773348808288574px rgba(0, 0, 0, 0.02);
        border-radius: 11.15px;
    }

    .lines {
        left: 22.31px;
        top: 46.01px;
        position: absolute;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 11.15px;
        display: inline-flex;
    }

    .line {
        justify-content: flex-start;
        align-items: center;
        gap: 7.48px;
        display: inline-flex;
        opacity: 0;

        &:nth-child(2) {
            * {
                opacity: 0.4;
            }

            .rectangle {
                width: 100px;
            }
        }

        &:nth-child(3) {
            * {
                opacity: 0.2;
            }

            .rectangle {
                width: 114px;
            }
        }

        &:nth-child(4) {
            * {
                opacity: 0.1;
            }
        }

        .diamond-wrapper {
            width: 25.64px;
            height: 25.64px;
            position: relative;

            .diamond {
                width: 16.73px;
                height: 16.73px;
                left: 12.83px;
                top: 0.74px;
                position: absolute;
                transform: rotate(45deg);
                transform-origin: 0 0;
                background: linear-gradient(180deg, #fd366e 0%, #fd576c 100%);
                border-radius: 4.18px;
            }
        }

        .equals {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 8.55px;
            height: 6px;
            gap: 2px;

            &::before,
            &::after {
                background: #ededf0;
                border-radius: 35.26px;
                width: 8.55px;
                height: 5.34px;
                content: '';
            }
        }

        .rectangle {
            width: 139.98px;
            height: 17.1px;
            background: linear-gradient(
                90deg,
                rgba(124, 103, 254, 0.7) 0%,
                rgba(124, 103, 254, 0) 100%
            );
            border-radius: 105.78px;
        }
    }

    .icon-wrapper {
        @include gradients.border-gradient;
        --m-border-radius: 1000px;
        --m-border-gradient-before: linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.14) 0%,
            rgba(255, 255, 255, 0) 106.54%
        );

        width: 66.93px;
        height: 66.93px;
        left: 0px;
        top: 0px;
        position: absolute;
        background: linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0.04) 62%
        );
        border-radius: 9999px;
        backdrop-filter: blur(22.16px);

        display: grid;
        place-items: center;
        z-index: 10;

        opacity: 0;

        &:last-child {
            z-index: 1;

            img {
                translate: 2px;
            }
        }
    }
</style>
