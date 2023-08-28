import styled from "styled-components";

import { defaultColors } from "@/styles/colors";

export const StyledListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${defaultColors.black};
`;

export const StyledButton = styled.button`
    margin-top: 4px;
    border: none;

    outline: none;
    background: transparent;

    cursor: pointer;
`;
