import { memo } from "react";

import { CalendarIcon, ClearIcon } from "@/components/Icons";

import { IProps } from "./picker.interfaces";
import { CalendarIconWrapper, ClearIconWrapper, Container, StyledInput } from "./picker.styled";

export const Picker = memo<IProps>(({ value, onChange, onKeyDown, onClick }) => (
    <Container>
        <CalendarIconWrapper>
            <CalendarIcon />
        </CalendarIconWrapper>
        <StyledInput
            type="text"
            placeholder="yyyy-mm-dd"
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
        <ClearIconWrapper onClick={onClick}>
            <ClearIcon />
        </ClearIconWrapper>
    </Container>
));
