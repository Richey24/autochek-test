import UserList, { type User } from './UserList';
import type { Meta, StoryObj } from '@storybook/react';

const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', company: { name: 'Acme' }, address: { city: 'NY' }, phone: '123', website: 'alice.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com', company: { name: 'Beta' }, address: { city: 'LA' }, phone: '456', website: 'bob.com' },
  { id: 3, name: 'Carol', email: 'carol@example.com', company: { name: 'Acme' }, address: { city: 'SF' }, phone: '789', website: 'carol.com' },
  { id: 4, name: 'Dan', email: 'dan@example.com', company: { name: 'Beta' }, address: { city: 'TX' }, phone: '101', website: 'dan.com' },
  { id: 5, name: 'Eve', email: 'eve@example.com', company: { name: 'Acme' }, address: { city: 'NY' }, phone: '102', website: 'eve.com' },
  { id: 6, name: 'Frank', email: 'frank@example.com', company: { name: 'Beta' }, address: { city: 'LA' }, phone: '103', website: 'frank.com' },
];

const meta: Meta<typeof UserList> = {
  title: 'Components/UserList',
  component: UserList,
};
export default meta;

type Story = StoryObj<typeof UserList>;

export const Default: Story = {
  args: {
    users,
    onUserClick: (user: User) => alert(`Clicked: ${user.name}`),
  },
}; 