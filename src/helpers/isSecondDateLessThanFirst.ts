import { IDate } from "@/interfaces";

export const isSecondDateLessThanFirst = (date1: IDate, date2: IDate): boolean => {
    const date1N = new Date(date1.year, date1.month, date1.day);
    const date2N = new Date(date2.year, date2.month, date2.day);

    return date1N > date2N;
};
