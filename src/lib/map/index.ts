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

    const markerPoints = markers.map((marker) => {
        const { lat, lng, size, ...markerData } = marker;
        const [googleX, googleY] = proj4('GOOGLE', [lng, lat]);
        const rawY = (mapHeight * (Y_MAX - googleY)) / Y_RANGE;
        const rawX = (mapWidth * (googleX - X_MIN)) / X_RANGE;
        const y = Math.round(rawY / ystep);
        const x = Math.round(rawX);
        const localy = Math.round(y) * ystep;
        const localx = x;

        const key = [localx, localy].join(';');
        if (!points[key]) {
            const [localLng, localLat] = proj4('GOOGLE', 'WGS84', [
                (localx * X_RANGE) / mapWidth + X_MIN,
                Y_MAX - (localy * Y_RANGE) / mapHeight
            ]);
            points[key] = {
                x: localx,
                y: localy
            };
        }

        return {
            x: localx,
            y: localy,
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
