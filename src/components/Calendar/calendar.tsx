import { FC, useState } from "react";

import { CalendarBody, CalendarHeader } from "@/components";
import { StartDay } from "@/constants";
import { IDate } from "@/interfaces";
import { GlobalStyles } from "@/styles/global";

import { IProps } from "./calendar.interfaces";
import { StyledMain } from "./calendar.styled";

const currentDate: IDate = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    day: new Date().getDate(),
};

export const Calendar: FC<IProps> = ({ startDay = StartDay.Monday }) => {
    const initialState: IDate = {
        ...currentDate,
    };

    const [selectedDate, setSelectedDate] = useState<IDate>(initialState);

    return (
        <>
            <GlobalStyles />
            <StyledMain>
                <CalendarHeader
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    currentYear={currentDate.year}
                />
                <CalendarBody
                    selectedDate={selectedDate}
                    startDay={startDay}
                    currentDate={currentDate}
                    setSelectedDate={setSelectedDate}
                />
            </StyledMain>
        </>
    );
};
