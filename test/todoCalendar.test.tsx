import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";

import { TodoCalendar } from "../src/components/TodoCalendar";

describe("TodoCalendar tests", () => {
    beforeEach(() => {
        render(<TodoCalendar />);
    });

    afterEach(() => {
        cleanup();
    });

    const original = window.location;

    const reloadFn = () => {
        window.location.reload();
    };

    beforeAll(() => {
        Object.defineProperty(window, "location", {
            configurable: true,
            value: { reload: jest.fn() },
        });
    });

    afterAll(() => {
        Object.defineProperty(window, "location", { configurable: true, value: original });
    });

    test("should render todo input", () => {
        expect(screen.getByTestId("todo")).toBeInTheDocument();
    });

    test("should handle user todo type", async () => {
        expect(screen.getByText("6")).toBeInTheDocument();

        await userEvent.click(screen.getByText("6"));
        await userEvent.type(screen.getByTestId("todo"), "testing item{enter}");

        expect(screen.getByText("testing item")).toBeInTheDocument();
        expect(screen.getByTestId("todo")).toHaveValue("");
    });

    test("should delete todo item", async () => {
        expect(screen.getByText("6")).toBeInTheDocument();

        await userEvent.click(screen.getByText("6"));
        expect(screen.getByText("testing item")).toBeInTheDocument();
        expect(screen.getByTestId("deleteTodoButton")).toBeInTheDocument();
        await userEvent.click(screen.getByTestId("deleteTodoButton"));
        expect(screen.queryByText("testing item")).toBeNull();
    });

    test("should handle reload page with saving todo", async () => {
        expect(screen.getByText("5")).toBeInTheDocument();

        await userEvent.click(screen.getByText("5"));
        await userEvent.type(screen.getByTestId("todo"), "todo item{enter}");

        expect(screen.getByText("todo item")).toBeInTheDocument();
        expect(screen.getByTestId("todo")).toHaveValue("");
        reloadFn();
        expect(screen.getByText("5")).toBeInTheDocument();

        await userEvent.click(screen.getByText("5"));
        expect(screen.getByText("todo item")).toBeInTheDocument();
    });
});
