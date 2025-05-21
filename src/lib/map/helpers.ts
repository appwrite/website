import proj4 from 'proj4';
import inside from '@turf/boolean-point-in-polygon';

import type {
    GeoJSON,
    GeoJsonFeature,
    Geometry,
    Region,
    PolygonGeometry,
    MultiPolygonGeometry,
    CreateMapOptions,
    Point
} from './types';
import geojsonWorld from './countries.geo.json';

export const DEFAULT_WORLD_REGION = {
    lat: { min: -56, max: 71 },
    lng: { min: -179, max: 179 }
};

export const computeGeojsonBox = (geojson: GeoJSON | GeoJsonFeature | Geometry): Region => {
    if ('type' in geojson) {
        if (geojson.type === 'FeatureCollection') {
            const boxes = geojson.features.map((feature) => computeGeojsonBox(feature));
            return {
                lat: {
                    min: Math.min(...boxes.map((box) => box.lat.min)),
                    max: Math.max(...boxes.map((box) => box.lat.max))
                },
                lng: {
                    min: Math.min(...boxes.map((box) => box.lng.min)),
                    max: Math.max(...boxes.map((box) => box.lng.max))
                }
            };
        } else if (geojson.type === 'Feature') {
            return computeGeojsonBox(geojson.geometry);
        } else if (geojson.type === 'MultiPolygon') {
            const flattened: PolygonGeometry = {
                type: 'Polygon',
                coordinates: geojson.coordinates.flat()
            };
            return computeGeojsonBox(flattened);
        } else if (geojson.type === 'Polygon') {
            const coords = geojson.coordinates.flat();
            const latitudes = coords.map(([_, lat]) => lat);
            const longitudes = coords.map(([lng, _]) => lng);

            return {
                lat: {
                    min: Math.min(...latitudes),
                    max: Math.max(...latitudes)
                },
                lng: {
                    min: Math.min(...longitudes),
                    max: Math.max(...longitudes)
                }
            };
        }
    }

    throw new Error(`Unknown or unsupported geojson structure`);
};

export const geojsonByCountry = (geojsonWorld as GeoJSON).features.reduce<
    Record<string, GeoJsonFeature>
>((countries, feature) => {
    countries[feature.id] = feature;
    return countries;
}, {});

export const geojsonToMultiPolygons = (geojson: GeoJSON): GeoJsonFeature => {
    const coordinates = geojson.features.reduce<MultiPolygonGeometry['coordinates']>(
        (poly, feature) => {
            if (feature.geometry.type === 'Polygon') {
                return [...poly, feature.geometry.coordinates];
            } else {
                return [...poly, ...feature.geometry.coordinates];
            }
        },
        []
    );
    return {
        type: 'Feature',
        id: 'multipolygon',
        properties: { name: 'Combined Polygons' },
        geometry: { type: 'MultiPolygon', coordinates }
    };
};

const getMapPointsKey = ({
    height = 0,
    width = 0,
    countries = [],
    region
}: Pick<CreateMapOptions, 'height' | 'width' | 'countries' | 'region'>) => {
    const sortedCountries = [...countries].sort();
    return JSON.stringify({
        height,
        width,
        countries: sortedCountries,
        region
    });
};

type MapPointsResult = {
    points: Record<string, Point>;
    X_MIN: number;
    Y_MAX: number;
    X_RANGE: number;
    Y_RANGE: number;
    height: number;
    width: number;
    ystep: number;
};

const mapPointsCache = new Map<string, MapPointsResult>();

export const getMapPoints = ({
    height = 0,
    width = 0,
    countries = [],
    region
}: Pick<CreateMapOptions, 'height' | 'width' | 'countries' | 'region'>): MapPointsResult => {
    if (height <= 0 && width <= 0) {
        throw new Error('height or width is required');
    }

    const key = getMapPointsKey({
        height,
        width,
        countries,
        region
    });

    if (mapPointsCache.has(key)) {
        return mapPointsCache.get(key)! as MapPointsResult;
    }

    let geojson: GeoJSON = geojsonWorld as GeoJSON;
    if (countries.length > 0) {
        geojson = {
            type: 'FeatureCollection',
            features: countries.map((country) => geojsonByCountry[country]).filter(Boolean)
        };
        if (!region) {
            region = computeGeojsonBox(geojson);
        }
    } else if (!region) {
        region = DEFAULT_WORLD_REGION;
    }

    const poly = geojsonToMultiPolygons(geojson);

    const [X_MIN, Y_MIN] = proj4('GOOGLE', [region.lng.min, region.lat.min]);
    const [X_MAX, Y_MAX] = proj4('GOOGLE', [region.lng.max, region.lat.max]);
    const X_RANGE = X_MAX - X_MIN;
    const Y_RANGE = Y_MAX - Y_MIN;

    if (width <= 0) {
        width = Math.round((height * X_RANGE) / Y_RANGE);
    } else if (height <= 0) {
        height = Math.round((width * Y_RANGE) / X_RANGE);
    }

    const points: Record<string, Point> = {};
    const ystep = 1;

    const TARGET_POINTS = 6000;
    const aspect = width / height;
    const NUM_ROWS = Math.round(Math.sqrt(TARGET_POINTS / aspect));
    const NUM_COLS = Math.round(NUM_ROWS * aspect);

    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            const localx = (col / (NUM_COLS - 1)) * width;
            const localy = (row / (NUM_ROWS - 1)) * height;

            const pointGoogle = [
                (localx / width) * X_RANGE + X_MIN,
                Y_MAX - (localy / height) * Y_RANGE
            ];
            const wgs84Point = proj4('GOOGLE', 'WGS84', pointGoogle);

            if (inside(wgs84Point, poly)) {
                const key = `${Math.round(localx)};${Math.round(localy)}`;
                points[key] = {
                    x: localx,
                    y: localy
                };
            }
        }
    }

    return {
        points,
        X_MIN,
        Y_MAX,
        X_RANGE,
        Y_RANGE,
        height,
        width,
        ystep
    };
};
