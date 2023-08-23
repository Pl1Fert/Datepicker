import { SyntheticEvent } from "react";

import { StartDay } from "@/constants";
import { IDate, IHolidaysDates, ISelectedDate } from "@/interfaces";

export interface IProps {
    selectedDate?: ISelectedDate;
    startDay: StartDay;
    shownDate: IDate;
    color?: string;
    highlightWeekends: boolean;
    highlightHolidays: boolean;
    holidays: IHolidaysDates;
    handleDayClick?: (e: SyntheticEvent) => void;
}
