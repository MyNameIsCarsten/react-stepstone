import React from 'react'
import styled from 'styled-components';
import Search from '../search/Search';
import LogoWrapper from './LogoWrapper';
import LinksWrapper from './LinksWrapper';

const Wrapper = styled.nav`
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #0C2577;
    gap: 10px;
    @media (max-width: 900px) {
      flex-direction: column;
    }
  `;

const Navbar: React.FC  = () => {
   
  return (
    <>
      <Wrapper>
        <LogoWrapper />
        <LinksWrapper />
      </Wrapper>
      <Search />
    </>
  );
};

export default Navbar;
