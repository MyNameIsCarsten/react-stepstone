import React, { useState } from 'react'
import styled from 'styled-components';
import NavLink from './NavLink';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';


const LWrapper = styled.div`
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

const LinksWrapper: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string | null>(null);
    const userName = useSelector((state: RootState) => state.jobs.app.username)

    const handleNavLinkClick = (title: string) => {
        setActiveLink(activeLink === title ? null : title);
      };

  return (
    <LWrapper>
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
    </LWrapper>
  )
}

export default LinksWrapper
