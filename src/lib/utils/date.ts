export const formatDate = (date: string | Date | number): string => {
    const dt = new Date(date);
    const month = dt.toLocaleString('en-US', { month: 'short' });
    const day = dt.getDate();
    const year = dt.getFullYear();
    return `${month} ${day}, ${year}`;
};
