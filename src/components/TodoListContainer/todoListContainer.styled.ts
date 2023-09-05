import styled from "styled-components";

import { defaultColors } from "@/styles/theme";

export const StyledInput = styled.input`
    width: 100%;
    padding: 2px 4px;

    font: inherit;
    outline: none;

    color: ${defaultColors.black};

    &:invalid {
        border-color: red;
    }
`;
