/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const StyledInput = styled.input`
    width: 100%;
    padding: 2px 25px;

    font: inherit;
    outline: none;

    color: ${({ theme }) => theme.colors.black};

    &:invalid {
        border-color: red;
    }
`;

export const ClearIconWrapper = styled.span`
    position: absolute;
    top: 50%;
    right: 5px;

    transform: translateY(-50%);

    cursor: pointer;
`;
export const CalendarIconWrapper = styled.span`
    position: absolute;
    top: 50%;
    left: 5px;

    transform: translateY(-50%);
`;

export const Container = styled.div`
    position: relative;
    margin-bottom: 15px;
`;
