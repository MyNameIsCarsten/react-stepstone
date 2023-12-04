import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { applyFilter, setSearch } from '../../store/jobsSlice';
import KeywordSearchWrapper from './KeywordSearchWrapper';
import LocationSearchWrapper from './LocationSearchWrapper';

const SearchbarsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    padding-top: 16px;
    @media (max-width: 900px){
        flex-direction: column;
        width: 100%;
      }
`; 

const ButtonWrapper = styled.button`
    border: none;
    font-size: 16px;
    line-height: 24px;
    padding-left: 16px;
    padding-right: 16px;
    text-decoration: none;
    background-color: #0099B0;
    color: white;
    border-radius: 999px;
    padding: 0.4em 2em;
    cursor: pointer;
    &:focus-visible {
        outline: transparent;
    }
`;

const Search: React.FC  = () => {
    
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [searchLocation, setSearchLocation] = useState<string>('');
    const [searchDistance, setSearchDistance] = useState<number>(5);
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(setSearch({searchKeyword, searchLocation, searchDistance}));
        dispatch(applyFilter());
    };

  return (
    <SearchbarsWrapper data-testid='searchBarsWrapper'>
        <KeywordSearchWrapper searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword}/>
        <LocationSearchWrapper 
            searchLocation={searchLocation} 
            setSearchLocation={setSearchLocation} 
            searchDistance={searchDistance}
            setSearchDistance={setSearchDistance}
        />
        <ButtonWrapper onClick={handleSearch} data-testid='searchBarButton'>Jobs finden</ButtonWrapper>
    </SearchbarsWrapper>
  )
}

export default Search
