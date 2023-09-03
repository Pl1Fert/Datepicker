import { memo, useMemo, useState } from "react";

import { Calendar, ErrorBoundary } from "@/components";
import { CURRENT_DATE, StartDay } from "@/constants";
import { withMainLogic, withPickerLogic, withTodoListLogic } from "@/hocs";
import { IDate, ISelectedDate } from "@/interfaces";

import { IProps } from "./datePicker.interfaces";

const initialSelectedDate: ISelectedDate = {
    month: undefined,
    year: undefined,
    day: undefined,
};

const initialShownDate: IDate = {
    ...CURRENT_DATE,
};

export const DatePicker = memo<IProps>(
    ({
        startDay = StartDay.Monday,
        maxDate,
        minDate,
        color,
        highlightHolidays = false,
        highlightWeekends = false,
        onChange,
    }) => {
        const [shownDate, setShownDate] = useState<IDate>(initialShownDate);
        const [selectedDate, setSelectedDate] = useState<ISelectedDate>(initialSelectedDate);

        const CalendarWithMainLogic = useMemo(
            () => withMainLogic(Calendar, shownDate, setShownDate),
            [shownDate]
        );

        const CalendarWithTodoList = withTodoListLogic(
            CalendarWithMainLogic,
            selectedDate,
            setSelectedDate,
            shownDate
        );

        const CalendarWithPicker = withPickerLogic(
            CalendarWithTodoList,
            selectedDate,
            setSelectedDate,
            shownDate,
            setShownDate,
            onChange
        );

        return (
            <ErrorBoundary>
                <CalendarWithPicker
                    startDay={startDay}
                    maxDate={maxDate}
                    minDate={minDate}
                    color={color}
                    highlightHolidays={highlightHolidays}
                    highlightWeekends={highlightWeekends}
                />
            </ErrorBoundary>
        );
    }
);
