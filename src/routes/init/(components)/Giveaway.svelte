<script lang="ts">
    import TicketScroll from './TicketScroll.svelte';
    import swag from '../(assets)/swag-giveaway.png';
</script>

<div class="overlay">
    <div class="web-container">
        <div class="details">
            <h3 class="web-title">Get a ticket and enter our special Init giveaway</h3>
            <p class="web-u-color-text-secondary">
                Create, customize, and share your Init ticket to enter our general giveaway.
            </p>
            <a href="/init/tickets" class="web-button is-secondary">Claim your ticket </a>
        </div>

        <div
            class="web-card is-normal has-border-gradient u-overflow-hidden img"
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
    .overlay {
        max-width: 100vw;
        overflow: hidden;
        position: relative;

        .web-container {
            display: flex;
            justify-content: space-between;

            .details {
                position: relative;
                z-index: 1000;
                color: #fff;
                margin: 0 auto;
            }

            .img {
                img {
                    border-radius: 12px;
                }
            }
        }

        .tickets {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 150px;
            background-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0) 0%,
                hsl(var(--web-color-background)) 70%,
                hsl(var(--web-color-background)) 100%
            );
            z-index: 10;
        }
    }
</style>
