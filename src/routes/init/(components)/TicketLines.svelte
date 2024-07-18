<div class="lines">
    {#each Array.from({ length: 2 }) as _, i}
        {@const index = i + 1}
        <div class="sublines">
            {#each Array.from({ length: 2 }) as _, i}
                <div class="line" />
            {/each}
        </div>
    {/each}
</div>

<style lang="scss">
    :root {
        --background: hsl(240 5.7% 10.4%);
        --gradient: linear-gradient(
            to top,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0.2) 44%,
            rgba(255, 255, 255, 0) 100%
        );
        --width: 2px;
        --height: 100px;
    }

    .lines {
        position: absolute;
        inset: 0;
        z-index: 0;
        padding: 0 pxToRem(100);
        width: 100%;

        .sublines {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: pxToRem(100);
        }

        .line {
            height: var(--height);
            width: var(--width);
            height: var(--height);
            background: var(--gradient);
        }
    }
</style>
