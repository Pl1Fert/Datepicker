import styled from "styled-components";

export const StyledInput = styled.input`
    width: 100%;
    padding: 2px 4px;

    font: inherit;
    outline: none;

    color: ${({ theme: colors }) => colors.black};

    &:invalid {
        border-color: ${({ theme: colors }) => colors.red};
    }
`;
