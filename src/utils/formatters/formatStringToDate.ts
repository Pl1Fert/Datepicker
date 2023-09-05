import { IDate } from "@/interfaces";

export const formatStringToDate = (dateString: string): IDate | undefined => {
    const dateArray = dateString.split("-");

    if (dateArray.length !== 3) {
        return undefined;
    }

    return {
        year: parseInt(dateArray.at(0) as string, 10),
        month: parseInt(dateArray.at(1) as string, 10) - 1,
        day: parseInt(dateArray.at(2) as string, 10),
    };
};
