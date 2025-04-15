import { MAP_BOUNDS } from '../map.svelte';

type Coordinates = {
    latitude: number;
    longitude: number;
};

export const latLongToSvgPosition = ({ latitude, longitude }: Coordinates) => {
    const { west, east, north, south } = MAP_BOUNDS;

    // Handle longitude wrapping for coordinates crossing the date line
    let lng = longitude;
    if (lng < west) lng += 360;
    else if (lng > east) lng -= 360;

    // Calculate position as percentage of the map bounds
    const lngRatio = (lng - west) / (east - west);
    const latRatio = (north - latitude) / (north - south);

    // Convert to percentages clamped between 0-100
    const x = Math.max(0, Math.min(100, lngRatio * 100));
    const y = Math.max(0, Math.min(100, latRatio * 100));

    return { x, y };
};
