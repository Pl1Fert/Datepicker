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

export const StyledDayCell = styled.p<{
    $today: boolean;
    selected?: boolean;
    color?: string;
    $highlightWeekends: boolean;
    $highlightHolidays: boolean;
}>`
    padding: 8px 5px;
    border: 1px solid;

    font-weight: 500;
    text-align: center;

    border-radius: 8px;
    background-color: ${({ $today, color }) => ($today ? color || "#2F80ED" : "transparent")};
    border-color: ${({ selected, color }) => (selected ? color || "#2F80ED" : "transparent")};
    color: ${({ $today, $highlightWeekends, $highlightHolidays }) =>
        $today ? "white" : $highlightWeekends ? "red" : $highlightHolidays ? "green" : "black"};

    cursor: pointer;

    transition: all 0.2s linear;

    &:hover {
        background-color: lightgray;
    }
`;
