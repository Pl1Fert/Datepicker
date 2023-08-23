import {
    ComponentType,
    Dispatch,
    SetStateAction,
    SyntheticEvent,
    useEffect,
    useState,
} from "react";

import { CURRENT_DATE } from "@/constants";
import { IDate, IHolidaysDates } from "@/interfaces";
import { formatHolidays, getHolidays } from "@/utils";

export function withMainLogic<T>(
    Component: ComponentType<T>,
    shownDate: IDate,
    setShownDate: Dispatch<SetStateAction<IDate>>
) {
    return (
        hocProps: Omit<
            T,
            | "handleChange"
            | "handleNextMonthClick"
            | "handlePrevMonthClick"
            | "handleTodayClick"
            | "shownDate"
            | "holidays"
        >
    ) => {
        const [holidays, setholidays] = useState<IHolidaysDates>({});

        useEffect(() => {
            const fetchData = async () => {
                const data = await getHolidays();
                const dates = formatHolidays(data);
                setholidays(dates);
            };

            fetchData().catch(() => {});
        }, []);

        const handleChange = (e: SyntheticEvent): void => {
            const target = e.target as HTMLInputElement;

            if (target.name === "currentYear") {
                setShownDate(
                    (prevState: IDate): IDate => ({
                        ...prevState,
                        year: parseInt(target.value, 10),
                    })
                );
            } else {
                setShownDate(
                    (prevState: IDate): IDate => ({
                        ...prevState,
                        month: parseInt(target.value, 10),
                    })
                );
            }
        };

        const handleNextMonthClick = (): void => {
            if (shownDate.month < 11) {
                setShownDate(
                    (prevState: IDate): IDate => ({
                        ...prevState,
                        month: shownDate.month + 1,
                    })
                );
            } else {
                setShownDate(
                    (prevState: IDate): IDate => ({
                        ...prevState,
                        month: 0,
                        year: shownDate.year + 1,
                    })
                );
            }
        };

        const handlePrevMonthClick = (): void => {
            if (shownDate.month > 0) {
                setShownDate(
                    (prevState: IDate): IDate => ({
                        ...prevState,
                        month: shownDate.month - 1,
                    })
                );
            } else {
                setShownDate(
                    (prevState: IDate): IDate => ({
                        ...prevState,
                        month: 11,
                        year: shownDate.year - 1,
                    })
                );
            }
        };

        const handleTodayClick = (): void => {
            setShownDate({ ...CURRENT_DATE });
        };

        return (
            <Component
                {...(hocProps as T)}
                handleChange={handleChange}
                handleTodayClick={handleTodayClick}
                handlePrevMonthClick={handlePrevMonthClick}
                handleNextMonthClick={handleNextMonthClick}
                shownDate={shownDate}
                holidays={holidays}
            />
        );
    };
}
