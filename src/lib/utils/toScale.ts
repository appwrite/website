export type Scale = [number, number];

/**
 * Function that, given a number and two scales,
 * converts that number from the first scale to the second scale.
 *
 * @example `number` 3, `from` { lower: 0, upper: 10 },
 * `to` { lower: 0, upper: 100 } => `number` 30
 */
export function toScale(value: number, from: Scale, to: Scale): number {
    return ((value - from[0]) * (to[1] - to[0])) / (from[1] - from[0]) + to[0];
}
