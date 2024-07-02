<script lang="ts">
    const lines = Array.from({ length: 50 });
    const randomDelay = (i: number) => Math.floor(Math.random() * i) * 1000;
</script>

<div class="hero">
    <div class="lockup">
        {#each lines as _, i}
            <div class="line" style={`--animation-delay: ${randomDelay(i)}ms;top: ${i * 100}px`} />
        {/each}
    </div>
</div>

<style lang="scss">
    :root {
        --line-width: 5vw;
        --line-height: 2px;
        --animation-duration: 2s;
    }
    @keyframes -global-line {
        0% {
            left: -10%;
        }
        100% {
            left: 110%;
        }
    }

    .hero {
        .lockup {
            position: relative;
            height: 80vh;
            flex-grow: 1;

            overflow: hidden;
            margin: 0 auto;

            .line {
                position: absolute;
                height: var(--line-height);
                width: 100%;
                background: transparent;
                overflow: hidden;

                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    width: var(--line-width);
                    height: var(--line-height);
                    left: -50%;
                    top: 0;
                    will-change: left;
                    background: linear-gradient(
                        to left,
                        rgba(254, 83, 109, 0.75) 0%,
                        rgba(253, 54, 110, 0.2) 100%
                    );

                    animation: line var(--animation-duration) infinite;
                    animation-fill-mode: forwards;
                    animation-delay: var(--animation-delay);
                    animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
                }
            }
        }
    }
</style>
