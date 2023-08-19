import { SHORT_DAY_NAMES, StartDay } from "@/constants";
import { IDate, IMaxMinDate, ISelectedDate } from "@/interfaces";

export const getNumberOfDaysInMonth = (year: number, month: number): number =>
    new Date(year, month + 1, 0).getDate();

export const areEqualDates = (a: IDate, b: IDate | ISelectedDate): boolean =>
    a.year === b.year && a.month === b.month && a.day === b.day;

export const getStartDayOfMonth = (year: number, month: number, startDay: StartDay): number => {
    let day: number = new Date(year, month, 1).getDay();

    if (startDay === StartDay.Sunday) {
        return day;
    }

    day -= 1;

    if (day === -1) {
        return 6;
    }

    return day;
};

export const getYearNumbers = (currentYear: number): number[] => {
    const years: number[] = [currentYear];

    for (let i = 1; i <= 4; i += 1) {
        years.push(currentYear - i);
        years.unshift(currentYear + i);
    }

    return years;
};

export const getWeekDaysNames = (startDay: StartDay): string[] => {
    if (startDay === StartDay.Monday) {
        return SHORT_DAY_NAMES;
    }
    const array = [...SHORT_DAY_NAMES];
    array.unshift(array.pop() as string);

    return array;
};

export const getMonthData = (
    year: number,
    month: number,
    startDay: StartDay
): (number | undefined)[][] => {
    const result: (number | undefined)[][] = [];
    const daysInMonth = getNumberOfDaysInMonth(year, month);
    const monthStartsOn = getStartDayOfMonth(year, month, startDay);
    let day: number = 1;

    for (let i = 0; i < (daysInMonth + monthStartsOn) / 7; i += 1) {
        result[i] = [];

        for (let j = 0; j < 7; j += 1) {
            if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
                result[i]![j] = undefined;
            } else {
                result[i]![j] = new Date(year, month, day).getDate();
                day += 1;
            }
        }
    }

    return result;
};

export const compareDates = (date1?: IMaxMinDate, date2?: IMaxMinDate): boolean => {
    if (!date1 || !date2) return false;

    return date1.year === date2.year && date1.month === date2.month;
};
