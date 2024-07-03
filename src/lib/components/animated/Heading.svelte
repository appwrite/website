<script lang="ts">
    export let text: string;
    export let stagger: number = 100;
</script>

<h1 class="sr-only" {...$$restProps}>{text}</h1>
<h1 class="heading" {...$$restProps}>
    {#each text.split('') as letter, i}
        <span class="letter" style:animation-delay={`${i * stagger}ms`}>{letter}</span>
    {/each}
</h1>

<style lang="scss">
    @keyframes -global-enter {
        0% {
            filter: blur(16px);
            transform: translateY(100px);
        }
        100% {
            filter: blur(0);
            transform: translateY(0);
        }
    }

    .heading {
        position: relative;
        z-index: 100;
        color: white;
        pointer-events: none;
        font-size: 50vw;
        position: relative;
    }

    .letter {
        display: inline-block;
        position: relative;
        will-change: transform;
        animation: enter 1200ms ease-in-out forwards;
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
</style>
