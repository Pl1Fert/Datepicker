import { ComponentType, useEffect, useState } from "react";

import { getHolidays } from "@/api";
import { formatHolidays } from "@/helpers";
import { IHolidaysDates } from "@/interfaces";

export function withMainLogic<T>(Component: ComponentType<T>) {
    return (hocProps: Omit<T, "holidays">) => {
        const [holidays, setholidays] = useState<IHolidaysDates>({});

        useEffect(() => {
            const fetchData = async () => {
                const data = await getHolidays();
                const dates = formatHolidays(data);
                setholidays(dates);
            };

            fetchData().catch(() => {});
        }, []);

        return <Component {...(hocProps as T)} holidays={holidays} />;
    };
}
