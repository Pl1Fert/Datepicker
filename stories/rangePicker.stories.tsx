import { Meta, StoryObj } from "@storybook/react";

import { RangePicker } from "@/components";
import { StartDayOfWeek } from "@/constants";
import { useState } from "react";

const meta: Meta<typeof RangePicker> = {
    title: "RangePicker",
    component: RangePicker,
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

type Story = StoryObj<typeof RangePicker>;

const WithOnChangeProp = () => {
    const [_, setValue] = useState<string>("");

    const onChange = (value: string) => {
        setValue(value);
    };

    return <RangePicker onChange={onChange} />;
};

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

export const withOnChange: Story = {
    render: () => <WithOnChangeProp />,
};
