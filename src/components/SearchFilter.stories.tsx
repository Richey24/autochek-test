import SearchFilter from './SearchFilter';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof SearchFilter> = {
  title: 'Components/SearchFilter',
  component: SearchFilter,
};
export default meta;

type Story = StoryObj<typeof SearchFilter>;

export const Default: Story = {
  render: function SearchFilterStory() {
    const [search, setSearch] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    return (
      <SearchFilter
        search={search}
        setSearch={setSearch}
        company={company}
        setCompany={setCompany}
        location={location}
        setLocation={setLocation}
        companyOptions={['Acme', 'Beta']}
        locationOptions={['NY', 'LA', 'SF', 'TX']}
      />
    );
  },
}; 