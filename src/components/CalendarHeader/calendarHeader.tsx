import { FC, SyntheticEvent } from "react";

import next from "@/assets/icons/Next.svg";
import prev from "@/assets/icons/Prev.svg";
import { MONTH_NAMES } from "@/constants";
import { IDate } from "@/interfaces";
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

export const CalendarHeader: FC<IProps> = ({
    shownDate: { month, year },
    currentDate,
    setShownDate,
    maxDate,
    minDate,
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
        if (month < 11) {
            setShownDate(
                (prevState: IDate): IDate => ({
                    ...prevState,
                    month: month + 1,
                })
            );
        } else {
            setShownDate(
                (prevState: IDate): IDate => ({
                    ...prevState,
                    month: 0,
                    year: year + 1,
                })
            );
        }
    };

    const handlePrevMonthClick = (): void => {
        if (month > 0) {
            setShownDate(
                (prevState: IDate): IDate => ({
                    ...prevState,
                    month: month - 1,
                })
            );
        } else {
            setShownDate(
                (prevState: IDate): IDate => ({
                    ...prevState,
                    month: 11,
                    year: year - 1,
                })
            );
        }
    };

    const handleTodayClick = (): void => {
        setShownDate({ ...currentDate });
    };

    return (
        <StyledHeader>
            <Title onClick={handleTodayClick}>{currentDate.day}</Title>
            <Row>
                <StyledButton
                    type="button"
                    onClick={handlePrevMonthClick}
                    disabled={compareDates({ year, month }, minDate)}>
                    <img src={prev} alt="prev" />
                </StyledButton>
                <StyledSelectContainer>
                    <StyledSelect name="currentMonth" value={month} onChange={handleChange}>
                        {MONTH_NAMES.map((monthItem, index) => (
                            <option key={monthItem} value={index}>
                                {monthItem}
                            </option>
                        ))}
                    </StyledSelect>
                    <StyledSelect name="currentYear" value={year} onChange={handleChange}>
                        {getYearNumbers(currentDate.year).map((yearItem) => (
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
    );
};
