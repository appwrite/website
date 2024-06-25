<div class="embla__slide web-carousel-item">
    <slot />
</div>

<style lang="scss">
    @use '$scss/abstract' as *;

    .embla__slide {
        @media #{$break1} {
            flex: 0 0 100%;
        }

        flex: 0 0 33%;
        min-width: 0;
        margin-right: pxToRem(32);
        transition: opacity 200ms ease-out;
    }
</style>
