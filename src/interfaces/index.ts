export interface IDate {
    month: number;
    year: number;
    day: number;
}

export interface ISelectedDate {
    month: number | undefined;
    year: number | undefined;
    day: number | undefined;
}

export interface IMaxMinDate {
    month: number;
    year: number;
}

export interface IHolidaysReponse {
    kind: string;
    etag: string;
    summary: string;
    description: string;
    updated: string;
    timeZone: string;
    accessRole: string;
    defaultReminders: [];
    nextSyncToken: string;
    items: IHolidaysItem[];
}

export interface IHolidaysItem {
    kind: string;
    etag: string;
    id: string;
    status: string;
    htmlLink: string;
    created: string;
    updated: string;
    summary: string;
    description: string;
    creator: {
        email: string;
        displayName: string;
        self: boolean;
    };
    organizer: {
        email: string;
        displayName: string;
        self: boolean;
    };
    start: {
        date: string;
    };
    end: {
        date: string;
    };
    transparency: string;
    visibility: string;
    iCalUID: string;
    sequence: number;
    eventType: string;
}

export interface IHolidaysDates {
    [year: string]: string[];
}

export interface HttpResponse<T> extends Response {
    parsedBody?: T;
}

export interface ITodo {
    id: number;
    content: string;
    date: string;
}
