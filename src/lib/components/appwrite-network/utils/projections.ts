import { MAP_BOUNDS } from '../map.svelte';

type Coordinates = {
    latitude: number;
    longitude: number;
};

type PixelPosition = {
    x: number;
    y: number;
};

export const latLongToSvgPosition = ({
    latitude,
    longitude,
    width,
    height
}: Coordinates & { width: number; height: number }) => {
    const { west, east, north, south } = MAP_BOUNDS;

    const lngRatio = (longitude - west) / (east - west);
    const latRatio = (north - latitude) / (north - south);

    const x = Math.max(0, Math.min(1, lngRatio)) * 100; // % instead of px
    const y = Math.max(0, Math.min(1, latRatio)) * 100;

    return { x, y };
};
