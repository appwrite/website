export function toScale(value: number, from: [number, number], to: [number, number]) {
    const [fromMin, fromMax] = from;
    const [toMin, toMax] = to;

    const fromRange = fromMax - fromMin;
    const toRange = toMax - toMin;
    const scale = toRange / fromRange;

    return (value - fromMin) * scale + toMin;
}
