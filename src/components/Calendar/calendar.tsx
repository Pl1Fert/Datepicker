import { FC, useState } from "react";

import { CalendarBody, CalendarHeader } from "@/components";
import { StartDay } from "@/constants";
import { IDate, ISelectedDate } from "@/interfaces";
import { GlobalStyles } from "@/styles/global";

import { IProps } from "./calendar.interfaces";
import { StyledMain } from "./calendar.styled";

const currentDate: IDate = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    day: new Date().getDate(),
};

export const Calendar: FC<IProps> = ({ startDay = StartDay.Monday }) => {
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

    return (
        <>
            <GlobalStyles />
            <StyledMain>
                <CalendarHeader
                    currentYear={currentDate.year}
                    shownDate={shownDate}
                    setShownDate={setShownDate}
                />
                <CalendarBody
                    selectedDate={selectedDate}
                    startDay={startDay}
                    currentDate={currentDate}
                    setSelectedDate={setSelectedDate}
                    shownDate={shownDate}
                />
            </StyledMain>
        </>
    );
};
