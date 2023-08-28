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
import { formatDateToString, formatStringToDate, isValidDate } from "@/utils";

export function withPickerLogic<T>(
    Component: ComponentType<T>,
    selectedDate: ISelectedDate,
    setSelectedDate: Dispatch<SetStateAction<ISelectedDate>>,
    shownDate: IDate,
    setShownDate: Dispatch<SetStateAction<IDate>>
) {
    return (
        hocProps: Omit<T, "selectedDate" | "setSelectedDate" | "setShownDate" | "handleDayClick">
    ) => {
        const [dateString, setDateString] = useState<string>(formatDateToString(selectedDate));

        const handleInputChange = (e: SyntheticEvent): void => {
            const target = e.target as HTMLInputElement;

            setDateString(target.value);
        };

        const handleEnterDate = (e: KeyboardEvent<HTMLInputElement>): void => {
            if (e.key !== "Enter") {
                return;
            }
            if (!dateString.trim()) {
                return;
            }

            const date: IDate | undefined = formatStringToDate(dateString);

            if (!isValidDate(date) || !date) {
                return;
            }

            setShownDate(date);
            setSelectedDate(date as ISelectedDate);
        };

        const handleClearDate = (): void => {
            setDateString("");
            setSelectedDate({ year: undefined, month: undefined, day: undefined });
        };

        const handleDayClick = (e: SyntheticEvent): void => {
            const target = e.target as HTMLElement;

            setSelectedDate({
                year: shownDate.year,
                month: shownDate.month,
                day: parseInt(target.innerText, 10),
            } as ISelectedDate);
            setDateString(
                formatDateToString({
                    year: shownDate.year,
                    month: shownDate.month,
                    day: parseInt(target.innerText, 10),
                })
            );
        };

        const renderPicker = (): JSX.Element => (
            <Picker
                value={dateString}
                onChange={handleInputChange}
                onKeyDown={handleEnterDate}
                onClick={handleClearDate}
            />
        );

        return (
            <Component
                {...(hocProps as T)}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                handleDayClick={handleDayClick}
                renderPicker={renderPicker}
                shownDate={shownDate}
            />
        );
    };
}
