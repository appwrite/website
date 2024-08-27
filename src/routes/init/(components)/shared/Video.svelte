<script lang="ts">
    import VideoWrapper, { videoCtx } from '../VideoWrapper.svelte';
    import { melt } from '@melt-ui/svelte';
    import VideoDialog from '../VideoDialog.svelte';

    type $$Props = {
        thumbnail: string;
        title?: string;
        src: string;
    };

    export let thumbnail: $$Props['thumbnail'];
    export let src: $$Props['src'];

    const dialog = videoCtx.get();
    const {
        elements: { trigger }
    } = dialog;
</script>

<VideoWrapper let:openVideo>
    <button on:click={openVideo} style="height:100%;display:block;">
        <div class="wrapper" use:melt={$trigger}>
            <img class="img" src={thumbnail} alt="" />
            <div class="play">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="19"
                    viewBox="0 0 16 19"
                    fill="none"
                >
                    <path
                        d="M15.9565 9.11814L-0.000196062 18.2363L-0.000195265 -6.97491e-07L15.9565 9.11814Z"
                        fill="#EDEDF0"
                    />
                </svg>
            </div>
            <slot />
        </div>

        <VideoDialog {src} {dialog} />
    </button>
</VideoWrapper>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .wrapper {
        position: relative;
        //overflow: hidden;
        max-height: 100%;
        display: flex;
        justify-content: flex-end;
        height: 100%;
        cursor: pointer;
    }

    .img {
        border-radius: var(--p-border-radius, 0.5rem);
        object-fit: cover;
        inline-size: 100%;
        object-position: left;
    }

    .play {
        @include gradients.border-gradient;
        --m-border-radius: 100%;
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0) 125.11%
        );

        background: linear-gradient(
            218deg,
            rgba(255, 255, 255, 0.1) -0.29%,
            rgba(255, 255, 255, 0) 127.21%
        );
        backdrop-filter: blur(16.71428680419922px);
        width: 2.625rem;
        height: 2.625rem;

        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;

        display: grid;
        place-items: center;

        transition: transform 150ms ease;

        .wrapper:hover & {
            transform: scale(1.05);
        }

        .wrapper:active & {
            transform: scale(0.95);
        }

        svg {
            translate: 1px;
        }
    }
</style>
