import styled from "styled-components";

import { defaultColors } from "@/styles/colors";

export const StyledInput = styled.input`
    width: 100%;
    padding: 2px 4px;

    font: inherit;
    outline: none;

    background-color: transparent;
    color: ${defaultColors.black};

    &:invalid {
        border-color: red;
    }
`;
