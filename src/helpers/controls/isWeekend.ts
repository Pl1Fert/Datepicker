import { StartDayOfWeek } from "@/constants";

export const isWeekend = (index: number, startDayOfWeek: StartDayOfWeek): boolean => {
    const weekendsStartsMonday = [5, 6];
    const weekendsStartsSunday = [0, 6];

    if (startDayOfWeek === StartDayOfWeek.Monday) {
        return weekendsStartsMonday.includes(index);
    }
    if (startDayOfWeek === StartDayOfWeek.Sunday) {
        return weekendsStartsSunday.includes(index);
    }

    return false;
};
