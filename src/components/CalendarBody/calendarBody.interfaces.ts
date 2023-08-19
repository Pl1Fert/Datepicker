import { Dispatch, SetStateAction } from "react";

import { StartDay } from "@/constants";
import { IDate } from "@/interfaces";

export interface IProps {
    selectedDate: IDate;
    currentDate: IDate;
    startDay: StartDay;
    setSelectedDate: Dispatch<SetStateAction<IDate>>;
}
