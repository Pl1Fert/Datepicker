import { SyntheticEvent } from "react";

import { StartDay } from "@/constants";
import { IDate, IHolidaysDates, ISelectedDate } from "@/interfaces";

export interface IProps {
    selectedDate: ISelectedDate;
    currentDate: IDate;
    startDay: StartDay;
    shownDate: IDate;
    color?: string;
    highlightWeekends: boolean;
    highlightHolidays: boolean;
    holidays: IHolidaysDates;
    handleDayClick: (e: SyntheticEvent) => void;
}
