import styled from 'styled-components';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background: url('./background.svg');
  background-position: top center;
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 1em 1.5em;
  /* Additional styles for the header if needed */
`;

function Home() {
  return (
    <>
      <HeaderWrapper>
        <Navbar />
      </HeaderWrapper>
      <p>Hello World!</p>
    </>
  );
}

function App() {
  return (
    <div className="App">
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
