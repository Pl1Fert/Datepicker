import { Meta, StoryObj } from "@storybook/react";

import { Calendar } from "@/components";
import { StartDay } from "@/constants";

const meta: Meta<typeof Calendar> = {
    title: "Calendar",
    component: Calendar,
    tags: ["autodocs"],
    argTypes: {
        startDay: {
            options: [StartDay.Monday, StartDay.Sunday],
            control: { type: "radio" },
        },
    },
};
export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
    args: {
        startDay: StartDay.Monday,
    },
};
