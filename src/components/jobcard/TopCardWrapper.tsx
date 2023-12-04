import React from 'react'
import styled from 'styled-components';
import logo1 from '../../company.png';
import { StyledSvgBasic } from '../../styles/CommonStyles';

const TCardWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    @media (max-width: 500px){
        flex-direction: column-reverse;
      }
`;

const TitleWrapper = styled.div`
    display:flex;
    flex-direction: column;
`;

const H2 = styled.h2`
  color: rgb(12, 37, 119);
  text-align: left;
  font-size: 22px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 650px;
  line-height: 30px;
  @media (max-width: 1100px){
    width: 500px;
  }
  @media (max-width: 700px){
    width: 400px;
  }
  @media (max-width: 600px){
    width: 300px;
  }
  &:hover {
    cursor:pointer;
    text-decoration: underline;
    }

`;

const LogoWrapper = styled.img`
    width: 64px;
    height: 64px;
    border: 2px solid #CFD6E7;
    border-radius: 16px;
    &:hover {
        cursor:pointer;
        border: 2px solid #006981;
    }
    @media (max-width: 500px){
        margin: auto;
      }
    
`;

const SvgContentWrapper = styled.div`
    display:flex;
    gap: 5px;
`;


type Props = {
    title: string;
    employer: string;
}

const TopCardWrapper: React.FC<Props>  = ({title, employer}) => {
  return (
    <TCardWrapper>
        <TitleWrapper>
            <H2 onClick={() => alert("Thanks for testing the website. This feature is not implemented.")}>{title}</H2>
            <SvgContentWrapper>
                <StyledSvgBasic data-genesis-element="BriefcaseIcon" aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M6.958 5.458V4.083c0-.444.153-.819.459-1.125A1.53 1.53 0 0 1 8.542 2.5h2.916c.445 0 .82.153 1.125.458.306.306.459.681.459 1.125v1.375h3.291c.445 0 .82.153 1.125.459.306.305.459.68.459 1.125V15.5c0 .445-.153.82-.459 1.125a1.53 1.53 0 0 1-1.125.458H3.667a1.53 1.53 0 0 1-1.125-.458 1.528 1.528 0 0 1-.459-1.125V7.042c0-.445.153-.82.459-1.125.305-.306.68-.459 1.125-.459h3.291Zm1.334 0h3.416V4.083c0-.055-.028-.11-.083-.166-.055-.056-.111-.084-.167-.084H8.542c-.056 0-.112.028-.167.084-.055.055-.083.11-.083.166v1.375Zm8.291 6.896h-4.416v.708a.76.76 0 0 1-.24.553.782.782 0 0 1-.573.239H8.646a.782.782 0 0 1-.573-.239.76.76 0 0 1-.24-.553v-.708H3.417V15.5c0 .055.028.111.083.167.055.055.111.083.167.083h12.666c.056 0 .112-.028.167-.083.055-.056.083-.112.083-.167v-3.146Zm-7.416.167h1.666v-1.667H9.167v1.667Zm-5.75-1.5h4.416v-.709c0-.208.08-.392.24-.552a.78.78 0 0 1 .573-.239h2.708c.223 0 .414.08.573.239.16.16.24.344.24.552v.709h4.416V7.042c0-.056-.028-.112-.083-.167-.055-.055-.111-.083-.167-.083H3.667c-.056 0-.112.028-.167.083-.055.055-.083.111-.083.167v3.979Z"></path></StyledSvgBasic>
                <span>{employer}</span>
            </SvgContentWrapper>
        </TitleWrapper>
        <LogoWrapper src={logo1} alt="Logo" />
    </TCardWrapper>
  )
}

export default TopCardWrapper
