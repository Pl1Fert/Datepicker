import { memo, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";

import { Calendar, ErrorBoundary } from "@/components";
import { CURRENT_DATE, StartDayOfWeek } from "@/constants";
import { withMainLogic, withPickerLogic, withTodoListLogic } from "@/hocs";
import { IDate, ISelectedDate } from "@/interfaces";
import { theme } from "@/styles/theme";

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
        startDayOfWeek = StartDayOfWeek.Monday,
        maxDate,
        minDate,
        color,
        highlightHolidays = false,
        highlightWeekends = false,
        onChange,
    }) => {
        const [shownDate, setShownDate] = useState<IDate>(initialShownDate);
        const [selectedDate, setSelectedDate] = useState<ISelectedDate>(initialSelectedDate);

        const CalendarWithMainLogic = useMemo(() => withMainLogic(Calendar), [shownDate]);

        const CalendarWithTodoList = withTodoListLogic(
            CalendarWithMainLogic,
            selectedDate,
            setSelectedDate,
            shownDate,
            setShownDate
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
                <ThemeProvider theme={theme}>
                    <CalendarWithPicker
                        startDayOfWeek={startDayOfWeek}
                        maxDate={maxDate}
                        minDate={minDate}
                        color={color}
                        highlightHolidays={highlightHolidays}
                        highlightWeekends={highlightWeekends}
                    />
                </ThemeProvider>
            </ErrorBoundary>
        );
    }
);
