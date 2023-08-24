import { IDate, IHolidaysDates, IHolidaysReponse, ISelectedDate } from "@/interfaces";

export const formatStringToDate = (dateString: string): IDate | undefined => {
    const dateArray = dateString.split("-");

    if (dateArray.length !== 3) {
        return undefined;
    }

    return {
        year: parseInt(dateArray.at(0) as string, 10),
        month: parseInt(dateArray.at(1) as string, 10) - 1,
        day: parseInt(dateArray.at(2) as string, 10),
    };
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

export const formatDateToString = (date: IDate | ISelectedDate): string => {
    if (!date.month || !date.year || !date.day) {
        return "";
    }

    const month = date.month + 1;
    return `${date.year}-${month.toString().length === 1 ? `0${month}` : month}-${
        date.day.toString().length === 1 ? `0${date.day}` : date.day
    }`;
};
