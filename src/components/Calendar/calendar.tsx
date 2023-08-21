import { FC, useEffect, useState } from "react";

import { CalendarBody, CalendarHeader } from "@/components";
import { StartDay } from "@/constants";
import { IDate, IHolidaysDates, ISelectedDate } from "@/interfaces";
import { GlobalStyles } from "@/styles/global";
import { formatHolidays, getHolidays } from "@/utils";

import { IProps } from "./calendar.interfaces";
import { StyledMain } from "./calendar.styled";

const currentDate: IDate = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    day: new Date().getDate(),
};

export const Calendar: FC<IProps> = ({
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
        ...currentDate,
    };

    const [selectedDate, setSelectedDate] = useState<ISelectedDate>(initialSelectedDate);
    const [shownDate, setShownDate] = useState<IDate>(initialShownDate);
    const [holidays, setholidays] = useState<IHolidaysDates>({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await getHolidays();
            const dates = formatHolidays(data);
            setholidays(dates);
        };

        fetchData().catch(() => {});
    }, []);

    return (
        <>
            <GlobalStyles />
            <StyledMain>
                <CalendarHeader
                    currentDate={currentDate}
                    shownDate={shownDate}
                    setShownDate={setShownDate}
                    maxDate={maxDate}
                    minDate={minDate}
                />
                <CalendarBody
                    selectedDate={selectedDate}
                    startDay={startDay}
                    currentDate={currentDate}
                    setSelectedDate={setSelectedDate}
                    shownDate={shownDate}
                    color={color}
                    highlightHolidays={highlightHolidays}
                    highlightWeekends={highlightWeekends}
                    holidays={holidays}
                />
            </StyledMain>
        </>
    );
};
