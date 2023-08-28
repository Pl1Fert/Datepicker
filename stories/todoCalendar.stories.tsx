import { Meta, StoryObj } from "@storybook/react";

import { TodoCalendar } from "@/components";
import { StartDay } from "@/constants";

const meta: Meta<typeof TodoCalendar> = {
    title: "TodoCalendar",
    component: TodoCalendar,
    tags: ["autodocs"],
    argTypes: {
        startDay: {
            options: [StartDay.Monday, StartDay.Sunday],
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
        startDay: StartDay.Monday,
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
