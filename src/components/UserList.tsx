import React, { useState } from 'react';

export interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
  address: { city: string };
  phone: string;
  website: string;
}

const USERS_PER_PAGE = 5;

const UserList: React.FC<{ users: User[]; onUserClick?: (user: User) => void }> = ({ users, onUserClick }) => {
  const [page, setPage] = useState(1);
  const start = (page - 1) * USERS_PER_PAGE;
  const paginated = users.slice(start, start + USERS_PER_PAGE);
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Company</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((user: User) => (
            <tr
              key={user.id}
              className="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              tabIndex={0}
              aria-label={`View details for ${user.name}`}
              onClick={() => onUserClick?.(user)}
              onKeyDown={(e) => e.key === 'Enter' && onUserClick?.(user)}
            >
              <td className="py-2 font-medium">{user.name}</td>
              <td className="py-2">{user.email}</td>
              <td className="py-2">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList; 