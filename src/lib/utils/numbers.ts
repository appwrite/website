export const numberWithinRange = (number: number, min: number, max: number) =>
    Math.min(Math.max(number, min), max);

export const getRandomNumber = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
};
