<script lang="ts">
    import TicketScroll from './TicketScroll.svelte';
    import swag from '../(assets)/swag-giveaway.png';
</script>

<div class="wrapper">
    <div class="container">
        <div class="details">
            <h3 class="text-label">Get a ticket and enter our special Init giveaway</h3>
            <p class="web-u-color-text-secondary">
                Create, customize, and share your Init ticket to enter our general giveaway.
            </p>
            <a href="/init/tickets" class="web-button is-secondary">Claim your ticket </a>
        </div>

        <div
            class="web-card is-normal has-border-gradient img overflow-hidden"
            style:padding="0.5rem"
        >
            <img src={swag} alt="Enter our Init giveaway." />
        </div>
    </div>
    <div class="tickets">
        <TicketScroll />
    </div>
</div>

<style lang="scss">
    .wrapper {
        max-width: 100vw;
        overflow: hidden;
        position: relative;
        padding: 96px 0 48px 0;
        margin-bottom: -24px;
        background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.32) 0%,
            rgba(0, 0, 0, 0) 25%,
            rgba(0, 0, 0, 0) 100%
        );

        .container {
            display: flex;
            justify-content: space-between;
            gap: 64px;

            @media screen and (max-width: 1023px) {
                flex-direction: column;
                gap: 32px;
            }

            .details {
                position: relative;
                z-index: 100;
                color: #fff;
                display: flex;
                flex-direction: column;
                gap: 16px;
                text-align: center;
                align-items: center;

                @media screen and (min-width: 768px) {
                    max-width: 25%;
                    text-align: left;
                    align-items: baseline;
                }
            }

            .web-card {
                flex-basis: 40%;
            }

            .img {
                @media screen and (min-width: 768px) {
                    order: 1;
                }
                img {
                    border-radius: 12px;

                    display: block;
                }
            }
        }

        .tickets {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 64px;
        }

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 300px;
            background-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0) 0%,
                hsl(var(--web-color-background-docs)) 70%,
                hsl(var(--web-color-background-docs)) 100%
            );
            z-index: 10;
        }
    }
</style>
