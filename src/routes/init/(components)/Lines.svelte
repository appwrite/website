<script lang="ts">
    export let lines: Array<number> = [2, 4, 2, 3];
</script>

<div class="container">
    <div class="lines">
        {#each lines as rows, index}
            <div style:position="relative">
                {#each Array.from({ length: rows }) as _, i}
                    <div
                        class="line"
                        style:left={`${i * 15}px`}
                        style={`--delay:${i * index * 250}ms`}
                    />
                {/each}
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    :root {
        --background: hsl(240 5.7% 10.4%);
        --gradient: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.2) 0,
            rgba(255, 255, 255, 0.2) 44%,
            rgba(255, 255, 255, 0) 100%
        );
        --width: 2px;
        --height: 10vh;
        --starting-position: -50vh;
        --duration: 4s;
        --initial-delay: 0.5s;
    }

    @keyframes -global-line {
        0% {
            bottom: var(--starting-position);
        }
        100% {
            bottom: 200%;
        }
    }

    .container {
        position: absolute;
        overflow-y: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        inset: 0;
        z-index: 10;

        .lines {
            position: absolute;
            inset: 0;
            z-index: -10;
            display: flex;
            justify-content: space-between;
            gap: 20px;
            padding: 0 24px;

            .line {
                position: relative;
                height: var(--height);
                width: var(--width);

                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    bottom: var(--starting-position);
                    width: var(--width);
                    height: var(--height);
                    background: var(--gradient);
                    animation: line var(--duration) calc(var(--initial-delay) + var(--delay))
                        infinite forwards cubic-bezier(0.1, -0.6, 0.2, 0);
                }
            }
        }
    }
</style>
