import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import ThemeToggle from './components/ThemeToggle';
import SearchFilter from './components/SearchFilter';
import UserChart from './components/UserChart';
import UserList, { type User } from './components/UserList';
import UserModal from './components/UserModal';

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

function App() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [search, setSearch] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const { data: users = [], isLoading, isError, error } = useQuery<User[], Error>({ queryKey: ['users'], queryFn: fetchUsers });

  const companyOptions = useMemo(() => Array.from(new Set(users.map(u => u.company.name))), [users]);
  const locationOptions = useMemo(() => Array.from(new Set(users.map(u => u.address.city))), [users]);

  const filteredUsers = useMemo(() => {
    return users.filter(u =>
      (!search || u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())) &&
      (!company || u.company.name === company) &&
      (!location || u.address.city === location)
    );
  }, [users, search, company, location]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <header className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <ThemeToggle />
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <SearchFilter
              search={search}
              setSearch={setSearch}
              company={company}
              setCompany={setCompany}
              location={location}
              setLocation={setLocation}
              companyOptions={companyOptions}
              locationOptions={locationOptions}
            />
          </div>
        </section>
        <section className='mb-7'>
          <div className="w-full">
            <UserChart />
          </div>
        </section>
        <section>
          {isLoading ? (
            <div className="p-4">Loading...</div>
          ) : isError ? (
            <div className="p-4 text-red-500">{error?.message}</div>
          ) : (
            <UserList users={filteredUsers} onUserClick={setSelectedUser} />
          )}
        </section>
      </main>
      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}

export default App;
