export function isNumeric(value: unknown): boolean {
    if (typeof value === 'number' && !isNaN(value)) {
        return true;
    }
    if (typeof value === 'string' && value.trim() !== '') {
        return !isNaN(Number(value));
    }
    return false;
}
