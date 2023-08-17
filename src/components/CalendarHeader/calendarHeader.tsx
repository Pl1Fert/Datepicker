import { FC } from "react";

import next from "@/assets/icons/Next.svg";
import prev from "@/assets/icons/Prev.svg";
import { MONTH_NAMES, YEARS_NUMBERS } from "@/constants";

import {
    StyledButton,
    StyledHeader,
    StyledSelect,
    StyledSelectContainer,
} from "./calendarHeader.styled";

export const CalendarHeader: FC = () => (
    <StyledHeader>
        <StyledButton type="button">
            <img src={prev} alt="prev" />
        </StyledButton>
        <StyledSelectContainer>
            <StyledSelect>
                {MONTH_NAMES.map((month) => (
                    <option key={month} value={month}>
                        {month}
                    </option>
                ))}
            </StyledSelect>
            <StyledSelect>
                {YEARS_NUMBERS.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </StyledSelect>
        </StyledSelectContainer>
        <StyledButton type="button">
            <img src={next} alt="next" />
        </StyledButton>
    </StyledHeader>
);
