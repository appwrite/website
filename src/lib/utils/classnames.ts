import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const classNames = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};
