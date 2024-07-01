<li class="embla__slide web-carousel-item">
    <div class="embla__slide__number">
        <slot />
    </div>
</li>

<style>
    .embla__slide {
        @media (max-width: 1023.9px) {
            flex: 0 0 100%;
        }

        flex: 0 0 50%;
        min-width: 0;
        margin-right: 32px;
        transition: opacity 200ms ease-out;

        &:has(.is-snapped) {
            opacity: 0.2;
        }
    }
</style>
