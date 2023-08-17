import { FC } from "react";

import { getMonthData, getWeekDaysNames } from "@/utils";

import { IProps } from "./calendarBody.interfaces";
import { SevenColGrid, StyledDayCell, StyledDayName } from "./calendarBody.styled";

export const CalendarBody: FC<IProps> = ({
    currentDate: { currentMonth, currentYear },
    startDay,
}) => (
    <section>
        <SevenColGrid>
            {getWeekDaysNames(startDay).map((day) => (
                <StyledDayName key={day}>{day}</StyledDayName>
            ))}
        </SevenColGrid>
        <SevenColGrid>
            {getMonthData(currentYear, currentMonth, startDay).map((week) =>
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
