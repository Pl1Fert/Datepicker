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
`;

export const StyledDayCell = styled.p`
    padding: 8px 5px;

    font-weight: 500;
    text-align: center;

    border-radius: 8px;

    cursor: pointer;

    &:hover {
        background-color: lightgray;
    }
`;
