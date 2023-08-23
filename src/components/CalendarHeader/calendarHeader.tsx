import { memo } from "react";

import next from "@/assets/icons/Next.svg";
import prev from "@/assets/icons/Prev.svg";
import { CURRENT_DATE, MONTH_NAMES } from "@/constants";
import { compareDates, getYearNumbers } from "@/utils";

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
            <Title onClick={onClick}>{CURRENT_DATE.day}</Title>
            <Row>
                <StyledButton
                    type="button"
                    onClick={handlePrevMonthClick}
                    disabled={compareDates({ year, month }, minDate)}>
                    <img src={prev} alt="prev" />
                </StyledButton>
                <StyledSelectContainer>
                    <StyledSelect name="currentMonth" value={month} onChange={onChange}>
                        {MONTH_NAMES.map((monthItem, index) => (
                            <option key={monthItem} value={index}>
                                {monthItem}
                            </option>
                        ))}
                    </StyledSelect>
                    <StyledSelect name="currentYear" value={year} onChange={onChange}>
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
                    disabled={compareDates({ year, month }, maxDate)}>
                    <img src={next} alt="next" />
                </StyledButton>
            </Row>
        </StyledHeader>
    )
);
