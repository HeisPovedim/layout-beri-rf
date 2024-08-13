// Function to validate the date format (DD/MM/YYYY)
export const validateDate = (value: string) => {
  if (+value) {
    value = value.toString();
  }
  const day = parseInt(value.slice(0, 2), 10);
  const month = parseInt(value.slice(2, 4), 10);
  const year = parseInt(value.slice(4), 10);

  if (month < 1 || month > 12) return "*Некорректный месяц";
  if (year < 1900 || year > new Date().getFullYear())
    return "*Некорректный год";

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };
  if (day < 1 || day > daysInMonth(month, year)) return "*Некорректный день";

  return true;
};
