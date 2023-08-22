import { memo } from "react";

import { areEqualDates, getMonthData, getWeekDaysNames, isHoliday, isWeekend } from "@/utils";

import { IProps } from "./calendarBody.interfaces";
import { SevenColGrid, StyledDayCell, StyledDayName } from "./calendarBody.styled";

export const CalendarBody = memo<IProps>(
    ({
        selectedDate,
        startDay,
        currentDate,
        shownDate,
        color,
        highlightWeekends,
        highlightHolidays,
        holidays,
        handleDayClick,
    }) => (
        <section>
            <SevenColGrid>
                {getWeekDaysNames(startDay).map((day) => (
                    <StyledDayName key={day}>{day}</StyledDayName>
                ))}
            </SevenColGrid>
            <SevenColGrid>
                {getMonthData(shownDate.year, shownDate.month, startDay).map((week) =>
                    week.map((day, index) =>
                        day ? (
                            <StyledDayCell
                                key={day}
                                color={color}
                                $today={areEqualDates({ ...shownDate, day }, currentDate)}
                                selected={areEqualDates({ ...shownDate, day }, selectedDate)}
                                $highlightWeekends={highlightWeekends && isWeekend(index, startDay)}
                                $highlightHolidays={
                                    highlightHolidays &&
                                    isHoliday({ ...shownDate, day }, holidays[shownDate.year])
                                }
                                onClick={handleDayClick}>
                                {day}
                            </StyledDayCell>
                        ) : (
                            <p key={day} />
                        )
                    )
                )}
            </SevenColGrid>
        </section>
    )
);
