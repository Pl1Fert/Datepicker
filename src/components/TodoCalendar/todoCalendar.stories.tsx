import { Meta, StoryObj } from "@storybook/react";

import { TodoCalendar } from "@/components";
import { StartDayOfWeek } from "@/constants";

const meta: Meta<typeof TodoCalendar> = {
    title: "TodoCalendar",
    component: TodoCalendar,
    tags: ["autodocs"],
    argTypes: {
        startDayOfWeek: {
            options: [StartDayOfWeek.Monday, StartDayOfWeek.Sunday],
            control: { type: "radio" },
        },
        color: { control: "color" },
        highlightWeekends: {
            options: [false, true],
            control: { type: "radio" },
        },
        highlightHolidays: {
            options: [false, true],
            control: { type: "radio" },
        },
    },
};
export default meta;

type Story = StoryObj<typeof TodoCalendar>;

export const Default: Story = {
    args: {
        startDayOfWeek: StartDayOfWeek.Monday,
        maxDate: {
            year: 2024,
            month: 1,
        },
        minDate: {
            year: 2023,
            month: 1,
        },
        highlightWeekends: true,
        highlightHolidays: true,
    },
};
