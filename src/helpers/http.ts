import { HttpResponse } from "@/interfaces";

export async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(request);

    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        response.parsedBody = await response.json();
    } catch (ex) {}

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}
