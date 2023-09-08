import { memo } from "react";

import { NextIcon, PrevIcon } from "@/components/Icons";
import { CURRENT_DATE, MONTH_NAMES } from "@/constants";
import { areEqualDates, getYearNumbers } from "@/helpers";

import { IProps } from "./calendarHeader.interfaces";
import {
    Row,
    StyledButton,
    StyledHeader,
    StyledSelect,
    StyledSelectContainer,
    Title,
} from "./calendarHeader.styled";

export const CalendarHeader = memo<IProps>(
    ({
        shownDate: { month, year },
        maxDate,
        minDate,
        onChange,
        onClick,
        handleNextMonthClick,
        handlePrevMonthClick,
    }) => (
        <StyledHeader>
            <Title onClick={onClick} data-testid="today">
                {CURRENT_DATE.day}
            </Title>
            <Row>
                <StyledButton
                    type="button"
                    onClick={handlePrevMonthClick}
                    disabled={areEqualDates({ year, month }, minDate)}
                    data-testid="prevButton">
                    <PrevIcon size="16" />
                </StyledButton>
                <StyledSelectContainer>
                    <StyledSelect
                        name="currentMonth"
                        value={month}
                        onChange={onChange}
                        data-testid="currentMonth">
                        {MONTH_NAMES.map((monthItem, index) => (
                            <option key={monthItem} value={index}>
                                {monthItem}
                            </option>
                        ))}
                    </StyledSelect>
                    <StyledSelect
                        name="currentYear"
                        value={year}
                        onChange={onChange}
                        data-testid="currentYear">
                        {getYearNumbers(CURRENT_DATE.year).map((yearItem) => (
                            <option key={yearItem} value={yearItem}>
                                {yearItem}
                            </option>
                        ))}
                    </StyledSelect>
                </StyledSelectContainer>
                <StyledButton
                    type="button"
                    onClick={handleNextMonthClick}
                    disabled={areEqualDates({ year, month }, maxDate)}
                    data-testid="nextButton">
                    <NextIcon size="16" />
                </StyledButton>
            </Row>
        </StyledHeader>
    )
);
