<script lang="ts">
    import DottedMap, { type DottedMapLib } from 'dotted-map';

    const map = new DottedMap({
        height: 50,
        grid: 'diagonal'
    });

    map.addPin({
        lat: 50.1109,
        lng: 8.6821,
        data: {
            city: 'Frankfurt',
            country: 'Germany',
            ready: true,
            available: true
        },
        svgOptions: {
            color: 'red'
        }
    });

    map.addPin({
        lat: 48.8575,
        lng: 2.3514,
        data: {
            city: 'Paris',
            country: 'France',
            ready: false,
            available: false
        },
        svgOptions: {
            color: 'red'
        }
    });

    map.addPin({
        lat: 12.971599,
        lng: 77.5946,
        data: {
            city: 'Bangalore',
            country: 'India',
            ready: false,
            available: false
        },
        svgOptions: {
            color: 'red'
        }
    });

    map.addPin({
        lat: 1.3521,
        lng: 103.8198,
        data: {
            city: 'Singapore',
            country: 'Singapore',
            ready: false,
            available: false
        },
        svgOptions: {
            color: 'red'
        }
    });

    map.addPin({
        lat: 33.8688,
        lng: 151.2093,
        data: {
            city: 'Syndey',
            country: 'Australia',
            ready: false,
            available: false
        },
        svgOptions: {
            color: 'red'
        }
    });

    map.addPin({
        lat: 40.7128,
        lng: -73.935242,
        data: {
            city: 'New York, NY',
            country: 'USA',
            ready: false,
            available: false
        },
        svgOptions: {
            color: 'blue'
        }
    });

    map.addPin({
        lat: 37.7749,
        lng: -122.4194,
        data: {
            city: 'San Francisco, CA',
            country: 'USA',
            ready: false,
            available: false
        },
        svgOptions: {
            color: 'blue'
        }
    });

    const points = map.getPoints();
    const pins: DottedMapLib.Point[] = points.filter((point) => point.data);
</script>

<div class="bg-white">
    <div
        class="container relative mx-auto flex items-center justify-center perspective-distant transform-3d"
    >
        <svg viewBox="0 0 105 50" class="text- h-full w-full rotate-x-45">
            {#each points as point}
                <circle cx={point.x} cy={point.y} r="0.25" class="fill-black/[.08]" />
            {/each}
            {#each pins as pin}
                <circle cx={pin.x} cy={pin.y} r="0.25" class="fill-black" />
            {/each}
        </svg>
    </div>
</div>
