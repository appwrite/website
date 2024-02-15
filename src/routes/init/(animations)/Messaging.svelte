<script lang="ts">
    import { animate, spring } from 'motion';
    import { onMount } from 'svelte';

    const INITIAL_DELAY = 2;

    onMount(() => {
        animate(
            '#messaging-1',
            {
                scale: 0.92,
                opacity: 0.48,
                y: 16
            },
            {
                delay: 0.15 + INITIAL_DELAY,
                easing: spring({ mass: 1, stiffness: 711.1, damping: 40 })
            }
        );

        animate(
            '#messaging-2',
            {
                opacity: 1,
                y: [-10, 0]
            },
            {
                delay: 0.2 + INITIAL_DELAY,
                easing: spring({ mass: 1, stiffness: 711.1, damping: 40 })
            }
        );

        animate(
            '#dot',
            {
                scale: [0, 1]
            },
            {
                delay: 0.5 + INITIAL_DELAY,
                easing: spring({ mass: 1, stiffness: 711.1, damping: 40 })
            }
        );
    });
</script>

<div class="wrapper">
    <div id="messaging-2" class="container">
        <div class="box1" />
        <div class="box2" />
        <div class="box3" />
        <div class="circle">
            <div class="circle-inner" />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M31 6.76172C32.2351 6.76172 33.2363 7.76297 33.2363 8.99807V32.9981H28.7636V14.3971L8.58131 34.5794L5.41864 31.4167L25.601 11.2344H6.99998V6.76172H31Z"
                    fill="#E4E4E7"
                />
            </svg>
            <div id="dot" />
        </div>
    </div>

    <div id="messaging-1" class="container">
        <div class="box1" />
        <div class="box2" />
        <div class="box3" />
        <div class="circle">
            <div class="circle-inner" />
        </div>
    </div>
</div>

<style lang="scss">
    .wrapper {
        width: 306px;
        height: 90px;
        position: relative;
        /* background-color: rgba(255, 0, 0, 0.1); */
    }

    #messaging-2:first-child {
        opacity: 0;
    }

    .container {
        width: 306px;
        height: 63px;
        position: absolute;
    }

    .box1 {
        width: 306px;
        height: 60px;
        left: 0;
        top: 3px;
        position: absolute;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        /* backdrop-filter: blur(25.68px); */
    }

    .box2 {
        width: 166px;
        height: 16px;
        left: 72px;
        top: 7px;
        position: absolute;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 999px;
    }

    .box3 {
        width: 120px;
        height: 16px;
        left: 72px;
        top: 27px;
        position: absolute;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 999px;
    }

    .circle {
        width: 52px;
        height: 52px;
        left: 4px;
        top: 7px;
        position: absolute;

        display: grid;
        place-items: center;

        #dot {
            width: 20px;
            height: 20px;

            background: linear-gradient(111deg, #fd366e 0%, #fe9567 144.87%);
            border-radius: 100%;
            filter: drop-shadow(0px 0.634px 1.269px rgba(0, 0, 0, 0.02));
            backdrop-filter: blur(1.982085108757019px);

            position: absolute;
            top: -9px;
            right: -10px;
            transform: scale(0);
        }
    }

    .circle-inner {
        width: 52px;
        height: 52px;
        left: 0;
        top: 0;
        position: absolute;
        background: linear-gradient(
            218deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0) 100%
        );
        border-radius: 8px;
        /* backdrop-filter: blur(11.03px); */
    }
</style>
