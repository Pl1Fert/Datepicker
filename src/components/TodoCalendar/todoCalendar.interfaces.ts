import { StartDayOfWeek } from "@/constants";
import { IMaxMinDate } from "@/interfaces";

export interface IProps {
    startDayOfWeek?: StartDayOfWeek;
    maxDate?: IMaxMinDate;
    minDate?: IMaxMinDate;
    color?: string;
    highlightHolidays?: boolean;
    highlightWeekends?: boolean;
}
