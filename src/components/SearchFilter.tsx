import React from 'react';

interface SearchFilterProps {
  search: string;
  setSearch: (v: string) => void;
  company: string;
  setCompany: (v: string) => void;
  location: string;
  setLocation: (v: string) => void;
  companyOptions: string[];
  locationOptions: string[];
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  search,
  setSearch,
  company,
  setCompany,
  location,
  setLocation,
  companyOptions,
  locationOptions,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Search by name or email"
        className="input input-bordered px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        aria-label="Search by name or email"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <select
        className="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
        aria-label="All Companies"
        value={company}
        onChange={e => setCompany(e.target.value)}
      >
        <option value="">All Companies</option>
        {companyOptions.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <select
        className="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
        aria-label="All Locations"
        value={location}
        onChange={e => setLocation(e.target.value)}
      >
        <option value="">All Locations</option>
        {locationOptions.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter; 