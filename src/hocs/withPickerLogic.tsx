import {
    ComponentType,
    Dispatch,
    KeyboardEvent,
    SetStateAction,
    SyntheticEvent,
    useState,
} from "react";

import { Picker } from "@/components";
import { formatDateToString, formatStringToDate, isValidDate } from "@/helpers";
import { IDate, ISelectedDate } from "@/interfaces";

export function withPickerLogic<T>(
    Component: ComponentType<T>,
    selectedDate: ISelectedDate,
    setSelectedDate: Dispatch<SetStateAction<ISelectedDate>>,
    shownDate: IDate,
    setShownDate: Dispatch<SetStateAction<IDate>>,
    onChange?: (value: string) => void
) {
    return (
        hocProps: Omit<T, "selectedDate" | "setSelectedDate" | "setShownDate" | "handleDayClick">
    ) => {
        const [dateString, setDateString] = useState<string>(formatDateToString(selectedDate));

        if (onChange) {
            onChange(dateString);
        }

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
            setSelectedDate({ year: undefined, month: undefined, day: undefined });
        };

        const handleDayClick = (e: SyntheticEvent): void => {
            const target = e.target as HTMLElement;

            setSelectedDate({
                year: shownDate.year,
                month: shownDate.month,
                day: parseInt(target.innerText, 10),
            } as ISelectedDate);
        };

        const renderPicker = (): JSX.Element => (
            <Picker
                value={dateString}
                onChange={handleInputChange}
                onKeyDown={handleEnterDate}
                onClick={handleClearDate}
                testId="picker"
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
                setShownDate={setShownDate}
            />
        );
    };
}
