import { SHORT_DAY_NAMES, StartDay } from "@/constants";
import {
    HttpResponse,
    IDate,
    IHolidaysDates,
    IHolidaysReponse,
    IMaxMinDate,
    ISelectedDate,
} from "@/interfaces";

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

export const getHolidays = async () => {
    let response: HttpResponse<IHolidaysReponse>;
    try {
        response = await http<IHolidaysReponse>(
            "https://www.googleapis.com/calendar/v3/calendars/en.by%23holiday%40group.v.calendar.google.com/events?key=AIzaSyD1AEr-SukVG5QIK999zDaHLPfjekxCKEE"
        );

        return response.parsedBody;
    } catch (e) {
        throw new Error("error");
    }
};

export const formatHolidays = (object: IHolidaysReponse | undefined): IHolidaysDates => {
    const returnObject: IHolidaysDates = {};

    if (!object) {
        return returnObject;
    }

    const { items } = object;
    const dates: string[] = items.map((item) => item.start.date);

    if (dates.length === 0) {
        return returnObject;
    }

    const currentYear = new Date().getFullYear();

    for (let i = currentYear - 1; i < currentYear + 2; i += 1) {
        returnObject[i] = [...dates.filter((date) => date.slice(0, 4) === i.toString())];
    }

    return returnObject;
};

export const formatDate = (date: IDate): string => {
    const month = date.month + 1;
    return `${date.year}-${month.toString().length === 1 ? `0${month}` : month}-${
        date.day.toString().length === 1 ? `0${date.day}` : date.day
    }`;
};

export const isHoliday = (date: IDate, holidays: string[] | undefined): boolean => {
    if (!holidays) {
        return false;
    }

    const dateString = formatDate(date);

    return holidays.includes(dateString);
};
