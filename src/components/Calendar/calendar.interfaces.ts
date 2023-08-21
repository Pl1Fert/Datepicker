import { StartDay } from "@/constants";
import { IMaxMinDate } from "@/interfaces";

export interface IProps {
    startDay?: StartDay;
    maxDate?: IMaxMinDate;
    minDate?: IMaxMinDate;
    color?: string;
    highlightWeekends?: boolean;
    highlightHolidays?: boolean;
}
