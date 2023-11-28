import React from 'react'
import styled from 'styled-components';

const SortSpan = styled.span`
    display: flex;
    align-items: center;
  `;

const StyledSvg = styled.svg`
    width: 2em;
    height: 2em;
    display: block;
  `;

interface Props {
    sorting: string;
    isActive: boolean;
}

const SortSelectWrapper: React.FC<Props> = ({ sorting, isActive }) => {

  return (
    <SortSpan>
        {sorting}
        <StyledSvg 
        style={{transform: `rotate(${isActive ? '180deg' : '0deg'})`}} 
        aria-hidden="true" 
        role="img" 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%" 
        fill="none" 
        viewBox="0 0 20 20" 
        aria-labelledby="ChevronBottomIcon-608">
            <title id="ChevronBottomIcon-608">Chevron bottom icon</title>
            <path 
            fill="currentColor" 
            d="M10 12.208a.864.864 0 01-.292-.052.64.64 0 01-.27-.198L5.75 8.292a.668.668 0 01-.177-.49.672.672 0 01.198-.469c.153-.139.312-.205.48-.198a.72.72 0 01.457.198L10 10.646l3.312-3.292a.574.574 0 01.438-.208c.167 0 .326.07.48.208a.66.66 0 01.208.479c0 .18-.07.334-.209.459l-3.667 3.666a.64.64 0 01-.27.198.864.864 0 01-.292.052z"
            ></path>
        </StyledSvg>
    </SortSpan>
  )
}

export default SortSelectWrapper
