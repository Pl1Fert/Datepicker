export const getNumberOfDaysInMonth = (year: number, month: number): number =>
    new Date(year, month + 1, 0).getDate();
