<script lang="ts">
    import { animate, inView, spring } from 'motion';
    import { onMount } from 'svelte';

    const id = 'integrations-anim';
    export let delay = 1;

    onMount(async () => {
        inView(`#${id}`, () => {
            (async () => {
                await animate(
                    `#${id} .rows > .item:nth-child(1)`,
                    {
                        opacity: [0, 1]
                    },
                    {
                        delay: delay,
                        duration: 0.2,
                        easing: 'ease-out'
                    }
                ).finished;
                await animate(
                    `#${id} .rows > .item:nth-child(2)`,
                    {
                        opacity: [0, 1]
                    },
                    {
                        duration: 0.2,
                        easing: 'ease-out'
                    }
                ).finished;
                await animate(
                    `#${id} .rows > .item:nth-child(3)`,
                    {
                        opacity: [0, 0.8]
                    },
                    {
                        duration: 0.2,
                        easing: 'ease-out'
                    }
                ).finished;
                await animate(
                    `#${id} .rows > .item:nth-child(4)`,
                    {
                        opacity: [0, 0.6]
                    },
                    {
                        duration: 0.2,
                        easing: 'ease-out'
                    }
                ).finished;

                await animate(
                    `#${id} .item.is-blue`,
                    {
                        opacity: [0, 1]
                    },
                    {
                        delay: 0.3,
                        duration: 0.2,
                        easing: 'ease-out'
                    }
                ).finished;

                animate(
                    `#${id} .icon-token.bun`,
                    {
                        opacity: [0, 1],
                        y: [-10, 0]
                    },
                    {
                        easing: spring({ mass: 1, stiffness: 100, damping: 15 })
                    }
                );

                animate(
                    `#${id} .icon-token.dart`,
                    {
                        opacity: [0, 1],
                        y: [-10, 0]
                    },
                    {
                        easing: spring({ mass: 1, stiffness: 100, damping: 15 })
                    }
                );
            })();
        });
    });
</script>

