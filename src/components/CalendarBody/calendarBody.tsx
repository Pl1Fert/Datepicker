import { FC, useState } from "react";

import { SHORT_DAY_NAMES } from "@/constants";
import { getMonthData } from "@/utils";

import { SevenColGrid, StyledDayCell, StyledDayName } from "./calendarBody.styled";

export const CalendarBody: FC = () => {
    const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

    return (
        <section>
            <SevenColGrid>
                {SHORT_DAY_NAMES.map((day) => (
                    <StyledDayName key={day}>{day}</StyledDayName>
                ))}
            </SevenColGrid>
            <SevenColGrid>
                {getMonthData(currentYear, currentMonth).map((week) =>
                    week.map((day) =>
                        day ? (
                            <StyledDayCell key={day}>{day}</StyledDayCell>
                        ) : (
                            <StyledDayCell key={day} />
                        )
                    )
                )}
            </SevenColGrid>
        </section>
    );
};
