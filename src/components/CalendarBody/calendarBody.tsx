import { FC, SyntheticEvent } from "react";

import { IDate } from "@/interfaces";
import { areEqualDates, getMonthData, getWeekDaysNames } from "@/utils";

import { IProps } from "./calendarBody.interfaces";
import { SevenColGrid, StyledDayCell, StyledDayName } from "./calendarBody.styled";

export const CalendarBody: FC<IProps> = ({
    selectedDate: { month, year },
    selectedDate,
    startDay,
    currentDate,
    setSelectedDate,
}) => {
    const handleDayClick = (e: SyntheticEvent): void => {
        const target = e.target as HTMLElement;

        setSelectedDate((prevState: IDate) => ({
            ...prevState,
            day: parseInt(target.innerText, 10),
        }));
    };

    return (
        <section>
            <SevenColGrid>
                {getWeekDaysNames(startDay).map((day) => (
                    <StyledDayName key={day}>{day}</StyledDayName>
                ))}
            </SevenColGrid>
            <SevenColGrid>
                {getMonthData(year, month, startDay).map((week) =>
                    week.map((day) =>
                        day ? (
                            <StyledDayCell
                                key={day}
                                today={areEqualDates({ ...selectedDate, day }, currentDate)}
                                selected={areEqualDates({ ...selectedDate, day }, selectedDate)}
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
};
