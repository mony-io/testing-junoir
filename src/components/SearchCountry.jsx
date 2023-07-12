import React, { useState } from 'react';

const SearchCountry = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const searchHandler = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <div onChange={searchHandler} className="my-6">
      <input
        type="text"
        placeholder="Search a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-9 py-3 border outline-none"
      />
    </div>
  );
};

export default SearchCountry;
