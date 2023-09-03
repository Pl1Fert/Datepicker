import { memo } from "react";

import { CalendarBody, CalendarHeader } from "@/components";
import { StartDay } from "@/constants";
import { GlobalStyles } from "@/styles/global";

import { IProps } from "./calendar.interfaces";
import { StyledMain } from "./calendar.styled";

export const Calendar = memo<IProps>(
    ({
        startDay = StartDay.Monday,
        maxDate,
        minDate,
        color,
        highlightHolidays = false,
        highlightWeekends = false,
        selectedDate,
        toDate,
        fromDate,
        handleChange,
        handleNextMonthClick,
        handlePrevMonthClick,
        handleTodayClick,
        shownDate,
        holidays,
        renderTodoList,
        handleDayClick,
        renderPicker,
        renderPickers,
    }) => (
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
                    startDay={startDay}
                    shownDate={shownDate}
                    color={color}
                    highlightHolidays={highlightHolidays}
                    highlightWeekends={highlightWeekends}
                    holidays={holidays}
                    handleDayClick={handleDayClick}
                    toDate={toDate}
                    fromDate={fromDate}
                />
                {renderTodoList && renderTodoList()}
            </StyledMain>
        </>
    )
);
