export function randomPick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

export const deterministicRandom = <T>(options: T[], seed: string): T => {
    const index = Math.floor((parseInt(seed, 36) / 36 ** 4) * options.length);

    return options[index];
};

export const random = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
