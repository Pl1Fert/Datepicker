import { IDate } from "@/interfaces";

export const isValidDate = (date: IDate | undefined): boolean => {
    if (!date) {
        return false;
    }

    const newDate = new Date(date.year, date.month - 1, date.day);

    return Boolean(+newDate) && newDate.getDate() === date.day;
};
