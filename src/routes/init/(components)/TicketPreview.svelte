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
        min-height: 60vh;
        transition: opacity 0.25s ease;

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
