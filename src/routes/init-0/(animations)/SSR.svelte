<script lang="ts">
    import { onMount } from 'svelte';
    import GridSvg from './(assets)/grid.svg';
    import { animate, inView, spring } from 'motion';

    export let delay = 1;
    let wrapper: HTMLElement;
    let renderLine: HTMLElement;
    let blur: HTMLElement;

    onMount(() => {
        inView(wrapper, () => {
            animate(
                renderLine,
                {
                    y: 100
                },
                {
                    easing: spring({ mass: 1, stiffness: 100, damping: 15 }),
                    delay: delay
                }
            );

            animate(
                blur,
                {
                    top: '100px' // Need to use top, otherwise blur disappears on FF
                },
                {
                    easing: spring({ mass: 1, stiffness: 100, damping: 15 }),
                    delay: delay
                }
            );
        });
    });
</script>

<div class="wrapper" bind:this={wrapper}>
    <div class="interface">
        <div class="bg"></div>

        <div class="circles">
            <div class="circle"></div>
            <div class="circle" style="left: 16px;"></div>
            <div class="circle" style="left: 32px;"></div>
        </div>
        <div class="screenbg-wrapper">
            <div class="screenbg" style:--bg="url('{GridSvg}')">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="160"
                    viewBox="0 0 203 196"
                    fill="none"
                >
                    <rect
                        width="104.614"
                        height="104.614"
                        transform="matrix(0.965798 0.259298 -0.965798 0.259298 101.037 0.640625)"
                        fill="url(#paint0_linear_397_1469)"
                    />
                    <path
                        d="M202.071 168.564L101.035 195.69V54.8919L202.071 27.7656V168.564Z"
                        fill="url(#paint1_linear_397_1469)"
                    />
                    <path
                        d="M-0.00118256 168.564L101.035 195.69V54.8919L-0.00118256 27.7656V168.564Z"
                        fill="url(#paint2_linear_397_1469)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_397_1469"
                            x1="88.7581"
                            y1="77.7802"
                            x2="-414.737"
                            y2="-83.3163"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#FED367" />
                            <stop offset="1" stop-color="#FEE5A4" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_397_1469"
                            x1="151.358"
                            y1="27.9464"
                            x2="168.133"
                            y2="106.552"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#FFEDC2" />
                            <stop offset="1" stop-color="#FEE5A4" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_397_1469"
                            x1="50.9873"
                            y1="-306.494"
                            x2="50.712"
                            y2="228.654"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#FFEDC2" />
                            <stop offset="1" stop-color="#FED367" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div class="blur" bind:this={blur}></div>
        </div>
    </div>
    <div class="render-line" bind:this={renderLine}>
        <div class="tick"></div>
        <div class="line"></div>
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .wrapper {
        position: relative;
    }

    .render-line {
        width: 294px;
        height: 10px;
        position: absolute;
        top: 30px;
        left: -18px;

        .tick {
            width: 43.14px;
            height: 9.76px;
            left: 0px;
            top: 0px;
            position: absolute;
            background: #fd366e;
            border-radius: 12.32px;
        }

        .line {
            width: 251px;
            height: 0px;
            left: 40px;
            top: 4px;
            position: absolute;
            background: linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%);
            border: 1px #fd366e solid;
        }
    }

    .interface {
        width: 283px;
        height: 260px;
        position: relative;
        overflow: hidden;
    }

    .bg {
        width: 277px;
        height: 260px;
        left: 0px;
        top: 0px;
        position: absolute;
        background: linear-gradient(
            180deg,
            rgba(34.63, 34.63, 36.77, 0.4) 0%,
            rgba(34.63, 34.63, 36.77, 0.24) 100%
        );
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0px 2.484086751937866px 4.968173503875732px rgba(0, 0, 0, 0.02);
        backdrop-filter: blur(15.53px);
        -webkit-backdrop-filter: blur(15.53px);

        @include gradients.border-gradient;
        --m-border-radius: 12px;
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.14) 0%,
            rgba(255, 255, 255, 0) 106.54%
        );
    }

    .circles {
        width: 42px;
        height: 10px;
        left: 12px;
        top: 12px;
        position: absolute;
    }

    .circle {
        width: 10px;
        height: 10px;
        left: 0px;
        top: 0px;
        position: absolute;
        background: #ededf0;
        border-radius: 9999px;
    }

    .screenbg-wrapper {
        width: 269px;
        height: 219px;
        left: 4px;
        top: 34px;
        position: absolute;
        overflow: hidden;
        border-radius: 8px;

        .screenbg {
            inset: -6px;
            position: absolute;

            background: var(--bg);
            background-size: cover;
            background-position: center;
            box-shadow: 0px 2.098677158355713px 4.197354316711426px rgba(0, 0, 0, 0.02);
            backdrop-filter: blur(25.1px);

            svg {
                position: absolute;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
            }
        }

        .blur {
            width: 269px;
            height: 220px;
            top: 0px;
            position: absolute;
            background: rgba(53, 49, 43, 0.01);
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            backdrop-filter: blur(21.17px);
            -webkit-backdrop-filter: blur(21.17px);
        }
    }
</style>
