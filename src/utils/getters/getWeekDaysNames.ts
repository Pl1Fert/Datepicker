import { SHORT_DAY_NAMES, StartDayOfWeek } from "@/constants";

export const getWeekDaysNames = (startDayOfWeek: StartDayOfWeek): string[] => {
    if (startDayOfWeek === StartDayOfWeek.Monday) {
        return SHORT_DAY_NAMES;
    }
    const array = [...SHORT_DAY_NAMES];
    array.unshift(array.pop() as string);

    return array;
};
