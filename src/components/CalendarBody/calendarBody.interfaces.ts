import { SyntheticEvent } from "react";

import { StartDayOfWeek } from "@/constants";
import { IDate, IHolidaysDates, ISelectedDate } from "@/interfaces";

export interface IProps {
    selectedDate?: ISelectedDate;
    endDate?: ISelectedDate;
    startDate?: ISelectedDate;
    startDayOfWeek: StartDayOfWeek;
    shownDate: IDate;
    color?: string;
    highlightWeekends: boolean;
    highlightHolidays: boolean;
    holidays: IHolidaysDates;
    handleDayClick: (e: SyntheticEvent) => void;
}
