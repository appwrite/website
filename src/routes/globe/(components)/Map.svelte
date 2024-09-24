<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import DottedMap from 'dotted-map';

    const map = new DottedMap({
        height: 50,
        grid: 'diagonal'
    });

    map.addPin({
        lat: 50.1109,
        lng: 8.6821,
        data: {
            city: 'Frankfurt',
            country: 'Germany'
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
            country: 'France'
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
            country: 'India'
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
            country: 'Singapore'
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
            country: 'Australia'
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
            country: 'USA'
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
            country: 'USA'
        },
        svgOptions: {
            color: 'blue'
        }
    });

    const points = map.getPoints();
</script>

<div class="bg-white">
    <div
        class="container relative mx-auto flex items-center justify-center perspective-distant transform-3d"
    >
        <svg viewBox="0 0 105 50" class="h-full w-full rotate-x-45">
            {#each points as point}
                <circle
                    cx={point.x}
                    cy={point.y}
                    r="0.25"
                    class={classNames({
                        'fill-current': true,
                        'fill-red-500': point.svgOptions?.color === 'red',
                        'fill-blue-500': point.svgOptions?.color === 'blue'
                    })}
                />
            {/each}
        </svg>
    </div>
</div>
