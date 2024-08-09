<li class="slide web-carousel-item">
    <div class="embla__slide__number">
        <slot />
    </div>
</li>

<style lang="scss">
    @use '$scss/abstract' as *;

    .slide {
        cursor: grab;

        &:active {
            cursor: grabbing;
        }

        @media (max-width: 768px) {
            flex: 0 0 100%;
        }

        flex: 0 0 50%;
        min-width: 0;
        margin-right: pxToRem(16);
    }
</style>
