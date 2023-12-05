import React, { useState } from 'react'
import styled from 'styled-components';
import { SearchBar, SearchBarWrapper } from '../../styles/CommonStyles';

const StyledSvg = styled.svg`
    max-width: 2em;
    max-height: 2em;
    background: white;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 16px;
    font-size: 16px;
    line-height: 24px;
    min-height: 24px;
    border-radius: 999px 0 0 999px;
    color: rgb(69, 94, 161);
  `;

interface SvgProps {
    $width?: string;
    $round?: boolean;
    $bg?: boolean;
  }

  const SvgButtonWrapper = styled.button<SvgProps>`
    display: flex;
    align-items: center;
    width: ${props => `${props.$width || '2.5em'}`};
    max-height: 2em;
    background: white;
    padding-right: 16px;
    font-size: 16px;
    line-height: 24px;
    min-height: 40px;
    border-radius: ${props => props.$round ? '0 999px 999px 0' : '0 0 0 0'};
    border: none;
    color: rgb(69, 94, 161);
    background-color: ${props => props.$bg ? 'rgb(225, 246, 247)' : ''};
    &:hover {
        cursor: pointer;
    }
    &:focus-visible {
        outline: transparent;
    }
`;

interface Props {
    searchKeyword: string;
    setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const KeywordSearchWrapper: React.FC<Props> = ({ searchKeyword, setSearchKeyword }) => {
    const [searchIsFocused, setSearchIsFocused] = useState<boolean>(false);

  return (
    <SearchBarWrapper 
        className={searchIsFocused ? 'focused' : ''} 
        onBlur={() => setSearchIsFocused(false)} 
        onFocus={() => setSearchIsFocused(true)}
        data-testid='keywordSearch'
        >
        <StyledSvg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 20 20" aria-labelledby="MagnifyingGlassIcon-69"><title id="MagnifyingGlassIcon-69">Magnifying glass icon</title><path fill="currentColor" d="M15.792 16.688L11.083 12a4.76 4.76 0 01-1.489.802 5.21 5.21 0 01-1.615.26c-1.43 0-2.646-.493-3.646-1.479-1-.986-1.5-2.194-1.5-3.625 0-1.417.5-2.628 1.5-3.635 1-1.007 2.215-1.511 3.646-1.511 1.417 0 2.618.5 3.604 1.5.986 1 1.479 2.215 1.479 3.646 0 .57-.083 1.122-.25 1.657a4.153 4.153 0 01-.791 1.447l4.708 4.73a.573.573 0 01.177.448.65.65 0 01-.198.448.647.647 0 01-.468.208.582.582 0 01-.448-.208zm-7.813-4.959c1.042 0 1.927-.368 2.656-1.104.73-.736 1.094-1.625 1.094-2.667 0-1.055-.361-1.955-1.083-2.698-.723-.743-1.612-1.114-2.667-1.114-1.07 0-1.972.371-2.708 1.114-.736.743-1.104 1.643-1.104 2.698 0 1.056.368 1.948 1.104 2.677.736.73 1.639 1.094 2.708 1.094z"></path></StyledSvg>
        <SearchBar 
            name='searchKeyword'
            type="text" 
            placeholder='(Jobtitel, Kompetenz oder Firmenname)'
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            data-testid='searchBarKeyword'
            aria-label="Search for Job, Skill or Company"
            aria-labelledby='Search Keyword'
        />
        <SvgButtonWrapper  
            $round={true}
            onClick={() => setSearchKeyword('')}
            data-testid='keywordSVGdelete'
            aria-label="Clear Job, Skill or Company search term"
        >
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 20 20" aria-labelledby="RemoveIcon-72"><title id="RemoveIcon-72">Remove icon</title><path fill="currentColor" d="M10 10.938l-4.167 4.166a.61.61 0 01-.448.188.645.645 0 01-.468-.209.645.645 0 01-.209-.468c0-.174.07-.33.209-.469L9.062 10 4.896 5.833a.657.657 0 01.021-.937.647.647 0 01.468-.208c.174 0 .33.07.469.208L10 9.062l4.167-4.166a.657.657 0 01.458-.198c.18-.007.34.06.479.198a.648.648 0 01.208.469c0 .173-.07.33-.208.468L10.938 10l4.166 4.167a.647.647 0 01.198.448.61.61 0 01-.198.468.646.646 0 01-.469.209.645.645 0 01-.468-.209L10 10.938z"></path></svg>
        </SvgButtonWrapper>
    </SearchBarWrapper>
  )
}

export default KeywordSearchWrapper
