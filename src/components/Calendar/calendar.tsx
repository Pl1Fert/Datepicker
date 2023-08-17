import { FC, useState } from "react";

import { CalendarBody, CalendarHeader } from "@/components";
import { StartDay } from "@/constants";
import { IDate } from "@/interfaces";
import { GlobalStyles } from "@/styles/global";

import { IProps } from "./calendar.interfaces";
import { StyledMain } from "./calendar.styled";

export const Calendar: FC<IProps> = ({ startDay = StartDay.Monday }) => {
    const initialState: IDate = {
        currentMonth: new Date().getMonth(),
        currentYear: new Date().getFullYear(),
    };

    const [currentDate, setCurrentDate] = useState<IDate>(initialState);

    return (
        <>
            <GlobalStyles />
            <StyledMain>
                <CalendarHeader currentDate={currentDate} setCurrentDate={setCurrentDate} />
                <CalendarBody currentDate={currentDate} startDay={startDay} />
            </StyledMain>
        </>
    );
};
