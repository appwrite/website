<li class="slide web-carousel-item">
    <div class="embla__slide__number">
        <slot />
    </div>
</li>

<style lang="scss">
    @use '$scss/abstract/functions' as f;

    .slide {
        cursor: grab;
        flex: 0 0 50%;
        min-width: 0;
        margin-right: f.pxToRem(16);

        @media (max-width: 768px) {
            flex: 0 0 100%;
        }
        &:active {
            cursor: grabbing;
        }
    }
</style>
