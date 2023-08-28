import { Meta, StoryObj } from "@storybook/react";

import { RangePicker } from "../src/components";
import { StartDay } from "../src/constants";

const meta: Meta<typeof RangePicker> = {
    title: "RangePicker",
    component: RangePicker,
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

type Story = StoryObj<typeof RangePicker>;

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
