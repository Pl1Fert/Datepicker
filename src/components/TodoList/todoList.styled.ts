import styled from "styled-components";

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;

    margin: 0;
    padding: 0;
    margin-top: 5px;
    padding-left: 10px;

    list-style: none;
`;

export const StyledListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({ theme: colors }) => colors.black};
`;

export const StyledButton = styled.button`
    margin-top: 4px;
    border: none;

    outline: none;
    background: transparent;

    cursor: pointer;
`;
