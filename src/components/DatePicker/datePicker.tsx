import { memo, useState } from "react";

import { Calendar } from "@/components";
import { CURRENT_DATE, StartDay } from "@/constants";
import { withMainLogic, withPickerLogic } from "@/hocs";
import { IDate, ISelectedDate } from "@/interfaces";

import { IProps } from "./datePicker.interfaces";

export const DatePicker = memo<IProps>(
    ({
        startDay = StartDay.Monday,
        maxDate,
        minDate,
        color,
        highlightHolidays = false,
        highlightWeekends = false,
    }) => {
        const initialSelectedDate: ISelectedDate = {
            month: undefined,
            year: undefined,
            day: undefined,
        };

        const initialShownDate: IDate = {
            ...CURRENT_DATE,
        };

        const [shownDate, setShownDate] = useState<IDate>(initialShownDate);
        const [selectedDate, setSelectedDate] = useState<ISelectedDate>(initialSelectedDate);

        const CalendarWithMainLogic = withMainLogic(Calendar, shownDate, setShownDate);
        const CalendarWithTodoList = withPickerLogic(
            CalendarWithMainLogic,
            selectedDate,
            setSelectedDate,
            shownDate,
            setShownDate
        );

        return (
            <div>
                <CalendarWithTodoList
                    startDay={startDay}
                    maxDate={maxDate}
                    minDate={minDate}
                    color={color}
                    highlightHolidays={highlightHolidays}
                    highlightWeekends={highlightWeekends}
                />
            </div>
        );
    }
);
