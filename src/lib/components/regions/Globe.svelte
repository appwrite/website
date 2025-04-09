<script lang="ts">
    import createGlobe from 'cobe';

    let phi = 0;
    let width = 0;

    const globe = (canvas: HTMLCanvasElement) => {
        const onResize = () => (width = canvas.offsetWidth);
        window.addEventListener('resize', onResize);
        onResize();

        const globe = createGlobe(canvas, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2 * 0.4,
            phi: 0,
            theta: 0.3,
            dark: 1,
            diffuse: 3,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [255 / 30, 255 / 30, 255 / 30],
            markerColor: [1, 0.5, 1],
            glowColor: [1.2, 1.2, 1.2],
            markers: [
                { location: [50.1109, 8.6821], size: 0.03 },
                { location: [48.8575, 2.3514], size: 0.03 },
                { location: [12.971599, 77.5946], size: 0.03 },
                { location: [1.3521, 103.8198], size: 0.03 },
                { location: [33.8688, 151.2093], size: 0.03 },
                { location: [40.7128, -73.935242], size: 0.03 },
                { location: [37.7749, -122.4194], size: 0.03 }
            ],
            scale: 2.5,
            offset: [0, width * 2 * 0.4 * 0.6],
            onRender: (state) => {
                state.width = width * 2;
                state.height = width * 2 * 0.5;
                state.phi = phi;
                phi += 0.004;
            }
        });

        setTimeout(() => (canvas.style.opacity = '1'));

        return {
            destroy() {
                window.removeEventListener('resize', onResize);
                globe.destroy();
            }
        };
    };
</script>

<div class="bg-white">
    <div
        class="container relative mx-auto flex items-center justify-center perspective-distant transform-3d"
    >
        <canvas use:globe class="h-[650px] w-screen" />
    </div>
</div>
