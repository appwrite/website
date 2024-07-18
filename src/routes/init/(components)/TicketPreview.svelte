<script>
    import { browser } from '$app/environment';
    import ShineSVG from '../(assets)/shine-bg.svg';
</script>

<div class="ticket-preview" style:opacity={browser ? '1' : '0.5'}>
    <slot />

    <img class="shine" src={ShineSVG} alt="" />
</div>

<style lang="scss">
    .ticket-preview {
        position: relative;
        width: 100%;
        display: grid;
        place-items: center;
        min-height: 75vh;
        padding: 1.25rem;
        border: 1px solid hsl(var(--web-color-border));
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 16px;
        overflow: hidden;

        transition: opacity 0.25s ease;

        --base-width: min(25vw, 28.75rem);

        @media screen and (max-width: 768px) {
            rotate: -90deg;
        }

        .shine {
            position: absolute;
            inset-block-start: -100px;
            inset-inline-end: -100px;
            z-index: 9;
        }
    }
</style>
