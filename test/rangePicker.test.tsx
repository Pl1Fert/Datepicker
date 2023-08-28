import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { IDate } from "@/interfaces";
import { formatDateToString } from "@/utils";

import "@testing-library/jest-dom";

import { RangePicker } from "../src/components/RangePicker";

describe("RangePicker tests", () => {
    beforeEach(() => {
        render(<RangePicker />);
    });

    test("should render range pickers", () => {
        expect(screen.getByTestId("fromPicker")).toBeInTheDocument();
        expect(screen.getByTestId("toPicker")).toBeInTheDocument();
    });

    test("should handle range days clicks", async () => {
        const date = new Date();
        const fromDate: IDate = {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: 5,
        };

        const toDate: IDate = {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: 15,
        };

        expect(screen.getByText("5")).toBeInTheDocument();
        expect(screen.getByText("15")).toBeInTheDocument();

        await userEvent.click(screen.getByText("5"));
        expect(screen.getByTestId("fromPicker")).toHaveValue(formatDateToString(fromDate));

        await userEvent.click(screen.getByText("15"));
        expect(screen.getByTestId("toPicker")).toHaveValue(formatDateToString(toDate));
    });

    test("should handle correct range days clicks", async () => {
        const date = new Date();
        const fromDate: IDate = {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: 15,
        };

        expect(screen.getByText("5")).toBeInTheDocument();
        expect(screen.getByText("15")).toBeInTheDocument();

        await userEvent.click(screen.getByText("15"));
        expect(screen.getByTestId("fromPicker")).toHaveValue(formatDateToString(fromDate));

        await userEvent.click(screen.getByText("5"));
        expect(screen.getByTestId("toPicker")).toHaveValue("");
    });
});
