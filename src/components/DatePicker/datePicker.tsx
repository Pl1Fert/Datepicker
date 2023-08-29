import { memo, useMemo, useState } from "react";

import { Calendar, ErrorBoundary } from "@/components";
import { CURRENT_DATE, StartDay } from "@/constants";
import { withMainLogic, withPickerLogic } from "@/hocs";
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
    }) => {
        const [shownDate, setShownDate] = useState<IDate>(initialShownDate);
        const [selectedDate, setSelectedDate] = useState<ISelectedDate>(initialSelectedDate);

        const CalendarWithMainLogic = useMemo(
            () => withMainLogic(Calendar, shownDate, setShownDate),
            [shownDate]
        );
        const CalendarWithPicker = withPickerLogic(
            CalendarWithMainLogic,
            selectedDate,
            setSelectedDate,
            shownDate,
            setShownDate
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
