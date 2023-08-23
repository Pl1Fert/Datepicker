import { FC, KeyboardEvent, SyntheticEvent, useState } from "react";

import { CalendarBody, CalendarHeader, Picker } from "@/components";
import { StartDay } from "@/constants";
import { IDate, ISelectedDate } from "@/interfaces";
import { GlobalStyles } from "@/styles/global";
import { formatDate, formatStringToDate, isValidDate } from "@/utils";

import { IProps } from "./calendar.interfaces";
import { StyledMain } from "./calendar.styled";

export const Calendar: FC<IProps> = ({
    startDay = StartDay.Monday,
    maxDate,
    minDate,
    color,
    highlightHolidays = false,
    highlightWeekends = false,
    setSelectedDate,
    selectedDate,
    handleChange,
    handleNextMonthClick,
    handlePrevMonthClick,
    handleTodayClick,
    shownDate,
    holidays,
    renderTodoList,
}) => (
    <>
        <GlobalStyles />
        <StyledMain>
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
                startDay={startDay}
                shownDate={shownDate}
                color={color}
                highlightHolidays={highlightHolidays}
                highlightWeekends={highlightWeekends}
                holidays={holidays}
                handleDayClick={handleDayClick}
            />
            {renderTodoList && renderTodoList()}
        </StyledMain>
    </>
);
