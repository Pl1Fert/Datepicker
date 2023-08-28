import {
    ComponentType,
    Dispatch,
    KeyboardEvent,
    SetStateAction,
    SyntheticEvent,
    useState,
} from "react";

import { Picker } from "@/components";
import { IDate, ISelectedDate } from "@/interfaces";
import {
    formatDateToString,
    formatStringToDate,
    isSecondDateLessThanFirst,
    isValidDate,
} from "@/utils";

export function withRangePickerLogic<T>(
    Component: ComponentType<T>,
    toDate: ISelectedDate,
    fromDate: ISelectedDate,
    setToDate: Dispatch<SetStateAction<ISelectedDate>>,
    setFromDate: Dispatch<SetStateAction<ISelectedDate>>,
    shownDate: IDate,
    setShownDate: Dispatch<SetStateAction<IDate>>
) {
    return (hocProps: Omit<T, "setShownDate" | "handleDayClick" | "toDate" | "fromDate">) => {
        const [fromDateString, setFromDateString] = useState<string>(formatDateToString(fromDate));
        const [toDateString, setToDateString] = useState<string>(formatDateToString(toDate));

        const handleFromInputChange = (e: SyntheticEvent): void => {
            const target = e.target as HTMLInputElement;

            setFromDateString(target.value);
        };

        const handleToInputChange = (e: SyntheticEvent): void => {
            const target = e.target as HTMLInputElement;

            setToDateString(target.value);
        };

        const handleEnterFromDate = (e: KeyboardEvent<HTMLInputElement>): void => {
            if (e.key !== "Enter") {
                return;
            }
            if (!fromDateString.trim()) {
                return;
            }

            const date: IDate | undefined = formatStringToDate(fromDateString);

            if (!isValidDate(date) || !date) {
                return;
            }

            setShownDate(date);
            setFromDate(date);
        };

        const handleEnterToDate = (e: KeyboardEvent<HTMLInputElement>): void => {
            if (e.key !== "Enter") {
                return;
            }
            if (!fromDateString.trim()) {
                return;
            }

            const date: IDate | undefined = formatStringToDate(fromDateString);

            if (!isValidDate(date) || !date) {
            }

            setToDate(date as ISelectedDate);
        };

        const handleClearFromDate = (): void => {
            setFromDateString("");
            setFromDate({ year: undefined, month: undefined, day: undefined });
        };

        const handleClearToDate = (): void => {
            setToDateString("");
            setToDate({ year: undefined, month: undefined, day: undefined });
        };

        const handleDayClick = (e: SyntheticEvent): void => {
            const target = e.target as HTMLElement;

            if (!fromDate.year && !fromDate.month && !fromDate.day) {
                setFromDate({
                    year: shownDate.year,
                    month: shownDate.month,
                    day: parseInt(target.innerText, 10),
                });
                setFromDateString(
                    formatDateToString({
                        year: shownDate.year,
                        month: shownDate.month,
                        day: parseInt(target.innerText, 10),
                    })
                );
            } else if (
                isSecondDateLessThanFirst(
                    { ...shownDate, day: parseInt(target.innerText, 10) },
                    fromDate as IDate
                )
            ) {
                setToDate({
                    year: shownDate.year,
                    month: shownDate.month,
                    day: parseInt(target.innerText, 10),
                });
                setToDateString(
                    formatDateToString({
                        year: shownDate.year,
                        month: shownDate.month,
                        day: parseInt(target.innerText, 10),
                    })
                );
            }
        };

        const renderPickers = (): JSX.Element => (
            <>
                <Picker
                    value={fromDateString}
                    onChange={handleFromInputChange}
                    onKeyDown={handleEnterFromDate}
                    onClick={handleClearFromDate}
                    testId="fromPicker"
                />
                <Picker
                    value={toDateString}
                    onChange={handleToInputChange}
                    onKeyDown={handleEnterToDate}
                    onClick={handleClearToDate}
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
                toDate={toDate}
                fromDate={fromDate}
            />
        );
    };
}
