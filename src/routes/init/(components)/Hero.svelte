<script lang="ts">
    import Lines from './Lines.svelte';
    import Lockup from './Lockup.svelte';

    const getRandomNumber = (min: number, max: number) => {
        return (Math.random() * (max - min) + min).toFixed();
    };
</script>

<div class="hero">
    <div class="container">
        <Lockup />
        <Lines />
    </div>
    <div class="shine" />
    <div class="noise" />
</div>

<style lang="scss">
    :root {
        --background: hsl(240 5.7% 10.4%);
        --gradient: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.2) 0,
            rgba(255, 255, 255, 0.2) 44%,
            rgba(255, 255, 255, 0) 100%
        );
        --width: 2px;
        --height: 20vh;
        --starting-position: -60vh;
        --duration: 4s;
        --initial-delay: 0s;
    }

    @keyframes -global-line {
        0% {
            bottom: var(--starting-position);
        }
        100% {
            bottom: 200%;
        }
    }

    .hero {
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .shine {
            opacity: 0.5;
            background: url('/images/tickets/shine.svg') no-repeat;
            background-size: cover;
            mix-blend-mode: hard-light;
            position: absolute;
            inset: 0;
        }

        .noise {
            position: absolute;
            inset: 0;
            background-image: url('https://grainy-gradients.vercel.app/noise.svg');
            mix-blend-mode: multiply;
        }

        .container {
            position: relative;
            overflow-y: hidden;

            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 50px;
                top: 0;
                background: linear-gradient(to bottom, var(--background), rgba(0, 0, 0, 0));
                z-index: -1;
            }

            &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 50px;
                bottom: 0;
                background: linear-gradient(to top, var(--background), rgba(0, 0, 0, 0));
                z-index: -1;
            }
        }
    }
</style>
