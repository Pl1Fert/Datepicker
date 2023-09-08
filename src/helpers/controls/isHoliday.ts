import { formatDateToString } from "@/helpers/formatters";
import { IDate } from "@/interfaces";

export const isHoliday = (date: IDate, holidays: string[] | undefined): boolean => {
    if (!holidays) {
        return false;
    }

    const dateString = formatDateToString(date);

    return holidays.includes(dateString);
};
