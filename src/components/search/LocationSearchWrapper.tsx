import React, { useState } from 'react'
import styled from 'styled-components';
import DistanceSelectWrapper from './DistanceSelectWrapper';
import { SearchBar, SearchBarWrapper } from '../../styles/CommonStyles';


const StyledSvg = styled.svg`
    max-width: 2em;
    height: 2em;
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
    searchLocation: string;
    setSearchLocation: React.Dispatch<React.SetStateAction<string>>;
    searchDistance: number;
    setSearchDistance: React.Dispatch<React.SetStateAction<number>>;
}

const LocationSearchWrapper: React.FC<Props> = ({ searchLocation, setSearchLocation, searchDistance, setSearchDistance }) => {
    const [geoIsFocused, setGeoIsFocused] = useState<boolean>(false);


  return (
    <SearchBarWrapper 
        className={geoIsFocused ? 'focused' : ''} 
        onBlur={() => setGeoIsFocused(false)} 
        onFocus={() => setGeoIsFocused(true)}
        data-testid='locationSearchBar'
        >
        <StyledSvg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 20 20" aria-labelledby="MapMarkerIcon-81"><title id="MapMarkerIcon-81">Map marker icon</title><path fill="currentColor" d="M9.998 9.833c.417 0 .77-.146 1.062-.437.292-.292.438-.646.438-1.063 0-.417-.146-.77-.438-1.062a1.444 1.444 0 00-1.062-.438c-.417 0-.77.146-1.062.438a1.444 1.444 0 00-.438 1.062c0 .417.146.771.438 1.063.291.291.645.437 1.062.437zm0 6.542c1.708-1.514 2.99-2.955 3.844-4.323.854-1.368 1.281-2.552 1.281-3.552 0-1.583-.493-2.861-1.479-3.833-.986-.973-2.201-1.459-3.646-1.459-1.445 0-2.66.486-3.646 1.459-.986.972-1.479 2.25-1.479 3.833 0 1 .427 2.184 1.281 3.552.855 1.368 2.136 2.809 3.844 4.323zm0 1.458a.967.967 0 01-.604-.187c-1.972-1.805-3.44-3.462-4.406-4.969C4.023 11.17 3.54 9.778 3.54 8.5c0-2.028.646-3.639 1.937-4.833 1.292-1.195 2.799-1.792 4.521-1.792s3.229.597 4.521 1.792c1.291 1.194 1.937 2.805 1.937 4.833 0 1.278-.483 2.67-1.448 4.177-.965 1.507-2.434 3.164-4.406 4.969a.732.732 0 01-.281.146 1.266 1.266 0 01-.323.041z"></path></StyledSvg>
        <SearchBar 
            name='searchLocation'
            type="text" 
            placeholder="(Ort oder 5-stellige PLZ)"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            data-testid='searchBarLocation'
            aria-label="Search for City or Location"
            aria-labelledby='Search City'
        />
        <SvgButtonWrapper
            onClick={() => setSearchLocation('')}
            data-testid='locationSVGdelete'
            aria-label="Clear City or Location search term"
        >
            <svg 
                aria-hidden="true" 
                role="img" 
                xmlns="http://www.w3.org/2000/svg" 
                width="100%" 
                height="100%" 
                fill="none" 
                viewBox="0 0 20 20" 
                aria-labelledby="RemoveIcon-72">
                <title 
                    id="RemoveIcon-72">Remove icon
                </title>
                <path 
                    fill="currentColor" 
                    d="M10 10.938l-4.167 4.166a.61.61 0 01-.448.188.645.645 0 01-.468-.209.645.645 0 01-.209-.468c0-.174.07-.33.209-.469L9.062 10 4.896 5.833a.657.657 0 01.021-.937.647.647 0 01.468-.208c.174 0 .33.07.469.208L10 9.062l4.167-4.166a.657.657 0 01.458-.198c.18-.007.34.06.479.198a.648.648 0 01.208.469c0 .173-.07.33-.208.468L10.938 10l4.166 4.167a.647.647 0 01.198.448.61.61 0 01-.198.468.646.646 0 01-.469.209.645.645 0 01-.468-.209L10 10.938z"
                ></path>
            </svg>
        </SvgButtonWrapper>
        <SvgButtonWrapper $width='5em' $bg={true} $round={true}>
            <DistanceSelectWrapper searchDistance={searchDistance} setSearchDistance={setSearchDistance}/>
        </SvgButtonWrapper>
    </SearchBarWrapper>
  )
}

export default LocationSearchWrapper
