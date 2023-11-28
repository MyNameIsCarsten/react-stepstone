import React from 'react'
import styled from 'styled-components';

const PopUpTrigger = styled.button`
display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  color: #0C2577;
  text-decoration: none;
  &:hover {
      color: black;
      cursor: pointer;
  }
`;

const StyledSvg = styled.svg`
    max-width: 2em;
    max-height: 2em;
    @media (max-width: 1100px){
        display: none;
    }
`;

interface Props {
    path: React.JSX.Element | null;
    title: string;
}

const NavLinkTitle: React.FC<Props> = ({ path, title }) => {
  return (
    <PopUpTrigger>
        <StyledSvg
        aria-hidden="true"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width={path !== null ? "100%" : "0%"}
        height="100%"
        fill="none"
        viewBox="0 0 20 20"
        aria-labelledby="StudyOwlIcon-1174"
        >
        <title className="NavSVG"></title>
        {path !== null ? path : ''}
        </StyledSvg>
        {title}
    </PopUpTrigger>
  )
}

export default NavLinkTitle
