import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MONTH_NAMES } from "@/constants";
import { IDate } from "@/interfaces";
import { formatDateToString } from "@/utils";

import "@testing-library/jest-dom";

import { DatePicker } from "../src/components/DatePicker";

describe("DatePicker tests", () => {
    beforeEach(() => {
        render(<DatePicker />);
    });

    test("should render picker", () => {
        expect(screen.getByTestId("picker")).toBeInTheDocument();
    });

    test("should show correct initial date", () => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        const yearSelect: HTMLInputElement = screen.getByTestId("currentYear");
        const monthSelect: HTMLInputElement = screen.getByTestId("currentMonth");

        expect(monthSelect.value).toBe(currentMonth.toString());
        expect(yearSelect.value).toBe(currentYear.toString());
    });

    test("should change month from select", async () => {
        const currentMonth = new Date().getMonth();
        const monthString = MONTH_NAMES[currentMonth]!;
        const januaryString = MONTH_NAMES[0]!;

        expect(screen.getByText(monthString)).toBeInTheDocument();
        await userEvent.click(screen.getByText(monthString));
        await userEvent.click(screen.getByText("January"));
        expect(screen.getByText(januaryString)).toBeInTheDocument();
    });

    test("should change year from select", async () => {
        const currentYear = new Date().getFullYear();

        expect(screen.getByText(currentYear.toString())).toBeInTheDocument();
        await userEvent.click(screen.getByText(currentYear.toString()));
        await userEvent.click(screen.getByText((currentYear + 1).toString()));
        expect(screen.getByText((currentYear + 1).toString())).toBeInTheDocument();
    });

    test("should show prev month from button", async () => {
        const currentMonth = new Date().getMonth();
        const monthString = MONTH_NAMES[currentMonth]!;
        const prevMonthString = MONTH_NAMES[currentMonth - 1]!;

        expect(screen.getByTestId("prevButton")).toBeInTheDocument();
        expect(screen.getByText(monthString)).toBeInTheDocument();
        await userEvent.click(screen.getByTestId("prevButton"));
        expect(screen.getByText(prevMonthString)).toBeInTheDocument();
    });

    test("should show next month from button", async () => {
        const currentMonth = new Date().getMonth();
        const monthString = MONTH_NAMES[currentMonth]!;
        const nextMonthString = MONTH_NAMES[currentMonth + 1]!;

        expect(screen.getByTestId("nextButton")).toBeInTheDocument();
        expect(screen.getByText(monthString)).toBeInTheDocument();
        await userEvent.click(screen.getByTestId("nextButton"));
        expect(screen.getByText(nextMonthString)).toBeInTheDocument();
    });

    test("should handle day click", async () => {
        const currentDate: IDate = {
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            day: 5,
        };

        expect(screen.getByText("5")).toBeInTheDocument();
        await userEvent.click(screen.getByText("5"));
        const picker: HTMLInputElement = screen.getByTestId("picker");

        expect(picker.value).toBe(formatDateToString(currentDate));
    });

    test("should show today month onclick", async () => {
        const currentMonth = new Date().getMonth();
        const monthString = MONTH_NAMES[currentMonth]!;
        const nextMonthString = MONTH_NAMES[currentMonth + 2]!;

        expect(screen.getByTestId("nextButton")).toBeInTheDocument();
        expect(screen.getByTestId("today")).toBeInTheDocument();
        await userEvent.click(screen.getByTestId("nextButton"));
        await userEvent.click(screen.getByTestId("nextButton"));
        expect(screen.getByText(nextMonthString)).toBeInTheDocument();
        await userEvent.click(screen.getByTestId("today"));
        expect(screen.getByText(monthString)).toBeInTheDocument();
    });

    test("should clear picker onclick clearButton", async () => {
        const currentDate: IDate = {
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            day: 5,
        };

        expect(screen.getByText("5")).toBeInTheDocument();
        expect(screen.getByTestId("clearButton")).toBeInTheDocument();
        await userEvent.click(screen.getByText("5"));
        let picker: HTMLInputElement = screen.getByTestId("picker");

        expect(picker.value).toBe(formatDateToString(currentDate));
        await userEvent.click(screen.getByTestId("clearButton"));
        picker = screen.getByTestId("picker");
        expect(picker.value).toBe("");
    });
});
