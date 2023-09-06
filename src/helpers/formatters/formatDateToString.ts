import { IDate, ISelectedDate } from "@/interfaces";

export const formatDateToString = (date: IDate | ISelectedDate): string => {
    if (!date.month || !date.year || !date.day) {
        return "";
    }

    const month = date.month + 1;
    return `${date.year}-${month.toString().length === 1 ? `0${month}` : month}-${
        date.day.toString().length === 1 ? `0${date.day}` : date.day
    }`;
};
