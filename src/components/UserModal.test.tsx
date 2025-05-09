import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserModal from './UserModal';
import type { User } from './UserList';
import { vi } from 'vitest';

describe('UserModal', () => {
  const user: User = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
    company: { name: 'Acme' },
    address: { city: 'NY' },
    phone: '123',
    website: 'alice.com',
  };

  it('renders user details', () => {
    render(<UserModal user={user} onClose={() => {}} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('alice@example.com')).toBeInTheDocument();
    expect(screen.getByText('Acme')).toBeInTheDocument();
    expect(screen.getByText('NY')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    render(<UserModal user={user} onClose={onClose} />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(onClose).toHaveBeenCalled();
  });
}); 