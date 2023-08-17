import React, { useState } from 'react';
import { SearchBarProps } from '../../types';
import { SearchBarContainer, SearchInput, SubmitButton } from '..';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [term, setTerm] = useState<string>('');

  const handleSearch = () => {
    onSearch(term);
  };

  return (
    <SearchBarContainer>
      <SearchInput 
        type="text" 
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder="Search notes..."
      />
      <SubmitButton onClick={handleSearch}>Search</SubmitButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
