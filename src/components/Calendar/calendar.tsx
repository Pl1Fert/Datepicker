import { memo, SyntheticEvent } from "react";

import { CalendarBody, CalendarHeader } from "@/components";
import { CURRENT_DATE, StartDayOfWeek } from "@/constants";
import { IDate } from "@/interfaces";
import { GlobalStyles } from "@/styles/global";

import { IProps } from "./calendar.interfaces";
import { StyledMain } from "./calendar.styled";

export const Calendar = memo<IProps>(
    ({
        startDayOfWeek = StartDayOfWeek.Monday,
        maxDate,
        minDate,
        color,
        highlightHolidays = false,
        highlightWeekends = false,
        selectedDate,
        endDate,
        startDate,
        shownDate,
        setShownDate,
        holidays,
        renderTodoList,
        handleDayClick,
        renderPicker,
        renderPickers,
    }) => {
        const handleChange = (e: SyntheticEvent): void => {
            const target = e.target as HTMLInputElement;

            if (target.name === "currentYear") {
                setShownDate(
                    (prevState: IDate): IDate => ({
                        ...prevState,
                        year: parseInt(target.value, 10),
                    })
                );
            } else {
                setShownDate(
                    (prevState: IDate): IDate => ({
                        ...prevState,
                        month: parseInt(target.value, 10),
                    })
                );
            }
        };

        const handleNextMonthClick = (): void => {
            if (shownDate.month < 11) {
                setShownDate(
                    (prevState: IDate): IDate => ({
                        ...prevState,
                        month: shownDate.month + 1,
                    })
                );
            } else {
                setShownDate(
                    (prevState: IDate): IDate => ({
                        ...prevState,
                        month: 0,
                        year: shownDate.year + 1,
                    })
                );
            }
        };

        const handlePrevMonthClick = (): void => {
            if (shownDate.month > 0) {
                setShownDate(
                    (prevState: IDate): IDate => ({
                        ...prevState,
                        month: shownDate.month - 1,
                    })
                );
            } else {
                setShownDate(
                    (prevState: IDate): IDate => ({
                        ...prevState,
                        month: 11,
                        year: shownDate.year - 1,
                    })
                );
            }
        };

        const handleTodayClick = (): void => {
            setShownDate({ ...CURRENT_DATE });
        };

        return (
            <>
                <GlobalStyles />
                <StyledMain>
                    {renderPicker && renderPicker()}
                    {renderPickers && renderPickers()}
                    <CalendarHeader
                        shownDate={shownDate}
                        maxDate={maxDate}
                        minDate={minDate}
                        onChange={handleChange}
                        onClick={handleTodayClick}
                        handleNextMonthClick={handleNextMonthClick}
                        handlePrevMonthClick={handlePrevMonthClick}
                    />
                    <CalendarBody
                        selectedDate={selectedDate}
                        startDayOfWeek={startDayOfWeek}
                        shownDate={shownDate}
                        color={color}
                        highlightHolidays={highlightHolidays}
                        highlightWeekends={highlightWeekends}
                        holidays={holidays}
                        handleDayClick={handleDayClick}
                        endDate={endDate}
                        startDate={startDate}
                    />
                    {renderTodoList && renderTodoList()}
                </StyledMain>
            </>
        );
    }
);
