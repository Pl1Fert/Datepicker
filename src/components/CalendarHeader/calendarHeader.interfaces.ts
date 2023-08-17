import { Dispatch, SetStateAction } from "react";

import { IDate } from "@/interfaces";

export interface IProps {
    currentDate: IDate;
    setCurrentDate: Dispatch<SetStateAction<IDate>>;
}
