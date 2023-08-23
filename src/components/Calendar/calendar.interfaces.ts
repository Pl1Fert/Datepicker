import { Dispatch, SetStateAction, SyntheticEvent } from "react";

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
    setSelectedDate?: Dispatch<SetStateAction<ISelectedDate>>;
    shownDate: IDate;
    holidays: IHolidaysDates;
    renderTodoList?: () => JSX.Element;
}
