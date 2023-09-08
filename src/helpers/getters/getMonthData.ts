import { StartDayOfWeek } from "@/constants";

import { getNumberOfDaysInMonth } from "./getNumberOfDaysInMonth";
import { getStartDayOfMonth } from "./getStartDayOfMonth";

export const getMonthData = (
    year: number,
    month: number,
    startDayOfWeek: StartDayOfWeek
): (number | undefined)[][] => {
    const result: (number | undefined)[][] = [];
    const daysInMonth = getNumberOfDaysInMonth(year, month);
    const monthStartsOn = getStartDayOfMonth(year, month, startDayOfWeek);
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
