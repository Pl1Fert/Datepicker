import { Dispatch, SetStateAction, SyntheticEvent } from "react";

import { StartDayOfWeek } from "@/constants";
import { IDate, IHolidaysDates, IMaxMinDate, ISelectedDate } from "@/interfaces";

export interface IProps {
    startDayOfWeek?: StartDayOfWeek;
    maxDate?: IMaxMinDate;
    minDate?: IMaxMinDate;
    color?: string;
    highlightWeekends?: boolean;
    highlightHolidays?: boolean;
    selectedDate?: ISelectedDate;
    endDate?: ISelectedDate;
    startDate?: ISelectedDate;
    shownDate: IDate;
    setShownDate: Dispatch<SetStateAction<IDate>>;
    holidays: IHolidaysDates;
    renderTodoList?: () => JSX.Element;
    renderPicker?: () => JSX.Element;
    renderPickers?: () => JSX.Element;
    handleDayClick: (e: SyntheticEvent) => void;
}
