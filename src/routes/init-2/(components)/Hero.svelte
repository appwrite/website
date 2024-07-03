<script lang="ts">
    const lines = Array.from({ length: 45 });

    function randomNumber(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }
</script>

<div class="hero">
    <div class="lockup">
        <h1 class="web-headline heading">Init</h1>
        {#each lines as _, i}
            <div
                data-number={i + 1}
                class="line"
                style={`--animation-delay: ${randomNumber(200, 2000)}ms;top: ${i * 20}px`}
            />
        {/each}
    </div>
</div>

<style lang="scss">
    :root {
        --line-width: 70vw;
        --line-height: 15px;
        --animation-duration: 4s;
        --starting-position: -100vw;
    }

    @keyframes -global-line {
        0% {
            left: var(--starting-position);
        }
        100% {
            left: 110%;
        }
    }

    .hero {
        .lockup {
            position: relative;
            height: 85vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-grow: 1;
            margin: 0 auto;
            overflow: hidden;

            .heading {
                position: relative;
                z-index: 100;
                color: hsl(240 5.7% 10.4%);
                pointer-events: none;
                font-size: 50vw;
            }

            .line {
                position: absolute;
                height: var(--line-height);
                width: 100%;
                background: linear-gradient(
                    to left,
                    rgba(64, 64, 64, 0) 0%,
                    rgba(46, 46, 46, 0) 50%,
                    rgba(64, 64, 64, 0) 100%
                );

                overflow: hidden;

                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    width: var(--line-width);
                    height: var(--line-height);
                    left: var(--starting-position);
                    top: 0;
                    filter: blur(2px);
                    will-change: left;
                    background: linear-gradient(
                        to left,
                        rgba(254, 83, 109, 1) 0%,
                        rgba(253, 54, 110, 0.1) 100%
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
