<script>
    const lines = Array.from({ length: 100 });
</script>

<div class="lockup">
    {#each lines as _, i}
        <div class="line" style={`--animation-delay: ${i * 2}ms;top: ${i * 10}px`} />
    {/each}
</div>

<style lang="scss">
    @keyframes -global-line {
        0% {
            left: -50%;
        }
        100% {
            left: 110%;
        }
    }

    .lockup {
        position: relative;
        height: 100vh;
        mask-image: url('/images/logos/init.svg');
        mask-repeat: no-repeat;
        mask-size: contain;
        overflow: hidden;
        display: flex;
        margin: 0 auto;
        align-items: center;

        .line {
            position: absolute;
            height: 2px;
            width: 100%;
            background: rgba(255, 255, 255, 0.1);
            overflow: hidden;

            &::after {
                content: '';
                display: block;
                position: absolute;
                height: 2px;
                width: 5vw;
                left: -50%;
                top: 0;
                will-change: left;
                background: linear-gradient(
                    to right,
                    rgba(255, 255, 255, 0) 0%,
                    #fff 75%,
                    #fff 100%
                );
                animation: line 12s infinite;
                animation-fill-mode: forwards;
                animation-delay: var(--animation-delay);
                animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
            }
        }
    }
</style>
