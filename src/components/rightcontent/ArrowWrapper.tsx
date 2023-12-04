import React from 'react'
import styled from 'styled-components';

interface ArrowProps {
    $isClicked: boolean;
  }
const AWrapper = styled.svg<ArrowProps>`
    transform: translate3d(36px, -35px, 0px);
    z-index: 10;
    display: block; /* Ensure the SVG is always displayed */
    visibility: ${props => props.$isClicked ? 'visible' : 'hidden'};
    height: 20px;
    position: absolute;
  `;

interface Props {
    isActive: boolean;
}

const ArrowWrapper: React.FC<Props> = ({ isActive }) => {
  return (
    <AWrapper $isClicked={isActive} viewBox="0 0 30 30" data-testid='arrowWrapper'>
        <path className="stroke" style={{ fill: 'rgb(207, 214, 231)'}} d="M23.7,27.1L17,19.9C16.5,19.3,15.8,19,15,19s-1.6,0.3-2.1,0.9l-6.6,7.2C5.3,28.1,3.4,29,2,29h26 C26.7,29,24.6,28.1,23.7,27.1z"></path>
        <path className="fill" style={{ fill: 'rgb(255, 255, 255)'}} d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path>
    </AWrapper>
  )
}

export default ArrowWrapper
