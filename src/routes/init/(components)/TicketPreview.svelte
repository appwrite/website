<script>
    import { browser } from '$app/environment';
    import ShineSVG from '../(assets)/shine.svg';
</script>

<div class="ticket-preview" style:opacity={browser ? '1' : '0.5'}>
    <slot />

    <img class="shine" src={ShineSVG} alt="" />
</div>

<style lang="scss">
    .ticket-preview {
        --p-border-radius: 1rem;
        border: 1px solid hsl(var(--aw-color-subtle));
        border-radius: var(--p-border-radius);

        position: relative;
        overflow: hidden;
        width: 100%;
        aspect-ratio: 0.925 / 1;

        display: grid;
        place-items: center;

        transition: opacity 0.25s ease;

        :global(.ticket-holder) {
            position: absolute;
            left: 50%;
            top: 50%;
            translate: -50% -50%;
        }

        .shine {
            position: absolute;
            inset-block-start: -100px;
            inset-inline-end: -100px;
            z-index: 20;
        }
    }
</style>
