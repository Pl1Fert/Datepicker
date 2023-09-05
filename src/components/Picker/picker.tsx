import { memo } from "react";

import { CalendarIcon, ClearIcon } from "@/components/Icons";

import { IProps } from "./picker.interfaces";
import { CalendarIconWrapper, ClearIconWrapper, Container, StyledInput } from "./picker.styled";

export const Picker = memo<IProps>(({ value, onChange, onKeyDown, onClick, testId }) => (
    <Container>
        <CalendarIconWrapper>
            <CalendarIcon size="16" />
        </CalendarIconWrapper>
        <StyledInput
            type="text"
            placeholder="yyyy-mm-dd"
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            data-testid={testId}
        />
        <ClearIconWrapper onClick={onClick} data-testid="clearButton">
            <ClearIcon size="16" />
        </ClearIconWrapper>
    </Container>
));
