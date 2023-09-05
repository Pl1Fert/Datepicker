import { memo, useMemo, useState } from "react";

import { Calendar, ErrorBoundary } from "@/components";
import { CURRENT_DATE, StartDayOfWeek } from "@/constants";
import { withMainLogic, withRangePickerLogic } from "@/hocs";
import { IDate, ISelectedDate } from "@/interfaces";

import { IProps } from "./rangePicker.interfaces";

const initialSelectedDate: ISelectedDate = {
    month: undefined,
    year: undefined,
    day: undefined,
};

const initialShownDate: IDate = {
    ...CURRENT_DATE,
};

export const RangePicker = memo<IProps>(
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
        const [endDate, setEndDate] = useState<ISelectedDate>(initialSelectedDate);
        const [startDate, setStartDate] = useState<ISelectedDate>(initialSelectedDate);

        const CalendarWithMainLogic = useMemo(() => withMainLogic(Calendar), [shownDate]);
        const CalendarWithRangePicker = withRangePickerLogic(
            CalendarWithMainLogic,
            endDate,
            startDate,
            setEndDate,
            setStartDate,
            shownDate,
            setShownDate,
            onChange
        );

        return (
            <ErrorBoundary>
                <CalendarWithRangePicker
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
