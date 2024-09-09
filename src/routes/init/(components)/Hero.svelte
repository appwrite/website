<script lang="ts">
    import Lines from './Lines.svelte';
    import Lockup from './Lockup.svelte';
</script>

<div class="hero">
    <Lockup fillColor="#171719" />
    <Lines />

    <div class="details">
        <p class="text-description">The start of something new.</p>
        <div class="buttons">
            <a href="/init/tickets" class="web-button">Claim your ticket</a>
        </div>
    </div>
</div>

<style lang="scss">
    .hero {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 64px;
        padding: 0 24px;
        position: relative;
        background: linear-gradient(
            -45deg,
            hsl(var(--web-color-background) 20%) 0%,
            hsl(var(--web-color-background) / 0) 100%
        );

        .details {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 32px;
            .buttons {
                display: flex;
                gap: 0.5rem;
                position: relative;
                z-index: 10;

                padding-block-start: 1rem;

                @media screen and (max-width: 1023px) {
                    flex-direction: column;
                    align-items: center;

                    .web-button {
                        width: 300px;
                    }
                }
            }

            p {
                max-width: 23.125rem;
                text-align: center;
            }
        }
    }
</style>
