import UserModal from './UserModal';
import type { Meta, StoryObj } from '@storybook/react';
import type { User } from './UserList';
import { useState } from 'react';

const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  company: { name: 'Acme' },
  address: { city: 'NY' },
  phone: '123',
  website: 'alice.com',
};

const meta: Meta<typeof UserModal> = {
  title: 'Components/UserModal',
  component: UserModal,
};
export default meta;

type Story = StoryObj<typeof UserModal>;

export const Default: Story = {
  render: function UserModalStory() {
    const [open, setOpen] = useState(true);
    return open ? <UserModal user={user} onClose={() => setOpen(false)} /> : <button onClick={() => setOpen(true)}>Show Modal</button>;
  },
}; 