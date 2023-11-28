import React from 'react'
import styled from 'styled-components'
import H1Wrapper from './H1Wrapper';
import JobWrapper from './JobWrapper';
import SortWrapper from './SortWrapper';

const RightContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const RightContent: React.FC  = () => {
  
  return (
    <>
      <RightContentWrapper>
        <H1Wrapper />
        <SortWrapper />
      </RightContentWrapper>
      <JobWrapper />
    </>
  )
}

export default RightContent
