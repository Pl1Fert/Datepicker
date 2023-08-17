import { FC, SyntheticEvent } from "react";

import next from "@/assets/icons/Next.svg";
import prev from "@/assets/icons/Prev.svg";
import { MONTH_NAMES, YEARS_NUMBERS } from "@/constants";
import { IDate } from "@/interfaces";

import { IProps } from "./calendarHeader.interfaces";
import {
    StyledButton,
    StyledHeader,
    StyledSelect,
    StyledSelectContainer,
} from "./calendarHeader.styled";

export const CalendarHeader: FC<IProps> = ({
    currentDate: { currentMonth, currentYear },
    setCurrentDate,
}) => {
    const handleChange = (e: SyntheticEvent): void => {
        const target = e.target as HTMLInputElement;

        if (target.name === "currentYear") {
            setCurrentDate(
                (prevState) =>
                    ({
                        ...prevState,
                        currentYear: parseInt(target.value, 10),
                    }) as IDate
            );
        } else {
            setCurrentDate((prevState) => ({
                ...prevState,
                currentMonth: parseInt(target.value, 10),
            }));
        }
    };

    const handleNextMonthClick = (): void => {
        if (currentMonth < 11) {
            setCurrentDate((prevState) => ({
                ...prevState,
                currentMonth: currentMonth + 1,
            }));
        } else {
            setCurrentDate((prevState) => ({
                ...prevState,
                currentMonth: 0,
                currentYear: currentYear + 1,
            }));
        }
    };

    const handlePrevMonthClick = (): void => {
        if (currentMonth > 0) {
            setCurrentDate((prevState) => ({
                ...prevState,
                currentMonth: currentMonth - 1,
            }));
        } else {
            setCurrentDate((prevState) => ({
                ...prevState,
                currentMonth: 11,
                currentYear: currentYear - 1,
            }));
        }
    };

    return (
        <StyledHeader>
            <StyledButton type="button" onClick={handlePrevMonthClick}>
                <img src={prev} alt="prev" />
            </StyledButton>
            <StyledSelectContainer>
                <StyledSelect name="currentMonth" value={currentMonth} onChange={handleChange}>
                    {MONTH_NAMES.map((month, index) => (
                        <option key={month} value={index}>
                            {month}
                        </option>
                    ))}
                </StyledSelect>
                <StyledSelect name="currentYear" value={currentYear} onChange={handleChange}>
                    {YEARS_NUMBERS.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </StyledSelect>
            </StyledSelectContainer>
            <StyledButton type="button" onClick={handleNextMonthClick}>
                <img src={next} alt="next" />
            </StyledButton>
        </StyledHeader>
    );
};
