export const formattedDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long' }).format(date);
};
