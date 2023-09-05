import { http } from "@/helpers";
import { HttpResponse, IHolidaysReponse } from "@/interfaces";

export const getHolidays = async () => {
    let response: HttpResponse<IHolidaysReponse>;
    try {
        response = await http<IHolidaysReponse>(
            "https://www.googleapis.com/calendar/v3/calendars/en.by%23holiday%40group.v.calendar.google.com/events?key=AIzaSyD1AEr-SukVG5QIK999zDaHLPfjekxCKEE"
        );

        return response.parsedBody;
    } catch (e) {
        throw new Error("error");
    }
};
