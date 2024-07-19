<script lang="ts">
    export const lines: Array<Array<number>> = [
        [2, 1],
        [4, 3],
        [8, 2],
        [5, 1],
        [3, 4]
    ];
</script>

<div class="container">
    <div class="lines">
        {#each lines as [columns, rows], i}
            <div>
                {#each Array.from({ length: columns }) as _, i}
                    <div style:left={`${i * 200}px`} style:position="relative">
                        {#each Array.from({ length: rows }) as _, i}
                            <div
                                class="line"
                                style:left={`${i * 35}px`}
                                style={`--delay:${i * 250}ms`}
                            />
                        {/each}
                    </div>
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
        --height: 20%;
        --starting-position: -60%;
        --duration: 4s;
        --initial-delay: 0s;
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

        &::before,
        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 50px;
            background: linear-gradient(to bottom, var(--background), rgba(0, 0, 0, 0));
            z-index: -1;
        }

        &::before {
            top: 0;
        }

        &::after {
            bottom: 0;
        }

        .lines {
            position: absolute;
            inset: 0;
            z-index: -10;
            display: flex;
            justify-content: space-between;
            gap: 150px;

            .line {
                position: absolute;
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
