import { FC } from "react";

import { CalendarBody, CalendarHeader } from "@/components";

import { StyledMain } from "./calendar.styled";

export const Calendar: FC = () => (
    <StyledMain>
        <CalendarHeader />
        <CalendarBody />
    </StyledMain>
);
