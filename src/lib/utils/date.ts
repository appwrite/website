export const formatDate = (date: string | Date | number): string => {
    const dt = new Date(date);
    const month = dt.toLocaleString('en-US', { month: 'short' });
    const day = dt.getDate();
    const year = dt.getFullYear();
    return `${month} ${day}, ${year}`;
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
