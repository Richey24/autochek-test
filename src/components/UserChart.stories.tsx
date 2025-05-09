import UserChart from './UserChart';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UserChart> = {
  title: 'Components/UserChart',
  component: UserChart,
};
export default meta;

type Story = StoryObj<typeof UserChart>;

export const Default: Story = {
  render: () => <UserChart />,
}; 