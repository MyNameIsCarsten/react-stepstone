import styled from 'styled-components';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RightContent from './components/rightcontent/RightContent';
import LeftContent from './components/leftcontent/LeftContent';

const HeaderWrapper = styled.header`
  background: url('./background.svg');
  background-position: top center;
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 1em 1.5em;
  /* Additional styles for the header if needed */
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 1140px;
  margin: auto;
  padding: 1.5em;
  gap: 2em;
`;

const LeftWrapper = styled.div`
  flex: 6;
`;

const RightWrapper = styled.div`
  flex: 18;
`;

function Home() {
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

function App() {
  return (
    <div className="App" style={{minWidth: 420}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
