export const formatDate = (date: Date | string): string => {
  const dateObj = new Date(date)
  return Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(dateObj)
}