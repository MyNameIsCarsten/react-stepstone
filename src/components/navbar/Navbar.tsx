import styled, { css } from 'styled-components';
import { ReactComponent as Logo } from '../../logo.svg';
import Search from '../search/Search';
import NavLink from './NavLink';
import { useState } from 'react';

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

  interface StyledLinkProps {
    $mobile?: boolean;
  }

  const StyledLink = styled.button<StyledLinkProps>`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    color: #0C2577;
    text-decoration: none;
    @media (max-width: 1200px) {
      display: flex; /* Default display for larger screens */
  
      ${(props) =>
        props.$mobile &&
        css`
          display: none; /* Hide for mobile screens if $mobile prop is provided */
        `}
    }
  `;

  const UserInitial = styled.span`
      background-color: white;
      width: 1.7em;
      height: 2rem;
      border-radius: 999px;
      color: rgb(167, 179, 211);
      display: flex;
      justify-content: center;
      align-items: center;
  `;

  const PopUpTrigger = styled.button`
  display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    color: #0C2577;
    text-decoration: none;
    &:hover {
        color: black;
        cursor: pointer;
    }
  `;

  interface PopUpProps {
    $depth?: number;
    $length?: string;
  }

  const PopUp = styled.div<PopUpProps>`
    position: absolute;
    transform: ${props => `translate3d(${props.$length || '0px'}, ${props.$depth || '0px'}, 0px)`};
    display: none; /* show (flex) or hide (none) pop ups */
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 16px;
    background-color: rgb(255, 255, 255);
    outline: rgb(207, 214, 231) solid 1px;
    border-radius: 16px;
    width: max-content;
    padding: 16px 0;
`;

  const PopUpSpan = styled.span`
      padding: 16px;
      &:hover {
        color: black;
        cursor: pointer;
        background-color: rgb(244, 244, 237);
      }
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
              title='Carsten' 
              links={['Mein Profil', 'Kontoeinstellungen', 'Job-Benachrichtigungen', 'Nicht Carsten? Ausloggen']} 
              svg='' 
              depth={160}
              length={'-68px'}
              isClicked={activeLink === 'Carsten'}
              onClick={() => handleNavLinkClick('Carsten')}
            />
        </LinksWrapper>
      </Wrapper>
      <Search />
    </div>
  );
};

export default Navbar;
