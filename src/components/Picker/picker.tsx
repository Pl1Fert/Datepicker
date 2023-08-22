import { memo } from "react";

import calendar from "@/assets/icons/Calendar.svg";
import clear from "@/assets/icons/Clear.svg";

import { IProps } from "./picker.interfaces";
import { CalendarIcon, ClearIcon, Container, StyledInput } from "./picker.styled";

export const Picker = memo<IProps>(({ value, onChange, onKeyDown, onClick }) => (
    <Container>
        <CalendarIcon src={calendar} alt="calendar" />
        <StyledInput
            type="text"
            placeholder="yyyy-mm-dd"
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
        <ClearIcon src={clear} alt="clear" onClick={onClick} />
    </Container>
));
