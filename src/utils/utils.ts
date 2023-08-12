export const formattedDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long' }).format(date);
};

export const getSlug = (slugWithDate: string) => {
  const re = /((\d{4})-\d{2}-\d{2})-([\w|-]*)/g;
  const matches = re.exec(slugWithDate);

  if (matches) {
    return matches[3];
  }

  return slugWithDate;
};
