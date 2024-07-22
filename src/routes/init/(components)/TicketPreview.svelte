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
        transition: opacity 0.25s ease;
        .shine {
            position: absolute;
            inset-block-start: -100px;
            inset-inline-end: -100px;
            z-index: -10;
        }
    }
</style>
