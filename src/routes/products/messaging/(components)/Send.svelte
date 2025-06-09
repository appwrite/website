<script lang="ts">
    import Step from './Step.svelte';
    import AndroidSvg from '../(assets)/android.svg';
    import IphoneSvg from '../(assets)/iphone.svg';
</script>

<Step title="Step 4: Send" hideLine>
    <div class="wrapper">
        <img src={IphoneSvg} alt="" class="phone" />
        <div class="img-overlay"></div>

        <div class="android">
            <img src={AndroidSvg} alt="" class="android" />
            <h3 class="text-title font-aeonik-pro text-primary">
                Communicate across multiple channels
            </h3>
            <p class="text-description">
                Pick one or more channels for you to deliver your message to your user.
            </p>
        </div>
        <div class="overlay"></div>
    </div>
</Step>

<style lang="scss">
    .wrapper {
        display: flex;
        align-items: flex-end;
        position: relative;
        overflow: hidden;

        @media screen and (max-width: 1024px) {
            align-items: start;
        }
        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to bottom,
                hsl(240, 6%, 10%, 0),
                hsl(240, 6%, 10%, 0) 60%,
                hsl(240, 6%, 10%, 1)
            );
            pointer-events: none;
            z-index: 100;
        }
        @media screen and (max-width: 1024px) {
            display: flex;
            flex-direction: column;
        }
    }

    .phone {
        width: 24.375rem;
        height: 49rem;
        margin-inline-start: 15rem;
        z-index: 10;
        @media screen and (max-width: 1024px) {
            margin: auto;
            height: 30rem;
        }
    }
    .img-overlay {
        height: 50%;
        width: 100%;
        z-index: 10;
        position: absolute;
        inset: 0;
        inset-block-start: 50%;
        inset-block-end: -1rem;
        background: linear-gradient(
            to bottom,
            hsl(270, 4%, 10%, 0) 0%,
            hsl(270, 4%, 10%, 0.4) 10%,
            hsl(270, 4%, 10%, 1)
        );
        @media screen and (max-width: 1024px) {
            margin: auto;
            height: 30rem;
            background: linear-gradient(
                to bottom,
                hsl(270, 4%, 10%, 0) 0%,
                hsl(270, 4%, 10%, 0.2) 10%,
                hsl(270, 4%, 10%, 0.9) 50%,
                hsl(270, 4%, 10%, 1)
            );
        }
    }

    .android {
        height: 100%;
        position: relative;
        @media screen and (max-width: 1024px) {
            margin-block-start: -5rem;
            padding-block-end: var(--padding-block-end);
        }
        h3 {
            padding-inline-start: 2rem;
            position: relative;
            z-index: 1000;
            max-width: 31.25rem;
            @media screen and (max-width: 1024px) {
                padding: 0;
            }
        }

        p {
            padding-inline-start: 2rem;
            position: relative;
            z-index: 1000;
            margin-block-start: 1rem;
            padding-block-end: 2rem;
            @media screen and (max-width: 1024px) {
                padding: 0;
            }
        }

        img {
            display: block;
            max-inline-size: unset;
            max-block-size: unset;

            inline-size: 21.375rem;
            block-size: 44.9375rem;
            inset-block-end: 0;
            margin-inline-start: -1rem;
            position: absolute;
            @media screen and (max-width: 1024px) {
                display: none;
            }
        }
        // margin-inline-start: -2rem;
    }
</style>
