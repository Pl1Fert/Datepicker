import { IDate } from "@/interfaces";
import { formatDateToString } from "@/utils/formatters";

export const isHoliday = (date: IDate, holidays: string[] | undefined): boolean => {
    if (!holidays) {
        return false;
    }

    const dateString = formatDateToString(date);

    return holidays.includes(dateString);
};
