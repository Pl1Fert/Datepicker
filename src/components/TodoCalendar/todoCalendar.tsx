import { memo, useMemo, useState } from "react";

import { Calendar } from "@/components";
import { CURRENT_DATE, StartDay } from "@/constants";
import { withMainLogic, withTodoListLogic } from "@/hocs";
import { IDate, ISelectedDate } from "@/interfaces";

import { IProps } from "./todoCalendar.interfaces";

export const TodoCalendar = memo<IProps>(
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

        return (
            <CalendarWithTodoList
                startDay={startDay}
                maxDate={maxDate}
                minDate={minDate}
                color={color}
                highlightHolidays={highlightHolidays}
                highlightWeekends={highlightWeekends}
            />
        );
    }
);
