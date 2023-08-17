import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledButton = styled.button`
    border: none;

    outline: none;
    background: transparent;

    cursor: pointer;
`;

export const StyledSelect = styled.select`
    border: none;

    outline: none;
    background: transparent;

    cursor: pointer;

    appearance: none;
    text-indent: 1px;
    text-overflow: "";
`;

export const StyledSelectContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
