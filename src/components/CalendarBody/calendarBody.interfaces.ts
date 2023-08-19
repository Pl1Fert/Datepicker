import { Dispatch, SetStateAction } from "react";

import { StartDay } from "@/constants";
import { IDate, ISelectedDate } from "@/interfaces";

export interface IProps {
    selectedDate: ISelectedDate;
    currentDate: IDate;
    startDay: StartDay;
    setSelectedDate: Dispatch<SetStateAction<ISelectedDate>>;
    shownDate: IDate;
    color?: string;
}
