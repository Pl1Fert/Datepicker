import { StartDayOfWeek } from "@/constants";

export const getStartDayOfMonth = (
    year: number,
    month: number,
    startDayOfWeek: StartDayOfWeek
): number => {
    let day: number = new Date(year, month, 1).getDay();

    if (startDayOfWeek === StartDayOfWeek.Sunday) {
        return day;
    }

    day -= 1;

    if (day === -1) {
        return 6;
    }

    return day;
};
