import { FC } from "react";

import next from "@/assets/icons/Next.svg";
import prev from "@/assets/icons/Prev.svg";

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
            <StyledSelect defaultValue="December" />
            <StyledSelect defaultValue="2020" />
        </StyledSelectContainer>
        <StyledButton type="button">
            <img src={next} alt="next" />
        </StyledButton>
    </StyledHeader>
);
