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

        transition: opacity 0.25s ease;

        --base-width: min(25vw, 28.75rem);

        .shine {
            position: absolute;
            inset-block-start: -100px;
            inset-inline-end: -100px;
            z-index: 9;
        }
    }
</style>
