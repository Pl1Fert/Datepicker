import { Dispatch, SetStateAction } from "react";

import { IDate } from "@/interfaces";

export interface IProps {
    currentYear: number;
    shownDate: IDate;
    setShownDate: Dispatch<SetStateAction<IDate>>;
}
