import { FC } from "react";

import { CalendarBody, CalendarHeader } from "@/components";
import { GlobalStyles } from "@/styles/global";

import { StyledMain } from "./calendar.styled";

export const Calendar: FC = () => (
    <>
        <GlobalStyles />
        <StyledMain>
            <CalendarHeader />
            <CalendarBody />
        </StyledMain>
    </>
);
