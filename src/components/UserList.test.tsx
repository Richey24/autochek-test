import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList, { type User } from './UserList';
import { vi } from 'vitest';

describe('UserList', () => {
  const users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', company: { name: 'Acme' }, address: { city: 'NY' }, phone: '123', website: 'alice.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com', company: { name: 'Beta' }, address: { city: 'LA' }, phone: '456', website: 'bob.com' },
    { id: 3, name: 'Carol', email: 'carol@example.com', company: { name: 'Acme' }, address: { city: 'SF' }, phone: '789', website: 'carol.com' },
    { id: 4, name: 'Dan', email: 'dan@example.com', company: { name: 'Beta' }, address: { city: 'TX' }, phone: '101', website: 'dan.com' },
    { id: 5, name: 'Eve', email: 'eve@example.com', company: { name: 'Acme' }, address: { city: 'NY' }, phone: '102', website: 'eve.com' },
    { id: 6, name: 'Frank', email: 'frank@example.com', company: { name: 'Beta' }, address: { city: 'LA' }, phone: '103', website: 'frank.com' },
  ];

  it('renders a paginated list of users', () => {
    render(<UserList users={users} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Eve')).toBeInTheDocument();
    // Frank should not be on the first page
    expect(screen.queryByText('Frank')).not.toBeInTheDocument();
  });

  it('navigates to next page', () => {
    render(<UserList users={users} />);
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Frank')).toBeInTheDocument();
    expect(screen.queryByText('Alice')).not.toBeInTheDocument();
  });

  it('calls onUserClick when a user is clicked', () => {
    const onUserClick = vi.fn();
    render(<UserList users={users} onUserClick={onUserClick} />);
    fireEvent.click(screen.getByText('Alice'));
    expect(onUserClick).toHaveBeenCalledWith(users[0]);
  });
}); 