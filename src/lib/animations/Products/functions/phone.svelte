<script lang="ts">
    import { flip } from '$lib/utils/flip';
    import { scale, slide } from 'svelte/transition';
    import { functionsController } from '.';

    const { state } = functionsController;

    type Method = {
        icon: string;
        label: string;
    };

    $: methods = [
        $state.submit === 'success' && {
            icon: '/images/animations/stripe.png',
            label: 'Stripe'
        },
        {
            icon: '/images/animations/credit-card.svg',
            label: 'Card'
        },
        {
            icon: '/images/animations/paypal.svg',
            label: 'PayPal'
        },
        {
            icon: '/images/animations/apple.svg',
            label: 'Apple'
        }
    ].filter(Boolean) as Method[];
</script>

<div data-theme-ignore class="inner-phone light">
    <div class="header">
        <p class="title">Upgrade plan</p>
        <span class="icon-menu" aria-label="menu"></span>
    </div>

    <div class="plan">
        <p class="title">Premium plan</p>
        <div class="subscription">
            <p class="price">$20</p>
            <p class="period">/month</p>
        </div>
        <ul>
            <li>Premium plan</li>
            <li>Premium plan</li>
            <li>Premium plan</li>
        </ul>
    </div>

    <ul class="methods">
        {#each methods as method, i (method.label)}
            <li
                in:scale={{ delay: 150 }}
                animate:flip={{ duration: 500 }}
                data-active={i == 0 ? '' : undefined}
            >
                <img src={method.icon} alt="" />
                <p>{method.label}</p>
            </li>
        {/each}
    </ul>

    {#if $state.submit !== 'success'}
        <div class="form">
            <p>Card information</p>
            <div class="bordered">
                <div>
                    <p>placeholder</p>
                    <img src="/images/animations/visa.png" alt="" />
                    <img src="/images/animations/mastercard.png" alt="" />
                </div>
                <div>
                    <p>MM/YY</p>
                    <p>CVV</p>
                </div>
            </div>
        </div>
    {/if}

    <button>
        Pay $20.00
        {#if $state.submit === 'success'}
            <span in:slide={{ axis: 'x' }}>on Stripe</span>
        {/if}
    </button>
</div>

<style lang="scss">
    .inner-phone {
        padding-block: 3rem 1.5rem;
        padding-inline: 1rem;

        color: rgba(67, 67, 71, 1);
        text-align: left;

        position: relative;
        height: 100%;
        overflow: visible;

        display: flex;
        flex-direction: column;

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .title {
                color: #434347;
                font-family: Inter;
                font-size: 1rem;
                font-style: normal;
                font-weight: 600;
                line-height: 1.375rem; /* 137.5% */
                letter-spacing: -0.014rem;
            }

            [class*='icon-'] {
                font-size: 1.25rem;
                color: hsl(var(--web-color-greyscale-500));
            }
        }

        .plan {
            display: flex;
            padding: 0.75rem 1rem;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            border-radius: 0.75rem;
            background: rgba(237, 237, 240, 0.5);

            margin-block-start: 1rem;

            .title {
                color: var(--color-greyscale-700, #56565c);
                font-family: Inter;
                font-size: 0.75rem;
                font-style: normal;
                font-weight: 700;
                line-height: 1.25rem; /* 166.667% */
            }

            .subscription {
                display: flex;
                align-items: baseline;
                margin-block-start: 0.15rem;

                .price {
                    color: var(--greyscale-700, var(--color-greyscale-700, #56565c));
                    font-family: Inter;
                    font-size: 1.125rem;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 1.25rem; /* 111.111% */
                }

                .period {
                    color: var(--greyscale-700, var(--color-greyscale-700, #56565c));
                    font-family: Inter;
                    font-size: 0.75rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 1.25rem;
                }
            }

            ul {
                display: flex;
                flex-direction: column;
                gap: 0.125rem;
                margin-block-start: 0.75rem;

                li {
                    color: var(--color-greyscale-500, #818186);
                    font-family: Inter;
                    font-size: 0.75rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 1.25rem; /* 166.667% */

                    padding-inline-start: 1.5rem;

                    position: relative;

                    &::before {
                        content: '';
                        display: block;
                        position: absolute;
                        left: 0;
                        width: 1rem;
                        height: 1rem;
                        top: 50%;
                        transform: translateY(-50%);

                        background-image: url('/images/animations/check-circle.svg');
                    }
                }
            }
        }

        .methods {
            margin-block-start: 1.25rem;

            display: flex;
            gap: 0.75rem;
            overflow: hidden;
            margin-inline: -1rem;
            padding-inline: 1rem;

            li {
                flex-shrink: 0;

                display: flex;
                width: 5.5rem;
                padding: 0.75rem 0.75rem 0.625rem 0.75rem;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                gap: 0.125rem;

                border-radius: 0.75rem;
                border: 1px solid var(--greyscale-50, #ededf0);

                color: var(--greyscale-700, var(--color-greyscale-700, #56565c));
                font-family: Inter;
                font-size: 0.75rem;
                font-style: normal;
                font-weight: 400;
                line-height: 1.25rem; /* 166.667% */

                &[data-active] {
                    border-color: var(--appwrite-purple, #7c67fe);
                }
            }
        }

        .form {
            margin-block-start: 1.25rem;

            > p {
                color: var(--dark-neutrals-150, #373b4d);
                font-family: Inter;
                font-size: 0.75rem;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 1.125rem */
            }

            .bordered {
                margin-block-start: 0.25rem;

                border-radius: 0.5rem;
                border: 1px solid #ededf0;
                background: var(--color-bw-white, #fff);

                > div:first-child {
                    display: flex;
                    gap: 0.25rem;
                    padding: 0.65rem 0.75rem;
                    border-bottom: 1px solid #ededf0;

                    > :nth-child(2) {
                        margin-inline-start: auto;
                    }
                }

                > div:nth-child(2) {
                    display: flex;

                    > p {
                        padding: 0.65rem 0.75rem;
                    }

                    > p:first-child {
                        flex-grow: 3;
                    }

                    > p:last-child {
                        flex-grow: 1;
                        border-inline-start: 1px solid #ededf0;
                    }
                }

                p {
                    color: var(--light-neutrals-50, #c4c6d7);
                    font-family: Inter;
                    font-size: 0.75rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 1.125rem */
                }
            }
        }

        > button {
            display: flex;
            text-align: center;
            padding: 0.5rem 1rem;
            justify-content: center;
            align-items: center;
            gap: 0.25rem;

            border-radius: 0.5rem;
            background: var(--appwrite-purple, #7c67fe);
            box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.06);

            color: var(--color-bw-white, #fff);
            text-align: center;
            font-family: Inter;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1.375rem; /* 157.143% */
            letter-spacing: -0.01225rem;

            margin-block-start: auto;

            white-space: nowrap;
        }
    }
</style>
