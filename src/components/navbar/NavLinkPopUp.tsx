import React from 'react'
import styled from 'styled-components';

interface PopUpProps {
    $depth?: number;
    $length?: string;
    $isClicked: boolean;
    $hasLinks: boolean;
  }

  const PopUp = styled.div<PopUpProps>`
    position: absolute;
    transform: ${props => `translate3d(${props.$length || '0px'}, ${`${props.$depth}px` || '0px'}, 0px)`};
    display: ${props => props.$isClicked && props.$hasLinks ? 'flex' : 'none'};
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 16px;
    background-color: rgb(255, 255, 255);
    outline: rgb(207, 214, 231) solid 1px;
    border-radius: 16px;
    width: max-content;
    padding: 16px 0;
    z-index: 5;

    /* Add arrowhead using ::before pseudo-element */
    &::before {
      content: '';
      position: absolute;
      top: -14px; /* Adjust this value based on your design */
      left: 50%;
      transform: translateX(-50%);
      border-width: 8px; /* Adjust the size of the arrowhead */
      border-style: solid;
      border-color: transparent transparent rgb(255, 255, 255) transparent; /* Adjust the color */
    }
    @media (max-width: 1100px) {
      transform: ${props => `translate3d(-40px, ${`${props.$depth}px` || '0px'}, 0px)`};
    }
    @media (max-width: 900px) {
      transform: ${props => `translate3d(-40px, ${props.$depth ? `${props.$depth - 20}px` : '0px'}, 0px)`};
    }
`;

  const PopUpSpan = styled.span`
      padding: 16px;
      &:hover {
        color: black;
        cursor: pointer;
        background-color: rgb(244, 244, 237);
      }
  `;

interface Props {
    depth: number;
    isClicked: boolean;
    links: string[];
    length: string | undefined;
}

const NavLinkPopUp: React.FC<Props> = ({ depth, isClicked, links, length }) => {
  return (
    <PopUp $depth={depth} $isClicked={isClicked} $hasLinks={links.length > 0} $length={length} data-testid='popUp'>
        {links.map((l, index) => (
        <PopUpSpan 
            key={index}
            onClick={() => alert("Thanks for testing the website. This feature is not implemented.")}
        >{l}</PopUpSpan>
        ))}
    </PopUp>
  )
}

export default NavLinkPopUp
