<script lang="ts">
    import Globe from '../../(assets)/globe.svg';
    import Window from '../../(assets)/window.svg';
    import Logo from '../../(assets)/logo.svg';
    import { writable } from 'svelte/store';

    let order = writable<Array<number>>([2, 1, 0]);

    const stickers = [
        { src: Globe, alt: 'Globe' },
        { src: Window, alt: 'Window' },
        { src: Logo, alt: 'Logo' }
    ];

    const changeOrder = () => {
        order.set($order.map((i) => (i + 1) % stickers.length));
    };
</script>

<div class="relative h-[450px] w-[60%] bg-[#1D1D21]">
    {#each $order as i, index}
        <div data-index={index}>
            <img
                draggable
                src={stickers[i].src}
                alt={stickers[i].alt}
                class="absolute object-cover"
                style:top={index * 100 + 'px'}
                style:left={index * 20 + '%'}
            />
        </div>
    {/each}
</div>
<button on:click={changeOrder}>Random</button>

<style>
    @keyframes stutter {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0px);
        }
    }

    @keyframes load {
        0% {
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        }
        100% {
            clip-path: polygon(0 0, 110% 0, 110% 110%, 0 110%);
        }
    }

    /* .ticket {
        animation:
            stutter 1.25s steps(2, end) 1.5s infinite,
            load 1.25s steps(5) forwards;
        box-shadow: 10px 10px 0 0 #d2d2d3;
    } */
</style>
