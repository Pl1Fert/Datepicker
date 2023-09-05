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

    background-color: ${({ $today, $color, $inRange, theme: { colors } }) => {
        switch (true) {
            case $today:
                return $color || colors.blue;
            case $inRange:
                return colors.lightBlue;
            default:
                return "transparent";
        }
    }};

    border-color: ${({ $selected, $color, theme: { colors } }) => {
        switch (true) {
            case $selected:
                return $color || colors.blue;
            default:
                return "transparent";
        }
    }};

    color: ${({ $today, $highlightWeekends, $highlightHolidays, theme: { colors } }) => {
        switch (true) {
            case $today:
                return colors.white;
            case $highlightWeekends:
                return colors.red;
            case $highlightHolidays:
                return colors.green;
            default:
                return colors.black;
        }
    }};

    cursor: pointer;

    transition: all 0.2s linear;

    &:hover {
        background-color: ${({ color, theme: { colors } }) => color || colors.lightBlue};
    }
`;
