import styled from "styled-components";

import { defaultColors } from "@/styles/colors";

export const Row = styled.div`
    margin-bottom: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Title = styled.h4`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 18px;
    padding: 2px;
    border: 1px solid black;

    font-weight: 500;
    font-size: 10px;

    color: ${defaultColors.black};
    border-radius: 4px;

    cursor: pointer;
`;

export const StyledButton = styled.button`
    border: none;

    outline: none;
    background: transparent;

    cursor: pointer;

    &:disabled {
        cursor: default;
    }
`;

export const StyledSelect = styled.select`
    border: none;

    font: inherit;

    outline: none;
    background: transparent;
    color: ${defaultColors.black};

    cursor: pointer;
    appearance: none;
`;

export const StyledSelectContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
