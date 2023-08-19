import { Dispatch, SetStateAction } from "react";

import { IDate, IMaxMinDate } from "@/interfaces";

export interface IProps {
    currentDate: IDate;
    shownDate: IDate;
    setShownDate: Dispatch<SetStateAction<IDate>>;
    maxDate?: IMaxMinDate;
    minDate?: IMaxMinDate;
}
