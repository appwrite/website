import proj4 from 'proj4';
import type { CreateMapOptions } from './types';
import { getMapPoints } from './helpers';

export const createMap = ({
    height,
    width,
    countries,
    region,
    markers,
    markerColor,
    baseColor
}: CreateMapOptions) => {
    const {
        points,
        X_MIN,
        Y_MAX,
        X_RANGE,
        Y_RANGE,
        width: mapWidth,
        height: mapHeight,
        ystep
    } = getMapPoints({ height, width, countries, region });

    const defaultRadius = 0.35;

    // Use the same exact constants as getMapPoints
    const TARGET_POINTS = 6000;
    const aspect = width / height;
    const NUM_ROWS = Math.round(Math.sqrt(TARGET_POINTS / aspect));
    const NUM_COLS = Math.round(NUM_ROWS * aspect);

    const markerPoints = markers.map((marker) => {
        const { lat, lng, size, ...markerData } = marker;
        const [googleX, googleY] = proj4('GOOGLE', [lng, lat]);

        // Map projected coordinates to pixel space (same as getMapPoints)
        const localx = ((googleX - X_MIN) / X_RANGE) * width;
        const localy = ((Y_MAX - googleY) / Y_RANGE) * height;

        // Round exactly as getMapPoints does
        const roundedX = Math.round(localx);
        const roundedY = Math.round(localy);

        // Create a key for this point
        const exactKey = `${roundedX};${roundedY}`;

        // Create the point if it doesn't exist
        if (!points[exactKey]) {
            points[exactKey] = {
                x: roundedX,
                y: roundedY
            };
        }

        // Use these exact coordinates directly
        return {
            x: roundedX,
            y: roundedY,
            color: markerColor,
            size: size ?? defaultRadius,
            ...markerData
        };
    });

    return {
        points: Object.values(points).map((point) => ({
            ...point,
            color: baseColor,
            size: defaultRadius
        })),
        markers: markerPoints
    };
};
