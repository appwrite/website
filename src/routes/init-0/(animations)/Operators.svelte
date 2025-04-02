<script lang="ts">
    import { animate, inView, spring } from 'motion';
    import { onMount } from 'svelte';

    export let delay = 1;
    const id = 'operators-anim';

    onMount(() => {
        inView(`#${id}`, () => {
            animate(
                `#${id} .filter`,
                {
                    scale: [1, 0.9, 1]
                },
                {
                    delay: delay,
                    duration: 0.2,
                    easing: 'ease-out'
                }
            );

            animate(
                `#${id} .operators`,
                {
                    y: [-10, 0],

                    opacity: [0, 1]
                },
                {
                    delay: delay + 0.2,
                    easing: spring({ mass: 1, stiffness: 177, damping: 20 })
                }
            );
        });
    });
</script>

<div class="component" {id}>
    <div class="overlap-wrapper">
        <div class="overlap">
            <div class="rectangle">
                <div class="icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="31"
                        viewBox="0 0 29 31"
                        fill="none"
                    >
                        <circle
                            cx="14.0031"
                            cy="14.1464"
                            r="12.7772"
                            stroke="#D9D9D9"
                            stroke-width="2.03631"
                        />
                        <path
                            d="M22.2791 24.3532L27.7406 29.8143"
                            stroke="#D9D9D9"
                            stroke-width="2.03631"
                        />
                    </svg>
                </div>
                <div class="diamond"></div>
                <div class="filter">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="16"
                        viewBox="0 0 35 16"
                        fill="none"
                    >
                        <path
                            d="M9.87436 7.70947L1.49936 7.70947M5.68686 3.52197V11.897M18.4085 0.729004H33.7627L27.4814 7.70817V12.5936L24.6898 15.3853V7.70817L18.4085 0.729004Z"
                            stroke="#E4E4E7"
                            stroke-width="1.11667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <div class="operators">
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                    >
                        <path
                            d="M21.5085 16.0575H22.3628V17.3138H21.274C20.5705 17.3138 20.068 17.1295 19.6995 16.6605L19.2138 16.024C18.4098 16.9285 17.455 17.4143 16.383 17.4143C14.4568 17.4143 13.1335 16.2753 13.1335 14.3658C13.1335 13.009 13.904 11.7695 15.378 11.0158C14.574 9.89353 14.3228 9.24028 14.3228 8.30228C14.3228 6.67753 15.4953 5.48828 17.2038 5.48828C18.728 5.48828 19.8838 6.56028 19.8838 8.06778C19.8838 9.35753 19.0463 10.4798 17.3545 11.401L19.2808 13.88L20.8888 10.9823H22.3125L20.0848 14.9018L20.5705 15.5383C20.872 15.9235 21.1233 16.0575 21.5085 16.0575ZM17.1535 6.69428C16.2323 6.69428 15.6963 7.29728 15.6963 8.21853C15.6963 9.07278 15.9978 9.62553 16.6343 10.463C17.8905 9.87678 18.5103 9.05603 18.5103 8.10128C18.5103 7.21353 17.9575 6.69428 17.1535 6.69428ZM16.4333 16.158C17.2038 16.158 17.924 15.7728 18.46 15.0525L16.0983 11.9873L16.048 11.937C14.976 12.5233 14.5405 13.2268 14.5405 14.2485C14.5405 15.4713 15.2608 16.158 16.4333 16.158Z"
                            fill="#ADADB0"
                        />
                        <path
                            d="M10.5 16.0575H11.3542V17.3138H10.2655C9.562 17.3138 9.0595 17.1295 8.691 16.6605L8.20525 16.024C7.40125 16.9285 6.4465 17.4143 5.3745 17.4143C3.44825 17.4143 2.125 16.2753 2.125 14.3658C2.125 13.009 2.8955 11.7695 4.3695 11.0158C3.5655 9.89353 3.31425 9.24028 3.31425 8.30228C3.31425 6.67753 4.48675 5.48828 6.19525 5.48828C7.7195 5.48828 8.87525 6.56028 8.87525 8.06778C8.87525 9.35753 8.03775 10.4798 6.346 11.401L8.27225 13.88L9.88025 10.9823H11.304L9.07625 14.9018L9.562 15.5383C9.8635 15.9235 10.1148 16.0575 10.5 16.0575ZM6.145 6.69428C5.22375 6.69428 4.68775 7.29728 4.68775 8.21853C4.68775 9.07278 4.98925 9.62553 5.62575 10.463C6.882 9.87678 7.50175 9.05603 7.50175 8.10128C7.50175 7.21353 6.949 6.69428 6.145 6.69428ZM5.42475 16.158C6.19525 16.158 6.9155 15.7728 7.4515 15.0525L5.08975 11.9873L5.0395 11.937C3.9675 12.5233 3.532 13.2268 3.532 14.2485C3.532 15.4713 4.25225 16.158 5.42475 16.158Z"
                            fill="#ADADB0"
                        />
                    </svg>
                </span>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M7.70834 4.38672V19.7409"
                            stroke="#ADADB0"
                            stroke-width="1.26129"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M16.0833 4.38672V19.7409"
                            stroke="#ADADB0"
                            stroke-width="1.26129"
                            stroke-linejoin="round"
                        />
                    </svg>
                </span>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .component {
        background-color: transparent;

        --m-border-gradient-before: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.24),
            rgba(255, 255, 255, 0)
        );
    }

    .overlap {
        position: relative;
        width: 441px;
        height: 134px;
    }

    .icon {
        width: 39px;
        height: 39px;
        display: grid;
        place-items: center;
    }

    .rectangle {
        @include gradients.border-gradient;
        --m-border-radius: 11.17px;

        width: 441px;
        height: 61px;
        background-color: #ffffff0a;
        box-shadow: 0px 2.25px 4.5px #00000005;
        backdrop-filter: blur(22.33px) brightness(100%);
        -webkit-backdrop-filter: blur(22.33px) brightness(100%);

        display: flex;
        align-items: center;
        padding: 11.17px;
    }

    .diamond {
        position: relative;
        width: 17px;
        height: 17px;
        border-radius: 4.19px;
        transform: rotate(45deg);
        background: linear-gradient(180deg, rgb(254, 149, 103) 0%, rgb(254, 170, 133) 100%);
        margin-inline-start: 16px;
    }

    .filter {
        width: 64px;
        height: 40px;

        flex-shrink: 0;
        border-radius: 1394.438px;
        background: linear-gradient(134deg, #fd366e 25.26%, #fe9567 157.9%);
        box-shadow: 0px 1.067px 2.134px 0px rgba(0, 0, 0, 0.02);
        backdrop-filter: blur(3.3342883586883545px);
        margin-inline-start: 20px;

        display: grid;
        place-items: center;
    }

    .operators {
        @include gradients.border-gradient;
        --m-border-radius: 11.17px;

        position: absolute;
        left: 100px;
        background: rgba(255, 255, 255, 0.04);

        display: flex;
        flex-direction: column;
        padding: 6px;
        gap: 6px;
        opacity: 0;

        span {
            @include gradients.border-gradient;
            --m-border-radius: 8px;
            background: rgba(255, 255, 255, 0.04);
            width: 58px;
            height: 30px;
            display: grid;
            place-items: center;
        }
    }
</style>
