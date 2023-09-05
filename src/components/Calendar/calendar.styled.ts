import styled from "styled-components";

export const StyledMain = styled.main`
    width: 250px;
    height: auto;
    padding: 15px;

    box-shadow: 0 0 5px ${({ theme: { shadow } }) => shadow.grey};
    background-color: ${({ theme: { colors } }) => colors.white};
    border-radius: 8px;
`;
