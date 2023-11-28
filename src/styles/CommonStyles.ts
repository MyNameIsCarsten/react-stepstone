import styled from "styled-components";

interface OptionsWrapperProps {
    $isVisible?: boolean;
  }

export const StyledSvg = styled.svg<OptionsWrapperProps>`
    max-width: 2em;
    max-height: 2em;
    transform: ${props => props.$isVisible ? 'rotate(180deg)' : 'rotate(0deg)'};
    @media (max-width: 900px){
      transform: ${props => props.$isVisible ? 'rotate(0deg)' : 'rotate(180deg)'};
    }
    &:focus-visible {
      outline: transparent;
    }
  `;

export const StyledSvgBasic = styled.svg`
    max-width: 1.5em;
    max-height: 1.5em;
    color: #F56363;
`;

export const SearchBar = styled.input`
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 16px;
    line-height: 24px;
    min-height: 24px;
    border: none;
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

export const SearchBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid transparent;
    &.focused {
        border: 3px solid #87DAE0;
        border-radius: 999px;
    }
`; 
