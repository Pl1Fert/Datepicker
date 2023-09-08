import { memo } from "react";

import { CURRENT_DATE } from "@/constants";
import {
    areEqualDates,
    getMonthData,
    getWeekDaysNames,
    isDateInRange,
    isHoliday,
    isWeekend,
} from "@/helpers";

import { IProps } from "./calendarBody.interfaces";
import { SevenColGrid, StyledDayCell, StyledDayName } from "./calendarBody.styled";

export const CalendarBody = memo<IProps>(
    ({
        selectedDate,
        endDate,
        startDate,
        startDayOfWeek,
        shownDate,
        color,
        highlightWeekends,
        highlightHolidays,
        holidays,
        handleDayClick,
    }) => (
        <section>
            <SevenColGrid>
                {getWeekDaysNames(startDayOfWeek).map((day) => (
                    <StyledDayName key={day}>{day}</StyledDayName>
                ))}
            </SevenColGrid>
            <SevenColGrid>
                {getMonthData(shownDate.year, shownDate.month, startDayOfWeek).map((week) =>
                    week.map((day, index) =>
                        day ? (
                            <StyledDayCell
                                key={day}
                                $color={color}
                                $today={areEqualDates({ ...shownDate, day }, CURRENT_DATE)}
                                $selected={areEqualDates({ ...shownDate, day }, selectedDate)}
                                $inRange={isDateInRange({ ...shownDate, day }, startDate, endDate)}
                                $highlightWeekends={
                                    highlightWeekends && isWeekend(index, startDayOfWeek)
                                }
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
