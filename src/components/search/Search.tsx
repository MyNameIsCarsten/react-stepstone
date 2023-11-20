import React, { useState } from 'react'
import styled from 'styled-components';

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

const SearchbarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid transparent;
    &.focused {
        border: 3px solid #87DAE0;
        border-radius: 999px;
    }
`; 

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

const SearchBarWrapper = styled.input`
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 16px;
    line-height: 24px;
    min-height: 24px;
    border: none;
    color: rgb(12, 37, 119);
    &:focus {
        outline: none; 
        border: transparent;
    }
    @media (max-width: 900px){
        width: 400px;
      }
    @media (max-width: 600px){
        width: 200px;
      }
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
`;

const Search: React.FC  = () => {
    const [searchIsFocused, setSearchIsFocused] = useState<boolean>(false);
    const [geoIsFocused, setGeoIsFocused] = useState<boolean>(false);

  return (
    <SearchbarsWrapper>
        <SearchbarWrapper className={searchIsFocused ? 'focused' : ''} onBlur={() => setSearchIsFocused(false)} onFocus={() => setSearchIsFocused(true)}>
            <StyledSvg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 20 20" aria-labelledby="MagnifyingGlassIcon-69"><title id="MagnifyingGlassIcon-69">Magnifying glass icon</title><path fill="currentColor" d="M15.792 16.688L11.083 12a4.76 4.76 0 01-1.489.802 5.21 5.21 0 01-1.615.26c-1.43 0-2.646-.493-3.646-1.479-1-.986-1.5-2.194-1.5-3.625 0-1.417.5-2.628 1.5-3.635 1-1.007 2.215-1.511 3.646-1.511 1.417 0 2.618.5 3.604 1.5.986 1 1.479 2.215 1.479 3.646 0 .57-.083 1.122-.25 1.657a4.153 4.153 0 01-.791 1.447l4.708 4.73a.573.573 0 01.177.448.65.65 0 01-.198.448.647.647 0 01-.468.208.582.582 0 01-.448-.208zm-7.813-4.959c1.042 0 1.927-.368 2.656-1.104.73-.736 1.094-1.625 1.094-2.667 0-1.055-.361-1.955-1.083-2.698-.723-.743-1.612-1.114-2.667-1.114-1.07 0-1.972.371-2.708 1.114-.736.743-1.104 1.643-1.104 2.698 0 1.056.368 1.948 1.104 2.677.736.73 1.639 1.094 2.708 1.094z"></path></StyledSvg>
            <SearchBarWrapper type="text" placeholder="(Jobtitel, Kompetenz oder Firmenname)"/>
            <SvgButtonWrapper  $round={true}>
                <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 20 20" aria-labelledby="RemoveIcon-72"><title id="RemoveIcon-72">Remove icon</title><path fill="currentColor" d="M10 10.938l-4.167 4.166a.61.61 0 01-.448.188.645.645 0 01-.468-.209.645.645 0 01-.209-.468c0-.174.07-.33.209-.469L9.062 10 4.896 5.833a.657.657 0 01.021-.937.647.647 0 01.468-.208c.174 0 .33.07.469.208L10 9.062l4.167-4.166a.657.657 0 01.458-.198c.18-.007.34.06.479.198a.648.648 0 01.208.469c0 .173-.07.33-.208.468L10.938 10l4.166 4.167a.647.647 0 01.198.448.61.61 0 01-.198.468.646.646 0 01-.469.209.645.645 0 01-.468-.209L10 10.938z"></path></svg>
            </SvgButtonWrapper>
        </SearchbarWrapper>

        <SearchbarWrapper className={geoIsFocused ? 'focused' : ''} onBlur={() => setGeoIsFocused(false)} onFocus={() => setGeoIsFocused(true)}>
            <StyledSvg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 20 20" aria-labelledby="MapMarkerIcon-81"><title id="MapMarkerIcon-81">Map marker icon</title><path fill="currentColor" d="M9.998 9.833c.417 0 .77-.146 1.062-.437.292-.292.438-.646.438-1.063 0-.417-.146-.77-.438-1.062a1.444 1.444 0 00-1.062-.438c-.417 0-.77.146-1.062.438a1.444 1.444 0 00-.438 1.062c0 .417.146.771.438 1.063.291.291.645.437 1.062.437zm0 6.542c1.708-1.514 2.99-2.955 3.844-4.323.854-1.368 1.281-2.552 1.281-3.552 0-1.583-.493-2.861-1.479-3.833-.986-.973-2.201-1.459-3.646-1.459-1.445 0-2.66.486-3.646 1.459-.986.972-1.479 2.25-1.479 3.833 0 1 .427 2.184 1.281 3.552.855 1.368 2.136 2.809 3.844 4.323zm0 1.458a.967.967 0 01-.604-.187c-1.972-1.805-3.44-3.462-4.406-4.969C4.023 11.17 3.54 9.778 3.54 8.5c0-2.028.646-3.639 1.937-4.833 1.292-1.195 2.799-1.792 4.521-1.792s3.229.597 4.521 1.792c1.291 1.194 1.937 2.805 1.937 4.833 0 1.278-.483 2.67-1.448 4.177-.965 1.507-2.434 3.164-4.406 4.969a.732.732 0 01-.281.146 1.266 1.266 0 01-.323.041z"></path></StyledSvg>
            <SearchBarWrapper type="text" placeholder="(Ort oder 5-stellige PLZ)"/>
            <SvgButtonWrapper>
                <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 20 20" aria-labelledby="RemoveIcon-72"><title id="RemoveIcon-72">Remove icon</title><path fill="currentColor" d="M10 10.938l-4.167 4.166a.61.61 0 01-.448.188.645.645 0 01-.468-.209.645.645 0 01-.209-.468c0-.174.07-.33.209-.469L9.062 10 4.896 5.833a.657.657 0 01.021-.937.647.647 0 01.468-.208c.174 0 .33.07.469.208L10 9.062l4.167-4.166a.657.657 0 01.458-.198c.18-.007.34.06.479.198a.648.648 0 01.208.469c0 .173-.07.33-.208.468L10.938 10l4.166 4.167a.647.647 0 01.198.448.61.61 0 01-.198.468.646.646 0 01-.469.209.645.645 0 01-.468-.209L10 10.938z"></path></svg>
            </SvgButtonWrapper>
            <SvgButtonWrapper $width='3.5em' $bg={true} $round={true}>
                75
                <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 20 20" aria-labelledby="ChevronBottomIcon-608"><title id="ChevronBottomIcon-608">Chevron bottom icon</title><path fill="currentColor" d="M10 12.208a.864.864 0 01-.292-.052.64.64 0 01-.27-.198L5.75 8.292a.668.668 0 01-.177-.49.672.672 0 01.198-.469c.153-.139.312-.205.48-.198a.72.72 0 01.457.198L10 10.646l3.312-3.292a.574.574 0 01.438-.208c.167 0 .326.07.48.208a.66.66 0 01.208.479c0 .18-.07.334-.209.459l-3.667 3.666a.64.64 0 01-.27.198.864.864 0 01-.292.052z"></path></svg>
            </SvgButtonWrapper>
        </SearchbarWrapper>
        <ButtonWrapper>
            Jobs finden
        </ButtonWrapper>
    </SearchbarsWrapper>
  )
}

export default Search
