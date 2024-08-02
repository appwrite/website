<script lang="ts">
    export let lines: Array<number> = [2, 1, 2, 1, 3];
    const getRandomHeight = () => Math.floor(Math.random() * 100) + 75;
</script>

<div class="container">
    <div class="lines">
        {#each lines as rows, index}
            <div style:position="relative">
                {#each Array.from({ length: rows }) as _, i}
                    {@const delay = i + 1 * index * 150}
                    <div
                        class="line"
                        style={`--delay:${delay}ms;--height:${getRandomHeight()}px;left:${i * 40}px`}
                    />
                {/each}
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
        z-index: -1;

        .lines {
            position: absolute;
            inset: 0;
            z-index: -10;
            display: flex;
            justify-content: space-between;
            gap: 20px;
            padding: 0 24px;
            opacity: 0.7;

            --gradient: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 1) 0%,
                rgba(255, 255, 255, 1) 50%,
                rgba(255, 255, 255, 0) 100%
            );
            --width: 2px;
            --starting-position: -80vh;
            --duration: 6s;
            --initial-delay: 0.5s;

            .line {
                position: relative;
                height: var(--height);
                width: var(--width);

                @keyframes line {
                    from {
                        bottom: var(--starting-position);
                    }
                    to {
                        bottom: 80vh;
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
                }
            }
        }
    }
</style>
