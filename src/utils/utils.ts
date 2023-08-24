import { StartDay } from "@/constants";
import { HttpResponse, IDate, IMaxMinDate, ISelectedDate } from "@/interfaces";

import { formatDateToString } from "./formatters";

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

export const isWeekend = (index: number, startDay: StartDay): boolean => {
    const weekendsStartsMonday = [5, 6];
    const weekendsStartsSunday = [0, 6];

    if (startDay === StartDay.Monday) {
        return weekendsStartsMonday.includes(index);
    }
    if (startDay === StartDay.Sunday) {
        return weekendsStartsSunday.includes(index);
    }

    return false;
};

export async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(request);

    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        response.parsedBody = await response.json();
    } catch (ex) {}

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}

export const isHoliday = (date: IDate, holidays: string[] | undefined): boolean => {
    if (!holidays) {
        return false;
    }

    const dateString = formatDateToString(date);

    return holidays.includes(dateString);
};

export const isValidDate = (date: IDate | undefined): boolean => {
    if (!date) {
        return false;
    }

    const newDate = new Date(date.year, date.month - 1, date.day);

    return Boolean(+newDate) && newDate.getDate() === date.day;
};

export const dateInRange = (
    date: IDate,
    fromDate?: ISelectedDate,
    toDate?: ISelectedDate
): boolean => {
    if (!toDate || !fromDate) {
        return false;
    }
    if (
        !toDate.year ||
        !toDate.month ||
        !fromDate.year ||
        !fromDate.month ||
        !toDate.day ||
        !fromDate.day
    ) {
        return false;
    }

    const dateN = new Date(date.year, date.month, date.day);
    const fromDateN = new Date(fromDate.year, fromDate.month, fromDate.day);
    const toDateN = new Date(toDate.year, toDate.month, toDate.day);

    return dateN >= fromDateN && dateN <= toDateN;
};

export const isSecondDateLessThanFirst = (date1: IDate, date2: IDate): boolean => {
    const date1N = new Date(date1.year, date1.month, date1.day);
    const date2N = new Date(date2.year, date2.month, date2.day);

    return date1N > date2N;
};
