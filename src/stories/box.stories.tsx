import { Meta, StoryObj } from '@storybook/react';

import { Box } from "../components/Box";

const meta: Meta<typeof Box> = {
  component: Box,
};
export default meta;

type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  render: () => <Box />,
};