<div class="frame" {id}>
    <div class="component">
        <div class="overlap-group">
            <div class="rows">
                <div class="item">
                    <div class="item is-blue">
                        <div class="rectangle-wrapper"><div class="rectangle"></div></div>
                        <div class="div"></div>
                    </div>
                    <div class="rectangle-wrapper"><div class="rectangle-2"></div></div>
                    <div class="div"></div>
                </div>
                <div class="item">
                    <div class="rectangle-wrapper"><div class="rectangle-2"></div></div>
                    <div class="div"></div>
                </div>
                <div class="item">
                    <div class="rectangle-wrapper"><div class="rectangle-2"></div></div>
                    <div class="div"></div>
                </div>
                <div class="item">
                    <div class="rectangle-wrapper"><div class="rectangle-2"></div></div>
                    <div class="div"></div>
                </div>
            </div>
        </div>
        <div class="circles">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
    </div>
    <div class="icon-token bun">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 36" fill="none">
            <g clip-path="url(#clip0_1104_153343)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.639 30.5992C7.66287 28.4727 2.58822 21.4443 4.32475 14.9307C5.37274 10.9998 8.73409 7.96763 13.3118 6.83447C14.517 6.54291 15.5859 6.21151 16.5453 5.91402L16.8275 5.82658C17.3952 5.64952 17.9307 5.48493 18.4455 5.33587C20.0173 4.87915 21.32 4.64122 22.4771 4.9497C23.6342 5.25817 24.5189 5.99929 25.5807 7.09916C25.9067 7.42605 26.2274 7.7726 26.5688 8.14992L26.5854 8.16778C27.3802 9.02477 28.2776 9.99228 29.4877 11.147C32.8938 14.4086 34.3007 18.7077 33.2516 22.6426C31.5151 29.1562 23.6151 32.7256 15.639 30.5992ZM19.6352 8.58013C20.248 7.82555 20.6921 6.94739 20.9373 6.00561C20.9808 5.84234 21.2269 5.85676 21.2107 6.04439C21.1303 9.39681 18.9146 10.4781 17.4428 10.6445C17.2856 10.6623 17.2495 10.4479 17.3868 10.3779C18.2556 9.94792 19.0225 9.3347 19.6352 8.58013ZM22.0399 9.09713C22.1768 8.14195 22.1069 7.16899 21.835 6.24495L21.8392 6.22902C21.7973 6.06855 22.0177 5.95671 22.1048 6.09082C23.73 9.08328 22.3843 11.096 21.2209 11.9802C21.0952 12.0704 20.957 11.9055 21.0417 11.7788C21.5624 10.9671 21.903 10.0523 22.0399 9.09713ZM24.2583 9.00953C24.0063 8.07707 23.5584 7.2105 22.9446 6.46825L22.9488 6.45232C22.8438 6.32196 23.004 6.13433 23.1452 6.24022C25.8109 8.26888 25.3849 10.6932 24.6505 11.986C24.6345 12.017 24.6073 12.0408 24.5745 12.0523C24.5417 12.0637 24.5057 12.0621 24.4742 12.0476C24.4426 12.0332 24.4178 12.0071 24.405 11.9747C24.3921 11.9423 24.3922 11.9061 24.4051 11.8736C24.5603 10.9186 24.5102 9.94199 24.2583 9.00953ZM17.3486 7.96852C16.4706 8.39584 15.5135 8.63263 14.5398 8.66348C14.3858 8.66933 14.3256 8.87933 14.4769 8.91542C15.8773 9.38259 18.3444 9.32803 19.878 6.32461C19.956 6.17481 19.7455 6.05896 19.636 6.18334C19.0061 6.93294 18.2267 7.5412 17.3486 7.96852ZM13.5229 18.8432C13.9539 18.959 14.4097 18.9434 14.8327 18.7984C15.2558 18.6535 15.627 18.3857 15.8994 18.0289C16.1718 17.6722 16.3332 17.2425 16.3631 16.7943C16.393 16.3461 16.2901 15.8995 16.0674 15.5111C15.8447 15.1226 15.5123 14.8097 15.1121 14.612C14.712 14.4143 14.2621 14.3406 13.8194 14.4004C13.3768 14.4601 12.9612 14.6506 12.6254 14.9476C12.2896 15.2447 12.0485 15.6349 11.9328 16.0691C11.7778 16.6504 11.8582 17.2689 12.1564 17.789C12.4545 18.3091 12.946 18.6883 13.5229 18.8432ZM23.319 21.4549C23.7498 21.5731 24.2063 21.5598 24.6305 21.4167C25.0547 21.2736 25.4275 21.0072 25.7017 20.6511C25.9758 20.2951 26.139 19.8655 26.1705 19.4169C26.202 18.9683 26.1003 18.5208 25.8784 18.1313C25.6565 17.7417 25.3244 17.4277 24.9242 17.2289C24.524 17.0301 24.0737 16.9556 23.6305 17.0148C23.1872 17.074 22.771 17.2643 22.4345 17.5614C22.0981 17.8586 21.8566 18.2492 21.7407 18.6839C21.5852 19.2631 21.6639 19.88 21.9598 20.3993C22.2556 20.9187 22.7444 21.2983 23.319 21.4549ZM18.9577 24.5649C19.66 24.2315 20.2395 23.6825 20.6125 22.9971C20.6296 22.9556 20.6371 22.9108 20.6345 22.866C20.6319 22.8212 20.6192 22.7777 20.5974 22.7386C20.5756 22.6995 20.5453 22.6659 20.5087 22.6404C20.4721 22.6149 20.4301 22.5981 20.3861 22.5913L15.5058 21.2902C15.4641 21.2735 15.419 21.2666 15.3742 21.27C15.3293 21.2735 15.2858 21.2873 15.2469 21.3103C15.2081 21.3333 15.175 21.3649 15.1501 21.4027C15.1252 21.4405 15.1093 21.4835 15.1035 21.5284C15.082 22.3053 15.3057 23.0682 15.7424 23.7077C16.0719 24.2555 16.5777 24.6732 17.1761 24.8918C17.7889 24.985 18.4158 24.87 18.9577 24.5649Z"
                    fill="#E4E4E7"
                />
            </g>
            <defs>
                <clipPath id="clip0_1104_153343">
                    <rect
                        width="31.1844"
                        height="27.5361"
                        fill="white"
                        transform="translate(7.47852 0.683594) rotate(14.9278)"
                    />
                </clipPath>
            </defs>
        </svg>
    </div>
    <div class="icon-token dart">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
            <g clip-path="url(#clip0_1104_153358)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.9985 5.63951L19.3197 5.79206C19.285 5.79583 19.2501 5.79934 19.215 5.80253L6.45864 6.96193L25.61 23.4441L29.8944 23.0547L28.8868 11.9688L21.6679 5.97496C21.4371 5.77538 21.222 5.67871 20.9985 5.63951ZM19.8362 4.5711C19.8886 4.56274 19.9423 4.55433 19.9968 4.54619L17.061 2.03649C16.8824 1.93075 16.5988 1.80884 16.2696 1.7194C15.9196 1.62432 15.562 1.57796 15.2659 1.60486C14.6447 1.66132 14.0986 1.80854 13.7958 1.97934L7.48343 5.72987L19.1123 4.67294C19.3199 4.65408 19.5195 4.62198 19.7354 4.58726L19.8362 4.5711ZM24.8835 24.3105L5.7343 7.86175L7.12762 23.192L13.9827 29.4351L25.2562 28.4105L24.8835 24.3105ZM1.84516 16.6203C1.75727 16.963 1.67317 17.4799 1.69812 17.7545C1.75352 18.364 2.16162 18.8963 2.66449 19.4583L5.89396 22.1496L4.70182 9.0329L1.84516 16.6203Z"
                    fill="#E4E4E7"
                />
            </g>
            <defs>
                <clipPath id="clip0_1104_153358">
                    <rect
                        width="28.8"
                        height="28.8"
                        fill="white"
                        transform="translate(0.355469 2.96509) rotate(-5.19316)"
                    />
                </clipPath>
            </defs>
        </svg>
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .frame {
        position: relative;
    }

    .component {
        @include gradients.border-gradient;
        --m-border-radius: 17.36px;
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.14) 0%,
            rgba(255, 255, 255, 0) 106.54%
        );

        width: 205px;
        height: 240px;
        left: 0;
        background: linear-gradient(
            180deg,
            rgba(34.63, 34.63, 36.77, 0.4) 0%,
            rgba(34.63, 34.63, 36.77, 0.24) 100%
        );
        overflow: hidden;
        box-shadow: 0px 2.8px 5.6px #00000005;
        backdrop-filter: blur(27.78px) brightness(100%);
        -webkit-backdrop-filter: blur(27.78px) brightness(100%);
    }

    .overlap-group {
        position: absolute;
        width: 191px;
        height: 198px;
        top: 35px;
        left: 7px;
        border-radius: 13.89px;
        box-shadow: 0px 3.91px 7.82px #00000005;
        backdrop-filter: blur(46.77px) brightness(100%);
        -webkit-backdrop-filter: blur(46.77px) brightness(100%);
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0) 100%
        );
    }

    .rows {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        position: relative;
        top: 7px;
        left: 7px;
    }

    .rectangle-wrapper {
        position: absolute;
        width: 19px;
        height: 19px;
        top: 9px;
        left: 10px;
    }

    .rectangle {
        position: relative;
        width: 14px;
        height: 14px;
        top: 3px;
        left: 2px;
        background-color: #ffffff;
        border-radius: 3.47px;
        transform: rotate(45deg);
    }

    .div {
        position: absolute;
        width: 117px;
        height: 1px;
        top: 19px;
        left: 36px;
        border-radius: 171.89px;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0) 100%
        );
        opacity: 0.8;
    }

    .item {
        opacity: 0;
        position: relative;
        width: 177.1px;
        height: 38.2px;
        background-color: #ffffff14;
        border-radius: 10.42px;
        box-shadow: 0px 3.91px 7.82px #00000005;
        backdrop-filter: blur(46.77px) brightness(100%);
        -webkit-backdrop-filter: blur(46.77px) brightness(100%);

        &.is-blue {
            position: absolute;
            z-index: 1000;

            width: 177.1px;
            height: 38.2px;
            border-radius: 10.42px;
            box-shadow: 0px 3.91px 7.82px #00000005;
            backdrop-filter: blur(46.77px) brightness(100%);
            -webkit-backdrop-filter: blur(46.77px) brightness(100%);
            background: linear-gradient(180deg, rgb(104, 163, 254) 0%, rgb(195, 218, 255) 100%);
        }
    }

    .rectangle-2 {
        position: relative;
        width: 14px;
        height: 14px;
        top: 3px;
        left: 2px;
        border-radius: 3.47px;
        transform: rotate(45deg);
        background: linear-gradient(
            180deg,
            rgb(252.88, 53.74, 110.19) 0%,
            rgb(253.27, 86.98, 107.68) 100%
        );
    }

    .circles {
        display: inline-flex;
        align-items: flex-start;
        gap: 5px;
        position: absolute;
        top: 14px;
        left: 14px;
    }

    .circle {
        position: relative;
        width: 8.68px;
        height: 8.68px;
        background-color: #ededf0;
        border-radius: 4.34px;
    }

    .icon-token {
        display: grid;
        place-items: center;
        position: absolute;

        background: linear-gradient(
            226deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0.04) 60.84%
        );
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 100%;
        backdrop-filter: blur(7.9449849128723145px);

        width: 72px;
        height: 72px;
        opacity: 0;

        &.bun {
            top: -16px;
            right: -30px;
            transform: rotate(14.928deg);
        }

        &.dart {
            top: -33px;
            right: 47px;
            transform: rotate(-5.193deg);
        }

        svg {
            width: 50px;
        }
    }
</style>
