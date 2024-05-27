import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search articles..." value={query} onChange={handleChange} />
    </div>
  );
};

export default Search;