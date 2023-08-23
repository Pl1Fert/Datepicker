import { SyntheticEvent } from "react";

import { IDate, IMaxMinDate } from "@/interfaces";

export interface IProps {
    shownDate: IDate;
    maxDate?: IMaxMinDate;
    minDate?: IMaxMinDate;
    onChange: (e: SyntheticEvent) => void;
    onClick: () => void;
    handleNextMonthClick: () => void;
    handlePrevMonthClick: () => void;
}
