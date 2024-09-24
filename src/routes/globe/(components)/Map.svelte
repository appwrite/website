<script lang="ts">
    import DottedMap from 'dotted-map';

    const map = new DottedMap({
        height: 50,
        grid: 'diagonal'
    });

    map.addPin({
        lat: 50.1109,
        lng: 8.6821,
        data: 'Frankfurt, Germany',
        svgOptions: {
            color: 'red'
        }
    });
    map.addPin({
        lat: 37.7749,
        lng: -122.4194,
        data: 'San Francisco, USA',
        svgOptions: {
            color: 'blue'
        }
    });

    const points = map.getPoints();
</script>

<div
    class="container mx-auto flex items-center justify-center"
    style:transform="perspective(800px) rotateX(30deg) scaleX(1.2)"
>
    <svg viewBox="0 0 105 50" class="h-full w-full">
        {#each points as point}
            <circle cx={point.x} cy={point.y} r="0.15" fill={point.svgOptions?.color ?? '#999'} />
        {/each}
    </svg>
</div>
