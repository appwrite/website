<script lang="ts">
    export let cols = 8;
    export let rows = 5;

    const randomNumberFromColsAndRows = () => {
        return Math.floor(Math.random() * rows);
    };
</script>

<div class="relative h-full w-full items-center justify-center">
    <div
        class="absolute inset-0 grid"
        style:grid-template-columns="repeat({cols}, 1fr)"
        style:grid-template-rows="repeat({rows}, 1fr)"
        style="--cols:{cols};--rows:{rows}"
    >
        {#each Array.from({ length: cols * rows }) as _, i}
            <div
                class="cell h-full w-full bg-white"
                style:animation-delay="{randomNumberFromColsAndRows()}s"
            />
        {/each}
    </div>
    <slot />
</div>

<style>
    @keyframes poof {
        to {
            opacity: 0;
        }
    }

    @media screen and (prefers-reduced-motion: no-preference) {
        .cell {
            animation-name: poof;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            background: #fff;
        }
    }
</style>
