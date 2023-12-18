export const formatDate = (date: string): string => {
    const dt = new Date(date);
    const month = dt.toLocaleString('default', { month: 'short' });
    const day = dt.getDate();
    const year = dt.getFullYear();
    return `${month} ${day}, ${year}`;
};
