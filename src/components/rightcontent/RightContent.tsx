import React, { lazy, Suspense  } from 'react'
import styled from 'styled-components'
import H1Wrapper from './H1Wrapper';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const JobWrapper = lazy( () =>  import ('./JobWrapper'));
const SortWrapper = lazy( () =>  import ('./SortWrapper'));

const RightContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const RightContent: React.FC  = () => {

  const searchKeyword = useSelector((state: RootState) => state.jobs.app.searchKeyword)
  const searchLocation = useSelector((state: RootState) => state.jobs.app.searchLocation)

  
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RightContentWrapper>
          <H1Wrapper />
          {searchKeyword !== '' || searchLocation !== '' ? <SortWrapper /> : null}
        </RightContentWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          {searchKeyword !== '' || searchLocation !== '' ? <JobWrapper /> : null}
        </Suspense>
      </Suspense>
    </>
  )
}

export default RightContent
