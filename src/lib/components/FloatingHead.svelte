<script lang="ts">
    export let src: string;
    export let alt = '';
    export let size: number;

    let className = '';
    export { className as class };
</script>

<div class="head-wrapper {className}" style:width="{size}px" style:height="{size}px">
    <img {src} {alt} />
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .head-wrapper {
        @include gradients.border-gradient;
        --m-border-radius: 50%;
        --m-border-gradient-before: linear-gradient(
            135.1deg,
            rgba(255, 255, 255, 0.08) 10.1%,
            rgba(255, 255, 255, 0) 120.69%
        );

        display: inline-block;
        position: var(--position, absolute);
        top: var(--top);
        left: var(--left);
        bottom: var(--bottom);
        right: var(--right);

        background: linear-gradient(
            132.35deg,
            rgba(255, 255, 255, 0.08) 12.05%,
            rgba(255, 255, 255, 0) 161.63%
        );
        box-shadow: 0px 5.35px 10.7px 0px rgba(0, 0, 0, 0.02);

        &.isRelative {
            position: relative;
        }
    }

    img {
        border-radius: 50%;
        padding: 10%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }
</style>
