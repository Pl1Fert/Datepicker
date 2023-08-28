import { IDate } from "@/interfaces";

export const CURRENT_DATE: IDate = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    day: new Date().getDate(),
};
