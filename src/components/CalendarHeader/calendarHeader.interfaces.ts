import { Dispatch, SetStateAction } from "react";

import { IDate } from "@/interfaces";

export interface IProps {
    selectedDate: IDate;
    setSelectedDate: Dispatch<SetStateAction<IDate>>;
    currentYear: number;
}
