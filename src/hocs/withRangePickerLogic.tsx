import {
    ComponentType,
    Dispatch,
    KeyboardEvent,
    SetStateAction,
    SyntheticEvent,
    useState,
} from "react";

import { Picker } from "@/components";
import {
    formatDateToString,
    formatStringToDate,
    isSecondDateLessThanFirst,
    isValidDate,
} from "@/helpers";
import { IDate, ISelectedDate } from "@/interfaces";

export function withRangePickerLogic<T>(
    Component: ComponentType<T>,
    endDate: ISelectedDate,
    startDate: ISelectedDate,
    setEndDate: Dispatch<SetStateAction<ISelectedDate>>,
    setStartDate: Dispatch<SetStateAction<ISelectedDate>>,
    shownDate: IDate,
    setShownDate: Dispatch<SetStateAction<IDate>>,
    onChange?: (value: string) => void
) {
    return (
        hocProps: Omit<T, "setShownDate" | "shownDate" | "handleDayClick" | "endDate" | "startDate">
    ) => {
        const [startDateString, setStartDateString] = useState<string>(
            formatDateToString(startDate)
        );
        const [endDateString, setEndDateString] = useState<string>(formatDateToString(endDate));

        if (onChange) {
            if (!startDateString || !endDateString) {
                onChange("");
            }
            onChange(`${startDateString}/${endDateString}`);
        }

        const handleFromInputChange = (e: SyntheticEvent): void => {
            const target = e.target as HTMLInputElement;

            setStartDateString(target.value);
        };

        const handleToInputChange = (e: SyntheticEvent): void => {
            const target = e.target as HTMLInputElement;

            setEndDateString(target.value);
        };

        const handleEnterStartDate = (e: KeyboardEvent<HTMLInputElement>): void => {
            if (e.key !== "Enter") {
                return;
            }
            if (!startDateString.trim()) {
                return;
            }

            const date: IDate | undefined = formatStringToDate(startDateString);

            if (!isValidDate(date) || !date) {
                return;
            }

            setShownDate(date);
            setStartDate(date);
        };

        const handleEnterEndDate = (e: KeyboardEvent<HTMLInputElement>): void => {
            if (e.key !== "Enter") {
                return;
            }
            if (!endDateString.trim()) {
                return;
            }

            const date: IDate | undefined = formatStringToDate(endDateString);

            if (!isValidDate(date) || !date) {
                return;
            }

            setEndDate(date as ISelectedDate);
        };

        const handleClearStartDate = (): void => {
            setStartDate({ year: undefined, month: undefined, day: undefined });
        };

        const handleClearEndDate = (): void => {
            setEndDate({ year: undefined, month: undefined, day: undefined });
        };

        const handleDayClick = (e: SyntheticEvent): void => {
            const target = e.target as HTMLElement;

            if (!startDate.year && !startDate.month && !startDate.day) {
                setStartDate({
                    year: shownDate.year,
                    month: shownDate.month,
                    day: parseInt(target.innerText, 10),
                });
            } else if (
                isSecondDateLessThanFirst(
                    { ...shownDate, day: parseInt(target.innerText, 10) },
                    startDate as IDate
                )
            ) {
                setEndDate({
                    year: shownDate.year,
                    month: shownDate.month,
                    day: parseInt(target.innerText, 10),
                });
            }
        };

        const renderPickers = (): JSX.Element => (
            <>
                <Picker
                    value={startDateString}
                    onChange={handleFromInputChange}
                    onKeyDown={handleEnterStartDate}
                    onClick={handleClearStartDate}
                    testId="fromPicker"
                />
                <Picker
                    value={endDateString}
                    onChange={handleToInputChange}
                    onKeyDown={handleEnterEndDate}
                    onClick={handleClearEndDate}
                    testId="toPicker"
                />
            </>
        );

        return (
            <Component
                {...(hocProps as T)}
                handleDayClick={handleDayClick}
                renderPickers={renderPickers}
                shownDate={shownDate}
                setShownDate={setShownDate}
                endDate={endDate}
                startDate={startDate}
            />
        );
    };
}
