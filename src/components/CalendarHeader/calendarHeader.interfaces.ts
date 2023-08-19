import { Dispatch, SetStateAction } from "react";

import { IDate } from "@/interfaces";

export interface IProps {
    currentYear: number;
    currentDate: IDate;
    shownDate: IDate;
    setShownDate: Dispatch<SetStateAction<IDate>>;
}
