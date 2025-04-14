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
    let adjustedLong = longitude;
    if (longitude < MAP_BOUNDS.west) {
        adjustedLong += 360;
    } else if (longitude > MAP_BOUNDS.east) {
        adjustedLong -= 360;
    }

    const x = ((adjustedLong - MAP_BOUNDS.west) / (MAP_BOUNDS.east - MAP_BOUNDS.west)) * width;
    const latRatio = (MAP_BOUNDS.north - latitude) / (MAP_BOUNDS.north - MAP_BOUNDS.south);

    const adjustedLatRatio = Math.pow(latRatio, 0.95) * 0.96 + latRatio * 0.04;
    const y = adjustedLatRatio * height;

    return { x, y };
};
