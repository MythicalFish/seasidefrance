export const formatDate = (date: Date | string | undefined): string => {
  if (!date) return '';
  let d = date;
  if (typeof date === 'string') d = new Date(date);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
};
