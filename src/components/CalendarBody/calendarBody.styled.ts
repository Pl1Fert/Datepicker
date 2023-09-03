import styled from "styled-components";

import { defaultColors } from "@/styles/colors";

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
    $selected?: boolean;
    $color?: string;
    $highlightWeekends: boolean;
    $highlightHolidays: boolean;
    $inRange?: boolean;
}>`
    padding: 8px 5px;
    border: 1px solid;

    font-weight: 500;
    text-align: center;

    border-radius: ${({ $inRange }) => ($inRange ? "0px" : "8px")};
    background-color: ${({ $today, $color, $inRange }) =>
        $today ? $color || defaultColors.blue : $inRange ? defaultColors.lightBlue : "transparent"};
    border-color: ${({ $selected, $color }) =>
        $selected ? $color || defaultColors.blue : "transparent"};
    color: ${({ $today, $highlightWeekends, $highlightHolidays }) =>
        $today
            ? defaultColors.white
            : $highlightWeekends
            ? defaultColors.red
            : $highlightHolidays
            ? defaultColors.green
            : defaultColors.black};

    cursor: pointer;

    transition: all 0.2s linear;

    &:hover {
        background-color: ${({ color }) => color || defaultColors.lightBlue};
    }
`;
