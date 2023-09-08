import { IHolidaysDates, IHolidaysReponse } from "@/interfaces";

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
