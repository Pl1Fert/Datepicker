export const getNumberOfDaysInMonth = (year: number, month: number): number =>
    new Date(year, month + 1, 0).getDate();

export const areEqualDates = (a: Date, b: Date): boolean => {
    if (!a || !b) return false;

    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
};

export const getStartDayOfMonth = (year: number, month: number): number => {
    const day: number = new Date(year, month, 1).getDay() - 1;

    if (day === -1) {
        return 6;
    }

    return day;
};

export const getMonthData = (year: number, month: number): (number | undefined)[][] => {
    const result: (number | undefined)[][] = [];
    const daysInMonth = getNumberOfDaysInMonth(year, month);
    const monthStartsOn = getStartDayOfMonth(year, month);
    let day: number = 1;

    for (let i = 0; i < (daysInMonth + monthStartsOn) / 7; i += 1) {
        result[i] = [];

        for (let j = 0; j < 7; j += 1) {
            if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
                result[i][j] = undefined;
            } else {
                result[i][j] = new Date(year, month, day).getDate();
                day += 1;
            }
        }
    }

    return result;
};
