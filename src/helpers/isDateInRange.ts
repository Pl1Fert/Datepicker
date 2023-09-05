import { IDate, ISelectedDate } from "@/interfaces";

export const isDateInRange = (
    date: IDate,
    startDate?: ISelectedDate,
    endDate?: ISelectedDate
): boolean => {
    if (!endDate || !startDate) {
        return false;
    }
    if (
        !endDate.year ||
        !endDate.month ||
        !startDate.year ||
        !startDate.month ||
        !endDate.day ||
        !startDate.day
    ) {
        return false;
    }

    const dateN = new Date(date.year, date.month, date.day);
    const startDateN = new Date(startDate.year, startDate.month, startDate.day);
    const endDateN = new Date(endDate.year, endDate.month, endDate.day);

    return dateN >= startDateN && dateN <= endDateN;
};
