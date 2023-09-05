import { IDate, IMaxMinDate, ISelectedDate } from "@/interfaces";

export const areEqualDates = (
    date1?: IDate | ISelectedDate | IMaxMinDate,
    date2?: IDate | ISelectedDate | IMaxMinDate
): boolean => {
    if (!date1 || !date2) return false;

    if ("day" in date1 && "day" in date2) {
        return date1.year === date2.year && date1.month === date2.month && date1.day === date2.day;
    }

    return date1.year === date2.year && date1.month === date2.month;
};
