<div class="ticket relative h-[450px] w-[60%] bg-[#1D1D21]" />

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

    .ticket {
        animation:
            stutter 1.25s steps(2, end) 1.5s infinite,
            load 1.25s steps(5) forwards;
        box-shadow: 10px 10px 0 0 #d2d2d3;
    }
</style>
