import React from 'react'
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../logo.svg';

const LWrapper = styled.div`
    display: flex;
  `;

const LogoWrapper: React.FC  = () => {
  return (
    <LWrapper data-testid='logoWrapper'>
        <Logo style={{width: '16em', height: '3em'}}/>
    </LWrapper>
  )
}

export default LogoWrapper
