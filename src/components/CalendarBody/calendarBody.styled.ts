import styled from "styled-components";

export const SevenColGrid = styled.div`
    margin-bottom: 10px;

    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-row-gap: 1fr;
`;

export const StyledDayName = styled.p`
    font-weight: 700;
    text-align: center;

    cursor: default;
`;

export const StyledDayCell = styled.p<{ today?: boolean; selected?: boolean }>`
    padding: 8px 5px;
    border: ${({ selected }) => (selected ? "1px solid #2F80ED" : "1px solid transparent")};

    font-weight: 500;
    text-align: center;

    border-radius: 8px;
    background-color: ${({ today }) => (today ? "#2F80ED" : "transparent")};
    color: ${({ today }) => (today ? "white" : "black")};

    cursor: pointer;

    transition: all 0.2s linear;

    &:hover {
        background-color: lightgray;
    }
`;
