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

export const svgPositionToLatLong = ({
    width,
    height,
    ...position
}: PixelPosition & { width: number; height: number }) => {
    const longitude = MAP_BOUNDS.west + (position.x / width) * (MAP_BOUNDS.east - MAP_BOUNDS.west);
    const normalizedY = position.y / height;
    const latRatio =
        normalizedY > 0.5 ? normalizedY * 1.02 - 0.01 : Math.pow(normalizedY / 0.96, 1 / 0.95);

    const latitude = MAP_BOUNDS.north - latRatio * (MAP_BOUNDS.north - MAP_BOUNDS.south);

    return { latitude, longitude };
};
