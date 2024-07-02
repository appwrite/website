<script lang="ts">
    const lines = Array.from({ length: 200 });
</script>

<div class="hero">
    <div class="lockup">
        {#each lines as _, i}
            <div class="line" style={`--animation-delay: 0ms;top: ${i * 5}px`} />
        {/each}
    </div>
</div>

<style lang="scss">
    :root {
        --line-width: 20vw;
        --line-height: 2px;
        --animation-duration: 4s;
        --starting-position: -50%;
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
            height: 50vh;
            flex-grow: 1;

            overflow: hidden;
            margin: 0 auto;

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
