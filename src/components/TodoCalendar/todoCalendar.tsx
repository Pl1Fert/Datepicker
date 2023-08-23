import { memo, useState } from "react";

import { Calendar } from "@/components";
import { StartDay } from "@/constants";
import { withMainLogic, withTodoListLogic } from "@/hocs";
import { ISelectedDate } from "@/interfaces";

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

        const [selectedDate, setSelectedDate] = useState<ISelectedDate>(initialSelectedDate);

        const CalendarWithMainLogic = withMainLogic(Calendar);
        const CalendarWithTodoList = withTodoListLogic(
            CalendarWithMainLogic,
            selectedDate,
            setSelectedDate
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
