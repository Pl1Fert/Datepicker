import { memo } from "react";

import { CURRENT_DATE } from "@/constants";
import {
    areEqualDates,
    dateInRange,
    getMonthData,
    getWeekDaysNames,
    isHoliday,
    isWeekend,
} from "@/utils";

import { IProps } from "./calendarBody.interfaces";
import { SevenColGrid, StyledDayCell, StyledDayName } from "./calendarBody.styled";

export const CalendarBody = memo<IProps>(
    ({
        selectedDate,
        toDate,
        fromDate,
        startDay,
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
                                $color={color}
                                $today={areEqualDates({ ...shownDate, day }, CURRENT_DATE)}
                                $selected={areEqualDates({ ...shownDate, day }, selectedDate)}
                                $inRange={dateInRange({ ...shownDate, day }, fromDate, toDate)}
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
