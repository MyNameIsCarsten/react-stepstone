import React from 'react'
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../logo.svg';
import Search from '../search/Search';
import NavLink from './NavLink';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

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

  const LogoWrapper = styled.div`
    display: flex;
  `;

  const LinksWrapper = styled.div`
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
    justify-content: center;
  `;

  const Span = styled.span`
    background-color: #0C2577;
    color: #0C2577;
    min-width: 1px;
    @media (max-width: 1200px){
      display: 'none';
      min-width: 0px;
    }
  `;


const Navbar: React.FC  = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const userName = useSelector((state: RootState) => state.app.username)

  const handleNavLinkClick = (title: string) => {
    setActiveLink(activeLink === title ? null : title);
  };
  
  return (
    <div>
      <Wrapper>
        <LogoWrapper>
          <Logo style={{width: '16em', height: '3em'}}/>
        </LogoWrapper>

        <LinksWrapper>
            <NavLink 
              title='Für Arbeitgeber' 
              links={[]} 
              svg='person' 
              depth={160}
              isClicked={activeLink === 'Für Arbeitgeber'}
              onClick={() => handleNavLinkClick('Für Arbeitgeber')}
            />
            <Span></Span>
            <NavLink 
              title='Magazin' 
              links={['Aktuell', 'Gehalt', 'Karriere', 'Berufsleben']} 
              svg='book' 
              depth={160}
              isClicked={activeLink === 'Magazin'}
              onClick={() => handleNavLinkClick('Magazin')}
            />
            <NavLink 
              title='Meine Karriere' 
              links={['Lebenslauf erstellen', 'Beste Arbeitgeber', 'Gehaltsplaner', 'Anschreiben erstellen']} 
              svg='suitcase' 
              depth={160}
              isClicked={activeLink === 'Meine Karriere'}
              onClick={() => handleNavLinkClick('Meine Karriere')}
            />
            <NavLink 
              title='Meine Jobs' 
              links={['Mein Stepstone', 'Gespeicherte Jobs', 'Bewerbungen']} 
              svg='heart' 
              depth={133}
              isClicked={activeLink === 'Meine Jobs'}
              onClick={() => handleNavLinkClick('Meine Jobs')}
            />
            <NavLink 
              title={`${userName}`}
              links={['Mein Profil', 'Kontoeinstellungen', 'Job-Benachrichtigungen', 'Nicht Carsten? Ausloggen']} 
              svg='' 
              depth={160}
              length={'-68px'}
              isClicked={activeLink === `${userName}`}
              onClick={() => handleNavLinkClick(`${userName}`)}
            />
        </LinksWrapper>
      </Wrapper>
      <Search />
    </div>
  );
};

export default Navbar;
