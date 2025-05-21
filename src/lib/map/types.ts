import { z } from 'zod';

const polygonSchema = z.object({
	type: z.literal('Polygon'),
	coordinates: z.array(z.array(z.tuple([z.number(), z.number()])))
});

const multiPolygonSchema = z.object({
	type: z.literal('MultiPolygon'),
	coordinates: z.array(z.array(z.array(z.tuple([z.number(), z.number()]))))
});

const geometrySchema = z.discriminatedUnion('type', [polygonSchema, multiPolygonSchema]);

export const geoJsonSchema = z.object({
	type: z.literal('FeatureCollection'),
	features: z.array(
		z.object({
			type: z.literal('Feature'),
			id: z.string(),
			properties: z.object({
				name: z.string()
			}),
			geometry: geometrySchema
		})
	)
});

export type GeoJSON = z.infer<typeof geoJsonSchema>;
export type PolygonGeometry = z.infer<typeof polygonSchema>;
export type MultiPolygonGeometry = z.infer<typeof multiPolygonSchema>;
export type Geometry = z.infer<typeof geometrySchema>;
export type GeoJsonFeature = z.infer<typeof geoJsonSchema>['features'][number];

export interface Region {
	lat: { min: number; max: number };
	lng: { min: number; max: number };
}

export interface Marker {
	lat: number;
	lng: number;
	size?: number;
	city: string;
	code: string;
	available: boolean;
}

export interface CreateMapOptions {
	height: number;
	width: number;
	countries?: string[];
	region?: Region;
	markers: Marker[];
	baseColor: string;
	markerColor: string;
	skew?: number;
}
export interface Pin {
	lat: number;
	lng: number;
}

export type Point = {
	x: number;
	y: number;
};

export interface BoundingBox {
	lat: { min: number; max: number };
	lng: { min: number; max: number };
}
