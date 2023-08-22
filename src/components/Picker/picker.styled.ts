import styled from "styled-components";

export const StyledInput = styled.input`
    width: 100%;
    padding: 2px 25px;

    font: inherit;
    outline: none;

    &:invalid {
        border-color: red;
    }
`;

export const ClearIcon = styled.img`
    position: absolute;
    top: 50%;
    right: 5px;

    transform: translateY(-50%);

    cursor: pointer;
`;
export const CalendarIcon = styled.img`
    position: absolute;
    top: 50%;
    left: 5px;

    transform: translateY(-50%);
`;

export const Container = styled.div`
    position: relative;
    margin-bottom: 15px;
`;
