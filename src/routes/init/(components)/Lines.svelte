<script lang="ts">
    let lines = 2;
    const getRandomHeight = () => Math.floor(Math.random() * 100) + 75;

    const randomDelay = () => Math.floor(Math.random() * 2800);
</script>

<div class="container">
    <div class="lines">
        {#each Array.from({ length: lines }) as _}
            <div style:position="relative" class="group">
                <div
                    class="line"
                    style={`--delay:${randomDelay()}ms;--height:${getRandomHeight()}px;`}
                ></div>
                <div
                    class="line"
                    style={`--delay:${randomDelay()}ms;--height:${getRandomHeight()}px;`}
                ></div>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .container {
        position: absolute;
        overflow-y: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        inset: 0;
        z-index: 0;

        .lines {
            position: absolute;
            inset: 0;
            z-index: -10;
            display: flex;
            justify-content: space-between;
            max-width: 80%;
            margin: 0 auto;
            opacity: 0.7;

            --gradient: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 1) 50%,
                rgba(255, 255, 255, 0) 100%
            );
            --width: 2px;
            --starting-position: -80vh;
            --duration: 2s;
            --initial-delay: 0.5s;

            .group {
                display: flex;
                gap: 24px;
            }

            .line {
                position: relative;
                height: var(--height);
                width: var(--width);

                @media screen and (max-width: 768px) {
                    height: calc(var(--height) / 4);
                }

                @keyframes line {
                    from {
                        bottom: var(--starting-position);
                    }
                    to {
                        bottom: 15vh;
                    }
                }

                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    bottom: var(--starting-position);
                    width: var(--width);
                    height: var(--height);
                    background: var(--gradient);
                    border-radius: 8px;
                    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.8));
                    animation: line var(--duration) calc(var(--initial-delay) + var(--delay))
                        infinite forwards cubic-bezier(0.1, -0.6, 0.2, 0);

                    @media screen and (max-width: 768px) {
                        height: calc(var(--height) / 2);
                    }
                }
            }
        }
    }
</style>
