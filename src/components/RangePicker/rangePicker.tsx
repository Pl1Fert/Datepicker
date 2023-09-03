import { memo, useMemo, useState } from "react";

import { Calendar, ErrorBoundary } from "@/components";
import { CURRENT_DATE, StartDay } from "@/constants";
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
        startDay = StartDay.Monday,
        maxDate,
        minDate,
        color,
        highlightHolidays = false,
        highlightWeekends = false,
        onChange,
    }) => {
        const [shownDate, setShownDate] = useState<IDate>(initialShownDate);
        const [toDate, setToDate] = useState<ISelectedDate>(initialSelectedDate);
        const [fromDate, setFromDate] = useState<ISelectedDate>(initialSelectedDate);

        const CalendarWithMainLogic = useMemo(
            () => withMainLogic(Calendar, shownDate, setShownDate),
            [shownDate]
        );
        const CalendarWithRangePicker = withRangePickerLogic(
            CalendarWithMainLogic,
            toDate,
            fromDate,
            setToDate,
            setFromDate,
            shownDate,
            setShownDate,
            onChange
        );

        return (
            <ErrorBoundary>
                <CalendarWithRangePicker
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
