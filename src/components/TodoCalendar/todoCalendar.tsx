import { memo, useMemo, useState } from "react";

import { Calendar, ErrorBoundary } from "@/components";
import { CURRENT_DATE, StartDayOfWeek } from "@/constants";
import { withMainLogic, withTodoListLogic } from "@/hocs";
import { IDate, ISelectedDate } from "@/interfaces";

import { IProps } from "./todoCalendar.interfaces";

const initialSelectedDate: ISelectedDate = {
    month: undefined,
    year: undefined,
    day: undefined,
};

const initialShownDate: IDate = {
    ...CURRENT_DATE,
};

export const TodoCalendar = memo<IProps>(
    ({
        startDayOfWeek = StartDayOfWeek.Monday,
        maxDate,
        minDate,
        color,
        highlightHolidays = false,
        highlightWeekends = false,
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

        return (
            <ErrorBoundary>
                <CalendarWithTodoList
                    startDayOfWeek={startDayOfWeek}
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
