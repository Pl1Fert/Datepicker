import { SyntheticEvent } from "react";

import { IDate, IMaxMinDate } from "@/interfaces";

export interface IProps {
    currentDate: IDate;
    shownDate: IDate;
    maxDate?: IMaxMinDate;
    minDate?: IMaxMinDate;
    onChange: (e: SyntheticEvent) => void;
    onClick: () => void;
    handleNextMonthClick: () => void;
    handlePrevMonthClick: () => void;
}
