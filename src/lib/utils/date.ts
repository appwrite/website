import { format } from 'date-fns';

export const formatDate = (date: string | Date | number): string => {
    const dt = new Date(date);

    return format(dt, 'MMM d, yyyy');
};

export const addDays = (date: Date, days: number) => {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
};

export const toReleaseDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
    });
};

export const isNewUntil = (date: string): boolean => {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
        return false;
    }
    return parsedDate.setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0);
};
