import React from 'react'
import styled from 'styled-components';
import './App.css';
import Navbar from './components/navbar/Navbar';
import RightContent from './components/rightcontent/RightContent';
import LeftContent from './components/leftcontent/LeftContent';

const HeaderWrapper = styled.header`
  background: rgb(248,179,162);
  background: linear-gradient(69deg, rgba(248,179,162,1) 0%, rgba(108,219,223,1) 100%);
  
  background-position: top center;
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 1em 1.5em;
  /* Additional styles for the header if needed */
`;

const ContentWrapper = styled.div`
  display: flex;
  margin: auto;
  margin: 1.5em;
  gap: 2em;
  @media (max-width: 900px){
    flex-direction: column;
  }
`;

const LeftWrapper = styled.aside`
  flex: 6;
`;

const RightWrapper = styled.main`
  flex: 18;
`;

const App: React.FC  = () => {
  return (
    <>
      <HeaderWrapper>
        <Navbar />
      </HeaderWrapper>
      <ContentWrapper>
        <LeftWrapper>
          <LeftContent/>
        </LeftWrapper>
        <RightWrapper>
          <RightContent />
        </RightWrapper>
      </ContentWrapper>
    </>
  );
}

export default App;
