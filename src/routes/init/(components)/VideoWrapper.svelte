<script lang="ts">
    import Rick from '../(assets)/rick.webp';
</script>

<div class="wrapper">
    <img class="img" src={Rick} alt="Video thumbnail" />
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
</div>

<style lang="scss">
    .wrapper {
        position: relative;
        overflow: hidden;
        max-height: 100%;

        display: flex;
        justify-content: flex-end;
        aspect-ratio: 1.6;
    }

    .img {
        border-radius: 0.5rem;
        object-fit: cover;
        inline-size: 100%;
    }

    .play {
        @include border-gradient;
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
        transform: translate(-50%, -50%);

        display: grid;
        place-items: center;
    }
</style>
