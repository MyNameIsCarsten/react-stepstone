import React from 'react'
import styled from 'styled-components'
import JobCard from '../jobcard/JobCard';

const RightContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const JobWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const H1 = styled.h1`
    color: #0C2577;
    font-size: 18px;
    font-weight: 700;
    text-align: left;
`;

const LinkWrapper = styled.a`
    color: rgb(0, 153, 176);
    cursor: pointer;
`;

const ButtonWrapper = styled.button`
    border: none;
    font-size: 14px;
    font-weight: bold;
    line-height: 24px;
    padding-left: 16px;
    padding-right: 16px;
    text-decoration: none;
    background-color: rgb(225, 246, 247);
    color: rgb(12, 37, 119);
    border-radius: 999px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledSpan = styled.span`
    display: flex;
    align-items: center;
  `;

const StyledSvg = styled.svg`
    max-width: 2em;
    max-height: 2em
  `;

const RightContent: React.FC  = () => {
  return (
    <>
      <RightContentWrapper>
        <H1>41 Treffer für <LinkWrapper>React</LinkWrapper> Jobs in <LinkWrapper>Minden</LinkWrapper> im Umkreis von 75 km</H1>
        <ButtonWrapper>
          <StyledSpan>
              Datum
              <StyledSvg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 20 20" aria-labelledby="ChevronBottomIcon-608"><title id="ChevronBottomIcon-608">Chevron bottom icon</title><path fill="currentColor" d="M10 12.208a.864.864 0 01-.292-.052.64.64 0 01-.27-.198L5.75 8.292a.668.668 0 01-.177-.49.672.672 0 01.198-.469c.153-.139.312-.205.48-.198a.72.72 0 01.457.198L10 10.646l3.312-3.292a.574.574 0 01.438-.208c.167 0 .326.07.48.208a.66.66 0 01.208.479c0 .18-.07.334-.209.459l-3.667 3.666a.64.64 0 01-.27.198.864.864 0 01-.292.052z"></path></StyledSvg>
          </StyledSpan>
      </ButtonWrapper>
      </RightContentWrapper>
      <JobWrapper>
        <JobCard />
      </JobWrapper>
    </>
  )
}

export default RightContent
