import styled from "styled-components";
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

export const StyledMain = styled.main`
    width: 250px;
    height: auto;
    padding: 15px;

    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    background-color: ${({ theme: { colors } }) => colors.white};
    border-radius: 8px;
`;
