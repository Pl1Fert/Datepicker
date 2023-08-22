import { memo, SyntheticEvent } from "react";

import { ISelectedDate } from "@/interfaces";
import { areEqualDates, getMonthData, getWeekDaysNames, isHoliday, isWeekend } from "@/utils";

import { IProps } from "./calendarBody.interfaces";
import { SevenColGrid, StyledDayCell, StyledDayName } from "./calendarBody.styled";

export const CalendarBody = memo<IProps>(
    ({
        selectedDate,
        startDay,
        currentDate,
        setSelectedDate,
        shownDate,
        color,
        highlightWeekends,
        highlightHolidays,
        holidays,
    }) => {
        const handleDayClick = (e: SyntheticEvent): void => {
            const target = e.target as HTMLElement;

            setSelectedDate({
                year: shownDate.year,
                month: shownDate.month,
                day: parseInt(target.innerText, 10),
            } as ISelectedDate);
        };

        return (
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
                                    $highlightWeekends={
                                        highlightWeekends && isWeekend(index, startDay)
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
        );
    }
);
