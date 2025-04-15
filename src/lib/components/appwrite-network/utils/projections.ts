import { MAP_BOUNDS } from '../map.svelte';

const MAP_WIDTH = 1048.25;
const MAP_HEIGHT = 525;

type Coordinates = {
    latitude: number;
    longitude: number;
};

export const latLongToSvgPosition = ({ latitude, longitude }: Coordinates) => {
    const { west, east, north, south } = MAP_BOUNDS;

    const lngRatio = (longitude - west) / (east - west);
    const latRatio = (latitude - south) / (north - south);

    const clampedLngRatio = Math.max(0, Math.min(1, lngRatio));
    const clampedLatRatio = Math.max(0, Math.min(1, latRatio));

    const x = clampedLngRatio * MAP_WIDTH;
    const y = (1 - clampedLatRatio) * MAP_HEIGHT;

    return { x, y };
};
