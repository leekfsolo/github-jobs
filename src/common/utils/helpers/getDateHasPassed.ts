export const getDateHasPassed = (date: string) => {
  const public_date = new Date(date);
  const now = new Date();
  const date_has_passed = Math.floor(
    (now.getTime() - public_date.getTime()) / 1000 / 3600 / 24
  );

  return date_has_passed;
};
