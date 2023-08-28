import { SyntheticEvent } from "react";

import { StartDay } from "@/constants";
import { IDate, IHolidaysDates, IMaxMinDate, ISelectedDate } from "@/interfaces";

export interface IProps {
    startDay?: StartDay;
    maxDate?: IMaxMinDate;
    minDate?: IMaxMinDate;
    color?: string;
    highlightWeekends?: boolean;
    highlightHolidays?: boolean;
    handleChange: (e: SyntheticEvent) => void;
    handleTodayClick: () => void;
    handlePrevMonthClick: () => void;
    handleNextMonthClick: () => void;
    selectedDate?: ISelectedDate;
    toDate?: ISelectedDate;
    fromDate?: ISelectedDate;
    shownDate: IDate;
    holidays: IHolidaysDates;
    renderTodoList?: () => JSX.Element;
    renderPicker?: () => JSX.Element;
    renderPickers?: () => JSX.Element;
    handleDayClick: (e: SyntheticEvent) => void;
}
